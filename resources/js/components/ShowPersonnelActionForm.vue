<template>
  <div>
    <v-row>
      <!-- employee_name -->
      <v-col cols="12" sm="12" md="12" class="m-0 pb-3">
        <base-input
          label="Nombre del empleado"
          v-model="editedItem.employee_name.$model"
          :validation="editedItem.employee_name"
          validationTextType="none"
          type="text"
          :disabled="true"
        />
      </v-col>
      <!-- employee_name -->

      <!-- position_signature -->
      <v-col cols="12" sm="12" md="12" class="m-0 pb-3">
        <base-input
          label="Cargo"
          v-model="editedItem.position_signature.$model"
          :validation="editedItem.position_signature"
          validationTextType="none"
          type="text"
          :disabled="true"
        />
      </v-col>
      <!-- position_signature -->

      <!-- dependency -->
      <v-col cols="12" sm="12" md="12" class="m-0 pb-3">
        <base-input
          label="Unidad de trabajo"
          v-model="editedItem.dependency_name.$model"
          :validation="editedItem.dependency_name"
          validationTextType="none"
          type="text"
          :disabled="true"
        />
      </v-col>
      <!-- dependency -->

      <!-- justificaction_name -->
      <v-col cols="12" sm="12" md="12" class="m-0 pb-4">
        <base-select-search
          label="Tipo de justificación"
          v-model.trim="editedItem.justification_name.$model"
          :items="justifications"
          item="justification_name"
          :validation="editedItem.justification_name"
          :readonly="true"
        />
      </v-col>
      <!-- justificaction_name -->
      <!-- <div>
        <v-radio-group v-model="radios" row>
          <v-radio value="hours" @click="showHourForm()">
            <template v-slot:label>
              <div>
                <strong style="margin-left: 8px; color: #313945">HORAS</strong>
              </div>
            </template>
          </v-radio>
          <v-radio value="days" @click="showDayForm()">
            <template v-slot:label>
              <div>
                <strong style="margin-left: 8px; color: #313945">DÍAS</strong>
              </div>
            </template>
          </v-radio>
        </v-radio-group>
      </div> -->
      <!-- <div
        v-if="radioAlert"
        style="display: flex; justify-content: center; align-items: center"
      >
        <p class="mt-2 text-center orange-text">
          <i class="material-icons">error_outline</i> Campo requerido.
        </p>
      </div> -->

      <!-- <hr /> -->

      <!-- hours col -->
      <v-col cols="12" sm="12" md="12">
        <h6 class="text-center fw-bold" v-if="editedItem.from_hour">HORAS:</h6>
        <v-row style="display: flex; justify-content: center">
          <!-- from_hour -->
          <v-col cols="12" sm="6" md="6" class="" v-if="editedItem.from_hour">
            <base-input
              label="De las"
              v-model="editedItem.from_hour.$model"
              :validation="editedItem.from_hour"
              validationTextType="default"
              type="time"
              :disabled="true"
            />
          </v-col>
          <!-- from_hour -->
          <!-- from_hour -->
          <v-col cols="12" sm="6" md="6" class="" v-if="editedItem.to_hour">
            <base-input
              label="horas a las"
              v-model="editedItem.to_hour.$model"
              :validation="editedItem.to_hour"
              validationTextType="default"
              type="time"
              :disabled="true"
            />
          </v-col>
          <!-- from_hour -->
          <!-- total_hours -->
          <v-col
            cols="12"
            sm="12"
            md="12"
            class="m-0 pb-3"
            v-if="editedItem.total_hours"
          >
            <base-input
              label="Total de horas"
              v-model="editedItem.total_hours.$model"
              :validation="editedItem.total_hours"
              validationTextType="none"
              type="number"
              :disabled="true"
            />
          </v-col>
          <!-- total_hours -->
          <!-- effective_date -->
          <v-col
            cols="12"
            sm="12"
            md="12"
            class=""
            v-if="editedItem.effective_date"
          >
            <base-input
              label="Fecha efectiva para"
              v-model="editedItem.effective_date.$model"
              :validation="editedItem.effective_date"
              validationTextType="default"
              type="date"
              :disabled="true"
            />
          </v-col>
          <!-- effective_date -->
        </v-row>
      </v-col>
      <!-- hours col -->

      <!-- dates col -->
      <v-col cols="12" sm="12" md="12">
        <h6 class="text-center fw-bold" v-if="editedItem.from_date">
          DÍA(S) COMPLETO(S):
        </h6>
        <v-row style="display: flex; justify-content: center">
          <!-- from_date -->
          <v-col cols="12" sm="12" md="6" class="" v-if="editedItem.from_date">
            <base-input
              label="Del"
              v-model="editedItem.from_date.$model"
              :validation="editedItem.from_date"
              validationTextType="default"
              type="date"
              :disabled="true"
            />
          </v-col>
          <!-- from_date -->
          <!-- from_date -->
          <v-col cols="12" sm="12" md="6" class="" v-if="editedItem.to_date">
            <base-input
              label="Al"
              v-model="editedItem.to_date.$model"
              :validation="editedItem.to_date"
              validationTextType="default"
              type="date"
              :disabled="true"
            />
          </v-col>
          <!-- from_date -->
          <!-- total_days -->
          <v-col
            cols="12"
            sm="12"
            md="12"
            class="m-0 pb-3"
            v-if="editedItem.total_days"
          >
            <base-input
              label="Total de días"
              v-model="editedItem.total_days.$model"
              :validation="editedItem.total_days"
              validationTextType="none"
              type="number"
              :disabled="true"
            />
          </v-col>
          <!-- total_days -->
        </v-row>
      </v-col>
      <!-- dates col -->

      <!-- <h5
        class="fw-bold pb-2 mb-4 pt-4"
        style="border-bottom: 1px solid lightgray"
      >
        IV- JUSTIFICANTES
      </h5> -->

      <!-- justification -->
      <v-col cols="12" sm="12" md="12" v-if="editedItem.justification">
        <base-text-area
          label="Justificación"
          v-model="editedItem.justification.$model"
          :validation="editedItem.justification"
          validationTextType="none"
          :rows="6"
          counter
          :disabled="true"
        />
        <div style="display: flex; justify-content: flex-end">
          <span class="">(Máximo 800 caracteres)</span>
        </div>
      </v-col>
      <!-- justification -->

      <!-- <h5 class="fw-bold pb-2 mb-4" style="border-bottom: 1px solid lightgray">
        V. TIEMPO EXTRAORDINARIO / DESCANSO
      </h5>

      <h5 class="fw-bold pb-2 mb-2" style="border-bottom: 1px solid lightgray">
        ANEXAR DOCUMENTOS
      </h5> -->

      <!-- Document File -->
      <v-col cols="12" xs="12" sm="12" md="12">
        <h4 class="mb-0">Documentación anexada.</h4>
        <hr />
        <!-- <span class="text-muted">(Opcional)</span> -->
        <a
          :href="editedItem.justification_file"
          target="_blank"
          v-if="editedItem.justification_file"
        >
          Visualizar documento anexo
        </a>
        <p v-else>No se adjunto ningún documento.</p>
      </v-col>
      <!-- Document File -->
    </v-row>
    <!-- buttons -->
    <v-row>
      <v-col align="center" cols="12" sm="12" md="12" class="">
        <v-btn color="btn-normal no-uppercase" rounded @click="save()">
          Guardar
        </v-btn>

        <!-- <v-btn
          color="btn-normal-close no-uppercase"
          rounded
          @click="clearForm()"
        >
          Limpiar
        </v-btn> -->
      </v-col>
    </v-row>
    <!-- buttons -->
  </div>
</template>

<script>
export default {
  data: () => ({}),

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
        from_date: "",
        to_date: "",
        total_days: "",
        effective_date: "",
        justification: "",
        justification_file: "",
      }),
    },
    justifications: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    save() {
      this.$emit("save-form", true);
    },
  },
};
</script>

<style>
</style>