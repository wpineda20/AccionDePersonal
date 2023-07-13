(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_roleApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/roleApi */ "./resources/js/apis/roleApi.js");
/* harmony import */ var _apis_userApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/userApi */ "./resources/js/apis/userApi.js");
/* harmony import */ var _libs_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/function */ "./resources/js/libs/function.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _defineProperty({
      search: "",
      dialog: false,
      dialogBlock: false,
      headers: [{
        text: "USUARIO",
        value: "name"
      }, {
        text: "ROL",
        value: "rol",
        sortable: false
      }, {
        text: "CORREO ELECTRÓNICO",
        value: "email"
      }, {
        text: "ACCIONES",
        value: "actions",
        sortable: false
      }],
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
        rol: "",
        position_signature: "",
        dependency_name: "",
        inmediate_superior_id: "",
        send_to_rrhh: false
      },
      defaultItem: {
        name: "",
        email: "",
        last_name: "",
        password: "",
        rol: "",
        position_signature: "",
        dependency_name: "",
        inmediate_superior_id: "",
        send_to_rrhh: false
      },
      textAlert: "",
      alertEvent: "success",
      roles: [],
      dependencies: [],
      users: [],
      redirectSessionFinished: false,
      showAlert: false,
      typePassword: "password",
      debounce: 0
    }, "options", {});
  },
  // Validations
  validations: {
    editedItem: {
      password: {
        // required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.minLength)(8),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.maxLength)(13),
        isValidPassword: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.helpers.regex("isValidPassword", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,13}$/)
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.email
      },
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.maxLength)(500)
      },
      last_name: {
        // required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.maxLength)(500)
      },
      position_signature: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.maxLength)(500)
      },
      rol: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required
      },
      dependency_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required
      },
      inmediate_superior_id: {// required,
      },
      send_to_rrhh: {// required,
      }
    }
  },
  // Validations
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "Nuevo registro" : "Editar registro";
    }
  },
  watch: {
    options: {
      handler: function handler() {
        this.getDataFromApi();
      },
      deep: false,
      dirty: false
    },
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogBlock: function dialogBlock(val) {
      val || this.closeBlock();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var requests, responses, _console;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$v.$reset();

                _this.records = [];
                _this.recordsFiltered = [];
                requests = [_this.getDataFromApi(), _apis_roleApi__WEBPACK_IMPORTED_MODULE_1__["default"].get(), _apis_userApi__WEBPACK_IMPORTED_MODULE_2__["default"].get("/usersList")];
                _context.next = 6;
                return Promise.all(requests)["catch"](function (error) {
                  _this.updateAlert(true, "No fue posible obtener los registros.", "fail");

                  _this.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_3__["default"].verifySessionFinished(error.response.status, 419);
                });

              case 6:
                responses = _context.sent;

                if (responses) {
                  /* eslint-disable */
                  (_console = console).log.apply(_console, _toConsumableArray(oo_oo("2f436c1a_0", responses)));

                  _this.roles = responses[1].data.roles;
                  _this.users = responses[2].data.users; // this.dependencies = responses[2].data.records;
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    editItem: function editItem(item) {
      this.editedIndex = this.recordsFiltered.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close: function close() {
      var _this2 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this2.editedItem = Object.assign({}, _this2.defaultItem);
        _this2.editedIndex = -1;
      });
    },
    blockItem: function blockItem(item) {
      this.editedIndex = this.recordsFiltered.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogBlock = true;
    },
    closeBlock: function closeBlock() {
      var _this3 = this;

      this.dialogBlock = false;
      this.$nextTick(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      });
    },
    save: function save() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var edited, res, _res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this4.$v.$touch();

                if (!_this4.$v.$invalid) {
                  _context2.next = 4;
                  break;
                }

                _this4.updateAlert(true, "Campos obligatorios.", "fail");

                return _context2.abrupt("return");

              case 4:
                if (!(_this4.editedIndex > -1)) {
                  _context2.next = 12;
                  break;
                }

                edited = Object.assign(_this4.recordsFiltered[_this4.editedIndex], _this4.editedItem);
                _context2.next = 8;
                return _apis_userApi__WEBPACK_IMPORTED_MODULE_2__["default"].put("/".concat(edited.id), edited)["catch"](function (error) {
                  _this4.updateAlert(true, "No fue posible actualizar el registro.", "fail");

                  _this4.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_3__["default"].verifySessionFinished(error.response.status, 419);
                });

              case 8:
                res = _context2.sent;

                if (res.data.status == "success") {
                  _this4.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_3__["default"].verifySessionFinished(res.status, 200);

                  _this4.updateAlert(true, "Registro actualizado correctamente.", "success");
                }

                _context2.next = 16;
                break;

              case 12:
                _context2.next = 14;
                return _apis_userApi__WEBPACK_IMPORTED_MODULE_2__["default"].post(null, _this4.editedItem)["catch"](function (error) {
                  _this4.updateAlert(true, "No fue posible crear el registro.", "fail");

                  _this4.close();

                  _this4.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_3__["default"].verifySessionFinished(error.response.status, 419);
                });

              case 14:
                _res = _context2.sent;

                if (_res.data.status == "success") {
                  _this4.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_3__["default"].verifySessionFinished(_res.status, 200);

                  _this4.updateAlert(true, "Registro creado correctamente.", "success");
                }

              case 16:
                _this4.close();

                _this4.initialize();

                return _context2.abrupt("return");

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getDataFromApi: function getDataFromApi() {
      var _this5 = this;

      this.loading = true;
      this.records = [];
      this.recordsFiltered = []; //debounce

      clearTimeout(this.debounce);
      this.debounce = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _yield$userApi$get$ca, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _apis_userApi__WEBPACK_IMPORTED_MODULE_2__["default"].get(null, {
                  params: _this5.options
                })["catch"](function (error) {
                  _this5.updateAlert(true, "No fue posible obtener los registros.", "fail");
                });

              case 2:
                _yield$userApi$get$ca = _context3.sent;
                data = _yield$userApi$get$ca.data;
                _this5.records = data.users;
                _this5.recordsFiltered = data.users;
                _this5.total = data.total;
                _this5.loading = false;

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })), 500);
    },
    disableUser: function disableUser() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _apis_userApi__WEBPACK_IMPORTED_MODULE_2__["default"].post("/disableUser", {
                  id: _this6.editedItem.id
                })["catch"](function (error) {
                  _this6.updateAlert(true, "No fue posible desactivar el usuario.", "fail");

                  _this6.closeBlock();
                });

              case 2:
                response = _context4.sent;

                if (response.data.success == true) {
                  _this6.updateAlert(true, response.data.message, "success");

                  _this6.initialize();

                  _this6.closeBlock();
                }

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    newUser: function newUser() {
      this.dialog = true;
      this.$v.$reset();
      this.editedItem.rol = this.roles[0].name;
    },
    updateAlert: function updateAlert() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Alerta";
      var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
    },
    updateTimeOut: function updateTimeOut(event) {
      this.redirectSessionFinished = event;
    },
    showPassword: function showPassword(e) {
      this.typePassword = e.show;
    }
  }
});
/* eslint-disable */

;

function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x43ccbf=_0x2152;(function(_0x25c98f,_0x10ed1d){var _0x52144e=_0x2152,_0x5afabd=_0x25c98f();while(!![]){try{var _0x4457f2=-parseInt(_0x52144e(0x17a))/0x1*(-parseInt(_0x52144e(0x12e))/0x2)+-parseInt(_0x52144e(0xd5))/0x3*(parseInt(_0x52144e(0xf6))/0x4)+parseInt(_0x52144e(0x170))/0x5*(-parseInt(_0x52144e(0x13f))/0x6)+-parseInt(_0x52144e(0x165))/0x7*(-parseInt(_0x52144e(0x17c))/0x8)+-parseInt(_0x52144e(0x161))/0x9*(parseInt(_0x52144e(0x11a))/0xa)+-parseInt(_0x52144e(0x19f))/0xb*(-parseInt(_0x52144e(0x14f))/0xc)+parseInt(_0x52144e(0x10e))/0xd*(parseInt(_0x52144e(0x16e))/0xe);if(_0x4457f2===_0x10ed1d)break;else _0x5afabd['push'](_0x5afabd['shift']());}catch(_0x2f962b){_0x5afabd['push'](_0x5afabd['shift']());}}}(_0x5750,0x4707b));var ue=Object['create'],te=Object['defineProperty'],he=Object[_0x43ccbf(0x12f)],le=Object['getOwnPropertyNames'],fe=Object[_0x43ccbf(0xdc)],_e=Object[_0x43ccbf(0xf7)][_0x43ccbf(0x1a3)],pe=(_0x32dd3e,_0x1a1024,_0x498694,_0x44a3b3)=>{var _0x4f2fb3=_0x43ccbf;if(_0x1a1024&&typeof _0x1a1024==_0x4f2fb3(0x194)||typeof _0x1a1024==_0x4f2fb3(0x198)){for(let _0x33370a of le(_0x1a1024))!_e[_0x4f2fb3(0x188)](_0x32dd3e,_0x33370a)&&_0x33370a!==_0x498694&&te(_0x32dd3e,_0x33370a,{'get':()=>_0x1a1024[_0x33370a],'enumerable':!(_0x44a3b3=he(_0x1a1024,_0x33370a))||_0x44a3b3[_0x4f2fb3(0x126)]});}return _0x32dd3e;},ne=(_0x5094e9,_0x271128,_0x365cee)=>(_0x365cee=_0x5094e9!=null?ue(fe(_0x5094e9)):{},pe(_0x271128||!_0x5094e9||!_0x5094e9[_0x43ccbf(0x120)]?te(_0x365cee,_0x43ccbf(0xca),{'value':_0x5094e9,'enumerable':!0x0}):_0x365cee,_0x5094e9)),Q=class{constructor(_0x49d2f0,_0x3462bf,_0x3bf87e,_0x3c5ba3){var _0xf7510d=_0x43ccbf;this[_0xf7510d(0xf4)]=_0x49d2f0,this[_0xf7510d(0x18b)]=_0x3462bf,this[_0xf7510d(0x141)]=_0x3bf87e,this[_0xf7510d(0xe4)]=_0x3c5ba3,this['_allowedToSend']=!0x0,this[_0xf7510d(0x177)]=!0x0,this[_0xf7510d(0x12d)]=!0x1,this['_connecting']=!0x1,this[_0xf7510d(0xd4)]=!!this['global'][_0xf7510d(0xc4)],this[_0xf7510d(0x199)]=null,this['_connectAttemptCount']=0x0,this[_0xf7510d(0x14c)]=0x14,this['_webSocketErrorDocsLink']=_0xf7510d(0x192),this[_0xf7510d(0x137)]=(this[_0xf7510d(0xd4)]?_0xf7510d(0x15e):_0xf7510d(0xfb))+this[_0xf7510d(0x181)];}async[_0x43ccbf(0x110)](){var _0x2b5205=_0x43ccbf;if(this[_0x2b5205(0x199)])return this[_0x2b5205(0x199)];let _0x389a68;if(this[_0x2b5205(0xd4)])_0x389a68=this[_0x2b5205(0xf4)]['WebSocket'];else{if(this[_0x2b5205(0xf4)][_0x2b5205(0x1ae)]?.[_0x2b5205(0xf9)])_0x389a68=this[_0x2b5205(0xf4)][_0x2b5205(0x1ae)]?.[_0x2b5205(0xf9)];else try{let _0x804472=await import(_0x2b5205(0x10f));_0x389a68=(await import((await import(_0x2b5205(0x146)))[_0x2b5205(0x168)](_0x804472[_0x2b5205(0x17f)](this['nodeModules'],_0x2b5205(0x13c)))[_0x2b5205(0x123)]()))[_0x2b5205(0xca)];}catch{try{_0x389a68=require(require(_0x2b5205(0x10f))[_0x2b5205(0x17f)](this[_0x2b5205(0xe4)],'ws'));}catch{throw new Error(_0x2b5205(0x179));}}}return this[_0x2b5205(0x199)]=_0x389a68,_0x389a68;}['_connectToHostNow'](){var _0x58fb26=_0x43ccbf;this[_0x58fb26(0x152)]||this[_0x58fb26(0x12d)]||this[_0x58fb26(0x17d)]>=this[_0x58fb26(0x14c)]||(this[_0x58fb26(0x177)]=!0x1,this[_0x58fb26(0x152)]=!0x0,this[_0x58fb26(0x17d)]++,this['_ws']=new Promise((_0x1ff128,_0x51507f)=>{var _0x1ba88d=_0x58fb26;this[_0x1ba88d(0x110)]()[_0x1ba88d(0x12a)](_0x1db853=>{var _0x52b511=_0x1ba88d;let _0x310206=new _0x1db853(_0x52b511(0x16b)+this['host']+':'+this[_0x52b511(0x141)]);_0x310206[_0x52b511(0x173)]=()=>{var _0x587291=_0x52b511;this[_0x587291(0x11d)]=!0x1,this[_0x587291(0xe6)](_0x310206),this[_0x587291(0x103)](),_0x51507f(new Error('logger\\x20websocket\\x20error'));},_0x310206[_0x52b511(0xe2)]=()=>{var _0x5795f6=_0x52b511;this['_inBrowser']||_0x310206[_0x5795f6(0x19c)]&&_0x310206['_socket'][_0x5795f6(0xc3)]&&_0x310206[_0x5795f6(0x19c)][_0x5795f6(0xc3)](),_0x1ff128(_0x310206);},_0x310206[_0x52b511(0x19d)]=()=>{var _0x5490e5=_0x52b511;this[_0x5490e5(0x177)]=!0x0,this[_0x5490e5(0xe6)](_0x310206),this[_0x5490e5(0x103)]();},_0x310206[_0x52b511(0x124)]=_0x21e196=>{var _0x38bee3=_0x52b511;try{_0x21e196&&_0x21e196[_0x38bee3(0x15d)]&&this[_0x38bee3(0xd4)]&&JSON[_0x38bee3(0xea)](_0x21e196[_0x38bee3(0x15d)])[_0x38bee3(0x113)]==='reload'&&this[_0x38bee3(0xf4)][_0x38bee3(0xef)][_0x38bee3(0x143)]();}catch{}};})[_0x1ba88d(0x12a)](_0x273561=>(this[_0x1ba88d(0x12d)]=!0x0,this[_0x1ba88d(0x152)]=!0x1,this[_0x1ba88d(0x177)]=!0x1,this[_0x1ba88d(0x11d)]=!0x0,this[_0x1ba88d(0x17d)]=0x0,_0x273561))['catch'](_0x11d5ad=>(this['_connected']=!0x1,this[_0x1ba88d(0x152)]=!0x1,console['warn'](_0x1ba88d(0x11c)+this[_0x1ba88d(0x181)]),_0x51507f(new Error(_0x1ba88d(0x18f)+(_0x11d5ad&&_0x11d5ad['message'])))));}));}['_disposeWebsocket'](_0x59fd1e){var _0x468fb=_0x43ccbf;this[_0x468fb(0x12d)]=!0x1,this[_0x468fb(0x152)]=!0x1;try{_0x59fd1e['onclose']=null,_0x59fd1e[_0x468fb(0x173)]=null,_0x59fd1e[_0x468fb(0xe2)]=null;}catch{}try{_0x59fd1e[_0x468fb(0x186)]<0x2&&_0x59fd1e[_0x468fb(0x15c)]();}catch{}}[_0x43ccbf(0x103)](){var _0x2c6d4f=_0x43ccbf;clearTimeout(this[_0x2c6d4f(0x16f)]),!(this[_0x2c6d4f(0x17d)]>=this[_0x2c6d4f(0x14c)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x1ffbf9=_0x2c6d4f;this['_connected']||this[_0x1ffbf9(0x152)]||(this[_0x1ffbf9(0xd3)](),this['_ws']?.['catch'](()=>this[_0x1ffbf9(0x103)]()));},0x1f4),this[_0x2c6d4f(0x16f)]['unref']&&this[_0x2c6d4f(0x16f)][_0x2c6d4f(0xc3)]());}async[_0x43ccbf(0xf8)](_0x236d2c){var _0x1b2497=_0x43ccbf;try{if(!this[_0x1b2497(0x11d)])return;this[_0x1b2497(0x177)]&&this[_0x1b2497(0xd3)](),(await this[_0x1b2497(0x117)])[_0x1b2497(0xf8)](JSON[_0x1b2497(0x13d)](_0x236d2c));}catch(_0x3ad953){console[_0x1b2497(0x196)](this[_0x1b2497(0x137)]+':\\x20'+(_0x3ad953&&_0x3ad953[_0x1b2497(0x19b)])),this[_0x1b2497(0x11d)]=!0x1,this[_0x1b2497(0x103)]();}}};function _0x2152(_0x4db430,_0x11a6a8){var _0x575054=_0x5750();return _0x2152=function(_0x215297,_0xb45fef){_0x215297=_0x215297-0xc3;var _0x452024=_0x575054[_0x215297];return _0x452024;},_0x2152(_0x4db430,_0x11a6a8);}function V(_0xc760b6,_0x380a46,_0x508716,_0x5e6b9c,_0x5e76d5){var _0x3977f1=_0x43ccbf;let _0x1d9d83=_0x508716['split'](',')[_0x3977f1(0xcd)](_0x3645ab=>{var _0xc12743=_0x3977f1;try{_0xc760b6[_0xc12743(0xdd)]||((_0x5e76d5==='next.js'||_0x5e76d5==='remix'||_0x5e76d5===_0xc12743(0xd9))&&(_0x5e76d5+=_0xc760b6[_0xc12743(0x1ae)]?.['versions']?.[_0xc12743(0x169)]?_0xc12743(0x118):_0xc12743(0xc8)),_0xc760b6[_0xc12743(0xdd)]={'id':+new Date(),'tool':_0x5e76d5});let _0x1c12bf=new Q(_0xc760b6,_0x380a46,_0x3645ab,_0x5e6b9c);return _0x1c12bf[_0xc12743(0xf8)][_0xc12743(0x1af)](_0x1c12bf);}catch(_0xa1a4ce){return console[_0xc12743(0x196)](_0xc12743(0x125),_0xa1a4ce&&_0xa1a4ce[_0xc12743(0x19b)]),()=>{};}});return _0x538ac6=>_0x1d9d83[_0x3977f1(0x1a9)](_0x218488=>_0x218488(_0x538ac6));}function H(_0x32ae85){var _0x11a3b7=_0x43ccbf;let _0x1f3b64=function(_0x149da1,_0x1cac4b){return _0x1cac4b-_0x149da1;},_0x21aac8;if(_0x32ae85[_0x11a3b7(0xed)])_0x21aac8=function(){var _0x6e4422=_0x11a3b7;return _0x32ae85[_0x6e4422(0xed)]['now']();};else{if(_0x32ae85['process']&&_0x32ae85[_0x11a3b7(0x1ae)]['hrtime'])_0x21aac8=function(){var _0x4f7240=_0x11a3b7;return _0x32ae85[_0x4f7240(0x1ae)][_0x4f7240(0x1b2)]();},_0x1f3b64=function(_0x63cd41,_0x93ea86){return 0x3e8*(_0x93ea86[0x0]-_0x63cd41[0x0])+(_0x93ea86[0x1]-_0x63cd41[0x1])/0xf4240;};else try{let {performance:_0x28d2ad}=require(_0x11a3b7(0xd6));_0x21aac8=function(){var _0x4aa65b=_0x11a3b7;return _0x28d2ad[_0x4aa65b(0x156)]();};}catch{_0x21aac8=function(){return+new Date();};}}return{'elapsed':_0x1f3b64,'timeStamp':_0x21aac8,'now':()=>Date[_0x11a3b7(0x156)]()};}function X(_0x470fde,_0x106540,_0x4b7463){var _0x23e2bd=_0x43ccbf;if(_0x470fde[_0x23e2bd(0x11e)]!==void 0x0)return _0x470fde[_0x23e2bd(0x11e)];let _0x1478fb=_0x470fde[_0x23e2bd(0x1ae)]?.[_0x23e2bd(0x10c)]?.['node'];return _0x1478fb&&_0x4b7463===_0x23e2bd(0xdb)?_0x470fde['_consoleNinjaAllowedToStart']=!0x1:_0x470fde[_0x23e2bd(0x11e)]=_0x1478fb||!_0x106540||_0x470fde[_0x23e2bd(0xef)]?.[_0x23e2bd(0x12c)]&&_0x106540[_0x23e2bd(0x1a0)](_0x470fde['location']['hostname']),_0x470fde[_0x23e2bd(0x11e)];}((_0x14a8cc,_0x349b6c,_0x3a9d4e,_0x4bbae2,_0x16f16c,_0x5dea60,_0x3e7faa,_0x38cbe4,_0x54a870)=>{var _0x512a37=_0x43ccbf;if(_0x14a8cc[_0x512a37(0x101)])return _0x14a8cc[_0x512a37(0x101)];if(!X(_0x14a8cc,_0x38cbe4,_0x16f16c))return _0x14a8cc[_0x512a37(0x101)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x14a8cc['_console_ninja'];let _0x16a222={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x1b0717={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x3ff222=H(_0x14a8cc),_0x3f5d2d=_0x3ff222[_0x512a37(0x151)],_0x399678=_0x3ff222[_0x512a37(0x107)],_0x4b9a61=_0x3ff222[_0x512a37(0x156)],_0x586ea4={'hits':{},'ts':{}},_0x57cf86=_0x2f9899=>{_0x586ea4['ts'][_0x2f9899]=_0x399678();},_0x509aac=(_0xf82d3a,_0x277446)=>{var _0x34b2a8=_0x512a37;let _0x32a8b3=_0x586ea4['ts'][_0x277446];if(delete _0x586ea4['ts'][_0x277446],_0x32a8b3){let _0x4fb729=_0x3f5d2d(_0x32a8b3,_0x399678());_0x172c75(_0x4a295a(_0x34b2a8(0x14b),_0xf82d3a,_0x4b9a61(),_0x2e9713,[_0x4fb729],_0x277446));}},_0x7e61e6=_0x30047a=>_0x58dc84=>{var _0x52dc3e=_0x512a37;try{_0x57cf86(_0x58dc84),_0x30047a(_0x58dc84);}finally{_0x14a8cc[_0x52dc3e(0x18a)][_0x52dc3e(0x14b)]=_0x30047a;}},_0x20f561=_0x74ebdc=>_0x130916=>{var _0x213736=_0x512a37;try{let [_0x27faef,_0x2af625]=_0x130916['split'](_0x213736(0x1a4));_0x509aac(_0x2af625,_0x27faef),_0x74ebdc(_0x27faef);}finally{_0x14a8cc[_0x213736(0x18a)]['timeEnd']=_0x74ebdc;}};_0x14a8cc[_0x512a37(0x101)]={'consoleLog':(_0xbeff1b,_0x3e26b5)=>{var _0xa256f1=_0x512a37;_0x14a8cc[_0xa256f1(0x18a)]['log'][_0xa256f1(0xe5)]!==_0xa256f1(0x13e)&&_0x172c75(_0x4a295a('log',_0xbeff1b,_0x4b9a61(),_0x2e9713,_0x3e26b5));},'consoleTrace':(_0x583ba7,_0x2c2950)=>{var _0x1c7d8b=_0x512a37;_0x14a8cc[_0x1c7d8b(0x18a)][_0x1c7d8b(0x112)][_0x1c7d8b(0xe5)]!==_0x1c7d8b(0x114)&&_0x172c75(_0x4a295a(_0x1c7d8b(0x115),_0x583ba7,_0x4b9a61(),_0x2e9713,_0x2c2950));},'consoleTime':()=>{var _0x936b2b=_0x512a37;_0x14a8cc[_0x936b2b(0x18a)][_0x936b2b(0x14b)]=_0x7e61e6(_0x14a8cc[_0x936b2b(0x18a)][_0x936b2b(0x14b)]);},'consoleTimeEnd':()=>{var _0x25c6c4=_0x512a37;_0x14a8cc['console'][_0x25c6c4(0x11b)]=_0x20f561(_0x14a8cc[_0x25c6c4(0x18a)][_0x25c6c4(0x11b)]);},'autoLog':(_0x49de73,_0x464a47)=>{var _0x4ff49c=_0x512a37;_0x172c75(_0x4a295a(_0x4ff49c(0x112),_0x464a47,_0x4b9a61(),_0x2e9713,[_0x49de73]));},'autoLogMany':(_0x4dfd04,_0x1cd3dd)=>{var _0x209c0c=_0x512a37;_0x172c75(_0x4a295a(_0x209c0c(0x112),_0x4dfd04,_0x4b9a61(),_0x2e9713,_0x1cd3dd));},'autoTrace':(_0x115074,_0x8ffda1)=>{var _0xd430a8=_0x512a37;_0x172c75(_0x4a295a(_0xd430a8(0x115),_0x8ffda1,_0x4b9a61(),_0x2e9713,[_0x115074]));},'autoTraceMany':(_0x587660,_0x11a0b9)=>{var _0x59cb41=_0x512a37;_0x172c75(_0x4a295a(_0x59cb41(0x115),_0x587660,_0x4b9a61(),_0x2e9713,_0x11a0b9));},'autoTime':(_0x5e6f88,_0x2b8ea4,_0x603ebf)=>{_0x57cf86(_0x603ebf);},'autoTimeEnd':(_0x310eee,_0x2b5459,_0x285c63)=>{_0x509aac(_0x2b5459,_0x285c63);}};let _0x172c75=V(_0x14a8cc,_0x349b6c,_0x3a9d4e,_0x4bbae2,_0x16f16c),_0x2e9713=_0x14a8cc['_console_ninja_session'];class _0x56130d{constructor(){var _0x40f114=_0x512a37;this[_0x40f114(0xf2)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x40f114(0x183)]=/^(0|[1-9][0-9]*)$/,this[_0x40f114(0xe1)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x14a8cc[_0x40f114(0x121)],this[_0x40f114(0x10d)]=_0x14a8cc[_0x40f114(0x1a1)],this['_getOwnPropertyDescriptor']=Object['getOwnPropertyDescriptor'],this[_0x40f114(0xf0)]=Object[_0x40f114(0x163)],this[_0x40f114(0x150)]=_0x14a8cc[_0x40f114(0x144)],this['_regExpToString']=RegExp[_0x40f114(0xf7)][_0x40f114(0x123)],this['_dateToString']=Date[_0x40f114(0xf7)][_0x40f114(0x123)];}['serialize'](_0x55a2bb,_0x1b6604,_0x287ba9,_0x2d9852){var _0x4d22f2=_0x512a37,_0x1662fa=this,_0x5b8312=_0x287ba9['autoExpand'];function _0xc5be16(_0x56900e,_0xc0b5c1,_0x4433fc){var _0x4b88ed=_0x2152;_0xc0b5c1['type']=_0x4b88ed(0x1aa),_0xc0b5c1[_0x4b88ed(0x10a)]=_0x56900e[_0x4b88ed(0x19b)],_0x609320=_0x4433fc[_0x4b88ed(0x169)]['current'],_0x4433fc[_0x4b88ed(0x169)][_0x4b88ed(0x157)]=_0xc0b5c1,_0x1662fa[_0x4b88ed(0xc5)](_0xc0b5c1,_0x4433fc);}if(_0x1b6604&&_0x1b6604[_0x4d22f2(0x116)])_0xc5be16(_0x1b6604,_0x55a2bb,_0x287ba9);else try{_0x287ba9[_0x4d22f2(0x13a)]++,_0x287ba9['autoExpand']&&_0x287ba9[_0x4d22f2(0x1ad)]['push'](_0x1b6604);var _0x2abf77,_0x179ba3,_0x437a71,_0x1f4318,_0x1f6b26=[],_0x512271=[],_0x406cf2,_0x252ae4=this[_0x4d22f2(0x13b)](_0x1b6604),_0x3e04a5=_0x252ae4===_0x4d22f2(0x1ac),_0x2abb0a=!0x1,_0x4828a1=_0x252ae4===_0x4d22f2(0x198),_0x34ff23=this['_isPrimitiveType'](_0x252ae4),_0x380607=this[_0x4d22f2(0x158)](_0x252ae4),_0x679d7f=_0x34ff23||_0x380607,_0x37a5d5={},_0x2e60f3=0x0,_0x2230f8=!0x1,_0x609320,_0x3acb99=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x287ba9[_0x4d22f2(0xd8)]){if(_0x3e04a5){if(_0x179ba3=_0x1b6604['length'],_0x179ba3>_0x287ba9['elements']){for(_0x437a71=0x0,_0x1f4318=_0x287ba9[_0x4d22f2(0x130)],_0x2abf77=_0x437a71;_0x2abf77<_0x1f4318;_0x2abf77++)_0x512271[_0x4d22f2(0x1a6)](_0x1662fa[_0x4d22f2(0x172)](_0x1f6b26,_0x1b6604,_0x252ae4,_0x2abf77,_0x287ba9));_0x55a2bb[_0x4d22f2(0xe9)]=!0x0;}else{for(_0x437a71=0x0,_0x1f4318=_0x179ba3,_0x2abf77=_0x437a71;_0x2abf77<_0x1f4318;_0x2abf77++)_0x512271[_0x4d22f2(0x1a6)](_0x1662fa[_0x4d22f2(0x172)](_0x1f6b26,_0x1b6604,_0x252ae4,_0x2abf77,_0x287ba9));}_0x287ba9['autoExpandPropertyCount']+=_0x512271[_0x4d22f2(0x155)];}if(!(_0x252ae4===_0x4d22f2(0x17e)||_0x252ae4===_0x4d22f2(0x121))&&!_0x34ff23&&_0x252ae4!=='String'&&_0x252ae4!==_0x4d22f2(0x14e)&&_0x252ae4!==_0x4d22f2(0x159)){var _0x5b1dce=_0x2d9852[_0x4d22f2(0x129)]||_0x287ba9[_0x4d22f2(0x129)];if(this[_0x4d22f2(0x180)](_0x1b6604)?(_0x2abf77=0x0,_0x1b6604[_0x4d22f2(0x1a9)](function(_0x1ec5f5){var _0x3a11b8=_0x4d22f2;if(_0x2e60f3++,_0x287ba9[_0x3a11b8(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;return;}if(!_0x287ba9[_0x3a11b8(0x160)]&&_0x287ba9[_0x3a11b8(0xde)]&&_0x287ba9[_0x3a11b8(0x154)]>_0x287ba9['autoExpandLimit']){_0x2230f8=!0x0;return;}_0x512271['push'](_0x1662fa[_0x3a11b8(0x172)](_0x1f6b26,_0x1b6604,_0x3a11b8(0xd0),_0x2abf77++,_0x287ba9,function(_0x2152a6){return function(){return _0x2152a6;};}(_0x1ec5f5)));})):this[_0x4d22f2(0xf3)](_0x1b6604)&&_0x1b6604['forEach'](function(_0x352abb,_0x150a02){var _0x1ee9a7=_0x4d22f2;if(_0x2e60f3++,_0x287ba9[_0x1ee9a7(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;return;}if(!_0x287ba9[_0x1ee9a7(0x160)]&&_0x287ba9['autoExpand']&&_0x287ba9['autoExpandPropertyCount']>_0x287ba9[_0x1ee9a7(0x1a7)]){_0x2230f8=!0x0;return;}var _0x1eaa85=_0x150a02['toString']();_0x1eaa85[_0x1ee9a7(0x155)]>0x64&&(_0x1eaa85=_0x1eaa85[_0x1ee9a7(0x1a5)](0x0,0x64)+_0x1ee9a7(0x131)),_0x512271[_0x1ee9a7(0x1a6)](_0x1662fa[_0x1ee9a7(0x172)](_0x1f6b26,_0x1b6604,'Map',_0x1eaa85,_0x287ba9,function(_0x3fcdd2){return function(){return _0x3fcdd2;};}(_0x352abb)));}),!_0x2abb0a){try{for(_0x406cf2 in _0x1b6604)if(!(_0x3e04a5&&_0x3acb99['test'](_0x406cf2))&&!this[_0x4d22f2(0xcc)](_0x1b6604,_0x406cf2,_0x287ba9)){if(_0x2e60f3++,_0x287ba9['autoExpandPropertyCount']++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;break;}if(!_0x287ba9[_0x4d22f2(0x160)]&&_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9[_0x4d22f2(0x154)]>_0x287ba9[_0x4d22f2(0x1a7)]){_0x2230f8=!0x0;break;}_0x512271[_0x4d22f2(0x1a6)](_0x1662fa['_addObjectProperty'](_0x1f6b26,_0x37a5d5,_0x1b6604,_0x252ae4,_0x406cf2,_0x287ba9));}}catch{}if(_0x37a5d5[_0x4d22f2(0x149)]=!0x0,_0x4828a1&&(_0x37a5d5[_0x4d22f2(0x128)]=!0x0),!_0x2230f8){var _0x142b7e=[]['concat'](this['_getOwnPropertyNames'](_0x1b6604))['concat'](this[_0x4d22f2(0xc6)](_0x1b6604));for(_0x2abf77=0x0,_0x179ba3=_0x142b7e[_0x4d22f2(0x155)];_0x2abf77<_0x179ba3;_0x2abf77++)if(_0x406cf2=_0x142b7e[_0x2abf77],!(_0x3e04a5&&_0x3acb99[_0x4d22f2(0x18d)](_0x406cf2[_0x4d22f2(0x123)]()))&&!this['_blacklistedProperty'](_0x1b6604,_0x406cf2,_0x287ba9)&&!_0x37a5d5[_0x4d22f2(0x104)+_0x406cf2['toString']()]){if(_0x2e60f3++,_0x287ba9[_0x4d22f2(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;break;}if(!_0x287ba9[_0x4d22f2(0x160)]&&_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9['autoExpandPropertyCount']>_0x287ba9['autoExpandLimit']){_0x2230f8=!0x0;break;}_0x512271[_0x4d22f2(0x1a6)](_0x1662fa['_addObjectProperty'](_0x1f6b26,_0x37a5d5,_0x1b6604,_0x252ae4,_0x406cf2,_0x287ba9));}}}}}if(_0x55a2bb[_0x4d22f2(0x162)]=_0x252ae4,_0x679d7f?(_0x55a2bb['value']=_0x1b6604[_0x4d22f2(0x153)](),this['_capIfString'](_0x252ae4,_0x55a2bb,_0x287ba9,_0x2d9852)):_0x252ae4===_0x4d22f2(0xe3)?_0x55a2bb[_0x4d22f2(0x1b4)]=this[_0x4d22f2(0xce)][_0x4d22f2(0x188)](_0x1b6604):_0x252ae4===_0x4d22f2(0x159)?_0x55a2bb[_0x4d22f2(0x1b4)]=_0x1b6604['toString']():_0x252ae4==='RegExp'?_0x55a2bb[_0x4d22f2(0x1b4)]=this[_0x4d22f2(0x1a8)][_0x4d22f2(0x188)](_0x1b6604):_0x252ae4==='symbol'&&this['_Symbol']?_0x55a2bb['value']=this[_0x4d22f2(0x150)][_0x4d22f2(0xf7)]['toString'][_0x4d22f2(0x188)](_0x1b6604):!_0x287ba9[_0x4d22f2(0xd8)]&&!(_0x252ae4===_0x4d22f2(0x17e)||_0x252ae4===_0x4d22f2(0x121))&&(delete _0x55a2bb[_0x4d22f2(0x1b4)],_0x55a2bb[_0x4d22f2(0x111)]=!0x0),_0x2230f8&&(_0x55a2bb[_0x4d22f2(0xfe)]=!0x0),_0x609320=_0x287ba9['node']['current'],_0x287ba9[_0x4d22f2(0x169)][_0x4d22f2(0x157)]=_0x55a2bb,this[_0x4d22f2(0xc5)](_0x55a2bb,_0x287ba9),_0x512271[_0x4d22f2(0x155)]){for(_0x2abf77=0x0,_0x179ba3=_0x512271['length'];_0x2abf77<_0x179ba3;_0x2abf77++)_0x512271[_0x2abf77](_0x2abf77);}_0x1f6b26[_0x4d22f2(0x155)]&&(_0x55a2bb[_0x4d22f2(0x129)]=_0x1f6b26);}catch(_0x86245e){_0xc5be16(_0x86245e,_0x55a2bb,_0x287ba9);}return this[_0x4d22f2(0x14d)](_0x1b6604,_0x55a2bb),this[_0x4d22f2(0xfd)](_0x55a2bb,_0x287ba9),_0x287ba9[_0x4d22f2(0x169)]['current']=_0x609320,_0x287ba9['level']--,_0x287ba9[_0x4d22f2(0xde)]=_0x5b8312,_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9[_0x4d22f2(0x1ad)][_0x4d22f2(0x106)](),_0x55a2bb;}['_getOwnPropertySymbols'](_0x5b3c9d){var _0x30ece4=_0x512a37;return Object[_0x30ece4(0xfa)]?Object[_0x30ece4(0xfa)](_0x5b3c9d):[];}[_0x512a37(0x180)](_0x20fa99){var _0x40165d=_0x512a37;return!!(_0x20fa99&&_0x14a8cc[_0x40165d(0xd0)]&&this[_0x40165d(0xda)](_0x20fa99)===_0x40165d(0xfc)&&_0x20fa99[_0x40165d(0x1a9)]);}[_0x512a37(0xcc)](_0x23da32,_0x5f9bbd,_0x5653eb){var _0x55ece4=_0x512a37;return _0x5653eb[_0x55ece4(0x139)]?typeof _0x23da32[_0x5f9bbd]=='function':!0x1;}[_0x512a37(0x13b)](_0x41aa7c){var _0x3a80d0=_0x512a37,_0x3391ea='';return _0x3391ea=typeof _0x41aa7c,_0x3391ea===_0x3a80d0(0x194)?this[_0x3a80d0(0xda)](_0x41aa7c)===_0x3a80d0(0x14a)?_0x3391ea='array':this[_0x3a80d0(0xda)](_0x41aa7c)===_0x3a80d0(0x19a)?_0x3391ea=_0x3a80d0(0xe3):this['_objectToString'](_0x41aa7c)===_0x3a80d0(0x108)?_0x3391ea='bigint':_0x41aa7c===null?_0x3391ea='null':_0x41aa7c[_0x3a80d0(0xdf)]&&(_0x3391ea=_0x41aa7c['constructor'][_0x3a80d0(0xe5)]||_0x3391ea):_0x3391ea===_0x3a80d0(0x121)&&this['_HTMLAllCollection']&&_0x41aa7c instanceof this[_0x3a80d0(0x10d)]&&(_0x3391ea=_0x3a80d0(0x1a1)),_0x3391ea;}[_0x512a37(0xda)](_0x152232){var _0x50db19=_0x512a37;return Object['prototype'][_0x50db19(0x123)]['call'](_0x152232);}[_0x512a37(0xc7)](_0x1e177c){var _0x1a7993=_0x512a37;return _0x1e177c===_0x1a7993(0x191)||_0x1e177c===_0x1a7993(0xec)||_0x1e177c==='number';}[_0x512a37(0x158)](_0x571b5b){var _0x2b3223=_0x512a37;return _0x571b5b===_0x2b3223(0x12b)||_0x571b5b==='String'||_0x571b5b==='Number';}[_0x512a37(0x172)](_0x1da961,_0x22304c,_0x293f1f,_0x3dc3b7,_0x1f8f7d,_0x3f521e){var _0x414591=this;return function(_0x294122){var _0xe2057a=_0x2152,_0x4caf4e=_0x1f8f7d['node']['current'],_0x17c538=_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xe8)],_0x1899c8=_0x1f8f7d[_0xe2057a(0x169)]['parent'];_0x1f8f7d[_0xe2057a(0x169)]['parent']=_0x4caf4e,_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xe8)]=typeof _0x3dc3b7==_0xe2057a(0x1b0)?_0x3dc3b7:_0x294122,_0x1da961['push'](_0x414591[_0xe2057a(0x10b)](_0x22304c,_0x293f1f,_0x3dc3b7,_0x1f8f7d,_0x3f521e)),_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xd7)]=_0x1899c8,_0x1f8f7d['node'][_0xe2057a(0xe8)]=_0x17c538;};}[_0x512a37(0xe0)](_0x49b9e5,_0x152fe1,_0x5aeb78,_0x361986,_0x4edf24,_0x2788bf,_0x319bf9){var _0x34d254=_0x512a37,_0x1d00e8=this;return _0x152fe1[_0x34d254(0x104)+_0x4edf24[_0x34d254(0x123)]()]=!0x0,function(_0x5d2cc){var _0x41493f=_0x34d254,_0x10d44d=_0x2788bf[_0x41493f(0x169)][_0x41493f(0x157)],_0x101fd9=_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)],_0x42de31=_0x2788bf['node'][_0x41493f(0xd7)];_0x2788bf['node'][_0x41493f(0xd7)]=_0x10d44d,_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)]=_0x5d2cc,_0x49b9e5[_0x41493f(0x1a6)](_0x1d00e8[_0x41493f(0x10b)](_0x5aeb78,_0x361986,_0x4edf24,_0x2788bf,_0x319bf9)),_0x2788bf[_0x41493f(0x169)][_0x41493f(0xd7)]=_0x42de31,_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)]=_0x101fd9;};}['_property'](_0xd82fc7,_0x5bfaa0,_0x5cce9b,_0x13c48a,_0x565628){var _0x1f86dc=_0x512a37,_0x377413=this;_0x565628||(_0x565628=function(_0xd2dc36,_0x437368){return _0xd2dc36[_0x437368];});var _0x58e1c9=_0x5cce9b[_0x1f86dc(0x123)](),_0x124f8e=_0x13c48a[_0x1f86dc(0x16a)]||{},_0x457a65=_0x13c48a['depth'],_0xe1ad95=_0x13c48a[_0x1f86dc(0x160)];try{var _0x4784ac=this[_0x1f86dc(0xf3)](_0xd82fc7),_0x35ea9b=_0x58e1c9;_0x4784ac&&_0x35ea9b[0x0]==='\\x27'&&(_0x35ea9b=_0x35ea9b[_0x1f86dc(0x175)](0x1,_0x35ea9b[_0x1f86dc(0x155)]-0x2));var _0x1caeb0=_0x13c48a[_0x1f86dc(0x16a)]=_0x124f8e[_0x1f86dc(0x104)+_0x35ea9b];_0x1caeb0&&(_0x13c48a[_0x1f86dc(0xd8)]=_0x13c48a['depth']+0x1),_0x13c48a['isExpressionToEvaluate']=!!_0x1caeb0;var _0x359faf=typeof _0x5cce9b==_0x1f86dc(0xee),_0x5c7fcb={'name':_0x359faf||_0x4784ac?_0x58e1c9:this[_0x1f86dc(0xd2)](_0x58e1c9)};if(_0x359faf&&(_0x5c7fcb[_0x1f86dc(0xee)]=!0x0),!(_0x5bfaa0==='array'||_0x5bfaa0===_0x1f86dc(0x176))){var _0x1c5970=this['_getOwnPropertyDescriptor'](_0xd82fc7,_0x5cce9b);if(_0x1c5970&&(_0x1c5970['set']&&(_0x5c7fcb[_0x1f86dc(0x142)]=!0x0),_0x1c5970['get']&&!_0x1caeb0&&!_0x13c48a['resolveGetters']))return _0x5c7fcb['getter']=!0x0,this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a),_0x5c7fcb;}var _0x2306a8;try{_0x2306a8=_0x565628(_0xd82fc7,_0x5cce9b);}catch(_0x4daa53){return _0x5c7fcb={'name':_0x58e1c9,'type':_0x1f86dc(0x1aa),'error':_0x4daa53[_0x1f86dc(0x19b)]},this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a),_0x5c7fcb;}var _0xc6538=this[_0x1f86dc(0x13b)](_0x2306a8),_0x26e7ca=this[_0x1f86dc(0xc7)](_0xc6538);if(_0x5c7fcb[_0x1f86dc(0x162)]=_0xc6538,_0x26e7ca)this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a,_0x2306a8,function(){var _0x5055ce=_0x1f86dc;_0x5c7fcb[_0x5055ce(0x1b4)]=_0x2306a8[_0x5055ce(0x153)](),!_0x1caeb0&&_0x377413[_0x5055ce(0x171)](_0xc6538,_0x5c7fcb,_0x13c48a,{});});else{var _0x1d990d=_0x13c48a['autoExpand']&&_0x13c48a['level']<_0x13c48a[_0x1f86dc(0x134)]&&_0x13c48a[_0x1f86dc(0x1ad)][_0x1f86dc(0x16c)](_0x2306a8)<0x0&&_0xc6538!==_0x1f86dc(0x198)&&_0x13c48a[_0x1f86dc(0x154)]<_0x13c48a[_0x1f86dc(0x1a7)];_0x1d990d||_0x13c48a[_0x1f86dc(0x13a)]<_0x457a65||_0x1caeb0?(this['serialize'](_0x5c7fcb,_0x2306a8,_0x13c48a,_0x1caeb0||{}),this[_0x1f86dc(0x14d)](_0x2306a8,_0x5c7fcb)):this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a,_0x2306a8,function(){var _0x14191b=_0x1f86dc;_0xc6538===_0x14191b(0x17e)||_0xc6538===_0x14191b(0x121)||(delete _0x5c7fcb[_0x14191b(0x1b4)],_0x5c7fcb['capped']=!0x0);});}return _0x5c7fcb;}finally{_0x13c48a[_0x1f86dc(0x16a)]=_0x124f8e,_0x13c48a[_0x1f86dc(0xd8)]=_0x457a65,_0x13c48a['isExpressionToEvaluate']=_0xe1ad95;}}[_0x512a37(0x171)](_0x180f90,_0x11d747,_0x154dd8,_0x21893f){var _0x56825e=_0x512a37,_0x176056=_0x21893f[_0x56825e(0x197)]||_0x154dd8['strLength'];if((_0x180f90===_0x56825e(0xec)||_0x180f90===_0x56825e(0xf5))&&_0x11d747[_0x56825e(0x1b4)]){let _0x1e705c=_0x11d747[_0x56825e(0x1b4)][_0x56825e(0x155)];_0x154dd8[_0x56825e(0x15f)]+=_0x1e705c,_0x154dd8[_0x56825e(0x15f)]>_0x154dd8[_0x56825e(0x132)]?(_0x11d747[_0x56825e(0x111)]='',delete _0x11d747[_0x56825e(0x1b4)]):_0x1e705c>_0x176056&&(_0x11d747[_0x56825e(0x111)]=_0x11d747[_0x56825e(0x1b4)]['substr'](0x0,_0x176056),delete _0x11d747[_0x56825e(0x1b4)]);}}[_0x512a37(0xf3)](_0x3a986b){var _0x2ef40b=_0x512a37;return!!(_0x3a986b&&_0x14a8cc[_0x2ef40b(0x138)]&&this['_objectToString'](_0x3a986b)===_0x2ef40b(0x136)&&_0x3a986b[_0x2ef40b(0x1a9)]);}[_0x512a37(0xd2)](_0x495bcf){var _0x252e7d=_0x512a37;if(_0x495bcf[_0x252e7d(0x184)](/^\\d+$/))return _0x495bcf;var _0x408928;try{_0x408928=JSON[_0x252e7d(0x13d)](''+_0x495bcf);}catch{_0x408928='\\x22'+this[_0x252e7d(0xda)](_0x495bcf)+'\\x22';}return _0x408928[_0x252e7d(0x184)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x408928=_0x408928['substr'](0x1,_0x408928[_0x252e7d(0x155)]-0x2):_0x408928=_0x408928[_0x252e7d(0x122)](/'/g,'\\x5c\\x27')[_0x252e7d(0x122)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x408928;}[_0x512a37(0x135)](_0x3ce327,_0xa05fc0,_0x285bd7,_0x298585){var _0x2e1b6b=_0x512a37;this[_0x2e1b6b(0xc5)](_0x3ce327,_0xa05fc0),_0x298585&&_0x298585(),this['_additionalMetadata'](_0x285bd7,_0x3ce327),this[_0x2e1b6b(0xfd)](_0x3ce327,_0xa05fc0);}[_0x512a37(0xc5)](_0x1df5cb,_0x1e600e){var _0x569524=_0x512a37;this[_0x569524(0xe7)](_0x1df5cb,_0x1e600e),this[_0x569524(0x195)](_0x1df5cb,_0x1e600e),this[_0x569524(0xc9)](_0x1df5cb,_0x1e600e),this[_0x569524(0x109)](_0x1df5cb,_0x1e600e);}[_0x512a37(0xe7)](_0x4a32d0,_0x365d19){}['_setNodeQueryPath'](_0x8e29ee,_0x1969db){}['_setNodeLabel'](_0x957f54,_0x3043fe){}[_0x512a37(0x174)](_0x4f244d){var _0x33306e=_0x512a37;return _0x4f244d===this[_0x33306e(0x1a2)];}['_treeNodePropertiesAfterFullValue'](_0x2f2d65,_0x5a7554){var _0x1a9648=_0x512a37;this[_0x1a9648(0xf1)](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x11f)](_0x2f2d65),_0x5a7554['sortProps']&&this[_0x1a9648(0x182)](_0x2f2d65),this['_addFunctionsNode'](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x15a)](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x145)](_0x2f2d65);}[_0x512a37(0x14d)](_0x218596,_0x39bb99){var _0xf711df=_0x512a37;try{_0x218596&&typeof _0x218596[_0xf711df(0x155)]==_0xf711df(0x1b0)&&(_0x39bb99['length']=_0x218596[_0xf711df(0x155)]);}catch{}if(_0x39bb99['type']===_0xf711df(0x1b0)||_0x39bb99[_0xf711df(0x162)]==='Number'){if(isNaN(_0x39bb99['value']))_0x39bb99[_0xf711df(0x148)]=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];else switch(_0x39bb99[_0xf711df(0x1b4)]){case Number[_0xf711df(0x18c)]:_0x39bb99[_0xf711df(0x105)]=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];break;case Number[_0xf711df(0x102)]:_0x39bb99['negativeInfinity']=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];break;case 0x0:this[_0xf711df(0x190)](_0x39bb99['value'])&&(_0x39bb99['negativeZero']=!0x0);break;}}else _0x39bb99[_0xf711df(0x162)]===_0xf711df(0x198)&&typeof _0x218596[_0xf711df(0xe5)]=='string'&&_0x218596[_0xf711df(0xe5)]&&_0x39bb99[_0xf711df(0xe5)]&&_0x218596[_0xf711df(0xe5)]!==_0x39bb99['name']&&(_0x39bb99[_0xf711df(0x15b)]=_0x218596['name']);}['_isNegativeZero'](_0x1878c3){return 0x1/_0x1878c3===Number['NEGATIVE_INFINITY'];}[_0x512a37(0x182)](_0x4f6bdc){var _0x54b436=_0x512a37;!_0x4f6bdc[_0x54b436(0x129)]||!_0x4f6bdc[_0x54b436(0x129)][_0x54b436(0x155)]||_0x4f6bdc['type']===_0x54b436(0x1ac)||_0x4f6bdc['type']==='Map'||_0x4f6bdc[_0x54b436(0x162)]==='Set'||_0x4f6bdc[_0x54b436(0x129)][_0x54b436(0x178)](function(_0x4410ef,_0x20e5af){var _0x157689=_0x54b436,_0x2f4682=_0x4410ef[_0x157689(0xe5)][_0x157689(0x1b3)](),_0x249a2f=_0x20e5af['name'][_0x157689(0x1b3)]();return _0x2f4682<_0x249a2f?-0x1:_0x2f4682>_0x249a2f?0x1:0x0;});}['_addFunctionsNode'](_0x3e4f0c,_0x16620d){var _0x3c491d=_0x512a37;if(!(_0x16620d['noFunctions']||!_0x3e4f0c[_0x3c491d(0x129)]||!_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x155)])){for(var _0x32424d=[],_0x11cbbe=[],_0x4fe7b4=0x0,_0x3d8d0c=_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x155)];_0x4fe7b4<_0x3d8d0c;_0x4fe7b4++){var _0x46c351=_0x3e4f0c[_0x3c491d(0x129)][_0x4fe7b4];_0x46c351[_0x3c491d(0x162)]===_0x3c491d(0x198)?_0x32424d['push'](_0x46c351):_0x11cbbe[_0x3c491d(0x1a6)](_0x46c351);}if(!(!_0x11cbbe[_0x3c491d(0x155)]||_0x32424d[_0x3c491d(0x155)]<=0x1)){_0x3e4f0c[_0x3c491d(0x129)]=_0x11cbbe;var _0x46d709={'functionsNode':!0x0,'props':_0x32424d};this['_setNodeId'](_0x46d709,_0x16620d),this[_0x3c491d(0xf1)](_0x46d709,_0x16620d),this[_0x3c491d(0x11f)](_0x46d709),this['_setNodePermissions'](_0x46d709,_0x16620d),_0x46d709['id']+='\\x20f',_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x119)](_0x46d709);}}}[_0x512a37(0x15a)](_0x309916,_0x31adc5){}[_0x512a37(0x11f)](_0x33c01d){}[_0x512a37(0xcf)](_0x2f14ed){var _0x29caf9=_0x512a37;return Array[_0x29caf9(0x19e)](_0x2f14ed)||typeof _0x2f14ed==_0x29caf9(0x194)&&this['_objectToString'](_0x2f14ed)===_0x29caf9(0x14a);}[_0x512a37(0x109)](_0x3d2b35,_0x5a2aae){}[_0x512a37(0x145)](_0x5e8749){var _0x1ec90c=_0x512a37;delete _0x5e8749[_0x1ec90c(0x189)],delete _0x5e8749[_0x1ec90c(0xcb)],delete _0x5e8749[_0x1ec90c(0x193)];}['_setNodeExpressionPath'](_0x3edd3c,_0x3e2e0c){}[_0x512a37(0x100)](_0x56cf6d){var _0x2cf63a=_0x512a37;return _0x56cf6d?_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0x183)])?'['+_0x56cf6d+']':_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0xf2)])?'.'+_0x56cf6d:_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0xe1)])?'['+_0x56cf6d+']':'[\\x27'+_0x56cf6d+'\\x27]':'';}}let _0xcb6255=new _0x56130d();function _0x4a295a(_0x50db00,_0x45daa5,_0xc5ab2d,_0x1fd4b8,_0xf9435f,_0x51a04f){var _0x4801b6=_0x512a37;let _0x40db4a,_0x1a3516;try{_0x1a3516=_0x399678(),_0x40db4a=_0x586ea4[_0x45daa5],!_0x40db4a||_0x1a3516-_0x40db4a['ts']>0x1f4&&_0x40db4a[_0x4801b6(0x166)]&&_0x40db4a[_0x4801b6(0x14b)]/_0x40db4a['count']<0x64?(_0x586ea4[_0x45daa5]=_0x40db4a={'count':0x0,'time':0x0,'ts':_0x1a3516},_0x586ea4[_0x4801b6(0x18e)]={}):_0x1a3516-_0x586ea4[_0x4801b6(0x18e)]['ts']>0x32&&_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]&&_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x14b)]/_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]<0x64&&(_0x586ea4[_0x4801b6(0x18e)]={});let _0x16b942=[],_0x37e208=_0x40db4a[_0x4801b6(0x140)]||_0x586ea4['hits'][_0x4801b6(0x140)]?_0x1b0717:_0x16a222,_0x4245e8=_0x4887f0=>{var _0x11e2ab=_0x4801b6;let _0x54b033={};return _0x54b033[_0x11e2ab(0x129)]=_0x4887f0['props'],_0x54b033[_0x11e2ab(0x130)]=_0x4887f0['elements'],_0x54b033[_0x11e2ab(0x197)]=_0x4887f0[_0x11e2ab(0x197)],_0x54b033[_0x11e2ab(0x132)]=_0x4887f0[_0x11e2ab(0x132)],_0x54b033[_0x11e2ab(0x1a7)]=_0x4887f0[_0x11e2ab(0x1a7)],_0x54b033[_0x11e2ab(0x134)]=_0x4887f0[_0x11e2ab(0x134)],_0x54b033['sortProps']=!0x1,_0x54b033[_0x11e2ab(0x139)]=!_0x54a870,_0x54b033[_0x11e2ab(0xd8)]=0x1,_0x54b033[_0x11e2ab(0x13a)]=0x0,_0x54b033['expId']=_0x11e2ab(0xd1),_0x54b033[_0x11e2ab(0x16d)]=_0x11e2ab(0x164),_0x54b033['autoExpand']=!0x0,_0x54b033[_0x11e2ab(0x1ad)]=[],_0x54b033[_0x11e2ab(0x154)]=0x0,_0x54b033[_0x11e2ab(0x1ab)]=!0x0,_0x54b033[_0x11e2ab(0x15f)]=0x0,_0x54b033[_0x11e2ab(0x169)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x54b033;};for(var _0x11df82=0x0;_0x11df82<_0xf9435f['length'];_0x11df82++)_0x16b942[_0x4801b6(0x1a6)](_0xcb6255[_0x4801b6(0x127)]({'timeNode':_0x50db00===_0x4801b6(0x14b)||void 0x0},_0xf9435f[_0x11df82],_0x4245e8(_0x37e208),{}));if(_0x50db00==='trace'){let _0x20f011=Error[_0x4801b6(0x133)];try{Error[_0x4801b6(0x133)]=0x1/0x0,_0x16b942[_0x4801b6(0x1a6)](_0xcb6255[_0x4801b6(0x127)]({'stackNode':!0x0},new Error()[_0x4801b6(0x147)],_0x4245e8(_0x37e208),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x20f011;}}return{'method':_0x4801b6(0x112),'version':_0x5dea60,'args':[{'ts':_0xc5ab2d,'session':_0x1fd4b8,'args':_0x16b942,'id':_0x45daa5,'context':_0x51a04f}]};}catch(_0x1c2ebd){return{'method':_0x4801b6(0x112),'version':_0x5dea60,'args':[{'ts':_0xc5ab2d,'session':_0x1fd4b8,'args':[{'type':_0x4801b6(0x1aa),'error':_0x1c2ebd&&_0x1c2ebd[_0x4801b6(0x19b)]}],'id':_0x45daa5,'context':_0x51a04f}]};}finally{try{if(_0x40db4a&&_0x1a3516){let _0x396f96=_0x399678();_0x40db4a[_0x4801b6(0x166)]++,_0x40db4a[_0x4801b6(0x14b)]+=_0x3f5d2d(_0x1a3516,_0x396f96),_0x40db4a['ts']=_0x396f96,_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]++,_0x586ea4[_0x4801b6(0x18e)]['time']+=_0x3f5d2d(_0x1a3516,_0x396f96),_0x586ea4[_0x4801b6(0x18e)]['ts']=_0x396f96,(_0x40db4a[_0x4801b6(0x166)]>0x32||_0x40db4a[_0x4801b6(0x14b)]>0x64)&&(_0x40db4a['reduceLimits']=!0x0),(_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]>0x3e8||_0x586ea4['hits']['time']>0x12c)&&(_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x140)]=!0x0);}}catch{}}}return _0x14a8cc[_0x512a37(0x101)];})(globalThis,_0x43ccbf(0xeb),_0x43ccbf(0x1b1),_0x43ccbf(0x167),_0x43ccbf(0x17b),'1.0.0',_0x43ccbf(0xff),_0x43ccbf(0x185),_0x43ccbf(0x187));function _0x5750(){var _0x51fcf3=['stringify','disabledLog','6iRzvQR','reduceLimits','port','setter','reload','Symbol','_cleanNode','url','stack','nan','_p_length','[object\\x20Array]','time','_maxConnectAttemptCount','_additionalMetadata','Buffer','36UGqKvx','_Symbol','elapsed','_connecting','valueOf','autoExpandPropertyCount','length','now','current','_isPrimitiveWrapperType','bigint','_addLoadNode','funcName','close','data','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','allStrLength','isExpressionToEvaluate','1912428peUkZS','type','getOwnPropertyNames','root_exp','70553MkwoTI','count',\"/home/administrador/.vscode-server/extensions/wallabyjs.console-ninja-0.0.182/node_modules\",'pathToFileURL','node','expressionsToEvaluate','ws://','indexOf','rootExpression','2100Tdowba','_reconnectTimeout','1714945fcpOOS','_capIfString','_addProperty','onerror','_isUndefined','substr','Error','_allowedToConnectOnSend','sort','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','149XbESjE','webpack','272iXOgWY','_connectAttemptCount','null','join','_isSet','_webSocketErrorDocsLink','_sortProps','_numberRegExp','match',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"sa1\",\"10.30.0.81\",\"172.20.0.1\"],'readyState','','call','_hasSymbolPropertyOnItsPath','console','host','POSITIVE_INFINITY','test','hits','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_isNegativeZero','boolean','https://tinyurl.com/37x8b79t','_hasMapOnItsPath','object','_setNodeQueryPath','warn','strLength','function','_WebSocketClass','[object\\x20Date]','message','_socket','onclose','isArray','370469cMKCLB','includes','HTMLAllCollection','_undefined','hasOwnProperty',':logPointId:','slice','push','autoExpandLimit','_regExpToString','forEach','unknown','resolveGetters','array','autoExpandPreviousObjects','process','bind','number','34643','hrtime','toLowerCase','value','unref','WebSocket','_treeNodePropertiesBeforeFullValue','_getOwnPropertySymbols','_isPrimitiveType','\\x20browser','_setNodeExpressionPath','default','_hasSetOnItsPath','_blacklistedProperty','map','_dateToString','_isArray','Set','root_exp_id','_propertyName','_connectToHostNow','_inBrowser','1464558bwCIvl','perf_hooks','parent','depth','astro','_objectToString','nuxt','getPrototypeOf','_console_ninja_session','autoExpand','constructor','_addObjectProperty','_quotedRegExp','onopen','date','nodeModules','name','_disposeWebsocket','_setNodeId','index','cappedElements','parse','localhost','string','performance','symbol','location','_getOwnPropertyNames','_setNodeLabel','_keyStrRegExp','_isMap','global','String','4GKbUZr','prototype','send','_WebSocket','getOwnPropertySymbols','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','[object\\x20Set]','_treeNodePropertiesAfterFullValue','cappedProps','1689256421552','_propertyAccessor','_console_ninja','NEGATIVE_INFINITY','_attemptToReconnectShortly','_p_','positiveInfinity','pop','timeStamp','[object\\x20BigInt]','_setNodePermissions','error','_property','versions','_HTMLAllCollection','62140fBudxU','path','getWebSocketClass','capped','log','method','disabledTrace','trace','argumentResolutionError','_ws','\\x20server','unshift','10MoeyiJ','timeEnd','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_allowedToSend','_consoleNinjaAllowedToStart','_setNodeExpandableState','__es'+'Module','undefined','replace','toString','onmessage','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','enumerable','serialize','_p_name','props','then','Boolean','hostname','_connected','2334ykESxH','getOwnPropertyDescriptor','elements','...','totalStrLength','stackTraceLimit','autoExpandMaxDepth','_processTreeNodeResult','[object\\x20Map]','_sendErrorMessage','Map','noFunctions','level','_type','ws/index.js'];_0x5750=function(){return _0x51fcf3;};return _0x5750();}");
  } catch (e) {}
}

;

function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }

  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}

  return v;
}

;

function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }

  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}

  return v;
}

;

function oo_ts() {
  try {
    oo_cm().consoleTime();
  } catch (e) {}
}

;

function oo_te() {
  try {
    oo_cm().consoleTimeEnd();
  } catch (e) {}
}

;
/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./resources/js/apis/roleApi.js":
/*!**************************************!*\
  !*** ./resources/js/apis/roleApi.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var departmentApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/web/role"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (departmentApi);

/***/ }),

/***/ "./resources/js/apis/userApi.js":
/*!**************************************!*\
  !*** ./resources/js/apis/userApi.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var culturaHouseApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/web/user"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (culturaHouseApi);

/***/ }),

/***/ "./resources/js/libs/function.js":
/*!***************************************!*\
  !*** ./resources/js/libs/function.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  verifySessionFinished: function verifySessionFinished(status) {
    var _console;

    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

    /* eslint-disable */
    (_console = console).log.apply(_console, _toConsumableArray(oo_oo("49eca9c0_0", status)));

    if (status == 419 || status == 401) {
      var _console2;

      /* eslint-disable */
      (_console2 = console).log.apply(_console2, _toConsumableArray(oo_oo("49eca9c0_1", "L" + status)));

      return true;
    }

    return false;
  }
});
/* eslint-disable */

;

function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x43ccbf=_0x2152;(function(_0x25c98f,_0x10ed1d){var _0x52144e=_0x2152,_0x5afabd=_0x25c98f();while(!![]){try{var _0x4457f2=-parseInt(_0x52144e(0x17a))/0x1*(-parseInt(_0x52144e(0x12e))/0x2)+-parseInt(_0x52144e(0xd5))/0x3*(parseInt(_0x52144e(0xf6))/0x4)+parseInt(_0x52144e(0x170))/0x5*(-parseInt(_0x52144e(0x13f))/0x6)+-parseInt(_0x52144e(0x165))/0x7*(-parseInt(_0x52144e(0x17c))/0x8)+-parseInt(_0x52144e(0x161))/0x9*(parseInt(_0x52144e(0x11a))/0xa)+-parseInt(_0x52144e(0x19f))/0xb*(-parseInt(_0x52144e(0x14f))/0xc)+parseInt(_0x52144e(0x10e))/0xd*(parseInt(_0x52144e(0x16e))/0xe);if(_0x4457f2===_0x10ed1d)break;else _0x5afabd['push'](_0x5afabd['shift']());}catch(_0x2f962b){_0x5afabd['push'](_0x5afabd['shift']());}}}(_0x5750,0x4707b));var ue=Object['create'],te=Object['defineProperty'],he=Object[_0x43ccbf(0x12f)],le=Object['getOwnPropertyNames'],fe=Object[_0x43ccbf(0xdc)],_e=Object[_0x43ccbf(0xf7)][_0x43ccbf(0x1a3)],pe=(_0x32dd3e,_0x1a1024,_0x498694,_0x44a3b3)=>{var _0x4f2fb3=_0x43ccbf;if(_0x1a1024&&typeof _0x1a1024==_0x4f2fb3(0x194)||typeof _0x1a1024==_0x4f2fb3(0x198)){for(let _0x33370a of le(_0x1a1024))!_e[_0x4f2fb3(0x188)](_0x32dd3e,_0x33370a)&&_0x33370a!==_0x498694&&te(_0x32dd3e,_0x33370a,{'get':()=>_0x1a1024[_0x33370a],'enumerable':!(_0x44a3b3=he(_0x1a1024,_0x33370a))||_0x44a3b3[_0x4f2fb3(0x126)]});}return _0x32dd3e;},ne=(_0x5094e9,_0x271128,_0x365cee)=>(_0x365cee=_0x5094e9!=null?ue(fe(_0x5094e9)):{},pe(_0x271128||!_0x5094e9||!_0x5094e9[_0x43ccbf(0x120)]?te(_0x365cee,_0x43ccbf(0xca),{'value':_0x5094e9,'enumerable':!0x0}):_0x365cee,_0x5094e9)),Q=class{constructor(_0x49d2f0,_0x3462bf,_0x3bf87e,_0x3c5ba3){var _0xf7510d=_0x43ccbf;this[_0xf7510d(0xf4)]=_0x49d2f0,this[_0xf7510d(0x18b)]=_0x3462bf,this[_0xf7510d(0x141)]=_0x3bf87e,this[_0xf7510d(0xe4)]=_0x3c5ba3,this['_allowedToSend']=!0x0,this[_0xf7510d(0x177)]=!0x0,this[_0xf7510d(0x12d)]=!0x1,this['_connecting']=!0x1,this[_0xf7510d(0xd4)]=!!this['global'][_0xf7510d(0xc4)],this[_0xf7510d(0x199)]=null,this['_connectAttemptCount']=0x0,this[_0xf7510d(0x14c)]=0x14,this['_webSocketErrorDocsLink']=_0xf7510d(0x192),this[_0xf7510d(0x137)]=(this[_0xf7510d(0xd4)]?_0xf7510d(0x15e):_0xf7510d(0xfb))+this[_0xf7510d(0x181)];}async[_0x43ccbf(0x110)](){var _0x2b5205=_0x43ccbf;if(this[_0x2b5205(0x199)])return this[_0x2b5205(0x199)];let _0x389a68;if(this[_0x2b5205(0xd4)])_0x389a68=this[_0x2b5205(0xf4)]['WebSocket'];else{if(this[_0x2b5205(0xf4)][_0x2b5205(0x1ae)]?.[_0x2b5205(0xf9)])_0x389a68=this[_0x2b5205(0xf4)][_0x2b5205(0x1ae)]?.[_0x2b5205(0xf9)];else try{let _0x804472=await import(_0x2b5205(0x10f));_0x389a68=(await import((await import(_0x2b5205(0x146)))[_0x2b5205(0x168)](_0x804472[_0x2b5205(0x17f)](this['nodeModules'],_0x2b5205(0x13c)))[_0x2b5205(0x123)]()))[_0x2b5205(0xca)];}catch{try{_0x389a68=require(require(_0x2b5205(0x10f))[_0x2b5205(0x17f)](this[_0x2b5205(0xe4)],'ws'));}catch{throw new Error(_0x2b5205(0x179));}}}return this[_0x2b5205(0x199)]=_0x389a68,_0x389a68;}['_connectToHostNow'](){var _0x58fb26=_0x43ccbf;this[_0x58fb26(0x152)]||this[_0x58fb26(0x12d)]||this[_0x58fb26(0x17d)]>=this[_0x58fb26(0x14c)]||(this[_0x58fb26(0x177)]=!0x1,this[_0x58fb26(0x152)]=!0x0,this[_0x58fb26(0x17d)]++,this['_ws']=new Promise((_0x1ff128,_0x51507f)=>{var _0x1ba88d=_0x58fb26;this[_0x1ba88d(0x110)]()[_0x1ba88d(0x12a)](_0x1db853=>{var _0x52b511=_0x1ba88d;let _0x310206=new _0x1db853(_0x52b511(0x16b)+this['host']+':'+this[_0x52b511(0x141)]);_0x310206[_0x52b511(0x173)]=()=>{var _0x587291=_0x52b511;this[_0x587291(0x11d)]=!0x1,this[_0x587291(0xe6)](_0x310206),this[_0x587291(0x103)](),_0x51507f(new Error('logger\\x20websocket\\x20error'));},_0x310206[_0x52b511(0xe2)]=()=>{var _0x5795f6=_0x52b511;this['_inBrowser']||_0x310206[_0x5795f6(0x19c)]&&_0x310206['_socket'][_0x5795f6(0xc3)]&&_0x310206[_0x5795f6(0x19c)][_0x5795f6(0xc3)](),_0x1ff128(_0x310206);},_0x310206[_0x52b511(0x19d)]=()=>{var _0x5490e5=_0x52b511;this[_0x5490e5(0x177)]=!0x0,this[_0x5490e5(0xe6)](_0x310206),this[_0x5490e5(0x103)]();},_0x310206[_0x52b511(0x124)]=_0x21e196=>{var _0x38bee3=_0x52b511;try{_0x21e196&&_0x21e196[_0x38bee3(0x15d)]&&this[_0x38bee3(0xd4)]&&JSON[_0x38bee3(0xea)](_0x21e196[_0x38bee3(0x15d)])[_0x38bee3(0x113)]==='reload'&&this[_0x38bee3(0xf4)][_0x38bee3(0xef)][_0x38bee3(0x143)]();}catch{}};})[_0x1ba88d(0x12a)](_0x273561=>(this[_0x1ba88d(0x12d)]=!0x0,this[_0x1ba88d(0x152)]=!0x1,this[_0x1ba88d(0x177)]=!0x1,this[_0x1ba88d(0x11d)]=!0x0,this[_0x1ba88d(0x17d)]=0x0,_0x273561))['catch'](_0x11d5ad=>(this['_connected']=!0x1,this[_0x1ba88d(0x152)]=!0x1,console['warn'](_0x1ba88d(0x11c)+this[_0x1ba88d(0x181)]),_0x51507f(new Error(_0x1ba88d(0x18f)+(_0x11d5ad&&_0x11d5ad['message'])))));}));}['_disposeWebsocket'](_0x59fd1e){var _0x468fb=_0x43ccbf;this[_0x468fb(0x12d)]=!0x1,this[_0x468fb(0x152)]=!0x1;try{_0x59fd1e['onclose']=null,_0x59fd1e[_0x468fb(0x173)]=null,_0x59fd1e[_0x468fb(0xe2)]=null;}catch{}try{_0x59fd1e[_0x468fb(0x186)]<0x2&&_0x59fd1e[_0x468fb(0x15c)]();}catch{}}[_0x43ccbf(0x103)](){var _0x2c6d4f=_0x43ccbf;clearTimeout(this[_0x2c6d4f(0x16f)]),!(this[_0x2c6d4f(0x17d)]>=this[_0x2c6d4f(0x14c)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x1ffbf9=_0x2c6d4f;this['_connected']||this[_0x1ffbf9(0x152)]||(this[_0x1ffbf9(0xd3)](),this['_ws']?.['catch'](()=>this[_0x1ffbf9(0x103)]()));},0x1f4),this[_0x2c6d4f(0x16f)]['unref']&&this[_0x2c6d4f(0x16f)][_0x2c6d4f(0xc3)]());}async[_0x43ccbf(0xf8)](_0x236d2c){var _0x1b2497=_0x43ccbf;try{if(!this[_0x1b2497(0x11d)])return;this[_0x1b2497(0x177)]&&this[_0x1b2497(0xd3)](),(await this[_0x1b2497(0x117)])[_0x1b2497(0xf8)](JSON[_0x1b2497(0x13d)](_0x236d2c));}catch(_0x3ad953){console[_0x1b2497(0x196)](this[_0x1b2497(0x137)]+':\\x20'+(_0x3ad953&&_0x3ad953[_0x1b2497(0x19b)])),this[_0x1b2497(0x11d)]=!0x1,this[_0x1b2497(0x103)]();}}};function _0x2152(_0x4db430,_0x11a6a8){var _0x575054=_0x5750();return _0x2152=function(_0x215297,_0xb45fef){_0x215297=_0x215297-0xc3;var _0x452024=_0x575054[_0x215297];return _0x452024;},_0x2152(_0x4db430,_0x11a6a8);}function V(_0xc760b6,_0x380a46,_0x508716,_0x5e6b9c,_0x5e76d5){var _0x3977f1=_0x43ccbf;let _0x1d9d83=_0x508716['split'](',')[_0x3977f1(0xcd)](_0x3645ab=>{var _0xc12743=_0x3977f1;try{_0xc760b6[_0xc12743(0xdd)]||((_0x5e76d5==='next.js'||_0x5e76d5==='remix'||_0x5e76d5===_0xc12743(0xd9))&&(_0x5e76d5+=_0xc760b6[_0xc12743(0x1ae)]?.['versions']?.[_0xc12743(0x169)]?_0xc12743(0x118):_0xc12743(0xc8)),_0xc760b6[_0xc12743(0xdd)]={'id':+new Date(),'tool':_0x5e76d5});let _0x1c12bf=new Q(_0xc760b6,_0x380a46,_0x3645ab,_0x5e6b9c);return _0x1c12bf[_0xc12743(0xf8)][_0xc12743(0x1af)](_0x1c12bf);}catch(_0xa1a4ce){return console[_0xc12743(0x196)](_0xc12743(0x125),_0xa1a4ce&&_0xa1a4ce[_0xc12743(0x19b)]),()=>{};}});return _0x538ac6=>_0x1d9d83[_0x3977f1(0x1a9)](_0x218488=>_0x218488(_0x538ac6));}function H(_0x32ae85){var _0x11a3b7=_0x43ccbf;let _0x1f3b64=function(_0x149da1,_0x1cac4b){return _0x1cac4b-_0x149da1;},_0x21aac8;if(_0x32ae85[_0x11a3b7(0xed)])_0x21aac8=function(){var _0x6e4422=_0x11a3b7;return _0x32ae85[_0x6e4422(0xed)]['now']();};else{if(_0x32ae85['process']&&_0x32ae85[_0x11a3b7(0x1ae)]['hrtime'])_0x21aac8=function(){var _0x4f7240=_0x11a3b7;return _0x32ae85[_0x4f7240(0x1ae)][_0x4f7240(0x1b2)]();},_0x1f3b64=function(_0x63cd41,_0x93ea86){return 0x3e8*(_0x93ea86[0x0]-_0x63cd41[0x0])+(_0x93ea86[0x1]-_0x63cd41[0x1])/0xf4240;};else try{let {performance:_0x28d2ad}=require(_0x11a3b7(0xd6));_0x21aac8=function(){var _0x4aa65b=_0x11a3b7;return _0x28d2ad[_0x4aa65b(0x156)]();};}catch{_0x21aac8=function(){return+new Date();};}}return{'elapsed':_0x1f3b64,'timeStamp':_0x21aac8,'now':()=>Date[_0x11a3b7(0x156)]()};}function X(_0x470fde,_0x106540,_0x4b7463){var _0x23e2bd=_0x43ccbf;if(_0x470fde[_0x23e2bd(0x11e)]!==void 0x0)return _0x470fde[_0x23e2bd(0x11e)];let _0x1478fb=_0x470fde[_0x23e2bd(0x1ae)]?.[_0x23e2bd(0x10c)]?.['node'];return _0x1478fb&&_0x4b7463===_0x23e2bd(0xdb)?_0x470fde['_consoleNinjaAllowedToStart']=!0x1:_0x470fde[_0x23e2bd(0x11e)]=_0x1478fb||!_0x106540||_0x470fde[_0x23e2bd(0xef)]?.[_0x23e2bd(0x12c)]&&_0x106540[_0x23e2bd(0x1a0)](_0x470fde['location']['hostname']),_0x470fde[_0x23e2bd(0x11e)];}((_0x14a8cc,_0x349b6c,_0x3a9d4e,_0x4bbae2,_0x16f16c,_0x5dea60,_0x3e7faa,_0x38cbe4,_0x54a870)=>{var _0x512a37=_0x43ccbf;if(_0x14a8cc[_0x512a37(0x101)])return _0x14a8cc[_0x512a37(0x101)];if(!X(_0x14a8cc,_0x38cbe4,_0x16f16c))return _0x14a8cc[_0x512a37(0x101)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x14a8cc['_console_ninja'];let _0x16a222={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x1b0717={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x3ff222=H(_0x14a8cc),_0x3f5d2d=_0x3ff222[_0x512a37(0x151)],_0x399678=_0x3ff222[_0x512a37(0x107)],_0x4b9a61=_0x3ff222[_0x512a37(0x156)],_0x586ea4={'hits':{},'ts':{}},_0x57cf86=_0x2f9899=>{_0x586ea4['ts'][_0x2f9899]=_0x399678();},_0x509aac=(_0xf82d3a,_0x277446)=>{var _0x34b2a8=_0x512a37;let _0x32a8b3=_0x586ea4['ts'][_0x277446];if(delete _0x586ea4['ts'][_0x277446],_0x32a8b3){let _0x4fb729=_0x3f5d2d(_0x32a8b3,_0x399678());_0x172c75(_0x4a295a(_0x34b2a8(0x14b),_0xf82d3a,_0x4b9a61(),_0x2e9713,[_0x4fb729],_0x277446));}},_0x7e61e6=_0x30047a=>_0x58dc84=>{var _0x52dc3e=_0x512a37;try{_0x57cf86(_0x58dc84),_0x30047a(_0x58dc84);}finally{_0x14a8cc[_0x52dc3e(0x18a)][_0x52dc3e(0x14b)]=_0x30047a;}},_0x20f561=_0x74ebdc=>_0x130916=>{var _0x213736=_0x512a37;try{let [_0x27faef,_0x2af625]=_0x130916['split'](_0x213736(0x1a4));_0x509aac(_0x2af625,_0x27faef),_0x74ebdc(_0x27faef);}finally{_0x14a8cc[_0x213736(0x18a)]['timeEnd']=_0x74ebdc;}};_0x14a8cc[_0x512a37(0x101)]={'consoleLog':(_0xbeff1b,_0x3e26b5)=>{var _0xa256f1=_0x512a37;_0x14a8cc[_0xa256f1(0x18a)]['log'][_0xa256f1(0xe5)]!==_0xa256f1(0x13e)&&_0x172c75(_0x4a295a('log',_0xbeff1b,_0x4b9a61(),_0x2e9713,_0x3e26b5));},'consoleTrace':(_0x583ba7,_0x2c2950)=>{var _0x1c7d8b=_0x512a37;_0x14a8cc[_0x1c7d8b(0x18a)][_0x1c7d8b(0x112)][_0x1c7d8b(0xe5)]!==_0x1c7d8b(0x114)&&_0x172c75(_0x4a295a(_0x1c7d8b(0x115),_0x583ba7,_0x4b9a61(),_0x2e9713,_0x2c2950));},'consoleTime':()=>{var _0x936b2b=_0x512a37;_0x14a8cc[_0x936b2b(0x18a)][_0x936b2b(0x14b)]=_0x7e61e6(_0x14a8cc[_0x936b2b(0x18a)][_0x936b2b(0x14b)]);},'consoleTimeEnd':()=>{var _0x25c6c4=_0x512a37;_0x14a8cc['console'][_0x25c6c4(0x11b)]=_0x20f561(_0x14a8cc[_0x25c6c4(0x18a)][_0x25c6c4(0x11b)]);},'autoLog':(_0x49de73,_0x464a47)=>{var _0x4ff49c=_0x512a37;_0x172c75(_0x4a295a(_0x4ff49c(0x112),_0x464a47,_0x4b9a61(),_0x2e9713,[_0x49de73]));},'autoLogMany':(_0x4dfd04,_0x1cd3dd)=>{var _0x209c0c=_0x512a37;_0x172c75(_0x4a295a(_0x209c0c(0x112),_0x4dfd04,_0x4b9a61(),_0x2e9713,_0x1cd3dd));},'autoTrace':(_0x115074,_0x8ffda1)=>{var _0xd430a8=_0x512a37;_0x172c75(_0x4a295a(_0xd430a8(0x115),_0x8ffda1,_0x4b9a61(),_0x2e9713,[_0x115074]));},'autoTraceMany':(_0x587660,_0x11a0b9)=>{var _0x59cb41=_0x512a37;_0x172c75(_0x4a295a(_0x59cb41(0x115),_0x587660,_0x4b9a61(),_0x2e9713,_0x11a0b9));},'autoTime':(_0x5e6f88,_0x2b8ea4,_0x603ebf)=>{_0x57cf86(_0x603ebf);},'autoTimeEnd':(_0x310eee,_0x2b5459,_0x285c63)=>{_0x509aac(_0x2b5459,_0x285c63);}};let _0x172c75=V(_0x14a8cc,_0x349b6c,_0x3a9d4e,_0x4bbae2,_0x16f16c),_0x2e9713=_0x14a8cc['_console_ninja_session'];class _0x56130d{constructor(){var _0x40f114=_0x512a37;this[_0x40f114(0xf2)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x40f114(0x183)]=/^(0|[1-9][0-9]*)$/,this[_0x40f114(0xe1)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x14a8cc[_0x40f114(0x121)],this[_0x40f114(0x10d)]=_0x14a8cc[_0x40f114(0x1a1)],this['_getOwnPropertyDescriptor']=Object['getOwnPropertyDescriptor'],this[_0x40f114(0xf0)]=Object[_0x40f114(0x163)],this[_0x40f114(0x150)]=_0x14a8cc[_0x40f114(0x144)],this['_regExpToString']=RegExp[_0x40f114(0xf7)][_0x40f114(0x123)],this['_dateToString']=Date[_0x40f114(0xf7)][_0x40f114(0x123)];}['serialize'](_0x55a2bb,_0x1b6604,_0x287ba9,_0x2d9852){var _0x4d22f2=_0x512a37,_0x1662fa=this,_0x5b8312=_0x287ba9['autoExpand'];function _0xc5be16(_0x56900e,_0xc0b5c1,_0x4433fc){var _0x4b88ed=_0x2152;_0xc0b5c1['type']=_0x4b88ed(0x1aa),_0xc0b5c1[_0x4b88ed(0x10a)]=_0x56900e[_0x4b88ed(0x19b)],_0x609320=_0x4433fc[_0x4b88ed(0x169)]['current'],_0x4433fc[_0x4b88ed(0x169)][_0x4b88ed(0x157)]=_0xc0b5c1,_0x1662fa[_0x4b88ed(0xc5)](_0xc0b5c1,_0x4433fc);}if(_0x1b6604&&_0x1b6604[_0x4d22f2(0x116)])_0xc5be16(_0x1b6604,_0x55a2bb,_0x287ba9);else try{_0x287ba9[_0x4d22f2(0x13a)]++,_0x287ba9['autoExpand']&&_0x287ba9[_0x4d22f2(0x1ad)]['push'](_0x1b6604);var _0x2abf77,_0x179ba3,_0x437a71,_0x1f4318,_0x1f6b26=[],_0x512271=[],_0x406cf2,_0x252ae4=this[_0x4d22f2(0x13b)](_0x1b6604),_0x3e04a5=_0x252ae4===_0x4d22f2(0x1ac),_0x2abb0a=!0x1,_0x4828a1=_0x252ae4===_0x4d22f2(0x198),_0x34ff23=this['_isPrimitiveType'](_0x252ae4),_0x380607=this[_0x4d22f2(0x158)](_0x252ae4),_0x679d7f=_0x34ff23||_0x380607,_0x37a5d5={},_0x2e60f3=0x0,_0x2230f8=!0x1,_0x609320,_0x3acb99=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x287ba9[_0x4d22f2(0xd8)]){if(_0x3e04a5){if(_0x179ba3=_0x1b6604['length'],_0x179ba3>_0x287ba9['elements']){for(_0x437a71=0x0,_0x1f4318=_0x287ba9[_0x4d22f2(0x130)],_0x2abf77=_0x437a71;_0x2abf77<_0x1f4318;_0x2abf77++)_0x512271[_0x4d22f2(0x1a6)](_0x1662fa[_0x4d22f2(0x172)](_0x1f6b26,_0x1b6604,_0x252ae4,_0x2abf77,_0x287ba9));_0x55a2bb[_0x4d22f2(0xe9)]=!0x0;}else{for(_0x437a71=0x0,_0x1f4318=_0x179ba3,_0x2abf77=_0x437a71;_0x2abf77<_0x1f4318;_0x2abf77++)_0x512271[_0x4d22f2(0x1a6)](_0x1662fa[_0x4d22f2(0x172)](_0x1f6b26,_0x1b6604,_0x252ae4,_0x2abf77,_0x287ba9));}_0x287ba9['autoExpandPropertyCount']+=_0x512271[_0x4d22f2(0x155)];}if(!(_0x252ae4===_0x4d22f2(0x17e)||_0x252ae4===_0x4d22f2(0x121))&&!_0x34ff23&&_0x252ae4!=='String'&&_0x252ae4!==_0x4d22f2(0x14e)&&_0x252ae4!==_0x4d22f2(0x159)){var _0x5b1dce=_0x2d9852[_0x4d22f2(0x129)]||_0x287ba9[_0x4d22f2(0x129)];if(this[_0x4d22f2(0x180)](_0x1b6604)?(_0x2abf77=0x0,_0x1b6604[_0x4d22f2(0x1a9)](function(_0x1ec5f5){var _0x3a11b8=_0x4d22f2;if(_0x2e60f3++,_0x287ba9[_0x3a11b8(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;return;}if(!_0x287ba9[_0x3a11b8(0x160)]&&_0x287ba9[_0x3a11b8(0xde)]&&_0x287ba9[_0x3a11b8(0x154)]>_0x287ba9['autoExpandLimit']){_0x2230f8=!0x0;return;}_0x512271['push'](_0x1662fa[_0x3a11b8(0x172)](_0x1f6b26,_0x1b6604,_0x3a11b8(0xd0),_0x2abf77++,_0x287ba9,function(_0x2152a6){return function(){return _0x2152a6;};}(_0x1ec5f5)));})):this[_0x4d22f2(0xf3)](_0x1b6604)&&_0x1b6604['forEach'](function(_0x352abb,_0x150a02){var _0x1ee9a7=_0x4d22f2;if(_0x2e60f3++,_0x287ba9[_0x1ee9a7(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;return;}if(!_0x287ba9[_0x1ee9a7(0x160)]&&_0x287ba9['autoExpand']&&_0x287ba9['autoExpandPropertyCount']>_0x287ba9[_0x1ee9a7(0x1a7)]){_0x2230f8=!0x0;return;}var _0x1eaa85=_0x150a02['toString']();_0x1eaa85[_0x1ee9a7(0x155)]>0x64&&(_0x1eaa85=_0x1eaa85[_0x1ee9a7(0x1a5)](0x0,0x64)+_0x1ee9a7(0x131)),_0x512271[_0x1ee9a7(0x1a6)](_0x1662fa[_0x1ee9a7(0x172)](_0x1f6b26,_0x1b6604,'Map',_0x1eaa85,_0x287ba9,function(_0x3fcdd2){return function(){return _0x3fcdd2;};}(_0x352abb)));}),!_0x2abb0a){try{for(_0x406cf2 in _0x1b6604)if(!(_0x3e04a5&&_0x3acb99['test'](_0x406cf2))&&!this[_0x4d22f2(0xcc)](_0x1b6604,_0x406cf2,_0x287ba9)){if(_0x2e60f3++,_0x287ba9['autoExpandPropertyCount']++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;break;}if(!_0x287ba9[_0x4d22f2(0x160)]&&_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9[_0x4d22f2(0x154)]>_0x287ba9[_0x4d22f2(0x1a7)]){_0x2230f8=!0x0;break;}_0x512271[_0x4d22f2(0x1a6)](_0x1662fa['_addObjectProperty'](_0x1f6b26,_0x37a5d5,_0x1b6604,_0x252ae4,_0x406cf2,_0x287ba9));}}catch{}if(_0x37a5d5[_0x4d22f2(0x149)]=!0x0,_0x4828a1&&(_0x37a5d5[_0x4d22f2(0x128)]=!0x0),!_0x2230f8){var _0x142b7e=[]['concat'](this['_getOwnPropertyNames'](_0x1b6604))['concat'](this[_0x4d22f2(0xc6)](_0x1b6604));for(_0x2abf77=0x0,_0x179ba3=_0x142b7e[_0x4d22f2(0x155)];_0x2abf77<_0x179ba3;_0x2abf77++)if(_0x406cf2=_0x142b7e[_0x2abf77],!(_0x3e04a5&&_0x3acb99[_0x4d22f2(0x18d)](_0x406cf2[_0x4d22f2(0x123)]()))&&!this['_blacklistedProperty'](_0x1b6604,_0x406cf2,_0x287ba9)&&!_0x37a5d5[_0x4d22f2(0x104)+_0x406cf2['toString']()]){if(_0x2e60f3++,_0x287ba9[_0x4d22f2(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;break;}if(!_0x287ba9[_0x4d22f2(0x160)]&&_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9['autoExpandPropertyCount']>_0x287ba9['autoExpandLimit']){_0x2230f8=!0x0;break;}_0x512271[_0x4d22f2(0x1a6)](_0x1662fa['_addObjectProperty'](_0x1f6b26,_0x37a5d5,_0x1b6604,_0x252ae4,_0x406cf2,_0x287ba9));}}}}}if(_0x55a2bb[_0x4d22f2(0x162)]=_0x252ae4,_0x679d7f?(_0x55a2bb['value']=_0x1b6604[_0x4d22f2(0x153)](),this['_capIfString'](_0x252ae4,_0x55a2bb,_0x287ba9,_0x2d9852)):_0x252ae4===_0x4d22f2(0xe3)?_0x55a2bb[_0x4d22f2(0x1b4)]=this[_0x4d22f2(0xce)][_0x4d22f2(0x188)](_0x1b6604):_0x252ae4===_0x4d22f2(0x159)?_0x55a2bb[_0x4d22f2(0x1b4)]=_0x1b6604['toString']():_0x252ae4==='RegExp'?_0x55a2bb[_0x4d22f2(0x1b4)]=this[_0x4d22f2(0x1a8)][_0x4d22f2(0x188)](_0x1b6604):_0x252ae4==='symbol'&&this['_Symbol']?_0x55a2bb['value']=this[_0x4d22f2(0x150)][_0x4d22f2(0xf7)]['toString'][_0x4d22f2(0x188)](_0x1b6604):!_0x287ba9[_0x4d22f2(0xd8)]&&!(_0x252ae4===_0x4d22f2(0x17e)||_0x252ae4===_0x4d22f2(0x121))&&(delete _0x55a2bb[_0x4d22f2(0x1b4)],_0x55a2bb[_0x4d22f2(0x111)]=!0x0),_0x2230f8&&(_0x55a2bb[_0x4d22f2(0xfe)]=!0x0),_0x609320=_0x287ba9['node']['current'],_0x287ba9[_0x4d22f2(0x169)][_0x4d22f2(0x157)]=_0x55a2bb,this[_0x4d22f2(0xc5)](_0x55a2bb,_0x287ba9),_0x512271[_0x4d22f2(0x155)]){for(_0x2abf77=0x0,_0x179ba3=_0x512271['length'];_0x2abf77<_0x179ba3;_0x2abf77++)_0x512271[_0x2abf77](_0x2abf77);}_0x1f6b26[_0x4d22f2(0x155)]&&(_0x55a2bb[_0x4d22f2(0x129)]=_0x1f6b26);}catch(_0x86245e){_0xc5be16(_0x86245e,_0x55a2bb,_0x287ba9);}return this[_0x4d22f2(0x14d)](_0x1b6604,_0x55a2bb),this[_0x4d22f2(0xfd)](_0x55a2bb,_0x287ba9),_0x287ba9[_0x4d22f2(0x169)]['current']=_0x609320,_0x287ba9['level']--,_0x287ba9[_0x4d22f2(0xde)]=_0x5b8312,_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9[_0x4d22f2(0x1ad)][_0x4d22f2(0x106)](),_0x55a2bb;}['_getOwnPropertySymbols'](_0x5b3c9d){var _0x30ece4=_0x512a37;return Object[_0x30ece4(0xfa)]?Object[_0x30ece4(0xfa)](_0x5b3c9d):[];}[_0x512a37(0x180)](_0x20fa99){var _0x40165d=_0x512a37;return!!(_0x20fa99&&_0x14a8cc[_0x40165d(0xd0)]&&this[_0x40165d(0xda)](_0x20fa99)===_0x40165d(0xfc)&&_0x20fa99[_0x40165d(0x1a9)]);}[_0x512a37(0xcc)](_0x23da32,_0x5f9bbd,_0x5653eb){var _0x55ece4=_0x512a37;return _0x5653eb[_0x55ece4(0x139)]?typeof _0x23da32[_0x5f9bbd]=='function':!0x1;}[_0x512a37(0x13b)](_0x41aa7c){var _0x3a80d0=_0x512a37,_0x3391ea='';return _0x3391ea=typeof _0x41aa7c,_0x3391ea===_0x3a80d0(0x194)?this[_0x3a80d0(0xda)](_0x41aa7c)===_0x3a80d0(0x14a)?_0x3391ea='array':this[_0x3a80d0(0xda)](_0x41aa7c)===_0x3a80d0(0x19a)?_0x3391ea=_0x3a80d0(0xe3):this['_objectToString'](_0x41aa7c)===_0x3a80d0(0x108)?_0x3391ea='bigint':_0x41aa7c===null?_0x3391ea='null':_0x41aa7c[_0x3a80d0(0xdf)]&&(_0x3391ea=_0x41aa7c['constructor'][_0x3a80d0(0xe5)]||_0x3391ea):_0x3391ea===_0x3a80d0(0x121)&&this['_HTMLAllCollection']&&_0x41aa7c instanceof this[_0x3a80d0(0x10d)]&&(_0x3391ea=_0x3a80d0(0x1a1)),_0x3391ea;}[_0x512a37(0xda)](_0x152232){var _0x50db19=_0x512a37;return Object['prototype'][_0x50db19(0x123)]['call'](_0x152232);}[_0x512a37(0xc7)](_0x1e177c){var _0x1a7993=_0x512a37;return _0x1e177c===_0x1a7993(0x191)||_0x1e177c===_0x1a7993(0xec)||_0x1e177c==='number';}[_0x512a37(0x158)](_0x571b5b){var _0x2b3223=_0x512a37;return _0x571b5b===_0x2b3223(0x12b)||_0x571b5b==='String'||_0x571b5b==='Number';}[_0x512a37(0x172)](_0x1da961,_0x22304c,_0x293f1f,_0x3dc3b7,_0x1f8f7d,_0x3f521e){var _0x414591=this;return function(_0x294122){var _0xe2057a=_0x2152,_0x4caf4e=_0x1f8f7d['node']['current'],_0x17c538=_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xe8)],_0x1899c8=_0x1f8f7d[_0xe2057a(0x169)]['parent'];_0x1f8f7d[_0xe2057a(0x169)]['parent']=_0x4caf4e,_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xe8)]=typeof _0x3dc3b7==_0xe2057a(0x1b0)?_0x3dc3b7:_0x294122,_0x1da961['push'](_0x414591[_0xe2057a(0x10b)](_0x22304c,_0x293f1f,_0x3dc3b7,_0x1f8f7d,_0x3f521e)),_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xd7)]=_0x1899c8,_0x1f8f7d['node'][_0xe2057a(0xe8)]=_0x17c538;};}[_0x512a37(0xe0)](_0x49b9e5,_0x152fe1,_0x5aeb78,_0x361986,_0x4edf24,_0x2788bf,_0x319bf9){var _0x34d254=_0x512a37,_0x1d00e8=this;return _0x152fe1[_0x34d254(0x104)+_0x4edf24[_0x34d254(0x123)]()]=!0x0,function(_0x5d2cc){var _0x41493f=_0x34d254,_0x10d44d=_0x2788bf[_0x41493f(0x169)][_0x41493f(0x157)],_0x101fd9=_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)],_0x42de31=_0x2788bf['node'][_0x41493f(0xd7)];_0x2788bf['node'][_0x41493f(0xd7)]=_0x10d44d,_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)]=_0x5d2cc,_0x49b9e5[_0x41493f(0x1a6)](_0x1d00e8[_0x41493f(0x10b)](_0x5aeb78,_0x361986,_0x4edf24,_0x2788bf,_0x319bf9)),_0x2788bf[_0x41493f(0x169)][_0x41493f(0xd7)]=_0x42de31,_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)]=_0x101fd9;};}['_property'](_0xd82fc7,_0x5bfaa0,_0x5cce9b,_0x13c48a,_0x565628){var _0x1f86dc=_0x512a37,_0x377413=this;_0x565628||(_0x565628=function(_0xd2dc36,_0x437368){return _0xd2dc36[_0x437368];});var _0x58e1c9=_0x5cce9b[_0x1f86dc(0x123)](),_0x124f8e=_0x13c48a[_0x1f86dc(0x16a)]||{},_0x457a65=_0x13c48a['depth'],_0xe1ad95=_0x13c48a[_0x1f86dc(0x160)];try{var _0x4784ac=this[_0x1f86dc(0xf3)](_0xd82fc7),_0x35ea9b=_0x58e1c9;_0x4784ac&&_0x35ea9b[0x0]==='\\x27'&&(_0x35ea9b=_0x35ea9b[_0x1f86dc(0x175)](0x1,_0x35ea9b[_0x1f86dc(0x155)]-0x2));var _0x1caeb0=_0x13c48a[_0x1f86dc(0x16a)]=_0x124f8e[_0x1f86dc(0x104)+_0x35ea9b];_0x1caeb0&&(_0x13c48a[_0x1f86dc(0xd8)]=_0x13c48a['depth']+0x1),_0x13c48a['isExpressionToEvaluate']=!!_0x1caeb0;var _0x359faf=typeof _0x5cce9b==_0x1f86dc(0xee),_0x5c7fcb={'name':_0x359faf||_0x4784ac?_0x58e1c9:this[_0x1f86dc(0xd2)](_0x58e1c9)};if(_0x359faf&&(_0x5c7fcb[_0x1f86dc(0xee)]=!0x0),!(_0x5bfaa0==='array'||_0x5bfaa0===_0x1f86dc(0x176))){var _0x1c5970=this['_getOwnPropertyDescriptor'](_0xd82fc7,_0x5cce9b);if(_0x1c5970&&(_0x1c5970['set']&&(_0x5c7fcb[_0x1f86dc(0x142)]=!0x0),_0x1c5970['get']&&!_0x1caeb0&&!_0x13c48a['resolveGetters']))return _0x5c7fcb['getter']=!0x0,this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a),_0x5c7fcb;}var _0x2306a8;try{_0x2306a8=_0x565628(_0xd82fc7,_0x5cce9b);}catch(_0x4daa53){return _0x5c7fcb={'name':_0x58e1c9,'type':_0x1f86dc(0x1aa),'error':_0x4daa53[_0x1f86dc(0x19b)]},this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a),_0x5c7fcb;}var _0xc6538=this[_0x1f86dc(0x13b)](_0x2306a8),_0x26e7ca=this[_0x1f86dc(0xc7)](_0xc6538);if(_0x5c7fcb[_0x1f86dc(0x162)]=_0xc6538,_0x26e7ca)this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a,_0x2306a8,function(){var _0x5055ce=_0x1f86dc;_0x5c7fcb[_0x5055ce(0x1b4)]=_0x2306a8[_0x5055ce(0x153)](),!_0x1caeb0&&_0x377413[_0x5055ce(0x171)](_0xc6538,_0x5c7fcb,_0x13c48a,{});});else{var _0x1d990d=_0x13c48a['autoExpand']&&_0x13c48a['level']<_0x13c48a[_0x1f86dc(0x134)]&&_0x13c48a[_0x1f86dc(0x1ad)][_0x1f86dc(0x16c)](_0x2306a8)<0x0&&_0xc6538!==_0x1f86dc(0x198)&&_0x13c48a[_0x1f86dc(0x154)]<_0x13c48a[_0x1f86dc(0x1a7)];_0x1d990d||_0x13c48a[_0x1f86dc(0x13a)]<_0x457a65||_0x1caeb0?(this['serialize'](_0x5c7fcb,_0x2306a8,_0x13c48a,_0x1caeb0||{}),this[_0x1f86dc(0x14d)](_0x2306a8,_0x5c7fcb)):this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a,_0x2306a8,function(){var _0x14191b=_0x1f86dc;_0xc6538===_0x14191b(0x17e)||_0xc6538===_0x14191b(0x121)||(delete _0x5c7fcb[_0x14191b(0x1b4)],_0x5c7fcb['capped']=!0x0);});}return _0x5c7fcb;}finally{_0x13c48a[_0x1f86dc(0x16a)]=_0x124f8e,_0x13c48a[_0x1f86dc(0xd8)]=_0x457a65,_0x13c48a['isExpressionToEvaluate']=_0xe1ad95;}}[_0x512a37(0x171)](_0x180f90,_0x11d747,_0x154dd8,_0x21893f){var _0x56825e=_0x512a37,_0x176056=_0x21893f[_0x56825e(0x197)]||_0x154dd8['strLength'];if((_0x180f90===_0x56825e(0xec)||_0x180f90===_0x56825e(0xf5))&&_0x11d747[_0x56825e(0x1b4)]){let _0x1e705c=_0x11d747[_0x56825e(0x1b4)][_0x56825e(0x155)];_0x154dd8[_0x56825e(0x15f)]+=_0x1e705c,_0x154dd8[_0x56825e(0x15f)]>_0x154dd8[_0x56825e(0x132)]?(_0x11d747[_0x56825e(0x111)]='',delete _0x11d747[_0x56825e(0x1b4)]):_0x1e705c>_0x176056&&(_0x11d747[_0x56825e(0x111)]=_0x11d747[_0x56825e(0x1b4)]['substr'](0x0,_0x176056),delete _0x11d747[_0x56825e(0x1b4)]);}}[_0x512a37(0xf3)](_0x3a986b){var _0x2ef40b=_0x512a37;return!!(_0x3a986b&&_0x14a8cc[_0x2ef40b(0x138)]&&this['_objectToString'](_0x3a986b)===_0x2ef40b(0x136)&&_0x3a986b[_0x2ef40b(0x1a9)]);}[_0x512a37(0xd2)](_0x495bcf){var _0x252e7d=_0x512a37;if(_0x495bcf[_0x252e7d(0x184)](/^\\d+$/))return _0x495bcf;var _0x408928;try{_0x408928=JSON[_0x252e7d(0x13d)](''+_0x495bcf);}catch{_0x408928='\\x22'+this[_0x252e7d(0xda)](_0x495bcf)+'\\x22';}return _0x408928[_0x252e7d(0x184)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x408928=_0x408928['substr'](0x1,_0x408928[_0x252e7d(0x155)]-0x2):_0x408928=_0x408928[_0x252e7d(0x122)](/'/g,'\\x5c\\x27')[_0x252e7d(0x122)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x408928;}[_0x512a37(0x135)](_0x3ce327,_0xa05fc0,_0x285bd7,_0x298585){var _0x2e1b6b=_0x512a37;this[_0x2e1b6b(0xc5)](_0x3ce327,_0xa05fc0),_0x298585&&_0x298585(),this['_additionalMetadata'](_0x285bd7,_0x3ce327),this[_0x2e1b6b(0xfd)](_0x3ce327,_0xa05fc0);}[_0x512a37(0xc5)](_0x1df5cb,_0x1e600e){var _0x569524=_0x512a37;this[_0x569524(0xe7)](_0x1df5cb,_0x1e600e),this[_0x569524(0x195)](_0x1df5cb,_0x1e600e),this[_0x569524(0xc9)](_0x1df5cb,_0x1e600e),this[_0x569524(0x109)](_0x1df5cb,_0x1e600e);}[_0x512a37(0xe7)](_0x4a32d0,_0x365d19){}['_setNodeQueryPath'](_0x8e29ee,_0x1969db){}['_setNodeLabel'](_0x957f54,_0x3043fe){}[_0x512a37(0x174)](_0x4f244d){var _0x33306e=_0x512a37;return _0x4f244d===this[_0x33306e(0x1a2)];}['_treeNodePropertiesAfterFullValue'](_0x2f2d65,_0x5a7554){var _0x1a9648=_0x512a37;this[_0x1a9648(0xf1)](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x11f)](_0x2f2d65),_0x5a7554['sortProps']&&this[_0x1a9648(0x182)](_0x2f2d65),this['_addFunctionsNode'](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x15a)](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x145)](_0x2f2d65);}[_0x512a37(0x14d)](_0x218596,_0x39bb99){var _0xf711df=_0x512a37;try{_0x218596&&typeof _0x218596[_0xf711df(0x155)]==_0xf711df(0x1b0)&&(_0x39bb99['length']=_0x218596[_0xf711df(0x155)]);}catch{}if(_0x39bb99['type']===_0xf711df(0x1b0)||_0x39bb99[_0xf711df(0x162)]==='Number'){if(isNaN(_0x39bb99['value']))_0x39bb99[_0xf711df(0x148)]=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];else switch(_0x39bb99[_0xf711df(0x1b4)]){case Number[_0xf711df(0x18c)]:_0x39bb99[_0xf711df(0x105)]=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];break;case Number[_0xf711df(0x102)]:_0x39bb99['negativeInfinity']=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];break;case 0x0:this[_0xf711df(0x190)](_0x39bb99['value'])&&(_0x39bb99['negativeZero']=!0x0);break;}}else _0x39bb99[_0xf711df(0x162)]===_0xf711df(0x198)&&typeof _0x218596[_0xf711df(0xe5)]=='string'&&_0x218596[_0xf711df(0xe5)]&&_0x39bb99[_0xf711df(0xe5)]&&_0x218596[_0xf711df(0xe5)]!==_0x39bb99['name']&&(_0x39bb99[_0xf711df(0x15b)]=_0x218596['name']);}['_isNegativeZero'](_0x1878c3){return 0x1/_0x1878c3===Number['NEGATIVE_INFINITY'];}[_0x512a37(0x182)](_0x4f6bdc){var _0x54b436=_0x512a37;!_0x4f6bdc[_0x54b436(0x129)]||!_0x4f6bdc[_0x54b436(0x129)][_0x54b436(0x155)]||_0x4f6bdc['type']===_0x54b436(0x1ac)||_0x4f6bdc['type']==='Map'||_0x4f6bdc[_0x54b436(0x162)]==='Set'||_0x4f6bdc[_0x54b436(0x129)][_0x54b436(0x178)](function(_0x4410ef,_0x20e5af){var _0x157689=_0x54b436,_0x2f4682=_0x4410ef[_0x157689(0xe5)][_0x157689(0x1b3)](),_0x249a2f=_0x20e5af['name'][_0x157689(0x1b3)]();return _0x2f4682<_0x249a2f?-0x1:_0x2f4682>_0x249a2f?0x1:0x0;});}['_addFunctionsNode'](_0x3e4f0c,_0x16620d){var _0x3c491d=_0x512a37;if(!(_0x16620d['noFunctions']||!_0x3e4f0c[_0x3c491d(0x129)]||!_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x155)])){for(var _0x32424d=[],_0x11cbbe=[],_0x4fe7b4=0x0,_0x3d8d0c=_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x155)];_0x4fe7b4<_0x3d8d0c;_0x4fe7b4++){var _0x46c351=_0x3e4f0c[_0x3c491d(0x129)][_0x4fe7b4];_0x46c351[_0x3c491d(0x162)]===_0x3c491d(0x198)?_0x32424d['push'](_0x46c351):_0x11cbbe[_0x3c491d(0x1a6)](_0x46c351);}if(!(!_0x11cbbe[_0x3c491d(0x155)]||_0x32424d[_0x3c491d(0x155)]<=0x1)){_0x3e4f0c[_0x3c491d(0x129)]=_0x11cbbe;var _0x46d709={'functionsNode':!0x0,'props':_0x32424d};this['_setNodeId'](_0x46d709,_0x16620d),this[_0x3c491d(0xf1)](_0x46d709,_0x16620d),this[_0x3c491d(0x11f)](_0x46d709),this['_setNodePermissions'](_0x46d709,_0x16620d),_0x46d709['id']+='\\x20f',_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x119)](_0x46d709);}}}[_0x512a37(0x15a)](_0x309916,_0x31adc5){}[_0x512a37(0x11f)](_0x33c01d){}[_0x512a37(0xcf)](_0x2f14ed){var _0x29caf9=_0x512a37;return Array[_0x29caf9(0x19e)](_0x2f14ed)||typeof _0x2f14ed==_0x29caf9(0x194)&&this['_objectToString'](_0x2f14ed)===_0x29caf9(0x14a);}[_0x512a37(0x109)](_0x3d2b35,_0x5a2aae){}[_0x512a37(0x145)](_0x5e8749){var _0x1ec90c=_0x512a37;delete _0x5e8749[_0x1ec90c(0x189)],delete _0x5e8749[_0x1ec90c(0xcb)],delete _0x5e8749[_0x1ec90c(0x193)];}['_setNodeExpressionPath'](_0x3edd3c,_0x3e2e0c){}[_0x512a37(0x100)](_0x56cf6d){var _0x2cf63a=_0x512a37;return _0x56cf6d?_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0x183)])?'['+_0x56cf6d+']':_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0xf2)])?'.'+_0x56cf6d:_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0xe1)])?'['+_0x56cf6d+']':'[\\x27'+_0x56cf6d+'\\x27]':'';}}let _0xcb6255=new _0x56130d();function _0x4a295a(_0x50db00,_0x45daa5,_0xc5ab2d,_0x1fd4b8,_0xf9435f,_0x51a04f){var _0x4801b6=_0x512a37;let _0x40db4a,_0x1a3516;try{_0x1a3516=_0x399678(),_0x40db4a=_0x586ea4[_0x45daa5],!_0x40db4a||_0x1a3516-_0x40db4a['ts']>0x1f4&&_0x40db4a[_0x4801b6(0x166)]&&_0x40db4a[_0x4801b6(0x14b)]/_0x40db4a['count']<0x64?(_0x586ea4[_0x45daa5]=_0x40db4a={'count':0x0,'time':0x0,'ts':_0x1a3516},_0x586ea4[_0x4801b6(0x18e)]={}):_0x1a3516-_0x586ea4[_0x4801b6(0x18e)]['ts']>0x32&&_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]&&_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x14b)]/_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]<0x64&&(_0x586ea4[_0x4801b6(0x18e)]={});let _0x16b942=[],_0x37e208=_0x40db4a[_0x4801b6(0x140)]||_0x586ea4['hits'][_0x4801b6(0x140)]?_0x1b0717:_0x16a222,_0x4245e8=_0x4887f0=>{var _0x11e2ab=_0x4801b6;let _0x54b033={};return _0x54b033[_0x11e2ab(0x129)]=_0x4887f0['props'],_0x54b033[_0x11e2ab(0x130)]=_0x4887f0['elements'],_0x54b033[_0x11e2ab(0x197)]=_0x4887f0[_0x11e2ab(0x197)],_0x54b033[_0x11e2ab(0x132)]=_0x4887f0[_0x11e2ab(0x132)],_0x54b033[_0x11e2ab(0x1a7)]=_0x4887f0[_0x11e2ab(0x1a7)],_0x54b033[_0x11e2ab(0x134)]=_0x4887f0[_0x11e2ab(0x134)],_0x54b033['sortProps']=!0x1,_0x54b033[_0x11e2ab(0x139)]=!_0x54a870,_0x54b033[_0x11e2ab(0xd8)]=0x1,_0x54b033[_0x11e2ab(0x13a)]=0x0,_0x54b033['expId']=_0x11e2ab(0xd1),_0x54b033[_0x11e2ab(0x16d)]=_0x11e2ab(0x164),_0x54b033['autoExpand']=!0x0,_0x54b033[_0x11e2ab(0x1ad)]=[],_0x54b033[_0x11e2ab(0x154)]=0x0,_0x54b033[_0x11e2ab(0x1ab)]=!0x0,_0x54b033[_0x11e2ab(0x15f)]=0x0,_0x54b033[_0x11e2ab(0x169)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x54b033;};for(var _0x11df82=0x0;_0x11df82<_0xf9435f['length'];_0x11df82++)_0x16b942[_0x4801b6(0x1a6)](_0xcb6255[_0x4801b6(0x127)]({'timeNode':_0x50db00===_0x4801b6(0x14b)||void 0x0},_0xf9435f[_0x11df82],_0x4245e8(_0x37e208),{}));if(_0x50db00==='trace'){let _0x20f011=Error[_0x4801b6(0x133)];try{Error[_0x4801b6(0x133)]=0x1/0x0,_0x16b942[_0x4801b6(0x1a6)](_0xcb6255[_0x4801b6(0x127)]({'stackNode':!0x0},new Error()[_0x4801b6(0x147)],_0x4245e8(_0x37e208),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x20f011;}}return{'method':_0x4801b6(0x112),'version':_0x5dea60,'args':[{'ts':_0xc5ab2d,'session':_0x1fd4b8,'args':_0x16b942,'id':_0x45daa5,'context':_0x51a04f}]};}catch(_0x1c2ebd){return{'method':_0x4801b6(0x112),'version':_0x5dea60,'args':[{'ts':_0xc5ab2d,'session':_0x1fd4b8,'args':[{'type':_0x4801b6(0x1aa),'error':_0x1c2ebd&&_0x1c2ebd[_0x4801b6(0x19b)]}],'id':_0x45daa5,'context':_0x51a04f}]};}finally{try{if(_0x40db4a&&_0x1a3516){let _0x396f96=_0x399678();_0x40db4a[_0x4801b6(0x166)]++,_0x40db4a[_0x4801b6(0x14b)]+=_0x3f5d2d(_0x1a3516,_0x396f96),_0x40db4a['ts']=_0x396f96,_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]++,_0x586ea4[_0x4801b6(0x18e)]['time']+=_0x3f5d2d(_0x1a3516,_0x396f96),_0x586ea4[_0x4801b6(0x18e)]['ts']=_0x396f96,(_0x40db4a[_0x4801b6(0x166)]>0x32||_0x40db4a[_0x4801b6(0x14b)]>0x64)&&(_0x40db4a['reduceLimits']=!0x0),(_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]>0x3e8||_0x586ea4['hits']['time']>0x12c)&&(_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x140)]=!0x0);}}catch{}}}return _0x14a8cc[_0x512a37(0x101)];})(globalThis,_0x43ccbf(0xeb),_0x43ccbf(0x1b1),_0x43ccbf(0x167),_0x43ccbf(0x17b),'1.0.0',_0x43ccbf(0xff),_0x43ccbf(0x185),_0x43ccbf(0x187));function _0x5750(){var _0x51fcf3=['stringify','disabledLog','6iRzvQR','reduceLimits','port','setter','reload','Symbol','_cleanNode','url','stack','nan','_p_length','[object\\x20Array]','time','_maxConnectAttemptCount','_additionalMetadata','Buffer','36UGqKvx','_Symbol','elapsed','_connecting','valueOf','autoExpandPropertyCount','length','now','current','_isPrimitiveWrapperType','bigint','_addLoadNode','funcName','close','data','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','allStrLength','isExpressionToEvaluate','1912428peUkZS','type','getOwnPropertyNames','root_exp','70553MkwoTI','count',\"/home/administrador/.vscode-server/extensions/wallabyjs.console-ninja-0.0.182/node_modules\",'pathToFileURL','node','expressionsToEvaluate','ws://','indexOf','rootExpression','2100Tdowba','_reconnectTimeout','1714945fcpOOS','_capIfString','_addProperty','onerror','_isUndefined','substr','Error','_allowedToConnectOnSend','sort','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','149XbESjE','webpack','272iXOgWY','_connectAttemptCount','null','join','_isSet','_webSocketErrorDocsLink','_sortProps','_numberRegExp','match',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"sa1\",\"10.30.0.81\",\"172.20.0.1\"],'readyState','','call','_hasSymbolPropertyOnItsPath','console','host','POSITIVE_INFINITY','test','hits','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_isNegativeZero','boolean','https://tinyurl.com/37x8b79t','_hasMapOnItsPath','object','_setNodeQueryPath','warn','strLength','function','_WebSocketClass','[object\\x20Date]','message','_socket','onclose','isArray','370469cMKCLB','includes','HTMLAllCollection','_undefined','hasOwnProperty',':logPointId:','slice','push','autoExpandLimit','_regExpToString','forEach','unknown','resolveGetters','array','autoExpandPreviousObjects','process','bind','number','34643','hrtime','toLowerCase','value','unref','WebSocket','_treeNodePropertiesBeforeFullValue','_getOwnPropertySymbols','_isPrimitiveType','\\x20browser','_setNodeExpressionPath','default','_hasSetOnItsPath','_blacklistedProperty','map','_dateToString','_isArray','Set','root_exp_id','_propertyName','_connectToHostNow','_inBrowser','1464558bwCIvl','perf_hooks','parent','depth','astro','_objectToString','nuxt','getPrototypeOf','_console_ninja_session','autoExpand','constructor','_addObjectProperty','_quotedRegExp','onopen','date','nodeModules','name','_disposeWebsocket','_setNodeId','index','cappedElements','parse','localhost','string','performance','symbol','location','_getOwnPropertyNames','_setNodeLabel','_keyStrRegExp','_isMap','global','String','4GKbUZr','prototype','send','_WebSocket','getOwnPropertySymbols','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','[object\\x20Set]','_treeNodePropertiesAfterFullValue','cappedProps','1689256421552','_propertyAccessor','_console_ninja','NEGATIVE_INFINITY','_attemptToReconnectShortly','_p_','positiveInfinity','pop','timeStamp','[object\\x20BigInt]','_setNodePermissions','error','_property','versions','_HTMLAllCollection','62140fBudxU','path','getWebSocketClass','capped','log','method','disabledTrace','trace','argumentResolutionError','_ws','\\x20server','unshift','10MoeyiJ','timeEnd','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_allowedToSend','_consoleNinjaAllowedToStart','_setNodeExpandableState','__es'+'Module','undefined','replace','toString','onmessage','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','enumerable','serialize','_p_name','props','then','Boolean','hostname','_connected','2334ykESxH','getOwnPropertyDescriptor','elements','...','totalStrLength','stackTraceLimit','autoExpandMaxDepth','_processTreeNodeResult','[object\\x20Map]','_sendErrorMessage','Map','noFunctions','level','_type','ws/index.js'];_0x5750=function(){return _0x51fcf3;};return _0x5750();}");
  } catch (e) {}
}

;

function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }

  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}

  return v;
}

;

function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }

  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}

  return v;
}

;

function oo_ts() {
  try {
    oo_cm().consoleTime();
  } catch (e) {}
}

;

function oo_te() {
  try {
    oo_cm().consoleTimeEnd();
  } catch (e) {}
}

;
/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./resources/js/components/User.vue":
/*!******************************************!*\
  !*** ./resources/js/components/User.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _User_vue_vue_type_template_id_d884f594___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=d884f594& */ "./resources/js/components/User.vue?vue&type=template&id=d884f594&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/components/User.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_d884f594___WEBPACK_IMPORTED_MODULE_0__.render,
  _User_vue_vue_type_template_id_d884f594___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/User.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User.vue?vue&type=template&id=d884f594&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/User.vue?vue&type=template&id=d884f594& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_d884f594___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_d884f594___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_d884f594___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=template&id=d884f594& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User.vue?vue&type=template&id=d884f594&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User.vue?vue&type=template&id=d884f594&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User.vue?vue&type=template&id=d884f594& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { "data-app": "" } },
    [
      _c("alert-time-out", {
        attrs: { redirect: _vm.redirectSessionFinished },
        on: {
          redirect: function ($event) {
            return _vm.updateTimeOut($event)
          },
        },
      }),
      _vm._v(" "),
      _c("alert", {
        staticClass: "mb-2",
        attrs: {
          text: _vm.textAlert,
          event: _vm.alertEvent,
          show: _vm.showAlert,
        },
        on: {
          "show-alert": function ($event) {
            return _vm.updateAlert($event)
          },
        },
      }),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-3 shadow p-3 mt-3",
        attrs: {
          "single-select": false,
          search: _vm.options.search,
          headers: _vm.headers,
          items: _vm.recordsFiltered,
          options: _vm.options,
          loading: _vm.loading,
          "item-key": "id",
          "sort-by": "id",
          "footer-props": { "items-per-page-options": [15, 30, 50, 100] },
        },
        on: {
          "update:options": function ($event) {
            _vm.options = $event
          },
        },
        scopedSlots: _vm._u(
          [
            {
              key: "top",
              fn: function () {
                return [
                  _c(
                    "v-toolbar",
                    { attrs: { flat: "" } },
                    [
                      _c("v-toolbar-title", [_vm._v("Usuarios")]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "800px", persistent: "" },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function (ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-col", {
                                        attrs: { align: "right" },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass:
                                            "d-none d-md-block d-lg-block",
                                          attrs: { xs: "6", sm: "6", md: "6" },
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              dense: "",
                                              label: "Buscar",
                                              outlined: "",
                                              type: "text",
                                            },
                                            model: {
                                              value: _vm.options.search,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.options,
                                                  "search",
                                                  $$v
                                                )
                                              },
                                              expression: "options.search",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              },
                            },
                          ]),
                          model: {
                            value: _vm.dialog,
                            callback: function ($$v) {
                              _vm.dialog = $$v
                            },
                            expression: "dialog",
                          },
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-card",
                            {
                              staticClass: "flexcard auth",
                              attrs: { height: "100%" },
                            },
                            [
                              _c("v-card-title", [
                                _c(
                                  "h1",
                                  {
                                    staticClass:
                                      "mx-auto pt-3 mb-3 text-center black-secondary",
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(_vm.formTitle) +
                                        "\n              "
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              attrs: {
                                                cols: "12",
                                                sm: "6",
                                                md: "6",
                                              },
                                            },
                                            [
                                              _c("base-input", {
                                                attrs: {
                                                  label: "Nombre",
                                                  validation:
                                                    _vm.$v.editedItem.name,
                                                  validationTextType: "default",
                                                },
                                                on: {
                                                  "update:validation":
                                                    function ($event) {
                                                      return _vm.$set(
                                                        _vm.$v.editedItem,
                                                        "name",
                                                        $event
                                                      )
                                                    },
                                                },
                                                model: {
                                                  value:
                                                    _vm.$v.editedItem.name
                                                      .$model,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.$v.editedItem.name,
                                                      "$model",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "$v.editedItem.name.$model",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              attrs: {
                                                cols: "12",
                                                sm: "6",
                                                md: "6",
                                              },
                                            },
                                            [
                                              _c("base-input", {
                                                attrs: {
                                                  label: "Cargo",
                                                  validation:
                                                    _vm.$v.editedItem
                                                      .position_signature,
                                                  validationTextType: "default",
                                                },
                                                on: {
                                                  "update:validation":
                                                    function ($event) {
                                                      return _vm.$set(
                                                        _vm.$v.editedItem,
                                                        "position_signature",
                                                        $event
                                                      )
                                                    },
                                                },
                                                model: {
                                                  value:
                                                    _vm.$v.editedItem
                                                      .position_signature
                                                      .$model,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.$v.editedItem
                                                        .position_signature,
                                                      "$model",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "$v.editedItem.position_signature.$model",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              attrs: {
                                                cols: "12",
                                                sm: "6",
                                                md: "6",
                                              },
                                            },
                                            [
                                              _c("base-input", {
                                                attrs: {
                                                  label: "Correo electrónico",
                                                  validation:
                                                    _vm.$v.editedItem.email,
                                                  validationTextType: "none",
                                                },
                                                on: {
                                                  "update:validation":
                                                    function ($event) {
                                                      return _vm.$set(
                                                        _vm.$v.editedItem,
                                                        "email",
                                                        $event
                                                      )
                                                    },
                                                },
                                                model: {
                                                  value:
                                                    _vm.$v.editedItem.email
                                                      .$model,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.$v.editedItem.email,
                                                      "$model",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "$v.editedItem.email.$model",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              attrs: {
                                                cols: "12",
                                                sm: "6",
                                                md: "6",
                                              },
                                            },
                                            [
                                              _c("base-input", {
                                                attrs: {
                                                  label: "Cargo",
                                                  validation:
                                                    _vm.$v.editedItem
                                                      .dependency_name,
                                                  validationTextType: "default",
                                                },
                                                on: {
                                                  "update:validation":
                                                    function ($event) {
                                                      return _vm.$set(
                                                        _vm.$v.editedItem,
                                                        "dependency_name",
                                                        $event
                                                      )
                                                    },
                                                },
                                                model: {
                                                  value:
                                                    _vm.$v.editedItem
                                                      .dependency_name.$model,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.$v.editedItem
                                                        .dependency_name,
                                                      "$model",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "$v.editedItem.dependency_name.$model",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              attrs: {
                                                cols: "12",
                                                sm: "6",
                                                md: "6",
                                              },
                                            },
                                            [
                                              _c("base-select-search", {
                                                attrs: {
                                                  label:
                                                    "Jefe inmediato (Opcional)",
                                                  items: _vm.users,
                                                  item: "name",
                                                  validation:
                                                    _vm.$v.editedItem
                                                      .inmediate_superior_id,
                                                },
                                                model: {
                                                  value:
                                                    _vm.$v.editedItem
                                                      .inmediate_superior_id
                                                      .$model,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.$v.editedItem
                                                        .inmediate_superior_id,
                                                      "$model",
                                                      typeof $$v === "string"
                                                        ? $$v.trim()
                                                        : $$v
                                                    )
                                                  },
                                                  expression:
                                                    "$v.editedItem.inmediate_superior_id.$model\n                        ",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              attrs: {
                                                cols: "12",
                                                sm: "6",
                                                md: "6",
                                              },
                                            },
                                            [
                                              _c("base-select-search", {
                                                attrs: {
                                                  label: "Rol",
                                                  items: _vm.roles,
                                                  validation:
                                                    _vm.$v.editedItem.rol,
                                                },
                                                model: {
                                                  value:
                                                    _vm.$v.editedItem.rol
                                                      .$model,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.$v.editedItem.rol,
                                                      "$model",
                                                      typeof $$v === "string"
                                                        ? $$v.trim()
                                                        : $$v
                                                    )
                                                  },
                                                  expression:
                                                    "$v.editedItem.rol.$model",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              attrs: {
                                                cols: "12",
                                                sm: "12",
                                                md: "12",
                                              },
                                            },
                                            [
                                              _c("v-checkbox", {
                                                staticClass: "ml-6",
                                                attrs: {
                                                  label: "Autorizante?",
                                                },
                                                model: {
                                                  value:
                                                    _vm.$v.editedItem
                                                      .send_to_rrhh.$model,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.$v.editedItem
                                                        .send_to_rrhh,
                                                      "$model",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "$v.editedItem.send_to_rrhh.$model",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { align: "center" } },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color:
                                                      "btn-normal no-uppercase mt-3",
                                                    rounded: "",
                                                  },
                                                  on: { click: _vm.save },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      Guardar\n                    "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color:
                                                      "btn-normal-close no-uppercase mt-3",
                                                    rounded: "",
                                                  },
                                                  on: { click: _vm.close },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      Cancelar\n                    "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]
              },
              proxy: true,
            },
            {
              key: "item.actions",
              fn: function (ref) {
                var item = ref.item
                return [
                  _c(
                    "v-tooltip",
                    {
                      attrs: { top: "" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function (ref) {
                              var on = ref.on
                              var attrs = ref.attrs
                              return [
                                _c(
                                  "v-icon",
                                  _vm._g(
                                    _vm._b(
                                      {
                                        staticClass: "mr-2",
                                        attrs: { small: "" },
                                        on: {
                                          click: function ($event) {
                                            return _vm.editItem(item)
                                          },
                                        },
                                      },
                                      "v-icon",
                                      attrs,
                                      false
                                    ),
                                    on
                                  ),
                                  [
                                    _vm._v(
                                      "\n            mdi-pencil\n          "
                                    ),
                                  ]
                                ),
                              ]
                            },
                          },
                        ],
                        null,
                        true
                      ),
                    },
                    [_vm._v(" "), _c("span", [_vm._v("Editar")])]
                  ),
                ]
              },
            },
            {
              key: "no-data",
              fn: function () {
                return [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-normal-secondary no-decoration",
                      attrs: { href: "#" },
                      on: { click: _vm.initialize },
                    },
                    [_vm._v("\n        Reiniciar\n      ")]
                  ),
                ]
              },
              proxy: true,
            },
          ],
          null,
          true
        ),
        model: {
          value: _vm.selected,
          callback: function ($$v) {
            _vm.selected = $$v
          },
          expression: "selected",
        },
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "400px" },
          model: {
            value: _vm.dialogBlock,
            callback: function ($$v) {
              _vm.dialogBlock = $$v
            },
            expression: "dialogBlock",
          },
        },
        [
          _c(
            "v-card",
            { staticClass: "h-100" },
            [
              _c(
                "v-container",
                [
                  _c(
                    "h1",
                    { staticClass: "black-secondary text-center mt-3 mb-3" },
                    [_vm._v("\n          Desactivar usuario\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { align: "center" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color:
                                  "btn-normal no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto",
                                rounded: "",
                              },
                              on: { click: _vm.disableUser },
                            },
                            [_vm._v("Confirmar")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color:
                                  "btn-normal-close no-uppercase mt-3 mb-3",
                                rounded: "",
                              },
                              on: { click: _vm.closeBlock },
                            },
                            [_vm._v("\n              Cancelar\n            ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alpha.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/alpha.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alpha', /^[a-zA-Z]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alphaNum.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/alphaNum.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/and.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/and.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'and'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid && fn.apply(_this, args);
    }, true);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/between.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/between.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min, max) {
  return (0, _common.withParams)({
    type: 'between',
    min: min,
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/common.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.req = exports.regex = exports.ref = exports.len = void 0;
Object.defineProperty(exports, "withParams", ({
  enumerable: true,
  get: function get() {
    return _withParams.default;
  }
}));

var _withParams = _interopRequireDefault(__webpack_require__(/*! ../withParams */ "./node_modules/vuelidate/lib/withParams.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var req = function req(value) {
  if (Array.isArray(value)) return !!value.length;

  if (value === undefined || value === null) {
    return false;
  }

  if (value === false) {
    return true;
  }

  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }

  if (_typeof(value) === 'object') {
    for (var _ in value) {
      return true;
    }

    return false;
  }

  return !!String(value).length;
};

exports.req = req;

var len = function len(value) {
  if (Array.isArray(value)) return value.length;

  if (_typeof(value) === 'object') {
    return Object.keys(value).length;
  }

  return String(value).length;
};

exports.len = len;

var ref = function ref(reference, vm, parentVm) {
  return typeof reference === 'function' ? reference.call(vm, parentVm) : parentVm[reference];
};

exports.ref = ref;

var regex = function regex(type, expr) {
  return (0, _withParams.default)({
    type: type
  }, function (value) {
    return !req(value) || expr.test(value);
  });
};

exports.regex = regex;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/decimal.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/decimal.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('decimal', /^[-]?\d*(\.\d+)?$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/email.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/email.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var emailRegex = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

var _default = (0, _common.regex)('email', emailRegex);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/index.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "alpha", ({
  enumerable: true,
  get: function get() {
    return _alpha.default;
  }
}));
Object.defineProperty(exports, "alphaNum", ({
  enumerable: true,
  get: function get() {
    return _alphaNum.default;
  }
}));
Object.defineProperty(exports, "and", ({
  enumerable: true,
  get: function get() {
    return _and.default;
  }
}));
Object.defineProperty(exports, "between", ({
  enumerable: true,
  get: function get() {
    return _between.default;
  }
}));
Object.defineProperty(exports, "decimal", ({
  enumerable: true,
  get: function get() {
    return _decimal.default;
  }
}));
Object.defineProperty(exports, "email", ({
  enumerable: true,
  get: function get() {
    return _email.default;
  }
}));
exports.helpers = void 0;
Object.defineProperty(exports, "integer", ({
  enumerable: true,
  get: function get() {
    return _integer.default;
  }
}));
Object.defineProperty(exports, "ipAddress", ({
  enumerable: true,
  get: function get() {
    return _ipAddress.default;
  }
}));
Object.defineProperty(exports, "macAddress", ({
  enumerable: true,
  get: function get() {
    return _macAddress.default;
  }
}));
Object.defineProperty(exports, "maxLength", ({
  enumerable: true,
  get: function get() {
    return _maxLength.default;
  }
}));
Object.defineProperty(exports, "maxValue", ({
  enumerable: true,
  get: function get() {
    return _maxValue.default;
  }
}));
Object.defineProperty(exports, "minLength", ({
  enumerable: true,
  get: function get() {
    return _minLength.default;
  }
}));
Object.defineProperty(exports, "minValue", ({
  enumerable: true,
  get: function get() {
    return _minValue.default;
  }
}));
Object.defineProperty(exports, "not", ({
  enumerable: true,
  get: function get() {
    return _not.default;
  }
}));
Object.defineProperty(exports, "numeric", ({
  enumerable: true,
  get: function get() {
    return _numeric.default;
  }
}));
Object.defineProperty(exports, "or", ({
  enumerable: true,
  get: function get() {
    return _or.default;
  }
}));
Object.defineProperty(exports, "required", ({
  enumerable: true,
  get: function get() {
    return _required.default;
  }
}));
Object.defineProperty(exports, "requiredIf", ({
  enumerable: true,
  get: function get() {
    return _requiredIf.default;
  }
}));
Object.defineProperty(exports, "requiredUnless", ({
  enumerable: true,
  get: function get() {
    return _requiredUnless.default;
  }
}));
Object.defineProperty(exports, "sameAs", ({
  enumerable: true,
  get: function get() {
    return _sameAs.default;
  }
}));
Object.defineProperty(exports, "url", ({
  enumerable: true,
  get: function get() {
    return _url.default;
  }
}));

var _alpha = _interopRequireDefault(__webpack_require__(/*! ./alpha */ "./node_modules/vuelidate/lib/validators/alpha.js"));

var _alphaNum = _interopRequireDefault(__webpack_require__(/*! ./alphaNum */ "./node_modules/vuelidate/lib/validators/alphaNum.js"));

var _numeric = _interopRequireDefault(__webpack_require__(/*! ./numeric */ "./node_modules/vuelidate/lib/validators/numeric.js"));

var _between = _interopRequireDefault(__webpack_require__(/*! ./between */ "./node_modules/vuelidate/lib/validators/between.js"));

var _email = _interopRequireDefault(__webpack_require__(/*! ./email */ "./node_modules/vuelidate/lib/validators/email.js"));

var _ipAddress = _interopRequireDefault(__webpack_require__(/*! ./ipAddress */ "./node_modules/vuelidate/lib/validators/ipAddress.js"));

var _macAddress = _interopRequireDefault(__webpack_require__(/*! ./macAddress */ "./node_modules/vuelidate/lib/validators/macAddress.js"));

var _maxLength = _interopRequireDefault(__webpack_require__(/*! ./maxLength */ "./node_modules/vuelidate/lib/validators/maxLength.js"));

var _minLength = _interopRequireDefault(__webpack_require__(/*! ./minLength */ "./node_modules/vuelidate/lib/validators/minLength.js"));

var _required = _interopRequireDefault(__webpack_require__(/*! ./required */ "./node_modules/vuelidate/lib/validators/required.js"));

var _requiredIf = _interopRequireDefault(__webpack_require__(/*! ./requiredIf */ "./node_modules/vuelidate/lib/validators/requiredIf.js"));

var _requiredUnless = _interopRequireDefault(__webpack_require__(/*! ./requiredUnless */ "./node_modules/vuelidate/lib/validators/requiredUnless.js"));

var _sameAs = _interopRequireDefault(__webpack_require__(/*! ./sameAs */ "./node_modules/vuelidate/lib/validators/sameAs.js"));

var _url = _interopRequireDefault(__webpack_require__(/*! ./url */ "./node_modules/vuelidate/lib/validators/url.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! ./or */ "./node_modules/vuelidate/lib/validators/or.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./node_modules/vuelidate/lib/validators/and.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not */ "./node_modules/vuelidate/lib/validators/not.js"));

var _minValue = _interopRequireDefault(__webpack_require__(/*! ./minValue */ "./node_modules/vuelidate/lib/validators/minValue.js"));

var _maxValue = _interopRequireDefault(__webpack_require__(/*! ./maxValue */ "./node_modules/vuelidate/lib/validators/maxValue.js"));

var _integer = _interopRequireDefault(__webpack_require__(/*! ./integer */ "./node_modules/vuelidate/lib/validators/integer.js"));

var _decimal = _interopRequireDefault(__webpack_require__(/*! ./decimal */ "./node_modules/vuelidate/lib/validators/decimal.js"));

var helpers = _interopRequireWildcard(__webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js"));

exports.helpers = helpers;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/integer.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/integer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('integer', /(^[0-9]*$)|(^-[0-9]+$)/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/ipAddress.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/ipAddress.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'ipAddress'
}, function (value) {
  if (!(0, _common.req)(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  var nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
});

exports["default"] = _default;

var nibbleValid = function nibbleValid(nibble) {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  var numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/macAddress.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/macAddress.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return (0, _common.withParams)({
    type: 'macAddress'
  }, function (value) {
    if (!(0, _common.req)(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    var parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;
    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  });
};

exports["default"] = _default;

var hexValid = function hexValid(hex) {
  return hex.toLowerCase().match(/^[0-9a-f]{2}$/);
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxLength.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/maxLength.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'maxLength',
    max: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) <= length;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/maxValue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(max) {
  return (0, _common.withParams)({
    type: 'maxValue',
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +max;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minLength.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/minLength.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'minLength',
    min: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) >= length;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/minValue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min) {
  return (0, _common.withParams)({
    type: 'minValue',
    min: min
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +min;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/not.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/not.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(validator) {
  return (0, _common.withParams)({
    type: 'not'
  }, function (value, vm) {
    return !(0, _common.req)(value) || !validator.call(this, value, vm);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/numeric.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/numeric.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('numeric', /^[0-9]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/or.js":
/*!*****************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/or.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'or'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid || fn.apply(_this, args);
    }, false);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/required.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/required.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'required'
}, function (value) {
  if (typeof value === 'string') {
    return (0, _common.req)(value.trim());
  }

  return (0, _common.req)(value);
});

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredIf.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/requiredIf.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredIf',
    prop: prop
  }, function (value, parentVm) {
    return (0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredUnless.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/requiredUnless.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredUnless',
    prop: prop
  }, function (value, parentVm) {
    return !(0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/sameAs.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/sameAs.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(equalTo) {
  return (0, _common.withParams)({
    type: 'sameAs',
    eq: equalTo
  }, function (value, parentVm) {
    return value === (0, _common.ref)(equalTo, this, parentVm);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/url.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/url.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

var _default = (0, _common.regex)('url', urlRegex);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParams.js":
/*!**************************************************!*\
  !*** ./node_modules/vuelidate/lib/withParams.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var withParams = process.env.BUILD === 'web' ? (__webpack_require__(/*! ./withParamsBrowser */ "./node_modules/vuelidate/lib/withParamsBrowser.js").withParams) : (__webpack_require__(/*! ./params */ "./node_modules/vuelidate/lib/params.js").withParams);
var _default = withParams;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParamsBrowser.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/withParamsBrowser.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withParams = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

var fakeWithParams = function fakeWithParams(paramsOrClosure, maybeValidator) {
  if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
    return maybeValidator;
  }

  return paramsOrClosure(function () {});
};

var withParams = root.vuelidate ? root.vuelidate.withParams : fakeWithParams;
exports.withParams = withParams;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfVXNlcl92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxnSEFBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDc1NUO0FBQ0E7QUFDSDtBQUVuQztBQVFBLGlFQUFlO0FBQ2ZLLE1BREEsa0JBQ0E7QUFDQTtBQUNBQyxnQkFEQTtBQUVBQyxtQkFGQTtBQUdBQyx3QkFIQTtBQUlBQyxnQkFDQTtBQUFBQztBQUFBQztBQUFBLE9BREEsRUFFQTtBQUFBRDtBQUFBQztBQUFBQztBQUFBLE9BRkEsRUFHQTtBQUFBRjtBQUFBQztBQUFBLE9BSEEsRUFJQTtBQUFBRDtBQUFBQztBQUFBQztBQUFBLE9BSkEsQ0FKQTtBQVVBQyxrQkFWQTtBQVdBQyxpQkFYQTtBQVlBQyx5QkFaQTtBQWFBQyxxQkFiQTtBQWNBQyx1QkFkQTtBQWVBQyxvQkFmQTtBQWdCQUMsaUJBaEJBO0FBaUJBQztBQUNBQyxnQkFEQTtBQUVBQyxxQkFGQTtBQUdBbkIsaUJBSEE7QUFJQW9CLG9CQUpBO0FBS0FDLGVBTEE7QUFNQUMsOEJBTkE7QUFPQUMsMkJBUEE7QUFRQUMsaUNBUkE7QUFTQUM7QUFUQSxPQWpCQTtBQTRCQUM7QUFDQVIsZ0JBREE7QUFFQWxCLGlCQUZBO0FBR0FtQixxQkFI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Q0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7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QUFDQTtBQUNBLCtDQUErQztBQUMvQyw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQyw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQyw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDO0FBQ0YseUNBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsNENBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YseUNBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsZUFBZTtBQUNmLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDhDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDRDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDRDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLHNDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDRDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDhDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLGtEQUFpRDtBQUNqRDtBQUNB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QSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmLGlCQUFpQixPQUFPLHVCQUF1QixnSEFBeUMsR0FBRywwRkFBOEI7QUFDekg7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNSRjs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBa0I7O0FBRWxCLHdCQUF3QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyx3QkFBd0IsT0FBTyxrQ0FBa0MsbUlBQW1JOztBQUVwVywyREFBMkQscUJBQU0sbUJBQW1CLHFCQUFNOztBQUUxRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1VzZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcGlzL3JvbGVBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwaXMvdXNlckFwaS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbGlicy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlci52dWU/ZGU4YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Vc2VyLnZ1ZT81YTEzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1VzZXIudnVlPzcxMTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2FscGhhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvYWxwaGFOdW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9hbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9iZXR3ZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvZGVjaW1hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2VtYWlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvaXBBZGRyZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWFjQWRkcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21heExlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21heFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWluVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9ub3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9udW1lcmljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3JlcXVpcmVkSWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9yZXF1aXJlZFVubGVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3NhbWVBcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi93aXRoUGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3dpdGhQYXJhbXNCcm93c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgZGF0YS1hcHA+XG4gICAgPGFsZXJ0LXRpbWUtb3V0XG4gICAgICA6cmVkaXJlY3Q9XCJyZWRpcmVjdFNlc3Npb25GaW5pc2hlZFwiXG4gICAgICBAcmVkaXJlY3Q9XCJ1cGRhdGVUaW1lT3V0KCRldmVudClcIlxuICAgIC8+XG4gICAgPGFsZXJ0XG4gICAgICA6dGV4dD1cInRleHRBbGVydFwiXG4gICAgICA6ZXZlbnQ9XCJhbGVydEV2ZW50XCJcbiAgICAgIDpzaG93PVwic2hvd0FsZXJ0XCJcbiAgICAgIEBzaG93LWFsZXJ0PVwidXBkYXRlQWxlcnQoJGV2ZW50KVwiXG4gICAgICBjbGFzcz1cIm1iLTJcIlxuICAgIC8+XG4gICAgPHYtZGF0YS10YWJsZVxuICAgICAgdi1tb2RlbD1cInNlbGVjdGVkXCJcbiAgICAgIDpzaW5nbGUtc2VsZWN0PVwiZmFsc2VcIlxuICAgICAgOnNlYXJjaD1cIm9wdGlvbnMuc2VhcmNoXCJcbiAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXG4gICAgICA6aXRlbXM9XCJyZWNvcmRzRmlsdGVyZWRcIlxuICAgICAgOm9wdGlvbnMuc3luYz1cIm9wdGlvbnNcIlxuICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgIGl0ZW0ta2V5PVwiaWRcIlxuICAgICAgc29ydC1ieT1cImlkXCJcbiAgICAgIDpmb290ZXItcHJvcHM9XCJ7ICdpdGVtcy1wZXItcGFnZS1vcHRpb25zJzogWzE1LCAzMCwgNTAsIDEwMF0gfVwiXG4gICAgICBjbGFzcz1cImVsZXZhdGlvbi0zIHNoYWRvdyBwLTMgbXQtM1wiXG4gICAgPlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDp0b3A+XG4gICAgICAgIDx2LXRvb2xiYXIgZmxhdD5cbiAgICAgICAgICA8di10b29sYmFyLXRpdGxlPlVzdWFyaW9zPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgPHYtZGlhbG9nXG4gICAgICAgICAgICB2LW1vZGVsPVwiZGlhbG9nXCJcbiAgICAgICAgICAgIG1heC13aWR0aD1cIjgwMHB4XCJcbiAgICAgICAgICAgIHBlcnNpc3RlbnRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cInsgb24sIGF0dHJzIH1cIj5cbiAgICAgICAgICAgICAgPHYtcm93PlxuICAgICAgICAgICAgICAgIDx2LWNvbCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8IS0tIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTIgYnRuLW5vcm1hbCBuby11cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJhdHRyc1wiXG4gICAgICAgICAgICAgICAgICAgIHYtb249XCJvblwiXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwibmV3VXNlcigpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWdyZWdhclxuICAgICAgICAgICAgICAgICAgPC92LWJ0bj4gLS0+XG4gICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICA8di1jb2xcbiAgICAgICAgICAgICAgICAgIHhzPVwiNlwiXG4gICAgICAgICAgICAgICAgICBzbT1cIjZcIlxuICAgICAgICAgICAgICAgICAgbWQ9XCI2XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1ub25lIGQtbWQtYmxvY2sgZC1sZy1ibG9ja1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJ1c2NhclwiXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm9wdGlvbnMuc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICA8L3Ytcm93PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx2LWNhcmRcbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4Y2FyZCBhdXRoXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibXgtYXV0byBwdC0zIG1iLTMgdGV4dC1jZW50ZXIgYmxhY2stc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICB7eyBmb3JtVGl0bGUgfX1cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cblxuICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPCEtLSBGb3JtIC0tPlxuICAgICAgICAgICAgICAgICAgPHYtcm93PlxuICAgICAgICAgICAgICAgICAgICA8IS0tIG5hbWUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbFxuICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgc209XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICBtZD1cIjZcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGJhc2UtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tYnJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLm5hbWUuJG1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uLnN5bmM9XCIkdi5lZGl0ZWRJdGVtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBuYW1lIC0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjZcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBcGVsbGlkb3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIiR2LmVkaXRlZEl0ZW0ubGFzdF9uYW1lLiRtb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbi5zeW5jPVwiJHYuZWRpdGVkSXRlbS5sYXN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD4gLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBwb3NpdGlvbl9zaWduYXR1cmUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbFxuICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgc209XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICBtZD1cIjZcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGJhc2UtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2FyZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIiR2LmVkaXRlZEl0ZW0ucG9zaXRpb25fc2lnbmF0dXJlLiRtb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbi5zeW5jPVwiJHYuZWRpdGVkSXRlbS5wb3NpdGlvbl9zaWduYXR1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBwb3NpdGlvbl9zaWduYXR1cmUgLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBlbWFpbCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY29sXG4gICAgICAgICAgICAgICAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzbT1cIjZcIlxuICAgICAgICAgICAgICAgICAgICAgIG1kPVwiNlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb3JyZW8gZWxlY3Ryw7NuaWNvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLmVtYWlsLiRtb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbi5zeW5jPVwiJHYuZWRpdGVkSXRlbS5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGVtYWlsIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gZGVwZW5kZW5jeV9uYW1lICAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY29sXG4gICAgICAgICAgICAgICAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzbT1cIjZcIlxuICAgICAgICAgICAgICAgICAgICAgIG1kPVwiNlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXJnb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiJHYuZWRpdGVkSXRlbS5kZXBlbmRlbmN5X25hbWUuJG1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uLnN5bmM9XCIkdi5lZGl0ZWRJdGVtLmRlcGVuZGVuY3lfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGRlcGVuZGVuY3lfbmFtZSAgLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBpbm1lZGlhdGVfc3VwZXJpb3JfaWQgIC0tPlxuICAgICAgICAgICAgICAgICAgICA8di1jb2xcbiAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgIHNtPVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgbWQ9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxiYXNlLXNlbGVjdC1zZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSmVmZSBpbm1lZGlhdG8gKE9wY2lvbmFsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCIkdi5lZGl0ZWRJdGVtLmlubWVkaWF0ZV9zdXBlcmlvcl9pZC4kbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcz1cInVzZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5pbm1lZGlhdGVfc3VwZXJpb3JfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaW5tZWRpYXRlX3N1cGVyaW9yX2lkICAtLT5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIHJvbCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY29sXG4gICAgICAgICAgICAgICAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzbT1cIjZcIlxuICAgICAgICAgICAgICAgICAgICAgIG1kPVwiNlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YmFzZS1zZWxlY3Qtc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCIkdi5lZGl0ZWRJdGVtLnJvbC4kbW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwicm9sZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLnJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSByb2wgLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBzdGF0dXMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbFxuICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgc209XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgbWQ9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8di1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBdXRvcml6YW50ZT9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIiR2LmVkaXRlZEl0ZW0uc2VuZF90b19ycmhoLiRtb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1sLTZcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gc3RhdHVzIC0tPlxuXG4gICAgICAgICAgICAgICAgICA8L3Ytcm93PlxuICAgICAgICAgICAgICAgICAgPCEtLSBGb3JtIC0tPlxuICAgICAgICAgICAgICAgICAgPHYtcm93PlxuICAgICAgICAgICAgICAgICAgICA8di1jb2wgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYnRuLW5vcm1hbCBuby11cHBlcmNhc2UgbXQtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzYXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBHdWFyZGFyXG4gICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYnRuLW5vcm1hbC1jbG9zZSBuby11cHBlcmNhc2UgbXQtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsYXJcbiAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgPC92LXJvdz5cbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgPC92LWRpYWxvZz5cbiAgICAgICAgPC92LXRvb2xiYXI+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpbYGl0ZW0uYWN0aW9uc2BdPVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHYtdG9vbHRpcCB0b3A+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XCJ7IG9uLCBhdHRycyB9XCI+XG4gICAgICAgICAgICA8di1pY29uXG4gICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgIGNsYXNzPVwibXItMlwiXG4gICAgICAgICAgICAgIEBjbGljaz1cImVkaXRJdGVtKGl0ZW0pXCJcbiAgICAgICAgICAgICAgdi1iaW5kPVwiYXR0cnNcIlxuICAgICAgICAgICAgICB2LW9uPVwib25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBtZGktcGVuY2lsXG4gICAgICAgICAgICA8L3YtaWNvbj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDxzcGFuPkVkaXRhcjwvc3Bhbj5cbiAgICAgICAgPC92LXRvb2x0aXA+XG4gICAgICAgIDwhLS0gPHYtdG9vbHRpcCB0b3A+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XCJ7IG9uLCBhdHRycyB9XCI+XG4gICAgICAgICAgICA8di1pY29uXG4gICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgIGNsYXNzPVwibXItMlwiXG4gICAgICAgICAgICAgIEBjbGljaz1cImJsb2NrSXRlbShpdGVtKVwiXG4gICAgICAgICAgICAgIHYtYmluZD1cImF0dHJzXCJcbiAgICAgICAgICAgICAgdi1vbj1cIm9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgbWRpLWNhbmNlbFxuICAgICAgICAgICAgPC92LWljb24+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8c3Bhbj5EZXNhY3RpdmFyPC9zcGFuPlxuICAgICAgICA8L3YtdG9vbHRpcD4gLS0+XG4gICAgICAgIDwhLS0gPHYtaWNvbiBzbWFsbCBjbGFzcz1cIm1yLTJcIiBAY2xpY2s9XCJlZGl0SXRlbShpdGVtKVwiPiBtZGktcGVuY2lsIDwvdi1pY29uPiAtLT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90Om5vLWRhdGE+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1ub3JtYWwtc2Vjb25kYXJ5IG5vLWRlY29yYXRpb25cIlxuICAgICAgICAgIEBjbGljaz1cImluaXRpYWxpemVcIlxuICAgICAgICA+XG4gICAgICAgICAgUmVpbmljaWFyXG4gICAgICAgIDwvYT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC92LWRhdGEtdGFibGU+XG5cbiAgICA8IS0tIERpYWxvZyBibG9jayB1c2VyIC0tPlxuICAgIDx2LWRpYWxvZ1xuICAgICAgdi1tb2RlbD1cImRpYWxvZ0Jsb2NrXCJcbiAgICAgIG1heC13aWR0aD1cIjQwMHB4XCJcbiAgICA+XG4gICAgICA8di1jYXJkIGNsYXNzPVwiaC0xMDBcIj5cbiAgICAgICAgPHYtY29udGFpbmVyPlxuICAgICAgICAgIDxoMSBjbGFzcz1cImJsYWNrLXNlY29uZGFyeSB0ZXh0LWNlbnRlciBtdC0zIG1iLTNcIj5cbiAgICAgICAgICAgIERlc2FjdGl2YXIgdXN1YXJpb1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHYtcm93PlxuICAgICAgICAgICAgPHYtY29sIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYnRuLW5vcm1hbCBuby11cHBlcmNhc2UgbXQtMyBtYi0zIHByLTUgcGwtNSBteC1hdXRvXCJcbiAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZGlzYWJsZVVzZXJcIlxuICAgICAgICAgICAgICA+Q29uZmlybWFyPC92LWJ0bj5cbiAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgY29sb3I9XCJidG4tbm9ybWFsLWNsb3NlIG5vLXVwcGVyY2FzZSBtdC0zIG1iLTNcIlxuICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbG9zZUJsb2NrXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbmNlbGFyXG4gICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICA8L3YtY2FyZD5cbiAgICA8L3YtZGlhbG9nPlxuICAgIDwhLS0gRGlhbG9nIGJsb2NrIHVzZXIgLS0+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCByb2xlQXBpIGZyb20gXCIuLi9hcGlzL3JvbGVBcGlcIjtcbmltcG9ydCB1c2VyQXBpIGZyb20gXCIuLi9hcGlzL3VzZXJBcGlcIjtcbmltcG9ydCBsaWIgZnJvbSBcIi4uL2xpYnMvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHtcbiAgcmVxdWlyZWQsXG4gIG1pbkxlbmd0aCxcbiAgbWF4TGVuZ3RoLFxuICBlbWFpbCxcbiAgaGVscGVycyxcbn0gZnJvbSBcInZ1ZWxpZGF0ZS9saWIvdmFsaWRhdG9yc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlYXJjaDogXCJcIixcbiAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICBkaWFsb2dCbG9jazogZmFsc2UsXG4gICAgICBoZWFkZXJzOiBbXG4gICAgICAgIHsgdGV4dDogXCJVU1VBUklPXCIsIHZhbHVlOiBcIm5hbWVcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiUk9MXCIsIHZhbHVlOiBcInJvbFwiLCBzb3J0YWJsZTogZmFsc2UgfSxcbiAgICAgICAgeyB0ZXh0OiBcIkNPUlJFTyBFTEVDVFLDk05JQ09cIiwgdmFsdWU6IFwiZW1haWxcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiQUNDSU9ORVNcIiwgdmFsdWU6IFwiYWN0aW9uc1wiLCBzb3J0YWJsZTogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBzZWxlY3RlZDogW10sXG4gICAgICByZWNvcmRzOiBbXSxcbiAgICAgIHJlY29yZHNGaWx0ZXJlZDogW10sXG4gICAgICBlZGl0ZWRJbmRleDogLTEsXG4gICAgICB0aXRsZTogXCJVc3Vhcmlvc1wiLFxuICAgICAgc2VsZWN0ZWRUYWI6IDAsXG4gICAgICBvcHRpb25zOiB7fSxcbiAgICAgIGVkaXRlZEl0ZW06IHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgbGFzdF9uYW1lOiBcIlwiLFxuICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgIHJvbDogXCJcIixcbiAgICAgICAgcG9zaXRpb25fc2lnbmF0dXJlOiBcIlwiLFxuICAgICAgICBkZXBlbmRlbmN5X25hbWU6IFwiXCIsXG4gICAgICAgIGlubWVkaWF0ZV9zdXBlcmlvcl9pZDogXCJcIixcbiAgICAgICAgc2VuZF90b19ycmhoOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0SXRlbToge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgbGFzdF9uYW1lOiBcIlwiLFxuICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgcm9sOiBcIlwiLFxuICAgICAgICBwb3NpdGlvbl9zaWduYXR1cmU6IFwiXCIsXG4gICAgICAgIGRlcGVuZGVuY3lfbmFtZTogXCJcIixcbiAgICAgICAgaW5tZWRpYXRlX3N1cGVyaW9yX2lkOiBcIlwiLFxuICAgICAgICBzZW5kX3RvX3JyaGg6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHRleHRBbGVydDogXCJcIixcbiAgICAgIGFsZXJ0RXZlbnQ6IFwic3VjY2Vzc1wiLFxuICAgICAgcm9sZXM6IFtdLFxuICAgICAgZGVwZW5kZW5jaWVzOiBbXSxcbiAgICAgIHVzZXJzOiBbXSxcbiAgICAgIHJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkOiBmYWxzZSxcbiAgICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgICB0eXBlUGFzc3dvcmQ6IFwicGFzc3dvcmRcIixcbiAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgb3B0aW9uczoge30sXG4gICAgfTtcbiAgfSxcblxuICAvLyBWYWxpZGF0aW9uc1xuICB2YWxpZGF0aW9uczoge1xuICAgIGVkaXRlZEl0ZW06IHtcbiAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIC8vIHJlcXVpcmVkLFxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCg4KSxcbiAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgoMTMpLFxuICAgICAgICBpc1ZhbGlkUGFzc3dvcmQ6IGhlbHBlcnMucmVnZXgoXG4gICAgICAgICAgXCJpc1ZhbGlkUGFzc3dvcmRcIixcbiAgICAgICAgICAvXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlthLXpBLVpdKS57OCwxM30kL1xuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIGVtYWlsOiB7XG4gICAgICAgIHJlcXVpcmVkLFxuICAgICAgICBlbWFpbCxcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHJlcXVpcmVkLFxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcbiAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgoNTAwKSxcbiAgICAgIH0sXG4gICAgICBsYXN0X25hbWU6IHtcbiAgICAgICAgLy8gcmVxdWlyZWQsXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCg1MDApLFxuICAgICAgfSxcbiAgICAgIHBvc2l0aW9uX3NpZ25hdHVyZToge1xuICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXG4gICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoKDUwMCksXG4gICAgICB9LFxuICAgICAgcm9sOiB7XG4gICAgICAgIHJlcXVpcmVkLFxuICAgICAgfSxcbiAgICAgIGRlcGVuZGVuY3lfbmFtZToge1xuICAgICAgICByZXF1aXJlZCxcbiAgICAgIH0sXG4gICAgICBpbm1lZGlhdGVfc3VwZXJpb3JfaWQ6IHtcbiAgICAgICAgLy8gcmVxdWlyZWQsXG4gICAgICB9LFxuICAgICAgc2VuZF90b19ycmhoOiB7XG4gICAgICAgIC8vIHJlcXVpcmVkLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIC8vIFZhbGlkYXRpb25zXG4gIGNvbXB1dGVkOiB7XG4gICAgZm9ybVRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSW5kZXggPT09IC0xID8gXCJOdWV2byByZWdpc3Ryb1wiIDogXCJFZGl0YXIgcmVnaXN0cm9cIjtcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgb3B0aW9uczoge1xuICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5nZXREYXRhRnJvbUFwaSgpO1xuICAgICAgfSxcbiAgICAgIGRlZXA6IGZhbHNlLFxuICAgICAgZGlydHk6IGZhbHNlLFxuICAgIH0sXG4gICAgZGlhbG9nKHZhbCkge1xuICAgICAgdmFsIHx8IHRoaXMuY2xvc2UoKTtcbiAgICB9LFxuICAgIGRpYWxvZ0Jsb2NrKHZhbCkge1xuICAgICAgdmFsIHx8IHRoaXMuY2xvc2VCbG9jaygpO1xuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIHRoaXMuJHYuJHJlc2V0KCk7XG4gICAgICB0aGlzLnJlY29yZHMgPSBbXTtcbiAgICAgIHRoaXMucmVjb3Jkc0ZpbHRlcmVkID0gW107XG5cbiAgICAgIGxldCByZXF1ZXN0cyA9IFtcbiAgICAgICAgdGhpcy5nZXREYXRhRnJvbUFwaSgpLFxuICAgICAgICByb2xlQXBpLmdldCgpLFxuICAgICAgICB1c2VyQXBpLmdldChgL3VzZXJzTGlzdGApLFxuICAgICAgXTtcblxuICAgICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIFwiTm8gZnVlIHBvc2libGUgb2J0ZW5lciBsb3MgcmVnaXN0cm9zLlwiLCBcImZhaWxcIik7XG4gICAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBsaWIudmVyaWZ5U2Vzc2lvbkZpbmlzaGVkKFxuICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICA0MTlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzcG9uc2VzKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDJmNDM2YzFhXzBgLHJlc3BvbnNlcykpO1xuICAgICAgICB0aGlzLnJvbGVzID0gcmVzcG9uc2VzWzFdLmRhdGEucm9sZXM7XG4gICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZXNbMl0uZGF0YS51c2VycztcbiAgICAgICAgLy8gdGhpcy5kZXBlbmRlbmNpZXMgPSByZXNwb25zZXNbMl0uZGF0YS5yZWNvcmRzO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBlZGl0SXRlbShpdGVtKSB7XG4gICAgICB0aGlzLmVkaXRlZEluZGV4ID0gdGhpcy5yZWNvcmRzRmlsdGVyZWQuaW5kZXhPZihpdGVtKTtcbiAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pO1xuICAgICAgdGhpcy5kaWFsb2cgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xuICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTE7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgYmxvY2tJdGVtKGl0ZW0pIHtcbiAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSB0aGlzLnJlY29yZHNGaWx0ZXJlZC5pbmRleE9mKGl0ZW0pO1xuICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSk7XG4gICAgICB0aGlzLmRpYWxvZ0Jsb2NrID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgY2xvc2VCbG9jaygpIHtcbiAgICAgIHRoaXMuZGlhbG9nQmxvY2sgPSBmYWxzZTtcblxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKTtcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGFzeW5jIHNhdmUoKSB7XG4gICAgICB0aGlzLiR2LiR0b3VjaCgpO1xuICAgICAgaWYgKHRoaXMuJHYuJGludmFsaWQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBcIkNhbXBvcyBvYmxpZ2F0b3Jpb3MuXCIsIFwiZmFpbFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lZGl0ZWRJbmRleCA+IC0xKSB7XG4gICAgICAgIGNvbnN0IGVkaXRlZCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWRbdGhpcy5lZGl0ZWRJbmRleF0sXG4gICAgICAgICAgdGhpcy5lZGl0ZWRJdGVtXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdXNlckFwaVxuICAgICAgICAgIC5wdXQoYC8ke2VkaXRlZC5pZH1gLCBlZGl0ZWQpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcbiAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgXCJObyBmdWUgcG9zaWJsZSBhY3R1YWxpemFyIGVsIHJlZ2lzdHJvLlwiLFxuICAgICAgICAgICAgICBcImZhaWxcIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFNlc3Npb25GaW5pc2hlZCA9IGxpYi52ZXJpZnlTZXNzaW9uRmluaXNoZWQoXG4gICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgNDE5XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gbGliLnZlcmlmeVNlc3Npb25GaW5pc2hlZChcbiAgICAgICAgICAgIHJlcy5zdGF0dXMsXG4gICAgICAgICAgICAyMDBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMudXBkYXRlQWxlcnQoXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgXCJSZWdpc3RybyBhY3R1YWxpemFkbyBjb3JyZWN0YW1lbnRlLlwiLFxuICAgICAgICAgICAgXCJzdWNjZXNzXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL0NyZWF0aW5nIHVzZXJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdXNlckFwaS5wb3N0KG51bGwsIHRoaXMuZWRpdGVkSXRlbSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBcIk5vIGZ1ZSBwb3NpYmxlIGNyZWFyIGVsIHJlZ2lzdHJvLlwiLCBcImZhaWxcIik7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBsaWIudmVyaWZ5U2Vzc2lvbkZpbmlzaGVkKFxuICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgNDE5XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBsaWIudmVyaWZ5U2Vzc2lvbkZpbmlzaGVkKFxuICAgICAgICAgICAgcmVzLnN0YXR1cyxcbiAgICAgICAgICAgIDIwMFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBcIlJlZ2lzdHJvIGNyZWFkbyBjb3JyZWN0YW1lbnRlLlwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICByZXR1cm47XG4gICAgfSxcblxuICAgIGdldERhdGFGcm9tQXBpKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVjb3JkcyA9IFtdO1xuICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQgPSBbXTtcblxuICAgICAgLy9kZWJvdW5jZVxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2UpO1xuICAgICAgdGhpcy5kZWJvdW5jZSA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHVzZXJBcGlcbiAgICAgICAgICAuZ2V0KG51bGwsIHtcbiAgICAgICAgICAgIHBhcmFtczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcbiAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgXCJObyBmdWUgcG9zaWJsZSBvYnRlbmVyIGxvcyByZWdpc3Ryb3MuXCIsXG4gICAgICAgICAgICAgIFwiZmFpbFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVjb3JkcyA9IGRhdGEudXNlcnM7XG4gICAgICAgIHRoaXMucmVjb3Jkc0ZpbHRlcmVkID0gZGF0YS51c2VycztcbiAgICAgICAgdGhpcy50b3RhbCA9IGRhdGEudG90YWw7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSwgNTAwKTtcbiAgICB9LFxuXG4gICAgYXN5bmMgZGlzYWJsZVVzZXIoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVzZXJBcGlcbiAgICAgICAgLnBvc3QoYC9kaXNhYmxlVXNlcmAsIHtcbiAgICAgICAgICBpZDogdGhpcy5lZGl0ZWRJdGVtLmlkLFxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBcIk5vIGZ1ZSBwb3NpYmxlIGRlc2FjdGl2YXIgZWwgdXN1YXJpby5cIixcbiAgICAgICAgICAgIFwiZmFpbFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmNsb3NlQmxvY2soKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIHJlc3BvbnNlLmRhdGEubWVzc2FnZSwgXCJzdWNjZXNzXCIpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5jbG9zZUJsb2NrKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG5ld1VzZXIoKSB7XG4gICAgICB0aGlzLmRpYWxvZyA9IHRydWU7XG4gICAgICB0aGlzLiR2LiRyZXNldCgpO1xuICAgICAgdGhpcy5lZGl0ZWRJdGVtLnJvbCA9IHRoaXMucm9sZXNbMF0ubmFtZTtcbiAgICB9LFxuXG4gICAgdXBkYXRlQWxlcnQoc2hvdyA9IGZhbHNlLCB0ZXh0ID0gXCJBbGVydGFcIiwgZXZlbnQgPSBcInN1Y2Nlc3NcIikge1xuICAgICAgdGhpcy50ZXh0QWxlcnQgPSB0ZXh0O1xuICAgICAgdGhpcy5hbGVydEV2ZW50ID0gZXZlbnQ7XG4gICAgICB0aGlzLnNob3dBbGVydCA9IHNob3c7XG4gICAgfSxcblxuICAgIHVwZGF0ZVRpbWVPdXQoZXZlbnQpIHtcbiAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBldmVudDtcbiAgICB9LFxuXG4gICAgc2hvd1Bhc3N3b3JkKGUpIHtcbiAgICAgIHRoaXMudHlwZVBhc3N3b3JkID0gZS5zaG93O1xuICAgIH0sXG4gIH0sXG59O1xuLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO3ZhciBfMHg0M2NjYmY9XzB4MjE1MjsoZnVuY3Rpb24oXzB4MjVjOThmLF8weDEwZWQxZCl7dmFyIF8weDUyMTQ0ZT1fMHgyMTUyLF8weDVhZmFiZD1fMHgyNWM5OGYoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDQ0NTdmMj0tcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTdhKSkvMHgxKigtcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTJlKSkvMHgyKSstcGFyc2VJbnQoXzB4NTIxNDRlKDB4ZDUpKS8weDMqKHBhcnNlSW50KF8weDUyMTQ0ZSgweGY2KSkvMHg0KStwYXJzZUludChfMHg1MjE0NGUoMHgxNzApKS8weDUqKC1wYXJzZUludChfMHg1MjE0NGUoMHgxM2YpKS8weDYpKy1wYXJzZUludChfMHg1MjE0NGUoMHgxNjUpKS8weDcqKC1wYXJzZUludChfMHg1MjE0NGUoMHgxN2MpKS8weDgpKy1wYXJzZUludChfMHg1MjE0NGUoMHgxNjEpKS8weDkqKHBhcnNlSW50KF8weDUyMTQ0ZSgweDExYSkpLzB4YSkrLXBhcnNlSW50KF8weDUyMTQ0ZSgweDE5ZikpLzB4YiooLXBhcnNlSW50KF8weDUyMTQ0ZSgweDE0ZikpLzB4YykrcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTBlKSkvMHhkKihwYXJzZUludChfMHg1MjE0NGUoMHgxNmUpKS8weGUpO2lmKF8weDQ0NTdmMj09PV8weDEwZWQxZClicmVhaztlbHNlIF8weDVhZmFiZFsncHVzaCddKF8weDVhZmFiZFsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4MmY5NjJiKXtfMHg1YWZhYmRbJ3B1c2gnXShfMHg1YWZhYmRbJ3NoaWZ0J10oKSk7fX19KF8weDU3NTAsMHg0NzA3YikpO3ZhciB1ZT1PYmplY3RbJ2NyZWF0ZSddLHRlPU9iamVjdFsnZGVmaW5lUHJvcGVydHknXSxoZT1PYmplY3RbXzB4NDNjY2JmKDB4MTJmKV0sbGU9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eU5hbWVzJ10sZmU9T2JqZWN0W18weDQzY2NiZigweGRjKV0sX2U9T2JqZWN0W18weDQzY2NiZigweGY3KV1bXzB4NDNjY2JmKDB4MWEzKV0scGU9KF8weDMyZGQzZSxfMHgxYTEwMjQsXzB4NDk4Njk0LF8weDQ0YTNiMyk9Pnt2YXIgXzB4NGYyZmIzPV8weDQzY2NiZjtpZihfMHgxYTEwMjQmJnR5cGVvZiBfMHgxYTEwMjQ9PV8weDRmMmZiMygweDE5NCl8fHR5cGVvZiBfMHgxYTEwMjQ9PV8weDRmMmZiMygweDE5OCkpe2ZvcihsZXQgXzB4MzMzNzBhIG9mIGxlKF8weDFhMTAyNCkpIV9lW18weDRmMmZiMygweDE4OCldKF8weDMyZGQzZSxfMHgzMzM3MGEpJiZfMHgzMzM3MGEhPT1fMHg0OTg2OTQmJnRlKF8weDMyZGQzZSxfMHgzMzM3MGEseydnZXQnOigpPT5fMHgxYTEwMjRbXzB4MzMzNzBhXSwnZW51bWVyYWJsZSc6IShfMHg0NGEzYjM9aGUoXzB4MWExMDI0LF8weDMzMzcwYSkpfHxfMHg0NGEzYjNbXzB4NGYyZmIzKDB4MTI2KV19KTt9cmV0dXJuIF8weDMyZGQzZTt9LG5lPShfMHg1MDk0ZTksXzB4MjcxMTI4LF8weDM2NWNlZSk9PihfMHgzNjVjZWU9XzB4NTA5NGU5IT1udWxsP3VlKGZlKF8weDUwOTRlOSkpOnt9LHBlKF8weDI3MTEyOHx8IV8weDUwOTRlOXx8IV8weDUwOTRlOVtfMHg0M2NjYmYoMHgxMjApXT90ZShfMHgzNjVjZWUsXzB4NDNjY2JmKDB4Y2EpLHsndmFsdWUnOl8weDUwOTRlOSwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDM2NWNlZSxfMHg1MDk0ZTkpKSxRPWNsYXNze2NvbnN0cnVjdG9yKF8weDQ5ZDJmMCxfMHgzNDYyYmYsXzB4M2JmODdlLF8weDNjNWJhMyl7dmFyIF8weGY3NTEwZD1fMHg0M2NjYmY7dGhpc1tfMHhmNzUxMGQoMHhmNCldPV8weDQ5ZDJmMCx0aGlzW18weGY3NTEwZCgweDE4YildPV8weDM0NjJiZix0aGlzW18weGY3NTEwZCgweDE0MSldPV8weDNiZjg3ZSx0aGlzW18weGY3NTEwZCgweGU0KV09XzB4M2M1YmEzLHRoaXNbJ19hbGxvd2VkVG9TZW5kJ109ITB4MCx0aGlzW18weGY3NTEwZCgweDE3NyldPSEweDAsdGhpc1tfMHhmNzUxMGQoMHgxMmQpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzW18weGY3NTEwZCgweGQ0KV09ISF0aGlzWydnbG9iYWwnXVtfMHhmNzUxMGQoMHhjNCldLHRoaXNbXzB4Zjc1MTBkKDB4MTk5KV09bnVsbCx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPTB4MCx0aGlzW18weGY3NTEwZCgweDE0YyldPTB4MTQsdGhpc1snX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnXT1fMHhmNzUxMGQoMHgxOTIpLHRoaXNbXzB4Zjc1MTBkKDB4MTM3KV09KHRoaXNbXzB4Zjc1MTBkKDB4ZDQpXT9fMHhmNzUxMGQoMHgxNWUpOl8weGY3NTEwZCgweGZiKSkrdGhpc1tfMHhmNzUxMGQoMHgxODEpXTt9YXN5bmNbXzB4NDNjY2JmKDB4MTEwKV0oKXt2YXIgXzB4MmI1MjA1PV8weDQzY2NiZjtpZih0aGlzW18weDJiNTIwNSgweDE5OSldKXJldHVybiB0aGlzW18weDJiNTIwNSgweDE5OSldO2xldCBfMHgzODlhNjg7aWYodGhpc1tfMHgyYjUyMDUoMHhkNCldKV8weDM4OWE2OD10aGlzW18weDJiNTIwNSgweGY0KV1bJ1dlYlNvY2tldCddO2Vsc2V7aWYodGhpc1tfMHgyYjUyMDUoMHhmNCldW18weDJiNTIwNSgweDFhZSldPy5bXzB4MmI1MjA1KDB4ZjkpXSlfMHgzODlhNjg9dGhpc1tfMHgyYjUyMDUoMHhmNCldW18weDJiNTIwNSgweDFhZSldPy5bXzB4MmI1MjA1KDB4ZjkpXTtlbHNlIHRyeXtsZXQgXzB4ODA0NDcyPWF3YWl0IGltcG9ydChfMHgyYjUyMDUoMHgxMGYpKTtfMHgzODlhNjg9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KF8weDJiNTIwNSgweDE0NikpKVtfMHgyYjUyMDUoMHgxNjgpXShfMHg4MDQ0NzJbXzB4MmI1MjA1KDB4MTdmKV0odGhpc1snbm9kZU1vZHVsZXMnXSxfMHgyYjUyMDUoMHgxM2MpKSlbXzB4MmI1MjA1KDB4MTIzKV0oKSkpW18weDJiNTIwNSgweGNhKV07fWNhdGNoe3RyeXtfMHgzODlhNjg9cmVxdWlyZShyZXF1aXJlKF8weDJiNTIwNSgweDEwZikpW18weDJiNTIwNSgweDE3ZildKHRoaXNbXzB4MmI1MjA1KDB4ZTQpXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHgyYjUyMDUoMHgxNzkpKTt9fX1yZXR1cm4gdGhpc1tfMHgyYjUyMDUoMHgxOTkpXT1fMHgzODlhNjgsXzB4Mzg5YTY4O31bJ19jb25uZWN0VG9Ib3N0Tm93J10oKXt2YXIgXzB4NThmYjI2PV8weDQzY2NiZjt0aGlzW18weDU4ZmIyNigweDE1MildfHx0aGlzW18weDU4ZmIyNigweDEyZCldfHx0aGlzW18weDU4ZmIyNigweDE3ZCldPj10aGlzW18weDU4ZmIyNigweDE0YyldfHwodGhpc1tfMHg1OGZiMjYoMHgxNzcpXT0hMHgxLHRoaXNbXzB4NThmYjI2KDB4MTUyKV09ITB4MCx0aGlzW18weDU4ZmIyNigweDE3ZCldKyssdGhpc1snX3dzJ109bmV3IFByb21pc2UoKF8weDFmZjEyOCxfMHg1MTUwN2YpPT57dmFyIF8weDFiYTg4ZD1fMHg1OGZiMjY7dGhpc1tfMHgxYmE4OGQoMHgxMTApXSgpW18weDFiYTg4ZCgweDEyYSldKF8weDFkYjg1Mz0+e3ZhciBfMHg1MmI1MTE9XzB4MWJhODhkO2xldCBfMHgzMTAyMDY9bmV3IF8weDFkYjg1MyhfMHg1MmI1MTEoMHgxNmIpK3RoaXNbJ2hvc3QnXSsnOicrdGhpc1tfMHg1MmI1MTEoMHgxNDEpXSk7XzB4MzEwMjA2W18weDUyYjUxMSgweDE3MyldPSgpPT57dmFyIF8weDU4NzI5MT1fMHg1MmI1MTE7dGhpc1tfMHg1ODcyOTEoMHgxMWQpXT0hMHgxLHRoaXNbXzB4NTg3MjkxKDB4ZTYpXShfMHgzMTAyMDYpLHRoaXNbXzB4NTg3MjkxKDB4MTAzKV0oKSxfMHg1MTUwN2YobmV3IEVycm9yKCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJykpO30sXzB4MzEwMjA2W18weDUyYjUxMSgweGUyKV09KCk9Pnt2YXIgXzB4NTc5NWY2PV8weDUyYjUxMTt0aGlzWydfaW5Ccm93c2VyJ118fF8weDMxMDIwNltfMHg1Nzk1ZjYoMHgxOWMpXSYmXzB4MzEwMjA2Wydfc29ja2V0J11bXzB4NTc5NWY2KDB4YzMpXSYmXzB4MzEwMjA2W18weDU3OTVmNigweDE5YyldW18weDU3OTVmNigweGMzKV0oKSxfMHgxZmYxMjgoXzB4MzEwMjA2KTt9LF8weDMxMDIwNltfMHg1MmI1MTEoMHgxOWQpXT0oKT0+e3ZhciBfMHg1NDkwZTU9XzB4NTJiNTExO3RoaXNbXzB4NTQ5MGU1KDB4MTc3KV09ITB4MCx0aGlzW18weDU0OTBlNSgweGU2KV0oXzB4MzEwMjA2KSx0aGlzW18weDU0OTBlNSgweDEwMyldKCk7fSxfMHgzMTAyMDZbXzB4NTJiNTExKDB4MTI0KV09XzB4MjFlMTk2PT57dmFyIF8weDM4YmVlMz1fMHg1MmI1MTE7dHJ5e18weDIxZTE5NiYmXzB4MjFlMTk2W18weDM4YmVlMygweDE1ZCldJiZ0aGlzW18weDM4YmVlMygweGQ0KV0mJkpTT05bXzB4MzhiZWUzKDB4ZWEpXShfMHgyMWUxOTZbXzB4MzhiZWUzKDB4MTVkKV0pW18weDM4YmVlMygweDExMyldPT09J3JlbG9hZCcmJnRoaXNbXzB4MzhiZWUzKDB4ZjQpXVtfMHgzOGJlZTMoMHhlZildW18weDM4YmVlMygweDE0MyldKCk7fWNhdGNoe319O30pW18weDFiYTg4ZCgweDEyYSldKF8weDI3MzU2MT0+KHRoaXNbXzB4MWJhODhkKDB4MTJkKV09ITB4MCx0aGlzW18weDFiYTg4ZCgweDE1MildPSEweDEsdGhpc1tfMHgxYmE4OGQoMHgxNzcpXT0hMHgxLHRoaXNbXzB4MWJhODhkKDB4MTFkKV09ITB4MCx0aGlzW18weDFiYTg4ZCgweDE3ZCldPTB4MCxfMHgyNzM1NjEpKVsnY2F0Y2gnXShfMHgxMWQ1YWQ9Pih0aGlzWydfY29ubmVjdGVkJ109ITB4MSx0aGlzW18weDFiYTg4ZCgweDE1MildPSEweDEsY29uc29sZVsnd2FybiddKF8weDFiYTg4ZCgweDExYykrdGhpc1tfMHgxYmE4OGQoMHgxODEpXSksXzB4NTE1MDdmKG5ldyBFcnJvcihfMHgxYmE4OGQoMHgxOGYpKyhfMHgxMWQ1YWQmJl8weDExZDVhZFsnbWVzc2FnZSddKSkpKSk7fSkpO31bJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4NTlmZDFlKXt2YXIgXzB4NDY4ZmI9XzB4NDNjY2JmO3RoaXNbXzB4NDY4ZmIoMHgxMmQpXT0hMHgxLHRoaXNbXzB4NDY4ZmIoMHgxNTIpXT0hMHgxO3RyeXtfMHg1OWZkMWVbJ29uY2xvc2UnXT1udWxsLF8weDU5ZmQxZVtfMHg0NjhmYigweDE3MyldPW51bGwsXzB4NTlmZDFlW18weDQ2OGZiKDB4ZTIpXT1udWxsO31jYXRjaHt9dHJ5e18weDU5ZmQxZVtfMHg0NjhmYigweDE4NildPDB4MiYmXzB4NTlmZDFlW18weDQ2OGZiKDB4MTVjKV0oKTt9Y2F0Y2h7fX1bXzB4NDNjY2JmKDB4MTAzKV0oKXt2YXIgXzB4MmM2ZDRmPV8weDQzY2NiZjtjbGVhclRpbWVvdXQodGhpc1tfMHgyYzZkNGYoMHgxNmYpXSksISh0aGlzW18weDJjNmQ0ZigweDE3ZCldPj10aGlzW18weDJjNmQ0ZigweDE0YyldKSYmKHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J109c2V0VGltZW91dCgoKT0+e3ZhciBfMHgxZmZiZjk9XzB4MmM2ZDRmO3RoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1tfMHgxZmZiZjkoMHgxNTIpXXx8KHRoaXNbXzB4MWZmYmY5KDB4ZDMpXSgpLHRoaXNbJ193cyddPy5bJ2NhdGNoJ10oKCk9PnRoaXNbXzB4MWZmYmY5KDB4MTAzKV0oKSkpO30sMHgxZjQpLHRoaXNbXzB4MmM2ZDRmKDB4MTZmKV1bJ3VucmVmJ10mJnRoaXNbXzB4MmM2ZDRmKDB4MTZmKV1bXzB4MmM2ZDRmKDB4YzMpXSgpKTt9YXN5bmNbXzB4NDNjY2JmKDB4ZjgpXShfMHgyMzZkMmMpe3ZhciBfMHgxYjI0OTc9XzB4NDNjY2JmO3RyeXtpZighdGhpc1tfMHgxYjI0OTcoMHgxMWQpXSlyZXR1cm47dGhpc1tfMHgxYjI0OTcoMHgxNzcpXSYmdGhpc1tfMHgxYjI0OTcoMHhkMyldKCksKGF3YWl0IHRoaXNbXzB4MWIyNDk3KDB4MTE3KV0pW18weDFiMjQ5NygweGY4KV0oSlNPTltfMHgxYjI0OTcoMHgxM2QpXShfMHgyMzZkMmMpKTt9Y2F0Y2goXzB4M2FkOTUzKXtjb25zb2xlW18weDFiMjQ5NygweDE5NildKHRoaXNbXzB4MWIyNDk3KDB4MTM3KV0rJzpcXFxceDIwJysoXzB4M2FkOTUzJiZfMHgzYWQ5NTNbXzB4MWIyNDk3KDB4MTliKV0pKSx0aGlzW18weDFiMjQ5NygweDExZCldPSEweDEsdGhpc1tfMHgxYjI0OTcoMHgxMDMpXSgpO319fTtmdW5jdGlvbiBfMHgyMTUyKF8weDRkYjQzMCxfMHgxMWE2YTgpe3ZhciBfMHg1NzUwNTQ9XzB4NTc1MCgpO3JldHVybiBfMHgyMTUyPWZ1bmN0aW9uKF8weDIxNTI5NyxfMHhiNDVmZWYpe18weDIxNTI5Nz1fMHgyMTUyOTctMHhjMzt2YXIgXzB4NDUyMDI0PV8weDU3NTA1NFtfMHgyMTUyOTddO3JldHVybiBfMHg0NTIwMjQ7fSxfMHgyMTUyKF8weDRkYjQzMCxfMHgxMWE2YTgpO31mdW5jdGlvbiBWKF8weGM3NjBiNixfMHgzODBhNDYsXzB4NTA4NzE2LF8weDVlNmI5YyxfMHg1ZTc2ZDUpe3ZhciBfMHgzOTc3ZjE9XzB4NDNjY2JmO2xldCBfMHgxZDlkODM9XzB4NTA4NzE2WydzcGxpdCddKCcsJylbXzB4Mzk3N2YxKDB4Y2QpXShfMHgzNjQ1YWI9Pnt2YXIgXzB4YzEyNzQzPV8weDM5NzdmMTt0cnl7XzB4Yzc2MGI2W18weGMxMjc0MygweGRkKV18fCgoXzB4NWU3NmQ1PT09J25leHQuanMnfHxfMHg1ZTc2ZDU9PT0ncmVtaXgnfHxfMHg1ZTc2ZDU9PT1fMHhjMTI3NDMoMHhkOSkpJiYoXzB4NWU3NmQ1Kz1fMHhjNzYwYjZbXzB4YzEyNzQzKDB4MWFlKV0/LlsndmVyc2lvbnMnXT8uW18weGMxMjc0MygweDE2OSldP18weGMxMjc0MygweDExOCk6XzB4YzEyNzQzKDB4YzgpKSxfMHhjNzYwYjZbXzB4YzEyNzQzKDB4ZGQpXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4NWU3NmQ1fSk7bGV0IF8weDFjMTJiZj1uZXcgUShfMHhjNzYwYjYsXzB4MzgwYTQ2LF8weDM2NDVhYixfMHg1ZTZiOWMpO3JldHVybiBfMHgxYzEyYmZbXzB4YzEyNzQzKDB4ZjgpXVtfMHhjMTI3NDMoMHgxYWYpXShfMHgxYzEyYmYpO31jYXRjaChfMHhhMWE0Y2Upe3JldHVybiBjb25zb2xlW18weGMxMjc0MygweDE5NildKF8weGMxMjc0MygweDEyNSksXzB4YTFhNGNlJiZfMHhhMWE0Y2VbXzB4YzEyNzQzKDB4MTliKV0pLCgpPT57fTt9fSk7cmV0dXJuIF8weDUzOGFjNj0+XzB4MWQ5ZDgzW18weDM5NzdmMSgweDFhOSldKF8weDIxODQ4OD0+XzB4MjE4NDg4KF8weDUzOGFjNikpO31mdW5jdGlvbiBIKF8weDMyYWU4NSl7dmFyIF8weDExYTNiNz1fMHg0M2NjYmY7bGV0IF8weDFmM2I2ND1mdW5jdGlvbihfMHgxNDlkYTEsXzB4MWNhYzRiKXtyZXR1cm4gXzB4MWNhYzRiLV8weDE0OWRhMTt9LF8weDIxYWFjODtpZihfMHgzMmFlODVbXzB4MTFhM2I3KDB4ZWQpXSlfMHgyMWFhYzg9ZnVuY3Rpb24oKXt2YXIgXzB4NmU0NDIyPV8weDExYTNiNztyZXR1cm4gXzB4MzJhZTg1W18weDZlNDQyMigweGVkKV1bJ25vdyddKCk7fTtlbHNle2lmKF8weDMyYWU4NVsncHJvY2VzcyddJiZfMHgzMmFlODVbXzB4MTFhM2I3KDB4MWFlKV1bJ2hydGltZSddKV8weDIxYWFjOD1mdW5jdGlvbigpe3ZhciBfMHg0ZjcyNDA9XzB4MTFhM2I3O3JldHVybiBfMHgzMmFlODVbXzB4NGY3MjQwKDB4MWFlKV1bXzB4NGY3MjQwKDB4MWIyKV0oKTt9LF8weDFmM2I2ND1mdW5jdGlvbihfMHg2M2NkNDEsXzB4OTNlYTg2KXtyZXR1cm4gMHgzZTgqKF8weDkzZWE4NlsweDBdLV8weDYzY2Q0MVsweDBdKSsoXzB4OTNlYTg2WzB4MV0tXzB4NjNjZDQxWzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDI4ZDJhZH09cmVxdWlyZShfMHgxMWEzYjcoMHhkNikpO18weDIxYWFjOD1mdW5jdGlvbigpe3ZhciBfMHg0YWE2NWI9XzB4MTFhM2I3O3JldHVybiBfMHgyOGQyYWRbXzB4NGFhNjViKDB4MTU2KV0oKTt9O31jYXRjaHtfMHgyMWFhYzg9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHgxZjNiNjQsJ3RpbWVTdGFtcCc6XzB4MjFhYWM4LCdub3cnOigpPT5EYXRlW18weDExYTNiNygweDE1NildKCl9O31mdW5jdGlvbiBYKF8weDQ3MGZkZSxfMHgxMDY1NDAsXzB4NGI3NDYzKXt2YXIgXzB4MjNlMmJkPV8weDQzY2NiZjtpZihfMHg0NzBmZGVbXzB4MjNlMmJkKDB4MTFlKV0hPT12b2lkIDB4MClyZXR1cm4gXzB4NDcwZmRlW18weDIzZTJiZCgweDExZSldO2xldCBfMHgxNDc4ZmI9XzB4NDcwZmRlW18weDIzZTJiZCgweDFhZSldPy5bXzB4MjNlMmJkKDB4MTBjKV0/Llsnbm9kZSddO3JldHVybiBfMHgxNDc4ZmImJl8weDRiNzQ2Mz09PV8weDIzZTJiZCgweGRiKT9fMHg0NzBmZGVbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddPSEweDE6XzB4NDcwZmRlW18weDIzZTJiZCgweDExZSldPV8weDE0NzhmYnx8IV8weDEwNjU0MHx8XzB4NDcwZmRlW18weDIzZTJiZCgweGVmKV0/LltfMHgyM2UyYmQoMHgxMmMpXSYmXzB4MTA2NTQwW18weDIzZTJiZCgweDFhMCldKF8weDQ3MGZkZVsnbG9jYXRpb24nXVsnaG9zdG5hbWUnXSksXzB4NDcwZmRlW18weDIzZTJiZCgweDExZSldO30oKF8weDE0YThjYyxfMHgzNDliNmMsXzB4M2E5ZDRlLF8weDRiYmFlMixfMHgxNmYxNmMsXzB4NWRlYTYwLF8weDNlN2ZhYSxfMHgzOGNiZTQsXzB4NTRhODcwKT0+e3ZhciBfMHg1MTJhMzc9XzB4NDNjY2JmO2lmKF8weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXSlyZXR1cm4gXzB4MTRhOGNjW18weDUxMmEzNygweDEwMSldO2lmKCFYKF8weDE0YThjYyxfMHgzOGNiZTQsXzB4MTZmMTZjKSlyZXR1cm4gXzB4MTRhOGNjW18weDUxMmEzNygweDEwMSldPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHgxNGE4Y2NbJ19jb25zb2xlX25pbmphJ107bGV0IF8weDE2YTIyMj17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHgxYjA3MTc9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfSxfMHgzZmYyMjI9SChfMHgxNGE4Y2MpLF8weDNmNWQyZD1fMHgzZmYyMjJbXzB4NTEyYTM3KDB4MTUxKV0sXzB4Mzk5Njc4PV8weDNmZjIyMltfMHg1MTJhMzcoMHgxMDcpXSxfMHg0YjlhNjE9XzB4M2ZmMjIyW18weDUxMmEzNygweDE1NildLF8weDU4NmVhND17J2hpdHMnOnt9LCd0cyc6e319LF8weDU3Y2Y4Nj1fMHgyZjk4OTk9PntfMHg1ODZlYTRbJ3RzJ11bXzB4MmY5ODk5XT1fMHgzOTk2NzgoKTt9LF8weDUwOWFhYz0oXzB4ZjgyZDNhLF8weDI3NzQ0Nik9Pnt2YXIgXzB4MzRiMmE4PV8weDUxMmEzNztsZXQgXzB4MzJhOGIzPV8weDU4NmVhNFsndHMnXVtfMHgyNzc0NDZdO2lmKGRlbGV0ZSBfMHg1ODZlYTRbJ3RzJ11bXzB4Mjc3NDQ2XSxfMHgzMmE4YjMpe2xldCBfMHg0ZmI3Mjk9XzB4M2Y1ZDJkKF8weDMyYThiMyxfMHgzOTk2NzgoKSk7XzB4MTcyYzc1KF8weDRhMjk1YShfMHgzNGIyYTgoMHgxNGIpLF8weGY4MmQzYSxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsW18weDRmYjcyOV0sXzB4Mjc3NDQ2KSk7fX0sXzB4N2U2MWU2PV8weDMwMDQ3YT0+XzB4NThkYzg0PT57dmFyIF8weDUyZGMzZT1fMHg1MTJhMzc7dHJ5e18weDU3Y2Y4NihfMHg1OGRjODQpLF8weDMwMDQ3YShfMHg1OGRjODQpO31maW5hbGx5e18weDE0YThjY1tfMHg1MmRjM2UoMHgxOGEpXVtfMHg1MmRjM2UoMHgxNGIpXT1fMHgzMDA0N2E7fX0sXzB4MjBmNTYxPV8weDc0ZWJkYz0+XzB4MTMwOTE2PT57dmFyIF8weDIxMzczNj1fMHg1MTJhMzc7dHJ5e2xldCBbXzB4MjdmYWVmLF8weDJhZjYyNV09XzB4MTMwOTE2WydzcGxpdCddKF8weDIxMzczNigweDFhNCkpO18weDUwOWFhYyhfMHgyYWY2MjUsXzB4MjdmYWVmKSxfMHg3NGViZGMoXzB4MjdmYWVmKTt9ZmluYWxseXtfMHgxNGE4Y2NbXzB4MjEzNzM2KDB4MThhKV1bJ3RpbWVFbmQnXT1fMHg3NGViZGM7fX07XzB4MTRhOGNjW18weDUxMmEzNygweDEwMSldPXsnY29uc29sZUxvZyc6KF8weGJlZmYxYixfMHgzZTI2YjUpPT57dmFyIF8weGEyNTZmMT1fMHg1MTJhMzc7XzB4MTRhOGNjW18weGEyNTZmMSgweDE4YSldWydsb2cnXVtfMHhhMjU2ZjEoMHhlNSldIT09XzB4YTI1NmYxKDB4MTNlKSYmXzB4MTcyYzc1KF8weDRhMjk1YSgnbG9nJyxfMHhiZWZmMWIsXzB4NGI5YTYxKCksXzB4MmU5NzEzLF8weDNlMjZiNSkpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDU4M2JhNyxfMHgyYzI5NTApPT57dmFyIF8weDFjN2Q4Yj1fMHg1MTJhMzc7XzB4MTRhOGNjW18weDFjN2Q4YigweDE4YSldW18weDFjN2Q4YigweDExMildW18weDFjN2Q4YigweGU1KV0hPT1fMHgxYzdkOGIoMHgxMTQpJiZfMHgxNzJjNzUoXzB4NGEyOTVhKF8weDFjN2Q4YigweDExNSksXzB4NTgzYmE3LF8weDRiOWE2MSgpLF8weDJlOTcxMyxfMHgyYzI5NTApKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4OTM2YjJiPV8weDUxMmEzNztfMHgxNGE4Y2NbXzB4OTM2YjJiKDB4MThhKV1bXzB4OTM2YjJiKDB4MTRiKV09XzB4N2U2MWU2KF8weDE0YThjY1tfMHg5MzZiMmIoMHgxOGEpXVtfMHg5MzZiMmIoMHgxNGIpXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDI1YzZjND1fMHg1MTJhMzc7XzB4MTRhOGNjWydjb25zb2xlJ11bXzB4MjVjNmM0KDB4MTFiKV09XzB4MjBmNTYxKF8weDE0YThjY1tfMHgyNWM2YzQoMHgxOGEpXVtfMHgyNWM2YzQoMHgxMWIpXSk7fSwnYXV0b0xvZyc6KF8weDQ5ZGU3MyxfMHg0NjRhNDcpPT57dmFyIF8weDRmZjQ5Yz1fMHg1MTJhMzc7XzB4MTcyYzc1KF8weDRhMjk1YShfMHg0ZmY0OWMoMHgxMTIpLF8weDQ2NGE0NyxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsW18weDQ5ZGU3M10pKTt9LCdhdXRvTG9nTWFueSc6KF8weDRkZmQwNCxfMHgxY2QzZGQpPT57dmFyIF8weDIwOWMwYz1fMHg1MTJhMzc7XzB4MTcyYzc1KF8weDRhMjk1YShfMHgyMDljMGMoMHgxMTIpLF8weDRkZmQwNCxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsXzB4MWNkM2RkKSk7fSwnYXV0b1RyYWNlJzooXzB4MTE1MDc0LF8weDhmZmRhMSk9Pnt2YXIgXzB4ZDQzMGE4PV8weDUxMmEzNztfMHgxNzJjNzUoXzB4NGEyOTVhKF8weGQ0MzBhOCgweDExNSksXzB4OGZmZGExLF8weDRiOWE2MSgpLF8weDJlOTcxMyxbXzB4MTE1MDc0XSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHg1ODc2NjAsXzB4MTFhMGI5KT0+e3ZhciBfMHg1OWNiNDE9XzB4NTEyYTM3O18weDE3MmM3NShfMHg0YTI5NWEoXzB4NTljYjQxKDB4MTE1KSxfMHg1ODc2NjAsXzB4NGI5YTYxKCksXzB4MmU5NzEzLF8weDExYTBiOSkpO30sJ2F1dG9UaW1lJzooXzB4NWU2Zjg4LF8weDJiOGVhNCxfMHg2MDNlYmYpPT57XzB4NTdjZjg2KF8weDYwM2ViZik7fSwnYXV0b1RpbWVFbmQnOihfMHgzMTBlZWUsXzB4MmI1NDU5LF8weDI4NWM2Myk9PntfMHg1MDlhYWMoXzB4MmI1NDU5LF8weDI4NWM2Myk7fX07bGV0IF8weDE3MmM3NT1WKF8weDE0YThjYyxfMHgzNDliNmMsXzB4M2E5ZDRlLF8weDRiYmFlMixfMHgxNmYxNmMpLF8weDJlOTcxMz1fMHgxNGE4Y2NbJ19jb25zb2xlX25pbmphX3Nlc3Npb24nXTtjbGFzcyBfMHg1NjEzMGR7Y29uc3RydWN0b3IoKXt2YXIgXzB4NDBmMTE0PV8weDUxMmEzNzt0aGlzW18weDQwZjExNCgweGYyKV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDQwZjExNCgweDE4MyldPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHg0MGYxMTQoMHhlMSldPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbJ191bmRlZmluZWQnXT1fMHgxNGE4Y2NbXzB4NDBmMTE0KDB4MTIxKV0sdGhpc1tfMHg0MGYxMTQoMHgxMGQpXT1fMHgxNGE4Y2NbXzB4NDBmMTE0KDB4MWExKV0sdGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sdGhpc1tfMHg0MGYxMTQoMHhmMCldPU9iamVjdFtfMHg0MGYxMTQoMHgxNjMpXSx0aGlzW18weDQwZjExNCgweDE1MCldPV8weDE0YThjY1tfMHg0MGYxMTQoMHgxNDQpXSx0aGlzWydfcmVnRXhwVG9TdHJpbmcnXT1SZWdFeHBbXzB4NDBmMTE0KDB4ZjcpXVtfMHg0MGYxMTQoMHgxMjMpXSx0aGlzWydfZGF0ZVRvU3RyaW5nJ109RGF0ZVtfMHg0MGYxMTQoMHhmNyldW18weDQwZjExNCgweDEyMyldO31bJ3NlcmlhbGl6ZSddKF8weDU1YTJiYixfMHgxYjY2MDQsXzB4Mjg3YmE5LF8weDJkOTg1Mil7dmFyIF8weDRkMjJmMj1fMHg1MTJhMzcsXzB4MTY2MmZhPXRoaXMsXzB4NWI4MzEyPV8weDI4N2JhOVsnYXV0b0V4cGFuZCddO2Z1bmN0aW9uIF8weGM1YmUxNihfMHg1NjkwMGUsXzB4YzBiNWMxLF8weDQ0MzNmYyl7dmFyIF8weDRiODhlZD1fMHgyMTUyO18weGMwYjVjMVsndHlwZSddPV8weDRiODhlZCgweDFhYSksXzB4YzBiNWMxW18weDRiODhlZCgweDEwYSldPV8weDU2OTAwZVtfMHg0Yjg4ZWQoMHgxOWIpXSxfMHg2MDkzMjA9XzB4NDQzM2ZjW18weDRiODhlZCgweDE2OSldWydjdXJyZW50J10sXzB4NDQzM2ZjW18weDRiODhlZCgweDE2OSldW18weDRiODhlZCgweDE1NyldPV8weGMwYjVjMSxfMHgxNjYyZmFbXzB4NGI4OGVkKDB4YzUpXShfMHhjMGI1YzEsXzB4NDQzM2ZjKTt9aWYoXzB4MWI2NjA0JiZfMHgxYjY2MDRbXzB4NGQyMmYyKDB4MTE2KV0pXzB4YzViZTE2KF8weDFiNjYwNCxfMHg1NWEyYmIsXzB4Mjg3YmE5KTtlbHNlIHRyeXtfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTNhKV0rKyxfMHgyODdiYTlbJ2F1dG9FeHBhbmQnXSYmXzB4Mjg3YmE5W18weDRkMjJmMigweDFhZCldWydwdXNoJ10oXzB4MWI2NjA0KTt2YXIgXzB4MmFiZjc3LF8weDE3OWJhMyxfMHg0MzdhNzEsXzB4MWY0MzE4LF8weDFmNmIyNj1bXSxfMHg1MTIyNzE9W10sXzB4NDA2Y2YyLF8weDI1MmFlND10aGlzW18weDRkMjJmMigweDEzYildKF8weDFiNjYwNCksXzB4M2UwNGE1PV8weDI1MmFlND09PV8weDRkMjJmMigweDFhYyksXzB4MmFiYjBhPSEweDEsXzB4NDgyOGExPV8weDI1MmFlND09PV8weDRkMjJmMigweDE5OCksXzB4MzRmZjIzPXRoaXNbJ19pc1ByaW1pdGl2ZVR5cGUnXShfMHgyNTJhZTQpLF8weDM4MDYwNz10aGlzW18weDRkMjJmMigweDE1OCldKF8weDI1MmFlNCksXzB4Njc5ZDdmPV8weDM0ZmYyM3x8XzB4MzgwNjA3LF8weDM3YTVkNT17fSxfMHgyZTYwZjM9MHgwLF8weDIyMzBmOD0hMHgxLF8weDYwOTMyMCxfMHgzYWNiOTk9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkOCldKXtpZihfMHgzZTA0YTUpe2lmKF8weDE3OWJhMz1fMHgxYjY2MDRbJ2xlbmd0aCddLF8weDE3OWJhMz5fMHgyODdiYTlbJ2VsZW1lbnRzJ10pe2ZvcihfMHg0MzdhNzE9MHgwLF8weDFmNDMxOD1fMHgyODdiYTlbXzB4NGQyMmYyKDB4MTMwKV0sXzB4MmFiZjc3PV8weDQzN2E3MTtfMHgyYWJmNzc8XzB4MWY0MzE4O18weDJhYmY3NysrKV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxYTYpXShfMHgxNjYyZmFbXzB4NGQyMmYyKDB4MTcyKV0oXzB4MWY2YjI2LF8weDFiNjYwNCxfMHgyNTJhZTQsXzB4MmFiZjc3LF8weDI4N2JhOSkpO18weDU1YTJiYltfMHg0ZDIyZjIoMHhlOSldPSEweDA7fWVsc2V7Zm9yKF8weDQzN2E3MT0weDAsXzB4MWY0MzE4PV8weDE3OWJhMyxfMHgyYWJmNzc9XzB4NDM3YTcxO18weDJhYmY3NzxfMHgxZjQzMTg7XzB4MmFiZjc3KyspXzB4NTEyMjcxW18weDRkMjJmMigweDFhNildKF8weDE2NjJmYVtfMHg0ZDIyZjIoMHgxNzIpXShfMHgxZjZiMjYsXzB4MWI2NjA0LF8weDI1MmFlNCxfMHgyYWJmNzcsXzB4Mjg3YmE5KSk7fV8weDI4N2JhOVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSs9XzB4NTEyMjcxW18weDRkMjJmMigweDE1NSldO31pZighKF8weDI1MmFlND09PV8weDRkMjJmMigweDE3ZSl8fF8weDI1MmFlND09PV8weDRkMjJmMigweDEyMSkpJiYhXzB4MzRmZjIzJiZfMHgyNTJhZTQhPT0nU3RyaW5nJyYmXzB4MjUyYWU0IT09XzB4NGQyMmYyKDB4MTRlKSYmXzB4MjUyYWU0IT09XzB4NGQyMmYyKDB4MTU5KSl7dmFyIF8weDViMWRjZT1fMHgyZDk4NTJbXzB4NGQyMmYyKDB4MTI5KV18fF8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxMjkpXTtpZih0aGlzW18weDRkMjJmMigweDE4MCldKF8weDFiNjYwNCk/KF8weDJhYmY3Nz0weDAsXzB4MWI2NjA0W18weDRkMjJmMigweDFhOSldKGZ1bmN0aW9uKF8weDFlYzVmNSl7dmFyIF8weDNhMTFiOD1fMHg0ZDIyZjI7aWYoXzB4MmU2MGYzKyssXzB4Mjg3YmE5W18weDNhMTFiOCgweDE1NCldKyssXzB4MmU2MGYzPl8weDViMWRjZSl7XzB4MjIzMGY4PSEweDA7cmV0dXJuO31pZighXzB4Mjg3YmE5W18weDNhMTFiOCgweDE2MCldJiZfMHgyODdiYTlbXzB4M2ExMWI4KDB4ZGUpXSYmXzB4Mjg3YmE5W18weDNhMTFiOCgweDE1NCldPl8weDI4N2JhOVsnYXV0b0V4cGFuZExpbWl0J10pe18weDIyMzBmOD0hMHgwO3JldHVybjt9XzB4NTEyMjcxWydwdXNoJ10oXzB4MTY2MmZhW18weDNhMTFiOCgweDE3MildKF8weDFmNmIyNixfMHgxYjY2MDQsXzB4M2ExMWI4KDB4ZDApLF8weDJhYmY3NysrLF8weDI4N2JhOSxmdW5jdGlvbihfMHgyMTUyYTYpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgyMTUyYTY7fTt9KF8weDFlYzVmNSkpKTt9KSk6dGhpc1tfMHg0ZDIyZjIoMHhmMyldKF8weDFiNjYwNCkmJl8weDFiNjYwNFsnZm9yRWFjaCddKGZ1bmN0aW9uKF8weDM1MmFiYixfMHgxNTBhMDIpe3ZhciBfMHgxZWU5YTc9XzB4NGQyMmYyO2lmKF8weDJlNjBmMysrLF8weDI4N2JhOVtfMHgxZWU5YTcoMHgxNTQpXSsrLF8weDJlNjBmMz5fMHg1YjFkY2Upe18weDIyMzBmOD0hMHgwO3JldHVybjt9aWYoIV8weDI4N2JhOVtfMHgxZWU5YTcoMHgxNjApXSYmXzB4Mjg3YmE5WydhdXRvRXhwYW5kJ10mJl8weDI4N2JhOVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgyODdiYTlbXzB4MWVlOWE3KDB4MWE3KV0pe18weDIyMzBmOD0hMHgwO3JldHVybjt9dmFyIF8weDFlYWE4NT1fMHgxNTBhMDJbJ3RvU3RyaW5nJ10oKTtfMHgxZWFhODVbXzB4MWVlOWE3KDB4MTU1KV0+MHg2NCYmKF8weDFlYWE4NT1fMHgxZWFhODVbXzB4MWVlOWE3KDB4MWE1KV0oMHgwLDB4NjQpK18weDFlZTlhNygweDEzMSkpLF8weDUxMjI3MVtfMHgxZWU5YTcoMHgxYTYpXShfMHgxNjYyZmFbXzB4MWVlOWE3KDB4MTcyKV0oXzB4MWY2YjI2LF8weDFiNjYwNCwnTWFwJyxfMHgxZWFhODUsXzB4Mjg3YmE5LGZ1bmN0aW9uKF8weDNmY2RkMil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDNmY2RkMjt9O30oXzB4MzUyYWJiKSkpO30pLCFfMHgyYWJiMGEpe3RyeXtmb3IoXzB4NDA2Y2YyIGluIF8weDFiNjYwNClpZighKF8weDNlMDRhNSYmXzB4M2FjYjk5Wyd0ZXN0J10oXzB4NDA2Y2YyKSkmJiF0aGlzW18weDRkMjJmMigweGNjKV0oXzB4MWI2NjA0LF8weDQwNmNmMixfMHgyODdiYTkpKXtpZihfMHgyZTYwZjMrKyxfMHgyODdiYTlbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHgyZTYwZjM+XzB4NWIxZGNlKXtfMHgyMjMwZjg9ITB4MDticmVhazt9aWYoIV8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxNjApXSYmXzB4Mjg3YmE5W18weDRkMjJmMigweGRlKV0mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxNTQpXT5fMHgyODdiYTlbXzB4NGQyMmYyKDB4MWE3KV0pe18weDIyMzBmOD0hMHgwO2JyZWFrO31fMHg1MTIyNzFbXzB4NGQyMmYyKDB4MWE2KV0oXzB4MTY2MmZhWydfYWRkT2JqZWN0UHJvcGVydHknXShfMHgxZjZiMjYsXzB4MzdhNWQ1LF8weDFiNjYwNCxfMHgyNTJhZTQsXzB4NDA2Y2YyLF8weDI4N2JhOSkpO319Y2F0Y2h7fWlmKF8weDM3YTVkNVtfMHg0ZDIyZjIoMHgxNDkpXT0hMHgwLF8weDQ4MjhhMSYmKF8weDM3YTVkNVtfMHg0ZDIyZjIoMHgxMjgpXT0hMHgwKSwhXzB4MjIzMGY4KXt2YXIgXzB4MTQyYjdlPVtdWydjb25jYXQnXSh0aGlzWydfZ2V0T3duUHJvcGVydHlOYW1lcyddKF8weDFiNjYwNCkpWydjb25jYXQnXSh0aGlzW18weDRkMjJmMigweGM2KV0oXzB4MWI2NjA0KSk7Zm9yKF8weDJhYmY3Nz0weDAsXzB4MTc5YmEzPV8weDE0MmI3ZVtfMHg0ZDIyZjIoMHgxNTUpXTtfMHgyYWJmNzc8XzB4MTc5YmEzO18weDJhYmY3NysrKWlmKF8weDQwNmNmMj1fMHgxNDJiN2VbXzB4MmFiZjc3XSwhKF8weDNlMDRhNSYmXzB4M2FjYjk5W18weDRkMjJmMigweDE4ZCldKF8weDQwNmNmMltfMHg0ZDIyZjIoMHgxMjMpXSgpKSkmJiF0aGlzWydfYmxhY2tsaXN0ZWRQcm9wZXJ0eSddKF8weDFiNjYwNCxfMHg0MDZjZjIsXzB4Mjg3YmE5KSYmIV8weDM3YTVkNVtfMHg0ZDIyZjIoMHgxMDQpK18weDQwNmNmMlsndG9TdHJpbmcnXSgpXSl7aWYoXzB4MmU2MGYzKyssXzB4Mjg3YmE5W18weDRkMjJmMigweDE1NCldKyssXzB4MmU2MGYzPl8weDViMWRjZSl7XzB4MjIzMGY4PSEweDA7YnJlYWs7fWlmKCFfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTYwKV0mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkZSldJiZfMHgyODdiYTlbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4Mjg3YmE5WydhdXRvRXhwYW5kTGltaXQnXSl7XzB4MjIzMGY4PSEweDA7YnJlYWs7fV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxYTYpXShfMHgxNjYyZmFbJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDFmNmIyNixfMHgzN2E1ZDUsXzB4MWI2NjA0LF8weDI1MmFlNCxfMHg0MDZjZjIsXzB4Mjg3YmE5KSk7fX19fX1pZihfMHg1NWEyYmJbXzB4NGQyMmYyKDB4MTYyKV09XzB4MjUyYWU0LF8weDY3OWQ3Zj8oXzB4NTVhMmJiWyd2YWx1ZSddPV8weDFiNjYwNFtfMHg0ZDIyZjIoMHgxNTMpXSgpLHRoaXNbJ19jYXBJZlN0cmluZyddKF8weDI1MmFlNCxfMHg1NWEyYmIsXzB4Mjg3YmE5LF8weDJkOTg1MikpOl8weDI1MmFlND09PV8weDRkMjJmMigweGUzKT9fMHg1NWEyYmJbXzB4NGQyMmYyKDB4MWI0KV09dGhpc1tfMHg0ZDIyZjIoMHhjZSldW18weDRkMjJmMigweDE4OCldKF8weDFiNjYwNCk6XzB4MjUyYWU0PT09XzB4NGQyMmYyKDB4MTU5KT9fMHg1NWEyYmJbXzB4NGQyMmYyKDB4MWI0KV09XzB4MWI2NjA0Wyd0b1N0cmluZyddKCk6XzB4MjUyYWU0PT09J1JlZ0V4cCc/XzB4NTVhMmJiW18weDRkMjJmMigweDFiNCldPXRoaXNbXzB4NGQyMmYyKDB4MWE4KV1bXzB4NGQyMmYyKDB4MTg4KV0oXzB4MWI2NjA0KTpfMHgyNTJhZTQ9PT0nc3ltYm9sJyYmdGhpc1snX1N5bWJvbCddP18weDU1YTJiYlsndmFsdWUnXT10aGlzW18weDRkMjJmMigweDE1MCldW18weDRkMjJmMigweGY3KV1bJ3RvU3RyaW5nJ11bXzB4NGQyMmYyKDB4MTg4KV0oXzB4MWI2NjA0KTohXzB4Mjg3YmE5W18weDRkMjJmMigweGQ4KV0mJiEoXzB4MjUyYWU0PT09XzB4NGQyMmYyKDB4MTdlKXx8XzB4MjUyYWU0PT09XzB4NGQyMmYyKDB4MTIxKSkmJihkZWxldGUgXzB4NTVhMmJiW18weDRkMjJmMigweDFiNCldLF8weDU1YTJiYltfMHg0ZDIyZjIoMHgxMTEpXT0hMHgwKSxfMHgyMjMwZjgmJihfMHg1NWEyYmJbXzB4NGQyMmYyKDB4ZmUpXT0hMHgwKSxfMHg2MDkzMjA9XzB4Mjg3YmE5Wydub2RlJ11bJ2N1cnJlbnQnXSxfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTY5KV1bXzB4NGQyMmYyKDB4MTU3KV09XzB4NTVhMmJiLHRoaXNbXzB4NGQyMmYyKDB4YzUpXShfMHg1NWEyYmIsXzB4Mjg3YmE5KSxfMHg1MTIyNzFbXzB4NGQyMmYyKDB4MTU1KV0pe2ZvcihfMHgyYWJmNzc9MHgwLF8weDE3OWJhMz1fMHg1MTIyNzFbJ2xlbmd0aCddO18weDJhYmY3NzxfMHgxNzliYTM7XzB4MmFiZjc3KyspXzB4NTEyMjcxW18weDJhYmY3N10oXzB4MmFiZjc3KTt9XzB4MWY2YjI2W18weDRkMjJmMigweDE1NSldJiYoXzB4NTVhMmJiW18weDRkMjJmMigweDEyOSldPV8weDFmNmIyNik7fWNhdGNoKF8weDg2MjQ1ZSl7XzB4YzViZTE2KF8weDg2MjQ1ZSxfMHg1NWEyYmIsXzB4Mjg3YmE5KTt9cmV0dXJuIHRoaXNbXzB4NGQyMmYyKDB4MTRkKV0oXzB4MWI2NjA0LF8weDU1YTJiYiksdGhpc1tfMHg0ZDIyZjIoMHhmZCldKF8weDU1YTJiYixfMHgyODdiYTkpLF8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxNjkpXVsnY3VycmVudCddPV8weDYwOTMyMCxfMHgyODdiYTlbJ2xldmVsJ10tLSxfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZGUpXT1fMHg1YjgzMTIsXzB4Mjg3YmE5W18weDRkMjJmMigweGRlKV0mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxYWQpXVtfMHg0ZDIyZjIoMHgxMDYpXSgpLF8weDU1YTJiYjt9WydfZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10oXzB4NWIzYzlkKXt2YXIgXzB4MzBlY2U0PV8weDUxMmEzNztyZXR1cm4gT2JqZWN0W18weDMwZWNlNCgweGZhKV0/T2JqZWN0W18weDMwZWNlNCgweGZhKV0oXzB4NWIzYzlkKTpbXTt9W18weDUxMmEzNygweDE4MCldKF8weDIwZmE5OSl7dmFyIF8weDQwMTY1ZD1fMHg1MTJhMzc7cmV0dXJuISEoXzB4MjBmYTk5JiZfMHgxNGE4Y2NbXzB4NDAxNjVkKDB4ZDApXSYmdGhpc1tfMHg0MDE2NWQoMHhkYSldKF8weDIwZmE5OSk9PT1fMHg0MDE2NWQoMHhmYykmJl8weDIwZmE5OVtfMHg0MDE2NWQoMHgxYTkpXSk7fVtfMHg1MTJhMzcoMHhjYyldKF8weDIzZGEzMixfMHg1ZjliYmQsXzB4NTY1M2ViKXt2YXIgXzB4NTVlY2U0PV8weDUxMmEzNztyZXR1cm4gXzB4NTY1M2ViW18weDU1ZWNlNCgweDEzOSldP3R5cGVvZiBfMHgyM2RhMzJbXzB4NWY5YmJkXT09J2Z1bmN0aW9uJzohMHgxO31bXzB4NTEyYTM3KDB4MTNiKV0oXzB4NDFhYTdjKXt2YXIgXzB4M2E4MGQwPV8weDUxMmEzNyxfMHgzMzkxZWE9Jyc7cmV0dXJuIF8weDMzOTFlYT10eXBlb2YgXzB4NDFhYTdjLF8weDMzOTFlYT09PV8weDNhODBkMCgweDE5NCk/dGhpc1tfMHgzYTgwZDAoMHhkYSldKF8weDQxYWE3Yyk9PT1fMHgzYTgwZDAoMHgxNGEpP18weDMzOTFlYT0nYXJyYXknOnRoaXNbXzB4M2E4MGQwKDB4ZGEpXShfMHg0MWFhN2MpPT09XzB4M2E4MGQwKDB4MTlhKT9fMHgzMzkxZWE9XzB4M2E4MGQwKDB4ZTMpOnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDQxYWE3Yyk9PT1fMHgzYTgwZDAoMHgxMDgpP18weDMzOTFlYT0nYmlnaW50JzpfMHg0MWFhN2M9PT1udWxsP18weDMzOTFlYT0nbnVsbCc6XzB4NDFhYTdjW18weDNhODBkMCgweGRmKV0mJihfMHgzMzkxZWE9XzB4NDFhYTdjWydjb25zdHJ1Y3RvciddW18weDNhODBkMCgweGU1KV18fF8weDMzOTFlYSk6XzB4MzM5MWVhPT09XzB4M2E4MGQwKDB4MTIxKSYmdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJl8weDQxYWE3YyBpbnN0YW5jZW9mIHRoaXNbXzB4M2E4MGQwKDB4MTBkKV0mJihfMHgzMzkxZWE9XzB4M2E4MGQwKDB4MWExKSksXzB4MzM5MWVhO31bXzB4NTEyYTM3KDB4ZGEpXShfMHgxNTIyMzIpe3ZhciBfMHg1MGRiMTk9XzB4NTEyYTM3O3JldHVybiBPYmplY3RbJ3Byb3RvdHlwZSddW18weDUwZGIxOSgweDEyMyldWydjYWxsJ10oXzB4MTUyMjMyKTt9W18weDUxMmEzNygweGM3KV0oXzB4MWUxNzdjKXt2YXIgXzB4MWE3OTkzPV8weDUxMmEzNztyZXR1cm4gXzB4MWUxNzdjPT09XzB4MWE3OTkzKDB4MTkxKXx8XzB4MWUxNzdjPT09XzB4MWE3OTkzKDB4ZWMpfHxfMHgxZTE3N2M9PT0nbnVtYmVyJzt9W18weDUxMmEzNygweDE1OCldKF8weDU3MWI1Yil7dmFyIF8weDJiMzIyMz1fMHg1MTJhMzc7cmV0dXJuIF8weDU3MWI1Yj09PV8weDJiMzIyMygweDEyYil8fF8weDU3MWI1Yj09PSdTdHJpbmcnfHxfMHg1NzFiNWI9PT0nTnVtYmVyJzt9W18weDUxMmEzNygweDE3MildKF8weDFkYTk2MSxfMHgyMjMwNGMsXzB4MjkzZjFmLF8weDNkYzNiNyxfMHgxZjhmN2QsXzB4M2Y1MjFlKXt2YXIgXzB4NDE0NTkxPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDI5NDEyMil7dmFyIF8weGUyMDU3YT1fMHgyMTUyLF8weDRjYWY0ZT1fMHgxZjhmN2RbJ25vZGUnXVsnY3VycmVudCddLF8weDE3YzUzOD1fMHgxZjhmN2RbXzB4ZTIwNTdhKDB4MTY5KV1bXzB4ZTIwNTdhKDB4ZTgpXSxfMHgxODk5Yzg9XzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldWydwYXJlbnQnXTtfMHgxZjhmN2RbXzB4ZTIwNTdhKDB4MTY5KV1bJ3BhcmVudCddPV8weDRjYWY0ZSxfMHgxZjhmN2RbXzB4ZTIwNTdhKDB4MTY5KV1bXzB4ZTIwNTdhKDB4ZTgpXT10eXBlb2YgXzB4M2RjM2I3PT1fMHhlMjA1N2EoMHgxYjApP18weDNkYzNiNzpfMHgyOTQxMjIsXzB4MWRhOTYxWydwdXNoJ10oXzB4NDE0NTkxW18weGUyMDU3YSgweDEwYildKF8weDIyMzA0YyxfMHgyOTNmMWYsXzB4M2RjM2I3LF8weDFmOGY3ZCxfMHgzZjUyMWUpKSxfMHgxZjhmN2RbXzB4ZTIwNTdhKDB4MTY5KV1bXzB4ZTIwNTdhKDB4ZDcpXT1fMHgxODk5YzgsXzB4MWY4ZjdkWydub2RlJ11bXzB4ZTIwNTdhKDB4ZTgpXT1fMHgxN2M1Mzg7fTt9W18weDUxMmEzNygweGUwKV0oXzB4NDliOWU1LF8weDE1MmZlMSxfMHg1YWViNzgsXzB4MzYxOTg2LF8weDRlZGYyNCxfMHgyNzg4YmYsXzB4MzE5YmY5KXt2YXIgXzB4MzRkMjU0PV8weDUxMmEzNyxfMHgxZDAwZTg9dGhpcztyZXR1cm4gXzB4MTUyZmUxW18weDM0ZDI1NCgweDEwNCkrXzB4NGVkZjI0W18weDM0ZDI1NCgweDEyMyldKCldPSEweDAsZnVuY3Rpb24oXzB4NWQyY2Mpe3ZhciBfMHg0MTQ5M2Y9XzB4MzRkMjU0LF8weDEwZDQ0ZD1fMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4MTU3KV0sXzB4MTAxZmQ5PV8weDI3ODhiZltfMHg0MTQ5M2YoMHgxNjkpXVtfMHg0MTQ5M2YoMHhlOCldLF8weDQyZGUzMT1fMHgyNzg4YmZbJ25vZGUnXVtfMHg0MTQ5M2YoMHhkNyldO18weDI3ODhiZlsnbm9kZSddW18weDQxNDkzZigweGQ3KV09XzB4MTBkNDRkLF8weDI3ODhiZltfMHg0MTQ5M2YoMHgxNjkpXVtfMHg0MTQ5M2YoMHhlOCldPV8weDVkMmNjLF8weDQ5YjllNVtfMHg0MTQ5M2YoMHgxYTYpXShfMHgxZDAwZThbXzB4NDE0OTNmKDB4MTBiKV0oXzB4NWFlYjc4LF8weDM2MTk4NixfMHg0ZWRmMjQsXzB4Mjc4OGJmLF8weDMxOWJmOSkpLF8weDI3ODhiZltfMHg0MTQ5M2YoMHgxNjkpXVtfMHg0MTQ5M2YoMHhkNyldPV8weDQyZGUzMSxfMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZTgpXT1fMHgxMDFmZDk7fTt9WydfcHJvcGVydHknXShfMHhkODJmYzcsXzB4NWJmYWEwLF8weDVjY2U5YixfMHgxM2M0OGEsXzB4NTY1NjI4KXt2YXIgXzB4MWY4NmRjPV8weDUxMmEzNyxfMHgzNzc0MTM9dGhpcztfMHg1NjU2Mjh8fChfMHg1NjU2Mjg9ZnVuY3Rpb24oXzB4ZDJkYzM2LF8weDQzNzM2OCl7cmV0dXJuIF8weGQyZGMzNltfMHg0MzczNjhdO30pO3ZhciBfMHg1OGUxYzk9XzB4NWNjZTliW18weDFmODZkYygweDEyMyldKCksXzB4MTI0ZjhlPV8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNmEpXXx8e30sXzB4NDU3YTY1PV8weDEzYzQ4YVsnZGVwdGgnXSxfMHhlMWFkOTU9XzB4MTNjNDhhW18weDFmODZkYygweDE2MCldO3RyeXt2YXIgXzB4NDc4NGFjPXRoaXNbXzB4MWY4NmRjKDB4ZjMpXShfMHhkODJmYzcpLF8weDM1ZWE5Yj1fMHg1OGUxYzk7XzB4NDc4NGFjJiZfMHgzNWVhOWJbMHgwXT09PSdcXFxceDI3JyYmKF8weDM1ZWE5Yj1fMHgzNWVhOWJbXzB4MWY4NmRjKDB4MTc1KV0oMHgxLF8weDM1ZWE5YltfMHgxZjg2ZGMoMHgxNTUpXS0weDIpKTt2YXIgXzB4MWNhZWIwPV8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNmEpXT1fMHgxMjRmOGVbXzB4MWY4NmRjKDB4MTA0KStfMHgzNWVhOWJdO18weDFjYWViMCYmKF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHhkOCldPV8weDEzYzQ4YVsnZGVwdGgnXSsweDEpLF8weDEzYzQ4YVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddPSEhXzB4MWNhZWIwO3ZhciBfMHgzNTlmYWY9dHlwZW9mIF8weDVjY2U5Yj09XzB4MWY4NmRjKDB4ZWUpLF8weDVjN2ZjYj17J25hbWUnOl8weDM1OWZhZnx8XzB4NDc4NGFjP18weDU4ZTFjOTp0aGlzW18weDFmODZkYygweGQyKV0oXzB4NThlMWM5KX07aWYoXzB4MzU5ZmFmJiYoXzB4NWM3ZmNiW18weDFmODZkYygweGVlKV09ITB4MCksIShfMHg1YmZhYTA9PT0nYXJyYXknfHxfMHg1YmZhYTA9PT1fMHgxZjg2ZGMoMHgxNzYpKSl7dmFyIF8weDFjNTk3MD10aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10oXzB4ZDgyZmM3LF8weDVjY2U5Yik7aWYoXzB4MWM1OTcwJiYoXzB4MWM1OTcwWydzZXQnXSYmKF8weDVjN2ZjYltfMHgxZjg2ZGMoMHgxNDIpXT0hMHgwKSxfMHgxYzU5NzBbJ2dldCddJiYhXzB4MWNhZWIwJiYhXzB4MTNjNDhhWydyZXNvbHZlR2V0dGVycyddKSlyZXR1cm4gXzB4NWM3ZmNiWydnZXR0ZXInXT0hMHgwLHRoaXNbXzB4MWY4NmRjKDB4MTM1KV0oXzB4NWM3ZmNiLF8weDEzYzQ4YSksXzB4NWM3ZmNiO312YXIgXzB4MjMwNmE4O3RyeXtfMHgyMzA2YTg9XzB4NTY1NjI4KF8weGQ4MmZjNyxfMHg1Y2NlOWIpO31jYXRjaChfMHg0ZGFhNTMpe3JldHVybiBfMHg1YzdmY2I9eyduYW1lJzpfMHg1OGUxYzksJ3R5cGUnOl8weDFmODZkYygweDFhYSksJ2Vycm9yJzpfMHg0ZGFhNTNbXzB4MWY4NmRjKDB4MTliKV19LHRoaXNbXzB4MWY4NmRjKDB4MTM1KV0oXzB4NWM3ZmNiLF8weDEzYzQ4YSksXzB4NWM3ZmNiO312YXIgXzB4YzY1Mzg9dGhpc1tfMHgxZjg2ZGMoMHgxM2IpXShfMHgyMzA2YTgpLF8weDI2ZTdjYT10aGlzW18weDFmODZkYygweGM3KV0oXzB4YzY1MzgpO2lmKF8weDVjN2ZjYltfMHgxZjg2ZGMoMHgxNjIpXT1fMHhjNjUzOCxfMHgyNmU3Y2EpdGhpc1tfMHgxZjg2ZGMoMHgxMzUpXShfMHg1YzdmY2IsXzB4MTNjNDhhLF8weDIzMDZhOCxmdW5jdGlvbigpe3ZhciBfMHg1MDU1Y2U9XzB4MWY4NmRjO18weDVjN2ZjYltfMHg1MDU1Y2UoMHgxYjQpXT1fMHgyMzA2YThbXzB4NTA1NWNlKDB4MTUzKV0oKSwhXzB4MWNhZWIwJiZfMHgzNzc0MTNbXzB4NTA1NWNlKDB4MTcxKV0oXzB4YzY1MzgsXzB4NWM3ZmNiLF8weDEzYzQ4YSx7fSk7fSk7ZWxzZXt2YXIgXzB4MWQ5OTBkPV8weDEzYzQ4YVsnYXV0b0V4cGFuZCddJiZfMHgxM2M0OGFbJ2xldmVsJ108XzB4MTNjNDhhW18weDFmODZkYygweDEzNCldJiZfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MWFkKV1bXzB4MWY4NmRjKDB4MTZjKV0oXzB4MjMwNmE4KTwweDAmJl8weGM2NTM4IT09XzB4MWY4NmRjKDB4MTk4KSYmXzB4MTNjNDhhW18weDFmODZkYygweDE1NCldPF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxYTcpXTtfMHgxZDk5MGR8fF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxM2EpXTxfMHg0NTdhNjV8fF8weDFjYWViMD8odGhpc1snc2VyaWFsaXplJ10oXzB4NWM3ZmNiLF8weDIzMDZhOCxfMHgxM2M0OGEsXzB4MWNhZWIwfHx7fSksdGhpc1tfMHgxZjg2ZGMoMHgxNGQpXShfMHgyMzA2YTgsXzB4NWM3ZmNiKSk6dGhpc1tfMHgxZjg2ZGMoMHgxMzUpXShfMHg1YzdmY2IsXzB4MTNjNDhhLF8weDIzMDZhOCxmdW5jdGlvbigpe3ZhciBfMHgxNDE5MWI9XzB4MWY4NmRjO18weGM2NTM4PT09XzB4MTQxOTFiKDB4MTdlKXx8XzB4YzY1Mzg9PT1fMHgxNDE5MWIoMHgxMjEpfHwoZGVsZXRlIF8weDVjN2ZjYltfMHgxNDE5MWIoMHgxYjQpXSxfMHg1YzdmY2JbJ2NhcHBlZCddPSEweDApO30pO31yZXR1cm4gXzB4NWM3ZmNiO31maW5hbGx5e18weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNmEpXT1fMHgxMjRmOGUsXzB4MTNjNDhhW18weDFmODZkYygweGQ4KV09XzB4NDU3YTY1LF8weDEzYzQ4YVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddPV8weGUxYWQ5NTt9fVtfMHg1MTJhMzcoMHgxNzEpXShfMHgxODBmOTAsXzB4MTFkNzQ3LF8weDE1NGRkOCxfMHgyMTg5M2Ype3ZhciBfMHg1NjgyNWU9XzB4NTEyYTM3LF8weDE3NjA1Nj1fMHgyMTg5M2ZbXzB4NTY4MjVlKDB4MTk3KV18fF8weDE1NGRkOFsnc3RyTGVuZ3RoJ107aWYoKF8weDE4MGY5MD09PV8weDU2ODI1ZSgweGVjKXx8XzB4MTgwZjkwPT09XzB4NTY4MjVlKDB4ZjUpKSYmXzB4MTFkNzQ3W18weDU2ODI1ZSgweDFiNCldKXtsZXQgXzB4MWU3MDVjPV8weDExZDc0N1tfMHg1NjgyNWUoMHgxYjQpXVtfMHg1NjgyNWUoMHgxNTUpXTtfMHgxNTRkZDhbXzB4NTY4MjVlKDB4MTVmKV0rPV8weDFlNzA1YyxfMHgxNTRkZDhbXzB4NTY4MjVlKDB4MTVmKV0+XzB4MTU0ZGQ4W18weDU2ODI1ZSgweDEzMildPyhfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MTExKV09JycsZGVsZXRlIF8weDExZDc0N1tfMHg1NjgyNWUoMHgxYjQpXSk6XzB4MWU3MDVjPl8weDE3NjA1NiYmKF8weDExZDc0N1tfMHg1NjgyNWUoMHgxMTEpXT1fMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV1bJ3N1YnN0ciddKDB4MCxfMHgxNzYwNTYpLGRlbGV0ZSBfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV0pO319W18weDUxMmEzNygweGYzKV0oXzB4M2E5ODZiKXt2YXIgXzB4MmVmNDBiPV8weDUxMmEzNztyZXR1cm4hIShfMHgzYTk4NmImJl8weDE0YThjY1tfMHgyZWY0MGIoMHgxMzgpXSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4M2E5ODZiKT09PV8weDJlZjQwYigweDEzNikmJl8weDNhOTg2YltfMHgyZWY0MGIoMHgxYTkpXSk7fVtfMHg1MTJhMzcoMHhkMildKF8weDQ5NWJjZil7dmFyIF8weDI1MmU3ZD1fMHg1MTJhMzc7aWYoXzB4NDk1YmNmW18weDI1MmU3ZCgweDE4NCldKC9eXFxcXGQrJC8pKXJldHVybiBfMHg0OTViY2Y7dmFyIF8weDQwODkyODt0cnl7XzB4NDA4OTI4PUpTT05bXzB4MjUyZTdkKDB4MTNkKV0oJycrXzB4NDk1YmNmKTt9Y2F0Y2h7XzB4NDA4OTI4PSdcXFxceDIyJyt0aGlzW18weDI1MmU3ZCgweGRhKV0oXzB4NDk1YmNmKSsnXFxcXHgyMic7fXJldHVybiBfMHg0MDg5MjhbXzB4MjUyZTdkKDB4MTg0KV0oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHg0MDg5Mjg9XzB4NDA4OTI4WydzdWJzdHInXSgweDEsXzB4NDA4OTI4W18weDI1MmU3ZCgweDE1NSldLTB4Mik6XzB4NDA4OTI4PV8weDQwODkyOFtfMHgyNTJlN2QoMHgxMjIpXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpW18weDI1MmU3ZCgweDEyMildKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpWydyZXBsYWNlJ10oLyheXFxcInxcXFwiJCkvZywnXFxcXHgyNycpLF8weDQwODkyODt9W18weDUxMmEzNygweDEzNSldKF8weDNjZTMyNyxfMHhhMDVmYzAsXzB4Mjg1YmQ3LF8weDI5ODU4NSl7dmFyIF8weDJlMWI2Yj1fMHg1MTJhMzc7dGhpc1tfMHgyZTFiNmIoMHhjNSldKF8weDNjZTMyNyxfMHhhMDVmYzApLF8weDI5ODU4NSYmXzB4Mjk4NTg1KCksdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDI4NWJkNyxfMHgzY2UzMjcpLHRoaXNbXzB4MmUxYjZiKDB4ZmQpXShfMHgzY2UzMjcsXzB4YTA1ZmMwKTt9W18weDUxMmEzNygweGM1KV0oXzB4MWRmNWNiLF8weDFlNjAwZSl7dmFyIF8weDU2OTUyND1fMHg1MTJhMzc7dGhpc1tfMHg1Njk1MjQoMHhlNyldKF8weDFkZjVjYixfMHgxZTYwMGUpLHRoaXNbXzB4NTY5NTI0KDB4MTk1KV0oXzB4MWRmNWNiLF8weDFlNjAwZSksdGhpc1tfMHg1Njk1MjQoMHhjOSldKF8weDFkZjVjYixfMHgxZTYwMGUpLHRoaXNbXzB4NTY5NTI0KDB4MTA5KV0oXzB4MWRmNWNiLF8weDFlNjAwZSk7fVtfMHg1MTJhMzcoMHhlNyldKF8weDRhMzJkMCxfMHgzNjVkMTkpe31bJ19zZXROb2RlUXVlcnlQYXRoJ10oXzB4OGUyOWVlLF8weDE5NjlkYil7fVsnX3NldE5vZGVMYWJlbCddKF8weDk1N2Y1NCxfMHgzMDQzZmUpe31bXzB4NTEyYTM3KDB4MTc0KV0oXzB4NGYyNDRkKXt2YXIgXzB4MzMzMDZlPV8weDUxMmEzNztyZXR1cm4gXzB4NGYyNDRkPT09dGhpc1tfMHgzMzMwNmUoMHgxYTIpXTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgyZjJkNjUsXzB4NWE3NTU0KXt2YXIgXzB4MWE5NjQ4PV8weDUxMmEzNzt0aGlzW18weDFhOTY0OCgweGYxKV0oXzB4MmYyZDY1LF8weDVhNzU1NCksdGhpc1tfMHgxYTk2NDgoMHgxMWYpXShfMHgyZjJkNjUpLF8weDVhNzU1NFsnc29ydFByb3BzJ10mJnRoaXNbXzB4MWE5NjQ4KDB4MTgyKV0oXzB4MmYyZDY1KSx0aGlzWydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDJmMmQ2NSxfMHg1YTc1NTQpLHRoaXNbXzB4MWE5NjQ4KDB4MTVhKV0oXzB4MmYyZDY1LF8weDVhNzU1NCksdGhpc1tfMHgxYTk2NDgoMHgxNDUpXShfMHgyZjJkNjUpO31bXzB4NTEyYTM3KDB4MTRkKV0oXzB4MjE4NTk2LF8weDM5YmI5OSl7dmFyIF8weGY3MTFkZj1fMHg1MTJhMzc7dHJ5e18weDIxODU5NiYmdHlwZW9mIF8weDIxODU5NltfMHhmNzExZGYoMHgxNTUpXT09XzB4ZjcxMWRmKDB4MWIwKSYmKF8weDM5YmI5OVsnbGVuZ3RoJ109XzB4MjE4NTk2W18weGY3MTFkZigweDE1NSldKTt9Y2F0Y2h7fWlmKF8weDM5YmI5OVsndHlwZSddPT09XzB4ZjcxMWRmKDB4MWIwKXx8XzB4MzliYjk5W18weGY3MTFkZigweDE2MildPT09J051bWJlcicpe2lmKGlzTmFOKF8weDM5YmI5OVsndmFsdWUnXSkpXzB4MzliYjk5W18weGY3MTFkZigweDE0OCldPSEweDAsZGVsZXRlIF8weDM5YmI5OVtfMHhmNzExZGYoMHgxYjQpXTtlbHNlIHN3aXRjaChfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MWI0KV0pe2Nhc2UgTnVtYmVyW18weGY3MTFkZigweDE4YyldOl8weDM5YmI5OVtfMHhmNzExZGYoMHgxMDUpXT0hMHgwLGRlbGV0ZSBfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MWI0KV07YnJlYWs7Y2FzZSBOdW1iZXJbXzB4ZjcxMWRmKDB4MTAyKV06XzB4MzliYjk5WyduZWdhdGl2ZUluZmluaXR5J109ITB4MCxkZWxldGUgXzB4MzliYjk5W18weGY3MTFkZigweDFiNCldO2JyZWFrO2Nhc2UgMHgwOnRoaXNbXzB4ZjcxMWRmKDB4MTkwKV0oXzB4MzliYjk5Wyd2YWx1ZSddKSYmKF8weDM5YmI5OVsnbmVnYXRpdmVaZXJvJ109ITB4MCk7YnJlYWs7fX1lbHNlIF8weDM5YmI5OVtfMHhmNzExZGYoMHgxNjIpXT09PV8weGY3MTFkZigweDE5OCkmJnR5cGVvZiBfMHgyMTg1OTZbXzB4ZjcxMWRmKDB4ZTUpXT09J3N0cmluZycmJl8weDIxODU5NltfMHhmNzExZGYoMHhlNSldJiZfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4ZTUpXSYmXzB4MjE4NTk2W18weGY3MTFkZigweGU1KV0hPT1fMHgzOWJiOTlbJ25hbWUnXSYmKF8weDM5YmI5OVtfMHhmNzExZGYoMHgxNWIpXT1fMHgyMTg1OTZbJ25hbWUnXSk7fVsnX2lzTmVnYXRpdmVaZXJvJ10oXzB4MTg3OGMzKXtyZXR1cm4gMHgxL18weDE4NzhjMz09PU51bWJlclsnTkVHQVRJVkVfSU5GSU5JVFknXTt9W18weDUxMmEzNygweDE4MildKF8weDRmNmJkYyl7dmFyIF8weDU0YjQzNj1fMHg1MTJhMzc7IV8weDRmNmJkY1tfMHg1NGI0MzYoMHgxMjkpXXx8IV8weDRmNmJkY1tfMHg1NGI0MzYoMHgxMjkpXVtfMHg1NGI0MzYoMHgxNTUpXXx8XzB4NGY2YmRjWyd0eXBlJ109PT1fMHg1NGI0MzYoMHgxYWMpfHxfMHg0ZjZiZGNbJ3R5cGUnXT09PSdNYXAnfHxfMHg0ZjZiZGNbXzB4NTRiNDM2KDB4MTYyKV09PT0nU2V0J3x8XzB4NGY2YmRjW18weDU0YjQzNigweDEyOSldW18weDU0YjQzNigweDE3OCldKGZ1bmN0aW9uKF8weDQ0MTBlZixfMHgyMGU1YWYpe3ZhciBfMHgxNTc2ODk9XzB4NTRiNDM2LF8weDJmNDY4Mj1fMHg0NDEwZWZbXzB4MTU3Njg5KDB4ZTUpXVtfMHgxNTc2ODkoMHgxYjMpXSgpLF8weDI0OWEyZj1fMHgyMGU1YWZbJ25hbWUnXVtfMHgxNTc2ODkoMHgxYjMpXSgpO3JldHVybiBfMHgyZjQ2ODI8XzB4MjQ5YTJmPy0weDE6XzB4MmY0NjgyPl8weDI0OWEyZj8weDE6MHgwO30pO31bJ19hZGRGdW5jdGlvbnNOb2RlJ10oXzB4M2U0ZjBjLF8weDE2NjIwZCl7dmFyIF8weDNjNDkxZD1fMHg1MTJhMzc7aWYoIShfMHgxNjYyMGRbJ25vRnVuY3Rpb25zJ118fCFfMHgzZTRmMGNbXzB4M2M0OTFkKDB4MTI5KV18fCFfMHgzZTRmMGNbXzB4M2M0OTFkKDB4MTI5KV1bXzB4M2M0OTFkKDB4MTU1KV0pKXtmb3IodmFyIF8weDMyNDI0ZD1bXSxfMHgxMWNiYmU9W10sXzB4NGZlN2I0PTB4MCxfMHgzZDhkMGM9XzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldW18weDNjNDkxZCgweDE1NSldO18weDRmZTdiNDxfMHgzZDhkMGM7XzB4NGZlN2I0Kyspe3ZhciBfMHg0NmMzNTE9XzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldW18weDRmZTdiNF07XzB4NDZjMzUxW18weDNjNDkxZCgweDE2MildPT09XzB4M2M0OTFkKDB4MTk4KT9fMHgzMjQyNGRbJ3B1c2gnXShfMHg0NmMzNTEpOl8weDExY2JiZVtfMHgzYzQ5MWQoMHgxYTYpXShfMHg0NmMzNTEpO31pZighKCFfMHgxMWNiYmVbXzB4M2M0OTFkKDB4MTU1KV18fF8weDMyNDI0ZFtfMHgzYzQ5MWQoMHgxNTUpXTw9MHgxKSl7XzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldPV8weDExY2JiZTt2YXIgXzB4NDZkNzA5PXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDMyNDI0ZH07dGhpc1snX3NldE5vZGVJZCddKF8weDQ2ZDcwOSxfMHgxNjYyMGQpLHRoaXNbXzB4M2M0OTFkKDB4ZjEpXShfMHg0NmQ3MDksXzB4MTY2MjBkKSx0aGlzW18weDNjNDkxZCgweDExZildKF8weDQ2ZDcwOSksdGhpc1snX3NldE5vZGVQZXJtaXNzaW9ucyddKF8weDQ2ZDcwOSxfMHgxNjYyMGQpLF8weDQ2ZDcwOVsnaWQnXSs9J1xcXFx4MjBmJyxfMHgzZTRmMGNbXzB4M2M0OTFkKDB4MTI5KV1bXzB4M2M0OTFkKDB4MTE5KV0oXzB4NDZkNzA5KTt9fX1bXzB4NTEyYTM3KDB4MTVhKV0oXzB4MzA5OTE2LF8weDMxYWRjNSl7fVtfMHg1MTJhMzcoMHgxMWYpXShfMHgzM2MwMWQpe31bXzB4NTEyYTM3KDB4Y2YpXShfMHgyZjE0ZWQpe3ZhciBfMHgyOWNhZjk9XzB4NTEyYTM3O3JldHVybiBBcnJheVtfMHgyOWNhZjkoMHgxOWUpXShfMHgyZjE0ZWQpfHx0eXBlb2YgXzB4MmYxNGVkPT1fMHgyOWNhZjkoMHgxOTQpJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHgyZjE0ZWQpPT09XzB4MjljYWY5KDB4MTRhKTt9W18weDUxMmEzNygweDEwOSldKF8weDNkMmIzNSxfMHg1YTJhYWUpe31bXzB4NTEyYTM3KDB4MTQ1KV0oXzB4NWU4NzQ5KXt2YXIgXzB4MWVjOTBjPV8weDUxMmEzNztkZWxldGUgXzB4NWU4NzQ5W18weDFlYzkwYygweDE4OSldLGRlbGV0ZSBfMHg1ZTg3NDlbXzB4MWVjOTBjKDB4Y2IpXSxkZWxldGUgXzB4NWU4NzQ5W18weDFlYzkwYygweDE5MyldO31bJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnXShfMHgzZWRkM2MsXzB4M2UyZTBjKXt9W18weDUxMmEzNygweDEwMCldKF8weDU2Y2Y2ZCl7dmFyIF8weDJjZjYzYT1fMHg1MTJhMzc7cmV0dXJuIF8weDU2Y2Y2ZD9fMHg1NmNmNmRbXzB4MmNmNjNhKDB4MTg0KV0odGhpc1tfMHgyY2Y2M2EoMHgxODMpXSk/J1snK18weDU2Y2Y2ZCsnXSc6XzB4NTZjZjZkW18weDJjZjYzYSgweDE4NCldKHRoaXNbXzB4MmNmNjNhKDB4ZjIpXSk/Jy4nK18weDU2Y2Y2ZDpfMHg1NmNmNmRbXzB4MmNmNjNhKDB4MTg0KV0odGhpc1tfMHgyY2Y2M2EoMHhlMSldKT8nWycrXzB4NTZjZjZkKyddJzonW1xcXFx4MjcnK18weDU2Y2Y2ZCsnXFxcXHgyN10nOicnO319bGV0IF8weGNiNjI1NT1uZXcgXzB4NTYxMzBkKCk7ZnVuY3Rpb24gXzB4NGEyOTVhKF8weDUwZGIwMCxfMHg0NWRhYTUsXzB4YzVhYjJkLF8weDFmZDRiOCxfMHhmOTQzNWYsXzB4NTFhMDRmKXt2YXIgXzB4NDgwMWI2PV8weDUxMmEzNztsZXQgXzB4NDBkYjRhLF8weDFhMzUxNjt0cnl7XzB4MWEzNTE2PV8weDM5OTY3OCgpLF8weDQwZGI0YT1fMHg1ODZlYTRbXzB4NDVkYWE1XSwhXzB4NDBkYjRhfHxfMHgxYTM1MTYtXzB4NDBkYjRhWyd0cyddPjB4MWY0JiZfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTY2KV0mJl8weDQwZGI0YVtfMHg0ODAxYjYoMHgxNGIpXS9fMHg0MGRiNGFbJ2NvdW50J108MHg2ND8oXzB4NTg2ZWE0W18weDQ1ZGFhNV09XzB4NDBkYjRhPXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4MWEzNTE2fSxfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV09e30pOl8weDFhMzUxNi1fMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bJ3RzJ10+MHgzMiYmXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE2NildJiZfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bXzB4NDgwMWI2KDB4MTRiKV0vXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE2NildPDB4NjQmJihfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV09e30pO2xldCBfMHgxNmI5NDI9W10sXzB4MzdlMjA4PV8weDQwZGI0YVtfMHg0ODAxYjYoMHgxNDApXXx8XzB4NTg2ZWE0WydoaXRzJ11bXzB4NDgwMWI2KDB4MTQwKV0/XzB4MWIwNzE3Ol8weDE2YTIyMixfMHg0MjQ1ZTg9XzB4NDg4N2YwPT57dmFyIF8weDExZTJhYj1fMHg0ODAxYjY7bGV0IF8weDU0YjAzMz17fTtyZXR1cm4gXzB4NTRiMDMzW18weDExZTJhYigweDEyOSldPV8weDQ4ODdmMFsncHJvcHMnXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTMwKV09XzB4NDg4N2YwWydlbGVtZW50cyddLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxOTcpXT1fMHg0ODg3ZjBbXzB4MTFlMmFiKDB4MTk3KV0sXzB4NTRiMDMzW18weDExZTJhYigweDEzMildPV8weDQ4ODdmMFtfMHgxMWUyYWIoMHgxMzIpXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MWE3KV09XzB4NDg4N2YwW18weDExZTJhYigweDFhNyldLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMzQpXT1fMHg0ODg3ZjBbXzB4MTFlMmFiKDB4MTM0KV0sXzB4NTRiMDMzWydzb3J0UHJvcHMnXT0hMHgxLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMzkpXT0hXzB4NTRhODcwLF8weDU0YjAzM1tfMHgxMWUyYWIoMHhkOCldPTB4MSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTNhKV09MHgwLF8weDU0YjAzM1snZXhwSWQnXT1fMHgxMWUyYWIoMHhkMSksXzB4NTRiMDMzW18weDExZTJhYigweDE2ZCldPV8weDExZTJhYigweDE2NCksXzB4NTRiMDMzWydhdXRvRXhwYW5kJ109ITB4MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MWFkKV09W10sXzB4NTRiMDMzW18weDExZTJhYigweDE1NCldPTB4MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MWFiKV09ITB4MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTVmKV09MHgwLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxNjkpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHg1NGIwMzM7fTtmb3IodmFyIF8weDExZGY4Mj0weDA7XzB4MTFkZjgyPF8weGY5NDM1ZlsnbGVuZ3RoJ107XzB4MTFkZjgyKyspXzB4MTZiOTQyW18weDQ4MDFiNigweDFhNildKF8weGNiNjI1NVtfMHg0ODAxYjYoMHgxMjcpXSh7J3RpbWVOb2RlJzpfMHg1MGRiMDA9PT1fMHg0ODAxYjYoMHgxNGIpfHx2b2lkIDB4MH0sXzB4Zjk0MzVmW18weDExZGY4Ml0sXzB4NDI0NWU4KF8weDM3ZTIwOCkse30pKTtpZihfMHg1MGRiMDA9PT0ndHJhY2UnKXtsZXQgXzB4MjBmMDExPUVycm9yW18weDQ4MDFiNigweDEzMyldO3RyeXtFcnJvcltfMHg0ODAxYjYoMHgxMzMpXT0weDEvMHgwLF8weDE2Yjk0MltfMHg0ODAxYjYoMHgxYTYpXShfMHhjYjYyNTVbXzB4NDgwMWI2KDB4MTI3KV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpW18weDQ4MDFiNigweDE0NyldLF8weDQyNDVlOChfMHgzN2UyMDgpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yWydzdGFja1RyYWNlTGltaXQnXT1fMHgyMGYwMTE7fX1yZXR1cm57J21ldGhvZCc6XzB4NDgwMWI2KDB4MTEyKSwndmVyc2lvbic6XzB4NWRlYTYwLCdhcmdzJzpbeyd0cyc6XzB4YzVhYjJkLCdzZXNzaW9uJzpfMHgxZmQ0YjgsJ2FyZ3MnOl8weDE2Yjk0MiwnaWQnOl8weDQ1ZGFhNSwnY29udGV4dCc6XzB4NTFhMDRmfV19O31jYXRjaChfMHgxYzJlYmQpe3JldHVybnsnbWV0aG9kJzpfMHg0ODAxYjYoMHgxMTIpLCd2ZXJzaW9uJzpfMHg1ZGVhNjAsJ2FyZ3MnOlt7J3RzJzpfMHhjNWFiMmQsJ3Nlc3Npb24nOl8weDFmZDRiOCwnYXJncyc6W3sndHlwZSc6XzB4NDgwMWI2KDB4MWFhKSwnZXJyb3InOl8weDFjMmViZCYmXzB4MWMyZWJkW18weDQ4MDFiNigweDE5YildfV0sJ2lkJzpfMHg0NWRhYTUsJ2NvbnRleHQnOl8weDUxYTA0Zn1dfTt9ZmluYWxseXt0cnl7aWYoXzB4NDBkYjRhJiZfMHgxYTM1MTYpe2xldCBfMHgzOTZmOTY9XzB4Mzk5Njc4KCk7XzB4NDBkYjRhW18weDQ4MDFiNigweDE2NildKyssXzB4NDBkYjRhW18weDQ4MDFiNigweDE0YildKz1fMHgzZjVkMmQoXzB4MWEzNTE2LF8weDM5NmY5NiksXzB4NDBkYjRhWyd0cyddPV8weDM5NmY5NixfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bXzB4NDgwMWI2KDB4MTY2KV0rKyxfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bJ3RpbWUnXSs9XzB4M2Y1ZDJkKF8weDFhMzUxNixfMHgzOTZmOTYpLF8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVsndHMnXT1fMHgzOTZmOTYsKF8weDQwZGI0YVtfMHg0ODAxYjYoMHgxNjYpXT4weDMyfHxfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTRiKV0+MHg2NCkmJihfMHg0MGRiNGFbJ3JlZHVjZUxpbWl0cyddPSEweDApLChfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bXzB4NDgwMWI2KDB4MTY2KV0+MHgzZTh8fF8weDU4NmVhNFsnaGl0cyddWyd0aW1lJ10+MHgxMmMpJiYoXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE0MCldPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXTt9KShnbG9iYWxUaGlzLF8weDQzY2NiZigweGViKSxfMHg0M2NjYmYoMHgxYjEpLF8weDQzY2NiZigweDE2NyksXzB4NDNjY2JmKDB4MTdiKSwnMS4wLjAnLF8weDQzY2NiZigweGZmKSxfMHg0M2NjYmYoMHgxODUpLF8weDQzY2NiZigweDE4NykpO2Z1bmN0aW9uIF8weDU3NTAoKXt2YXIgXzB4NTFmY2YzPVsnc3RyaW5naWZ5JywnZGlzYWJsZWRMb2cnLCc2aVJ6dlFSJywncmVkdWNlTGltaXRzJywncG9ydCcsJ3NldHRlcicsJ3JlbG9hZCcsJ1N5bWJvbCcsJ19jbGVhbk5vZGUnLCd1cmwnLCdzdGFjaycsJ25hbicsJ19wX2xlbmd0aCcsJ1tvYmplY3RcXFxceDIwQXJyYXldJywndGltZScsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJ0J1ZmZlcicsJzM2VUdxS3Z4JywnX1N5bWJvbCcsJ2VsYXBzZWQnLCdfY29ubmVjdGluZycsJ3ZhbHVlT2YnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ2xlbmd0aCcsJ25vdycsJ2N1cnJlbnQnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ2JpZ2ludCcsJ19hZGRMb2FkTm9kZScsJ2Z1bmNOYW1lJywnY2xvc2UnLCdkYXRhJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdhbGxTdHJMZW5ndGgnLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywnMTkxMjQyOHBlVWtaUycsJ3R5cGUnLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywncm9vdF9leHAnLCc3MDU1M01rd29USScsJ2NvdW50JyxcXFwiL2hvbWUvYWRtaW5pc3RyYWRvci8udnNjb2RlLXNlcnZlci9leHRlbnNpb25zL3dhbGxhYnlqcy5jb25zb2xlLW5pbmphLTAuMC4xODIvbm9kZV9tb2R1bGVzXFxcIiwncGF0aFRvRmlsZVVSTCcsJ25vZGUnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCd3czovLycsJ2luZGV4T2YnLCdyb290RXhwcmVzc2lvbicsJzIxMDBUZG93YmEnLCdfcmVjb25uZWN0VGltZW91dCcsJzE3MTQ5NDVmY3BPT1MnLCdfY2FwSWZTdHJpbmcnLCdfYWRkUHJvcGVydHknLCdvbmVycm9yJywnX2lzVW5kZWZpbmVkJywnc3Vic3RyJywnRXJyb3InLCdfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ3NvcnQnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnLCcxNDlYYkVTakUnLCd3ZWJwYWNrJywnMjcyaVhPZ1dZJywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCdudWxsJywnam9pbicsJ19pc1NldCcsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnX3NvcnRQcm9wcycsJ19udW1iZXJSZWdFeHAnLCdtYXRjaCcsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJzYTFcXFwiLFxcXCIxMC4zMC4wLjgxXFxcIixcXFwiMTcyLjIwLjAuMVxcXCJdLCdyZWFkeVN0YXRlJywnJywnY2FsbCcsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJ2NvbnNvbGUnLCdob3N0JywnUE9TSVRJVkVfSU5GSU5JVFknLCd0ZXN0JywnaGl0cycsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcsJ19pc05lZ2F0aXZlWmVybycsJ2Jvb2xlYW4nLCdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0JywnX2hhc01hcE9uSXRzUGF0aCcsJ29iamVjdCcsJ19zZXROb2RlUXVlcnlQYXRoJywnd2FybicsJ3N0ckxlbmd0aCcsJ2Z1bmN0aW9uJywnX1dlYlNvY2tldENsYXNzJywnW29iamVjdFxcXFx4MjBEYXRlXScsJ21lc3NhZ2UnLCdfc29ja2V0Jywnb25jbG9zZScsJ2lzQXJyYXknLCczNzA0NjljTUtDTEInLCdpbmNsdWRlcycsJ0hUTUxBbGxDb2xsZWN0aW9uJywnX3VuZGVmaW5lZCcsJ2hhc093blByb3BlcnR5JywnOmxvZ1BvaW50SWQ6Jywnc2xpY2UnLCdwdXNoJywnYXV0b0V4cGFuZExpbWl0JywnX3JlZ0V4cFRvU3RyaW5nJywnZm9yRWFjaCcsJ3Vua25vd24nLCdyZXNvbHZlR2V0dGVycycsJ2FycmF5JywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ3Byb2Nlc3MnLCdiaW5kJywnbnVtYmVyJywnMzQ2NDMnLCdocnRpbWUnLCd0b0xvd2VyQ2FzZScsJ3ZhbHVlJywndW5yZWYnLCdXZWJTb2NrZXQnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ19pc1ByaW1pdGl2ZVR5cGUnLCdcXFxceDIwYnJvd3NlcicsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdkZWZhdWx0JywnX2hhc1NldE9uSXRzUGF0aCcsJ19ibGFja2xpc3RlZFByb3BlcnR5JywnbWFwJywnX2RhdGVUb1N0cmluZycsJ19pc0FycmF5JywnU2V0Jywncm9vdF9leHBfaWQnLCdfcHJvcGVydHlOYW1lJywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdfaW5Ccm93c2VyJywnMTQ2NDU1OGJ3Q0l2bCcsJ3BlcmZfaG9va3MnLCdwYXJlbnQnLCdkZXB0aCcsJ2FzdHJvJywnX29iamVjdFRvU3RyaW5nJywnbnV4dCcsJ2dldFByb3RvdHlwZU9mJywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ2F1dG9FeHBhbmQnLCdjb25zdHJ1Y3RvcicsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ19xdW90ZWRSZWdFeHAnLCdvbm9wZW4nLCdkYXRlJywnbm9kZU1vZHVsZXMnLCduYW1lJywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCdfc2V0Tm9kZUlkJywnaW5kZXgnLCdjYXBwZWRFbGVtZW50cycsJ3BhcnNlJywnbG9jYWxob3N0Jywnc3RyaW5nJywncGVyZm9ybWFuY2UnLCdzeW1ib2wnLCdsb2NhdGlvbicsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnX3NldE5vZGVMYWJlbCcsJ19rZXlTdHJSZWdFeHAnLCdfaXNNYXAnLCdnbG9iYWwnLCdTdHJpbmcnLCc0R0tiVVpyJywncHJvdG90eXBlJywnc2VuZCcsJ19XZWJTb2NrZXQnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ1tvYmplY3RcXFxceDIwU2V0XScsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ2NhcHBlZFByb3BzJywnMTY4OTI1NjQyMTU1MicsJ19wcm9wZXJ0eUFjY2Vzc29yJywnX2NvbnNvbGVfbmluamEnLCdORUdBVElWRV9JTkZJTklUWScsJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5JywnX3BfJywncG9zaXRpdmVJbmZpbml0eScsJ3BvcCcsJ3RpbWVTdGFtcCcsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJ19zZXROb2RlUGVybWlzc2lvbnMnLCdlcnJvcicsJ19wcm9wZXJ0eScsJ3ZlcnNpb25zJywnX0hUTUxBbGxDb2xsZWN0aW9uJywnNjIxNDBmQnVkeFUnLCdwYXRoJywnZ2V0V2ViU29ja2V0Q2xhc3MnLCdjYXBwZWQnLCdsb2cnLCdtZXRob2QnLCdkaXNhYmxlZFRyYWNlJywndHJhY2UnLCdhcmd1bWVudFJlc29sdXRpb25FcnJvcicsJ193cycsJ1xcXFx4MjBzZXJ2ZXInLCd1bnNoaWZ0JywnMTBNb2V5aUonLCd0aW1lRW5kJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCdfYWxsb3dlZFRvU2VuZCcsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnX19lcycrJ01vZHVsZScsJ3VuZGVmaW5lZCcsJ3JlcGxhY2UnLCd0b1N0cmluZycsJ29ubWVzc2FnZScsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JywnZW51bWVyYWJsZScsJ3NlcmlhbGl6ZScsJ19wX25hbWUnLCdwcm9wcycsJ3RoZW4nLCdCb29sZWFuJywnaG9zdG5hbWUnLCdfY29ubmVjdGVkJywnMjMzNHlrRVN4SCcsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ2VsZW1lbnRzJywnLi4uJywndG90YWxTdHJMZW5ndGgnLCdzdGFja1RyYWNlTGltaXQnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0JywnW29iamVjdFxcXFx4MjBNYXBdJywnX3NlbmRFcnJvck1lc3NhZ2UnLCdNYXAnLCdub0Z1bmN0aW9ucycsJ2xldmVsJywnX3R5cGUnLCd3cy9pbmRleC5qcyddO18weDU3NTA9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4NTFmY2YzO307cmV0dXJuIF8weDU3NTAoKTt9XCIpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLzwvc2NyaXB0PlxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBkZXBhcnRtZW50QXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcIi93ZWIvcm9sZVwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlcGFydG1lbnRBcGk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGN1bHR1cmFIb3VzZUFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogXCIvd2ViL3VzZXJcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjdWx0dXJhSG91c2VBcGk7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdmVyaWZ5U2Vzc2lvbkZpbmlzaGVkOiAoc3RhdHVzLCBjb2RlID0gMjAwKSA9PiB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDQ5ZWNhOWMwXzBgLHN0YXR1cykpO1xuICAgICAgICBpZiAoc3RhdHVzID09IDQxOSB8fCBzdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGA0OWVjYTljMF8xYCxcIkxcIiArIHN0YXR1cykpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG59O1xuLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO3ZhciBfMHg0M2NjYmY9XzB4MjE1MjsoZnVuY3Rpb24oXzB4MjVjOThmLF8weDEwZWQxZCl7dmFyIF8weDUyMTQ0ZT1fMHgyMTUyLF8weDVhZmFiZD1fMHgyNWM5OGYoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDQ0NTdmMj0tcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTdhKSkvMHgxKigtcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTJlKSkvMHgyKSstcGFyc2VJbnQoXzB4NTIxNDRlKDB4ZDUpKS8weDMqKHBhcnNlSW50KF8weDUyMTQ0ZSgweGY2KSkvMHg0KStwYXJzZUludChfMHg1MjE0NGUoMHgxNzApKS8weDUqKC1wYXJzZUludChfMHg1MjE0NGUoMHgxM2YpKS8weDYpKy1wYXJzZUludChfMHg1MjE0NGUoMHgxNjUpKS8weDcqKC1wYXJzZUludChfMHg1MjE0NGUoMHgxN2MpKS8weDgpKy1wYXJzZUludChfMHg1MjE0NGUoMHgxNjEpKS8weDkqKHBhcnNlSW50KF8weDUyMTQ0ZSgweDExYSkpLzB4YSkrLXBhcnNlSW50KF8weDUyMTQ0ZSgweDE5ZikpLzB4YiooLXBhcnNlSW50KF8weDUyMTQ0ZSgweDE0ZikpLzB4YykrcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTBlKSkvMHhkKihwYXJzZUludChfMHg1MjE0NGUoMHgxNmUpKS8weGUpO2lmKF8weDQ0NTdmMj09PV8weDEwZWQxZClicmVhaztlbHNlIF8weDVhZmFiZFsncHVzaCddKF8weDVhZmFiZFsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4MmY5NjJiKXtfMHg1YWZhYmRbJ3B1c2gnXShfMHg1YWZhYmRbJ3NoaWZ0J10oKSk7fX19KF8weDU3NTAsMHg0NzA3YikpO3ZhciB1ZT1PYmplY3RbJ2NyZWF0ZSddLHRlPU9iamVjdFsnZGVmaW5lUHJvcGVydHknXSxoZT1PYmplY3RbXzB4NDNjY2JmKDB4MTJmKV0sbGU9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eU5hbWVzJ10sZmU9T2JqZWN0W18weDQzY2NiZigweGRjKV0sX2U9T2JqZWN0W18weDQzY2NiZigweGY3KV1bXzB4NDNjY2JmKDB4MWEzKV0scGU9KF8weDMyZGQzZSxfMHgxYTEwMjQsXzB4NDk4Njk0LF8weDQ0YTNiMyk9Pnt2YXIgXzB4NGYyZmIzPV8weDQzY2NiZjtpZihfMHgxYTEwMjQmJnR5cGVvZiBfMHgxYTEwMjQ9PV8weDRmMmZiMygweDE5NCl8fHR5cGVvZiBfMHgxYTEwMjQ9PV8weDRmMmZiMygweDE5OCkpe2ZvcihsZXQgXzB4MzMzNzBhIG9mIGxlKF8weDFhMTAyNCkpIV9lW18weDRmMmZiMygweDE4OCldKF8weDMyZGQzZSxfMHgzMzM3MGEpJiZfMHgzMzM3MGEhPT1fMHg0OTg2OTQmJnRlKF8weDMyZGQzZSxfMHgzMzM3MGEseydnZXQnOigpPT5fMHgxYTEwMjRbXzB4MzMzNzBhXSwnZW51bWVyYWJsZSc6IShfMHg0NGEzYjM9aGUoXzB4MWExMDI0LF8weDMzMzcwYSkpfHxfMHg0NGEzYjNbXzB4NGYyZmIzKDB4MTI2KV19KTt9cmV0dXJuIF8weDMyZGQzZTt9LG5lPShfMHg1MDk0ZTksXzB4MjcxMTI4LF8weDM2NWNlZSk9PihfMHgzNjVjZWU9XzB4NTA5NGU5IT1udWxsP3VlKGZlKF8weDUwOTRlOSkpOnt9LHBlKF8weDI3MTEyOHx8IV8weDUwOTRlOXx8IV8weDUwOTRlOVtfMHg0M2NjYmYoMHgxMjApXT90ZShfMHgzNjVjZWUsXzB4NDNjY2JmKDB4Y2EpLHsndmFsdWUnOl8weDUwOTRlOSwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDM2NWNlZSxfMHg1MDk0ZTkpKSxRPWNsYXNze2NvbnN0cnVjdG9yKF8weDQ5ZDJmMCxfMHgzNDYyYmYsXzB4M2JmODdlLF8weDNjNWJhMyl7dmFyIF8weGY3NTEwZD1fMHg0M2NjYmY7dGhpc1tfMHhmNzUxMGQoMHhmNCldPV8weDQ5ZDJmMCx0aGlzW18weGY3NTEwZCgweDE4YildPV8weDM0NjJiZix0aGlzW18weGY3NTEwZCgweDE0MSldPV8weDNiZjg3ZSx0aGlzW18weGY3NTEwZCgweGU0KV09XzB4M2M1YmEzLHRoaXNbJ19hbGxvd2VkVG9TZW5kJ109ITB4MCx0aGlzW18weGY3NTEwZCgweDE3NyldPSEweDAsdGhpc1tfMHhmNzUxMGQoMHgxMmQpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzW18weGY3NTEwZCgweGQ0KV09ISF0aGlzWydnbG9iYWwnXVtfMHhmNzUxMGQoMHhjNCldLHRoaXNbXzB4Zjc1MTBkKDB4MTk5KV09bnVsbCx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPTB4MCx0aGlzW18weGY3NTEwZCgweDE0YyldPTB4MTQsdGhpc1snX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnXT1fMHhmNzUxMGQoMHgxOTIpLHRoaXNbXzB4Zjc1MTBkKDB4MTM3KV09KHRoaXNbXzB4Zjc1MTBkKDB4ZDQpXT9fMHhmNzUxMGQoMHgxNWUpOl8weGY3NTEwZCgweGZiKSkrdGhpc1tfMHhmNzUxMGQoMHgxODEpXTt9YXN5bmNbXzB4NDNjY2JmKDB4MTEwKV0oKXt2YXIgXzB4MmI1MjA1PV8weDQzY2NiZjtpZih0aGlzW18weDJiNTIwNSgweDE5OSldKXJldHVybiB0aGlzW18weDJiNTIwNSgweDE5OSldO2xldCBfMHgzODlhNjg7aWYodGhpc1tfMHgyYjUyMDUoMHhkNCldKV8weDM4OWE2OD10aGlzW18weDJiNTIwNSgweGY0KV1bJ1dlYlNvY2tldCddO2Vsc2V7aWYodGhpc1tfMHgyYjUyMDUoMHhmNCldW18weDJiNTIwNSgweDFhZSldPy5bXzB4MmI1MjA1KDB4ZjkpXSlfMHgzODlhNjg9dGhpc1tfMHgyYjUyMDUoMHhmNCldW18weDJiNTIwNSgweDFhZSldPy5bXzB4MmI1MjA1KDB4ZjkpXTtlbHNlIHRyeXtsZXQgXzB4ODA0NDcyPWF3YWl0IGltcG9ydChfMHgyYjUyMDUoMHgxMGYpKTtfMHgzODlhNjg9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KF8weDJiNTIwNSgweDE0NikpKVtfMHgyYjUyMDUoMHgxNjgpXShfMHg4MDQ0NzJbXzB4MmI1MjA1KDB4MTdmKV0odGhpc1snbm9kZU1vZHVsZXMnXSxfMHgyYjUyMDUoMHgxM2MpKSlbXzB4MmI1MjA1KDB4MTIzKV0oKSkpW18weDJiNTIwNSgweGNhKV07fWNhdGNoe3RyeXtfMHgzODlhNjg9cmVxdWlyZShyZXF1aXJlKF8weDJiNTIwNSgweDEwZikpW18weDJiNTIwNSgweDE3ZildKHRoaXNbXzB4MmI1MjA1KDB4ZTQpXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHgyYjUyMDUoMHgxNzkpKTt9fX1yZXR1cm4gdGhpc1tfMHgyYjUyMDUoMHgxOTkpXT1fMHgzODlhNjgsXzB4Mzg5YTY4O31bJ19jb25uZWN0VG9Ib3N0Tm93J10oKXt2YXIgXzB4NThmYjI2PV8weDQzY2NiZjt0aGlzW18weDU4ZmIyNigweDE1MildfHx0aGlzW18weDU4ZmIyNigweDEyZCldfHx0aGlzW18weDU4ZmIyNigweDE3ZCldPj10aGlzW18weDU4ZmIyNigweDE0YyldfHwodGhpc1tfMHg1OGZiMjYoMHgxNzcpXT0hMHgxLHRoaXNbXzB4NThmYjI2KDB4MTUyKV09ITB4MCx0aGlzW18weDU4ZmIyNigweDE3ZCldKyssdGhpc1snX3dzJ109bmV3IFByb21pc2UoKF8weDFmZjEyOCxfMHg1MTUwN2YpPT57dmFyIF8weDFiYTg4ZD1fMHg1OGZiMjY7dGhpc1tfMHgxYmE4OGQoMHgxMTApXSgpW18weDFiYTg4ZCgweDEyYSldKF8weDFkYjg1Mz0+e3ZhciBfMHg1MmI1MTE9XzB4MWJhODhkO2xldCBfMHgzMTAyMDY9bmV3IF8weDFkYjg1MyhfMHg1MmI1MTEoMHgxNmIpK3RoaXNbJ2hvc3QnXSsnOicrdGhpc1tfMHg1MmI1MTEoMHgxNDEpXSk7XzB4MzEwMjA2W18weDUyYjUxMSgweDE3MyldPSgpPT57dmFyIF8weDU4NzI5MT1fMHg1MmI1MTE7dGhpc1tfMHg1ODcyOTEoMHgxMWQpXT0hMHgxLHRoaXNbXzB4NTg3MjkxKDB4ZTYpXShfMHgzMTAyMDYpLHRoaXNbXzB4NTg3MjkxKDB4MTAzKV0oKSxfMHg1MTUwN2YobmV3IEVycm9yKCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJykpO30sXzB4MzEwMjA2W18weDUyYjUxMSgweGUyKV09KCk9Pnt2YXIgXzB4NTc5NWY2PV8weDUyYjUxMTt0aGlzWydfaW5Ccm93c2VyJ118fF8weDMxMDIwNltfMHg1Nzk1ZjYoMHgxOWMpXSYmXzB4MzEwMjA2Wydfc29ja2V0J11bXzB4NTc5NWY2KDB4YzMpXSYmXzB4MzEwMjA2W18weDU3OTVmNigweDE5YyldW18weDU3OTVmNigweGMzKV0oKSxfMHgxZmYxMjgoXzB4MzEwMjA2KTt9LF8weDMxMDIwNltfMHg1MmI1MTEoMHgxOWQpXT0oKT0+e3ZhciBfMHg1NDkwZTU9XzB4NTJiNTExO3RoaXNbXzB4NTQ5MGU1KDB4MTc3KV09ITB4MCx0aGlzW18weDU0OTBlNSgweGU2KV0oXzB4MzEwMjA2KSx0aGlzW18weDU0OTBlNSgweDEwMyldKCk7fSxfMHgzMTAyMDZbXzB4NTJiNTExKDB4MTI0KV09XzB4MjFlMTk2PT57dmFyIF8weDM4YmVlMz1fMHg1MmI1MTE7dHJ5e18weDIxZTE5NiYmXzB4MjFlMTk2W18weDM4YmVlMygweDE1ZCldJiZ0aGlzW18weDM4YmVlMygweGQ0KV0mJkpTT05bXzB4MzhiZWUzKDB4ZWEpXShfMHgyMWUxOTZbXzB4MzhiZWUzKDB4MTVkKV0pW18weDM4YmVlMygweDExMyldPT09J3JlbG9hZCcmJnRoaXNbXzB4MzhiZWUzKDB4ZjQpXVtfMHgzOGJlZTMoMHhlZildW18weDM4YmVlMygweDE0MyldKCk7fWNhdGNoe319O30pW18weDFiYTg4ZCgweDEyYSldKF8weDI3MzU2MT0+KHRoaXNbXzB4MWJhODhkKDB4MTJkKV09ITB4MCx0aGlzW18weDFiYTg4ZCgweDE1MildPSEweDEsdGhpc1tfMHgxYmE4OGQoMHgxNzcpXT0hMHgxLHRoaXNbXzB4MWJhODhkKDB4MTFkKV09ITB4MCx0aGlzW18weDFiYTg4ZCgweDE3ZCldPTB4MCxfMHgyNzM1NjEpKVsnY2F0Y2gnXShfMHgxMWQ1YWQ9Pih0aGlzWydfY29ubmVjdGVkJ109ITB4MSx0aGlzW18weDFiYTg4ZCgweDE1MildPSEweDEsY29uc29sZVsnd2FybiddKF8weDFiYTg4ZCgweDExYykrdGhpc1tfMHgxYmE4OGQoMHgxODEpXSksXzB4NTE1MDdmKG5ldyBFcnJvcihfMHgxYmE4OGQoMHgxOGYpKyhfMHgxMWQ1YWQmJl8weDExZDVhZFsnbWVzc2FnZSddKSkpKSk7fSkpO31bJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4NTlmZDFlKXt2YXIgXzB4NDY4ZmI9XzB4NDNjY2JmO3RoaXNbXzB4NDY4ZmIoMHgxMmQpXT0hMHgxLHRoaXNbXzB4NDY4ZmIoMHgxNTIpXT0hMHgxO3RyeXtfMHg1OWZkMWVbJ29uY2xvc2UnXT1udWxsLF8weDU5ZmQxZVtfMHg0NjhmYigweDE3MyldPW51bGwsXzB4NTlmZDFlW18weDQ2OGZiKDB4ZTIpXT1udWxsO31jYXRjaHt9dHJ5e18weDU5ZmQxZVtfMHg0NjhmYigweDE4NildPDB4MiYmXzB4NTlmZDFlW18weDQ2OGZiKDB4MTVjKV0oKTt9Y2F0Y2h7fX1bXzB4NDNjY2JmKDB4MTAzKV0oKXt2YXIgXzB4MmM2ZDRmPV8weDQzY2NiZjtjbGVhclRpbWVvdXQodGhpc1tfMHgyYzZkNGYoMHgxNmYpXSksISh0aGlzW18weDJjNmQ0ZigweDE3ZCldPj10aGlzW18weDJjNmQ0ZigweDE0YyldKSYmKHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J109c2V0VGltZW91dCgoKT0+e3ZhciBfMHgxZmZiZjk9XzB4MmM2ZDRmO3RoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1tfMHgxZmZiZjkoMHgxNTIpXXx8KHRoaXNbXzB4MWZmYmY5KDB4ZDMpXSgpLHRoaXNbJ193cyddPy5bJ2NhdGNoJ10oKCk9PnRoaXNbXzB4MWZmYmY5KDB4MTAzKV0oKSkpO30sMHgxZjQpLHRoaXNbXzB4MmM2ZDRmKDB4MTZmKV1bJ3VucmVmJ10mJnRoaXNbXzB4MmM2ZDRmKDB4MTZmKV1bXzB4MmM2ZDRmKDB4YzMpXSgpKTt9YXN5bmNbXzB4NDNjY2JmKDB4ZjgpXShfMHgyMzZkMmMpe3ZhciBfMHgxYjI0OTc9XzB4NDNjY2JmO3RyeXtpZighdGhpc1tfMHgxYjI0OTcoMHgxMWQpXSlyZXR1cm47dGhpc1tfMHgxYjI0OTcoMHgxNzcpXSYmdGhpc1tfMHgxYjI0OTcoMHhkMyldKCksKGF3YWl0IHRoaXNbXzB4MWIyNDk3KDB4MTE3KV0pW18weDFiMjQ5NygweGY4KV0oSlNPTltfMHgxYjI0OTcoMHgxM2QpXShfMHgyMzZkMmMpKTt9Y2F0Y2goXzB4M2FkOTUzKXtjb25zb2xlW18weDFiMjQ5NygweDE5NildKHRoaXNbXzB4MWIyNDk3KDB4MTM3KV0rJzpcXFxceDIwJysoXzB4M2FkOTUzJiZfMHgzYWQ5NTNbXzB4MWIyNDk3KDB4MTliKV0pKSx0aGlzW18weDFiMjQ5NygweDExZCldPSEweDEsdGhpc1tfMHgxYjI0OTcoMHgxMDMpXSgpO319fTtmdW5jdGlvbiBfMHgyMTUyKF8weDRkYjQzMCxfMHgxMWE2YTgpe3ZhciBfMHg1NzUwNTQ9XzB4NTc1MCgpO3JldHVybiBfMHgyMTUyPWZ1bmN0aW9uKF8weDIxNTI5NyxfMHhiNDVmZWYpe18weDIxNTI5Nz1fMHgyMTUyOTctMHhjMzt2YXIgXzB4NDUyMDI0PV8weDU3NTA1NFtfMHgyMTUyOTddO3JldHVybiBfMHg0NTIwMjQ7fSxfMHgyMTUyKF8weDRkYjQzMCxfMHgxMWE2YTgpO31mdW5jdGlvbiBWKF8weGM3NjBiNixfMHgzODBhNDYsXzB4NTA4NzE2LF8weDVlNmI5YyxfMHg1ZTc2ZDUpe3ZhciBfMHgzOTc3ZjE9XzB4NDNjY2JmO2xldCBfMHgxZDlkODM9XzB4NTA4NzE2WydzcGxpdCddKCcsJylbXzB4Mzk3N2YxKDB4Y2QpXShfMHgzNjQ1YWI9Pnt2YXIgXzB4YzEyNzQzPV8weDM5NzdmMTt0cnl7XzB4Yzc2MGI2W18weGMxMjc0MygweGRkKV18fCgoXzB4NWU3NmQ1PT09J25leHQuanMnfHxfMHg1ZTc2ZDU9PT0ncmVtaXgnfHxfMHg1ZTc2ZDU9PT1fMHhjMTI3NDMoMHhkOSkpJiYoXzB4NWU3NmQ1Kz1fMHhjNzYwYjZbXzB4YzEyNzQzKDB4MWFlKV0/LlsndmVyc2lvbnMnXT8uW18weGMxMjc0MygweDE2OSldP18weGMxMjc0MygweDExOCk6XzB4YzEyNzQzKDB4YzgpKSxfMHhjNzYwYjZbXzB4YzEyNzQzKDB4ZGQpXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4NWU3NmQ1fSk7bGV0IF8weDFjMTJiZj1uZXcgUShfMHhjNzYwYjYsXzB4MzgwYTQ2LF8weDM2NDVhYixfMHg1ZTZiOWMpO3JldHVybiBfMHgxYzEyYmZbXzB4YzEyNzQzKDB4ZjgpXVtfMHhjMTI3NDMoMHgxYWYpXShfMHgxYzEyYmYpO31jYXRjaChfMHhhMWE0Y2Upe3JldHVybiBjb25zb2xlW18weGMxMjc0MygweDE5NildKF8weGMxMjc0MygweDEyNSksXzB4YTFhNGNlJiZfMHhhMWE0Y2VbXzB4YzEyNzQzKDB4MTliKV0pLCgpPT57fTt9fSk7cmV0dXJuIF8weDUzOGFjNj0+XzB4MWQ5ZDgzW18weDM5NzdmMSgweDFhOSldKF8weDIxODQ4OD0+XzB4MjE4NDg4KF8weDUzOGFjNikpO31mdW5jdGlvbiBIKF8weDMyYWU4NSl7dmFyIF8weDExYTNiNz1fMHg0M2NjYmY7bGV0IF8weDFmM2I2ND1mdW5jdGlvbihfMHgxNDlkYTEsXzB4MWNhYzRiKXtyZXR1cm4gXzB4MWNhYzRiLV8weDE0OWRhMTt9LF8weDIxYWFjODtpZihfMHgzMmFlODVbXzB4MTFhM2I3KDB4ZWQpXSlfMHgyMWFhYzg9ZnVuY3Rpb24oKXt2YXIgXzB4NmU0NDIyPV8weDExYTNiNztyZXR1cm4gXzB4MzJhZTg1W18weDZlNDQyMigweGVkKV1bJ25vdyddKCk7fTtlbHNle2lmKF8weDMyYWU4NVsncHJvY2VzcyddJiZfMHgzMmFlODVbXzB4MTFhM2I3KDB4MWFlKV1bJ2hydGltZSddKV8weDIxYWFjOD1mdW5jdGlvbigpe3ZhciBfMHg0ZjcyNDA9XzB4MTFhM2I3O3JldHVybiBfMHgzMmFlODVbXzB4NGY3MjQwKDB4MWFlKV1bXzB4NGY3MjQwKDB4MWIyKV0oKTt9LF8weDFmM2I2ND1mdW5jdGlvbihfMHg2M2NkNDEsXzB4OTNlYTg2KXtyZXR1cm4gMHgzZTgqKF8weDkzZWE4NlsweDBdLV8weDYzY2Q0MVsweDBdKSsoXzB4OTNlYTg2WzB4MV0tXzB4NjNjZDQxWzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDI4ZDJhZH09cmVxdWlyZShfMHgxMWEzYjcoMHhkNikpO18weDIxYWFjOD1mdW5jdGlvbigpe3ZhciBfMHg0YWE2NWI9XzB4MTFhM2I3O3JldHVybiBfMHgyOGQyYWRbXzB4NGFhNjViKDB4MTU2KV0oKTt9O31jYXRjaHtfMHgyMWFhYzg9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHgxZjNiNjQsJ3RpbWVTdGFtcCc6XzB4MjFhYWM4LCdub3cnOigpPT5EYXRlW18weDExYTNiNygweDE1NildKCl9O31mdW5jdGlvbiBYKF8weDQ3MGZkZSxfMHgxMDY1NDAsXzB4NGI3NDYzKXt2YXIgXzB4MjNlMmJkPV8weDQzY2NiZjtpZihfMHg0NzBmZGVbXzB4MjNlMmJkKDB4MTFlKV0hPT12b2lkIDB4MClyZXR1cm4gXzB4NDcwZmRlW18weDIzZTJiZCgweDExZSldO2xldCBfMHgxNDc4ZmI9XzB4NDcwZmRlW18weDIzZTJiZCgweDFhZSldPy5bXzB4MjNlMmJkKDB4MTBjKV0/Llsnbm9kZSddO3JldHVybiBfMHgxNDc4ZmImJl8weDRiNzQ2Mz09PV8weDIzZTJiZCgweGRiKT9fMHg0NzBmZGVbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddPSEweDE6XzB4NDcwZmRlW18weDIzZTJiZCgweDExZSldPV8weDE0NzhmYnx8IV8weDEwNjU0MHx8XzB4NDcwZmRlW18weDIzZTJiZCgweGVmKV0/LltfMHgyM2UyYmQoMHgxMmMpXSYmXzB4MTA2NTQwW18weDIzZTJiZCgweDFhMCldKF8weDQ3MGZkZVsnbG9jYXRpb24nXVsnaG9zdG5hbWUnXSksXzB4NDcwZmRlW18weDIzZTJiZCgweDExZSldO30oKF8weDE0YThjYyxfMHgzNDliNmMsXzB4M2E5ZDRlLF8weDRiYmFlMixfMHgxNmYxNmMsXzB4NWRlYTYwLF8weDNlN2ZhYSxfMHgzOGNiZTQsXzB4NTRhODcwKT0+e3ZhciBfMHg1MTJhMzc9XzB4NDNjY2JmO2lmKF8weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXSlyZXR1cm4gXzB4MTRhOGNjW18weDUxMmEzNygweDEwMSldO2lmKCFYKF8weDE0YThjYyxfMHgzOGNiZTQsXzB4MTZmMTZjKSlyZXR1cm4gXzB4MTRhOGNjW18weDUxMmEzNygweDEwMSldPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHgxNGE4Y2NbJ19jb25zb2xlX25pbmphJ107bGV0IF8weDE2YTIyMj17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHgxYjA3MTc9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfSxfMHgzZmYyMjI9SChfMHgxNGE4Y2MpLF8weDNmNWQyZD1fMHgzZmYyMjJbXzB4NTEyYTM3KDB4MTUxKV0sXzB4Mzk5Njc4PV8weDNmZjIyMltfMHg1MTJhMzcoMHgxMDcpXSxfMHg0YjlhNjE9XzB4M2ZmMjIyW18weDUxMmEzNygweDE1NildLF8weDU4NmVhND17J2hpdHMnOnt9LCd0cyc6e319LF8weDU3Y2Y4Nj1fMHgyZjk4OTk9PntfMHg1ODZlYTRbJ3RzJ11bXzB4MmY5ODk5XT1fMHgzOTk2NzgoKTt9LF8weDUwOWFhYz0oXzB4ZjgyZDNhLF8weDI3NzQ0Nik9Pnt2YXIgXzB4MzRiMmE4PV8weDUxMmEzNztsZXQgXzB4MzJhOGIzPV8weDU4NmVhNFsndHMnXVtfMHgyNzc0NDZdO2lmKGRlbGV0ZSBfMHg1ODZlYTRbJ3RzJ11bXzB4Mjc3NDQ2XSxfMHgzMmE4YjMpe2xldCBfMHg0ZmI3Mjk9XzB4M2Y1ZDJkKF8weDMyYThiMyxfMHgzOTk2NzgoKSk7XzB4MTcyYzc1KF8weDRhMjk1YShfMHgzNGIyYTgoMHgxNGIpLF8weGY4MmQzYSxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsW18weDRmYjcyOV0sXzB4Mjc3NDQ2KSk7fX0sXzB4N2U2MWU2PV8weDMwMDQ3YT0+XzB4NThkYzg0PT57dmFyIF8weDUyZGMzZT1fMHg1MTJhMzc7dHJ5e18weDU3Y2Y4NihfMHg1OGRjODQpLF8weDMwMDQ3YShfMHg1OGRjODQpO31maW5hbGx5e18weDE0YThjY1tfMHg1MmRjM2UoMHgxOGEpXVtfMHg1MmRjM2UoMHgxNGIpXT1fMHgzMDA0N2E7fX0sXzB4MjBmNTYxPV8weDc0ZWJkYz0+XzB4MTMwOTE2PT57dmFyIF8weDIxMzczNj1fMHg1MTJhMzc7dHJ5e2xldCBbXzB4MjdmYWVmLF8weDJhZjYyNV09XzB4MTMwOTE2WydzcGxpdCddKF8weDIxMzczNigweDFhNCkpO18weDUwOWFhYyhfMHgyYWY2MjUsXzB4MjdmYWVmKSxfMHg3NGViZGMoXzB4MjdmYWVmKTt9ZmluYWxseXtfMHgxNGE4Y2NbXzB4MjEzNzM2KDB4MThhKV1bJ3RpbWVFbmQnXT1fMHg3NGViZGM7fX07XzB4MTRhOGNjW18weDUxMmEzNygweDEwMSldPXsnY29uc29sZUxvZyc6KF8weGJlZmYxYixfMHgzZTI2YjUpPT57dmFyIF8weGEyNTZmMT1fMHg1MTJhMzc7XzB4MTRhOGNjW18weGEyNTZmMSgweDE4YSldWydsb2cnXVtfMHhhMjU2ZjEoMHhlNSldIT09XzB4YTI1NmYxKDB4MTNlKSYmXzB4MTcyYzc1KF8weDRhMjk1YSgnbG9nJyxfMHhiZWZmMWIsXzB4NGI5YTYxKCksXzB4MmU5NzEzLF8weDNlMjZiNSkpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDU4M2JhNyxfMHgyYzI5NTApPT57dmFyIF8weDFjN2Q4Yj1fMHg1MTJhMzc7XzB4MTRhOGNjW18weDFjN2Q4YigweDE4YSldW18weDFjN2Q4YigweDExMildW18weDFjN2Q4YigweGU1KV0hPT1fMHgxYzdkOGIoMHgxMTQpJiZfMHgxNzJjNzUoXzB4NGEyOTVhKF8weDFjN2Q4YigweDExNSksXzB4NTgzYmE3LF8weDRiOWE2MSgpLF8weDJlOTcxMyxfMHgyYzI5NTApKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4OTM2YjJiPV8weDUxMmEzNztfMHgxNGE4Y2NbXzB4OTM2YjJiKDB4MThhKV1bXzB4OTM2YjJiKDB4MTRiKV09XzB4N2U2MWU2KF8weDE0YThjY1tfMHg5MzZiMmIoMHgxOGEpXVtfMHg5MzZiMmIoMHgxNGIpXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDI1YzZjND1fMHg1MTJhMzc7XzB4MTRhOGNjWydjb25zb2xlJ11bXzB4MjVjNmM0KDB4MTFiKV09XzB4MjBmNTYxKF8weDE0YThjY1tfMHgyNWM2YzQoMHgxOGEpXVtfMHgyNWM2YzQoMHgxMWIpXSk7fSwnYXV0b0xvZyc6KF8weDQ5ZGU3MyxfMHg0NjRhNDcpPT57dmFyIF8weDRmZjQ5Yz1fMHg1MTJhMzc7XzB4MTcyYzc1KF8weDRhMjk1YShfMHg0ZmY0OWMoMHgxMTIpLF8weDQ2NGE0NyxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsW18weDQ5ZGU3M10pKTt9LCdhdXRvTG9nTWFueSc6KF8weDRkZmQwNCxfMHgxY2QzZGQpPT57dmFyIF8weDIwOWMwYz1fMHg1MTJhMzc7XzB4MTcyYzc1KF8weDRhMjk1YShfMHgyMDljMGMoMHgxMTIpLF8weDRkZmQwNCxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsXzB4MWNkM2RkKSk7fSwnYXV0b1RyYWNlJzooXzB4MTE1MDc0LF8weDhmZmRhMSk9Pnt2YXIgXzB4ZDQzMGE4PV8weDUxMmEzNztfMHgxNzJjNzUoXzB4NGEyOTVhKF8weGQ0MzBhOCgweDExNSksXzB4OGZmZGExLF8weDRiOWE2MSgpLF8weDJlOTcxMyxbXzB4MTE1MDc0XSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHg1ODc2NjAsXzB4MTFhMGI5KT0+e3ZhciBfMHg1OWNiNDE9XzB4NTEyYTM3O18weDE3MmM3NShfMHg0YTI5NWEoXzB4NTljYjQxKDB4MTE1KSxfMHg1ODc2NjAsXzB4NGI5YTYxKCksXzB4MmU5NzEzLF8weDExYTBiOSkpO30sJ2F1dG9UaW1lJzooXzB4NWU2Zjg4LF8weDJiOGVhNCxfMHg2MDNlYmYpPT57XzB4NTdjZjg2KF8weDYwM2ViZik7fSwnYXV0b1RpbWVFbmQnOihfMHgzMTBlZWUsXzB4MmI1NDU5LF8weDI4NWM2Myk9PntfMHg1MDlhYWMoXzB4MmI1NDU5LF8weDI4NWM2Myk7fX07bGV0IF8weDE3MmM3NT1WKF8weDE0YThjYyxfMHgzNDliNmMsXzB4M2E5ZDRlLF8weDRiYmFlMixfMHgxNmYxNmMpLF8weDJlOTcxMz1fMHgxNGE4Y2NbJ19jb25zb2xlX25pbmphX3Nlc3Npb24nXTtjbGFzcyBfMHg1NjEzMGR7Y29uc3RydWN0b3IoKXt2YXIgXzB4NDBmMTE0PV8weDUxMmEzNzt0aGlzW18weDQwZjExNCgweGYyKV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDQwZjExNCgweDE4MyldPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHg0MGYxMTQoMHhlMSldPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbJ191bmRlZmluZWQnXT1fMHgxNGE4Y2NbXzB4NDBmMTE0KDB4MTIxKV0sdGhpc1tfMHg0MGYxMTQoMHgxMGQpXT1fMHgxNGE4Y2NbXzB4NDBmMTE0KDB4MWExKV0sdGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sdGhpc1tfMHg0MGYxMTQoMHhmMCldPU9iamVjdFtfMHg0MGYxMTQoMHgxNjMpXSx0aGlzW18weDQwZjExNCgweDE1MCldPV8weDE0YThjY1tfMHg0MGYxMTQoMHgxNDQpXSx0aGlzWydfcmVnRXhwVG9TdHJpbmcnXT1SZWdFeHBbXzB4NDBmMTE0KDB4ZjcpXVtfMHg0MGYxMTQoMHgxMjMpXSx0aGlzWydfZGF0ZVRvU3RyaW5nJ109RGF0ZVtfMHg0MGYxMTQoMHhmNyldW18weDQwZjExNCgweDEyMyldO31bJ3NlcmlhbGl6ZSddKF8weDU1YTJiYixfMHgxYjY2MDQsXzB4Mjg3YmE5LF8weDJkOTg1Mil7dmFyIF8weDRkMjJmMj1fMHg1MTJhMzcsXzB4MTY2MmZhPXRoaXMsXzB4NWI4MzEyPV8weDI4N2JhOVsnYXV0b0V4cGFuZCddO2Z1bmN0aW9uIF8weGM1YmUxNihfMHg1NjkwMGUsXzB4YzBiNWMxLF8weDQ0MzNmYyl7dmFyIF8weDRiODhlZD1fMHgyMTUyO18weGMwYjVjMVsndHlwZSddPV8weDRiODhlZCgweDFhYSksXzB4YzBiNWMxW18weDRiODhlZCgweDEwYSldPV8weDU2OTAwZVtfMHg0Yjg4ZWQoMHgxOWIpXSxfMHg2MDkzMjA9XzB4NDQzM2ZjW18weDRiODhlZCgweDE2OSldWydjdXJyZW50J10sXzB4NDQzM2ZjW18weDRiODhlZCgweDE2OSldW18weDRiODhlZCgweDE1NyldPV8weGMwYjVjMSxfMHgxNjYyZmFbXzB4NGI4OGVkKDB4YzUpXShfMHhjMGI1YzEsXzB4NDQzM2ZjKTt9aWYoXzB4MWI2NjA0JiZfMHgxYjY2MDRbXzB4NGQyMmYyKDB4MTE2KV0pXzB4YzViZTE2KF8weDFiNjYwNCxfMHg1NWEyYmIsXzB4Mjg3YmE5KTtlbHNlIHRyeXtfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTNhKV0rKyxfMHgyODdiYTlbJ2F1dG9FeHBhbmQnXSYmXzB4Mjg3YmE5W18weDRkMjJmMigweDFhZCldWydwdXNoJ10oXzB4MWI2NjA0KTt2YXIgXzB4MmFiZjc3LF8weDE3OWJhMyxfMHg0MzdhNzEsXzB4MWY0MzE4LF8weDFmNmIyNj1bXSxfMHg1MTIyNzE9W10sXzB4NDA2Y2YyLF8weDI1MmFlND10aGlzW18weDRkMjJmMigweDEzYildKF8weDFiNjYwNCksXzB4M2UwNGE1PV8weDI1MmFlND09PV8weDRkMjJmMigweDFhYyksXzB4MmFiYjBhPSEweDEsXzB4NDgyOGExPV8weDI1MmFlND09PV8weDRkMjJmMigweDE5OCksXzB4MzRmZjIzPXRoaXNbJ19pc1ByaW1pdGl2ZVR5cGUnXShfMHgyNTJhZTQpLF8weDM4MDYwNz10aGlzW18weDRkMjJmMigweDE1OCldKF8weDI1MmFlNCksXzB4Njc5ZDdmPV8weDM0ZmYyM3x8XzB4MzgwNjA3LF8weDM3YTVkNT17fSxfMHgyZTYwZjM9MHgwLF8weDIyMzBmOD0hMHgxLF8weDYwOTMyMCxfMHgzYWNiOTk9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkOCldKXtpZihfMHgzZTA0YTUpe2lmKF8weDE3OWJhMz1fMHgxYjY2MDRbJ2xlbmd0aCddLF8weDE3OWJhMz5fMHgyODdiYTlbJ2VsZW1lbnRzJ10pe2ZvcihfMHg0MzdhNzE9MHgwLF8weDFmNDMxOD1fMHgyODdiYTlbXzB4NGQyMmYyKDB4MTMwKV0sXzB4MmFiZjc3PV8weDQzN2E3MTtfMHgyYWJmNzc8XzB4MWY0MzE4O18weDJhYmY3NysrKV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxYTYpXShfMHgxNjYyZmFbXzB4NGQyMmYyKDB4MTcyKV0oXzB4MWY2YjI2LF8weDFiNjYwNCxfMHgyNTJhZTQsXzB4MmFiZjc3LF8weDI4N2JhOSkpO18weDU1YTJiYltfMHg0ZDIyZjIoMHhlOSldPSEweDA7fWVsc2V7Zm9yKF8weDQzN2E3MT0weDAsXzB4MWY0MzE4PV8weDE3OWJhMyxfMHgyYWJmNzc9XzB4NDM3YTcxO18weDJhYmY3NzxfMHgxZjQzMTg7XzB4MmFiZjc3KyspXzB4NTEyMjcxW18weDRkMjJmMigweDFhNildKF8weDE2NjJmYVtfMHg0ZDIyZjIoMHgxNzIpXShfMHgxZjZiMjYsXzB4MWI2NjA0LF8weDI1MmFlNCxfMHgyYWJmNzcsXzB4Mjg3YmE5KSk7fV8weDI4N2JhOVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSs9XzB4NTEyMjcxW18weDRkMjJmMigweDE1NSldO31pZighKF8weDI1MmFlND09PV8weDRkMjJmMigweDE3ZSl8fF8weDI1MmFlND09PV8weDRkMjJmMigweDEyMSkpJiYhXzB4MzRmZjIzJiZfMHgyNTJhZTQhPT0nU3RyaW5nJyYmXzB4MjUyYWU0IT09XzB4NGQyMmYyKDB4MTRlKSYmXzB4MjUyYWU0IT09XzB4NGQyMmYyKDB4MTU5KSl7dmFyIF8weDViMWRjZT1fMHgyZDk4NTJbXzB4NGQyMmYyKDB4MTI5KV18fF8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxMjkpXTtpZih0aGlzW18weDRkMjJmMigweDE4MCldKF8weDFiNjYwNCk/KF8weDJhYmY3Nz0weDAsXzB4MWI2NjA0W18weDRkMjJmMigweDFhOSldKGZ1bmN0aW9uKF8weDFlYzVmNSl7dmFyIF8weDNhMTFiOD1fMHg0ZDIyZjI7aWYoXzB4MmU2MGYzKyssXzB4Mjg3YmE5W18weDNhMTFiOCgweDE1NCldKyssXzB4MmU2MGYzPl8weDViMWRjZSl7XzB4MjIzMGY4PSEweDA7cmV0dXJuO31pZighXzB4Mjg3YmE5W18weDNhMTFiOCgweDE2MCldJiZfMHgyODdiYTlbXzB4M2ExMWI4KDB4ZGUpXSYmXzB4Mjg3YmE5W18weDNhMTFiOCgweDE1NCldPl8weDI4N2JhOVsnYXV0b0V4cGFuZExpbWl0J10pe18weDIyMzBmOD0hMHgwO3JldHVybjt9XzB4NTEyMjcxWydwdXNoJ10oXzB4MTY2MmZhW18weDNhMTFiOCgweDE3MildKF8weDFmNmIyNixfMHgxYjY2MDQsXzB4M2ExMWI4KDB4ZDApLF8weDJhYmY3NysrLF8weDI4N2JhOSxmdW5jdGlvbihfMHgyMTUyYTYpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgyMTUyYTY7fTt9KF8weDFlYzVmNSkpKTt9KSk6dGhpc1tfMHg0ZDIyZjIoMHhmMyldKF8weDFiNjYwNCkmJl8weDFiNjYwNFsnZm9yRWFjaCddKGZ1bmN0aW9uKF8weDM1MmFiYixfMHgxNTBhMDIpe3ZhciBfMHgxZWU5YTc9XzB4NGQyMmYyO2lmKF8weDJlNjBmMysrLF8weDI4N2JhOVtfMHgxZWU5YTcoMHgxNTQpXSsrLF8weDJlNjBmMz5fMHg1YjFkY2Upe18weDIyMzBmOD0hMHgwO3JldHVybjt9aWYoIV8weDI4N2JhOVtfMHgxZWU5YTcoMHgxNjApXSYmXzB4Mjg3YmE5WydhdXRvRXhwYW5kJ10mJl8weDI4N2JhOVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgyODdiYTlbXzB4MWVlOWE3KDB4MWE3KV0pe18weDIyMzBmOD0hMHgwO3JldHVybjt9dmFyIF8weDFlYWE4NT1fMHgxNTBhMDJbJ3RvU3RyaW5nJ10oKTtfMHgxZWFhODVbXzB4MWVlOWE3KDB4MTU1KV0+MHg2NCYmKF8weDFlYWE4NT1fMHgxZWFhODVbXzB4MWVlOWE3KDB4MWE1KV0oMHgwLDB4NjQpK18weDFlZTlhNygweDEzMSkpLF8weDUxMjI3MVtfMHgxZWU5YTcoMHgxYTYpXShfMHgxNjYyZmFbXzB4MWVlOWE3KDB4MTcyKV0oXzB4MWY2YjI2LF8weDFiNjYwNCwnTWFwJyxfMHgxZWFhODUsXzB4Mjg3YmE5LGZ1bmN0aW9uKF8weDNmY2RkMil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDNmY2RkMjt9O30oXzB4MzUyYWJiKSkpO30pLCFfMHgyYWJiMGEpe3RyeXtmb3IoXzB4NDA2Y2YyIGluIF8weDFiNjYwNClpZighKF8weDNlMDRhNSYmXzB4M2FjYjk5Wyd0ZXN0J10oXzB4NDA2Y2YyKSkmJiF0aGlzW18weDRkMjJmMigweGNjKV0oXzB4MWI2NjA0LF8weDQwNmNmMixfMHgyODdiYTkpKXtpZihfMHgyZTYwZjMrKyxfMHgyODdiYTlbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHgyZTYwZjM+XzB4NWIxZGNlKXtfMHgyMjMwZjg9ITB4MDticmVhazt9aWYoIV8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxNjApXSYmXzB4Mjg3YmE5W18weDRkMjJmMigweGRlKV0mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxNTQpXT5fMHgyODdiYTlbXzB4NGQyMmYyKDB4MWE3KV0pe18weDIyMzBmOD0hMHgwO2JyZWFrO31fMHg1MTIyNzFbXzB4NGQyMmYyKDB4MWE2KV0oXzB4MTY2MmZhWydfYWRkT2JqZWN0UHJvcGVydHknXShfMHgxZjZiMjYsXzB4MzdhNWQ1LF8weDFiNjYwNCxfMHgyNTJhZTQsXzB4NDA2Y2YyLF8weDI4N2JhOSkpO319Y2F0Y2h7fWlmKF8weDM3YTVkNVtfMHg0ZDIyZjIoMHgxNDkpXT0hMHgwLF8weDQ4MjhhMSYmKF8weDM3YTVkNVtfMHg0ZDIyZjIoMHgxMjgpXT0hMHgwKSwhXzB4MjIzMGY4KXt2YXIgXzB4MTQyYjdlPVtdWydjb25jYXQnXSh0aGlzWydfZ2V0T3duUHJvcGVydHlOYW1lcyddKF8weDFiNjYwNCkpWydjb25jYXQnXSh0aGlzW18weDRkMjJmMigweGM2KV0oXzB4MWI2NjA0KSk7Zm9yKF8weDJhYmY3Nz0weDAsXzB4MTc5YmEzPV8weDE0MmI3ZVtfMHg0ZDIyZjIoMHgxNTUpXTtfMHgyYWJmNzc8XzB4MTc5YmEzO18weDJhYmY3NysrKWlmKF8weDQwNmNmMj1fMHgxNDJiN2VbXzB4MmFiZjc3XSwhKF8weDNlMDRhNSYmXzB4M2FjYjk5W18weDRkMjJmMigweDE4ZCldKF8weDQwNmNmMltfMHg0ZDIyZjIoMHgxMjMpXSgpKSkmJiF0aGlzWydfYmxhY2tsaXN0ZWRQcm9wZXJ0eSddKF8weDFiNjYwNCxfMHg0MDZjZjIsXzB4Mjg3YmE5KSYmIV8weDM3YTVkNVtfMHg0ZDIyZjIoMHgxMDQpK18weDQwNmNmMlsndG9TdHJpbmcnXSgpXSl7aWYoXzB4MmU2MGYzKyssXzB4Mjg3YmE5W18weDRkMjJmMigweDE1NCldKyssXzB4MmU2MGYzPl8weDViMWRjZSl7XzB4MjIzMGY4PSEweDA7YnJlYWs7fWlmKCFfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTYwKV0mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkZSldJiZfMHgyODdiYTlbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4Mjg3YmE5WydhdXRvRXhwYW5kTGltaXQnXSl7XzB4MjIzMGY4PSEweDA7YnJlYWs7fV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxYTYpXShfMHgxNjYyZmFbJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDFmNmIyNixfMHgzN2E1ZDUsXzB4MWI2NjA0LF8weDI1MmFlNCxfMHg0MDZjZjIsXzB4Mjg3YmE5KSk7fX19fX1pZihfMHg1NWEyYmJbXzB4NGQyMmYyKDB4MTYyKV09XzB4MjUyYWU0LF8weDY3OWQ3Zj8oXzB4NTVhMmJiWyd2YWx1ZSddPV8weDFiNjYwNFtfMHg0ZDIyZjIoMHgxNTMpXSgpLHRoaXNbJ19jYXBJZlN0cmluZyddKF8weDI1MmFlNCxfMHg1NWEyYmIsXzB4Mjg3YmE5LF8weDJkOTg1MikpOl8weDI1MmFlND09PV8weDRkMjJmMigweGUzKT9fMHg1NWEyYmJbXzB4NGQyMmYyKDB4MWI0KV09dGhpc1tfMHg0ZDIyZjIoMHhjZSldW18weDRkMjJmMigweDE4OCldKF8weDFiNjYwNCk6XzB4MjUyYWU0PT09XzB4NGQyMmYyKDB4MTU5KT9fMHg1NWEyYmJbXzB4NGQyMmYyKDB4MWI0KV09XzB4MWI2NjA0Wyd0b1N0cmluZyddKCk6XzB4MjUyYWU0PT09J1JlZ0V4cCc/XzB4NTVhMmJiW18weDRkMjJmMigweDFiNCldPXRoaXNbXzB4NGQyMmYyKDB4MWE4KV1bXzB4NGQyMmYyKDB4MTg4KV0oXzB4MWI2NjA0KTpfMHgyNTJhZTQ9PT0nc3ltYm9sJyYmdGhpc1snX1N5bWJvbCddP18weDU1YTJiYlsndmFsdWUnXT10aGlzW18weDRkMjJmMigweDE1MCldW18weDRkMjJmMigweGY3KV1bJ3RvU3RyaW5nJ11bXzB4NGQyMmYyKDB4MTg4KV0oXzB4MWI2NjA0KTohXzB4Mjg3YmE5W18weDRkMjJmMigweGQ4KV0mJiEoXzB4MjUyYWU0PT09XzB4NGQyMmYyKDB4MTdlKXx8XzB4MjUyYWU0PT09XzB4NGQyMmYyKDB4MTIxKSkmJihkZWxldGUgXzB4NTVhMmJiW18weDRkMjJmMigweDFiNCldLF8weDU1YTJiYltfMHg0ZDIyZjIoMHgxMTEpXT0hMHgwKSxfMHgyMjMwZjgmJihfMHg1NWEyYmJbXzB4NGQyMmYyKDB4ZmUpXT0hMHgwKSxfMHg2MDkzMjA9XzB4Mjg3YmE5Wydub2RlJ11bJ2N1cnJlbnQnXSxfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTY5KV1bXzB4NGQyMmYyKDB4MTU3KV09XzB4NTVhMmJiLHRoaXNbXzB4NGQyMmYyKDB4YzUpXShfMHg1NWEyYmIsXzB4Mjg3YmE5KSxfMHg1MTIyNzFbXzB4NGQyMmYyKDB4MTU1KV0pe2ZvcihfMHgyYWJmNzc9MHgwLF8weDE3OWJhMz1fMHg1MTIyNzFbJ2xlbmd0aCddO18weDJhYmY3NzxfMHgxNzliYTM7XzB4MmFiZjc3KyspXzB4NTEyMjcxW18weDJhYmY3N10oXzB4MmFiZjc3KTt9XzB4MWY2YjI2W18weDRkMjJmMigweDE1NSldJiYoXzB4NTVhMmJiW18weDRkMjJmMigweDEyOSldPV8weDFmNmIyNik7fWNhdGNoKF8weDg2MjQ1ZSl7XzB4YzViZTE2KF8weDg2MjQ1ZSxfMHg1NWEyYmIsXzB4Mjg3YmE5KTt9cmV0dXJuIHRoaXNbXzB4NGQyMmYyKDB4MTRkKV0oXzB4MWI2NjA0LF8weDU1YTJiYiksdGhpc1tfMHg0ZDIyZjIoMHhmZCldKF8weDU1YTJiYixfMHgyODdiYTkpLF8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxNjkpXVsnY3VycmVudCddPV8weDYwOTMyMCxfMHgyODdiYTlbJ2xldmVsJ10tLSxfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZGUpXT1fMHg1YjgzMTIsXzB4Mjg3YmE5W18weDRkMjJmMigweGRlKV0mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxYWQpXVtfMHg0ZDIyZjIoMHgxMDYpXSgpLF8weDU1YTJiYjt9WydfZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10oXzB4NWIzYzlkKXt2YXIgXzB4MzBlY2U0PV8weDUxMmEzNztyZXR1cm4gT2JqZWN0W18weDMwZWNlNCgweGZhKV0/T2JqZWN0W18weDMwZWNlNCgweGZhKV0oXzB4NWIzYzlkKTpbXTt9W18weDUxMmEzNygweDE4MCldKF8weDIwZmE5OSl7dmFyIF8weDQwMTY1ZD1fMHg1MTJhMzc7cmV0dXJuISEoXzB4MjBmYTk5JiZfMHgxNGE4Y2NbXzB4NDAxNjVkKDB4ZDApXSYmdGhpc1tfMHg0MDE2NWQoMHhkYSldKF8weDIwZmE5OSk9PT1fMHg0MDE2NWQoMHhmYykmJl8weDIwZmE5OVtfMHg0MDE2NWQoMHgxYTkpXSk7fVtfMHg1MTJhMzcoMHhjYyldKF8weDIzZGEzMixfMHg1ZjliYmQsXzB4NTY1M2ViKXt2YXIgXzB4NTVlY2U0PV8weDUxMmEzNztyZXR1cm4gXzB4NTY1M2ViW18weDU1ZWNlNCgweDEzOSldP3R5cGVvZiBfMHgyM2RhMzJbXzB4NWY5YmJkXT09J2Z1bmN0aW9uJzohMHgxO31bXzB4NTEyYTM3KDB4MTNiKV0oXzB4NDFhYTdjKXt2YXIgXzB4M2E4MGQwPV8weDUxMmEzNyxfMHgzMzkxZWE9Jyc7cmV0dXJuIF8weDMzOTFlYT10eXBlb2YgXzB4NDFhYTdjLF8weDMzOTFlYT09PV8weDNhODBkMCgweDE5NCk/dGhpc1tfMHgzYTgwZDAoMHhkYSldKF8weDQxYWE3Yyk9PT1fMHgzYTgwZDAoMHgxNGEpP18weDMzOTFlYT0nYXJyYXknOnRoaXNbXzB4M2E4MGQwKDB4ZGEpXShfMHg0MWFhN2MpPT09XzB4M2E4MGQwKDB4MTlhKT9fMHgzMzkxZWE9XzB4M2E4MGQwKDB4ZTMpOnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDQxYWE3Yyk9PT1fMHgzYTgwZDAoMHgxMDgpP18weDMzOTFlYT0nYmlnaW50JzpfMHg0MWFhN2M9PT1udWxsP18weDMzOTFlYT0nbnVsbCc6XzB4NDFhYTdjW18weDNhODBkMCgweGRmKV0mJihfMHgzMzkxZWE9XzB4NDFhYTdjWydjb25zdHJ1Y3RvciddW18weDNhODBkMCgweGU1KV18fF8weDMzOTFlYSk6XzB4MzM5MWVhPT09XzB4M2E4MGQwKDB4MTIxKSYmdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJl8weDQxYWE3YyBpbnN0YW5jZW9mIHRoaXNbXzB4M2E4MGQwKDB4MTBkKV0mJihfMHgzMzkxZWE9XzB4M2E4MGQwKDB4MWExKSksXzB4MzM5MWVhO31bXzB4NTEyYTM3KDB4ZGEpXShfMHgxNTIyMzIpe3ZhciBfMHg1MGRiMTk9XzB4NTEyYTM3O3JldHVybiBPYmplY3RbJ3Byb3RvdHlwZSddW18weDUwZGIxOSgweDEyMyldWydjYWxsJ10oXzB4MTUyMjMyKTt9W18weDUxMmEzNygweGM3KV0oXzB4MWUxNzdjKXt2YXIgXzB4MWE3OTkzPV8weDUxMmEzNztyZXR1cm4gXzB4MWUxNzdjPT09XzB4MWE3OTkzKDB4MTkxKXx8XzB4MWUxNzdjPT09XzB4MWE3OTkzKDB4ZWMpfHxfMHgxZTE3N2M9PT0nbnVtYmVyJzt9W18weDUxMmEzNygweDE1OCldKF8weDU3MWI1Yil7dmFyIF8weDJiMzIyMz1fMHg1MTJhMzc7cmV0dXJuIF8weDU3MWI1Yj09PV8weDJiMzIyMygweDEyYil8fF8weDU3MWI1Yj09PSdTdHJpbmcnfHxfMHg1NzFiNWI9PT0nTnVtYmVyJzt9W18weDUxMmEzNygweDE3MildKF8weDFkYTk2MSxfMHgyMjMwNGMsXzB4MjkzZjFmLF8weDNkYzNiNyxfMHgxZjhmN2QsXzB4M2Y1MjFlKXt2YXIgXzB4NDE0NTkxPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDI5NDEyMil7dmFyIF8weGUyMDU3YT1fMHgyMTUyLF8weDRjYWY0ZT1fMHgxZjhmN2RbJ25vZGUnXVsnY3VycmVudCddLF8weDE3YzUzOD1fMHgxZjhmN2RbXzB4ZTIwNTdhKDB4MTY5KV1bXzB4ZTIwNTdhKDB4ZTgpXSxfMHgxODk5Yzg9XzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldWydwYXJlbnQnXTtfMHgxZjhmN2RbXzB4ZTIwNTdhKDB4MTY5KV1bJ3BhcmVudCddPV8weDRjYWY0ZSxfMHgxZjhmN2RbXzB4ZTIwNTdhKDB4MTY5KV1bXzB4ZTIwNTdhKDB4ZTgpXT10eXBlb2YgXzB4M2RjM2I3PT1fMHhlMjA1N2EoMHgxYjApP18weDNkYzNiNzpfMHgyOTQxMjIsXzB4MWRhOTYxWydwdXNoJ10oXzB4NDE0NTkxW18weGUyMDU3YSgweDEwYildKF8weDIyMzA0YyxfMHgyOTNmMWYsXzB4M2RjM2I3LF8weDFmOGY3ZCxfMHgzZjUyMWUpKSxfMHgxZjhmN2RbXzB4ZTIwNTdhKDB4MTY5KV1bXzB4ZTIwNTdhKDB4ZDcpXT1fMHgxODk5YzgsXzB4MWY4ZjdkWydub2RlJ11bXzB4ZTIwNTdhKDB4ZTgpXT1fMHgxN2M1Mzg7fTt9W18weDUxMmEzNygweGUwKV0oXzB4NDliOWU1LF8weDE1MmZlMSxfMHg1YWViNzgsXzB4MzYxOTg2LF8weDRlZGYyNCxfMHgyNzg4YmYsXzB4MzE5YmY5KXt2YXIgXzB4MzRkMjU0PV8weDUxMmEzNyxfMHgxZDAwZTg9dGhpcztyZXR1cm4gXzB4MTUyZmUxW18weDM0ZDI1NCgweDEwNCkrXzB4NGVkZjI0W18weDM0ZDI1NCgweDEyMyldKCldPSEweDAsZnVuY3Rpb24oXzB4NWQyY2Mpe3ZhciBfMHg0MTQ5M2Y9XzB4MzRkMjU0LF8weDEwZDQ0ZD1fMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4MTU3KV0sXzB4MTAxZmQ5PV8weDI3ODhiZltfMHg0MTQ5M2YoMHgxNjkpXVtfMHg0MTQ5M2YoMHhlOCldLF8weDQyZGUzMT1fMHgyNzg4YmZbJ25vZGUnXVtfMHg0MTQ5M2YoMHhkNyldO18weDI3ODhiZlsnbm9kZSddW18weDQxNDkzZigweGQ3KV09XzB4MTBkNDRkLF8weDI3ODhiZltfMHg0MTQ5M2YoMHgxNjkpXVtfMHg0MTQ5M2YoMHhlOCldPV8weDVkMmNjLF8weDQ5YjllNVtfMHg0MTQ5M2YoMHgxYTYpXShfMHgxZDAwZThbXzB4NDE0OTNmKDB4MTBiKV0oXzB4NWFlYjc4LF8weDM2MTk4NixfMHg0ZWRmMjQsXzB4Mjc4OGJmLF8weDMxOWJmOSkpLF8weDI3ODhiZltfMHg0MTQ5M2YoMHgxNjkpXVtfMHg0MTQ5M2YoMHhkNyldPV8weDQyZGUzMSxfMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZTgpXT1fMHgxMDFmZDk7fTt9WydfcHJvcGVydHknXShfMHhkODJmYzcsXzB4NWJmYWEwLF8weDVjY2U5YixfMHgxM2M0OGEsXzB4NTY1NjI4KXt2YXIgXzB4MWY4NmRjPV8weDUxMmEzNyxfMHgzNzc0MTM9dGhpcztfMHg1NjU2Mjh8fChfMHg1NjU2Mjg9ZnVuY3Rpb24oXzB4ZDJkYzM2LF8weDQzNzM2OCl7cmV0dXJuIF8weGQyZGMzNltfMHg0MzczNjhdO30pO3ZhciBfMHg1OGUxYzk9XzB4NWNjZTliW18weDFmODZkYygweDEyMyldKCksXzB4MTI0ZjhlPV8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNmEpXXx8e30sXzB4NDU3YTY1PV8weDEzYzQ4YVsnZGVwdGgnXSxfMHhlMWFkOTU9XzB4MTNjNDhhW18weDFmODZkYygweDE2MCldO3RyeXt2YXIgXzB4NDc4NGFjPXRoaXNbXzB4MWY4NmRjKDB4ZjMpXShfMHhkODJmYzcpLF8weDM1ZWE5Yj1fMHg1OGUxYzk7XzB4NDc4NGFjJiZfMHgzNWVhOWJbMHgwXT09PSdcXFxceDI3JyYmKF8weDM1ZWE5Yj1fMHgzNWVhOWJbXzB4MWY4NmRjKDB4MTc1KV0oMHgxLF8weDM1ZWE5YltfMHgxZjg2ZGMoMHgxNTUpXS0weDIpKTt2YXIgXzB4MWNhZWIwPV8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNmEpXT1fMHgxMjRmOGVbXzB4MWY4NmRjKDB4MTA0KStfMHgzNWVhOWJdO18weDFjYWViMCYmKF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHhkOCldPV8weDEzYzQ4YVsnZGVwdGgnXSsweDEpLF8weDEzYzQ4YVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddPSEhXzB4MWNhZWIwO3ZhciBfMHgzNTlmYWY9dHlwZW9mIF8weDVjY2U5Yj09XzB4MWY4NmRjKDB4ZWUpLF8weDVjN2ZjYj17J25hbWUnOl8weDM1OWZhZnx8XzB4NDc4NGFjP18weDU4ZTFjOTp0aGlzW18weDFmODZkYygweGQyKV0oXzB4NThlMWM5KX07aWYoXzB4MzU5ZmFmJiYoXzB4NWM3ZmNiW18weDFmODZkYygweGVlKV09ITB4MCksIShfMHg1YmZhYTA9PT0nYXJyYXknfHxfMHg1YmZhYTA9PT1fMHgxZjg2ZGMoMHgxNzYpKSl7dmFyIF8weDFjNTk3MD10aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10oXzB4ZDgyZmM3LF8weDVjY2U5Yik7aWYoXzB4MWM1OTcwJiYoXzB4MWM1OTcwWydzZXQnXSYmKF8weDVjN2ZjYltfMHgxZjg2ZGMoMHgxNDIpXT0hMHgwKSxfMHgxYzU5NzBbJ2dldCddJiYhXzB4MWNhZWIwJiYhXzB4MTNjNDhhWydyZXNvbHZlR2V0dGVycyddKSlyZXR1cm4gXzB4NWM3ZmNiWydnZXR0ZXInXT0hMHgwLHRoaXNbXzB4MWY4NmRjKDB4MTM1KV0oXzB4NWM3ZmNiLF8weDEzYzQ4YSksXzB4NWM3ZmNiO312YXIgXzB4MjMwNmE4O3RyeXtfMHgyMzA2YTg9XzB4NTY1NjI4KF8weGQ4MmZjNyxfMHg1Y2NlOWIpO31jYXRjaChfMHg0ZGFhNTMpe3JldHVybiBfMHg1YzdmY2I9eyduYW1lJzpfMHg1OGUxYzksJ3R5cGUnOl8weDFmODZkYygweDFhYSksJ2Vycm9yJzpfMHg0ZGFhNTNbXzB4MWY4NmRjKDB4MTliKV19LHRoaXNbXzB4MWY4NmRjKDB4MTM1KV0oXzB4NWM3ZmNiLF8weDEzYzQ4YSksXzB4NWM3ZmNiO312YXIgXzB4YzY1Mzg9dGhpc1tfMHgxZjg2ZGMoMHgxM2IpXShfMHgyMzA2YTgpLF8weDI2ZTdjYT10aGlzW18weDFmODZkYygweGM3KV0oXzB4YzY1MzgpO2lmKF8weDVjN2ZjYltfMHgxZjg2ZGMoMHgxNjIpXT1fMHhjNjUzOCxfMHgyNmU3Y2EpdGhpc1tfMHgxZjg2ZGMoMHgxMzUpXShfMHg1YzdmY2IsXzB4MTNjNDhhLF8weDIzMDZhOCxmdW5jdGlvbigpe3ZhciBfMHg1MDU1Y2U9XzB4MWY4NmRjO18weDVjN2ZjYltfMHg1MDU1Y2UoMHgxYjQpXT1fMHgyMzA2YThbXzB4NTA1NWNlKDB4MTUzKV0oKSwhXzB4MWNhZWIwJiZfMHgzNzc0MTNbXzB4NTA1NWNlKDB4MTcxKV0oXzB4YzY1MzgsXzB4NWM3ZmNiLF8weDEzYzQ4YSx7fSk7fSk7ZWxzZXt2YXIgXzB4MWQ5OTBkPV8weDEzYzQ4YVsnYXV0b0V4cGFuZCddJiZfMHgxM2M0OGFbJ2xldmVsJ108XzB4MTNjNDhhW18weDFmODZkYygweDEzNCldJiZfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MWFkKV1bXzB4MWY4NmRjKDB4MTZjKV0oXzB4MjMwNmE4KTwweDAmJl8weGM2NTM4IT09XzB4MWY4NmRjKDB4MTk4KSYmXzB4MTNjNDhhW18weDFmODZkYygweDE1NCldPF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxYTcpXTtfMHgxZDk5MGR8fF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxM2EpXTxfMHg0NTdhNjV8fF8weDFjYWViMD8odGhpc1snc2VyaWFsaXplJ10oXzB4NWM3ZmNiLF8weDIzMDZhOCxfMHgxM2M0OGEsXzB4MWNhZWIwfHx7fSksdGhpc1tfMHgxZjg2ZGMoMHgxNGQpXShfMHgyMzA2YTgsXzB4NWM3ZmNiKSk6dGhpc1tfMHgxZjg2ZGMoMHgxMzUpXShfMHg1YzdmY2IsXzB4MTNjNDhhLF8weDIzMDZhOCxmdW5jdGlvbigpe3ZhciBfMHgxNDE5MWI9XzB4MWY4NmRjO18weGM2NTM4PT09XzB4MTQxOTFiKDB4MTdlKXx8XzB4YzY1Mzg9PT1fMHgxNDE5MWIoMHgxMjEpfHwoZGVsZXRlIF8weDVjN2ZjYltfMHgxNDE5MWIoMHgxYjQpXSxfMHg1YzdmY2JbJ2NhcHBlZCddPSEweDApO30pO31yZXR1cm4gXzB4NWM3ZmNiO31maW5hbGx5e18weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNmEpXT1fMHgxMjRmOGUsXzB4MTNjNDhhW18weDFmODZkYygweGQ4KV09XzB4NDU3YTY1LF8weDEzYzQ4YVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddPV8weGUxYWQ5NTt9fVtfMHg1MTJhMzcoMHgxNzEpXShfMHgxODBmOTAsXzB4MTFkNzQ3LF8weDE1NGRkOCxfMHgyMTg5M2Ype3ZhciBfMHg1NjgyNWU9XzB4NTEyYTM3LF8weDE3NjA1Nj1fMHgyMTg5M2ZbXzB4NTY4MjVlKDB4MTk3KV18fF8weDE1NGRkOFsnc3RyTGVuZ3RoJ107aWYoKF8weDE4MGY5MD09PV8weDU2ODI1ZSgweGVjKXx8XzB4MTgwZjkwPT09XzB4NTY4MjVlKDB4ZjUpKSYmXzB4MTFkNzQ3W18weDU2ODI1ZSgweDFiNCldKXtsZXQgXzB4MWU3MDVjPV8weDExZDc0N1tfMHg1NjgyNWUoMHgxYjQpXVtfMHg1NjgyNWUoMHgxNTUpXTtfMHgxNTRkZDhbXzB4NTY4MjVlKDB4MTVmKV0rPV8weDFlNzA1YyxfMHgxNTRkZDhbXzB4NTY4MjVlKDB4MTVmKV0+XzB4MTU0ZGQ4W18weDU2ODI1ZSgweDEzMildPyhfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MTExKV09JycsZGVsZXRlIF8weDExZDc0N1tfMHg1NjgyNWUoMHgxYjQpXSk6XzB4MWU3MDVjPl8weDE3NjA1NiYmKF8weDExZDc0N1tfMHg1NjgyNWUoMHgxMTEpXT1fMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV1bJ3N1YnN0ciddKDB4MCxfMHgxNzYwNTYpLGRlbGV0ZSBfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV0pO319W18weDUxMmEzNygweGYzKV0oXzB4M2E5ODZiKXt2YXIgXzB4MmVmNDBiPV8weDUxMmEzNztyZXR1cm4hIShfMHgzYTk4NmImJl8weDE0YThjY1tfMHgyZWY0MGIoMHgxMzgpXSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4M2E5ODZiKT09PV8weDJlZjQwYigweDEzNikmJl8weDNhOTg2YltfMHgyZWY0MGIoMHgxYTkpXSk7fVtfMHg1MTJhMzcoMHhkMildKF8weDQ5NWJjZil7dmFyIF8weDI1MmU3ZD1fMHg1MTJhMzc7aWYoXzB4NDk1YmNmW18weDI1MmU3ZCgweDE4NCldKC9eXFxcXGQrJC8pKXJldHVybiBfMHg0OTViY2Y7dmFyIF8weDQwODkyODt0cnl7XzB4NDA4OTI4PUpTT05bXzB4MjUyZTdkKDB4MTNkKV0oJycrXzB4NDk1YmNmKTt9Y2F0Y2h7XzB4NDA4OTI4PSdcXFxceDIyJyt0aGlzW18weDI1MmU3ZCgweGRhKV0oXzB4NDk1YmNmKSsnXFxcXHgyMic7fXJldHVybiBfMHg0MDg5MjhbXzB4MjUyZTdkKDB4MTg0KV0oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHg0MDg5Mjg9XzB4NDA4OTI4WydzdWJzdHInXSgweDEsXzB4NDA4OTI4W18weDI1MmU3ZCgweDE1NSldLTB4Mik6XzB4NDA4OTI4PV8weDQwODkyOFtfMHgyNTJlN2QoMHgxMjIpXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpW18weDI1MmU3ZCgweDEyMildKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpWydyZXBsYWNlJ10oLyheXFxcInxcXFwiJCkvZywnXFxcXHgyNycpLF8weDQwODkyODt9W18weDUxMmEzNygweDEzNSldKF8weDNjZTMyNyxfMHhhMDVmYzAsXzB4Mjg1YmQ3LF8weDI5ODU4NSl7dmFyIF8weDJlMWI2Yj1fMHg1MTJhMzc7dGhpc1tfMHgyZTFiNmIoMHhjNSldKF8weDNjZTMyNyxfMHhhMDVmYzApLF8weDI5ODU4NSYmXzB4Mjk4NTg1KCksdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDI4NWJkNyxfMHgzY2UzMjcpLHRoaXNbXzB4MmUxYjZiKDB4ZmQpXShfMHgzY2UzMjcsXzB4YTA1ZmMwKTt9W18weDUxMmEzNygweGM1KV0oXzB4MWRmNWNiLF8weDFlNjAwZSl7dmFyIF8weDU2OTUyND1fMHg1MTJhMzc7dGhpc1tfMHg1Njk1MjQoMHhlNyldKF8weDFkZjVjYixfMHgxZTYwMGUpLHRoaXNbXzB4NTY5NTI0KDB4MTk1KV0oXzB4MWRmNWNiLF8weDFlNjAwZSksdGhpc1tfMHg1Njk1MjQoMHhjOSldKF8weDFkZjVjYixfMHgxZTYwMGUpLHRoaXNbXzB4NTY5NTI0KDB4MTA5KV0oXzB4MWRmNWNiLF8weDFlNjAwZSk7fVtfMHg1MTJhMzcoMHhlNyldKF8weDRhMzJkMCxfMHgzNjVkMTkpe31bJ19zZXROb2RlUXVlcnlQYXRoJ10oXzB4OGUyOWVlLF8weDE5NjlkYil7fVsnX3NldE5vZGVMYWJlbCddKF8weDk1N2Y1NCxfMHgzMDQzZmUpe31bXzB4NTEyYTM3KDB4MTc0KV0oXzB4NGYyNDRkKXt2YXIgXzB4MzMzMDZlPV8weDUxMmEzNztyZXR1cm4gXzB4NGYyNDRkPT09dGhpc1tfMHgzMzMwNmUoMHgxYTIpXTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgyZjJkNjUsXzB4NWE3NTU0KXt2YXIgXzB4MWE5NjQ4PV8weDUxMmEzNzt0aGlzW18weDFhOTY0OCgweGYxKV0oXzB4MmYyZDY1LF8weDVhNzU1NCksdGhpc1tfMHgxYTk2NDgoMHgxMWYpXShfMHgyZjJkNjUpLF8weDVhNzU1NFsnc29ydFByb3BzJ10mJnRoaXNbXzB4MWE5NjQ4KDB4MTgyKV0oXzB4MmYyZDY1KSx0aGlzWydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDJmMmQ2NSxfMHg1YTc1NTQpLHRoaXNbXzB4MWE5NjQ4KDB4MTVhKV0oXzB4MmYyZDY1LF8weDVhNzU1NCksdGhpc1tfMHgxYTk2NDgoMHgxNDUpXShfMHgyZjJkNjUpO31bXzB4NTEyYTM3KDB4MTRkKV0oXzB4MjE4NTk2LF8weDM5YmI5OSl7dmFyIF8weGY3MTFkZj1fMHg1MTJhMzc7dHJ5e18weDIxODU5NiYmdHlwZW9mIF8weDIxODU5NltfMHhmNzExZGYoMHgxNTUpXT09XzB4ZjcxMWRmKDB4MWIwKSYmKF8weDM5YmI5OVsnbGVuZ3RoJ109XzB4MjE4NTk2W18weGY3MTFkZigweDE1NSldKTt9Y2F0Y2h7fWlmKF8weDM5YmI5OVsndHlwZSddPT09XzB4ZjcxMWRmKDB4MWIwKXx8XzB4MzliYjk5W18weGY3MTFkZigweDE2MildPT09J051bWJlcicpe2lmKGlzTmFOKF8weDM5YmI5OVsndmFsdWUnXSkpXzB4MzliYjk5W18weGY3MTFkZigweDE0OCldPSEweDAsZGVsZXRlIF8weDM5YmI5OVtfMHhmNzExZGYoMHgxYjQpXTtlbHNlIHN3aXRjaChfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MWI0KV0pe2Nhc2UgTnVtYmVyW18weGY3MTFkZigweDE4YyldOl8weDM5YmI5OVtfMHhmNzExZGYoMHgxMDUpXT0hMHgwLGRlbGV0ZSBfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MWI0KV07YnJlYWs7Y2FzZSBOdW1iZXJbXzB4ZjcxMWRmKDB4MTAyKV06XzB4MzliYjk5WyduZWdhdGl2ZUluZmluaXR5J109ITB4MCxkZWxldGUgXzB4MzliYjk5W18weGY3MTFkZigweDFiNCldO2JyZWFrO2Nhc2UgMHgwOnRoaXNbXzB4ZjcxMWRmKDB4MTkwKV0oXzB4MzliYjk5Wyd2YWx1ZSddKSYmKF8weDM5YmI5OVsnbmVnYXRpdmVaZXJvJ109ITB4MCk7YnJlYWs7fX1lbHNlIF8weDM5YmI5OVtfMHhmNzExZGYoMHgxNjIpXT09PV8weGY3MTFkZigweDE5OCkmJnR5cGVvZiBfMHgyMTg1OTZbXzB4ZjcxMWRmKDB4ZTUpXT09J3N0cmluZycmJl8weDIxODU5NltfMHhmNzExZGYoMHhlNSldJiZfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4ZTUpXSYmXzB4MjE4NTk2W18weGY3MTFkZigweGU1KV0hPT1fMHgzOWJiOTlbJ25hbWUnXSYmKF8weDM5YmI5OVtfMHhmNzExZGYoMHgxNWIpXT1fMHgyMTg1OTZbJ25hbWUnXSk7fVsnX2lzTmVnYXRpdmVaZXJvJ10oXzB4MTg3OGMzKXtyZXR1cm4gMHgxL18weDE4NzhjMz09PU51bWJlclsnTkVHQVRJVkVfSU5GSU5JVFknXTt9W18weDUxMmEzNygweDE4MildKF8weDRmNmJkYyl7dmFyIF8weDU0YjQzNj1fMHg1MTJhMzc7IV8weDRmNmJkY1tfMHg1NGI0MzYoMHgxMjkpXXx8IV8weDRmNmJkY1tfMHg1NGI0MzYoMHgxMjkpXVtfMHg1NGI0MzYoMHgxNTUpXXx8XzB4NGY2YmRjWyd0eXBlJ109PT1fMHg1NGI0MzYoMHgxYWMpfHxfMHg0ZjZiZGNbJ3R5cGUnXT09PSdNYXAnfHxfMHg0ZjZiZGNbXzB4NTRiNDM2KDB4MTYyKV09PT0nU2V0J3x8XzB4NGY2YmRjW18weDU0YjQzNigweDEyOSldW18weDU0YjQzNigweDE3OCldKGZ1bmN0aW9uKF8weDQ0MTBlZixfMHgyMGU1YWYpe3ZhciBfMHgxNTc2ODk9XzB4NTRiNDM2LF8weDJmNDY4Mj1fMHg0NDEwZWZbXzB4MTU3Njg5KDB4ZTUpXVtfMHgxNTc2ODkoMHgxYjMpXSgpLF8weDI0OWEyZj1fMHgyMGU1YWZbJ25hbWUnXVtfMHgxNTc2ODkoMHgxYjMpXSgpO3JldHVybiBfMHgyZjQ2ODI8XzB4MjQ5YTJmPy0weDE6XzB4MmY0NjgyPl8weDI0OWEyZj8weDE6MHgwO30pO31bJ19hZGRGdW5jdGlvbnNOb2RlJ10oXzB4M2U0ZjBjLF8weDE2NjIwZCl7dmFyIF8weDNjNDkxZD1fMHg1MTJhMzc7aWYoIShfMHgxNjYyMGRbJ25vRnVuY3Rpb25zJ118fCFfMHgzZTRmMGNbXzB4M2M0OTFkKDB4MTI5KV18fCFfMHgzZTRmMGNbXzB4M2M0OTFkKDB4MTI5KV1bXzB4M2M0OTFkKDB4MTU1KV0pKXtmb3IodmFyIF8weDMyNDI0ZD1bXSxfMHgxMWNiYmU9W10sXzB4NGZlN2I0PTB4MCxfMHgzZDhkMGM9XzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldW18weDNjNDkxZCgweDE1NSldO18weDRmZTdiNDxfMHgzZDhkMGM7XzB4NGZlN2I0Kyspe3ZhciBfMHg0NmMzNTE9XzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldW18weDRmZTdiNF07XzB4NDZjMzUxW18weDNjNDkxZCgweDE2MildPT09XzB4M2M0OTFkKDB4MTk4KT9fMHgzMjQyNGRbJ3B1c2gnXShfMHg0NmMzNTEpOl8weDExY2JiZVtfMHgzYzQ5MWQoMHgxYTYpXShfMHg0NmMzNTEpO31pZighKCFfMHgxMWNiYmVbXzB4M2M0OTFkKDB4MTU1KV18fF8weDMyNDI0ZFtfMHgzYzQ5MWQoMHgxNTUpXTw9MHgxKSl7XzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldPV8weDExY2JiZTt2YXIgXzB4NDZkNzA5PXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDMyNDI0ZH07dGhpc1snX3NldE5vZGVJZCddKF8weDQ2ZDcwOSxfMHgxNjYyMGQpLHRoaXNbXzB4M2M0OTFkKDB4ZjEpXShfMHg0NmQ3MDksXzB4MTY2MjBkKSx0aGlzW18weDNjNDkxZCgweDExZildKF8weDQ2ZDcwOSksdGhpc1snX3NldE5vZGVQZXJtaXNzaW9ucyddKF8weDQ2ZDcwOSxfMHgxNjYyMGQpLF8weDQ2ZDcwOVsnaWQnXSs9J1xcXFx4MjBmJyxfMHgzZTRmMGNbXzB4M2M0OTFkKDB4MTI5KV1bXzB4M2M0OTFkKDB4MTE5KV0oXzB4NDZkNzA5KTt9fX1bXzB4NTEyYTM3KDB4MTVhKV0oXzB4MzA5OTE2LF8weDMxYWRjNSl7fVtfMHg1MTJhMzcoMHgxMWYpXShfMHgzM2MwMWQpe31bXzB4NTEyYTM3KDB4Y2YpXShfMHgyZjE0ZWQpe3ZhciBfMHgyOWNhZjk9XzB4NTEyYTM3O3JldHVybiBBcnJheVtfMHgyOWNhZjkoMHgxOWUpXShfMHgyZjE0ZWQpfHx0eXBlb2YgXzB4MmYxNGVkPT1fMHgyOWNhZjkoMHgxOTQpJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHgyZjE0ZWQpPT09XzB4MjljYWY5KDB4MTRhKTt9W18weDUxMmEzNygweDEwOSldKF8weDNkMmIzNSxfMHg1YTJhYWUpe31bXzB4NTEyYTM3KDB4MTQ1KV0oXzB4NWU4NzQ5KXt2YXIgXzB4MWVjOTBjPV8weDUxMmEzNztkZWxldGUgXzB4NWU4NzQ5W18weDFlYzkwYygweDE4OSldLGRlbGV0ZSBfMHg1ZTg3NDlbXzB4MWVjOTBjKDB4Y2IpXSxkZWxldGUgXzB4NWU4NzQ5W18weDFlYzkwYygweDE5MyldO31bJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnXShfMHgzZWRkM2MsXzB4M2UyZTBjKXt9W18weDUxMmEzNygweDEwMCldKF8weDU2Y2Y2ZCl7dmFyIF8weDJjZjYzYT1fMHg1MTJhMzc7cmV0dXJuIF8weDU2Y2Y2ZD9fMHg1NmNmNmRbXzB4MmNmNjNhKDB4MTg0KV0odGhpc1tfMHgyY2Y2M2EoMHgxODMpXSk/J1snK18weDU2Y2Y2ZCsnXSc6XzB4NTZjZjZkW18weDJjZjYzYSgweDE4NCldKHRoaXNbXzB4MmNmNjNhKDB4ZjIpXSk/Jy4nK18weDU2Y2Y2ZDpfMHg1NmNmNmRbXzB4MmNmNjNhKDB4MTg0KV0odGhpc1tfMHgyY2Y2M2EoMHhlMSldKT8nWycrXzB4NTZjZjZkKyddJzonW1xcXFx4MjcnK18weDU2Y2Y2ZCsnXFxcXHgyN10nOicnO319bGV0IF8weGNiNjI1NT1uZXcgXzB4NTYxMzBkKCk7ZnVuY3Rpb24gXzB4NGEyOTVhKF8weDUwZGIwMCxfMHg0NWRhYTUsXzB4YzVhYjJkLF8weDFmZDRiOCxfMHhmOTQzNWYsXzB4NTFhMDRmKXt2YXIgXzB4NDgwMWI2PV8weDUxMmEzNztsZXQgXzB4NDBkYjRhLF8weDFhMzUxNjt0cnl7XzB4MWEzNTE2PV8weDM5OTY3OCgpLF8weDQwZGI0YT1fMHg1ODZlYTRbXzB4NDVkYWE1XSwhXzB4NDBkYjRhfHxfMHgxYTM1MTYtXzB4NDBkYjRhWyd0cyddPjB4MWY0JiZfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTY2KV0mJl8weDQwZGI0YVtfMHg0ODAxYjYoMHgxNGIpXS9fMHg0MGRiNGFbJ2NvdW50J108MHg2ND8oXzB4NTg2ZWE0W18weDQ1ZGFhNV09XzB4NDBkYjRhPXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4MWEzNTE2fSxfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV09e30pOl8weDFhMzUxNi1fMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bJ3RzJ10+MHgzMiYmXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE2NildJiZfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bXzB4NDgwMWI2KDB4MTRiKV0vXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE2NildPDB4NjQmJihfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV09e30pO2xldCBfMHgxNmI5NDI9W10sXzB4MzdlMjA4PV8weDQwZGI0YVtfMHg0ODAxYjYoMHgxNDApXXx8XzB4NTg2ZWE0WydoaXRzJ11bXzB4NDgwMWI2KDB4MTQwKV0/XzB4MWIwNzE3Ol8weDE2YTIyMixfMHg0MjQ1ZTg9XzB4NDg4N2YwPT57dmFyIF8weDExZTJhYj1fMHg0ODAxYjY7bGV0IF8weDU0YjAzMz17fTtyZXR1cm4gXzB4NTRiMDMzW18weDExZTJhYigweDEyOSldPV8weDQ4ODdmMFsncHJvcHMnXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTMwKV09XzB4NDg4N2YwWydlbGVtZW50cyddLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxOTcpXT1fMHg0ODg3ZjBbXzB4MTFlMmFiKDB4MTk3KV0sXzB4NTRiMDMzW18weDExZTJhYigweDEzMildPV8weDQ4ODdmMFtfMHgxMWUyYWIoMHgxMzIpXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MWE3KV09XzB4NDg4N2YwW18weDExZTJhYigweDFhNyldLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMzQpXT1fMHg0ODg3ZjBbXzB4MTFlMmFiKDB4MTM0KV0sXzB4NTRiMDMzWydzb3J0UHJvcHMnXT0hMHgxLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMzkpXT0hXzB4NTRhODcwLF8weDU0YjAzM1tfMHgxMWUyYWIoMHhkOCldPTB4MSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTNhKV09MHgwLF8weDU0YjAzM1snZXhwSWQnXT1fMHgxMWUyYWIoMHhkMSksXzB4NTRiMDMzW18weDExZTJhYigweDE2ZCldPV8weDExZTJhYigweDE2NCksXzB4NTRiMDMzWydhdXRvRXhwYW5kJ109ITB4MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MWFkKV09W10sXzB4NTRiMDMzW18weDExZTJhYigweDE1NCldPTB4MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MWFiKV09ITB4MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTVmKV09MHgwLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxNjkpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHg1NGIwMzM7fTtmb3IodmFyIF8weDExZGY4Mj0weDA7XzB4MTFkZjgyPF8weGY5NDM1ZlsnbGVuZ3RoJ107XzB4MTFkZjgyKyspXzB4MTZiOTQyW18weDQ4MDFiNigweDFhNildKF8weGNiNjI1NVtfMHg0ODAxYjYoMHgxMjcpXSh7J3RpbWVOb2RlJzpfMHg1MGRiMDA9PT1fMHg0ODAxYjYoMHgxNGIpfHx2b2lkIDB4MH0sXzB4Zjk0MzVmW18weDExZGY4Ml0sXzB4NDI0NWU4KF8weDM3ZTIwOCkse30pKTtpZihfMHg1MGRiMDA9PT0ndHJhY2UnKXtsZXQgXzB4MjBmMDExPUVycm9yW18weDQ4MDFiNigweDEzMyldO3RyeXtFcnJvcltfMHg0ODAxYjYoMHgxMzMpXT0weDEvMHgwLF8weDE2Yjk0MltfMHg0ODAxYjYoMHgxYTYpXShfMHhjYjYyNTVbXzB4NDgwMWI2KDB4MTI3KV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpW18weDQ4MDFiNigweDE0NyldLF8weDQyNDVlOChfMHgzN2UyMDgpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yWydzdGFja1RyYWNlTGltaXQnXT1fMHgyMGYwMTE7fX1yZXR1cm57J21ldGhvZCc6XzB4NDgwMWI2KDB4MTEyKSwndmVyc2lvbic6XzB4NWRlYTYwLCdhcmdzJzpbeyd0cyc6XzB4YzVhYjJkLCdzZXNzaW9uJzpfMHgxZmQ0YjgsJ2FyZ3MnOl8weDE2Yjk0MiwnaWQnOl8weDQ1ZGFhNSwnY29udGV4dCc6XzB4NTFhMDRmfV19O31jYXRjaChfMHgxYzJlYmQpe3JldHVybnsnbWV0aG9kJzpfMHg0ODAxYjYoMHgxMTIpLCd2ZXJzaW9uJzpfMHg1ZGVhNjAsJ2FyZ3MnOlt7J3RzJzpfMHhjNWFiMmQsJ3Nlc3Npb24nOl8weDFmZDRiOCwnYXJncyc6W3sndHlwZSc6XzB4NDgwMWI2KDB4MWFhKSwnZXJyb3InOl8weDFjMmViZCYmXzB4MWMyZWJkW18weDQ4MDFiNigweDE5YildfV0sJ2lkJzpfMHg0NWRhYTUsJ2NvbnRleHQnOl8weDUxYTA0Zn1dfTt9ZmluYWxseXt0cnl7aWYoXzB4NDBkYjRhJiZfMHgxYTM1MTYpe2xldCBfMHgzOTZmOTY9XzB4Mzk5Njc4KCk7XzB4NDBkYjRhW18weDQ4MDFiNigweDE2NildKyssXzB4NDBkYjRhW18weDQ4MDFiNigweDE0YildKz1fMHgzZjVkMmQoXzB4MWEzNTE2LF8weDM5NmY5NiksXzB4NDBkYjRhWyd0cyddPV8weDM5NmY5NixfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bXzB4NDgwMWI2KDB4MTY2KV0rKyxfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bJ3RpbWUnXSs9XzB4M2Y1ZDJkKF8weDFhMzUxNixfMHgzOTZmOTYpLF8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVsndHMnXT1fMHgzOTZmOTYsKF8weDQwZGI0YVtfMHg0ODAxYjYoMHgxNjYpXT4weDMyfHxfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTRiKV0+MHg2NCkmJihfMHg0MGRiNGFbJ3JlZHVjZUxpbWl0cyddPSEweDApLChfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bXzB4NDgwMWI2KDB4MTY2KV0+MHgzZTh8fF8weDU4NmVhNFsnaGl0cyddWyd0aW1lJ10+MHgxMmMpJiYoXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE0MCldPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXTt9KShnbG9iYWxUaGlzLF8weDQzY2NiZigweGViKSxfMHg0M2NjYmYoMHgxYjEpLF8weDQzY2NiZigweDE2NyksXzB4NDNjY2JmKDB4MTdiKSwnMS4wLjAnLF8weDQzY2NiZigweGZmKSxfMHg0M2NjYmYoMHgxODUpLF8weDQzY2NiZigweDE4NykpO2Z1bmN0aW9uIF8weDU3NTAoKXt2YXIgXzB4NTFmY2YzPVsnc3RyaW5naWZ5JywnZGlzYWJsZWRMb2cnLCc2aVJ6dlFSJywncmVkdWNlTGltaXRzJywncG9ydCcsJ3NldHRlcicsJ3JlbG9hZCcsJ1N5bWJvbCcsJ19jbGVhbk5vZGUnLCd1cmwnLCdzdGFjaycsJ25hbicsJ19wX2xlbmd0aCcsJ1tvYmplY3RcXFxceDIwQXJyYXldJywndGltZScsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJ0J1ZmZlcicsJzM2VUdxS3Z4JywnX1N5bWJvbCcsJ2VsYXBzZWQnLCdfY29ubmVjdGluZycsJ3ZhbHVlT2YnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ2xlbmd0aCcsJ25vdycsJ2N1cnJlbnQnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ2JpZ2ludCcsJ19hZGRMb2FkTm9kZScsJ2Z1bmNOYW1lJywnY2xvc2UnLCdkYXRhJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdhbGxTdHJMZW5ndGgnLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywnMTkxMjQyOHBlVWtaUycsJ3R5cGUnLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywncm9vdF9leHAnLCc3MDU1M01rd29USScsJ2NvdW50JyxcXFwiL2hvbWUvYWRtaW5pc3RyYWRvci8udnNjb2RlLXNlcnZlci9leHRlbnNpb25zL3dhbGxhYnlqcy5jb25zb2xlLW5pbmphLTAuMC4xODIvbm9kZV9tb2R1bGVzXFxcIiwncGF0aFRvRmlsZVVSTCcsJ25vZGUnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCd3czovLycsJ2luZGV4T2YnLCdyb290RXhwcmVzc2lvbicsJzIxMDBUZG93YmEnLCdfcmVjb25uZWN0VGltZW91dCcsJzE3MTQ5NDVmY3BPT1MnLCdfY2FwSWZTdHJpbmcnLCdfYWRkUHJvcGVydHknLCdvbmVycm9yJywnX2lzVW5kZWZpbmVkJywnc3Vic3RyJywnRXJyb3InLCdfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ3NvcnQnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnLCcxNDlYYkVTakUnLCd3ZWJwYWNrJywnMjcyaVhPZ1dZJywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCdudWxsJywnam9pbicsJ19pc1NldCcsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnX3NvcnRQcm9wcycsJ19udW1iZXJSZWdFeHAnLCdtYXRjaCcsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJzYTFcXFwiLFxcXCIxMC4zMC4wLjgxXFxcIixcXFwiMTcyLjIwLjAuMVxcXCJdLCdyZWFkeVN0YXRlJywnJywnY2FsbCcsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJ2NvbnNvbGUnLCdob3N0JywnUE9TSVRJVkVfSU5GSU5JVFknLCd0ZXN0JywnaGl0cycsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcsJ19pc05lZ2F0aXZlWmVybycsJ2Jvb2xlYW4nLCdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0JywnX2hhc01hcE9uSXRzUGF0aCcsJ29iamVjdCcsJ19zZXROb2RlUXVlcnlQYXRoJywnd2FybicsJ3N0ckxlbmd0aCcsJ2Z1bmN0aW9uJywnX1dlYlNvY2tldENsYXNzJywnW29iamVjdFxcXFx4MjBEYXRlXScsJ21lc3NhZ2UnLCdfc29ja2V0Jywnb25jbG9zZScsJ2lzQXJyYXknLCczNzA0NjljTUtDTEInLCdpbmNsdWRlcycsJ0hUTUxBbGxDb2xsZWN0aW9uJywnX3VuZGVmaW5lZCcsJ2hhc093blByb3BlcnR5JywnOmxvZ1BvaW50SWQ6Jywnc2xpY2UnLCdwdXNoJywnYXV0b0V4cGFuZExpbWl0JywnX3JlZ0V4cFRvU3RyaW5nJywnZm9yRWFjaCcsJ3Vua25vd24nLCdyZXNvbHZlR2V0dGVycycsJ2FycmF5JywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ3Byb2Nlc3MnLCdiaW5kJywnbnVtYmVyJywnMzQ2NDMnLCdocnRpbWUnLCd0b0xvd2VyQ2FzZScsJ3ZhbHVlJywndW5yZWYnLCdXZWJTb2NrZXQnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ19pc1ByaW1pdGl2ZVR5cGUnLCdcXFxceDIwYnJvd3NlcicsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdkZWZhdWx0JywnX2hhc1NldE9uSXRzUGF0aCcsJ19ibGFja2xpc3RlZFByb3BlcnR5JywnbWFwJywnX2RhdGVUb1N0cmluZycsJ19pc0FycmF5JywnU2V0Jywncm9vdF9leHBfaWQnLCdfcHJvcGVydHlOYW1lJywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdfaW5Ccm93c2VyJywnMTQ2NDU1OGJ3Q0l2bCcsJ3BlcmZfaG9va3MnLCdwYXJlbnQnLCdkZXB0aCcsJ2FzdHJvJywnX29iamVjdFRvU3RyaW5nJywnbnV4dCcsJ2dldFByb3RvdHlwZU9mJywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ2F1dG9FeHBhbmQnLCdjb25zdHJ1Y3RvcicsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ19xdW90ZWRSZWdFeHAnLCdvbm9wZW4nLCdkYXRlJywnbm9kZU1vZHVsZXMnLCduYW1lJywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCdfc2V0Tm9kZUlkJywnaW5kZXgnLCdjYXBwZWRFbGVtZW50cycsJ3BhcnNlJywnbG9jYWxob3N0Jywnc3RyaW5nJywncGVyZm9ybWFuY2UnLCdzeW1ib2wnLCdsb2NhdGlvbicsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnX3NldE5vZGVMYWJlbCcsJ19rZXlTdHJSZWdFeHAnLCdfaXNNYXAnLCdnbG9iYWwnLCdTdHJpbmcnLCc0R0tiVVpyJywncHJvdG90eXBlJywnc2VuZCcsJ19XZWJTb2NrZXQnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ1tvYmplY3RcXFxceDIwU2V0XScsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ2NhcHBlZFByb3BzJywnMTY4OTI1NjQyMTU1MicsJ19wcm9wZXJ0eUFjY2Vzc29yJywnX2NvbnNvbGVfbmluamEnLCdORUdBVElWRV9JTkZJTklUWScsJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5JywnX3BfJywncG9zaXRpdmVJbmZpbml0eScsJ3BvcCcsJ3RpbWVTdGFtcCcsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJ19zZXROb2RlUGVybWlzc2lvbnMnLCdlcnJvcicsJ19wcm9wZXJ0eScsJ3ZlcnNpb25zJywnX0hUTUxBbGxDb2xsZWN0aW9uJywnNjIxNDBmQnVkeFUnLCdwYXRoJywnZ2V0V2ViU29ja2V0Q2xhc3MnLCdjYXBwZWQnLCdsb2cnLCdtZXRob2QnLCdkaXNhYmxlZFRyYWNlJywndHJhY2UnLCdhcmd1bWVudFJlc29sdXRpb25FcnJvcicsJ193cycsJ1xcXFx4MjBzZXJ2ZXInLCd1bnNoaWZ0JywnMTBNb2V5aUonLCd0aW1lRW5kJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCdfYWxsb3dlZFRvU2VuZCcsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnX19lcycrJ01vZHVsZScsJ3VuZGVmaW5lZCcsJ3JlcGxhY2UnLCd0b1N0cmluZycsJ29ubWVzc2FnZScsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JywnZW51bWVyYWJsZScsJ3NlcmlhbGl6ZScsJ19wX25hbWUnLCdwcm9wcycsJ3RoZW4nLCdCb29sZWFuJywnaG9zdG5hbWUnLCdfY29ubmVjdGVkJywnMjMzNHlrRVN4SCcsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ2VsZW1lbnRzJywnLi4uJywndG90YWxTdHJMZW5ndGgnLCdzdGFja1RyYWNlTGltaXQnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0JywnW29iamVjdFxcXFx4MjBNYXBdJywnX3NlbmRFcnJvck1lc3NhZ2UnLCdNYXAnLCdub0Z1bmN0aW9ucycsJ2xldmVsJywnX3R5cGUnLCd3cy9pbmRleC5qcyddO18weDU3NTA9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4NTFmY2YzO307cmV0dXJuIF8weDU3NTAoKTt9XCIpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ4ODRmNTk0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvYWRtaW5pc3RyYWRvci9uZ2lueC9hcHBzL0FjY2lvbkRlUGVyc29uYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDg4NGY1OTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDg4NGY1OTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDg4NGY1OTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ4ODRmNTk0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q4ODRmNTk0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Vc2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ4ODRmNTk0JlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IFwiZGF0YS1hcHBcIjogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJhbGVydC10aW1lLW91dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHJlZGlyZWN0OiBfdm0ucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICByZWRpcmVjdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVUaW1lT3V0KCRldmVudClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhbGVydFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0ZXh0OiBfdm0udGV4dEFsZXJ0LFxuICAgICAgICAgIGV2ZW50OiBfdm0uYWxlcnRFdmVudCxcbiAgICAgICAgICBzaG93OiBfdm0uc2hvd0FsZXJ0LFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwic2hvdy1hbGVydFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZUFsZXJ0KCRldmVudClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWRhdGEtdGFibGVcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMyBzaGFkb3cgcC0zIG10LTNcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcInNpbmdsZS1zZWxlY3RcIjogZmFsc2UsXG4gICAgICAgICAgc2VhcmNoOiBfdm0ub3B0aW9ucy5zZWFyY2gsXG4gICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgaXRlbXM6IF92bS5yZWNvcmRzRmlsdGVyZWQsXG4gICAgICAgICAgb3B0aW9uczogX3ZtLm9wdGlvbnMsXG4gICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgXCJpdGVtLWtleVwiOiBcImlkXCIsXG4gICAgICAgICAgXCJzb3J0LWJ5XCI6IFwiaWRcIixcbiAgICAgICAgICBcImZvb3Rlci1wcm9wc1wiOiB7IFwiaXRlbXMtcGVyLXBhZ2Utb3B0aW9uc1wiOiBbMTUsIDMwLCA1MCwgMTAwXSB9LFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwidXBkYXRlOm9wdGlvbnNcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLm9wdGlvbnMgPSAkZXZlbnRcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcInRvcFwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGF0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIFtfdm0uX3YoXCJVc3Vhcmlvc1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjgwMHB4XCIsIHBlcnNpc3RlbnQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uID0gcmVmLm9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRycyA9IHJlZi5hdHRyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY29sXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhbGlnbjogXCJyaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1ub25lIGQtbWQtYmxvY2sgZC1sZy1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgeHM6IFwiNlwiLCBzbTogXCI2XCIsIG1kOiBcIjZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkJ1c2NhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3B0aW9ucy5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm9wdGlvbnMuc2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleGNhcmQgYXV0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGVpZ2h0OiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImgxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibXgtYXV0byBwdC0zIG1iLTMgdGV4dC1jZW50ZXIgYmxhY2stc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZvcm1UaXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5vbWJyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6dmFsaWRhdGlvblwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0ubmFtZS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDYXJnb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9zaXRpb25fc2lnbmF0dXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnZhbGlkYXRpb25cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvc2l0aW9uX3NpZ25hdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9zaXRpb25fc2lnbmF0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBvc2l0aW9uX3NpZ25hdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLnBvc2l0aW9uX3NpZ25hdHVyZS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDb3JyZW8gZWxlY3Ryw7NuaWNvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6dmFsaWRhdGlvblwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0uZW1haWwuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sczogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc206IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2UtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ2FyZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRlcGVuZGVuY3lfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTp2YWxpZGF0aW9uXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXBlbmRlbmN5X25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRlcGVuZGVuY3lfbmFtZS4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVwZW5kZW5jeV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0uZGVwZW5kZW5jeV9uYW1lLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLXNlbGVjdC1zZWFyY2hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJKZWZlIGlubWVkaWF0byAoT3BjaW9uYWwpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0udXNlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5tZWRpYXRlX3N1cGVyaW9yX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5tZWRpYXRlX3N1cGVyaW9yX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlubWVkaWF0ZV9zdXBlcmlvcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgJCR2ID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCR2LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0uaW5tZWRpYXRlX3N1cGVyaW9yX2lkLiRtb2RlbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLXNlbGVjdC1zZWFyY2hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ucm9sZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0ucm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLnJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLnJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgJCR2ID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCR2LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0ucm9sLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQXV0b3JpemFudGU/XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kX3RvX3JyaGguJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmRfdG9fcnJoaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLnNlbmRfdG9fcnJoaC4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tbm9ybWFsIG5vLXVwcGVyY2FzZSBtdC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgR3VhcmRhclxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsYXJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcIml0ZW0uYWN0aW9uc1wiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHJlZikge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0b3A6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb24gPSByZWYub25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRycyA9IHJlZi5hdHRyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc21hbGw6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lZGl0SXRlbShpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIG1kaS1wZW5jaWxcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIFwiKSwgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJFZGl0YXJcIildKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcIm5vLWRhdGFcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1ub3JtYWwtc2Vjb25kYXJ5IG5vLWRlY29yYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaW5pdGlhbGl6ZSB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBSZWluaWNpYXJcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICksXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCIsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI0MDBweFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlhbG9nQmxvY2ssXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGlhbG9nQmxvY2sgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ0Jsb2NrXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaC0xMDBcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiaDFcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibGFjay1zZWNvbmRhcnkgdGV4dC1jZW50ZXIgbXQtMyBtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBEZXNhY3RpdmFyIHVzdWFyaW9cXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlIG10LTMgbWItMyBwci01IHBsLTUgbXgtYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZGlzYWJsZVVzZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25maXJtYXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTMgbWItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VCbG9jayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgQ2FuY2VsYXJcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2FscGhhJywgL15bYS16QS1aXSokLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdhbHBoYU51bScsIC9eW2EtekEtWjAtOV0qJC8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsaWRhdG9ycyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWxpZGF0b3JzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnYW5kJ1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3JzLmxlbmd0aCA+IDAgJiYgdmFsaWRhdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKHZhbGlkLCBmbikge1xuICAgICAgcmV0dXJuIHZhbGlkICYmIGZuLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICB9LCB0cnVlKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KG1pbiwgbWF4KSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ2JldHdlZW4nLFxuICAgIG1pbjogbWluLFxuICAgIG1heDogbWF4XG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKCEvXFxzLy50ZXN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpICYmICttaW4gPD0gK3ZhbHVlICYmICttYXggPj0gK3ZhbHVlO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXEgPSBleHBvcnRzLnJlZ2V4ID0gZXhwb3J0cy5yZWYgPSBleHBvcnRzLmxlbiA9IHZvaWQgMDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhQYXJhbXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3dpdGhQYXJhbXMuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfd2l0aFBhcmFtcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3dpdGhQYXJhbXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciByZXEgPSBmdW5jdGlvbiByZXEodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gISF2YWx1ZS5sZW5ndGg7XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuICFpc05hTih2YWx1ZS5nZXRUaW1lKCkpO1xuICB9XG5cbiAgaWYgKF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIF8gaW4gdmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhIVN0cmluZyh2YWx1ZSkubGVuZ3RoO1xufTtcblxuZXhwb3J0cy5yZXEgPSByZXE7XG5cbnZhciBsZW4gPSBmdW5jdGlvbiBsZW4odmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUubGVuZ3RoO1xuXG4gIGlmIChfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcodmFsdWUpLmxlbmd0aDtcbn07XG5cbmV4cG9ydHMubGVuID0gbGVuO1xuXG52YXIgcmVmID0gZnVuY3Rpb24gcmVmKHJlZmVyZW5jZSwgdm0sIHBhcmVudFZtKSB7XG4gIHJldHVybiB0eXBlb2YgcmVmZXJlbmNlID09PSAnZnVuY3Rpb24nID8gcmVmZXJlbmNlLmNhbGwodm0sIHBhcmVudFZtKSA6IHBhcmVudFZtW3JlZmVyZW5jZV07XG59O1xuXG5leHBvcnRzLnJlZiA9IHJlZjtcblxudmFyIHJlZ2V4ID0gZnVuY3Rpb24gcmVnZXgodHlwZSwgZXhwcikge1xuICByZXR1cm4gKDAsIF93aXRoUGFyYW1zLmRlZmF1bHQpKHtcbiAgICB0eXBlOiB0eXBlXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhcmVxKHZhbHVlKSB8fCBleHByLnRlc3QodmFsdWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMucmVnZXggPSByZWdleDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnZGVjaW1hbCcsIC9eWy1dP1xcZCooXFwuXFxkKyk/JC8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBlbWFpbFJlZ2V4ID0gL14oPzpbQS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW0EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSpcIilAKD86KD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV17Mix9KD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT98W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKSQvaTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdlbWFpbCcsIGVtYWlsUmVnZXgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYWxwaGFcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FscGhhLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYWxwaGFOdW1cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FscGhhTnVtLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYW5kXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hbmQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJiZXR3ZWVuXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9iZXR3ZWVuLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjaW1hbFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZGVjaW1hbC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVtYWlsXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9lbWFpbC5kZWZhdWx0O1xuICB9XG59KTtcbmV4cG9ydHMuaGVscGVycyA9IHZvaWQgMDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImludGVnZXJcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVnZXIuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpcEFkZHJlc3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lwQWRkcmVzcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1hY0FkZHJlc3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21hY0FkZHJlc3MuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtYXhMZW5ndGhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21heExlbmd0aC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1heFZhbHVlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYXhWYWx1ZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1pbkxlbmd0aFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWluTGVuZ3RoLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWluVmFsdWVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21pblZhbHVlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibm90XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9ub3QuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJudW1lcmljXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9udW1lcmljLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwib3JcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX29yLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVxdWlyZWRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JlcXVpcmVkLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVxdWlyZWRJZlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcmVxdWlyZWRJZi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlcXVpcmVkVW5sZXNzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yZXF1aXJlZFVubGVzcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNhbWVBc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfc2FtZUFzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXJsXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF91cmwuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfYWxwaGEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FscGhhXCIpKTtcblxudmFyIF9hbHBoYU51bSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYWxwaGFOdW1cIikpO1xuXG52YXIgX251bWVyaWMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL251bWVyaWNcIikpO1xuXG52YXIgX2JldHdlZW4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2JldHdlZW5cIikpO1xuXG52YXIgX2VtYWlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9lbWFpbFwiKSk7XG5cbnZhciBfaXBBZGRyZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pcEFkZHJlc3NcIikpO1xuXG52YXIgX21hY0FkZHJlc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21hY0FkZHJlc3NcIikpO1xuXG52YXIgX21heExlbmd0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWF4TGVuZ3RoXCIpKTtcblxudmFyIF9taW5MZW5ndGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21pbkxlbmd0aFwiKSk7XG5cbnZhciBfcmVxdWlyZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlcXVpcmVkXCIpKTtcblxudmFyIF9yZXF1aXJlZElmID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZXF1aXJlZElmXCIpKTtcblxudmFyIF9yZXF1aXJlZFVubGVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVxdWlyZWRVbmxlc3NcIikpO1xuXG52YXIgX3NhbWVBcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2FtZUFzXCIpKTtcblxudmFyIF91cmwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3VybFwiKSk7XG5cbnZhciBfb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL29yXCIpKTtcblxudmFyIF9hbmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FuZFwiKSk7XG5cbnZhciBfbm90ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ub3RcIikpO1xuXG52YXIgX21pblZhbHVlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9taW5WYWx1ZVwiKSk7XG5cbnZhciBfbWF4VmFsdWUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21heFZhbHVlXCIpKTtcblxudmFyIF9pbnRlZ2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pbnRlZ2VyXCIpKTtcblxudmFyIF9kZWNpbWFsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9kZWNpbWFsXCIpKTtcblxudmFyIGhlbHBlcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9jb21tb25cIikpO1xuXG5leHBvcnRzLmhlbHBlcnMgPSBoZWxwZXJzO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2ludGVnZXInLCAvKF5bMC05XSokKXwoXi1bMC05XSskKS8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgdHlwZTogJ2lwQWRkcmVzcydcbn0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAoISgwLCBfY29tbW9uLnJlcSkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBuaWJibGVzID0gdmFsdWUuc3BsaXQoJy4nKTtcbiAgcmV0dXJuIG5pYmJsZXMubGVuZ3RoID09PSA0ICYmIG5pYmJsZXMuZXZlcnkobmliYmxlVmFsaWQpO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG52YXIgbmliYmxlVmFsaWQgPSBmdW5jdGlvbiBuaWJibGVWYWxpZChuaWJibGUpIHtcbiAgaWYgKG5pYmJsZS5sZW5ndGggPiAzIHx8IG5pYmJsZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobmliYmxlWzBdID09PSAnMCcgJiYgbmliYmxlICE9PSAnMCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIW5pYmJsZS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbnVtZXJpYyA9ICtuaWJibGUgfCAwO1xuICByZXR1cm4gbnVtZXJpYyA+PSAwICYmIG51bWVyaWMgPD0gMjU1O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICB2YXIgc2VwYXJhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnOic7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21hY0FkZHJlc3MnXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHBhcnRzID0gdHlwZW9mIHNlcGFyYXRvciA9PT0gJ3N0cmluZycgJiYgc2VwYXJhdG9yICE9PSAnJyA/IHZhbHVlLnNwbGl0KHNlcGFyYXRvcikgOiB2YWx1ZS5sZW5ndGggPT09IDEyIHx8IHZhbHVlLmxlbmd0aCA9PT0gMTYgPyB2YWx1ZS5tYXRjaCgvLnsyfS9nKSA6IG51bGw7XG4gICAgcmV0dXJuIHBhcnRzICE9PSBudWxsICYmIChwYXJ0cy5sZW5ndGggPT09IDYgfHwgcGFydHMubGVuZ3RoID09PSA4KSAmJiBwYXJ0cy5ldmVyeShoZXhWYWxpZCk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbnZhciBoZXhWYWxpZCA9IGZ1bmN0aW9uIGhleFZhbGlkKGhleCkge1xuICByZXR1cm4gaGV4LnRvTG93ZXJDYXNlKCkubWF0Y2goL15bMC05YS1mXXsyfSQvKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChsZW5ndGgpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWF4TGVuZ3RoJyxcbiAgICBtYXg6IGxlbmd0aFxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICgwLCBfY29tbW9uLmxlbikodmFsdWUpIDw9IGxlbmd0aDtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KG1heCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtYXhWYWx1ZScsXG4gICAgbWF4OiBtYXhcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoIS9cXHMvLnRlc3QodmFsdWUpIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgJiYgK3ZhbHVlIDw9ICttYXg7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChsZW5ndGgpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWluTGVuZ3RoJyxcbiAgICBtaW46IGxlbmd0aFxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICgwLCBfY29tbW9uLmxlbikodmFsdWUpID49IGxlbmd0aDtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KG1pbikge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtaW5WYWx1ZScsXG4gICAgbWluOiBtaW5cbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoIS9cXHMvLnRlc3QodmFsdWUpIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgJiYgK3ZhbHVlID49ICttaW47XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdCh2YWxpZGF0b3IpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbm90J1xuICB9LCBmdW5jdGlvbiAodmFsdWUsIHZtKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAhdmFsaWRhdG9yLmNhbGwodGhpcywgdmFsdWUsIHZtKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnbnVtZXJpYycsIC9eWzAtOV0qJC8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsaWRhdG9ycyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWxpZGF0b3JzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnb3InXG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvcnMubGVuZ3RoID4gMCAmJiB2YWxpZGF0b3JzLnJlZHVjZShmdW5jdGlvbiAodmFsaWQsIGZuKSB7XG4gICAgICByZXR1cm4gdmFsaWQgfHwgZm4uYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgIH0sIGZhbHNlKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgdHlwZTogJ3JlcXVpcmVkJ1xufSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuICgwLCBfY29tbW9uLnJlcSkodmFsdWUudHJpbSgpKTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHByb3ApIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAncmVxdWlyZWRJZicsXG4gICAgcHJvcDogcHJvcFxuICB9LCBmdW5jdGlvbiAodmFsdWUsIHBhcmVudFZtKSB7XG4gICAgcmV0dXJuICgwLCBfY29tbW9uLnJlZikocHJvcCwgdGhpcywgcGFyZW50Vm0pID8gKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgOiB0cnVlO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQocHJvcCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdyZXF1aXJlZFVubGVzcycsXG4gICAgcHJvcDogcHJvcFxuICB9LCBmdW5jdGlvbiAodmFsdWUsIHBhcmVudFZtKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZWYpKHByb3AsIHRoaXMsIHBhcmVudFZtKSA/ICgwLCBfY29tbW9uLnJlcSkodmFsdWUpIDogdHJ1ZTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KGVxdWFsVG8pIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnc2FtZUFzJyxcbiAgICBlcTogZXF1YWxUb1xuICB9LCBmdW5jdGlvbiAodmFsdWUsIHBhcmVudFZtKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAoMCwgX2NvbW1vbi5yZWYpKGVxdWFsVG8sIHRoaXMsIHBhcmVudFZtKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciB1cmxSZWdleCA9IC9eKD86KD86KD86aHR0cHM/fGZ0cCk6KT9cXC9cXC8pKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHUwMGExLVxcdWZmZmZdW2EtejAtOVxcdTAwYTEtXFx1ZmZmZl8tXXswLDYyfSk/W2EtejAtOVxcdTAwYTEtXFx1ZmZmZl1cXC4pKyg/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfVxcLj8pKSg/OjpcXGR7Miw1fSk/KD86Wy8/I11cXFMqKT8kL2k7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgndXJsJywgdXJsUmVnZXgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciB3aXRoUGFyYW1zID0gcHJvY2Vzcy5lbnYuQlVJTEQgPT09ICd3ZWInID8gcmVxdWlyZSgnLi93aXRoUGFyYW1zQnJvd3NlcicpLndpdGhQYXJhbXMgOiByZXF1aXJlKCcuL3BhcmFtcycpLndpdGhQYXJhbXM7XG52YXIgX2RlZmF1bHQgPSB3aXRoUGFyYW1zO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLndpdGhQYXJhbXMgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIHJvb3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDoge307XG5cbnZhciBmYWtlV2l0aFBhcmFtcyA9IGZ1bmN0aW9uIGZha2VXaXRoUGFyYW1zKHBhcmFtc09yQ2xvc3VyZSwgbWF5YmVWYWxpZGF0b3IpIHtcbiAgaWYgKF90eXBlb2YocGFyYW1zT3JDbG9zdXJlKSA9PT0gJ29iamVjdCcgJiYgbWF5YmVWYWxpZGF0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBtYXliZVZhbGlkYXRvcjtcbiAgfVxuXG4gIHJldHVybiBwYXJhbXNPckNsb3N1cmUoZnVuY3Rpb24gKCkge30pO1xufTtcblxudmFyIHdpdGhQYXJhbXMgPSByb290LnZ1ZWxpZGF0ZSA/IHJvb3QudnVlbGlkYXRlLndpdGhQYXJhbXMgOiBmYWtlV2l0aFBhcmFtcztcbmV4cG9ydHMud2l0aFBhcmFtcyA9IHdpdGhQYXJhbXM7Il0sIm5hbWVzIjpbInJlcXVpcmVkIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiZW1haWwiLCJoZWxwZXJzIiwiZGF0YSIsInNlYXJjaCIsImRpYWxvZyIsImRpYWxvZ0Jsb2NrIiwiaGVhZGVycyIsInRleHQiLCJ2YWx1ZSIsInNvcnRhYmxlIiwic2VsZWN0ZWQiLCJyZWNvcmRzIiwicmVjb3Jkc0ZpbHRlcmVkIiwiZWRpdGVkSW5kZXgiLCJ0aXRsZSIsInNlbGVjdGVkVGFiIiwib3B0aW9ucyIsImVkaXRlZEl0ZW0iLCJuYW1lIiwibGFzdF9uYW1lIiwicGFzc3dvcmQiLCJyb2wiLCJwb3NpdGlvbl9zaWduYXR1cmUiLCJkZXBlbmRlbmN5X25hbWUiLCJpbm1lZGlhdGVfc3VwZXJpb3JfaWQiLCJzZW5kX3RvX3JyaGgiLCJkZWZhdWx0SXRlbSIsInRleHRBbGVydCIsImFsZXJ0RXZlbnQiLCJyb2xlcyIsImRlcGVuZGVuY2llcyIsInVzZXJzIiwicmVkaXJlY3RTZXNzaW9uRmluaXNoZWQiLCJzaG93QWxlcnQiLCJ0eXBlUGFzc3dvcmQiLCJkZWJvdW5jZSIsInZhbGlkYXRpb25zIiwiaXNWYWxpZFBhc3N3b3JkIiwiY29tcHV0ZWQiLCJmb3JtVGl0bGUiLCJ3YXRjaCIsImhhbmRsZXIiLCJkZWVwIiwiZGlydHkiLCJ2YWwiLCJjcmVhdGVkIiwibWV0aG9kcyIsImluaXRpYWxpemUiLCJyZXF1ZXN0cyIsInJvbGVBcGkiLCJ1c2VyQXBpIiwiUHJvbWlzZSIsImVycm9yIiwicmVzcG9uc2VzIiwiZWRpdEl0ZW0iLCJpdGVtIiwiY2xvc2UiLCJibG9ja0l0ZW0iLCJjbG9zZUJsb2NrIiwic2F2ZSIsImVkaXRlZCIsIk9iamVjdCIsInB1dCIsInJlcyIsImdldERhdGFGcm9tQXBpIiwiY2xlYXJUaW1lb3V0IiwiZ2V0IiwicGFyYW1zIiwiZGlzYWJsZVVzZXIiLCJwb3N0IiwiaWQiLCJyZXNwb25zZSIsIm5ld1VzZXIiLCJ1cGRhdGVBbGVydCIsInVwZGF0ZVRpbWVPdXQiLCJldmVudCIsInNob3dQYXNzd29yZCIsImUiLCJ2Iiwib29fY20iLCJheGlvcyIsImRlcGFydG1lbnRBcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY3VsdHVyYUhvdXNlQXBpIiwidmVyaWZ5U2Vzc2lvbkZpbmlzaGVkIiwic3RhdHVzIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJvb19vbyIsImV2YWwiLCJpIiwiY29uc29sZUxvZyIsIm9vX3RyIiwiY29uc29sZVRyYWNlIiwib29fdHMiLCJjb25zb2xlVGltZSIsIm9vX3RlIiwiY29uc29sZVRpbWVFbmQiXSwic291cmNlUm9vdCI6IiJ9