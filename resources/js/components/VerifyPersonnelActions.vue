<template>
  <div data-app>
    <alert-time-out :redirect="redirectSessionFinished" @redirect="updateTimeOut($event)" />
    <alert :text="textAlert" :event="alertEvent" :show="showAlert" @show-alert="updateAlert($event)" class="mb-2" />
    <v-card class="p-3">
      <v-row>
        <v-col cols="12" sm="12" md="8" lg="8" xl="8">
          <h2 style="margin-left: 15px">Verificación de acciones de personal</h2>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="pl-0 pb-0 pr-0">
          <v-text-field dense outlined label="Buscar" type="text" v-model="options.search"></v-text-field>
        </v-col>
      </v-row>

      <!-- filters -->
      <div class="container-fluid pb-4 pt-4">
        <v-row>
          <v-tabs grow background-color="transparent">
            <v-tab @click="filter = 'Pediente autorización'">Pendiente de autorización</v-tab>
            <v-tab @click="filter = 'Procesada'">Procesadas</v-tab>
            <v-tab @click="filter = 'Rechazada'">Rechazadas</v-tab>
          </v-tabs>
        </v-row>
      </div>
      <!-- filters -->

      <v-data-table v-model="selected" :single-select="false" :search="options.search" :headers="headers"
        :items="recordsFiltered" :options.sync="options" :loading="loading" item-key="id" sort-by="id"
        :footer-props="{ 'items-per-page-options': [15, 30, 50, 100] }">
        <template v-slot:[`item.actions`]="{ item }">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon small class="mr-2" @click="verifyPersonnelAction(item)" v-bind="attrs" v-on="on">
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

    <!-- Dialog -->
    <v-dialog v-model="dialogActions" max-width="90%">
      <v-card class="h-100">
        <v-container>
          <h2 class="black-secondary text-center mt-3 mb-3">
            Verificación de Acción de Personal
          </h2>

          <!-- form -->
          <v-container>
            <show-personnel-action-form :editedItem="$v.editedItem" :showObservations="true"
              :justifications="justifications" />
          </v-container>
          <!-- form -->

          <!-- Remarks -->
          <v-container>
            <h5 class="fw-bold pt-3 pb-2 mb-2" style="border-bottom: 1px solid lightgray">
              OBSERVACIONES
            </h5>
          </v-container>

          <v-col cols="12" sm="12" md="12">
            <base-text-area label="Observación" v-model.trim="$v.remark.observation.$model"
              :validation="$v.remark.observation" validationTextType="none" :rows="3"
              :disabled="editedItem.remarks.length > 0" />
            <!-- max remark alert -->
            <div v-if="maxRemark" class="orange-text" style="display: flex; align-items: center">
              <i class="material-icons">error_outline</i>
              <span>El máximo de observaciones registradas es de 3.</span>
            </div>
            <!-- max remark alert -->
          </v-col>
          <v-col cols="12" md="6">
            <v-btn color="btn-normal" :disabled="editedItem.remarks.length > 0" rounded @click="createRemark()">
              AGREGAR
            </v-btn>
          </v-col>
          <v-simple-table class="mt-2">
            <thead>
              <tr>
                <th class="fw-bold text-black">OBSERVACIÓN</th>
                <th class="fw-bold text-black">ESTADO</th>
                <th class="fw-bold text-black">ACCIÓN</th>
              </tr>
            </thead>
            <tbody v-if="editedItem.remarks.length > 0">
              <tr v-for="(remark, index) in editedItem.remarks" :key="index">
                <td>{{ remark.observation }}</td>
                <td>{{ remark.status }}</td>
                <td>
                  <v-tooltip top v-if="remark.id">
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon @click="verifyRemark(remark)" :disabled="remark.status == 'Corregida'" v-on="on"
                        v-bind="attrs">
                        mdi-checkbox-marked-circle
                      </v-icon>
                    </template>
                    <span>Validar observación</span>
                  </v-tooltip>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr class="text-center">
                <td colspan="3">No se ha realizado ninguna observación.</td>
              </tr>
            </tbody>
          </v-simple-table>
          <!-- Remarks -->

          <!-- Approve / Observe / Reject / Approve / Process -->
          <v-row>
            <v-col align="center">
              <v-btn v-if="actualUser.role == 'Jefe' || actualUser.hasUsersInCharge"
                color="btn-normal no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto" rounded @click="updateStatus('Autorizada')"
                :disabled="validateDisableAction('Observada') ||
                  validateDisableAction('No Corregida')
                  ">
                Autorizar
              </v-btn>
              <v-btn v-if="actualUser.role == 'Coordinador' ||
                actualUser.role == 'Administrador' ||
                actualUser.hasUsersInCharge
                " color="btn-normal-close no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto" rounded
                @click="updateStatus('Observada')" :disabled="validateDisableAction('Observada') ||
                  !validateDisableAction('No Corregida')
                  ">
                Observar
              </v-btn>
              <v-btn color="btn-normal-red no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto" rounded
                @click="updateStatus('Rechazada')" :disabled="validateDisableAction('Observada') ||
                  validateDisableAction('No Corregida')
                  ">
                Rechazar
              </v-btn>
              <v-btn v-if="actualUser.role == 'RRHH' ||
                actualUser.role == 'Administrador'
                " color=" btn-normal-green
              no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto" rounded @click="updateStatus('Finalizada')">
                Finalizar
              </v-btn>
            </v-col>
          </v-row>
          <!-- Approve / Observe / Reject / Approve / Process -->
        </v-container>
      </v-card>
    </v-dialog>

    <!-- Dialog -->
  </div>
