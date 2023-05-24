<template>
  <div data-app>
    <alert-time-out
      :redirect="redirectSessionFinished"
      @redirect="updateTimeOut($event)"
    />
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
          <h2 style="margin-left: 15px">Verificación de A.P</h2>
        </v-col>
        <v-col cols="4" sm="12" md="4" lg="4" xl="4" align="end">
          <!-- <v-btn
            rounded
            @click="addRecord()"
            class="mb-2 btn-normal no-uppercase"
            title="Agregar"
          >
            Agregar
          </v-btn> -->
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="4" xl="4" class="pl-0 pb-0 pr-0">
          <v-text-field
            class=""
            dense
            outlined
            label="Buscar"
            type="text"
            v-model="options.search"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-data-table
        v-model="selected"
        :single-select="false"
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
                @click="verifyPersonnelAction(item)"
                v-bind="attrs"
                v-on="on"
              >
                pending_actions
              </v-icon>
            </template>
            <span>Verificar solicitud</span>
          </v-tooltip>
        </template>
        <template v-slot:no-data>
          <v-icon small class="mr-2" @click="initialize"> mdi-refresh </v-icon>
        </template>
      </v-data-table>
    </v-card>
    <!-- 
    <v-dialog v-model="dialog" max-width="600px" persistent>
      <v-card class="flexcard" height="100%">
        <v-card-title>
          <h1 class="mx-auto pt-3 mb-3 text-center black-secondary">
            {{ formTitle }}
          </h1>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row class="pt-3"> </v-row>
            <v-row>
              <v-col align="center">
                <v-btn
                  color="btn-normal no-uppercase mt-3"
                  rounded
                  @click="save"
                >
                  Guardar
                </v-btn>
                <v-btn
                  color="btn-normal-close no-uppercase mt-3"
                  rounded
                  @click="close"
                >
                  Cancelar
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog> -->

    <!-- <v-dialog v-model="dialogDelete" max-width="400px">
      <v-card class="h-100">
        <v-container>
          <h1 class="black-secondary text-center mt-3 mb-3">
            {{
              selected.length > 0 ? "Eliminar registros" : "Eliminar registro"
            }}
          </h1>
          <v-row>
            <v-col align="center">
              <v-btn
                color="btn-normal no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto"
                rounded
                @click="deleteItemConfirm"
                >Confirmar</v-btn
              >
              <v-btn
                color="btn-normal-close no-uppercase mt-3 mb-3"
                rounded
                @click="closeDelete"
              >
                Cancelar
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog> -->

    <!-- Authorize / Denied -->
    <v-dialog v-model="dialogActions" max-width="600px">
      <v-card class="h-100">
        <v-container>
          <h2 class="black-secondary text-center mt-3 mb-3">
            Verificación de Acción de Personal
          </h2>
          <v-container>
            <show-personnel-action-form
              :editedItem="$v.editedItem"
              :remark="$v.remark"
              :showObservations="true"
              :justifications="justifications"
              @verify-remark="verifyRemark()"
              @set-status="setStatus()"
              @create-remark="createRemark()"
            />
          </v-container>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { format } from "date-fns";
import esEsLocale from "date-fns/locale/es";
import personnelActionApi from "../apis/personnelActionApi";
import justificationTypeApi from "../apis/justificationTypeApi";
import remarkApi from "../apis/remarkApi";

