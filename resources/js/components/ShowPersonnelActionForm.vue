<template>
  <div>
    <v-row>
      <h5 class="fw-bold pb-2 mb-4" style="border-bottom: 1px solid lightgray">
        I- DATOS GENERALES
      </h5>
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
          :readonly="!enableInputs"
        />
      </v-col>
      <!-- justificaction_name -->

      <h5 class="fw-bold pb-2 mb-4" style="border-bottom: 1px solid lightgray">
        III.- PERIODO POR:
      </h5>

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
              :disabled="!enableInputs"
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
            v-if="editedItem.total_hours"
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
              :disabled="!enableInputs"
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
            v-if="editedItem.total_days"
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
      <v-col cols="12" sm="12" md="12" v-if="editedItem.justification">
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
          <span class="">(Máximo 800 caracteres)</span>
        </div>
      </v-col>
      <!-- justification -->

      <!-- 
      <h5 class="fw-bold pb-2 mb-4" style="border-bottom: 1px solid lightgray">
        V. TIEMPO EXTRAORDINARIO / DESCANSO
      </h5> -->

      <h5 class="fw-bold pb-2 mb-2" style="border-bottom: 1px solid lightgray">
        ANEXAR DOCUMENTOS
      </h5>
      <!-- <hr> -->

      <!-- Document File -->
      <v-col cols="12" xs="12" sm="12" md="6">
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

      <!-- justification_file -->
      <v-col cols="12" xs="12" sm="12" md="6" v-if="showUpdateBtn">
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

      <h5
        class="fw-bold pt-3 pb-2 mb-2"
        style="border-bottom: 1px solid lightgray"
      >
        OBSERVACIONES
      </h5>

      <v-col cols="12" sm="12" md="12">
        <base-text-area
          label="Observación"
          v-model.trim="remark.observation.$model"
          :validation="remark.observation"
          validationTextType="none"
          :rows="3"
          :disabled="
            disableRemark != false || this.editedItem.remarks.length > 0
          "
          v-show="showObservations"
        />
      </v-col>
      <v-col cols="12" md="6" v-show="showObservations">
        <v-btn
          color="btn-normal"
          rounded
          @click="createRemark()"
          :disabled="
            disableRemark != false || this.editedItem.remarks.length > 0
          "
        >
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
        <tbody>
          <tr v-for="(item, index) in editedItem.remarks" :key="index">
            <td>{{ item.observation }}</td>
            <td>{{ item.status }}</td>
            <td>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon @click="verifyRemark(item)" v-on="on" v-bind="attrs">
                    mdi-checkbox-marked-circle
                  </v-icon>
                </template>
                <span>Validar observación</span>
              </v-tooltip>
            </td>
          </tr>
          <tr v-if="remarks.length == 0">
            <td colspan="3">No se realizó ninguna observación.</td>
          </tr>
        </tbody>
      </v-simple-table>

      <v-row v-show="showObservations">
        <v-col align="center">
          <v-btn
            color="btn-normal no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto"
            rounded
            @click="setStatus('Aprobada')"
            :disabled="
              disableRemark != false || this.editedItem.remarks.length > 0
            "
          >
            Aprobar
          </v-btn>
          <v-btn
            color="btn-normal-close no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto"
            rounded
            @click="setStatus('Observada')"
          >
            Observar
          </v-btn>
          <v-btn
            color="btn-normal-red no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto"
            rounded
            @click="setStatus('Rechazada')"
          >
            Rechazar
          </v-btn>
          <v-btn
            color="btn-normal-green no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto"
            rounded
            @click="setStatus('Procesada')"
          >
            Procesar
          </v-btn>
        </v-col>
      </v-row>
    </v-row>

    <!-- buttons -->
    <v-row>
      <v-col align="center" cols="12" sm="12" md="12">
        <v-btn
          v-if="showUpdateBtn"
          color="btn-normal no-uppercase"
          rounded
          @click="updateForm()"
        >
          Actualizar
        </v-btn>
        <!-- <v-btn
          color="btn-normal-close no-uppercase"
          rounded
          @click="closeFormActions()"
        >
          Cerrar
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
        remarks: [],
      }),
    },
    remark: {
      type: Object,
      default: () => ({
        observation: "",
        status: 0,
      }),
    },
    justifications: {
      type: Array,
      default: () => [],
    },
    remarksCreated: {
      type: Array,
      default: () => [],
    },
    remarks: {
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
    showObservations: {
      type: Boolean,
      default: () => false,
    },
    enableInputs: {
      type: Boolean,
      default: () => false,
    },
  },

  methods: {
    updateForm() {
      this.$emit("update-form", true);
      this.closeFormActions();
    },

    verifyRemark() {
      console.log("Verificar observación");
      this.$emit("emit: verify-remark", true);
    },

    setStatus(str) {
      this.$emit("set-status", str);
    },

    createRemark() {
      this.$emit("create-remark", this.remark);
      console.log("emit: crear observación");
    },

    closeFormActions() {
      this.$emit("close-form", true);
    },
  },
};
</script>

<style>
</style>