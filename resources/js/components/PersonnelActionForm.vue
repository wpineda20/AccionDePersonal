<template>
  <div
    ref="top"
    v-if="!loading"
  >
    <!-- disclaimer -->
    <disclaimer-register />
    <!-- disclaimer -->

    <alert
      :text="textAlert"
      :event="alertEvent"
      :show="showAlert"
      @show-alert="updateAlert($event)"
      class="mb-2"
    />

    <!-- row -->
    <v-row
      v-if="!loading"
      style="background-color: #fff; border-radius: 10px"
      class="p-4 shadow"
    >
      <h5
        class="fw-bold pb-2 mb-4"
        style="border-bottom: 1px solid lightgray"
      >
        I- DATOS GENERALES
      </h5>

      <!-- name -->
      <v-col
        cols="12"
        sm="12"
        md="6"
        class="m-0 pb-3"
      >
        <base-input
          label="Nombre del empleado"
          v-model="$v.editedItem.name.$model"
          :validation="$v.editedItem.name"
          validationTextType="none"
          type="text"
          :disabled="true"
        />
      </v-col>
      <!-- name -->

      <!-- position_signature -->
      <v-col
        cols="12"
        sm="12"
        md="6"
        class="m-0 pb-3"
      >
        <base-input
          label="Cargo"
          v-model="$v.editedItem.position_signature.$model"
          :validation="$v.editedItem.position_signature"
          validationTextType="none"
          type="text"
          :disabled="true"
        />
      </v-col>
      <!-- position_signature -->

      <!-- dependency -->
      <v-col
        cols="12"
        sm="12"
        md="12"
        class="m-0 pb-3"
      >
        <base-input
          label="Unidad de trabajo"
          v-model="$v.editedItem.dependency_name.$model"
          :validation="$v.editedItem.dependency_name"
          validationTextType="none"
          type="text"
          :disabled="true"
        />
      </v-col>
      <!-- dependency -->

      <h5
        class="fw-bold pb-2 mb-4"
        style="border-bottom: 1px solid lightgray"
      >
        II- NATURALEZA DE LA LICENCIA POR:
      </h5>

      <!-- justificaction_name -->
      <v-col
        cols="12"
        sm="12"
        md="12"
        class="m-0 pb-4"
      >
        <base-select-search
          label="Tipo de justificación"
          v-model.trim="$v.editedItem.justification_name.$model"
          :items="justifications"
          item="justification_name"
          :validation="$v.editedItem.justification_name"
        />
      </v-col>
      <!-- justificaction_name -->
      <h5
        class="fw-bold pb-2 mb-4"
        style="border-bottom: 1px solid lightgray"
      >
        III- PERIODO POR:
      </h5>
      <!-- radio group -->
      <div style="display: flex; justify-content: center">
        <v-radio-group
          v-model="$v.editedItem.period_by.$model"
          row
        >
          <!-- radio hours -->
          <v-radio
            value="hours"
            @click="showHourForm()"
          >
            <template v-slot:label>
              <div>
                <strong style="margin-left: 8px; color: #313945">HORAS</strong>
              </div>
            </template>
          </v-radio>
          <!-- radio hours -->
          <!-- radio days -->
          <v-radio
            value="days"
            @click="showDayForm()"
          >
            <template v-slot:label>
              <div>
                <strong style="margin-left: 8px; color: #313945">DÍAS</strong>
              </div>
            </template>
          </v-radio>
          <!-- radio days -->
        </v-radio-group>
      </div>
      <!-- radio group -->

      <!-- hours col -->
      <v-col
        cols="12"
        sm="12"
        md="12"
        v-show="editedItem.period_by == 'hours'"
      >
        <h6 class="text-center fw-bold">HORAS:</h6>
        <v-row style="display: flex; justify-content: center">
          <!-- from_hour -->
          <v-col
            cols="12"
            sm="6"
            md="4"
            class=""
          >
            <base-input
              label="Desde las"
              v-model="$v.editedItem.from_hour.$model"
              :validation="$v.editedItem.from_hour"
              validationTextType="default"
              type="time"
            />
          </v-col>
          <!-- from_hour -->
          <!-- from_hour -->
          <v-col
            cols="12"
            sm="6"
            md="4"
            class=""
          >
            <base-input
              label="hasta las"
              v-model="$v.editedItem.to_hour.$model"
              :validation="$v.editedItem.to_hour"
              validationTextType="default"
              type="time"
            />
          </v-col>
          <!-- from_hour -->

          <!-- total_hours -->
          <v-col
            cols="12"
            sm="12"
            md="8"
            class="m-0 pb-3"
          >
            <base-input
              label="Total de horas"
              v-model="$v.editedItem.total_hours.$model"
              :validation="$v.editedItem.total_hours"
              validationTextType="none"
            />
          </v-col>
          <!-- total_hours -->
          <!-- effective_date -->
          <v-col
            cols="12"
            sm="12"
            md="8"
            class=""
          >
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
      <v-col
        cols="12"
        sm="12"
        md="12"
        v-show="editedItem.period_by == 'days'"
      >
        <h6 class="text-center fw-bold">DÍA(S) COMPLETO(S):</h6>
        <v-row style="display: flex; justify-content: center">
          <!-- from_date -->
          <v-col
            cols="12"
            sm="12"
            md="4"
            class=""
          >
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
          <v-col
            cols="12"
            sm="12"
            md="4"
            class=""
          >
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
          <v-col
            cols="12"
            sm="12"
            md="8"
            class="m-0 pb-3"
          >
            <base-input
              label="Total de días"
              v-model="$v.editedItem.total_days.$model"
              :validation="$v.editedItem.total_days"
              validationTextType="none"
            />
          </v-col>
          <!-- total_days -->
        </v-row>
      </v-col>
      <!-- dates col -->

      <h5
        class="fw-bold pb-2 mb-4 pt-4"
        style="border-bottom: 1px solid lightgray"
      >
        IV- JUSTIFICANTES
      </h5>

      <!-- justification -->
      <v-col
        cols="12"
        sm="12"
        md="12"
      >
        <base-text-area
          label="Justificación"
          v-model="$v.editedItem.justification.$model"
          :validation="$v.editedItem.justification"
          validationTextType="none"
          :rows="6"
          counter
        />

        <div style="display: flex; justify-content: flex-end">
          <p class="text-right">{{ $v.editedItem.justification.$model.length }} / 400</p>
        </div>
      </v-col>
      <!-- justification -->

      <h5
        class="fw-bold pb-2 mb-4"
        style="border-bottom: 1px solid lightgray"
      >
        V- TIEMPO EXTRAORDINARIO / DESCANSO
      </h5>

      <h6 class="fw-bold mb-0">
        En caso de solicitud de descanso compensatorio detallar causa o motivo
        que lo generó:
      </h6>
      <!-- extraordinary_work -->
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="6"
      >
        <v-checkbox
          v-model="$v.editedItem.extraordinary_work.$model"
          :validation.sync="$v.editedItem.extraordinary_work"
        >
          <template v-slot:label>
            <div style="margin-left: 6px">
              Trabajo extraordinario en día descanso, vacación o asueto
            </div>
          </template>
        </v-checkbox>
      </v-col>
      <!-- extraordinary_work -->

      <!-- training -->
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="6"
      >
        <v-checkbox
          v-model="$v.editedItem.training.$model"
          :validation.sync="$v.editedItem.training"
        >
          <template v-slot:label>
            <div style="margin-left: 6px">
              Capacitación en día descanso, vacación o asueto
            </div>
          </template>
        </v-checkbox>
      </v-col>
      <!-- training -->

      <h6 class="fw-bold">Detalle de la actividad realizada:</h6>

      <!-- execution_site -->
      <v-col
        cols="12"
        sm="12"
        md="8"
        class="m-0 pb-3"
      >
        <base-input
          label="Lugar de ejecución"
          v-model.trim="$v.editedItem.execution_site.$model"
          :validation="$v.editedItem.execution_site"
          validationTextType="none"
          type="text"
        />
      </v-col>
      <!-- execution_site -->

      <!-- execution_date -->
      <v-col
        cols="12"
        sm="12"
        md="4"
        class="m-0 pb-3"
      >
        <base-input
          label="Fecha de ejecución"
          v-model="$v.editedItem.execution_date.$model"
          :validation="$v.editedItem.execution_date"
          validationTextType="none"
          type="date"
        />
      </v-col>
      <!-- execution_date -->

      <!-- execution_schedule -->
      <v-col
        cols="12"
        sm="12"
        md="4"
        class="m-0 pb-3"
      >
        <base-input
          label="Horario de ejecución"
          v-model="$v.editedItem.execution_schedule.$model"
          :validation="$v.editedItem.execution_schedule"
          validationTextType="none"
          type="text"
        />
      </v-col>
      <!-- execution_schedule -->

      <!-- execution_number_hours -->
      <v-col
        cols="12"
        sm="12"
        md="4"
        class="m-0 pb-3"
      >
        <base-input
          label="Cantidad de horas"
          v-model="$v.editedItem.execution_number_hours.$model"
          :validation="$v.editedItem.execution_number_hours"
          validationTextType="none"
          type="number"
        />
      </v-col>
      <!-- execution_number_hours -->

      <!-- assigned_by -->
      <v-col
        cols="12"
        sm="12"
        md="4"
        class="m-0 pb-3"
      >
        <base-input
          label="Asignado por"
          v-model="$v.editedItem.assigned_by.$model"
          :validation="$v.editedItem.assigned_by"
          validationTextType="none"
        />
      </v-col>
      <!-- assigned_by -->

      <!-- number_days_requested -->
      <v-col
        cols="12"
        sm="12"
        md="3"
        class="m-0 pb-3"
      >
        <base-input
          label="Cantidad de días solicitados"
          v-model="$v.editedItem.number_days_requested.$model"
          :validation="$v.editedItem.number_days_requested"
          validationTextType="none"
          type="number"
        />
      </v-col>
      <!-- number_days_requested -->

      <!-- execution_effective_date -->
      <v-col
        cols="12"
        sm="12"
        md="3"
        class="m-0 pb-3"
      >
        <base-input
          label="Fecha que se hará efectivo"
          v-model="$v.editedItem.execution_effective_date.$model"
          :validation="$v.editedItem.execution_effective_date"
          validationTextType="none"
          type="date"
        />
      </v-col>
      <!-- execution_effective_date -->

      <!-- execution_from -->
      <v-col
        cols="12"
        sm="12"
        md="3"
        class="m-0 pb-3"
      >
        <base-input
          label="Desde"
          v-model="$v.editedItem.execution_from.$model"
          :validation="$v.editedItem.execution_from"
          validationTextType="none"
          type="text"
        />
      </v-col>
      <!-- execution_from -->

      <!-- execution_to -->
      <v-col
        cols="12"
        sm="12"
        md="3"
        class="m-0 pb-3"
      >
        <base-input
          label="Hasta"
          v-model="$v.editedItem.execution_to.$model"
          :validation="$v.editedItem.execution_to"
          validationTextType="none"
          type="text"
        />
      </v-col>
      <!-- execution_to -->

      <h5
        class="fw-bold pt-3 pb-2 mb-0"
        style="border-bottom: 1px solid lightgray"
      >
        VI- ANEXAR DOCUMENTOS
      </h5>

      <!-- justification_file -->
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
      >
        <h6 class="mb-0 fw-bold">
          Anexar documentos originales que justifiquen la acción de personal (cuando aplique)
        </h6>
        <span class="text-muted">(Archivo PDF)</span>
        <input-file
          accept="application/pdf"
          v-model="$v.editedItem.justification_file.$model"
          :validation="$v.editedItem.justification_file"
          @update-file="editedItem.justification_file = $event"
          @file-size-exceeded="$emit('file-size-exceeded', true)"
        />
      </v-col>
      <!-- justification_file -->

      <!-- buttons -->
      <v-row>
        <v-col
          align="center"
          cols="12"
          sm="12"
          md="12"
          class=""
        >
          <v-btn
            color="btn-normal no-uppercase"
            :disabled="loading || !user.inmediate_superior_id"
            rounded
            @click="save()"
          >
            Solicitar
          </v-btn>

          <v-btn
            color="btn-normal-close no-uppercase"
            rounded
            @click="clearForm()"
          >
            Limpiar
          </v-btn>

          <p
            class="text-red mt-3"
            v-if="!user.inmediate_superior_id"
          >No podrás registrar tus acciones de personal hasta que tu jefe inmediato
            inicie sesión dentro de la
            plataforma.</p>
        </v-col>
      </v-row>
      <!-- buttons -->
    </v-row>
    <!-- row -->

  </div>
  <!-- loader -->
  <div v-else>
    <v-row
      style="background-color: #fff; border-radius: 10px"
      class="p-4 shadow"
    >
      <loader />
    </v-row>
  </div>
  <!-- loader -->
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
  requiredIf,
} from "vuelidate/lib/validators";
import lib from "../libs/function";
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
    radioAlert: false,
    showDayInputs: false,
    showHourInputs: false,
    editedItem: {
      name: "",
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
      extraordinary_work: false,
      training: false,
      execution_site: "",
      execution_date: "",
      execution_schedule: "",
      execution_number_hours: "",
      assigned_by: "",
      number_days_requested: "",
      execution_effective_date: "",
      execution_from: "",
      execution_to: "",
      period_by: "hours",
    },
    defaultItem: {
      name: "",
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
      extraordinary_work: false,
      training: false,
      execution_site: "",
      execution_date: "",
      execution_schedule: "",
      execution_number_hours: "",
      assigned_by: "",
      number_days_requested: "",
      execution_effective_date: "",
      execution_from: "",
      execution_to: "",
      period_by: "hours",
    },
  }),

  validations: {
    editedItem: {
      // Part 1
      name: {
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
      // Part 2
      justification_name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(500),
      },
      // Part 3
      period_by: {
        required: required,
        minLength: minLength(1),
      },
      // Part 3 - Hours
      from_hour: {
        required: requiredIf(function () {
          return this.editedItem.period_by == 'hours';
        }),
        minLength: minLength(1),
      },
      to_hour: {
        required: requiredIf(function () {
          return this.editedItem.period_by == 'hours';
        }),
        minLength: minLength(1),
      },
      total_hours: {
        required: requiredIf(function () {
          return this.editedItem.period_by == 'hours';
        }),
        minLength: minLength(1),
      },
      effective_date: {
        required: requiredIf(function () {
          return this.editedItem.period_by == 'hours';
        }),
        minLength: minLength(1),
      },
      // Part 3 - Days
      from_date: {
        required: requiredIf(function () {
          return this.editedItem.period_by == 'days';
        }),
        minLength: minLength(1),
      },
      to_date: {
        required: requiredIf(function () {
          return this.editedItem.period_by == 'days';
        }),
        minLength: minLength(1),
      },
      total_days: {
        required: requiredIf(function () {
          return this.editedItem.period_by == 'days';
        }),
        minLength: minLength(1),
      },
      // Part 4 - Justification
      justification: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(400),
      },
      justification_file: {},
      extraordinary_work: false,
      training: false,
      execution_site: "",
      execution_date: "",
      execution_schedule: "",
      execution_number_hours: "",
      assigned_by: "",
      number_days_requested: "",
      execution_effective_date: "",
      execution_from: "",
      execution_to: "",
    },
  },

  created() {
    this.initialize();
  },

  computed: {
    multiplicar: function () {
      return (
        +this.editedItem.assigned_by * +this.editedItem.execution_number_hours
      );
    },
  },

  methods: {
    async initialize() {
      this.loading = true;

      let requests = [
        userApi.get(`/actualUser`),
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
        this.user = responses[0].data.user;
        this.justifications = responses[1].data.records;

        this.editedItem.name = this.user.name;
        this.editedItem.position_signature = this.user.position_signature;
        this.editedItem.dependency_name = this.user.dependency_name;
      }

      this.loading = false;
    },

    async save() {
      this.$v.$touch();

      if (this.$v.editedItem.$invalid) {
        this.updateAlert(true, "Campos obligatorios.", "fail");
        return;
      }

      this.loading = true;

      let { data, status } = await personnelActionApi
        .post(null, this.editedItem)
        .catch((error) => {

          this.loading = false;
          this.updateAlert(true, error.response.data.message, "fail", 10000);
          this.redirectSessionFinished = lib.verifySessionFinished(
            error.response.status,
            401
          );
        });

      if (status == '200') {
        this.loading = false;
        this.updateAlert(true, data.message, data.state, 20000);
        this.clearForm();
      } else {
        this.updateAlert(true, data.message, data.state, 30000);
      }

      this.loading = false;
    },

    showHourForm() {
      this.showDayInputs = false;
      this.showHourInputs = true;
      this.$v.$reset();
      this.editedItem.from_hour = "";
      this.editedItem.to_hour = "";
      this.editedItem.total_hours = "";
      this.editedItem.effective_date = "";
    },

    showDayForm() {
      this.showHourInputs = false;
      this.showDayInputs = true;
      this.$v.$reset();
      this.editedItem.from_date = "";
      this.editedItem.to_date = "";
      this.editedItem.total_days = "";
    },

    clearForm() {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.showDayInputs = false;
      this.showHourInputs = false;
      this.$v.$reset();
      this.initialize();
    },

    updateAlert(show = false, text = "Alerta", event = "success") {
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
      if (this.showAlert) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    },
  },
};
</script>

<style>
.theme--light.v-icon {
  color: #2d52a8;
}

.theme--light.v-label--is-disabled {
  color: grey !important;
}
</style>