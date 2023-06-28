<template>
  <div data-app>
    <alert
      :text="textAlert"
      :event="alertEvent"
      :show="showAlert"
      @show-alert="updateAlert($event)"
      class="mb-2"
    />

    <v-card class="p-3">
      <v-row>
        <v-col cols="12" sm="12" md="4" lg="4" xl="4">
          <h2 style="margin-left: 15px">Acciones de Personal</h2>
        </v-col>
        <v-col cols="4" sm="12" md="4" lg="4" xl="4" align="end"> </v-col>
        <v-col cols="12" sm="12" md="12" lg="4" xl="4" class="pl-0 pb-0 pr-0">
          <v-text-field
            dense
            outlined
            label="Buscar"
            type="text"
            v-model="options.search"
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- filters -->
      <div class="container-fluid pb-4 pt-4">
        <v-row>
          <v-tabs grow background-color="transparent">
            <v-tab @click="filter = 'Pediente autorización'">Solicitadas</v-tab>
            <v-tab @click="filter = 'Observada'">Observadas</v-tab>
            <v-tab @click="filter = 'Rechazada'">Rechazadas</v-tab>
            <v-tab @click="filter = 'Procesada'">Procesadas</v-tab>
            <v-tab @click="filter = 'Finalizada'">Finalizadas</v-tab>
          </v-tabs>
        </v-row>
      </div>
      <!-- filters -->

      <!-- datatable -->
      <v-data-table
        :search="options.search"
        :headers="headers"
        :items="recordsFiltered"
        :options.sync="options"
        :loading="loading"
        item-key="id"
        sort-by="id"
        :footer-props="{ 'items-per-page-options': [15, 30, 50, 100] }"
      >
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
            @click="initialize"
          >
            Reiniciar
          </a>
        </template>
      </v-data-table>
      <!-- datatable -->
    </v-card>
    <v-dialog v-model="dialogShowPersonnelAction" max-width="700px">
      <v-card color="h-100">
        <v-container>
          <h2 class="black-secondary text-center mt-3 mb-3">
            Acción de Personal
          </h2>
          <v-container>
            <show-personnel-action-form
              :editedItem="$v.editedItem"
              :justifications="justifications"
              :enableInputs="editedItem.status_name == 'Observada'"
              :showUpdateBtn="editedItem.status_name == 'Observada'"
              @update-form="updateForm()"
              @close-form="closeFormActions()"
              @file-size-exceeded="
                updateAlert(
                  true,
                  'El archivo no debe superar los 5 MB.',
                  'fail'
                )
              "
            />
            <!-- Remarks -->
            <h5
              class="fw-bold pt-3 pb-2 mb-2"
              style="border-bottom: 1px solid lightgray"
            >
              OBSERVACIONES
            </h5>
            <v-simple-table class="mt-2">
              <thead>
                <tr>
                  <th class="fw-bold text-black">OBSERVACIÓN</th>
                  <th class="fw-bold text-black">ESTADO</th>
                  <!-- <th class="fw-bold text-black">ACCIÓN</th> -->
                </tr>
              </thead>
              <tbody v-if="editedItem.remarks.length > 0">
                <tr v-for="(remark, index) in editedItem.remarks" :key="index">
                  <td>{{ remark.observation }}</td>
                  <td>{{ remark.status }}</td>
                  <!-- <td>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          @click="verifyRemark(item)"
                          v-on="on"
                          v-bind="attrs"
                        >
                          mdi-checkbox-marked-circle
                        </v-icon>
                      </template>
                      <span>Validar observación</span>
                    </v-tooltip>
                  </td> -->
                </tr>
              </tbody>
              <tbody v-else>
                <tr class="text-center">
                  <td colspan="3">No se ha realizado ninguna observación.</td>
                </tr>
              </tbody>
            </v-simple-table>
            <!-- Remarks -->
            <!-- buttons -->
            <v-row>
              <v-col align="center" cols="12" sm="12" md="12">
                <v-btn
                  v-if="editedItem.status_name == 'Observada'"
                  color="btn-normal no-uppercase"
                  rounded
                  @click="updateForm()"
                >
                  Actualizar
                </v-btn>
              </v-col>
            </v-row>
            <!-- buttons -->
          </v-container>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import personnelActionApi from "../apis/personnelActionApi";
