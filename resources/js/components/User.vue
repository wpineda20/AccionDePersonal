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
      class="elevation-3 shadow p-3 mt-3"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Usuarios</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="800px" persistent>
            <template v-slot:activator="{ on, attrs }">
              <v-row>
                <v-col align="right">
                  <!-- <v-btn
                    class="mb-2 btn-normal no-uppercase"
                    v-bind="attrs"
                    v-on="on"
                    rounded
                    @click="newUser()"
                  >
                    Agregar
                  </v-btn> -->
                </v-col>
                <v-col
                  xs="6"
                  sm="6"
                  md="6"
                  class="d-none d-md-block d-lg-block"
                >
                  <v-text-field
                    dense
                    label="Buscar"
                    outlined
                    type="text"
                    v-model="options.search"
                  ></v-text-field>
                </v-col>
              </v-row>
            </template>
            <v-card class="flexcard auth" height="100%">
              <v-card-title>
                <h1 class="mx-auto pt-3 mb-3 text-center black-secondary">
                  {{ formTitle }}
                </h1>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <!-- Form -->
                  <v-row>
                    <!-- name -->
                    <v-col cols="12" sm="6" md="6">
                      <base-input
                        label="Nombre"
                        v-model="$v.editedItem.name.$model"
                        :validation.sync="$v.editedItem.name"
                        validationTextType="default"
                      />
                    </v-col>
                    <!-- name -->
                    <!-- <v-col cols="12" sm="6" md="6">
                      <base-input
                        label="Apellidos"
                        v-model="$v.editedItem.last_name.$model"
                        :validation.sync="$v.editedItem.last_name"
                        validationTextType="default"
                      />
                    </v-col> -->

                    <!-- position_signature -->
                    <v-col cols="12" sm="6" md="6">
                      <base-input
                        label="Cargo"
                        v-model="$v.editedItem.position_signature.$model"
                        :validation.sync="$v.editedItem.position_signature"
                        validationTextType="default"
                      />
                    </v-col>
                    <!-- position_signature -->

                    <!-- email -->
                    <v-col cols="12" sm="6" md="6">
                      <base-input
                        label="Correo electrónico"
                        v-model="$v.editedItem.email.$model"
                        :validation.sync="$v.editedItem.email"
                        validationTextType="none"
                      />
                    </v-col>
                    <!-- email -->

                    <!-- dependency_name  -->
                    <v-col cols="12" sm="6" md="6">
                      <base-select-search
                        label="Dependencia"
                        v-model.trim="$v.editedItem.dependency_name.$model"
                        :items="dependencies"
                        item="dependency_name"
                        :validation="$v.editedItem.dependency_name"
                      />
                    </v-col>
                    <!-- dependency_name  -->

                    <!-- inmediate_superior_id  -->
                    <v-col cols="12" sm="6" md="6">
                      <base-select-search
                        label="Jefe inmediato (Opcional)"
                        v-model.trim="
                          $v.editedItem.inmediate_superior_id.$model
                        "
                        :items="users"
                        item="name"
                        :validation="$v.editedItem.inmediate_superior_id"
                      />
                    </v-col>
                    <!-- inmediate_superior_id  -->

                    <!-- rol -->
                    <v-col cols="12" sm="6" md="6">
                      <base-select-search
                        label="Rol"
                        v-model.trim="$v.editedItem.rol.$model"
                        :items="roles"
                        :validation="$v.editedItem.rol"
                      />
                    </v-col>
                    <!-- rol -->

                    <!-- password -->
                    <!-- <v-col cols="12" sm="6" md="6">
                      <base-input
                        label="Contraseña"
                        v-model="$v.editedItem.password.$model"
                        :validation.sync="$v.editedItem.password"
                        validationTextType="none"
                        :type="typePassword"
                        autocomplete="off"
                        :validationsInput="{
                          required: false,
                          minLength: false,
                          maxnLength: true,
                          isValidPassword: true,
                          showPassword: true,
                        }"
                        @update-password="showPassword($event)"
                      />
                    </v-col> -->
                    <!-- password -->
                  </v-row>
                  <!-- Form -->
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
          </v-dialog>
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
              mdi-pencil
            </v-icon>
          </template>
          <span>Editar</span>
        </v-tooltip>
        <!-- <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              small
              class="mr-2"
              @click="blockItem(item)"
              v-bind="attrs"
              v-on="on"
            >
              mdi-cancel
            </v-icon>
          </template>
          <span>Desactivar</span>
        </v-tooltip> -->
        <!-- <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon> -->
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

    <!-- Dialog block user -->
    <v-dialog v-model="dialogBlock" max-width="400px">
      <v-card class="h-100">
        <v-container>
          <h1 class="black-secondary text-center mt-3 mb-3">
            Desactivar usuario
          </h1>
          <v-row>
            <v-col align="center">
              <v-btn
                color="btn-normal no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto"
                rounded
                @click="disableUser"
                >Confirmar</v-btn
              >
              <v-btn
                color="btn-normal-close no-uppercase mt-3 mb-3"
                rounded
                @click="closeBlock"
              >
                Cancelar
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <!-- Dialog block user -->
  </div>
</template>

<script>
import roleApi from "../apis/roleApi";
import userApi from "../apis/userApi";
import dependencyApi from "../apis/dependencyApi";
import lib from "../libs/function";