import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      search: "",
      selected: [],
      dialog: false,
      disableRemark: false,
      dialogActions: false,
      dialogDelete: false,
      headers: [
        { text: "FECHA DE SOLICITUD", value: "date_request_created" },
        { text: "EMPLEADO", value: "employee_name" },
        { text: "JUSTIFICACIÓN", value: "justification_name" },
        { text: "ESTADO", value: "status_name" },
        { text: "ACCIONES", value: "actions", sortable: false },
      ],
      records: [],
      recordsFiltered: [],
      remarksCreated: [],
      editedIndex: -1,
      title: "",
      totalItems: 0,
      options: {},
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
      justifications: [],
      selectedTab: 0,
      loading: false,
      debounce: 0,
      textAlert: "",
      alertEvent: "success",
      showAlert: false,
      redirectSessionFinished: false,
      alertTimeOut: 0,
    };
  },

  // watch: {
  //   options: {
  //     handler() {
  //       this.getDataFromApi();
  //     },
  //     deep: true,
  //   },
  //   dialogDelete(val) {
  //     val || this.closeDelete();
  //   },
  // },

  // Validations
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

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo registro" : "Editar registro";
    },
  },

  watch: {
    // options: {
    //   // handler() {
    //   //   this.getDataFromApi();
    //   // },
    //   deep: false,
    //   dirty: false,
    // },
    dialog(val) {
      val || this.close();
    },
    dialogBlock(val) {
      val || this.closeBlock();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      this.loading = true;
      this.$v.$reset();
      this.records = [];
      this.recordsFiltered = [];

      let requests = [
        // this.getDataFromApi(),
        personnelActionApi.post(`/verifyPersonnelActions`),
        justificationTypeApi.get(null, {
          params: { itemsPerPage: -1 },
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
        this.recordsFiltered = responses[0].data.records;
        this.justifications = responses[1].data.records;

        this.recordsFiltered.forEach((item) => {
          item.date_request_created = format(
            new Date(item.date_request_created),
            "d/MM/y, hh:mm a",
            {
              locale: esEsLocale,
            }
          );
        });
      }

      this.loading = false;
    },

    editItem(item) {
      this.editedIndex = this.recordsFiltered.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.selectedTab = 0;
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.updateAlert(true, "Campos obligatorios.", "fail");
        return;
      }

      if (this.editedIndex > -1) {
        const edited = Object.assign(
          this.recordsFiltered[this.editedIndex],
          this.editedItem
        );

        const { data } = await personnelActionApi
          .put(`/${edited.id}`, edited)
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

        if (data.success) {
          this.updateAlert(true, data.message, "success");
        }
      } else {
        //Creating user
        const { data } = await personnelActionApi
          .post(null, this.editedItem)
          .catch((error) => {
            this.updateAlert(true, "No fue posible crear el registro.", "fail");

            this.redirectSessionFinished = lib.verifySessionFinished(
              error.response.status,
              419
            );
          });

        if (data.success) {
          this.updateAlert(true, data.message, "success");
        }
      }

      this.close();
      this.initialize();
      return;
    },

    deleteItem(item = null) {
      if (item) {
        this.editedIndex = this.recordsFiltered.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.selected = [];
      }

      this.dialogDelete = true;
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async deleteItemConfirm() {
      const { data } = await personnelActionApi
        .delete(null, {
          params: {
            selected: this.selected,
            id: this.editedItem.id,
          },
        })
        .catch((error) => {
          this.updateAlert(
            true,
            "No fue posible eliminar el registro.",
            "fail"
          );

          this.redirectSessionFinished = lib.verifySessionFinished(
            error.response.status,
            419
          );
          this.close();
        });

      if (data.success) {
        this.updateAlert(true, data.message, "success");
      }

      this.initialize();
      this.closeDelete();
    },

    addRecord() {
      this.dialog = true;
      this.editedIndex = -1;
      this.selectedTab = 0;
      this.editedItem = Object.assign({}, this.defaultItem);
      this.$v.$reset();
    },

    verifyPersonnelAction(item) {
      this.editedIndex = this.recordsFiltered.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogActions = true;
    },

    async setStatus(status = "Aprobada") {
      const response = await personnelActionApi
        .post(`/setStatus`, {
          id: this.editedItem.id,
          data: this.editedItem.remarks,
          status: status,
        })
        .catch((error) => {
          this.updateAlert(true, "No fue posible asignarle un estado.", "fail");
          this.closeActions();
        });

      if (response.data.message == "success") {
        this.updateAlert(
          true,
          `La solicitud fue ${status.toLowerCase()}.`,
          "success"
        );
        this.initialize();
        this.closeActions();
      }
    },

    async createRemark() {
      this.$v.remark.$touch();

      if (this.$v.remark.$invalid) {
        return;
      }

      this.remark["status"] = "No corregida";

      this.editedItem.remarks.push({ ...this.remark });

      if (this.editedItem.remarks.length > 0) {
        this.disableRemark = true;
      } else {
        this.disableRemark = false;
      }

      this.remark.observation = "";
      this.$v.remark.$reset();
    },

    async verifyRemark(item) {
      console.log("hola");
    },

    // deleteRemarksCreated(index) {
    //   this.remarksCreated.splice(index, 1);
    //   this.remarks.observation = "";
    //   this.remarks.status = "";
    // },

    closeActions() {
      this.$nextTick(() => {
        this.editedItem = this.defaultItem;
        this.editedIndex = -1;
      });
      this.dialogActions = false;
    },

    updateAlert(show = false, text = "Alerta", event = "success") {
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
    },
  },
};
</script>
