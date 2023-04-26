<template>
  <div data-app>
    <alert
      :text="textAlert"
      :event="alertEvent"
      :show="showAlert"
      @show-alert="updateAlert($event)"
      class="mb-2"
    />

    <v-data-table
      :headers="headers"
      :items="registeredRecords"
      :options.sync="options"
      :server-items-length="total"
      :footer-props="{ itemsPerPageOptions: [50] }"
      :items-per-page="take"
      @update:options="updatePagination"
      :page.sync="actualPage"
      item-key="employee_id"
      class="elevation-3 shadow p-3 mt-3"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Acciones de Personal</v-toolbar-title>
        </v-toolbar>
        <v-toolbar flat>
          <div class="container-fluid pb-5">
            <v-row>
              <v-tabs grow background-color="transparent">
                <v-tab @click="filterRecords('Solicitada')">Solicitadas</v-tab>
                <v-tab @click="filterRecords('Observada')">Observadas</v-tab>
                <v-tab @click="filterRecords('Rechazada')">Rechazadas</v-tab>
                <v-tab @click="filterRecords('Aprobada')">Aprobadas</v-tab>
                <v-tab @click="filterRecords('Procesada')">Procesadas</v-tab>
              </v-tabs>
            </v-row>
          </div>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
              v-bind="attrs"
              v-on="on"
            >
              mdi-eye
            </v-icon>
          </template>
          <span>Ver Acción de Personal</span>
        </v-tooltip>
      </template>

      <template v-slot:no-data>
        <a
          href="#"
          class="btn btn-normal-secondary no-decoration"
          @click="loadMore"
        >
          Reiniciar
        </a>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import personnelActionApi from "../apis/personnelActionApi";
import StatusApi from "../apis/StatusApi";
import axios from "axios";

export default {
  data: () => ({
    headers: [
      { text: "FECHA DE SOLICITUD", value: "date_request_created" },
      { text: "JUSTIFICACIÓN", value: "justification_name" },
      { text: "ACCIÓN", value: "actions", sortable: false },
    ],
    textAlert: "",
    alertEvent: "success",
    showAlert: false,
    filter: "Solicitada",
    registeredRecords: [],
    registeredRecordSelected: "",
    numberItemsToAdd: 50,
    total: 0,
    loadMoreItems: false,
    options: {},
    actualPage: 1,
    expanded: [],
    skip: 0,
    take: 50,
    counter: 0,
  }),

  created() {
    // this.initialize();
  },

  watch: {
    options: {
      handler() {
        this.loadMore();
      },
      deep: false,
    },
  },

  methods: {
    async loadMore(filter = "Solicitada") {
      this.filter = filter;
      if (this.actualPage == 1) {
        this.actualPage = 1;
        this.skip = 0;
        this.take = this.numberItemsToAdd;
      }
      const res = await axios
        .get("api/personnelAction/userPersonnelActions", {
          params: { skip: this.skip, take: this.take, filter: filter },
        })
        .catch((error) => {
          this.updateAlert(
            true,
            "No fue posible obtener los registros.",
            "fail"
          );
          this.redirectSessionFinished = lib.verifySessionFinished(
            error.response.status,
            401
          );
        });

      this.registeredRecords = res.data.registeredRecords;
      this.total = res.data.total;
    },

    updatePagination(pagination) {
      if (pagination.page != 1) {
        // Si la página es distinta de 1, verifica los datos a tomar y quitar
        if (pagination.page <= this.actualPage) {
          //Si la página es menor que la actual, se está retrocediendo
          this.take = this.skip;
          this.skip = this.take - this.numberItemsToAdd;
        } else {
          //Sino, se está aumentando en la cantidad de usuarios por ver
          this.skip = this.take;
          this.take += this.numberItemsToAdd;
        }
      } else {
        //Si es igual a cero, es la vista inicial
        this.skip = 0;
        this.take = this.numberItemsToAdd;
      }
      this.actualPage = pagination.page;
      //   console.log(this.skip, this.take);
    },

    async filterRecords(filter = "Solicitada") {
      this.filter = filter;

      const res = await axios
        .get("api/personnelAction/userPersonnelActions", {
          params: { skip: this.skip, take: this.take, filter: filter },
        })
        .catch((error) => {
          this.updateAlert(
            true,
            "No fue posible obtener los registros.",
            "fail"
          );
          this.redirectSessionFinished = lib.verifySessionFinished(
            error.response.status,
            401
          );
        });

      this.registeredRecords = res.data.registeredRecords;
      this.total = res.data.total;
    },

    editItem(item) {
      console.log(item);
    },

    updateAlert(show = false, text = "Alerta", event = "success") {
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
      if (show) {
        this.$refs.top.scrollIntoView();
      }
    },
  },
};
</script>

<style>
.v-tabs-slider {
  background: #2d52a8 !important;
}
</style>