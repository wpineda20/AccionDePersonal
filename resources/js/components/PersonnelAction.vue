<template>
  <div ref="top">
    <disclaimer-register />

    <alert
      :text="textAlert"
      :event="alertEvent"
      :show="showAlert"
      @show-alert="updateAlert($event)"
      class="mb-2"
    />
    <v-row
      v-if="!loading"
      style="background-color: #fff; border-radius: 10px"
      class="p-4 shadow"
    >
      <h5 class="fw-bold pb-2 mb-4" style="border-bottom: 2px solid black">
        I- DATOS GENERALES
      </h5>

      <!-- employee_name -->
      <v-col cols="12" sm="12" md="6" class="m-0 pb-3">
        <base-input
          label="Nombre del empleado"
          v-model="$v.editedItem.employee_name.$model"
          :validation="$v.editedItem.employee_name"
          validationTextType="none"
          type="text"
        />
      </v-col>
      <!-- employee_name -->

      <!-- position_signature -->
      <v-col cols="12" sm="12" md="6" class="m-0 pb-3">
        <base-input
          label="Cargo"
          v-model="$v.editedItem.position_signature.$model"
          :validation="$v.editedItem.position_signature"
          validationTextType="none"
          type="text"
        />
      </v-col>
      <!-- position_signature -->

      <!-- dependency -->
      <v-col cols="12" sm="12" md="12" class="m-0 pb-3">
        <base-input
          label="Unidad de trabajo"
          v-model="$v.editedItem.dependency_name.$model"
          :validation="$v.editedItem.dependency_name"
          validationTextType="none"
          type="text"
          :readonly="true"
        />
      </v-col>
      <!-- dependency -->

      <h5 class="fw-bold pb-2 mb-4" style="border-bottom: 2px solid black">
        II- NATURALEZA DE LA LICENCIA POR:
      </h5>
      <!-- <hr /> -->

      <!-- justificaction_name -->
      <v-col cols="12" sm="12" md="12" class="m-0 pb-4">
        <base-select-search
          label="Justificación"
          v-model.trim="$v.editedItem.justification_name.$model"
          :items="justifications"
          item="justification_name"
          :validation="$v.editedItem.justification_name"
        />
      </v-col>
      <!-- justificaction_name -->

      <h5 class="fw-bold pb-2 mb-4" style="border-bottom: 2px solid black">
        III.- PERIODO POR:
      </h5>

      <!-- hours col -->
      <v-col cols="12" sm="6" md="6" style="border-right: 2px solid black">
        <h6 class="text-center fw-bold">HORAS:</h6>
        <v-row style="display: flex; justify-content: center">
          <!-- from_hour -->
          <v-col cols="12" sm="6" md="4" class="">
            <base-input
              label="De las"
              v-model="$v.editedItem.from_hour.$model"
              :validation="$v.editedItem.from_hour"
              validationTextType="default"
              type="time"
            />
          </v-col>
          <!-- from_hour -->
          <!-- from_hour -->
          <v-col cols="12" sm="6" md="4" class="">
            <base-input
              label="horas a las"
              v-model="$v.editedItem.to_hour.$model"
              :validation="$v.editedItem.to_hour"
              validationTextType="default"
              type="time"
            />
          </v-col>
          <!-- from_hour -->
          <!-- total_hours -->
          <v-col cols="12" sm="12" md="8" class="m-0 pb-3">
            <base-input
              label="Total de horas"
              v-model="$v.editedItem.total_hours.$model"
              :validation="$v.editedItem.total_hours"
              validationTextType="none"
              type="number"
            />
          </v-col>
          <!-- total_hours -->
          <!-- effective_date -->
          <v-col cols="12" sm="12" md="8" class="">
            <base-input
              label="Fecha efectiva para"
              v-model="$v.editedItem.effective_date.$model"
              :validation="$v.editedItem.effective_date"
              validationTextType="default"
              type="date"
            />
          </v-col>
          <!-- effective_date -->
        </v-row>
      </v-col>
      <!-- hours col -->

      <!-- dates col -->
      <v-col cols="12" sm="6" md="6">
        <h6 class="text-center fw-bold">DÍA(S) COMPLETO(S):</h6>
        <v-row style="display: flex; justify-content: center">
          <!-- from_date -->
          <v-col cols="12" sm="12" md="4" class="">
            <base-input
              label="Del"
              v-model="$v.editedItem.from_date.$model"
              :validation="$v.editedItem.from_date"
              validationTextType="default"
              type="date"
            />
          </v-col>
          <!-- from_date -->
          <!-- from_date -->
          <v-col cols="12" sm="12" md="4" class="">
            <base-input
              label="Al"
              v-model="$v.editedItem.to_date.$model"
              :validation="$v.editedItem.to_date"
              validationTextType="default"
              type="date"
            />
          </v-col>
          <!-- from_date -->
          <!-- total_days -->
          <v-col cols="12" sm="12" md="8" class="m-0 pb-3">
            <base-input
              label="Total de días"
              v-model="$v.editedItem.total_days.$model"
              :validation="$v.editedItem.total_days"
              validationTextType="none"
              type="number"
            />
          </v-col>
          <!-- total_days -->
        </v-row>
      </v-col>
      <!-- dates col -->

      <h5 class="fw-bold pb-2 mb-4 pt-4" style="border-bottom: 2px solid black">
        IV- JUSTIFICANTES
      </h5>

      <!-- justification -->
      <v-col cols="12" sm="12" md="12">
        <base-text-area
          label="Justificación"
          v-model="$v.editedItem.justification.$model"
          :validation="$v.editedItem.justification"
          validationTextType="none"
          :rows="6"
          counter
        />
        <div style="display: flex; justify-content: flex-end">
          <span class="">(Máximo 800 caracteres)</span>
        </div>
      </v-col>
      <!-- justification -->

      <h5 class="fw-bold pb-2 mb-4" style="border-bottom: 2px solid black">
        V. TIEMPO EXTRAORDINARIO / DESCANSO
      </h5>

      <!-- Form -->
      <v-row>
        <v-col align="center" cols="12" sm="12" md="12" class="">
          <v-btn color="btn-normal no-uppercase" rounded @click="save()">
            Solicitar ACCIÓN DE PERSONAL
          </v-btn>

          <v-btn
            color="btn-normal-close no-uppercase"
            rounded
            @click="clearForm()"
          >
            Cancelar
          </v-btn>
        </v-col>
      </v-row>
      <!-- Form -->
    </v-row>
    <!-- loader -->
    <v-row
      v-show="loading"
      style="background-color: #fff; border-radius: 10px"
      class="p-4 shadow"
    >
      <loader v-show="loading" />
    </v-row>
    <!-- loader -->
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