import {
  required,
  minLength,
  maxLength,
  email,
  helpers,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      search: "",
      dialog: false,
      dialogBlock: false,
      headers: [
        { text: "USUARIO", value: "name" },
        { text: "ROL", value: "rol", sortable: false },
        { text: "CORREO ELECTRÓNICO", value: "email" },
        { text: "ESTADO", value: "status" },
        { text: "ACCIONES", value: "actions", sortable: false },
      ],
      selected: [],
      records: [],
      recordsFiltered: [],
      editedIndex: -1,
      title: "Usuarios",
      selectedTab: 0,
      options: {},
      editedItem: {
        name: "",
        last_name: "",
        email: "",
        password: "",
        rol: "Administrator",
        position_signature: "",
        dependency_name: "",
        inmediate_superior_id: "",
      },
      defaultItem: {
        name: "",
        email: "",
        last_name: "",
        password: "",
        rol: "Administrator",
        position_signature: "",
        dependency_name: "",
        inmediate_superior_id: "",
      },
      textAlert: "",
      alertEvent: "success",
      roles: [],
      dependencies: [],
      users: [],
      redirectSessionFinished: false,
      showAlert: false,
      typePassword: "password",
      debounce: 0,
      options: {},
    };
  },

  // Validations
  validations: {
    editedItem: {
      password: {
        // required,
        minLength: minLength(8),
        maxLength: maxLength(13),
        isValidPassword: helpers.regex(
          "isValidPassword",
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,13}$/
        ),
      },
      email: {
        required,
        email,
      },
      name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(500),
      },
      last_name: {
        // required,
        minLength: minLength(1),
        maxLength: maxLength(500),
      },
      position_signature: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(500),
      },
      rol: {
        required,
      },
      dependency_name: {
        required,
      },
      inmediate_superior_id: {
        // required,
      },
    },
  },

  // Validations
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo registro" : "Editar registro";
    },
  },

  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: false,
      dirty: false,
    },
    dialog(val) {
      val || this.close();
    },
    dialogBlock(val) {
      val || this.closeBlock();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      this.$v.$reset();
      this.records = [];
      this.recordsFiltered = [];

      let requests = [
        this.getDataFromApi(),
        roleApi.get(),
        dependencyApi.get(null, {
          params: {
            itemsPerPage: -1,
          },
        }),
        userApi.post(`/usersByDependency`),
      ];

      const responses = await Promise.all(requests).catch((error) => {
        this.updateAlert(true, "No fue posible obtener los registros.", "fail");
        this.redirectSessionFinished = lib.verifySessionFinished(
          error.response.status,
          419
        );
      });

      if (responses) {
        this.roles = responses[1].data.roles;
        this.dependencies = responses[2].data.records;
        this.users = responses[3].data.users;
      }
    },

    editItem(item) {
      this.editedIndex = this.recordsFiltered.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    blockItem(item) {
      this.editedIndex = this.recordsFiltered.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogBlock = true;
    },

    closeBlock() {
      this.dialogBlock = false;

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

        const res = await userApi
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

        if (res.data.status == "success") {
          this.redirectSessionFinished = lib.verifySessionFinished(
            res.status,
            200
          );
          this.updateAlert(
            true,
            "Registro actualizado correctamente.",
            "success"
          );
        }
      } else {
        //Creating user
        const res = await userApi.post(null, this.editedItem).catch((error) => {
          this.updateAlert(true, "No fue posible crear el registro.", "fail");
          this.close();
          this.redirectSessionFinished = lib.verifySessionFinished(
            error.response.status,
            419
          );
        });

        if (res.data.status == "success") {
          this.redirectSessionFinished = lib.verifySessionFinished(
            res.status,
            200
          );
          this.updateAlert(true, "Registro creado correctamente.", "success");
        }
      }

      this.close();
      this.initialize();
      return;
    },

    getDataFromApi() {
      this.loading = true;
      this.records = [];
      this.recordsFiltered = [];

      //debounce
      clearTimeout(this.debounce);
      this.debounce = setTimeout(async () => {
        const { data } = await userApi
          .get(null, {
            params: this.options,
          })
          .catch((error) => {
            this.updateAlert(
              true,
              "No fue posible obtener los registros.",
              "fail"
            );
          });

        this.records = data.users;
        this.recordsFiltered = data.users;
        this.total = data.total;
        this.loading = false;
      }, 500);
    },

    async disableUser() {
      const response = await userApi
        .post(`/disableUser`, {
          id: this.editedItem.id,
        })
        .catch((error) => {
          this.updateAlert(
            true,
            "No fue posible desactivar el usuario.",
            "fail"
          );
          this.closeBlock();
        });

      if (response.data.success == true) {
        this.updateAlert(true, response.data.message, "success");
        this.initialize();
        this.closeBlock();
      }
    },

    newUser() {
      this.dialog = true;
      this.$v.$reset();
      this.editedItem.rol = this.roles[0].name;
    },

    updateAlert(show = false, text = "Alerta", event = "success") {
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
    },

    updateTimeOut(event) {
      this.redirectSessionFinished = event;
    },

    showPassword(e) {
      this.typePassword = e.show;
    },
  },
};
</script>
