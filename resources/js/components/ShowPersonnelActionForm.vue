<template>
  <div>
    <v-row>
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
        md="12"
        class="m-0 pb-3"
      >
        <base-input
          label="Nombre del empleado"
          v-model="editedItem.name.$model"
          :validation="editedItem.name"
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
        md="12"
        class="m-0 pb-3"
      >
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
      <v-col
        cols="12"
        sm="12"
        md="12"
        class="m-0 pb-3"
      >
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
      <v-col
        cols="12"
        sm="12"
        md="12"
        class="m-0 pb-4"
      >
        <base-select-search
          label="Tipo de justificación"
          v-model.trim="editedItem.justification_name.$model"
          :items="justifications"
          item="justification_name"
          :validation="editedItem.justification_name"
          :readonly="!enableInputs"
        />
      </v-col>
      <!-- justificaction_name -->

      <h5
        class="fw-bold pb-2 mb-4"
        style="border-bottom: 1px solid lightgray"
      >
        III.- PERIODO POR:
      </h5>

      <!-- hours col -->
      <v-col
        cols="12"
        sm="12"
        md="12"
      >
        <h6 class="text-center fw-bold">HORAS:</h6>
        <v-row style="display: flex; justify-content: center">
          <!-- from_hour -->
          <v-col
            cols="12"
            sm="6"
            md="6"
            class=""
          >
            <base-input
              label="De las"
              v-model="editedItem.from_hour.$model"
              :validation="editedItem.from_hour"
              validationTextType="default"
              type="time"
              :disabled="!enableInputs"
            />
          </v-col>
          <!-- from_hour -->
          <!-- from_hour -->
          <v-col
            cols="12"
            sm="6"
            md="6"
            class=""
          >
            <base-input
              label="horas a las"
              v-model="editedItem.to_hour.$model"
              :validation="editedItem.to_hour"
              validationTextType="default"
              type="time"
              :disabled="!enableInputs"
            />
          </v-col>
          <!-- from_hour -->
          <!-- total_hours -->
          <v-col
            cols="12"
            sm="12"
            md="12"
            class="m-0 pb-3"
          >
            <base-input
              label="Total de horas"
              v-model="editedItem.total_hours.$model"
              :validation="editedItem.total_hours"
              validationTextType="none"
              type="number"
              :disabled="!enableInputs"
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
              :disabled="!enableInputs"
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
      >
        <h6 class="text-center fw-bold">DÍA(S) COMPLETO(S):</h6>
        <v-row style="display: flex; justify-content: center">
          <!-- from_date -->
          <v-col
            cols="12"
            sm="12"
            md="6"
            class=""
          >
            <base-input
              label="Del"
              v-model="editedItem.from_date.$model"
              :validation="editedItem.from_date"
              validationTextType="default"
              type="date"
              :disabled="!enableInputs"
            />
          </v-col>
          <!-- from_date -->
          <!-- from_date -->
          <v-col
            cols="12"
            sm="12"
            md="6"
            class=""
          >
            <base-input
              label="Al"
              v-model="editedItem.to_date.$model"
              :validation="editedItem.to_date"
              validationTextType="default"
              type="date"
              :disabled="!enableInputs"
            />
          </v-col>
          <!-- from_date -->
          <!-- total_days -->
          <v-col
            cols="12"
            sm="12"
            md="12"
            class="m-0 pb-3"
          >
            <base-input
              label="Total de días"
              v-model="editedItem.total_days.$model"
              :validation="editedItem.total_days"
              validationTextType="none"
              type="number"
              :disabled="!enableInputs"
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
          v-model="editedItem.justification.$model"
          :validation="editedItem.justification"
          validationTextType="none"
          :rows="6"
          counter
          :disabled="!enableInputs"
        />
        <div style="display: flex; justify-content: flex-end">
          <span class="">(Máximo 400 caracteres)</span>
        </div>
      </v-col>
      <!-- justification -->

      <!-- 
      <h5 class="fw-bold pb-2 mb-4" style="border-bottom: 1px solid lightgray">
        V. TIEMPO EXTRAORDINARIO / DESCANSO
      </h5> -->

      <h5
        class="fw-bold pb-2 mb-2"
        style="border-bottom: 1px solid lightgray"
      >
        ANEXAR DOCUMENTO
      </h5>
      <!-- <hr> -->

      <!-- justification_file -->
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="6"
        v-if="showUpdateBtn"
      >
        <h6 class="mb-0">
          Documentación original para justificación de acción de personal (PDF).
        </h6>
        <span class="text-muted">(Opcional)</span>
        <input-file
          accept="application/pdf"
          v-model="editedItem.justification_file.$model"
          :validation="editedItem.justification_file"
          @update-file="editedItem.justification_file = $event"
          @file-size-exceeded="$emit('file-size-exceeded', true)"
        />
      </v-col>
      <!-- justification_file -->
      <!-- Document File -->
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="6"
      >
        <a
          :href="editedItem.justification_file.$model"
          target="_blank"
          v-if="editedItem.justification_file.$model"
        >
          Visualizar documento anexo
        </a>
        <p v-else>No se adjunto ningún documento.</p>
      </v-col>
      <!-- Document File -->
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({}),

  props: {
    editedItem: {
      type: Object,
      default: () => ({
        name: "",
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
        note: "",
      }),
    },
    justifications: {
      type: Array,
      default: () => [],
    },
    disableRemark: {
      type: Boolean,
      default: () => false,
    },
    showUpdateBtn: {
      type: Boolean,
      default: () => false,
    },
    enableInputs: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style></style>