import justificationTypeApi from "../apis/justificationTypeApi";
import StatusApi from "../apis/StatusApi";
import { format } from "date-fns";
import esEsLocale from "date-fns/locale/es";
import axios from "axios";
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  data: () => ({
    headers: [
      { text: "FECHA DE SOLICITUD", value: "date_request_created" },
      { text: "JUSTIFICACIÓN", value: "justification_name", sortable: false },
      { text: "ACCIÓN", value: "actions", sortable: false },
    ],
    search: "",
    textAlert: "",
    alertEvent: "success",
    showAlert: false,
    dialogShowPersonnelAction: false,
    filter: "Pediente autorización",
    records: [],
    recordsFiltered: [],
    total: 0,
    options: {},
    justifications: [],
    remarksCreated: [],
    editedIndex: -1,
    debounce: 0,
    totalItems: 0,
    editedItem: {
      employee_name: "",
      position_signature: "",
      dependency_name: "",
      justification_name: "",
      from_hour: "",
      to_hour: "",
      total_hours: "",
      effective_date: "",
      from_date: "",
      to_date: "",
      total_days: "",
      justification: "",
      justification_file: "",
      remarks: [],
    },
    defaultItem: {
      employee_name: "",
      position_signature: "",
      dependency_name: "",
      justification_name: "",
      from_hour: "",
      to_hour: "",
      total_hours: "",
      effective_date: "",
      from_date: "",
      to_date: "",
      total_days: "",
      justification: "",
      justification_file: "",
      remarks: [],
    },
    remark: {
      observation: "",
      status: 0,
    },
    showUpdateBtn: false,
    // showObservations: false,
    enableInputs: false,
  }),

  created() {
    this.initialize();
  },

  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: false,
      dirty: false,
    },
    filter: {
      handler() {
        this.getDataFromApi();
      },
    },
  },

  validations: {
    editedItem: {
      employee_name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(500),
      },
      position_signature: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(500),
      },
      dependency_name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(500),
      },
      justification_name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(500),
      },
      from_hour: {
        // required,
        minLength: minLength(1),
      },
      to_hour: {
        // required,
        minLength: minLength(1),
      },
      total_hours: {
        // required,
        minLength: minLength(1),
      },
      from_date: {
        // required,
        minLength: minLength(1),
      },
      to_date: {
        // required,
        minLength: minLength(1),
      },
      total_days: {
        // required,
        minLength: minLength(1),
      },
      effective_date: {
        // required,
        minLength: minLength(1),
      },
      justification: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(800),
      },
      justification_file: {},
      remarks: {},
    },

    remark: {
      observation: {
        required,
      },
      status: {},
    },
  },

  methods: {
    async initialize() {
      this.loading = true;
      this.records = [];
      this.recordsFiltered = [];

      let requests = [
        this.getDataFromApi(),
        justificationTypeApi.get(null, {
          params: {
            itemsPerPage: -1,
          },
        }),
      ];

      const responses = await Promise.all(requests).catch((error) => {
        this.updateAlert(true, "No fue posible obtener el registro.", "fail");

        this.redirectSessionFinished = lib.verifySessionFinished(
          error.response.status,
          419
        );
      });

      if (responses) {
        this.justifications = responses[1].data.records;
      }

      this.loading = false;
    },

    getDataFromApi() {
      this.loading = true;
      this.records = [];
      this.recordsFiltered = [];

      //debounce
      clearTimeout(this.debounce);
      this.debounce = setTimeout(async () => {
        const { data } = await personnelActionApi
          .get(null, {
            params: {
              ...this.options,
              filter: this.filter,
            },
          })
          .catch((error) => {
            this.updateAlert(
              true,
              "No fue posible obtener los registros.",
              "fail"
            );
          });

        this.records = data.records;
        this.recordsFiltered = data.records;

        this.recordsFiltered.forEach((item) => {
          item.date_request_created = format(
            new Date(item.date_request_created),
            "d/MM/y, hh:mm a",
            {
              locale: esEsLocale,
            }
          );
        });

        this.total = data.total;
        this.loading = false;
      }, 200);
    },

    editItem(item) {
      this.dialogShowPersonnelAction = true;
      this.editedIndex = this.recordsFiltered.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },

    updateAlert(show = false, text = "Alerta", event = "success") {
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
    },

    closeFormActions() {
      // this.$nextTick(() => {
      //   this.editedItem = this.defaultItem;
      //   this.editedIndex = -1;
      // });
      this.dialogShowPersonnelAction = false;
    },

    async updateForm() {
      const response = await personnelActionApi
        .put(`/${this.editedItem.id}`, this.editedItem)
        .catch((error) => {
          this.updateAlert(
            true,
            "No fue posible actualizar el registro.",
            "fail"
          );
          this.redirectSessionFinished = lib.verifySessionFinished(
            error.response.status,
            419
          );
        });

      if (response.data.success == true) {
        this.updateAlert(true, response.data.message, "success");
        this.closeFormActions();
        this.initialize();
      }
    },
  },
};
</script>

<style>
.v-tabs-slider {
  background: #2d52a8 !important;
}
.theme--light.v-label--is-disabled {
  color: grey !important;
}
</style>