</template>

<script>
import { format } from "date-fns";
import esEsLocale from "date-fns/locale/es";
import personnelActionApi from "../apis/personnelActionApi";
import justificationTypeApi from "../apis/justificationTypeApi";
import userApi from "../apis/userApi";
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
      editedIndex: -1,
      title: "",
      totalItems: 0,
      maxRemark: false,
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
      actualUser: {},
    };
  },

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
        userApi.get(`/actualUser`),
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
        this.actualUser = responses[2].data.user;

        this.recordsFiltered.forEach((item) => {
          // console.log(item);
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
      //Disable buttons if remark had status no corregida

      // this.editedItem.forEach((element) => {
      //   if (element.remarks.length) {
      //     console.log("hay información en el array");
      //     element.remarks.forEach((remark) => {
      //       if (remark.status == "No Corregida") {
      //         this.disableRemark = true;
      //         // console.log("si hay una en no corregida");
      //       }
      //     });
      //   }
      // });
      this.dialogActions = true;
    },

    async updateStatus(status) {
      const response = await personnelActionApi
        .post(`/updateStatus`, {
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

      this.remark["status"] = "No Corregida";

      if (this.editedItem.remarks.length > 2) {
        this.updateAlert(
          true,
          "El máximo de observaciones registradas es de 3",
          "fail"
        );

        this.maxRemark = true;

        return;
      }
      this.editedItem.remarks.push({ ...this.remark });
      // console.log(this.remark);
      // console.log(this.editedItem.remarks.status);

      this.remark.observation = "";
      this.$v.remark.$reset();
    },

    async verifyRemark(item) {
      console.log(item);
      const response = await remarkApi
        .post(`/verifyRemark`, {
          data: item,
        })
        .catch((error) => {
          this.updateAlert(true, "No fue posible asignarle un estado.", "fail");
          this.closeActions();
        });

      if (response.data.message == "success") {
        this.updateAlert(
          true,
          "Observación verificada correctamente.",
          "success"
        );
        this.initialize();
        this.closeActions();
        console.log("success");
      }
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
      // if (show) {
      //   this.$refs.top.scrollIntoView();
      // }
    },

    validateDisableAction(status, equal = false) {
      if (equal) {
        return (
          this.editedItem.remarks.filter((el) => el.status == status).length ==
          0
        );
      }

      // console.log(this.editedItem.remarks)
      return (
        this.editedItem.remarks.filter((el) => el.status == status).length > 0
      );
    },
  },
};
</script>
<style scoped>
.v-tabs-slider {
  background: #2d52a8 !important;
}
</style>