import userApi from "../apis/userApi";
import justificationTypeApi from "../apis/justificationTypeApi";
import personnelActionApi from "../apis/personnelActionApi";

export default {
  data: () => ({
    loading: false,
    textAlert: "",
    alertEvent: "success",
    showAlert: false,
    justifications: [],
  }),

  props: {
    editedItem: {
      type: Object,
      default: () => ({
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
      }),
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      this.loading = true;

      let requests = [
        userApi.get(`/infoUserLoggedIn`),
        justificationTypeApi.get(null, {
          params: { itemsPerPage: -1 },
        }),
      ];

      const responses = await Promise.all(requests).catch((error) => {
        this.updateAlert(true, "No fue posible obtener los registros.", "fail");

        this.redirectSessionFinished = lib.verifySessionFinished(
          error.response.status,
          401
        );
      });

      if (responses) {
        this.user = responses[0].data.userInfoLogged;
        this.justifications = responses[1].data.records;

        this.editedItem.employee_name = this.user.name;
        this.editedItem.position_signature = this.user.position_signature;
        this.editedItem.dependency_name = this.user.dependency.dependency_name;
      }

      this.loading = false;
    },

    async save() {
      this.$v.$touch();

      if (this.$v.editedItem.$invalid) {
        this.updateAlert(true, "Campos obligatorios.", "fail");
        return;
      }

      let { data } = await personnelActionApi
        .post(null, this.editedItem)
        .catch((error) => {
          this.updateAlert(true, "No fue posible crear la solicitud.", "fail");

          this.redirectSessionFinished = lib.verifySessionFinished(
            error.response.status,
            401
          );
        });

      if (data.success) {
        this.updateAlert(true, data.message, data.state, 10000);
        if (data.state == "fail") {
          this.updateAlert(true, data.message, data.state);
        }
      }
    },

    clearForm() {},

    updateAlert(show = false, text = "Alerta", event = "success") {
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
      if (show) {
        this.$refs.top.scrollIntoView();
      }
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
        minLength: minLength(1),
      },
      to_hour: {
        minLength: minLength(1),
      },
      total_hours: {
        minLength: minLength(1),
      },
      from_date: {
        minLength: minLength(1),
      },
      to_date: {
        minLength: minLength(1),
      },
      total_days: {
        minLength: minLength(1),
      },
      effective_date: {
        minLength: minLength(1),
      },
      justification: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(800),
      },
    },
  },
};
</script>

<style>
</style>