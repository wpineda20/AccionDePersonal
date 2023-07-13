(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_PersonnelActionForm_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonnelActionForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonnelActionForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var _libs_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/function */ "./resources/js/libs/function.js");
/* harmony import */ var _apis_userApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/userApi */ "./resources/js/apis/userApi.js");
/* harmony import */ var _apis_justificationTypeApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/justificationTypeApi */ "./resources/js/apis/justificationTypeApi.js");
/* harmony import */ var _apis_personnelActionApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apis/personnelActionApi */ "./resources/js/apis/personnelActionApi.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {
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
        period_by: "hours"
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
        period_by: "hours"
      }
    };
  },
  validations: {
    editedItem: {
      // Part 1
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.maxLength)(500)
      },
      position_signature: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.maxLength)(500)
      },
      dependency_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.maxLength)(500)
      },
      // Part 2
      justification_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.maxLength)(500)
      },
      // Part 3
      period_by: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      },
      // Part 3 - Hours
      from_hour: {
        required: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.requiredIf)(function () {
          return this.editedItem.period_by == 'hours';
        }),
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      },
      to_hour: {
        required: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.requiredIf)(function () {
          return this.editedItem.period_by == 'hours';
        }),
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      },
      total_hours: {
        required: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.requiredIf)(function () {
          return this.editedItem.period_by == 'hours';
        }),
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      },
      effective_date: {
        required: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.requiredIf)(function () {
          return this.editedItem.period_by == 'hours';
        }),
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      },
      // Part 3 - Days
      from_date: {
        required: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.requiredIf)(function () {
          return this.editedItem.period_by == 'days';
        }),
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      },
      to_date: {
        required: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.requiredIf)(function () {
          return this.editedItem.period_by == 'days';
        }),
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      },
      total_days: {
        required: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.requiredIf)(function () {
          return this.editedItem.period_by == 'days';
        }),
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      },
      // Part 4 - Justification
      justification: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.maxLength)(400)
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
      execution_to: ""
    }
  },
  created: function created() {
    this.initialize();
  },
  computed: {
    multiplicar: function multiplicar() {
      return +this.editedItem.assigned_by * +this.editedItem.execution_number_hours;
    }
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var requests, responses;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                requests = [_apis_userApi__WEBPACK_IMPORTED_MODULE_2__["default"].get("/actualUser"), _apis_justificationTypeApi__WEBPACK_IMPORTED_MODULE_3__["default"].get(null, {
                  params: {
                    itemsPerPage: -1
                  }
                })];
                _context.next = 4;
                return Promise.all(requests)["catch"](function (error) {
                  _this.updateAlert(true, "No fue posible obtener los registros.", "fail");

                  _this.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_1__["default"].verifySessionFinished(error.response.status, 401);
                });

              case 4:
                responses = _context.sent;

                if (responses) {
                  _this.user = responses[0].data.user;
                  _this.justifications = responses[1].data.records;
                  _this.editedItem.name = _this.user.name;
                  _this.editedItem.position_signature = _this.user.position_signature;
                  _this.editedItem.dependency_name = _this.user.dependency_name;
                }

                _this.loading = false;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    save: function save() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$personnelActio, data, status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$v.$touch();

                if (!_this2.$v.editedItem.$invalid) {
                  _context2.next = 4;
                  break;
                }

                _this2.updateAlert(true, "Campos obligatorios.", "fail");

                return _context2.abrupt("return");

              case 4:
                _this2.loading = true;
                _context2.next = 7;
                return _apis_personnelActionApi__WEBPACK_IMPORTED_MODULE_4__["default"].post(null, _this2.editedItem)["catch"](function (error) {
                  _this2.updateAlert(true, error.response.data.message, "fail");

                  _this2.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_1__["default"].verifySessionFinished(error.response.status, 401);

                  _this2.clearForm();
                });

              case 7:
                _yield$personnelActio = _context2.sent;
                data = _yield$personnelActio.data;
                status = _yield$personnelActio.status;

                if (status == '200') {
                  _this2.updateAlert(true, data.message, data.state, 10000);

                  _this2.clearForm();
                } else {
                  _this2.updateAlert(true, data.message, data.state);
                }

                _this2.loading = false;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    showHourForm: function showHourForm() {
      this.showDayInputs = false;
      this.showHourInputs = true;
      this.$v.$reset();
      this.editedItem.from_hour = "";
      this.editedItem.to_hour = "";
      this.editedItem.total_hours = "";
      this.editedItem.effective_date = "";
    },
    showDayForm: function showDayForm() {
      this.showHourInputs = false;
      this.showDayInputs = true;
      this.$v.$reset();
      this.editedItem.from_date = "";
      this.editedItem.to_date = "";
      this.editedItem.total_days = "";
    },
    clearForm: function clearForm() {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.showDayInputs = false;
      this.showHourInputs = false;
      this.$v.$reset();
      this.initialize();
    },
    updateAlert: function updateAlert() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Alerta";
      var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;

      if (show) {
        this.$refs.top.scrollIntoView();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/apis/justificationTypeApi.js":
/*!***************************************************!*\
  !*** ./resources/js/apis/justificationTypeApi.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // import { interceptorRequest, interceptorReponse } from "./interceptor";

var justificationTypeApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/web/justificationType"
}); // justificationTypeApi.interceptors.request.use(interceptorRequest);
// justificationTypeApi.interceptors.response.reject(interceptorReponse);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (justificationTypeApi);

/***/ }),

/***/ "./resources/js/apis/personnelActionApi.js":
/*!*************************************************!*\
  !*** ./resources/js/apis/personnelActionApi.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // import { interceptorRequest, interceptorReponse } from "./interceptor";

var personnelActionApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/web/personnelAction"
}); // personnelActionApi.interceptors.request.use(interceptorRequest);
// personnelActionApi.interceptors.response.reject(interceptorReponse);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (personnelActionApi);

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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonnelActionForm.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonnelActionForm.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.theme--light.v-icon {\n  color: #2d52a8;\n}\n.theme--light.v-label--is-disabled {\n  color: grey !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/PersonnelActionForm.vue"],"names":[],"mappings":";AA+2BA;EACA,cAAA;AACA;AAEA;EACA,sBAAA;AACA","sourcesContent":["<template>\n  <div ref=\"top\">\n    <!-- disclaimer -->\n    <disclaimer-register />\n    <!-- disclaimer -->\n\n    <alert\n      :text=\"textAlert\"\n      :event=\"alertEvent\"\n      :show=\"showAlert\"\n      @show-alert=\"updateAlert($event)\"\n      class=\"mb-2\"\n    />\n\n    <!-- row -->\n    <v-row\n      v-if=\"!loading\"\n      style=\"background-color: #fff; border-radius: 10px\"\n      class=\"p-4 shadow\"\n    >\n      <h5\n        class=\"fw-bold pb-2 mb-4\"\n        style=\"border-bottom: 1px solid lightgray\"\n      >\n        I- DATOS GENERALES\n      </h5>\n\n      <!-- name -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"6\"\n        class=\"m-0 pb-3\"\n      >\n        <base-input\n          label=\"Nombre del empleado\"\n          v-model=\"$v.editedItem.name.$model\"\n          :validation=\"$v.editedItem.name\"\n          validationTextType=\"none\"\n          type=\"text\"\n          :disabled=\"true\"\n        />\n      </v-col>\n      <!-- name -->\n\n      <!-- position_signature -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"6\"\n        class=\"m-0 pb-3\"\n      >\n        <base-input\n          label=\"Cargo\"\n          v-model=\"$v.editedItem.position_signature.$model\"\n          :validation=\"$v.editedItem.position_signature\"\n          validationTextType=\"none\"\n          type=\"text\"\n          :disabled=\"true\"\n        />\n      </v-col>\n      <!-- position_signature -->\n\n      <!-- dependency -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"12\"\n        class=\"m-0 pb-3\"\n      >\n        <base-input\n          label=\"Unidad de trabajo\"\n          v-model=\"$v.editedItem.dependency_name.$model\"\n          :validation=\"$v.editedItem.dependency_name\"\n          validationTextType=\"none\"\n          type=\"text\"\n          :disabled=\"true\"\n        />\n      </v-col>\n      <!-- dependency -->\n\n      <h5\n        class=\"fw-bold pb-2 mb-4\"\n        style=\"border-bottom: 1px solid lightgray\"\n      >\n        II- NATURALEZA DE LA LICENCIA POR:\n      </h5>\n\n      <!-- justificaction_name -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"12\"\n        class=\"m-0 pb-4\"\n      >\n        <base-select-search\n          label=\"Tipo de justificación\"\n          v-model.trim=\"$v.editedItem.justification_name.$model\"\n          :items=\"justifications\"\n          item=\"justification_name\"\n          :validation=\"$v.editedItem.justification_name\"\n        />\n      </v-col>\n      <!-- justificaction_name -->\n      <h5\n        class=\"fw-bold pb-2 mb-4\"\n        style=\"border-bottom: 1px solid lightgray\"\n      >\n        III.- PERIODO POR:\n      </h5>\n      <!-- radio group -->\n      <div style=\"display: flex; justify-content: center\">\n        <v-radio-group\n          v-model=\"$v.editedItem.period_by.$model\"\n          row\n        >\n          <!-- radio hours -->\n          <v-radio\n            value=\"hours\"\n            @click=\"showHourForm()\"\n          >\n            <template v-slot:label>\n              <div>\n                <strong style=\"margin-left: 8px; color: #313945\">HORAS</strong>\n              </div>\n            </template>\n          </v-radio>\n          <!-- radio hours -->\n          <!-- radio days -->\n          <v-radio\n            value=\"days\"\n            @click=\"showDayForm()\"\n          >\n            <template v-slot:label>\n              <div>\n                <strong style=\"margin-left: 8px; color: #313945\">DÍAS</strong>\n              </div>\n            </template>\n          </v-radio>\n          <!-- radio days -->\n        </v-radio-group>\n      </div>\n      <!-- radio group -->\n\n      <!-- hours col -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"12\"\n        v-show=\"editedItem.period_by == 'hours'\"\n      >\n        <h6 class=\"text-center fw-bold\">HORAS:</h6>\n        <v-row style=\"display: flex; justify-content: center\">\n          <!-- from_hour -->\n          <v-col\n            cols=\"12\"\n            sm=\"6\"\n            md=\"4\"\n            class=\"\"\n          >\n            <base-input\n              label=\"Desde las\"\n              v-model=\"$v.editedItem.from_hour.$model\"\n              :validation=\"$v.editedItem.from_hour\"\n              validationTextType=\"default\"\n              type=\"time\"\n            />\n          </v-col>\n          <!-- from_hour -->\n          <!-- from_hour -->\n          <v-col\n            cols=\"12\"\n            sm=\"6\"\n            md=\"4\"\n            class=\"\"\n          >\n            <base-input\n              label=\"hasta las\"\n              v-model=\"$v.editedItem.to_hour.$model\"\n              :validation=\"$v.editedItem.to_hour\"\n              validationTextType=\"default\"\n              type=\"time\"\n            />\n          </v-col>\n          <!-- from_hour -->\n\n          <!-- total_hours -->\n          <v-col\n            cols=\"12\"\n            sm=\"12\"\n            md=\"8\"\n            class=\"m-0 pb-3\"\n          >\n            <base-input\n              label=\"Total de horas\"\n              v-model=\"$v.editedItem.total_hours.$model\"\n              :validation=\"$v.editedItem.total_hours\"\n              validationTextType=\"none\"\n            />\n          </v-col>\n          <!-- total_hours -->\n          <!-- effective_date -->\n          <v-col\n            cols=\"12\"\n            sm=\"12\"\n            md=\"8\"\n            class=\"\"\n          >\n            <base-input\n              label=\"Fecha efectiva para\"\n              v-model=\"$v.editedItem.effective_date.$model\"\n              :validation=\"$v.editedItem.effective_date\"\n              validationTextType=\"default\"\n              type=\"date\"\n            />\n          </v-col>\n          <!-- effective_date -->\n        </v-row>\n      </v-col>\n      <!-- hours col -->\n\n      <!-- dates col -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"12\"\n        v-show=\"editedItem.period_by == 'days'\"\n      >\n        <h6 class=\"text-center fw-bold\">DÍA(S) COMPLETO(S):</h6>\n        <v-row style=\"display: flex; justify-content: center\">\n          <!-- from_date -->\n          <v-col\n            cols=\"12\"\n            sm=\"12\"\n            md=\"4\"\n            class=\"\"\n          >\n            <base-input\n              label=\"Del\"\n              v-model=\"$v.editedItem.from_date.$model\"\n              :validation=\"$v.editedItem.from_date\"\n              validationTextType=\"default\"\n              type=\"date\"\n            />\n          </v-col>\n          <!-- from_date -->\n          <!-- from_date -->\n          <v-col\n            cols=\"12\"\n            sm=\"12\"\n            md=\"4\"\n            class=\"\"\n          >\n            <base-input\n              label=\"Al\"\n              v-model=\"$v.editedItem.to_date.$model\"\n              :validation=\"$v.editedItem.to_date\"\n              validationTextType=\"default\"\n              type=\"date\"\n            />\n          </v-col>\n          <!-- from_date -->\n          <!-- total_days -->\n          <v-col\n            cols=\"12\"\n            sm=\"12\"\n            md=\"8\"\n            class=\"m-0 pb-3\"\n          >\n            <base-input\n              label=\"Total de días\"\n              v-model=\"$v.editedItem.total_days.$model\"\n              :validation=\"$v.editedItem.total_days\"\n              validationTextType=\"none\"\n            />\n          </v-col>\n          <!-- total_days -->\n        </v-row>\n      </v-col>\n      <!-- dates col -->\n\n      <h5\n        class=\"fw-bold pb-2 mb-4 pt-4\"\n        style=\"border-bottom: 1px solid lightgray\"\n      >\n        IV- JUSTIFICANTES\n      </h5>\n\n      <!-- justification -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"12\"\n      >\n        <base-text-area\n          label=\"Justificación\"\n          v-model=\"$v.editedItem.justification.$model\"\n          :validation=\"$v.editedItem.justification\"\n          validationTextType=\"none\"\n          :rows=\"6\"\n          counter\n        />\n\n        <div style=\"display: flex; justify-content: flex-end\">\n          <p class=\"text-right\">{{ $v.editedItem.justification.$model.length }} / 400</p>\n        </div>\n      </v-col>\n      <!-- justification -->\n\n      <h5\n        class=\"fw-bold pb-2 mb-4\"\n        style=\"border-bottom: 1px solid lightgray\"\n      >\n        V. TIEMPO EXTRAORDINARIO / DESCANSO\n      </h5>\n\n      <h6 class=\"fw-bold mb-0\">\n        En caso de solicitud de descanso compensatorio detallar causa o motivo\n        que lo generó:\n      </h6>\n      <!-- extraordinary_work -->\n      <v-col\n        cols=\"12\"\n        xs=\"12\"\n        sm=\"12\"\n        md=\"6\"\n      >\n        <v-checkbox\n          v-model=\"$v.editedItem.extraordinary_work.$model\"\n          :validation.sync=\"$v.editedItem.extraordinary_work\"\n        >\n          <template v-slot:label>\n            <div style=\"margin-left: 6px\">\n              Trabajo extraordinario en día descanso, vacación o asueto\n            </div>\n          </template>\n        </v-checkbox>\n      </v-col>\n      <!-- extraordinary_work -->\n\n      <!-- training -->\n      <v-col\n        cols=\"12\"\n        xs=\"12\"\n        sm=\"12\"\n        md=\"6\"\n      >\n        <v-checkbox\n          v-model=\"$v.editedItem.training.$model\"\n          :validation.sync=\"$v.editedItem.training\"\n        >\n          <template v-slot:label>\n            <div style=\"margin-left: 6px\">\n              Capacitación en día descanso, vacación o asueto\n            </div>\n          </template>\n        </v-checkbox>\n      </v-col>\n      <!-- training -->\n\n      <h6 class=\"fw-bold\">Detalle de la actividad realizada:</h6>\n\n      <!-- execution_site -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"8\"\n        class=\"m-0 pb-3\"\n      >\n        <base-input\n          label=\"Lugar de ejecución\"\n          v-model.trim=\"$v.editedItem.execution_site.$model\"\n          :validation=\"$v.editedItem.execution_site\"\n          validationTextType=\"none\"\n          type=\"text\"\n        />\n      </v-col>\n      <!-- execution_site -->\n\n      <!-- execution_date -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"4\"\n        class=\"m-0 pb-3\"\n      >\n        <base-input\n          label=\"Fecha de ejecución\"\n          v-model=\"$v.editedItem.execution_date.$model\"\n          :validation=\"$v.editedItem.execution_date\"\n          validationTextType=\"none\"\n          type=\"date\"\n        />\n      </v-col>\n      <!-- execution_date -->\n\n      <!-- execution_schedule -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"4\"\n        class=\"m-0 pb-3\"\n      >\n        <base-input\n          label=\"Horario de ejecución\"\n          v-model=\"$v.editedItem.execution_schedule.$model\"\n          :validation=\"$v.editedItem.execution_schedule\"\n          validationTextType=\"none\"\n          type=\"text\"\n        />\n      </v-col>\n      <!-- execution_schedule -->\n\n      <!-- execution_number_hours -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"4\"\n        class=\"m-0 pb-3\"\n      >\n        <base-input\n          label=\"Cantidad de horas\"\n          v-model=\"$v.editedItem.execution_number_hours.$model\"\n          :validation=\"$v.editedItem.execution_number_hours\"\n          validationTextType=\"none\"\n          type=\"number\"\n        />\n      </v-col>\n      <!-- execution_number_hours -->\n\n      <!-- assigned_by -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"4\"\n        class=\"m-0 pb-3\"\n      >\n        <base-input\n          label=\"Asignado por\"\n          v-model=\"$v.editedItem.assigned_by.$model\"\n          :validation=\"$v.editedItem.assigned_by\"\n          validationTextType=\"none\"\n        />\n      </v-col>\n      <!-- assigned_by -->\n\n      <!-- number_days_requested -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"3\"\n        class=\"m-0 pb-3\"\n      >\n        <base-input\n          label=\"Cantidad de días solicitados\"\n          v-model=\"$v.editedItem.number_days_requested.$model\"\n          :validation=\"$v.editedItem.number_days_requested\"\n          validationTextType=\"none\"\n          type=\"number\"\n        />\n      </v-col>\n      <!-- number_days_requested -->\n\n      <!-- execution_effective_date -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"3\"\n        class=\"m-0 pb-3\"\n      >\n        <base-input\n          label=\"Fecha que se hará efectivo\"\n          v-model=\"$v.editedItem.execution_effective_date.$model\"\n          :validation=\"$v.editedItem.execution_effective_date\"\n          validationTextType=\"none\"\n          type=\"date\"\n        />\n      </v-col>\n      <!-- execution_effective_date -->\n\n      <!-- execution_from -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"3\"\n        class=\"m-0 pb-3\"\n      >\n        <base-input\n          label=\"Desde\"\n          v-model=\"$v.editedItem.execution_from.$model\"\n          :validation=\"$v.editedItem.execution_from\"\n          validationTextType=\"none\"\n          type=\"text\"\n        />\n      </v-col>\n      <!-- execution_from -->\n\n      <!-- execution_to -->\n      <v-col\n        cols=\"12\"\n        sm=\"12\"\n        md=\"3\"\n        class=\"m-0 pb-3\"\n      >\n        <base-input\n          label=\"Hasta\"\n          v-model=\"$v.editedItem.execution_to.$model\"\n          :validation=\"$v.editedItem.execution_to\"\n          validationTextType=\"none\"\n          type=\"text\"\n        />\n      </v-col>\n      <!-- execution_to -->\n\n      <h5\n        class=\"fw-bold pt-3 pb-2 mb-0\"\n        style=\"border-bottom: 1px solid lightgray\"\n      >\n        VI. ANEXAR DOCUMENTOS\n      </h5>\n\n      <!-- justification_file -->\n      <v-col\n        cols=\"12\"\n        xs=\"12\"\n        sm=\"12\"\n        md=\"6\"\n      >\n        <h6 class=\"mb-0 fw-bold\">\n          Documentación original para justificación de acción de personal (PDF).\n        </h6>\n        <span class=\"text-muted\">(Cuando sea requerido)</span>\n        <input-file\n          accept=\"application/pdf\"\n          v-model=\"$v.editedItem.justification_file.$model\"\n          :validation=\"$v.editedItem.justification_file\"\n          @update-file=\"editedItem.justification_file = $event\"\n          @file-size-exceeded=\"$emit('file-size-exceeded', true)\"\n        />\n      </v-col>\n      <!-- justification_file -->\n\n      <!-- buttons -->\n      <v-row>\n        <v-col\n          align=\"center\"\n          cols=\"12\"\n          sm=\"12\"\n          md=\"12\"\n          class=\"\"\n        >\n          <v-btn\n            color=\"btn-normal no-uppercase\"\n            :disabled=\"loading || !user.inmediate_superior_id\"\n            rounded\n            @click=\"save()\"\n          >\n            Solicitar\n          </v-btn>\n\n          <v-btn\n            color=\"btn-normal-close no-uppercase\"\n            rounded\n            @click=\"clearForm()\"\n          >\n            Limpiar\n          </v-btn>\n\n          <p\n            class=\"text-red mt-3\"\n            v-if=\"!user.inmediate_superior_id\"\n          >No podrás registrar tus acciones de personal hasta que tu jefe inmediato\n            inicie sesión dentro de la\n            plataforma.</p>\n        </v-col>\n      </v-row>\n      <!-- buttons -->\n    </v-row>\n    <!-- row -->\n\n    <!-- loader -->\n    <v-row\n      v-show=\"loading\"\n      style=\"background-color: #fff; border-radius: 10px\"\n      class=\"p-4 shadow\"\n    >\n      <loader v-show=\"loading\" />\n    </v-row>\n    <!-- loader -->\n  </div>\n</template>\n\n<script>\nimport {\n  required,\n  email,\n  minLength,\n  maxLength,\n  requiredIf,\n} from \"vuelidate/lib/validators\";\nimport lib from \"../libs/function\";\nimport userApi from \"../apis/userApi\";\nimport justificationTypeApi from \"../apis/justificationTypeApi\";\nimport personnelActionApi from \"../apis/personnelActionApi\";\n\nexport default {\n  data: () => ({\n    loading: false,\n    textAlert: \"\",\n    alertEvent: \"success\",\n    showAlert: false,\n    justifications: [],\n    radioAlert: false,\n    showDayInputs: false,\n    showHourInputs: false,\n    editedItem: {\n      name: \"\",\n      position_signature: \"\",\n      dependency_name: \"\",\n      justification_name: \"\",\n      from_hour: \"\",\n      to_hour: \"\",\n      total_hours: \"\",\n      effective_date: \"\",\n      from_date: \"\",\n      to_date: \"\",\n      total_days: \"\",\n      justification: \"\",\n      justification_file: \"\",\n      extraordinary_work: false,\n      training: false,\n      execution_site: \"\",\n      execution_date: \"\",\n      execution_schedule: \"\",\n      execution_number_hours: \"\",\n      assigned_by: \"\",\n      number_days_requested: \"\",\n      execution_effective_date: \"\",\n      execution_from: \"\",\n      execution_to: \"\",\n      period_by: \"hours\",\n    },\n    defaultItem: {\n      name: \"\",\n      position_signature: \"\",\n      dependency_name: \"\",\n      justification_name: \"\",\n      from_hour: \"\",\n      to_hour: \"\",\n      total_hours: \"\",\n      effective_date: \"\",\n      from_date: \"\",\n      to_date: \"\",\n      total_days: \"\",\n      justification: \"\",\n      justification_file: \"\",\n      extraordinary_work: false,\n      training: false,\n      execution_site: \"\",\n      execution_date: \"\",\n      execution_schedule: \"\",\n      execution_number_hours: \"\",\n      assigned_by: \"\",\n      number_days_requested: \"\",\n      execution_effective_date: \"\",\n      execution_from: \"\",\n      execution_to: \"\",\n      period_by: \"hours\",\n    },\n  }),\n\n  validations: {\n    editedItem: {\n      // Part 1\n      name: {\n        required,\n        minLength: minLength(1),\n        maxLength: maxLength(500),\n      },\n      position_signature: {\n        required,\n        minLength: minLength(1),\n        maxLength: maxLength(500),\n      },\n      dependency_name: {\n        required,\n        minLength: minLength(1),\n        maxLength: maxLength(500),\n      },\n      // Part 2\n      justification_name: {\n        required,\n        minLength: minLength(1),\n        maxLength: maxLength(500),\n      },\n      // Part 3\n      period_by: {\n        required: required,\n        minLength: minLength(1),\n      },\n      // Part 3 - Hours\n      from_hour: {\n        required: requiredIf(function () {\n          return this.editedItem.period_by == 'hours';\n        }),\n        minLength: minLength(1),\n      },\n      to_hour: {\n        required: requiredIf(function () {\n          return this.editedItem.period_by == 'hours';\n        }),\n        minLength: minLength(1),\n      },\n      total_hours: {\n        required: requiredIf(function () {\n          return this.editedItem.period_by == 'hours';\n        }),\n        minLength: minLength(1),\n      },\n      effective_date: {\n        required: requiredIf(function () {\n          return this.editedItem.period_by == 'hours';\n        }),\n        minLength: minLength(1),\n      },\n      // Part 3 - Days\n      from_date: {\n        required: requiredIf(function () {\n          return this.editedItem.period_by == 'days';\n        }),\n        minLength: minLength(1),\n      },\n      to_date: {\n        required: requiredIf(function () {\n          return this.editedItem.period_by == 'days';\n        }),\n        minLength: minLength(1),\n      },\n      total_days: {\n        required: requiredIf(function () {\n          return this.editedItem.period_by == 'days';\n        }),\n        minLength: minLength(1),\n      },\n      // Part 4 - Justification\n      justification: {\n        required,\n        minLength: minLength(1),\n        maxLength: maxLength(400),\n      },\n      justification_file: {},\n      extraordinary_work: false,\n      training: false,\n      execution_site: \"\",\n      execution_date: \"\",\n      execution_schedule: \"\",\n      execution_number_hours: \"\",\n      assigned_by: \"\",\n      number_days_requested: \"\",\n      execution_effective_date: \"\",\n      execution_from: \"\",\n      execution_to: \"\",\n    },\n  },\n\n  created() {\n    this.initialize();\n  },\n\n  computed: {\n    multiplicar: function () {\n      return (\n        +this.editedItem.assigned_by * +this.editedItem.execution_number_hours\n      );\n    },\n  },\n\n  methods: {\n    async initialize() {\n      this.loading = true;\n\n      let requests = [\n        userApi.get(`/actualUser`),\n        justificationTypeApi.get(null, {\n          params: { itemsPerPage: -1 },\n        }),\n      ];\n\n      const responses = await Promise.all(requests).catch((error) => {\n        this.updateAlert(true, \"No fue posible obtener los registros.\", \"fail\");\n\n        this.redirectSessionFinished = lib.verifySessionFinished(\n          error.response.status,\n          401\n        );\n      });\n\n      if (responses) {\n        this.user = responses[0].data.user;\n        this.justifications = responses[1].data.records;\n\n        this.editedItem.name = this.user.name;\n        this.editedItem.position_signature = this.user.position_signature;\n        this.editedItem.dependency_name = this.user.dependency_name;\n      }\n\n      this.loading = false;\n    },\n\n    async save() {\n      this.$v.$touch();\n\n      if (this.$v.editedItem.$invalid) {\n        this.updateAlert(true, \"Campos obligatorios.\", \"fail\");\n        return;\n      }\n      this.loading = true;\n\n      let { data, status } = await personnelActionApi\n        .post(null, this.editedItem)\n        .catch((error) => {\n          this.updateAlert(true, error.response.data.message, \"fail\");\n\n          this.redirectSessionFinished = lib.verifySessionFinished(\n            error.response.status,\n            401\n          );\n          this.clearForm();\n        });\n\n      if (status == '200') {\n        this.updateAlert(true, data.message, data.state, 10000);\n        this.clearForm();\n      } else {\n        this.updateAlert(true, data.message, data.state);\n      }\n      this.loading = false;\n    },\n\n    showHourForm() {\n      this.showDayInputs = false;\n      this.showHourInputs = true;\n      this.$v.$reset();\n      this.editedItem.from_hour = \"\";\n      this.editedItem.to_hour = \"\";\n      this.editedItem.total_hours = \"\";\n      this.editedItem.effective_date = \"\";\n    },\n\n    showDayForm() {\n      this.showHourInputs = false;\n      this.showDayInputs = true;\n      this.$v.$reset();\n      this.editedItem.from_date = \"\";\n      this.editedItem.to_date = \"\";\n      this.editedItem.total_days = \"\";\n    },\n\n    clearForm() {\n      this.editedItem = Object.assign({}, this.defaultItem);\n      this.showDayInputs = false;\n      this.showHourInputs = false;\n      this.$v.$reset();\n      this.initialize();\n    },\n\n    updateAlert(show = false, text = \"Alerta\", event = \"success\") {\n      this.textAlert = text;\n      this.alertEvent = event;\n      this.showAlert = show;\n      if (show) {\n        this.$refs.top.scrollIntoView();\n      }\n    },\n  },\n};\n</script>\n\n<style>\n.theme--light.v-icon {\n  color: #2d52a8;\n}\n\n.theme--light.v-label--is-disabled {\n  color: grey !important;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonnelActionForm.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonnelActionForm.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonnelActionForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonnelActionForm.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonnelActionForm.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonnelActionForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonnelActionForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/PersonnelActionForm.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/PersonnelActionForm.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PersonnelActionForm_vue_vue_type_template_id_bc11c982___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonnelActionForm.vue?vue&type=template&id=bc11c982& */ "./resources/js/components/PersonnelActionForm.vue?vue&type=template&id=bc11c982&");
/* harmony import */ var _PersonnelActionForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonnelActionForm.vue?vue&type=script&lang=js& */ "./resources/js/components/PersonnelActionForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _PersonnelActionForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersonnelActionForm.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/PersonnelActionForm.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PersonnelActionForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PersonnelActionForm_vue_vue_type_template_id_bc11c982___WEBPACK_IMPORTED_MODULE_0__.render,
  _PersonnelActionForm_vue_vue_type_template_id_bc11c982___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PersonnelActionForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PersonnelActionForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/PersonnelActionForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonnelActionForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonnelActionForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonnelActionForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonnelActionForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PersonnelActionForm.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/PersonnelActionForm.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonnelActionForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonnelActionForm.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonnelActionForm.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/PersonnelActionForm.vue?vue&type=template&id=bc11c982&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/PersonnelActionForm.vue?vue&type=template&id=bc11c982& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonnelActionForm_vue_vue_type_template_id_bc11c982___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonnelActionForm_vue_vue_type_template_id_bc11c982___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonnelActionForm_vue_vue_type_template_id_bc11c982___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonnelActionForm.vue?vue&type=template&id=bc11c982& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonnelActionForm.vue?vue&type=template&id=bc11c982&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonnelActionForm.vue?vue&type=template&id=bc11c982&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonnelActionForm.vue?vue&type=template&id=bc11c982& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { ref: "top" },
    [
      _c("disclaimer-register"),
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
      !_vm.loading
        ? _c(
            "v-row",
            {
              staticClass: "p-4 shadow",
              staticStyle: {
                "background-color": "#fff",
                "border-radius": "10px",
              },
            },
            [
              _c(
                "h5",
                {
                  staticClass: "fw-bold pb-2 mb-4",
                  staticStyle: { "border-bottom": "1px solid lightgray" },
                },
                [_vm._v("\n      I- DATOS GENERALES\n    ")]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "m-0 pb-3",
                  attrs: { cols: "12", sm: "12", md: "6" },
                },
                [
                  _c("base-input", {
                    attrs: {
                      label: "Nombre del empleado",
                      validation: _vm.$v.editedItem.name,
                      validationTextType: "none",
                      type: "text",
                      disabled: true,
                    },
                    model: {
                      value: _vm.$v.editedItem.name.$model,
                      callback: function ($$v) {
                        _vm.$set(_vm.$v.editedItem.name, "$model", $$v)
                      },
                      expression: "$v.editedItem.name.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "m-0 pb-3",
                  attrs: { cols: "12", sm: "12", md: "6" },
                },
                [
                  _c("base-input", {
                    attrs: {
                      label: "Cargo",
                      validation: _vm.$v.editedItem.position_signature,
                      validationTextType: "none",
                      type: "text",
                      disabled: true,
                    },
                    model: {
                      value: _vm.$v.editedItem.position_signature.$model,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.$v.editedItem.position_signature,
                          "$model",
                          $$v
                        )
                      },
                      expression: "$v.editedItem.position_signature.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "m-0 pb-3",
                  attrs: { cols: "12", sm: "12", md: "12" },
                },
                [
                  _c("base-input", {
                    attrs: {
                      label: "Unidad de trabajo",
                      validation: _vm.$v.editedItem.dependency_name,
                      validationTextType: "none",
                      type: "text",
                      disabled: true,
                    },
                    model: {
                      value: _vm.$v.editedItem.dependency_name.$model,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.$v.editedItem.dependency_name,
                          "$model",
                          $$v
                        )
                      },
                      expression: "$v.editedItem.dependency_name.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "h5",
                {
                  staticClass: "fw-bold pb-2 mb-4",
                  staticStyle: { "border-bottom": "1px solid lightgray" },
                },
                [_vm._v("\n      II- NATURALEZA DE LA LICENCIA POR:\n    ")]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "m-0 pb-4",
                  attrs: { cols: "12", sm: "12", md: "12" },
                },
                [
                  _c("base-select-search", {
                    attrs: {
                      label: "Tipo de justificación",
                      items: _vm.justifications,
                      item: "justification_name",
                      validation: _vm.$v.editedItem.justification_name,
                    },
                    model: {
                      value: _vm.$v.editedItem.justification_name.$model,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.$v.editedItem.justification_name,
                          "$model",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "$v.editedItem.justification_name.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "h5",
                {
                  staticClass: "fw-bold pb-2 mb-4",
                  staticStyle: { "border-bottom": "1px solid lightgray" },
                },
                [_vm._v("\n      III.- PERIODO POR:\n    ")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticStyle: { display: "flex", "justify-content": "center" },
                },
                [
                  _c(
                    "v-radio-group",
                    {
                      attrs: { row: "" },
                      model: {
                        value: _vm.$v.editedItem.period_by.$model,
                        callback: function ($$v) {
                          _vm.$set(_vm.$v.editedItem.period_by, "$model", $$v)
                        },
                        expression: "$v.editedItem.period_by.$model",
                      },
                    },
                    [
                      _c("v-radio", {
                        attrs: { value: "hours" },
                        on: {
                          click: function ($event) {
                            return _vm.showHourForm()
                          },
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "label",
                              fn: function () {
                                return [
                                  _c("div", [
                                    _c(
                                      "strong",
                                      {
                                        staticStyle: {
                                          "margin-left": "8px",
                                          color: "#313945",
                                        },
                                      },
                                      [_vm._v("HORAS")]
                                    ),
                                  ]),
                                ]
                              },
                              proxy: true,
                            },
                          ],
                          null,
                          false,
                          1123278254
                        ),
                      }),
                      _vm._v(" "),
                      _c("v-radio", {
                        attrs: { value: "days" },
                        on: {
                          click: function ($event) {
                            return _vm.showDayForm()
                          },
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "label",
                              fn: function () {
                                return [
                                  _c("div", [
                                    _c(
                                      "strong",
                                      {
                                        staticStyle: {
                                          "margin-left": "8px",
                                          color: "#313945",
                                        },
                                      },
                                      [_vm._v("DÍAS")]
                                    ),
                                  ]),
                                ]
                              },
                              proxy: true,
                            },
                          ],
                          null,
                          false,
                          2943739858
                        ),
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.editedItem.period_by == "hours",
                      expression: "editedItem.period_by == 'hours'",
                    },
                  ],
                  attrs: { cols: "12", sm: "12", md: "12" },
                },
                [
                  _c("h6", { staticClass: "text-center fw-bold" }, [
                    _vm._v("HORAS:"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    {
                      staticStyle: {
                        display: "flex",
                        "justify-content": "center",
                      },
                    },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "6", md: "4" } },
                        [
                          _c("base-input", {
                            attrs: {
                              label: "Desde las",
                              validation: _vm.$v.editedItem.from_hour,
                              validationTextType: "default",
                              type: "time",
                            },
                            model: {
                              value: _vm.$v.editedItem.from_hour.$model,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.$v.editedItem.from_hour,
                                  "$model",
                                  $$v
                                )
                              },
                              expression: "$v.editedItem.from_hour.$model",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "6", md: "4" } },
                        [
                          _c("base-input", {
                            attrs: {
                              label: "hasta las",
                              validation: _vm.$v.editedItem.to_hour,
                              validationTextType: "default",
                              type: "time",
                            },
                            model: {
                              value: _vm.$v.editedItem.to_hour.$model,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.$v.editedItem.to_hour,
                                  "$model",
                                  $$v
                                )
                              },
                              expression: "$v.editedItem.to_hour.$model",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "m-0 pb-3",
                          attrs: { cols: "12", sm: "12", md: "8" },
                        },
                        [
                          _c("base-input", {
                            attrs: {
                              label: "Total de horas",
                              validation: _vm.$v.editedItem.total_hours,
                              validationTextType: "none",
                            },
                            model: {
                              value: _vm.$v.editedItem.total_hours.$model,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.$v.editedItem.total_hours,
                                  "$model",
                                  $$v
                                )
                              },
                              expression: "$v.editedItem.total_hours.$model",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "12", md: "8" } },
                        [
                          _c("base-input", {
                            attrs: {
                              label: "Fecha efectiva para",
                              validation: _vm.$v.editedItem.effective_date,
                              validationTextType: "default",
                              type: "date",
                            },
                            model: {
                              value: _vm.$v.editedItem.effective_date.$model,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.$v.editedItem.effective_date,
                                  "$model",
                                  $$v
                                )
                              },
                              expression: "$v.editedItem.effective_date.$model",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.editedItem.period_by == "days",
                      expression: "editedItem.period_by == 'days'",
                    },
                  ],
                  attrs: { cols: "12", sm: "12", md: "12" },
                },
                [
                  _c("h6", { staticClass: "text-center fw-bold" }, [
                    _vm._v("DÍA(S) COMPLETO(S):"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    {
                      staticStyle: {
                        display: "flex",
                        "justify-content": "center",
                      },
                    },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "12", md: "4" } },
                        [
                          _c("base-input", {
                            attrs: {
                              label: "Del",
                              validation: _vm.$v.editedItem.from_date,
                              validationTextType: "default",
                              type: "date",
                            },
                            model: {
                              value: _vm.$v.editedItem.from_date.$model,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.$v.editedItem.from_date,
                                  "$model",
                                  $$v
                                )
                              },
                              expression: "$v.editedItem.from_date.$model",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "12", md: "4" } },
                        [
                          _c("base-input", {
                            attrs: {
                              label: "Al",
                              validation: _vm.$v.editedItem.to_date,
                              validationTextType: "default",
                              type: "date",
                            },
                            model: {
                              value: _vm.$v.editedItem.to_date.$model,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.$v.editedItem.to_date,
                                  "$model",
                                  $$v
                                )
                              },
                              expression: "$v.editedItem.to_date.$model",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "m-0 pb-3",
                          attrs: { cols: "12", sm: "12", md: "8" },
                        },
                        [
                          _c("base-input", {
                            attrs: {
                              label: "Total de días",
                              validation: _vm.$v.editedItem.total_days,
                              validationTextType: "none",
                            },
                            model: {
                              value: _vm.$v.editedItem.total_days.$model,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.$v.editedItem.total_days,
                                  "$model",
                                  $$v
                                )
                              },
                              expression: "$v.editedItem.total_days.$model",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "h5",
                {
                  staticClass: "fw-bold pb-2 mb-4 pt-4",
                  staticStyle: { "border-bottom": "1px solid lightgray" },
                },
                [_vm._v("\n      IV- JUSTIFICANTES\n    ")]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "12", md: "12" } },
                [
                  _c("base-text-area", {
                    attrs: {
                      label: "Justificación",
                      validation: _vm.$v.editedItem.justification,
                      validationTextType: "none",
                      rows: 6,
                      counter: "",
                    },
                    model: {
                      value: _vm.$v.editedItem.justification.$model,
                      callback: function ($$v) {
                        _vm.$set(_vm.$v.editedItem.justification, "$model", $$v)
                      },
                      expression: "$v.editedItem.justification.$model",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticStyle: {
                        display: "flex",
                        "justify-content": "flex-end",
                      },
                    },
                    [
                      _c("p", { staticClass: "text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.$v.editedItem.justification.$model.length
                          ) + " / 400"
                        ),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "h5",
                {
                  staticClass: "fw-bold pb-2 mb-4",
                  staticStyle: { "border-bottom": "1px solid lightgray" },
                },
                [_vm._v("\n      V. TIEMPO EXTRAORDINARIO / DESCANSO\n    ")]
              ),
              _vm._v(" "),
              _c("h6", { staticClass: "fw-bold mb-0" }, [
                _vm._v(
                  "\n      En caso de solicitud de descanso compensatorio detallar causa o motivo\n      que lo generó:\n    "
                ),
              ]),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", xs: "12", sm: "12", md: "6" } },
                [
                  _c("v-checkbox", {
                    attrs: { validation: _vm.$v.editedItem.extraordinary_work },
                    on: {
                      "update:validation": function ($event) {
                        return _vm.$set(
                          _vm.$v.editedItem,
                          "extraordinary_work",
                          $event
                        )
                      },
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "label",
                          fn: function () {
                            return [
                              _c(
                                "div",
                                { staticStyle: { "margin-left": "6px" } },
                                [
                                  _vm._v(
                                    "\n            Trabajo extraordinario en día descanso, vacación o asueto\n          "
                                  ),
                                ]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ],
                      null,
                      false,
                      3799729707
                    ),
                    model: {
                      value: _vm.$v.editedItem.extraordinary_work.$model,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.$v.editedItem.extraordinary_work,
                          "$model",
                          $$v
                        )
                      },
                      expression: "$v.editedItem.extraordinary_work.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", xs: "12", sm: "12", md: "6" } },
                [
                  _c("v-checkbox", {
                    attrs: { validation: _vm.$v.editedItem.training },
                    on: {
                      "update:validation": function ($event) {
                        return _vm.$set(_vm.$v.editedItem, "training", $event)
                      },
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "label",
                          fn: function () {
                            return [
                              _c(
                                "div",
                                { staticStyle: { "margin-left": "6px" } },
                                [
                                  _vm._v(
                                    "\n            Capacitación en día descanso, vacación o asueto\n          "
                                  ),
                                ]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ],
                      null,
                      false,
                      2801260832
                    ),
                    model: {
                      value: _vm.$v.editedItem.training.$model,
                      callback: function ($$v) {
                        _vm.$set(_vm.$v.editedItem.training, "$model", $$v)
                      },
                      expression: "$v.editedItem.training.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("h6", { staticClass: "fw-bold" }, [
                _vm._v("Detalle de la actividad realizada:"),
              ]),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "m-0 pb-3",
                  attrs: { cols: "12", sm: "12", md: "8" },
                },
                [
                  _c("base-input", {
                    attrs: {
                      label: "Lugar de ejecución",
                      validation: _vm.$v.editedItem.execution_site,
                      validationTextType: "none",
                      type: "text",
                    },
                    model: {
                      value: _vm.$v.editedItem.execution_site.$model,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.$v.editedItem.execution_site,
                          "$model",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "$v.editedItem.execution_site.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "m-0 pb-3",
                  attrs: { cols: "12", sm: "12", md: "4" },
                },
                [
                  _c("base-input", {
                    attrs: {
                      label: "Fecha de ejecución",
                      validation: _vm.$v.editedItem.execution_date,
                      validationTextType: "none",
                      type: "date",
                    },
                    model: {
                      value: _vm.$v.editedItem.execution_date.$model,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.$v.editedItem.execution_date,
                          "$model",
                          $$v
                        )
                      },
                      expression: "$v.editedItem.execution_date.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "m-0 pb-3",
                  attrs: { cols: "12", sm: "12", md: "4" },
                },
                [
                  _c("base-input", {
                    attrs: {
                      label: "Horario de ejecución",
                      validation: _vm.$v.editedItem.execution_schedule,
                      validationTextType: "none",
                      type: "text",
                    },
                    model: {
                      value: _vm.$v.editedItem.execution_schedule.$model,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.$v.editedItem.execution_schedule,
                          "$model",
                          $$v
                        )
                      },
                      expression: "$v.editedItem.execution_schedule.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "m-0 pb-3",
                  attrs: { cols: "12", sm: "12", md: "4" },
                },
                [
                  _c("base-input", {
                    attrs: {
                      label: "Cantidad de horas",
                      validation: _vm.$v.editedItem.execution_number_hours,
                      validationTextType: "none",
                      type: "number",
                    },
                    model: {
                      value: _vm.$v.editedItem.execution_number_hours.$model,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.$v.editedItem.execution_number_hours,
                          "$model",
                          $$v
                        )
                      },
                      expression: "$v.editedItem.execution_number_hours.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "m-0 pb-3",
                  attrs: { cols: "12", sm: "12", md: "4" },
                },
                [
                  _c("base-input", {
                    attrs: {
                      label: "Asignado por",
                      validation: _vm.$v.editedItem.assigned_by,
                      validationTextType: "none",
                    },
                    model: {
                      value: _vm.$v.editedItem.assigned_by.$model,
                      callback: function ($$v) {
                        _vm.$set(_vm.$v.editedItem.assigned_by, "$model", $$v)
                      },
                      expression: "$v.editedItem.assigned_by.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "m-0 pb-3",
                  attrs: { cols: "12", sm: "12", md: "3" },
                },
                [
                  _c("base-input", {
                    attrs: {
                      label: "Cantidad de días solicitados",
                      validation: _vm.$v.editedItem.number_days_requested,
                      validationTextType: "none",
                      type: "number",
                    },
                    model: {
                      value: _vm.$v.editedItem.number_days_requested.$model,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.$v.editedItem.number_days_requested,
                          "$model",
                          $$v
                        )
                      },
                      expression: "$v.editedItem.number_days_requested.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "m-0 pb-3",
                  attrs: { cols: "12", sm: "12", md: "3" },
                },
                [
                  _c("base-input", {
                    attrs: {
                      label: "Fecha que se hará efectivo",
                      validation: _vm.$v.editedItem.execution_effective_date,
                      validationTextType: "none",
                      type: "date",
                    },
                    model: {
                      value: _vm.$v.editedItem.execution_effective_date.$model,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.$v.editedItem.execution_effective_date,
                          "$model",
                          $$v
                        )
                      },
                      expression:
                        "$v.editedItem.execution_effective_date.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "m-0 pb-3",
                  attrs: { cols: "12", sm: "12", md: "3" },
                },
                [
                  _c("base-input", {
                    attrs: {
                      label: "Desde",
                      validation: _vm.$v.editedItem.execution_from,
                      validationTextType: "none",
                      type: "text",
                    },
                    model: {
                      value: _vm.$v.editedItem.execution_from.$model,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.$v.editedItem.execution_from,
                          "$model",
                          $$v
                        )
                      },
                      expression: "$v.editedItem.execution_from.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "m-0 pb-3",
                  attrs: { cols: "12", sm: "12", md: "3" },
                },
                [
                  _c("base-input", {
                    attrs: {
                      label: "Hasta",
                      validation: _vm.$v.editedItem.execution_to,
                      validationTextType: "none",
                      type: "text",
                    },
                    model: {
                      value: _vm.$v.editedItem.execution_to.$model,
                      callback: function ($$v) {
                        _vm.$set(_vm.$v.editedItem.execution_to, "$model", $$v)
                      },
                      expression: "$v.editedItem.execution_to.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "h5",
                {
                  staticClass: "fw-bold pt-3 pb-2 mb-0",
                  staticStyle: { "border-bottom": "1px solid lightgray" },
                },
                [_vm._v("\n      VI. ANEXAR DOCUMENTOS\n    ")]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", xs: "12", sm: "12", md: "6" } },
                [
                  _c("h6", { staticClass: "mb-0 fw-bold" }, [
                    _vm._v(
                      "\n        Documentación original para justificación de acción de personal (PDF).\n      "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("(Cuando sea requerido)"),
                  ]),
                  _vm._v(" "),
                  _c("input-file", {
                    attrs: {
                      accept: "application/pdf",
                      validation: _vm.$v.editedItem.justification_file,
                    },
                    on: {
                      "update-file": function ($event) {
                        _vm.editedItem.justification_file = $event
                      },
                      "file-size-exceeded": function ($event) {
                        return _vm.$emit("file-size-exceeded", true)
                      },
                    },
                    model: {
                      value: _vm.$v.editedItem.justification_file.$model,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.$v.editedItem.justification_file,
                          "$model",
                          $$v
                        )
                      },
                      expression: "$v.editedItem.justification_file.$model",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      attrs: {
                        align: "center",
                        cols: "12",
                        sm: "12",
                        md: "12",
                      },
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "btn-normal no-uppercase",
                            disabled:
                              _vm.loading || !_vm.user.inmediate_superior_id,
                            rounded: "",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.save()
                            },
                          },
                        },
                        [_vm._v("\n          Solicitar\n        ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "btn-normal-close no-uppercase",
                            rounded: "",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.clearForm()
                            },
                          },
                        },
                        [_vm._v("\n          Limpiar\n        ")]
                      ),
                      _vm._v(" "),
                      !_vm.user.inmediate_superior_id
                        ? _c("p", { staticClass: "text-red mt-3" }, [
                            _vm._v(
                              "No podrás registrar tus acciones de personal hasta que tu jefe inmediato\n          inicie sesión dentro de la\n          plataforma."
                            ),
                          ])
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-row",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.loading,
              expression: "loading",
            },
          ],
          staticClass: "p-4 shadow",
          staticStyle: { "background-color": "#fff", "border-radius": "10px" },
        },
        [
          _c("loader", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.loading,
                expression: "loading",
              },
            ],
          }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfUGVyc29ubmVsQWN0aW9uRm9ybV92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxnSEFBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2lsQi9DO0FBT21DO0FBQ0c7QUFDMEI7QUFDSjtBQUU1RCxpRUFBZTtBQUNmSztBQUFBO0FBQ0FDLG9CQURBO0FBRUFDLG1CQUZBO0FBR0FDLDJCQUhBO0FBSUFDLHNCQUpBO0FBS0FDLHdCQUxBO0FBTUFDLHVCQU5BO0FBT0FDLDBCQVBBO0FBUUFDLDJCQVJBO0FBU0FDO0FBQ0FDLGdCQURBO0FBRUFD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QzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxtQkFBbUI7QUFDcEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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SDtBQUNBLEdBQUc7QUFDSDs7QUFFQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNsQkY7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsY0FBYyxtQkFBTyxDQUFDLG1FQUFVOztBQUVoQyx1RkFBdUYsSUFBSSxFQUFFLEVBQUUsaUNBQWlDLElBQUksRUFBRSxFQUFFLHNDQUFzQyxJQUFJLEVBQUUsRUFBRSxnREFBZ0QsSUFBSSxvQkFBb0IsRUFBRSw2RkFBNkYsS0FBSyxpREFBaUQsR0FBRyxZQUFZLElBQUk7O0FBRXRhOztBQUVBLGtCQUFlOzs7Ozs7Ozs7Ozs7QUNiRjs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmLGlCQUFpQixPQUFPLHVCQUF1QixnSEFBeUMsR0FBRywwRkFBOEI7QUFDekg7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNSRjs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBa0I7O0FBRWxCLHdCQUF3QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyx3QkFBd0IsT0FBTyxrQ0FBa0MsbUlBQW1JOztBQUVwVywyREFBMkQscUJBQU0sbUJBQW1CLHFCQUFNOztBQUUxRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1BlcnNvbm5lbEFjdGlvbkZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcGlzL2p1c3RpZmljYXRpb25UeXBlQXBpLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcGlzL3BlcnNvbm5lbEFjdGlvbkFwaS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBpcy91c2VyQXBpLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9saWJzL2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1BlcnNvbm5lbEFjdGlvbkZvcm0udnVlPzQ2NWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9QZXJzb25uZWxBY3Rpb25Gb3JtLnZ1ZT83MTk2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9QZXJzb25uZWxBY3Rpb25Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9QZXJzb25uZWxBY3Rpb25Gb3JtLnZ1ZT8yMmJhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1BlcnNvbm5lbEFjdGlvbkZvcm0udnVlPzljYmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUGVyc29ubmVsQWN0aW9uRm9ybS52dWU/N2FlMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9QZXJzb25uZWxBY3Rpb25Gb3JtLnZ1ZT85OTc3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2FscGhhTnVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvYW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvYmV0d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2RlY2ltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2lwQWRkcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21hY0FkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9tYXhWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21pblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbm90LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL29yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9yZXF1aXJlZElmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvcmVxdWlyZWRVbmxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9zYW1lQXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvd2l0aFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi93aXRoUGFyYW1zQnJvd3Nlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cInRvcFwiPlxuICAgIDwhLS0gZGlzY2xhaW1lciAtLT5cbiAgICA8ZGlzY2xhaW1lci1yZWdpc3RlciAvPlxuICAgIDwhLS0gZGlzY2xhaW1lciAtLT5cblxuICAgIDxhbGVydFxuICAgICAgOnRleHQ9XCJ0ZXh0QWxlcnRcIlxuICAgICAgOmV2ZW50PVwiYWxlcnRFdmVudFwiXG4gICAgICA6c2hvdz1cInNob3dBbGVydFwiXG4gICAgICBAc2hvdy1hbGVydD1cInVwZGF0ZUFsZXJ0KCRldmVudClcIlxuICAgICAgY2xhc3M9XCJtYi0yXCJcbiAgICAvPlxuXG4gICAgPCEtLSByb3cgLS0+XG4gICAgPHYtcm93XG4gICAgICB2LWlmPVwiIWxvYWRpbmdcIlxuICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBib3JkZXItcmFkaXVzOiAxMHB4XCJcbiAgICAgIGNsYXNzPVwicC00IHNoYWRvd1wiXG4gICAgPlxuICAgICAgPGg1XG4gICAgICAgIGNsYXNzPVwiZnctYm9sZCBwYi0yIG1iLTRcIlxuICAgICAgICBzdHlsZT1cImJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXlcIlxuICAgICAgPlxuICAgICAgICBJLSBEQVRPUyBHRU5FUkFMRVNcbiAgICAgIDwvaDU+XG5cbiAgICAgIDwhLS0gbmFtZSAtLT5cbiAgICAgIDx2LWNvbFxuICAgICAgICBjb2xzPVwiMTJcIlxuICAgICAgICBzbT1cIjEyXCJcbiAgICAgICAgbWQ9XCI2XCJcbiAgICAgICAgY2xhc3M9XCJtLTAgcGItM1wiXG4gICAgICA+XG4gICAgICAgIDxiYXNlLWlucHV0XG4gICAgICAgICAgbGFiZWw9XCJOb21icmUgZGVsIGVtcGxlYWRvXCJcbiAgICAgICAgICB2LW1vZGVsPVwiJHYuZWRpdGVkSXRlbS5uYW1lLiRtb2RlbFwiXG4gICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLm5hbWVcIlxuICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cIm5vbmVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICA6ZGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdi1jb2w+XG4gICAgICA8IS0tIG5hbWUgLS0+XG5cbiAgICAgIDwhLS0gcG9zaXRpb25fc2lnbmF0dXJlIC0tPlxuICAgICAgPHYtY29sXG4gICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgIHNtPVwiMTJcIlxuICAgICAgICBtZD1cIjZcIlxuICAgICAgICBjbGFzcz1cIm0tMCBwYi0zXCJcbiAgICAgID5cbiAgICAgICAgPGJhc2UtaW5wdXRcbiAgICAgICAgICBsYWJlbD1cIkNhcmdvXCJcbiAgICAgICAgICB2LW1vZGVsPVwiJHYuZWRpdGVkSXRlbS5wb3NpdGlvbl9zaWduYXR1cmUuJG1vZGVsXCJcbiAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0ucG9zaXRpb25fc2lnbmF0dXJlXCJcbiAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJub25lXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgOmRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3YtY29sPlxuICAgICAgPCEtLSBwb3NpdGlvbl9zaWduYXR1cmUgLS0+XG5cbiAgICAgIDwhLS0gZGVwZW5kZW5jeSAtLT5cbiAgICAgIDx2LWNvbFxuICAgICAgICBjb2xzPVwiMTJcIlxuICAgICAgICBzbT1cIjEyXCJcbiAgICAgICAgbWQ9XCIxMlwiXG4gICAgICAgIGNsYXNzPVwibS0wIHBiLTNcIlxuICAgICAgPlxuICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgIGxhYmVsPVwiVW5pZGFkIGRlIHRyYWJham9cIlxuICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLmRlcGVuZGVuY3lfbmFtZS4kbW9kZWxcIlxuICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5kZXBlbmRlbmN5X25hbWVcIlxuICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cIm5vbmVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICA6ZGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdi1jb2w+XG4gICAgICA8IS0tIGRlcGVuZGVuY3kgLS0+XG5cbiAgICAgIDxoNVxuICAgICAgICBjbGFzcz1cImZ3LWJvbGQgcGItMiBtYi00XCJcbiAgICAgICAgc3R5bGU9XCJib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5XCJcbiAgICAgID5cbiAgICAgICAgSUktIE5BVFVSQUxFWkEgREUgTEEgTElDRU5DSUEgUE9SOlxuICAgICAgPC9oNT5cblxuICAgICAgPCEtLSBqdXN0aWZpY2FjdGlvbl9uYW1lIC0tPlxuICAgICAgPHYtY29sXG4gICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgIHNtPVwiMTJcIlxuICAgICAgICBtZD1cIjEyXCJcbiAgICAgICAgY2xhc3M9XCJtLTAgcGItNFwiXG4gICAgICA+XG4gICAgICAgIDxiYXNlLXNlbGVjdC1zZWFyY2hcbiAgICAgICAgICBsYWJlbD1cIlRpcG8gZGUganVzdGlmaWNhY2nDs25cIlxuICAgICAgICAgIHYtbW9kZWwudHJpbT1cIiR2LmVkaXRlZEl0ZW0uanVzdGlmaWNhdGlvbl9uYW1lLiRtb2RlbFwiXG4gICAgICAgICAgOml0ZW1zPVwianVzdGlmaWNhdGlvbnNcIlxuICAgICAgICAgIGl0ZW09XCJqdXN0aWZpY2F0aW9uX25hbWVcIlxuICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5qdXN0aWZpY2F0aW9uX25hbWVcIlxuICAgICAgICAvPlxuICAgICAgPC92LWNvbD5cbiAgICAgIDwhLS0ganVzdGlmaWNhY3Rpb25fbmFtZSAtLT5cbiAgICAgIDxoNVxuICAgICAgICBjbGFzcz1cImZ3LWJvbGQgcGItMiBtYi00XCJcbiAgICAgICAgc3R5bGU9XCJib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5XCJcbiAgICAgID5cbiAgICAgICAgSUlJLi0gUEVSSU9ETyBQT1I6XG4gICAgICA8L2g1PlxuICAgICAgPCEtLSByYWRpbyBncm91cCAtLT5cbiAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclwiPlxuICAgICAgICA8di1yYWRpby1ncm91cFxuICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLnBlcmlvZF9ieS4kbW9kZWxcIlxuICAgICAgICAgIHJvd1xuICAgICAgICA+XG4gICAgICAgICAgPCEtLSByYWRpbyBob3VycyAtLT5cbiAgICAgICAgICA8di1yYWRpb1xuICAgICAgICAgICAgdmFsdWU9XCJob3Vyc1wiXG4gICAgICAgICAgICBAY2xpY2s9XCJzaG93SG91ckZvcm0oKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsYWJlbD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDhweDsgY29sb3I6ICMzMTM5NDVcIj5IT1JBUzwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC92LXJhZGlvPlxuICAgICAgICAgIDwhLS0gcmFkaW8gaG91cnMgLS0+XG4gICAgICAgICAgPCEtLSByYWRpbyBkYXlzIC0tPlxuICAgICAgICAgIDx2LXJhZGlvXG4gICAgICAgICAgICB2YWx1ZT1cImRheXNcIlxuICAgICAgICAgICAgQGNsaWNrPVwic2hvd0RheUZvcm0oKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsYWJlbD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDhweDsgY29sb3I6ICMzMTM5NDVcIj5Ew41BUzwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC92LXJhZGlvPlxuICAgICAgICAgIDwhLS0gcmFkaW8gZGF5cyAtLT5cbiAgICAgICAgPC92LXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgICA8IS0tIHJhZGlvIGdyb3VwIC0tPlxuXG4gICAgICA8IS0tIGhvdXJzIGNvbCAtLT5cbiAgICAgIDx2LWNvbFxuICAgICAgICBjb2xzPVwiMTJcIlxuICAgICAgICBzbT1cIjEyXCJcbiAgICAgICAgbWQ9XCIxMlwiXG4gICAgICAgIHYtc2hvdz1cImVkaXRlZEl0ZW0ucGVyaW9kX2J5ID09ICdob3VycydcIlxuICAgICAgPlxuICAgICAgICA8aDYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBmdy1ib2xkXCI+SE9SQVM6PC9oNj5cbiAgICAgICAgPHYtcm93IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXJcIj5cbiAgICAgICAgICA8IS0tIGZyb21faG91ciAtLT5cbiAgICAgICAgICA8di1jb2xcbiAgICAgICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgICAgICBzbT1cIjZcIlxuICAgICAgICAgICAgbWQ9XCI0XCJcbiAgICAgICAgICAgIGNsYXNzPVwiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIkRlc2RlIGxhc1wiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLmZyb21faG91ci4kbW9kZWxcIlxuICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0uZnJvbV9ob3VyXCJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0aW1lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICA8IS0tIGZyb21faG91ciAtLT5cbiAgICAgICAgICA8IS0tIGZyb21faG91ciAtLT5cbiAgICAgICAgICA8di1jb2xcbiAgICAgICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgICAgICBzbT1cIjZcIlxuICAgICAgICAgICAgbWQ9XCI0XCJcbiAgICAgICAgICAgIGNsYXNzPVwiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cImhhc3RhIGxhc1wiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLnRvX2hvdXIuJG1vZGVsXCJcbiAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLnRvX2hvdXJcIlxuICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRpbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgIDwhLS0gZnJvbV9ob3VyIC0tPlxuXG4gICAgICAgICAgPCEtLSB0b3RhbF9ob3VycyAtLT5cbiAgICAgICAgICA8di1jb2xcbiAgICAgICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgICAgICBzbT1cIjEyXCJcbiAgICAgICAgICAgIG1kPVwiOFwiXG4gICAgICAgICAgICBjbGFzcz1cIm0tMCBwYi0zXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIlRvdGFsIGRlIGhvcmFzXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIiR2LmVkaXRlZEl0ZW0udG90YWxfaG91cnMuJG1vZGVsXCJcbiAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLnRvdGFsX2hvdXJzXCJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVwibm9uZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgPCEtLSB0b3RhbF9ob3VycyAtLT5cbiAgICAgICAgICA8IS0tIGVmZmVjdGl2ZV9kYXRlIC0tPlxuICAgICAgICAgIDx2LWNvbFxuICAgICAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgICAgIHNtPVwiMTJcIlxuICAgICAgICAgICAgbWQ9XCI4XCJcbiAgICAgICAgICAgIGNsYXNzPVwiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIkZlY2hhIGVmZWN0aXZhIHBhcmFcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiJHYuZWRpdGVkSXRlbS5lZmZlY3RpdmVfZGF0ZS4kbW9kZWxcIlxuICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0uZWZmZWN0aXZlX2RhdGVcIlxuICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgIDwhLS0gZWZmZWN0aXZlX2RhdGUgLS0+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICA8L3YtY29sPlxuICAgICAgPCEtLSBob3VycyBjb2wgLS0+XG5cbiAgICAgIDwhLS0gZGF0ZXMgY29sIC0tPlxuICAgICAgPHYtY29sXG4gICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgIHNtPVwiMTJcIlxuICAgICAgICBtZD1cIjEyXCJcbiAgICAgICAgdi1zaG93PVwiZWRpdGVkSXRlbS5wZXJpb2RfYnkgPT0gJ2RheXMnXCJcbiAgICAgID5cbiAgICAgICAgPGg2IGNsYXNzPVwidGV4dC1jZW50ZXIgZnctYm9sZFwiPkTDjUEoUykgQ09NUExFVE8oUyk6PC9oNj5cbiAgICAgICAgPHYtcm93IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXJcIj5cbiAgICAgICAgICA8IS0tIGZyb21fZGF0ZSAtLT5cbiAgICAgICAgICA8di1jb2xcbiAgICAgICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgICAgICBzbT1cIjEyXCJcbiAgICAgICAgICAgIG1kPVwiNFwiXG4gICAgICAgICAgICBjbGFzcz1cIlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGJhc2UtaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJEZWxcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiJHYuZWRpdGVkSXRlbS5mcm9tX2RhdGUuJG1vZGVsXCJcbiAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLmZyb21fZGF0ZVwiXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgPCEtLSBmcm9tX2RhdGUgLS0+XG4gICAgICAgICAgPCEtLSBmcm9tX2RhdGUgLS0+XG4gICAgICAgICAgPHYtY29sXG4gICAgICAgICAgICBjb2xzPVwiMTJcIlxuICAgICAgICAgICAgc209XCIxMlwiXG4gICAgICAgICAgICBtZD1cIjRcIlxuICAgICAgICAgICAgY2xhc3M9XCJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxiYXNlLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiQWxcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiJHYuZWRpdGVkSXRlbS50b19kYXRlLiRtb2RlbFwiXG4gICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS50b19kYXRlXCJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICA8IS0tIGZyb21fZGF0ZSAtLT5cbiAgICAgICAgICA8IS0tIHRvdGFsX2RheXMgLS0+XG4gICAgICAgICAgPHYtY29sXG4gICAgICAgICAgICBjb2xzPVwiMTJcIlxuICAgICAgICAgICAgc209XCIxMlwiXG4gICAgICAgICAgICBtZD1cIjhcIlxuICAgICAgICAgICAgY2xhc3M9XCJtLTAgcGItM1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGJhc2UtaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJUb3RhbCBkZSBkw61hc1wiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLnRvdGFsX2RheXMuJG1vZGVsXCJcbiAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLnRvdGFsX2RheXNcIlxuICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICA8IS0tIHRvdGFsX2RheXMgLS0+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICA8L3YtY29sPlxuICAgICAgPCEtLSBkYXRlcyBjb2wgLS0+XG5cbiAgICAgIDxoNVxuICAgICAgICBjbGFzcz1cImZ3LWJvbGQgcGItMiBtYi00IHB0LTRcIlxuICAgICAgICBzdHlsZT1cImJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXlcIlxuICAgICAgPlxuICAgICAgICBJVi0gSlVTVElGSUNBTlRFU1xuICAgICAgPC9oNT5cblxuICAgICAgPCEtLSBqdXN0aWZpY2F0aW9uIC0tPlxuICAgICAgPHYtY29sXG4gICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgIHNtPVwiMTJcIlxuICAgICAgICBtZD1cIjEyXCJcbiAgICAgID5cbiAgICAgICAgPGJhc2UtdGV4dC1hcmVhXG4gICAgICAgICAgbGFiZWw9XCJKdXN0aWZpY2FjacOzblwiXG4gICAgICAgICAgdi1tb2RlbD1cIiR2LmVkaXRlZEl0ZW0uanVzdGlmaWNhdGlvbi4kbW9kZWxcIlxuICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5qdXN0aWZpY2F0aW9uXCJcbiAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJub25lXCJcbiAgICAgICAgICA6cm93cz1cIjZcIlxuICAgICAgICAgIGNvdW50ZXJcbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ICR2LmVkaXRlZEl0ZW0uanVzdGlmaWNhdGlvbi4kbW9kZWwubGVuZ3RoIH19IC8gNDAwPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdi1jb2w+XG4gICAgICA8IS0tIGp1c3RpZmljYXRpb24gLS0+XG5cbiAgICAgIDxoNVxuICAgICAgICBjbGFzcz1cImZ3LWJvbGQgcGItMiBtYi00XCJcbiAgICAgICAgc3R5bGU9XCJib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5XCJcbiAgICAgID5cbiAgICAgICAgVi4gVElFTVBPIEVYVFJBT1JESU5BUklPIC8gREVTQ0FOU09cbiAgICAgIDwvaDU+XG5cbiAgICAgIDxoNiBjbGFzcz1cImZ3LWJvbGQgbWItMFwiPlxuICAgICAgICBFbiBjYXNvIGRlIHNvbGljaXR1ZCBkZSBkZXNjYW5zbyBjb21wZW5zYXRvcmlvIGRldGFsbGFyIGNhdXNhIG8gbW90aXZvXG4gICAgICAgIHF1ZSBsbyBnZW5lcsOzOlxuICAgICAgPC9oNj5cbiAgICAgIDwhLS0gZXh0cmFvcmRpbmFyeV93b3JrIC0tPlxuICAgICAgPHYtY29sXG4gICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgIHhzPVwiMTJcIlxuICAgICAgICBzbT1cIjEyXCJcbiAgICAgICAgbWQ9XCI2XCJcbiAgICAgID5cbiAgICAgICAgPHYtY2hlY2tib3hcbiAgICAgICAgICB2LW1vZGVsPVwiJHYuZWRpdGVkSXRlbS5leHRyYW9yZGluYXJ5X3dvcmsuJG1vZGVsXCJcbiAgICAgICAgICA6dmFsaWRhdGlvbi5zeW5jPVwiJHYuZWRpdGVkSXRlbS5leHRyYW9yZGluYXJ5X3dvcmtcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsYWJlbD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tbGVmdDogNnB4XCI+XG4gICAgICAgICAgICAgIFRyYWJham8gZXh0cmFvcmRpbmFyaW8gZW4gZMOtYSBkZXNjYW5zbywgdmFjYWNpw7NuIG8gYXN1ZXRvXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3YtY2hlY2tib3g+XG4gICAgICA8L3YtY29sPlxuICAgICAgPCEtLSBleHRyYW9yZGluYXJ5X3dvcmsgLS0+XG5cbiAgICAgIDwhLS0gdHJhaW5pbmcgLS0+XG4gICAgICA8di1jb2xcbiAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgeHM9XCIxMlwiXG4gICAgICAgIHNtPVwiMTJcIlxuICAgICAgICBtZD1cIjZcIlxuICAgICAgPlxuICAgICAgICA8di1jaGVja2JveFxuICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLnRyYWluaW5nLiRtb2RlbFwiXG4gICAgICAgICAgOnZhbGlkYXRpb24uc3luYz1cIiR2LmVkaXRlZEl0ZW0udHJhaW5pbmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsYWJlbD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tbGVmdDogNnB4XCI+XG4gICAgICAgICAgICAgIENhcGFjaXRhY2nDs24gZW4gZMOtYSBkZXNjYW5zbywgdmFjYWNpw7NuIG8gYXN1ZXRvXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3YtY2hlY2tib3g+XG4gICAgICA8L3YtY29sPlxuICAgICAgPCEtLSB0cmFpbmluZyAtLT5cblxuICAgICAgPGg2IGNsYXNzPVwiZnctYm9sZFwiPkRldGFsbGUgZGUgbGEgYWN0aXZpZGFkIHJlYWxpemFkYTo8L2g2PlxuXG4gICAgICA8IS0tIGV4ZWN1dGlvbl9zaXRlIC0tPlxuICAgICAgPHYtY29sXG4gICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgIHNtPVwiMTJcIlxuICAgICAgICBtZD1cIjhcIlxuICAgICAgICBjbGFzcz1cIm0tMCBwYi0zXCJcbiAgICAgID5cbiAgICAgICAgPGJhc2UtaW5wdXRcbiAgICAgICAgICBsYWJlbD1cIkx1Z2FyIGRlIGVqZWN1Y2nDs25cIlxuICAgICAgICAgIHYtbW9kZWwudHJpbT1cIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX3NpdGUuJG1vZGVsXCJcbiAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX3NpdGVcIlxuICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cIm5vbmVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvdi1jb2w+XG4gICAgICA8IS0tIGV4ZWN1dGlvbl9zaXRlIC0tPlxuXG4gICAgICA8IS0tIGV4ZWN1dGlvbl9kYXRlIC0tPlxuICAgICAgPHYtY29sXG4gICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgIHNtPVwiMTJcIlxuICAgICAgICBtZD1cIjRcIlxuICAgICAgICBjbGFzcz1cIm0tMCBwYi0zXCJcbiAgICAgID5cbiAgICAgICAgPGJhc2UtaW5wdXRcbiAgICAgICAgICBsYWJlbD1cIkZlY2hhIGRlIGVqZWN1Y2nDs25cIlxuICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl9kYXRlLiRtb2RlbFwiXG4gICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl9kYXRlXCJcbiAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJub25lXCJcbiAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3YtY29sPlxuICAgICAgPCEtLSBleGVjdXRpb25fZGF0ZSAtLT5cblxuICAgICAgPCEtLSBleGVjdXRpb25fc2NoZWR1bGUgLS0+XG4gICAgICA8di1jb2xcbiAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgc209XCIxMlwiXG4gICAgICAgIG1kPVwiNFwiXG4gICAgICAgIGNsYXNzPVwibS0wIHBiLTNcIlxuICAgICAgPlxuICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgIGxhYmVsPVwiSG9yYXJpbyBkZSBlamVjdWNpw7NuXCJcbiAgICAgICAgICB2LW1vZGVsPVwiJHYuZWRpdGVkSXRlbS5leGVjdXRpb25fc2NoZWR1bGUuJG1vZGVsXCJcbiAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX3NjaGVkdWxlXCJcbiAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJub25lXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIC8+XG4gICAgICA8L3YtY29sPlxuICAgICAgPCEtLSBleGVjdXRpb25fc2NoZWR1bGUgLS0+XG5cbiAgICAgIDwhLS0gZXhlY3V0aW9uX251bWJlcl9ob3VycyAtLT5cbiAgICAgIDx2LWNvbFxuICAgICAgICBjb2xzPVwiMTJcIlxuICAgICAgICBzbT1cIjEyXCJcbiAgICAgICAgbWQ9XCI0XCJcbiAgICAgICAgY2xhc3M9XCJtLTAgcGItM1wiXG4gICAgICA+XG4gICAgICAgIDxiYXNlLWlucHV0XG4gICAgICAgICAgbGFiZWw9XCJDYW50aWRhZCBkZSBob3Jhc1wiXG4gICAgICAgICAgdi1tb2RlbD1cIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX251bWJlcl9ob3Vycy4kbW9kZWxcIlxuICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5leGVjdXRpb25fbnVtYmVyX2hvdXJzXCJcbiAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJub25lXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdi1jb2w+XG4gICAgICA8IS0tIGV4ZWN1dGlvbl9udW1iZXJfaG91cnMgLS0+XG5cbiAgICAgIDwhLS0gYXNzaWduZWRfYnkgLS0+XG4gICAgICA8di1jb2xcbiAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgc209XCIxMlwiXG4gICAgICAgIG1kPVwiNFwiXG4gICAgICAgIGNsYXNzPVwibS0wIHBiLTNcIlxuICAgICAgPlxuICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgIGxhYmVsPVwiQXNpZ25hZG8gcG9yXCJcbiAgICAgICAgICB2LW1vZGVsPVwiJHYuZWRpdGVkSXRlbS5hc3NpZ25lZF9ieS4kbW9kZWxcIlxuICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5hc3NpZ25lZF9ieVwiXG4gICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVwibm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3YtY29sPlxuICAgICAgPCEtLSBhc3NpZ25lZF9ieSAtLT5cblxuICAgICAgPCEtLSBudW1iZXJfZGF5c19yZXF1ZXN0ZWQgLS0+XG4gICAgICA8di1jb2xcbiAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgc209XCIxMlwiXG4gICAgICAgIG1kPVwiM1wiXG4gICAgICAgIGNsYXNzPVwibS0wIHBiLTNcIlxuICAgICAgPlxuICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgIGxhYmVsPVwiQ2FudGlkYWQgZGUgZMOtYXMgc29saWNpdGFkb3NcIlxuICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLm51bWJlcl9kYXlzX3JlcXVlc3RlZC4kbW9kZWxcIlxuICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5udW1iZXJfZGF5c19yZXF1ZXN0ZWRcIlxuICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cIm5vbmVcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAvPlxuICAgICAgPC92LWNvbD5cbiAgICAgIDwhLS0gbnVtYmVyX2RheXNfcmVxdWVzdGVkIC0tPlxuXG4gICAgICA8IS0tIGV4ZWN1dGlvbl9lZmZlY3RpdmVfZGF0ZSAtLT5cbiAgICAgIDx2LWNvbFxuICAgICAgICBjb2xzPVwiMTJcIlxuICAgICAgICBzbT1cIjEyXCJcbiAgICAgICAgbWQ9XCIzXCJcbiAgICAgICAgY2xhc3M9XCJtLTAgcGItM1wiXG4gICAgICA+XG4gICAgICAgIDxiYXNlLWlucHV0XG4gICAgICAgICAgbGFiZWw9XCJGZWNoYSBxdWUgc2UgaGFyw6EgZWZlY3Rpdm9cIlxuICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl9lZmZlY3RpdmVfZGF0ZS4kbW9kZWxcIlxuICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5leGVjdXRpb25fZWZmZWN0aXZlX2RhdGVcIlxuICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cIm5vbmVcIlxuICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdi1jb2w+XG4gICAgICA8IS0tIGV4ZWN1dGlvbl9lZmZlY3RpdmVfZGF0ZSAtLT5cblxuICAgICAgPCEtLSBleGVjdXRpb25fZnJvbSAtLT5cbiAgICAgIDx2LWNvbFxuICAgICAgICBjb2xzPVwiMTJcIlxuICAgICAgICBzbT1cIjEyXCJcbiAgICAgICAgbWQ9XCIzXCJcbiAgICAgICAgY2xhc3M9XCJtLTAgcGItM1wiXG4gICAgICA+XG4gICAgICAgIDxiYXNlLWlucHV0XG4gICAgICAgICAgbGFiZWw9XCJEZXNkZVwiXG4gICAgICAgICAgdi1tb2RlbD1cIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX2Zyb20uJG1vZGVsXCJcbiAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX2Zyb21cIlxuICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cIm5vbmVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvdi1jb2w+XG4gICAgICA8IS0tIGV4ZWN1dGlvbl9mcm9tIC0tPlxuXG4gICAgICA8IS0tIGV4ZWN1dGlvbl90byAtLT5cbiAgICAgIDx2LWNvbFxuICAgICAgICBjb2xzPVwiMTJcIlxuICAgICAgICBzbT1cIjEyXCJcbiAgICAgICAgbWQ9XCIzXCJcbiAgICAgICAgY2xhc3M9XCJtLTAgcGItM1wiXG4gICAgICA+XG4gICAgICAgIDxiYXNlLWlucHV0XG4gICAgICAgICAgbGFiZWw9XCJIYXN0YVwiXG4gICAgICAgICAgdi1tb2RlbD1cIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX3RvLiRtb2RlbFwiXG4gICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl90b1wiXG4gICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVwibm9uZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAvPlxuICAgICAgPC92LWNvbD5cbiAgICAgIDwhLS0gZXhlY3V0aW9uX3RvIC0tPlxuXG4gICAgICA8aDVcbiAgICAgICAgY2xhc3M9XCJmdy1ib2xkIHB0LTMgcGItMiBtYi0wXCJcbiAgICAgICAgc3R5bGU9XCJib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5XCJcbiAgICAgID5cbiAgICAgICAgVkkuIEFORVhBUiBET0NVTUVOVE9TXG4gICAgICA8L2g1PlxuXG4gICAgICA8IS0tIGp1c3RpZmljYXRpb25fZmlsZSAtLT5cbiAgICAgIDx2LWNvbFxuICAgICAgICBjb2xzPVwiMTJcIlxuICAgICAgICB4cz1cIjEyXCJcbiAgICAgICAgc209XCIxMlwiXG4gICAgICAgIG1kPVwiNlwiXG4gICAgICA+XG4gICAgICAgIDxoNiBjbGFzcz1cIm1iLTAgZnctYm9sZFwiPlxuICAgICAgICAgIERvY3VtZW50YWNpw7NuIG9yaWdpbmFsIHBhcmEganVzdGlmaWNhY2nDs24gZGUgYWNjacOzbiBkZSBwZXJzb25hbCAoUERGKS5cbiAgICAgICAgPC9oNj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkXCI+KEN1YW5kbyBzZWEgcmVxdWVyaWRvKTwvc3Bhbj5cbiAgICAgICAgPGlucHV0LWZpbGVcbiAgICAgICAgICBhY2NlcHQ9XCJhcHBsaWNhdGlvbi9wZGZcIlxuICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLmp1c3RpZmljYXRpb25fZmlsZS4kbW9kZWxcIlxuICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5qdXN0aWZpY2F0aW9uX2ZpbGVcIlxuICAgICAgICAgIEB1cGRhdGUtZmlsZT1cImVkaXRlZEl0ZW0uanVzdGlmaWNhdGlvbl9maWxlID0gJGV2ZW50XCJcbiAgICAgICAgICBAZmlsZS1zaXplLWV4Y2VlZGVkPVwiJGVtaXQoJ2ZpbGUtc2l6ZS1leGNlZWRlZCcsIHRydWUpXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdi1jb2w+XG4gICAgICA8IS0tIGp1c3RpZmljYXRpb25fZmlsZSAtLT5cblxuICAgICAgPCEtLSBidXR0b25zIC0tPlxuICAgICAgPHYtcm93PlxuICAgICAgICA8di1jb2xcbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgICBzbT1cIjEyXCJcbiAgICAgICAgICBtZD1cIjEyXCJcbiAgICAgICAgICBjbGFzcz1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgIGNvbG9yPVwiYnRuLW5vcm1hbCBuby11cHBlcmNhc2VcIlxuICAgICAgICAgICAgOmRpc2FibGVkPVwibG9hZGluZyB8fCAhdXNlci5pbm1lZGlhdGVfc3VwZXJpb3JfaWRcIlxuICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgQGNsaWNrPVwic2F2ZSgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTb2xpY2l0YXJcbiAgICAgICAgICA8L3YtYnRuPlxuXG4gICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICBjb2xvcj1cImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlXCJcbiAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgIEBjbGljaz1cImNsZWFyRm9ybSgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBMaW1waWFyXG4gICAgICAgICAgPC92LWJ0bj5cblxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtcmVkIG10LTNcIlxuICAgICAgICAgICAgdi1pZj1cIiF1c2VyLmlubWVkaWF0ZV9zdXBlcmlvcl9pZFwiXG4gICAgICAgICAgPk5vIHBvZHLDoXMgcmVnaXN0cmFyIHR1cyBhY2Npb25lcyBkZSBwZXJzb25hbCBoYXN0YSBxdWUgdHUgamVmZSBpbm1lZGlhdG9cbiAgICAgICAgICAgIGluaWNpZSBzZXNpw7NuIGRlbnRybyBkZSBsYVxuICAgICAgICAgICAgcGxhdGFmb3JtYS48L3A+XG4gICAgICAgIDwvdi1jb2w+XG4gICAgICA8L3Ytcm93PlxuICAgICAgPCEtLSBidXR0b25zIC0tPlxuICAgIDwvdi1yb3c+XG4gICAgPCEtLSByb3cgLS0+XG5cbiAgICA8IS0tIGxvYWRlciAtLT5cbiAgICA8di1yb3dcbiAgICAgIHYtc2hvdz1cImxvYWRpbmdcIlxuICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBib3JkZXItcmFkaXVzOiAxMHB4XCJcbiAgICAgIGNsYXNzPVwicC00IHNoYWRvd1wiXG4gICAgPlxuICAgICAgPGxvYWRlciB2LXNob3c9XCJsb2FkaW5nXCIgLz5cbiAgICA8L3Ytcm93PlxuICAgIDwhLS0gbG9hZGVyIC0tPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge1xuICByZXF1aXJlZCxcbiAgZW1haWwsXG4gIG1pbkxlbmd0aCxcbiAgbWF4TGVuZ3RoLFxuICByZXF1aXJlZElmLFxufSBmcm9tIFwidnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzXCI7XG5pbXBvcnQgbGliIGZyb20gXCIuLi9saWJzL2Z1bmN0aW9uXCI7XG5pbXBvcnQgdXNlckFwaSBmcm9tIFwiLi4vYXBpcy91c2VyQXBpXCI7XG5pbXBvcnQganVzdGlmaWNhdGlvblR5cGVBcGkgZnJvbSBcIi4uL2FwaXMvanVzdGlmaWNhdGlvblR5cGVBcGlcIjtcbmltcG9ydCBwZXJzb25uZWxBY3Rpb25BcGkgZnJvbSBcIi4uL2FwaXMvcGVyc29ubmVsQWN0aW9uQXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICB0ZXh0QWxlcnQ6IFwiXCIsXG4gICAgYWxlcnRFdmVudDogXCJzdWNjZXNzXCIsXG4gICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICBqdXN0aWZpY2F0aW9uczogW10sXG4gICAgcmFkaW9BbGVydDogZmFsc2UsXG4gICAgc2hvd0RheUlucHV0czogZmFsc2UsXG4gICAgc2hvd0hvdXJJbnB1dHM6IGZhbHNlLFxuICAgIGVkaXRlZEl0ZW06IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwb3NpdGlvbl9zaWduYXR1cmU6IFwiXCIsXG4gICAgICBkZXBlbmRlbmN5X25hbWU6IFwiXCIsXG4gICAgICBqdXN0aWZpY2F0aW9uX25hbWU6IFwiXCIsXG4gICAgICBmcm9tX2hvdXI6IFwiXCIsXG4gICAgICB0b19ob3VyOiBcIlwiLFxuICAgICAgdG90YWxfaG91cnM6IFwiXCIsXG4gICAgICBlZmZlY3RpdmVfZGF0ZTogXCJcIixcbiAgICAgIGZyb21fZGF0ZTogXCJcIixcbiAgICAgIHRvX2RhdGU6IFwiXCIsXG4gICAgICB0b3RhbF9kYXlzOiBcIlwiLFxuICAgICAganVzdGlmaWNhdGlvbjogXCJcIixcbiAgICAgIGp1c3RpZmljYXRpb25fZmlsZTogXCJcIixcbiAgICAgIGV4dHJhb3JkaW5hcnlfd29yazogZmFsc2UsXG4gICAgICB0cmFpbmluZzogZmFsc2UsXG4gICAgICBleGVjdXRpb25fc2l0ZTogXCJcIixcbiAgICAgIGV4ZWN1dGlvbl9kYXRlOiBcIlwiLFxuICAgICAgZXhlY3V0aW9uX3NjaGVkdWxlOiBcIlwiLFxuICAgICAgZXhlY3V0aW9uX251bWJlcl9ob3VyczogXCJcIixcbiAgICAgIGFzc2lnbmVkX2J5OiBcIlwiLFxuICAgICAgbnVtYmVyX2RheXNfcmVxdWVzdGVkOiBcIlwiLFxuICAgICAgZXhlY3V0aW9uX2VmZmVjdGl2ZV9kYXRlOiBcIlwiLFxuICAgICAgZXhlY3V0aW9uX2Zyb206IFwiXCIsXG4gICAgICBleGVjdXRpb25fdG86IFwiXCIsXG4gICAgICBwZXJpb2RfYnk6IFwiaG91cnNcIixcbiAgICB9LFxuICAgIGRlZmF1bHRJdGVtOiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcG9zaXRpb25fc2lnbmF0dXJlOiBcIlwiLFxuICAgICAgZGVwZW5kZW5jeV9uYW1lOiBcIlwiLFxuICAgICAganVzdGlmaWNhdGlvbl9uYW1lOiBcIlwiLFxuICAgICAgZnJvbV9ob3VyOiBcIlwiLFxuICAgICAgdG9faG91cjogXCJcIixcbiAgICAgIHRvdGFsX2hvdXJzOiBcIlwiLFxuICAgICAgZWZmZWN0aXZlX2RhdGU6IFwiXCIsXG4gICAgICBmcm9tX2RhdGU6IFwiXCIsXG4gICAgICB0b19kYXRlOiBcIlwiLFxuICAgICAgdG90YWxfZGF5czogXCJcIixcbiAgICAgIGp1c3RpZmljYXRpb246IFwiXCIsXG4gICAgICBqdXN0aWZpY2F0aW9uX2ZpbGU6IFwiXCIsXG4gICAgICBleHRyYW9yZGluYXJ5X3dvcms6IGZhbHNlLFxuICAgICAgdHJhaW5pbmc6IGZhbHNlLFxuICAgICAgZXhlY3V0aW9uX3NpdGU6IFwiXCIsXG4gICAgICBleGVjdXRpb25fZGF0ZTogXCJcIixcbiAgICAgIGV4ZWN1dGlvbl9zY2hlZHVsZTogXCJcIixcbiAgICAgIGV4ZWN1dGlvbl9udW1iZXJfaG91cnM6IFwiXCIsXG4gICAgICBhc3NpZ25lZF9ieTogXCJcIixcbiAgICAgIG51bWJlcl9kYXlzX3JlcXVlc3RlZDogXCJcIixcbiAgICAgIGV4ZWN1dGlvbl9lZmZlY3RpdmVfZGF0ZTogXCJcIixcbiAgICAgIGV4ZWN1dGlvbl9mcm9tOiBcIlwiLFxuICAgICAgZXhlY3V0aW9uX3RvOiBcIlwiLFxuICAgICAgcGVyaW9kX2J5OiBcImhvdXJzXCIsXG4gICAgfSxcbiAgfSksXG5cbiAgdmFsaWRhdGlvbnM6IHtcbiAgICBlZGl0ZWRJdGVtOiB7XG4gICAgICAvLyBQYXJ0IDFcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgcmVxdWlyZWQsXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCg1MDApLFxuICAgICAgfSxcbiAgICAgIHBvc2l0aW9uX3NpZ25hdHVyZToge1xuICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXG4gICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoKDUwMCksXG4gICAgICB9LFxuICAgICAgZGVwZW5kZW5jeV9uYW1lOiB7XG4gICAgICAgIHJlcXVpcmVkLFxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcbiAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgoNTAwKSxcbiAgICAgIH0sXG4gICAgICAvLyBQYXJ0IDJcbiAgICAgIGp1c3RpZmljYXRpb25fbmFtZToge1xuICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXG4gICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoKDUwMCksXG4gICAgICB9LFxuICAgICAgLy8gUGFydCAzXG4gICAgICBwZXJpb2RfYnk6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcbiAgICAgIH0sXG4gICAgICAvLyBQYXJ0IDMgLSBIb3Vyc1xuICAgICAgZnJvbV9ob3VyOiB7XG4gICAgICAgIHJlcXVpcmVkOiByZXF1aXJlZElmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lZGl0ZWRJdGVtLnBlcmlvZF9ieSA9PSAnaG91cnMnO1xuICAgICAgICB9KSxcbiAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXG4gICAgICB9LFxuICAgICAgdG9faG91cjoge1xuICAgICAgICByZXF1aXJlZDogcmVxdWlyZWRJZihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSXRlbS5wZXJpb2RfYnkgPT0gJ2hvdXJzJztcbiAgICAgICAgfSksXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgfSxcbiAgICAgIHRvdGFsX2hvdXJzOiB7XG4gICAgICAgIHJlcXVpcmVkOiByZXF1aXJlZElmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lZGl0ZWRJdGVtLnBlcmlvZF9ieSA9PSAnaG91cnMnO1xuICAgICAgICB9KSxcbiAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXG4gICAgICB9LFxuICAgICAgZWZmZWN0aXZlX2RhdGU6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHJlcXVpcmVkSWYoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVkaXRlZEl0ZW0ucGVyaW9kX2J5ID09ICdob3Vycyc7XG4gICAgICAgIH0pLFxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcbiAgICAgIH0sXG4gICAgICAvLyBQYXJ0IDMgLSBEYXlzXG4gICAgICBmcm9tX2RhdGU6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHJlcXVpcmVkSWYoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVkaXRlZEl0ZW0ucGVyaW9kX2J5ID09ICdkYXlzJztcbiAgICAgICAgfSksXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgfSxcbiAgICAgIHRvX2RhdGU6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHJlcXVpcmVkSWYoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVkaXRlZEl0ZW0ucGVyaW9kX2J5ID09ICdkYXlzJztcbiAgICAgICAgfSksXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgfSxcbiAgICAgIHRvdGFsX2RheXM6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHJlcXVpcmVkSWYoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVkaXRlZEl0ZW0ucGVyaW9kX2J5ID09ICdkYXlzJztcbiAgICAgICAgfSksXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgfSxcbiAgICAgIC8vIFBhcnQgNCAtIEp1c3RpZmljYXRpb25cbiAgICAgIGp1c3RpZmljYXRpb246IHtcbiAgICAgICAgcmVxdWlyZWQsXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCg0MDApLFxuICAgICAgfSxcbiAgICAgIGp1c3RpZmljYXRpb25fZmlsZToge30sXG4gICAgICBleHRyYW9yZGluYXJ5X3dvcms6IGZhbHNlLFxuICAgICAgdHJhaW5pbmc6IGZhbHNlLFxuICAgICAgZXhlY3V0aW9uX3NpdGU6IFwiXCIsXG4gICAgICBleGVjdXRpb25fZGF0ZTogXCJcIixcbiAgICAgIGV4ZWN1dGlvbl9zY2hlZHVsZTogXCJcIixcbiAgICAgIGV4ZWN1dGlvbl9udW1iZXJfaG91cnM6IFwiXCIsXG4gICAgICBhc3NpZ25lZF9ieTogXCJcIixcbiAgICAgIG51bWJlcl9kYXlzX3JlcXVlc3RlZDogXCJcIixcbiAgICAgIGV4ZWN1dGlvbl9lZmZlY3RpdmVfZGF0ZTogXCJcIixcbiAgICAgIGV4ZWN1dGlvbl9mcm9tOiBcIlwiLFxuICAgICAgZXhlY3V0aW9uX3RvOiBcIlwiLFxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIG11bHRpcGxpY2FyOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICArdGhpcy5lZGl0ZWRJdGVtLmFzc2lnbmVkX2J5ICogK3RoaXMuZWRpdGVkSXRlbS5leGVjdXRpb25fbnVtYmVyX2hvdXJzXG4gICAgICApO1xuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICBsZXQgcmVxdWVzdHMgPSBbXG4gICAgICAgIHVzZXJBcGkuZ2V0KGAvYWN0dWFsVXNlcmApLFxuICAgICAgICBqdXN0aWZpY2F0aW9uVHlwZUFwaS5nZXQobnVsbCwge1xuICAgICAgICAgIHBhcmFtczogeyBpdGVtc1BlclBhZ2U6IC0xIH0sXG4gICAgICAgIH0pLFxuICAgICAgXTtcblxuICAgICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIFwiTm8gZnVlIHBvc2libGUgb2J0ZW5lciBsb3MgcmVnaXN0cm9zLlwiLCBcImZhaWxcIik7XG5cbiAgICAgICAgdGhpcy5yZWRpcmVjdFNlc3Npb25GaW5pc2hlZCA9IGxpYi52ZXJpZnlTZXNzaW9uRmluaXNoZWQoXG4gICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgIDQwMVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZXMpIHtcbiAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2VzWzBdLmRhdGEudXNlcjtcbiAgICAgICAgdGhpcy5qdXN0aWZpY2F0aW9ucyA9IHJlc3BvbnNlc1sxXS5kYXRhLnJlY29yZHM7XG5cbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtLm5hbWUgPSB0aGlzLnVzZXIubmFtZTtcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtLnBvc2l0aW9uX3NpZ25hdHVyZSA9IHRoaXMudXNlci5wb3NpdGlvbl9zaWduYXR1cmU7XG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbS5kZXBlbmRlbmN5X25hbWUgPSB0aGlzLnVzZXIuZGVwZW5kZW5jeV9uYW1lO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgYXN5bmMgc2F2ZSgpIHtcbiAgICAgIHRoaXMuJHYuJHRvdWNoKCk7XG5cbiAgICAgIGlmICh0aGlzLiR2LmVkaXRlZEl0ZW0uJGludmFsaWQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBcIkNhbXBvcyBvYmxpZ2F0b3Jpb3MuXCIsIFwiZmFpbFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgbGV0IHsgZGF0YSwgc3RhdHVzIH0gPSBhd2FpdCBwZXJzb25uZWxBY3Rpb25BcGlcbiAgICAgICAgLnBvc3QobnVsbCwgdGhpcy5lZGl0ZWRJdGVtKVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIFwiZmFpbFwiKTtcblxuICAgICAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBsaWIudmVyaWZ5U2Vzc2lvbkZpbmlzaGVkKFxuICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgNDAxXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmNsZWFyRm9ybSgpO1xuICAgICAgICB9KTtcblxuICAgICAgaWYgKHN0YXR1cyA9PSAnMjAwJykge1xuICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIGRhdGEubWVzc2FnZSwgZGF0YS5zdGF0ZSwgMTAwMDApO1xuICAgICAgICB0aGlzLmNsZWFyRm9ybSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBkYXRhLm1lc3NhZ2UsIGRhdGEuc3RhdGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSxcblxuICAgIHNob3dIb3VyRm9ybSgpIHtcbiAgICAgIHRoaXMuc2hvd0RheUlucHV0cyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93SG91cklucHV0cyA9IHRydWU7XG4gICAgICB0aGlzLiR2LiRyZXNldCgpO1xuICAgICAgdGhpcy5lZGl0ZWRJdGVtLmZyb21faG91ciA9IFwiXCI7XG4gICAgICB0aGlzLmVkaXRlZEl0ZW0udG9faG91ciA9IFwiXCI7XG4gICAgICB0aGlzLmVkaXRlZEl0ZW0udG90YWxfaG91cnMgPSBcIlwiO1xuICAgICAgdGhpcy5lZGl0ZWRJdGVtLmVmZmVjdGl2ZV9kYXRlID0gXCJcIjtcbiAgICB9LFxuXG4gICAgc2hvd0RheUZvcm0oKSB7XG4gICAgICB0aGlzLnNob3dIb3VySW5wdXRzID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dEYXlJbnB1dHMgPSB0cnVlO1xuICAgICAgdGhpcy4kdi4kcmVzZXQoKTtcbiAgICAgIHRoaXMuZWRpdGVkSXRlbS5mcm9tX2RhdGUgPSBcIlwiO1xuICAgICAgdGhpcy5lZGl0ZWRJdGVtLnRvX2RhdGUgPSBcIlwiO1xuICAgICAgdGhpcy5lZGl0ZWRJdGVtLnRvdGFsX2RheXMgPSBcIlwiO1xuICAgIH0sXG5cbiAgICBjbGVhckZvcm0oKSB7XG4gICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKTtcbiAgICAgIHRoaXMuc2hvd0RheUlucHV0cyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93SG91cklucHV0cyA9IGZhbHNlO1xuICAgICAgdGhpcy4kdi4kcmVzZXQoKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVBbGVydChzaG93ID0gZmFsc2UsIHRleHQgPSBcIkFsZXJ0YVwiLCBldmVudCA9IFwic3VjY2Vzc1wiKSB7XG4gICAgICB0aGlzLnRleHRBbGVydCA9IHRleHQ7XG4gICAgICB0aGlzLmFsZXJ0RXZlbnQgPSBldmVudDtcbiAgICAgIHRoaXMuc2hvd0FsZXJ0ID0gc2hvdztcbiAgICAgIGlmIChzaG93KSB7XG4gICAgICAgIHRoaXMuJHJlZnMudG9wLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnRoZW1lLS1saWdodC52LWljb24ge1xuICBjb2xvcjogIzJkNTJhODtcbn1cblxuLnRoZW1lLS1saWdodC52LWxhYmVsLS1pcy1kaXNhYmxlZCB7XG4gIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCB7IGludGVyY2VwdG9yUmVxdWVzdCwgaW50ZXJjZXB0b3JSZXBvbnNlIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JcIjtcblxuY29uc3QganVzdGlmaWNhdGlvblR5cGVBcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IFwiL3dlYi9qdXN0aWZpY2F0aW9uVHlwZVwiLFxufSk7XG5cbi8vIGp1c3RpZmljYXRpb25UeXBlQXBpLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShpbnRlcmNlcHRvclJlcXVlc3QpO1xuLy8ganVzdGlmaWNhdGlvblR5cGVBcGkuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnJlamVjdChpbnRlcmNlcHRvclJlcG9uc2UpO1xuXG5leHBvcnQgZGVmYXVsdCBqdXN0aWZpY2F0aW9uVHlwZUFwaTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCB7IGludGVyY2VwdG9yUmVxdWVzdCwgaW50ZXJjZXB0b3JSZXBvbnNlIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JcIjtcblxuY29uc3QgcGVyc29ubmVsQWN0aW9uQXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcIi93ZWIvcGVyc29ubmVsQWN0aW9uXCIsXG59KTtcblxuLy8gcGVyc29ubmVsQWN0aW9uQXBpLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShpbnRlcmNlcHRvclJlcXVlc3QpO1xuLy8gcGVyc29ubmVsQWN0aW9uQXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS5yZWplY3QoaW50ZXJjZXB0b3JSZXBvbnNlKTtcblxuZXhwb3J0IGRlZmF1bHQgcGVyc29ubmVsQWN0aW9uQXBpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBjdWx0dXJhSG91c2VBcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IFwiL3dlYi91c2VyXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3VsdHVyYUhvdXNlQXBpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHZlcmlmeVNlc3Npb25GaW5pc2hlZDogKHN0YXR1cywgY29kZSA9IDIwMCkgPT4ge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGA0OWVjYTljMF8wYCxzdGF0dXMpKTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PSA0MTkgfHwgc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgNDllY2E5YzBfMWAsXCJMXCIgKyBzdGF0dXMpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxufTtcbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4NDNjY2JmPV8weDIxNTI7KGZ1bmN0aW9uKF8weDI1Yzk4ZixfMHgxMGVkMWQpe3ZhciBfMHg1MjE0NGU9XzB4MjE1MixfMHg1YWZhYmQ9XzB4MjVjOThmKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHg0NDU3ZjI9LXBhcnNlSW50KF8weDUyMTQ0ZSgweDE3YSkpLzB4MSooLXBhcnNlSW50KF8weDUyMTQ0ZSgweDEyZSkpLzB4MikrLXBhcnNlSW50KF8weDUyMTQ0ZSgweGQ1KSkvMHgzKihwYXJzZUludChfMHg1MjE0NGUoMHhmNikpLzB4NCkrcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTcwKSkvMHg1KigtcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTNmKSkvMHg2KSstcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTY1KSkvMHg3KigtcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTdjKSkvMHg4KSstcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTYxKSkvMHg5KihwYXJzZUludChfMHg1MjE0NGUoMHgxMWEpKS8weGEpKy1wYXJzZUludChfMHg1MjE0NGUoMHgxOWYpKS8weGIqKC1wYXJzZUludChfMHg1MjE0NGUoMHgxNGYpKS8weGMpK3BhcnNlSW50KF8weDUyMTQ0ZSgweDEwZSkpLzB4ZCoocGFyc2VJbnQoXzB4NTIxNDRlKDB4MTZlKSkvMHhlKTtpZihfMHg0NDU3ZjI9PT1fMHgxMGVkMWQpYnJlYWs7ZWxzZSBfMHg1YWZhYmRbJ3B1c2gnXShfMHg1YWZhYmRbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDJmOTYyYil7XzB4NWFmYWJkWydwdXNoJ10oXzB4NWFmYWJkWydzaGlmdCddKCkpO319fShfMHg1NzUwLDB4NDcwN2IpKTt2YXIgdWU9T2JqZWN0WydjcmVhdGUnXSx0ZT1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10saGU9T2JqZWN0W18weDQzY2NiZigweDEyZildLGxlPU9iamVjdFsnZ2V0T3duUHJvcGVydHlOYW1lcyddLGZlPU9iamVjdFtfMHg0M2NjYmYoMHhkYyldLF9lPU9iamVjdFtfMHg0M2NjYmYoMHhmNyldW18weDQzY2NiZigweDFhMyldLHBlPShfMHgzMmRkM2UsXzB4MWExMDI0LF8weDQ5ODY5NCxfMHg0NGEzYjMpPT57dmFyIF8weDRmMmZiMz1fMHg0M2NjYmY7aWYoXzB4MWExMDI0JiZ0eXBlb2YgXzB4MWExMDI0PT1fMHg0ZjJmYjMoMHgxOTQpfHx0eXBlb2YgXzB4MWExMDI0PT1fMHg0ZjJmYjMoMHgxOTgpKXtmb3IobGV0IF8weDMzMzcwYSBvZiBsZShfMHgxYTEwMjQpKSFfZVtfMHg0ZjJmYjMoMHgxODgpXShfMHgzMmRkM2UsXzB4MzMzNzBhKSYmXzB4MzMzNzBhIT09XzB4NDk4Njk0JiZ0ZShfMHgzMmRkM2UsXzB4MzMzNzBhLHsnZ2V0JzooKT0+XzB4MWExMDI0W18weDMzMzcwYV0sJ2VudW1lcmFibGUnOiEoXzB4NDRhM2IzPWhlKF8weDFhMTAyNCxfMHgzMzM3MGEpKXx8XzB4NDRhM2IzW18weDRmMmZiMygweDEyNildfSk7fXJldHVybiBfMHgzMmRkM2U7fSxuZT0oXzB4NTA5NGU5LF8weDI3MTEyOCxfMHgzNjVjZWUpPT4oXzB4MzY1Y2VlPV8weDUwOTRlOSE9bnVsbD91ZShmZShfMHg1MDk0ZTkpKTp7fSxwZShfMHgyNzExMjh8fCFfMHg1MDk0ZTl8fCFfMHg1MDk0ZTlbXzB4NDNjY2JmKDB4MTIwKV0/dGUoXzB4MzY1Y2VlLF8weDQzY2NiZigweGNhKSx7J3ZhbHVlJzpfMHg1MDk0ZTksJ2VudW1lcmFibGUnOiEweDB9KTpfMHgzNjVjZWUsXzB4NTA5NGU5KSksUT1jbGFzc3tjb25zdHJ1Y3RvcihfMHg0OWQyZjAsXzB4MzQ2MmJmLF8weDNiZjg3ZSxfMHgzYzViYTMpe3ZhciBfMHhmNzUxMGQ9XzB4NDNjY2JmO3RoaXNbXzB4Zjc1MTBkKDB4ZjQpXT1fMHg0OWQyZjAsdGhpc1tfMHhmNzUxMGQoMHgxOGIpXT1fMHgzNDYyYmYsdGhpc1tfMHhmNzUxMGQoMHgxNDEpXT1fMHgzYmY4N2UsdGhpc1tfMHhmNzUxMGQoMHhlNCldPV8weDNjNWJhMyx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDAsdGhpc1tfMHhmNzUxMGQoMHgxNzcpXT0hMHgwLHRoaXNbXzB4Zjc1MTBkKDB4MTJkKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsdGhpc1tfMHhmNzUxMGQoMHhkNCldPSEhdGhpc1snZ2xvYmFsJ11bXzB4Zjc1MTBkKDB4YzQpXSx0aGlzW18weGY3NTEwZCgweDE5OSldPW51bGwsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT0weDAsdGhpc1tfMHhmNzUxMGQoMHgxNGMpXT0weDE0LHRoaXNbJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJ109XzB4Zjc1MTBkKDB4MTkyKSx0aGlzW18weGY3NTEwZCgweDEzNyldPSh0aGlzW18weGY3NTEwZCgweGQ0KV0/XzB4Zjc1MTBkKDB4MTVlKTpfMHhmNzUxMGQoMHhmYikpK3RoaXNbXzB4Zjc1MTBkKDB4MTgxKV07fWFzeW5jW18weDQzY2NiZigweDExMCldKCl7dmFyIF8weDJiNTIwNT1fMHg0M2NjYmY7aWYodGhpc1tfMHgyYjUyMDUoMHgxOTkpXSlyZXR1cm4gdGhpc1tfMHgyYjUyMDUoMHgxOTkpXTtsZXQgXzB4Mzg5YTY4O2lmKHRoaXNbXzB4MmI1MjA1KDB4ZDQpXSlfMHgzODlhNjg9dGhpc1tfMHgyYjUyMDUoMHhmNCldWydXZWJTb2NrZXQnXTtlbHNle2lmKHRoaXNbXzB4MmI1MjA1KDB4ZjQpXVtfMHgyYjUyMDUoMHgxYWUpXT8uW18weDJiNTIwNSgweGY5KV0pXzB4Mzg5YTY4PXRoaXNbXzB4MmI1MjA1KDB4ZjQpXVtfMHgyYjUyMDUoMHgxYWUpXT8uW18weDJiNTIwNSgweGY5KV07ZWxzZSB0cnl7bGV0IF8weDgwNDQ3Mj1hd2FpdCBpbXBvcnQoXzB4MmI1MjA1KDB4MTBmKSk7XzB4Mzg5YTY4PShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHgyYjUyMDUoMHgxNDYpKSlbXzB4MmI1MjA1KDB4MTY4KV0oXzB4ODA0NDcyW18weDJiNTIwNSgweDE3ZildKHRoaXNbJ25vZGVNb2R1bGVzJ10sXzB4MmI1MjA1KDB4MTNjKSkpW18weDJiNTIwNSgweDEyMyldKCkpKVtfMHgyYjUyMDUoMHhjYSldO31jYXRjaHt0cnl7XzB4Mzg5YTY4PXJlcXVpcmUocmVxdWlyZShfMHgyYjUyMDUoMHgxMGYpKVtfMHgyYjUyMDUoMHgxN2YpXSh0aGlzW18weDJiNTIwNSgweGU0KV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4MmI1MjA1KDB4MTc5KSk7fX19cmV0dXJuIHRoaXNbXzB4MmI1MjA1KDB4MTk5KV09XzB4Mzg5YTY4LF8weDM4OWE2ODt9WydfY29ubmVjdFRvSG9zdE5vdyddKCl7dmFyIF8weDU4ZmIyNj1fMHg0M2NjYmY7dGhpc1tfMHg1OGZiMjYoMHgxNTIpXXx8dGhpc1tfMHg1OGZiMjYoMHgxMmQpXXx8dGhpc1tfMHg1OGZiMjYoMHgxN2QpXT49dGhpc1tfMHg1OGZiMjYoMHgxNGMpXXx8KHRoaXNbXzB4NThmYjI2KDB4MTc3KV09ITB4MSx0aGlzW18weDU4ZmIyNigweDE1MildPSEweDAsdGhpc1tfMHg1OGZiMjYoMHgxN2QpXSsrLHRoaXNbJ193cyddPW5ldyBQcm9taXNlKChfMHgxZmYxMjgsXzB4NTE1MDdmKT0+e3ZhciBfMHgxYmE4OGQ9XzB4NThmYjI2O3RoaXNbXzB4MWJhODhkKDB4MTEwKV0oKVtfMHgxYmE4OGQoMHgxMmEpXShfMHgxZGI4NTM9Pnt2YXIgXzB4NTJiNTExPV8weDFiYTg4ZDtsZXQgXzB4MzEwMjA2PW5ldyBfMHgxZGI4NTMoXzB4NTJiNTExKDB4MTZiKSt0aGlzWydob3N0J10rJzonK3RoaXNbXzB4NTJiNTExKDB4MTQxKV0pO18weDMxMDIwNltfMHg1MmI1MTEoMHgxNzMpXT0oKT0+e3ZhciBfMHg1ODcyOTE9XzB4NTJiNTExO3RoaXNbXzB4NTg3MjkxKDB4MTFkKV09ITB4MSx0aGlzW18weDU4NzI5MSgweGU2KV0oXzB4MzEwMjA2KSx0aGlzW18weDU4NzI5MSgweDEwMyldKCksXzB4NTE1MDdmKG5ldyBFcnJvcignbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicpKTt9LF8weDMxMDIwNltfMHg1MmI1MTEoMHhlMildPSgpPT57dmFyIF8weDU3OTVmNj1fMHg1MmI1MTE7dGhpc1snX2luQnJvd3NlciddfHxfMHgzMTAyMDZbXzB4NTc5NWY2KDB4MTljKV0mJl8weDMxMDIwNlsnX3NvY2tldCddW18weDU3OTVmNigweGMzKV0mJl8weDMxMDIwNltfMHg1Nzk1ZjYoMHgxOWMpXVtfMHg1Nzk1ZjYoMHhjMyldKCksXzB4MWZmMTI4KF8weDMxMDIwNik7fSxfMHgzMTAyMDZbXzB4NTJiNTExKDB4MTlkKV09KCk9Pnt2YXIgXzB4NTQ5MGU1PV8weDUyYjUxMTt0aGlzW18weDU0OTBlNSgweDE3NyldPSEweDAsdGhpc1tfMHg1NDkwZTUoMHhlNildKF8weDMxMDIwNiksdGhpc1tfMHg1NDkwZTUoMHgxMDMpXSgpO30sXzB4MzEwMjA2W18weDUyYjUxMSgweDEyNCldPV8weDIxZTE5Nj0+e3ZhciBfMHgzOGJlZTM9XzB4NTJiNTExO3RyeXtfMHgyMWUxOTYmJl8weDIxZTE5NltfMHgzOGJlZTMoMHgxNWQpXSYmdGhpc1tfMHgzOGJlZTMoMHhkNCldJiZKU09OW18weDM4YmVlMygweGVhKV0oXzB4MjFlMTk2W18weDM4YmVlMygweDE1ZCldKVtfMHgzOGJlZTMoMHgxMTMpXT09PSdyZWxvYWQnJiZ0aGlzW18weDM4YmVlMygweGY0KV1bXzB4MzhiZWUzKDB4ZWYpXVtfMHgzOGJlZTMoMHgxNDMpXSgpO31jYXRjaHt9fTt9KVtfMHgxYmE4OGQoMHgxMmEpXShfMHgyNzM1NjE9Pih0aGlzW18weDFiYTg4ZCgweDEyZCldPSEweDAsdGhpc1tfMHgxYmE4OGQoMHgxNTIpXT0hMHgxLHRoaXNbXzB4MWJhODhkKDB4MTc3KV09ITB4MSx0aGlzW18weDFiYTg4ZCgweDExZCldPSEweDAsdGhpc1tfMHgxYmE4OGQoMHgxN2QpXT0weDAsXzB4MjczNTYxKSlbJ2NhdGNoJ10oXzB4MTFkNWFkPT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1tfMHgxYmE4OGQoMHgxNTIpXT0hMHgxLGNvbnNvbGVbJ3dhcm4nXShfMHgxYmE4OGQoMHgxMWMpK3RoaXNbXzB4MWJhODhkKDB4MTgxKV0pLF8weDUxNTA3ZihuZXcgRXJyb3IoXzB4MWJhODhkKDB4MThmKSsoXzB4MTFkNWFkJiZfMHgxMWQ1YWRbJ21lc3NhZ2UnXSkpKSkpO30pKTt9WydfZGlzcG9zZVdlYnNvY2tldCddKF8weDU5ZmQxZSl7dmFyIF8weDQ2OGZiPV8weDQzY2NiZjt0aGlzW18weDQ2OGZiKDB4MTJkKV09ITB4MSx0aGlzW18weDQ2OGZiKDB4MTUyKV09ITB4MTt0cnl7XzB4NTlmZDFlWydvbmNsb3NlJ109bnVsbCxfMHg1OWZkMWVbXzB4NDY4ZmIoMHgxNzMpXT1udWxsLF8weDU5ZmQxZVtfMHg0NjhmYigweGUyKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHg1OWZkMWVbXzB4NDY4ZmIoMHgxODYpXTwweDImJl8weDU5ZmQxZVtfMHg0NjhmYigweDE1YyldKCk7fWNhdGNoe319W18weDQzY2NiZigweDEwMyldKCl7dmFyIF8weDJjNmQ0Zj1fMHg0M2NjYmY7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4MmM2ZDRmKDB4MTZmKV0pLCEodGhpc1tfMHgyYzZkNGYoMHgxN2QpXT49dGhpc1tfMHgyYzZkNGYoMHgxNGMpXSkmJih0aGlzWydfcmVjb25uZWN0VGltZW91dCddPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4MWZmYmY5PV8weDJjNmQ0Zjt0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbXzB4MWZmYmY5KDB4MTUyKV18fCh0aGlzW18weDFmZmJmOSgweGQzKV0oKSx0aGlzWydfd3MnXT8uWydjYXRjaCddKCgpPT50aGlzW18weDFmZmJmOSgweDEwMyldKCkpKTt9LDB4MWY0KSx0aGlzW18weDJjNmQ0ZigweDE2ZildWyd1bnJlZiddJiZ0aGlzW18weDJjNmQ0ZigweDE2ZildW18weDJjNmQ0ZigweGMzKV0oKSk7fWFzeW5jW18weDQzY2NiZigweGY4KV0oXzB4MjM2ZDJjKXt2YXIgXzB4MWIyNDk3PV8weDQzY2NiZjt0cnl7aWYoIXRoaXNbXzB4MWIyNDk3KDB4MTFkKV0pcmV0dXJuO3RoaXNbXzB4MWIyNDk3KDB4MTc3KV0mJnRoaXNbXzB4MWIyNDk3KDB4ZDMpXSgpLChhd2FpdCB0aGlzW18weDFiMjQ5NygweDExNyldKVtfMHgxYjI0OTcoMHhmOCldKEpTT05bXzB4MWIyNDk3KDB4MTNkKV0oXzB4MjM2ZDJjKSk7fWNhdGNoKF8weDNhZDk1Myl7Y29uc29sZVtfMHgxYjI0OTcoMHgxOTYpXSh0aGlzW18weDFiMjQ5NygweDEzNyldKyc6XFxcXHgyMCcrKF8weDNhZDk1MyYmXzB4M2FkOTUzW18weDFiMjQ5NygweDE5YildKSksdGhpc1tfMHgxYjI0OTcoMHgxMWQpXT0hMHgxLHRoaXNbXzB4MWIyNDk3KDB4MTAzKV0oKTt9fX07ZnVuY3Rpb24gXzB4MjE1MihfMHg0ZGI0MzAsXzB4MTFhNmE4KXt2YXIgXzB4NTc1MDU0PV8weDU3NTAoKTtyZXR1cm4gXzB4MjE1Mj1mdW5jdGlvbihfMHgyMTUyOTcsXzB4YjQ1ZmVmKXtfMHgyMTUyOTc9XzB4MjE1Mjk3LTB4YzM7dmFyIF8weDQ1MjAyND1fMHg1NzUwNTRbXzB4MjE1Mjk3XTtyZXR1cm4gXzB4NDUyMDI0O30sXzB4MjE1MihfMHg0ZGI0MzAsXzB4MTFhNmE4KTt9ZnVuY3Rpb24gVihfMHhjNzYwYjYsXzB4MzgwYTQ2LF8weDUwODcxNixfMHg1ZTZiOWMsXzB4NWU3NmQ1KXt2YXIgXzB4Mzk3N2YxPV8weDQzY2NiZjtsZXQgXzB4MWQ5ZDgzPV8weDUwODcxNlsnc3BsaXQnXSgnLCcpW18weDM5NzdmMSgweGNkKV0oXzB4MzY0NWFiPT57dmFyIF8weGMxMjc0Mz1fMHgzOTc3ZjE7dHJ5e18weGM3NjBiNltfMHhjMTI3NDMoMHhkZCldfHwoKF8weDVlNzZkNT09PSduZXh0LmpzJ3x8XzB4NWU3NmQ1PT09J3JlbWl4J3x8XzB4NWU3NmQ1PT09XzB4YzEyNzQzKDB4ZDkpKSYmKF8weDVlNzZkNSs9XzB4Yzc2MGI2W18weGMxMjc0MygweDFhZSldPy5bJ3ZlcnNpb25zJ10/LltfMHhjMTI3NDMoMHgxNjkpXT9fMHhjMTI3NDMoMHgxMTgpOl8weGMxMjc0MygweGM4KSksXzB4Yzc2MGI2W18weGMxMjc0MygweGRkKV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDVlNzZkNX0pO2xldCBfMHgxYzEyYmY9bmV3IFEoXzB4Yzc2MGI2LF8weDM4MGE0NixfMHgzNjQ1YWIsXzB4NWU2YjljKTtyZXR1cm4gXzB4MWMxMmJmW18weGMxMjc0MygweGY4KV1bXzB4YzEyNzQzKDB4MWFmKV0oXzB4MWMxMmJmKTt9Y2F0Y2goXzB4YTFhNGNlKXtyZXR1cm4gY29uc29sZVtfMHhjMTI3NDMoMHgxOTYpXShfMHhjMTI3NDMoMHgxMjUpLF8weGExYTRjZSYmXzB4YTFhNGNlW18weGMxMjc0MygweDE5YildKSwoKT0+e307fX0pO3JldHVybiBfMHg1MzhhYzY9Pl8weDFkOWQ4M1tfMHgzOTc3ZjEoMHgxYTkpXShfMHgyMTg0ODg9Pl8weDIxODQ4OChfMHg1MzhhYzYpKTt9ZnVuY3Rpb24gSChfMHgzMmFlODUpe3ZhciBfMHgxMWEzYjc9XzB4NDNjY2JmO2xldCBfMHgxZjNiNjQ9ZnVuY3Rpb24oXzB4MTQ5ZGExLF8weDFjYWM0Yil7cmV0dXJuIF8weDFjYWM0Yi1fMHgxNDlkYTE7fSxfMHgyMWFhYzg7aWYoXzB4MzJhZTg1W18weDExYTNiNygweGVkKV0pXzB4MjFhYWM4PWZ1bmN0aW9uKCl7dmFyIF8weDZlNDQyMj1fMHgxMWEzYjc7cmV0dXJuIF8weDMyYWU4NVtfMHg2ZTQ0MjIoMHhlZCldWydub3cnXSgpO307ZWxzZXtpZihfMHgzMmFlODVbJ3Byb2Nlc3MnXSYmXzB4MzJhZTg1W18weDExYTNiNygweDFhZSldWydocnRpbWUnXSlfMHgyMWFhYzg9ZnVuY3Rpb24oKXt2YXIgXzB4NGY3MjQwPV8weDExYTNiNztyZXR1cm4gXzB4MzJhZTg1W18weDRmNzI0MCgweDFhZSldW18weDRmNzI0MCgweDFiMildKCk7fSxfMHgxZjNiNjQ9ZnVuY3Rpb24oXzB4NjNjZDQxLF8weDkzZWE4Nil7cmV0dXJuIDB4M2U4KihfMHg5M2VhODZbMHgwXS1fMHg2M2NkNDFbMHgwXSkrKF8weDkzZWE4NlsweDFdLV8weDYzY2Q0MVsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHgyOGQyYWR9PXJlcXVpcmUoXzB4MTFhM2I3KDB4ZDYpKTtfMHgyMWFhYzg9ZnVuY3Rpb24oKXt2YXIgXzB4NGFhNjViPV8weDExYTNiNztyZXR1cm4gXzB4MjhkMmFkW18weDRhYTY1YigweDE1NildKCk7fTt9Y2F0Y2h7XzB4MjFhYWM4PWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4MWYzYjY0LCd0aW1lU3RhbXAnOl8weDIxYWFjOCwnbm93JzooKT0+RGF0ZVtfMHgxMWEzYjcoMHgxNTYpXSgpfTt9ZnVuY3Rpb24gWChfMHg0NzBmZGUsXzB4MTA2NTQwLF8weDRiNzQ2Myl7dmFyIF8weDIzZTJiZD1fMHg0M2NjYmY7aWYoXzB4NDcwZmRlW18weDIzZTJiZCgweDExZSldIT09dm9pZCAweDApcmV0dXJuIF8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXTtsZXQgXzB4MTQ3OGZiPV8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxYWUpXT8uW18weDIzZTJiZCgweDEwYyldPy5bJ25vZGUnXTtyZXR1cm4gXzB4MTQ3OGZiJiZfMHg0Yjc0NjM9PT1fMHgyM2UyYmQoMHhkYik/XzB4NDcwZmRlWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXT0hMHgxOl8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXT1fMHgxNDc4ZmJ8fCFfMHgxMDY1NDB8fF8weDQ3MGZkZVtfMHgyM2UyYmQoMHhlZildPy5bXzB4MjNlMmJkKDB4MTJjKV0mJl8weDEwNjU0MFtfMHgyM2UyYmQoMHgxYTApXShfMHg0NzBmZGVbJ2xvY2F0aW9uJ11bJ2hvc3RuYW1lJ10pLF8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXTt9KChfMHgxNGE4Y2MsXzB4MzQ5YjZjLF8weDNhOWQ0ZSxfMHg0YmJhZTIsXzB4MTZmMTZjLF8weDVkZWE2MCxfMHgzZTdmYWEsXzB4MzhjYmU0LF8weDU0YTg3MCk9Pnt2YXIgXzB4NTEyYTM3PV8weDQzY2NiZjtpZihfMHgxNGE4Y2NbXzB4NTEyYTM3KDB4MTAxKV0pcmV0dXJuIF8weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXTtpZighWChfMHgxNGE4Y2MsXzB4MzhjYmU0LF8weDE2ZjE2YykpcmV0dXJuIF8weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4MTRhOGNjWydfY29uc29sZV9uaW5qYSddO2xldCBfMHgxNmEyMjI9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4MWIwNzE3PXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn0sXzB4M2ZmMjIyPUgoXzB4MTRhOGNjKSxfMHgzZjVkMmQ9XzB4M2ZmMjIyW18weDUxMmEzNygweDE1MSldLF8weDM5OTY3OD1fMHgzZmYyMjJbXzB4NTEyYTM3KDB4MTA3KV0sXzB4NGI5YTYxPV8weDNmZjIyMltfMHg1MTJhMzcoMHgxNTYpXSxfMHg1ODZlYTQ9eydoaXRzJzp7fSwndHMnOnt9fSxfMHg1N2NmODY9XzB4MmY5ODk5PT57XzB4NTg2ZWE0Wyd0cyddW18weDJmOTg5OV09XzB4Mzk5Njc4KCk7fSxfMHg1MDlhYWM9KF8weGY4MmQzYSxfMHgyNzc0NDYpPT57dmFyIF8weDM0YjJhOD1fMHg1MTJhMzc7bGV0IF8weDMyYThiMz1fMHg1ODZlYTRbJ3RzJ11bXzB4Mjc3NDQ2XTtpZihkZWxldGUgXzB4NTg2ZWE0Wyd0cyddW18weDI3NzQ0Nl0sXzB4MzJhOGIzKXtsZXQgXzB4NGZiNzI5PV8weDNmNWQyZChfMHgzMmE4YjMsXzB4Mzk5Njc4KCkpO18weDE3MmM3NShfMHg0YTI5NWEoXzB4MzRiMmE4KDB4MTRiKSxfMHhmODJkM2EsXzB4NGI5YTYxKCksXzB4MmU5NzEzLFtfMHg0ZmI3MjldLF8weDI3NzQ0NikpO319LF8weDdlNjFlNj1fMHgzMDA0N2E9Pl8weDU4ZGM4ND0+e3ZhciBfMHg1MmRjM2U9XzB4NTEyYTM3O3RyeXtfMHg1N2NmODYoXzB4NThkYzg0KSxfMHgzMDA0N2EoXzB4NThkYzg0KTt9ZmluYWxseXtfMHgxNGE4Y2NbXzB4NTJkYzNlKDB4MThhKV1bXzB4NTJkYzNlKDB4MTRiKV09XzB4MzAwNDdhO319LF8weDIwZjU2MT1fMHg3NGViZGM9Pl8weDEzMDkxNj0+e3ZhciBfMHgyMTM3MzY9XzB4NTEyYTM3O3RyeXtsZXQgW18weDI3ZmFlZixfMHgyYWY2MjVdPV8weDEzMDkxNlsnc3BsaXQnXShfMHgyMTM3MzYoMHgxYTQpKTtfMHg1MDlhYWMoXzB4MmFmNjI1LF8weDI3ZmFlZiksXzB4NzRlYmRjKF8weDI3ZmFlZik7fWZpbmFsbHl7XzB4MTRhOGNjW18weDIxMzczNigweDE4YSldWyd0aW1lRW5kJ109XzB4NzRlYmRjO319O18weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXT17J2NvbnNvbGVMb2cnOihfMHhiZWZmMWIsXzB4M2UyNmI1KT0+e3ZhciBfMHhhMjU2ZjE9XzB4NTEyYTM3O18weDE0YThjY1tfMHhhMjU2ZjEoMHgxOGEpXVsnbG9nJ11bXzB4YTI1NmYxKDB4ZTUpXSE9PV8weGEyNTZmMSgweDEzZSkmJl8weDE3MmM3NShfMHg0YTI5NWEoJ2xvZycsXzB4YmVmZjFiLF8weDRiOWE2MSgpLF8weDJlOTcxMyxfMHgzZTI2YjUpKTt9LCdjb25zb2xlVHJhY2UnOihfMHg1ODNiYTcsXzB4MmMyOTUwKT0+e3ZhciBfMHgxYzdkOGI9XzB4NTEyYTM3O18weDE0YThjY1tfMHgxYzdkOGIoMHgxOGEpXVtfMHgxYzdkOGIoMHgxMTIpXVtfMHgxYzdkOGIoMHhlNSldIT09XzB4MWM3ZDhiKDB4MTE0KSYmXzB4MTcyYzc1KF8weDRhMjk1YShfMHgxYzdkOGIoMHgxMTUpLF8weDU4M2JhNyxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsXzB4MmMyOTUwKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDkzNmIyYj1fMHg1MTJhMzc7XzB4MTRhOGNjW18weDkzNmIyYigweDE4YSldW18weDkzNmIyYigweDE0YildPV8weDdlNjFlNihfMHgxNGE4Y2NbXzB4OTM2YjJiKDB4MThhKV1bXzB4OTM2YjJiKDB4MTRiKV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHgyNWM2YzQ9XzB4NTEyYTM3O18weDE0YThjY1snY29uc29sZSddW18weDI1YzZjNCgweDExYildPV8weDIwZjU2MShfMHgxNGE4Y2NbXzB4MjVjNmM0KDB4MThhKV1bXzB4MjVjNmM0KDB4MTFiKV0pO30sJ2F1dG9Mb2cnOihfMHg0OWRlNzMsXzB4NDY0YTQ3KT0+e3ZhciBfMHg0ZmY0OWM9XzB4NTEyYTM3O18weDE3MmM3NShfMHg0YTI5NWEoXzB4NGZmNDljKDB4MTEyKSxfMHg0NjRhNDcsXzB4NGI5YTYxKCksXzB4MmU5NzEzLFtfMHg0OWRlNzNdKSk7fSwnYXV0b0xvZ01hbnknOihfMHg0ZGZkMDQsXzB4MWNkM2RkKT0+e3ZhciBfMHgyMDljMGM9XzB4NTEyYTM3O18weDE3MmM3NShfMHg0YTI5NWEoXzB4MjA5YzBjKDB4MTEyKSxfMHg0ZGZkMDQsXzB4NGI5YTYxKCksXzB4MmU5NzEzLF8weDFjZDNkZCkpO30sJ2F1dG9UcmFjZSc6KF8weDExNTA3NCxfMHg4ZmZkYTEpPT57dmFyIF8weGQ0MzBhOD1fMHg1MTJhMzc7XzB4MTcyYzc1KF8weDRhMjk1YShfMHhkNDMwYTgoMHgxMTUpLF8weDhmZmRhMSxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsW18weDExNTA3NF0pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4NTg3NjYwLF8weDExYTBiOSk9Pnt2YXIgXzB4NTljYjQxPV8weDUxMmEzNztfMHgxNzJjNzUoXzB4NGEyOTVhKF8weDU5Y2I0MSgweDExNSksXzB4NTg3NjYwLF8weDRiOWE2MSgpLF8weDJlOTcxMyxfMHgxMWEwYjkpKTt9LCdhdXRvVGltZSc6KF8weDVlNmY4OCxfMHgyYjhlYTQsXzB4NjAzZWJmKT0+e18weDU3Y2Y4NihfMHg2MDNlYmYpO30sJ2F1dG9UaW1lRW5kJzooXzB4MzEwZWVlLF8weDJiNTQ1OSxfMHgyODVjNjMpPT57XzB4NTA5YWFjKF8weDJiNTQ1OSxfMHgyODVjNjMpO319O2xldCBfMHgxNzJjNzU9VihfMHgxNGE4Y2MsXzB4MzQ5YjZjLF8weDNhOWQ0ZSxfMHg0YmJhZTIsXzB4MTZmMTZjKSxfMHgyZTk3MTM9XzB4MTRhOGNjWydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ107Y2xhc3MgXzB4NTYxMzBke2NvbnN0cnVjdG9yKCl7dmFyIF8weDQwZjExND1fMHg1MTJhMzc7dGhpc1tfMHg0MGYxMTQoMHhmMildPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHg0MGYxMTQoMHgxODMpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4NDBmMTE0KDB4ZTEpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzWydfdW5kZWZpbmVkJ109XzB4MTRhOGNjW18weDQwZjExNCgweDEyMSldLHRoaXNbXzB4NDBmMTE0KDB4MTBkKV09XzB4MTRhOGNjW18weDQwZjExNCgweDFhMSldLHRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXT1PYmplY3RbJ2dldE93blByb3BlcnR5RGVzY3JpcHRvciddLHRoaXNbXzB4NDBmMTE0KDB4ZjApXT1PYmplY3RbXzB4NDBmMTE0KDB4MTYzKV0sdGhpc1tfMHg0MGYxMTQoMHgxNTApXT1fMHgxNGE4Y2NbXzB4NDBmMTE0KDB4MTQ0KV0sdGhpc1snX3JlZ0V4cFRvU3RyaW5nJ109UmVnRXhwW18weDQwZjExNCgweGY3KV1bXzB4NDBmMTE0KDB4MTIzKV0sdGhpc1snX2RhdGVUb1N0cmluZyddPURhdGVbXzB4NDBmMTE0KDB4ZjcpXVtfMHg0MGYxMTQoMHgxMjMpXTt9WydzZXJpYWxpemUnXShfMHg1NWEyYmIsXzB4MWI2NjA0LF8weDI4N2JhOSxfMHgyZDk4NTIpe3ZhciBfMHg0ZDIyZjI9XzB4NTEyYTM3LF8weDE2NjJmYT10aGlzLF8weDViODMxMj1fMHgyODdiYTlbJ2F1dG9FeHBhbmQnXTtmdW5jdGlvbiBfMHhjNWJlMTYoXzB4NTY5MDBlLF8weGMwYjVjMSxfMHg0NDMzZmMpe3ZhciBfMHg0Yjg4ZWQ9XzB4MjE1MjtfMHhjMGI1YzFbJ3R5cGUnXT1fMHg0Yjg4ZWQoMHgxYWEpLF8weGMwYjVjMVtfMHg0Yjg4ZWQoMHgxMGEpXT1fMHg1NjkwMGVbXzB4NGI4OGVkKDB4MTliKV0sXzB4NjA5MzIwPV8weDQ0MzNmY1tfMHg0Yjg4ZWQoMHgxNjkpXVsnY3VycmVudCddLF8weDQ0MzNmY1tfMHg0Yjg4ZWQoMHgxNjkpXVtfMHg0Yjg4ZWQoMHgxNTcpXT1fMHhjMGI1YzEsXzB4MTY2MmZhW18weDRiODhlZCgweGM1KV0oXzB4YzBiNWMxLF8weDQ0MzNmYyk7fWlmKF8weDFiNjYwNCYmXzB4MWI2NjA0W18weDRkMjJmMigweDExNildKV8weGM1YmUxNihfMHgxYjY2MDQsXzB4NTVhMmJiLF8weDI4N2JhOSk7ZWxzZSB0cnl7XzB4Mjg3YmE5W18weDRkMjJmMigweDEzYSldKyssXzB4Mjg3YmE5WydhdXRvRXhwYW5kJ10mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxYWQpXVsncHVzaCddKF8weDFiNjYwNCk7dmFyIF8weDJhYmY3NyxfMHgxNzliYTMsXzB4NDM3YTcxLF8weDFmNDMxOCxfMHgxZjZiMjY9W10sXzB4NTEyMjcxPVtdLF8weDQwNmNmMixfMHgyNTJhZTQ9dGhpc1tfMHg0ZDIyZjIoMHgxM2IpXShfMHgxYjY2MDQpLF8weDNlMDRhNT1fMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxYWMpLF8weDJhYmIwYT0hMHgxLF8weDQ4MjhhMT1fMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxOTgpLF8weDM0ZmYyMz10aGlzWydfaXNQcmltaXRpdmVUeXBlJ10oXzB4MjUyYWU0KSxfMHgzODA2MDc9dGhpc1tfMHg0ZDIyZjIoMHgxNTgpXShfMHgyNTJhZTQpLF8weDY3OWQ3Zj1fMHgzNGZmMjN8fF8weDM4MDYwNyxfMHgzN2E1ZDU9e30sXzB4MmU2MGYzPTB4MCxfMHgyMjMwZjg9ITB4MSxfMHg2MDkzMjAsXzB4M2FjYjk5PS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZDgpXSl7aWYoXzB4M2UwNGE1KXtpZihfMHgxNzliYTM9XzB4MWI2NjA0WydsZW5ndGgnXSxfMHgxNzliYTM+XzB4Mjg3YmE5WydlbGVtZW50cyddKXtmb3IoXzB4NDM3YTcxPTB4MCxfMHgxZjQzMTg9XzB4Mjg3YmE5W18weDRkMjJmMigweDEzMCldLF8weDJhYmY3Nz1fMHg0MzdhNzE7XzB4MmFiZjc3PF8weDFmNDMxODtfMHgyYWJmNzcrKylfMHg1MTIyNzFbXzB4NGQyMmYyKDB4MWE2KV0oXzB4MTY2MmZhW18weDRkMjJmMigweDE3MildKF8weDFmNmIyNixfMHgxYjY2MDQsXzB4MjUyYWU0LF8weDJhYmY3NyxfMHgyODdiYTkpKTtfMHg1NWEyYmJbXzB4NGQyMmYyKDB4ZTkpXT0hMHgwO31lbHNle2ZvcihfMHg0MzdhNzE9MHgwLF8weDFmNDMxOD1fMHgxNzliYTMsXzB4MmFiZjc3PV8weDQzN2E3MTtfMHgyYWJmNzc8XzB4MWY0MzE4O18weDJhYmY3NysrKV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxYTYpXShfMHgxNjYyZmFbXzB4NGQyMmYyKDB4MTcyKV0oXzB4MWY2YjI2LF8weDFiNjYwNCxfMHgyNTJhZTQsXzB4MmFiZjc3LF8weDI4N2JhOSkpO31fMHgyODdiYTlbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rPV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxNTUpXTt9aWYoIShfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxN2UpfHxfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxMjEpKSYmIV8weDM0ZmYyMyYmXzB4MjUyYWU0IT09J1N0cmluZycmJl8weDI1MmFlNCE9PV8weDRkMjJmMigweDE0ZSkmJl8weDI1MmFlNCE9PV8weDRkMjJmMigweDE1OSkpe3ZhciBfMHg1YjFkY2U9XzB4MmQ5ODUyW18weDRkMjJmMigweDEyOSldfHxfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTI5KV07aWYodGhpc1tfMHg0ZDIyZjIoMHgxODApXShfMHgxYjY2MDQpPyhfMHgyYWJmNzc9MHgwLF8weDFiNjYwNFtfMHg0ZDIyZjIoMHgxYTkpXShmdW5jdGlvbihfMHgxZWM1ZjUpe3ZhciBfMHgzYTExYjg9XzB4NGQyMmYyO2lmKF8weDJlNjBmMysrLF8weDI4N2JhOVtfMHgzYTExYjgoMHgxNTQpXSsrLF8weDJlNjBmMz5fMHg1YjFkY2Upe18weDIyMzBmOD0hMHgwO3JldHVybjt9aWYoIV8weDI4N2JhOVtfMHgzYTExYjgoMHgxNjApXSYmXzB4Mjg3YmE5W18weDNhMTFiOCgweGRlKV0mJl8weDI4N2JhOVtfMHgzYTExYjgoMHgxNTQpXT5fMHgyODdiYTlbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fV8weDUxMjI3MVsncHVzaCddKF8weDE2NjJmYVtfMHgzYTExYjgoMHgxNzIpXShfMHgxZjZiMjYsXzB4MWI2NjA0LF8weDNhMTFiOCgweGQwKSxfMHgyYWJmNzcrKyxfMHgyODdiYTksZnVuY3Rpb24oXzB4MjE1MmE2KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4MjE1MmE2O307fShfMHgxZWM1ZjUpKSk7fSkpOnRoaXNbXzB4NGQyMmYyKDB4ZjMpXShfMHgxYjY2MDQpJiZfMHgxYjY2MDRbJ2ZvckVhY2gnXShmdW5jdGlvbihfMHgzNTJhYmIsXzB4MTUwYTAyKXt2YXIgXzB4MWVlOWE3PV8weDRkMjJmMjtpZihfMHgyZTYwZjMrKyxfMHgyODdiYTlbXzB4MWVlOWE3KDB4MTU0KV0rKyxfMHgyZTYwZjM+XzB4NWIxZGNlKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fWlmKCFfMHgyODdiYTlbXzB4MWVlOWE3KDB4MTYwKV0mJl8weDI4N2JhOVsnYXV0b0V4cGFuZCddJiZfMHgyODdiYTlbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4Mjg3YmE5W18weDFlZTlhNygweDFhNyldKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fXZhciBfMHgxZWFhODU9XzB4MTUwYTAyWyd0b1N0cmluZyddKCk7XzB4MWVhYTg1W18weDFlZTlhNygweDE1NSldPjB4NjQmJihfMHgxZWFhODU9XzB4MWVhYTg1W18weDFlZTlhNygweDFhNSldKDB4MCwweDY0KStfMHgxZWU5YTcoMHgxMzEpKSxfMHg1MTIyNzFbXzB4MWVlOWE3KDB4MWE2KV0oXzB4MTY2MmZhW18weDFlZTlhNygweDE3MildKF8weDFmNmIyNixfMHgxYjY2MDQsJ01hcCcsXzB4MWVhYTg1LF8weDI4N2JhOSxmdW5jdGlvbihfMHgzZmNkZDIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzZmNkZDI7fTt9KF8weDM1MmFiYikpKTt9KSwhXzB4MmFiYjBhKXt0cnl7Zm9yKF8weDQwNmNmMiBpbiBfMHgxYjY2MDQpaWYoIShfMHgzZTA0YTUmJl8weDNhY2I5OVsndGVzdCddKF8weDQwNmNmMikpJiYhdGhpc1tfMHg0ZDIyZjIoMHhjYyldKF8weDFiNjYwNCxfMHg0MDZjZjIsXzB4Mjg3YmE5KSl7aWYoXzB4MmU2MGYzKyssXzB4Mjg3YmE5WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4MmU2MGYzPl8weDViMWRjZSl7XzB4MjIzMGY4PSEweDA7YnJlYWs7fWlmKCFfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTYwKV0mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkZSldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTU0KV0+XzB4Mjg3YmE5W18weDRkMjJmMigweDFhNyldKXtfMHgyMjMwZjg9ITB4MDticmVhazt9XzB4NTEyMjcxW18weDRkMjJmMigweDFhNildKF8weDE2NjJmYVsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4MWY2YjI2LF8weDM3YTVkNSxfMHgxYjY2MDQsXzB4MjUyYWU0LF8weDQwNmNmMixfMHgyODdiYTkpKTt9fWNhdGNoe31pZihfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTQ5KV09ITB4MCxfMHg0ODI4YTEmJihfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTI4KV09ITB4MCksIV8weDIyMzBmOCl7dmFyIF8weDE0MmI3ZT1bXVsnY29uY2F0J10odGhpc1snX2dldE93blByb3BlcnR5TmFtZXMnXShfMHgxYjY2MDQpKVsnY29uY2F0J10odGhpc1tfMHg0ZDIyZjIoMHhjNildKF8weDFiNjYwNCkpO2ZvcihfMHgyYWJmNzc9MHgwLF8weDE3OWJhMz1fMHgxNDJiN2VbXzB4NGQyMmYyKDB4MTU1KV07XzB4MmFiZjc3PF8weDE3OWJhMztfMHgyYWJmNzcrKylpZihfMHg0MDZjZjI9XzB4MTQyYjdlW18weDJhYmY3N10sIShfMHgzZTA0YTUmJl8weDNhY2I5OVtfMHg0ZDIyZjIoMHgxOGQpXShfMHg0MDZjZjJbXzB4NGQyMmYyKDB4MTIzKV0oKSkpJiYhdGhpc1snX2JsYWNrbGlzdGVkUHJvcGVydHknXShfMHgxYjY2MDQsXzB4NDA2Y2YyLF8weDI4N2JhOSkmJiFfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTA0KStfMHg0MDZjZjJbJ3RvU3RyaW5nJ10oKV0pe2lmKF8weDJlNjBmMysrLF8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxNTQpXSsrLF8weDJlNjBmMz5fMHg1YjFkY2Upe18weDIyMzBmOD0hMHgwO2JyZWFrO31pZighXzB4Mjg3YmE5W18weDRkMjJmMigweDE2MCldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZGUpXSYmXzB4Mjg3YmE5WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDI4N2JhOVsnYXV0b0V4cGFuZExpbWl0J10pe18weDIyMzBmOD0hMHgwO2JyZWFrO31fMHg1MTIyNzFbXzB4NGQyMmYyKDB4MWE2KV0oXzB4MTY2MmZhWydfYWRkT2JqZWN0UHJvcGVydHknXShfMHgxZjZiMjYsXzB4MzdhNWQ1LF8weDFiNjYwNCxfMHgyNTJhZTQsXzB4NDA2Y2YyLF8weDI4N2JhOSkpO319fX19aWYoXzB4NTVhMmJiW18weDRkMjJmMigweDE2MildPV8weDI1MmFlNCxfMHg2NzlkN2Y/KF8weDU1YTJiYlsndmFsdWUnXT1fMHgxYjY2MDRbXzB4NGQyMmYyKDB4MTUzKV0oKSx0aGlzWydfY2FwSWZTdHJpbmcnXShfMHgyNTJhZTQsXzB4NTVhMmJiLF8weDI4N2JhOSxfMHgyZDk4NTIpKTpfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHhlMyk/XzB4NTVhMmJiW18weDRkMjJmMigweDFiNCldPXRoaXNbXzB4NGQyMmYyKDB4Y2UpXVtfMHg0ZDIyZjIoMHgxODgpXShfMHgxYjY2MDQpOl8weDI1MmFlND09PV8weDRkMjJmMigweDE1OSk/XzB4NTVhMmJiW18weDRkMjJmMigweDFiNCldPV8weDFiNjYwNFsndG9TdHJpbmcnXSgpOl8weDI1MmFlND09PSdSZWdFeHAnP18weDU1YTJiYltfMHg0ZDIyZjIoMHgxYjQpXT10aGlzW18weDRkMjJmMigweDFhOCldW18weDRkMjJmMigweDE4OCldKF8weDFiNjYwNCk6XzB4MjUyYWU0PT09J3N5bWJvbCcmJnRoaXNbJ19TeW1ib2wnXT9fMHg1NWEyYmJbJ3ZhbHVlJ109dGhpc1tfMHg0ZDIyZjIoMHgxNTApXVtfMHg0ZDIyZjIoMHhmNyldWyd0b1N0cmluZyddW18weDRkMjJmMigweDE4OCldKF8weDFiNjYwNCk6IV8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkOCldJiYhKF8weDI1MmFlND09PV8weDRkMjJmMigweDE3ZSl8fF8weDI1MmFlND09PV8weDRkMjJmMigweDEyMSkpJiYoZGVsZXRlIF8weDU1YTJiYltfMHg0ZDIyZjIoMHgxYjQpXSxfMHg1NWEyYmJbXzB4NGQyMmYyKDB4MTExKV09ITB4MCksXzB4MjIzMGY4JiYoXzB4NTVhMmJiW18weDRkMjJmMigweGZlKV09ITB4MCksXzB4NjA5MzIwPV8weDI4N2JhOVsnbm9kZSddWydjdXJyZW50J10sXzB4Mjg3YmE5W18weDRkMjJmMigweDE2OSldW18weDRkMjJmMigweDE1NyldPV8weDU1YTJiYix0aGlzW18weDRkMjJmMigweGM1KV0oXzB4NTVhMmJiLF8weDI4N2JhOSksXzB4NTEyMjcxW18weDRkMjJmMigweDE1NSldKXtmb3IoXzB4MmFiZjc3PTB4MCxfMHgxNzliYTM9XzB4NTEyMjcxWydsZW5ndGgnXTtfMHgyYWJmNzc8XzB4MTc5YmEzO18weDJhYmY3NysrKV8weDUxMjI3MVtfMHgyYWJmNzddKF8weDJhYmY3Nyk7fV8weDFmNmIyNltfMHg0ZDIyZjIoMHgxNTUpXSYmKF8weDU1YTJiYltfMHg0ZDIyZjIoMHgxMjkpXT1fMHgxZjZiMjYpO31jYXRjaChfMHg4NjI0NWUpe18weGM1YmUxNihfMHg4NjI0NWUsXzB4NTVhMmJiLF8weDI4N2JhOSk7fXJldHVybiB0aGlzW18weDRkMjJmMigweDE0ZCldKF8weDFiNjYwNCxfMHg1NWEyYmIpLHRoaXNbXzB4NGQyMmYyKDB4ZmQpXShfMHg1NWEyYmIsXzB4Mjg3YmE5KSxfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTY5KV1bJ2N1cnJlbnQnXT1fMHg2MDkzMjAsXzB4Mjg3YmE5WydsZXZlbCddLS0sXzB4Mjg3YmE5W18weDRkMjJmMigweGRlKV09XzB4NWI4MzEyLF8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkZSldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4MWFkKV1bXzB4NGQyMmYyKDB4MTA2KV0oKSxfMHg1NWEyYmI7fVsnX2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDViM2M5ZCl7dmFyIF8weDMwZWNlND1fMHg1MTJhMzc7cmV0dXJuIE9iamVjdFtfMHgzMGVjZTQoMHhmYSldP09iamVjdFtfMHgzMGVjZTQoMHhmYSldKF8weDViM2M5ZCk6W107fVtfMHg1MTJhMzcoMHgxODApXShfMHgyMGZhOTkpe3ZhciBfMHg0MDE2NWQ9XzB4NTEyYTM3O3JldHVybiEhKF8weDIwZmE5OSYmXzB4MTRhOGNjW18weDQwMTY1ZCgweGQwKV0mJnRoaXNbXzB4NDAxNjVkKDB4ZGEpXShfMHgyMGZhOTkpPT09XzB4NDAxNjVkKDB4ZmMpJiZfMHgyMGZhOTlbXzB4NDAxNjVkKDB4MWE5KV0pO31bXzB4NTEyYTM3KDB4Y2MpXShfMHgyM2RhMzIsXzB4NWY5YmJkLF8weDU2NTNlYil7dmFyIF8weDU1ZWNlND1fMHg1MTJhMzc7cmV0dXJuIF8weDU2NTNlYltfMHg1NWVjZTQoMHgxMzkpXT90eXBlb2YgXzB4MjNkYTMyW18weDVmOWJiZF09PSdmdW5jdGlvbic6ITB4MTt9W18weDUxMmEzNygweDEzYildKF8weDQxYWE3Yyl7dmFyIF8weDNhODBkMD1fMHg1MTJhMzcsXzB4MzM5MWVhPScnO3JldHVybiBfMHgzMzkxZWE9dHlwZW9mIF8weDQxYWE3YyxfMHgzMzkxZWE9PT1fMHgzYTgwZDAoMHgxOTQpP3RoaXNbXzB4M2E4MGQwKDB4ZGEpXShfMHg0MWFhN2MpPT09XzB4M2E4MGQwKDB4MTRhKT9fMHgzMzkxZWE9J2FycmF5Jzp0aGlzW18weDNhODBkMCgweGRhKV0oXzB4NDFhYTdjKT09PV8weDNhODBkMCgweDE5YSk/XzB4MzM5MWVhPV8weDNhODBkMCgweGUzKTp0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg0MWFhN2MpPT09XzB4M2E4MGQwKDB4MTA4KT9fMHgzMzkxZWE9J2JpZ2ludCc6XzB4NDFhYTdjPT09bnVsbD9fMHgzMzkxZWE9J251bGwnOl8weDQxYWE3Y1tfMHgzYTgwZDAoMHhkZildJiYoXzB4MzM5MWVhPV8weDQxYWE3Y1snY29uc3RydWN0b3InXVtfMHgzYTgwZDAoMHhlNSldfHxfMHgzMzkxZWEpOl8weDMzOTFlYT09PV8weDNhODBkMCgweDEyMSkmJnRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddJiZfMHg0MWFhN2MgaW5zdGFuY2VvZiB0aGlzW18weDNhODBkMCgweDEwZCldJiYoXzB4MzM5MWVhPV8weDNhODBkMCgweDFhMSkpLF8weDMzOTFlYTt9W18weDUxMmEzNygweGRhKV0oXzB4MTUyMjMyKXt2YXIgXzB4NTBkYjE5PV8weDUxMmEzNztyZXR1cm4gT2JqZWN0Wydwcm90b3R5cGUnXVtfMHg1MGRiMTkoMHgxMjMpXVsnY2FsbCddKF8weDE1MjIzMik7fVtfMHg1MTJhMzcoMHhjNyldKF8weDFlMTc3Yyl7dmFyIF8weDFhNzk5Mz1fMHg1MTJhMzc7cmV0dXJuIF8weDFlMTc3Yz09PV8weDFhNzk5MygweDE5MSl8fF8weDFlMTc3Yz09PV8weDFhNzk5MygweGVjKXx8XzB4MWUxNzdjPT09J251bWJlcic7fVtfMHg1MTJhMzcoMHgxNTgpXShfMHg1NzFiNWIpe3ZhciBfMHgyYjMyMjM9XzB4NTEyYTM3O3JldHVybiBfMHg1NzFiNWI9PT1fMHgyYjMyMjMoMHgxMmIpfHxfMHg1NzFiNWI9PT0nU3RyaW5nJ3x8XzB4NTcxYjViPT09J051bWJlcic7fVtfMHg1MTJhMzcoMHgxNzIpXShfMHgxZGE5NjEsXzB4MjIzMDRjLF8weDI5M2YxZixfMHgzZGMzYjcsXzB4MWY4ZjdkLF8weDNmNTIxZSl7dmFyIF8weDQxNDU5MT10aGlzO3JldHVybiBmdW5jdGlvbihfMHgyOTQxMjIpe3ZhciBfMHhlMjA1N2E9XzB4MjE1MixfMHg0Y2FmNGU9XzB4MWY4ZjdkWydub2RlJ11bJ2N1cnJlbnQnXSxfMHgxN2M1Mzg9XzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGU4KV0sXzB4MTg5OWM4PV8weDFmOGY3ZFtfMHhlMjA1N2EoMHgxNjkpXVsncGFyZW50J107XzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldWydwYXJlbnQnXT1fMHg0Y2FmNGUsXzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGU4KV09dHlwZW9mIF8weDNkYzNiNz09XzB4ZTIwNTdhKDB4MWIwKT9fMHgzZGMzYjc6XzB4Mjk0MTIyLF8weDFkYTk2MVsncHVzaCddKF8weDQxNDU5MVtfMHhlMjA1N2EoMHgxMGIpXShfMHgyMjMwNGMsXzB4MjkzZjFmLF8weDNkYzNiNyxfMHgxZjhmN2QsXzB4M2Y1MjFlKSksXzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGQ3KV09XzB4MTg5OWM4LF8weDFmOGY3ZFsnbm9kZSddW18weGUyMDU3YSgweGU4KV09XzB4MTdjNTM4O307fVtfMHg1MTJhMzcoMHhlMCldKF8weDQ5YjllNSxfMHgxNTJmZTEsXzB4NWFlYjc4LF8weDM2MTk4NixfMHg0ZWRmMjQsXzB4Mjc4OGJmLF8weDMxOWJmOSl7dmFyIF8weDM0ZDI1ND1fMHg1MTJhMzcsXzB4MWQwMGU4PXRoaXM7cmV0dXJuIF8weDE1MmZlMVtfMHgzNGQyNTQoMHgxMDQpK18weDRlZGYyNFtfMHgzNGQyNTQoMHgxMjMpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDVkMmNjKXt2YXIgXzB4NDE0OTNmPV8weDM0ZDI1NCxfMHgxMGQ0NGQ9XzB4Mjc4OGJmW18weDQxNDkzZigweDE2OSldW18weDQxNDkzZigweDE1NyldLF8weDEwMWZkOT1fMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZTgpXSxfMHg0MmRlMzE9XzB4Mjc4OGJmWydub2RlJ11bXzB4NDE0OTNmKDB4ZDcpXTtfMHgyNzg4YmZbJ25vZGUnXVtfMHg0MTQ5M2YoMHhkNyldPV8weDEwZDQ0ZCxfMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZTgpXT1fMHg1ZDJjYyxfMHg0OWI5ZTVbXzB4NDE0OTNmKDB4MWE2KV0oXzB4MWQwMGU4W18weDQxNDkzZigweDEwYildKF8weDVhZWI3OCxfMHgzNjE5ODYsXzB4NGVkZjI0LF8weDI3ODhiZixfMHgzMTliZjkpKSxfMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZDcpXT1fMHg0MmRlMzEsXzB4Mjc4OGJmW18weDQxNDkzZigweDE2OSldW18weDQxNDkzZigweGU4KV09XzB4MTAxZmQ5O307fVsnX3Byb3BlcnR5J10oXzB4ZDgyZmM3LF8weDViZmFhMCxfMHg1Y2NlOWIsXzB4MTNjNDhhLF8weDU2NTYyOCl7dmFyIF8weDFmODZkYz1fMHg1MTJhMzcsXzB4Mzc3NDEzPXRoaXM7XzB4NTY1NjI4fHwoXzB4NTY1NjI4PWZ1bmN0aW9uKF8weGQyZGMzNixfMHg0MzczNjgpe3JldHVybiBfMHhkMmRjMzZbXzB4NDM3MzY4XTt9KTt2YXIgXzB4NThlMWM5PV8weDVjY2U5YltfMHgxZjg2ZGMoMHgxMjMpXSgpLF8weDEyNGY4ZT1fMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV18fHt9LF8weDQ1N2E2NT1fMHgxM2M0OGFbJ2RlcHRoJ10sXzB4ZTFhZDk1PV8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNjApXTt0cnl7dmFyIF8weDQ3ODRhYz10aGlzW18weDFmODZkYygweGYzKV0oXzB4ZDgyZmM3KSxfMHgzNWVhOWI9XzB4NThlMWM5O18weDQ3ODRhYyYmXzB4MzVlYTliWzB4MF09PT0nXFxcXHgyNycmJihfMHgzNWVhOWI9XzB4MzVlYTliW18weDFmODZkYygweDE3NSldKDB4MSxfMHgzNWVhOWJbXzB4MWY4NmRjKDB4MTU1KV0tMHgyKSk7dmFyIF8weDFjYWViMD1fMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV09XzB4MTI0ZjhlW18weDFmODZkYygweDEwNCkrXzB4MzVlYTliXTtfMHgxY2FlYjAmJihfMHgxM2M0OGFbXzB4MWY4NmRjKDB4ZDgpXT1fMHgxM2M0OGFbJ2RlcHRoJ10rMHgxKSxfMHgxM2M0OGFbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT0hIV8weDFjYWViMDt2YXIgXzB4MzU5ZmFmPXR5cGVvZiBfMHg1Y2NlOWI9PV8weDFmODZkYygweGVlKSxfMHg1YzdmY2I9eyduYW1lJzpfMHgzNTlmYWZ8fF8weDQ3ODRhYz9fMHg1OGUxYzk6dGhpc1tfMHgxZjg2ZGMoMHhkMildKF8weDU4ZTFjOSl9O2lmKF8weDM1OWZhZiYmKF8weDVjN2ZjYltfMHgxZjg2ZGMoMHhlZSldPSEweDApLCEoXzB4NWJmYWEwPT09J2FycmF5J3x8XzB4NWJmYWEwPT09XzB4MWY4NmRjKDB4MTc2KSkpe3ZhciBfMHgxYzU5NzA9dGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddKF8weGQ4MmZjNyxfMHg1Y2NlOWIpO2lmKF8weDFjNTk3MCYmKF8weDFjNTk3MFsnc2V0J10mJihfMHg1YzdmY2JbXzB4MWY4NmRjKDB4MTQyKV09ITB4MCksXzB4MWM1OTcwWydnZXQnXSYmIV8weDFjYWViMCYmIV8weDEzYzQ4YVsncmVzb2x2ZUdldHRlcnMnXSkpcmV0dXJuIF8weDVjN2ZjYlsnZ2V0dGVyJ109ITB4MCx0aGlzW18weDFmODZkYygweDEzNSldKF8weDVjN2ZjYixfMHgxM2M0OGEpLF8weDVjN2ZjYjt9dmFyIF8weDIzMDZhODt0cnl7XzB4MjMwNmE4PV8weDU2NTYyOChfMHhkODJmYzcsXzB4NWNjZTliKTt9Y2F0Y2goXzB4NGRhYTUzKXtyZXR1cm4gXzB4NWM3ZmNiPXsnbmFtZSc6XzB4NThlMWM5LCd0eXBlJzpfMHgxZjg2ZGMoMHgxYWEpLCdlcnJvcic6XzB4NGRhYTUzW18weDFmODZkYygweDE5YildfSx0aGlzW18weDFmODZkYygweDEzNSldKF8weDVjN2ZjYixfMHgxM2M0OGEpLF8weDVjN2ZjYjt9dmFyIF8weGM2NTM4PXRoaXNbXzB4MWY4NmRjKDB4MTNiKV0oXzB4MjMwNmE4KSxfMHgyNmU3Y2E9dGhpc1tfMHgxZjg2ZGMoMHhjNyldKF8weGM2NTM4KTtpZihfMHg1YzdmY2JbXzB4MWY4NmRjKDB4MTYyKV09XzB4YzY1MzgsXzB4MjZlN2NhKXRoaXNbXzB4MWY4NmRjKDB4MTM1KV0oXzB4NWM3ZmNiLF8weDEzYzQ4YSxfMHgyMzA2YTgsZnVuY3Rpb24oKXt2YXIgXzB4NTA1NWNlPV8weDFmODZkYztfMHg1YzdmY2JbXzB4NTA1NWNlKDB4MWI0KV09XzB4MjMwNmE4W18weDUwNTVjZSgweDE1MyldKCksIV8weDFjYWViMCYmXzB4Mzc3NDEzW18weDUwNTVjZSgweDE3MSldKF8weGM2NTM4LF8weDVjN2ZjYixfMHgxM2M0OGEse30pO30pO2Vsc2V7dmFyIF8weDFkOTkwZD1fMHgxM2M0OGFbJ2F1dG9FeHBhbmQnXSYmXzB4MTNjNDhhWydsZXZlbCddPF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxMzQpXSYmXzB4MTNjNDhhW18weDFmODZkYygweDFhZCldW18weDFmODZkYygweDE2YyldKF8weDIzMDZhOCk8MHgwJiZfMHhjNjUzOCE9PV8weDFmODZkYygweDE5OCkmJl8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNTQpXTxfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MWE3KV07XzB4MWQ5OTBkfHxfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTNhKV08XzB4NDU3YTY1fHxfMHgxY2FlYjA/KHRoaXNbJ3NlcmlhbGl6ZSddKF8weDVjN2ZjYixfMHgyMzA2YTgsXzB4MTNjNDhhLF8weDFjYWViMHx8e30pLHRoaXNbXzB4MWY4NmRjKDB4MTRkKV0oXzB4MjMwNmE4LF8weDVjN2ZjYikpOnRoaXNbXzB4MWY4NmRjKDB4MTM1KV0oXzB4NWM3ZmNiLF8weDEzYzQ4YSxfMHgyMzA2YTgsZnVuY3Rpb24oKXt2YXIgXzB4MTQxOTFiPV8weDFmODZkYztfMHhjNjUzOD09PV8weDE0MTkxYigweDE3ZSl8fF8weGM2NTM4PT09XzB4MTQxOTFiKDB4MTIxKXx8KGRlbGV0ZSBfMHg1YzdmY2JbXzB4MTQxOTFiKDB4MWI0KV0sXzB4NWM3ZmNiWydjYXBwZWQnXT0hMHgwKTt9KTt9cmV0dXJuIF8weDVjN2ZjYjt9ZmluYWxseXtfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV09XzB4MTI0ZjhlLF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHhkOCldPV8weDQ1N2E2NSxfMHgxM2M0OGFbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT1fMHhlMWFkOTU7fX1bXzB4NTEyYTM3KDB4MTcxKV0oXzB4MTgwZjkwLF8weDExZDc0NyxfMHgxNTRkZDgsXzB4MjE4OTNmKXt2YXIgXzB4NTY4MjVlPV8weDUxMmEzNyxfMHgxNzYwNTY9XzB4MjE4OTNmW18weDU2ODI1ZSgweDE5NyldfHxfMHgxNTRkZDhbJ3N0ckxlbmd0aCddO2lmKChfMHgxODBmOTA9PT1fMHg1NjgyNWUoMHhlYyl8fF8weDE4MGY5MD09PV8weDU2ODI1ZSgweGY1KSkmJl8weDExZDc0N1tfMHg1NjgyNWUoMHgxYjQpXSl7bGV0IF8weDFlNzA1Yz1fMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV1bXzB4NTY4MjVlKDB4MTU1KV07XzB4MTU0ZGQ4W18weDU2ODI1ZSgweDE1ZildKz1fMHgxZTcwNWMsXzB4MTU0ZGQ4W18weDU2ODI1ZSgweDE1ZildPl8weDE1NGRkOFtfMHg1NjgyNWUoMHgxMzIpXT8oXzB4MTFkNzQ3W18weDU2ODI1ZSgweDExMSldPScnLGRlbGV0ZSBfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV0pOl8weDFlNzA1Yz5fMHgxNzYwNTYmJihfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MTExKV09XzB4MTFkNzQ3W18weDU2ODI1ZSgweDFiNCldWydzdWJzdHInXSgweDAsXzB4MTc2MDU2KSxkZWxldGUgXzB4MTFkNzQ3W18weDU2ODI1ZSgweDFiNCldKTt9fVtfMHg1MTJhMzcoMHhmMyldKF8weDNhOTg2Yil7dmFyIF8weDJlZjQwYj1fMHg1MTJhMzc7cmV0dXJuISEoXzB4M2E5ODZiJiZfMHgxNGE4Y2NbXzB4MmVmNDBiKDB4MTM4KV0mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDNhOTg2Yik9PT1fMHgyZWY0MGIoMHgxMzYpJiZfMHgzYTk4NmJbXzB4MmVmNDBiKDB4MWE5KV0pO31bXzB4NTEyYTM3KDB4ZDIpXShfMHg0OTViY2Ype3ZhciBfMHgyNTJlN2Q9XzB4NTEyYTM3O2lmKF8weDQ5NWJjZltfMHgyNTJlN2QoMHgxODQpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4NDk1YmNmO3ZhciBfMHg0MDg5Mjg7dHJ5e18weDQwODkyOD1KU09OW18weDI1MmU3ZCgweDEzZCldKCcnK18weDQ5NWJjZik7fWNhdGNoe18weDQwODkyOD0nXFxcXHgyMicrdGhpc1tfMHgyNTJlN2QoMHhkYSldKF8weDQ5NWJjZikrJ1xcXFx4MjInO31yZXR1cm4gXzB4NDA4OTI4W18weDI1MmU3ZCgweDE4NCldKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4NDA4OTI4PV8weDQwODkyOFsnc3Vic3RyJ10oMHgxLF8weDQwODkyOFtfMHgyNTJlN2QoMHgxNTUpXS0weDIpOl8weDQwODkyOD1fMHg0MDg5MjhbXzB4MjUyZTdkKDB4MTIyKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVtfMHgyNTJlN2QoMHgxMjIpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVsncmVwbGFjZSddKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHg0MDg5Mjg7fVtfMHg1MTJhMzcoMHgxMzUpXShfMHgzY2UzMjcsXzB4YTA1ZmMwLF8weDI4NWJkNyxfMHgyOTg1ODUpe3ZhciBfMHgyZTFiNmI9XzB4NTEyYTM3O3RoaXNbXzB4MmUxYjZiKDB4YzUpXShfMHgzY2UzMjcsXzB4YTA1ZmMwKSxfMHgyOTg1ODUmJl8weDI5ODU4NSgpLHRoaXNbJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHgyODViZDcsXzB4M2NlMzI3KSx0aGlzW18weDJlMWI2YigweGZkKV0oXzB4M2NlMzI3LF8weGEwNWZjMCk7fVtfMHg1MTJhMzcoMHhjNSldKF8weDFkZjVjYixfMHgxZTYwMGUpe3ZhciBfMHg1Njk1MjQ9XzB4NTEyYTM3O3RoaXNbXzB4NTY5NTI0KDB4ZTcpXShfMHgxZGY1Y2IsXzB4MWU2MDBlKSx0aGlzW18weDU2OTUyNCgweDE5NSldKF8weDFkZjVjYixfMHgxZTYwMGUpLHRoaXNbXzB4NTY5NTI0KDB4YzkpXShfMHgxZGY1Y2IsXzB4MWU2MDBlKSx0aGlzW18weDU2OTUyNCgweDEwOSldKF8weDFkZjVjYixfMHgxZTYwMGUpO31bXzB4NTEyYTM3KDB4ZTcpXShfMHg0YTMyZDAsXzB4MzY1ZDE5KXt9Wydfc2V0Tm9kZVF1ZXJ5UGF0aCddKF8weDhlMjllZSxfMHgxOTY5ZGIpe31bJ19zZXROb2RlTGFiZWwnXShfMHg5NTdmNTQsXzB4MzA0M2ZlKXt9W18weDUxMmEzNygweDE3NCldKF8weDRmMjQ0ZCl7dmFyIF8weDMzMzA2ZT1fMHg1MTJhMzc7cmV0dXJuIF8weDRmMjQ0ZD09PXRoaXNbXzB4MzMzMDZlKDB4MWEyKV07fVsnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4MmYyZDY1LF8weDVhNzU1NCl7dmFyIF8weDFhOTY0OD1fMHg1MTJhMzc7dGhpc1tfMHgxYTk2NDgoMHhmMSldKF8weDJmMmQ2NSxfMHg1YTc1NTQpLHRoaXNbXzB4MWE5NjQ4KDB4MTFmKV0oXzB4MmYyZDY1KSxfMHg1YTc1NTRbJ3NvcnRQcm9wcyddJiZ0aGlzW18weDFhOTY0OCgweDE4MildKF8weDJmMmQ2NSksdGhpc1snX2FkZEZ1bmN0aW9uc05vZGUnXShfMHgyZjJkNjUsXzB4NWE3NTU0KSx0aGlzW18weDFhOTY0OCgweDE1YSldKF8weDJmMmQ2NSxfMHg1YTc1NTQpLHRoaXNbXzB4MWE5NjQ4KDB4MTQ1KV0oXzB4MmYyZDY1KTt9W18weDUxMmEzNygweDE0ZCldKF8weDIxODU5NixfMHgzOWJiOTkpe3ZhciBfMHhmNzExZGY9XzB4NTEyYTM3O3RyeXtfMHgyMTg1OTYmJnR5cGVvZiBfMHgyMTg1OTZbXzB4ZjcxMWRmKDB4MTU1KV09PV8weGY3MTFkZigweDFiMCkmJihfMHgzOWJiOTlbJ2xlbmd0aCddPV8weDIxODU5NltfMHhmNzExZGYoMHgxNTUpXSk7fWNhdGNoe31pZihfMHgzOWJiOTlbJ3R5cGUnXT09PV8weGY3MTFkZigweDFiMCl8fF8weDM5YmI5OVtfMHhmNzExZGYoMHgxNjIpXT09PSdOdW1iZXInKXtpZihpc05hTihfMHgzOWJiOTlbJ3ZhbHVlJ10pKV8weDM5YmI5OVtfMHhmNzExZGYoMHgxNDgpXT0hMHgwLGRlbGV0ZSBfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MWI0KV07ZWxzZSBzd2l0Y2goXzB4MzliYjk5W18weGY3MTFkZigweDFiNCldKXtjYXNlIE51bWJlcltfMHhmNzExZGYoMHgxOGMpXTpfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTA1KV09ITB4MCxkZWxldGUgXzB4MzliYjk5W18weGY3MTFkZigweDFiNCldO2JyZWFrO2Nhc2UgTnVtYmVyW18weGY3MTFkZigweDEwMildOl8weDM5YmI5OVsnbmVnYXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDM5YmI5OVtfMHhmNzExZGYoMHgxYjQpXTticmVhaztjYXNlIDB4MDp0aGlzW18weGY3MTFkZigweDE5MCldKF8weDM5YmI5OVsndmFsdWUnXSkmJihfMHgzOWJiOTlbJ25lZ2F0aXZlWmVybyddPSEweDApO2JyZWFrO319ZWxzZSBfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTYyKV09PT1fMHhmNzExZGYoMHgxOTgpJiZ0eXBlb2YgXzB4MjE4NTk2W18weGY3MTFkZigweGU1KV09PSdzdHJpbmcnJiZfMHgyMTg1OTZbXzB4ZjcxMWRmKDB4ZTUpXSYmXzB4MzliYjk5W18weGY3MTFkZigweGU1KV0mJl8weDIxODU5NltfMHhmNzExZGYoMHhlNSldIT09XzB4MzliYjk5WyduYW1lJ10mJihfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTViKV09XzB4MjE4NTk2WyduYW1lJ10pO31bJ19pc05lZ2F0aXZlWmVybyddKF8weDE4NzhjMyl7cmV0dXJuIDB4MS9fMHgxODc4YzM9PT1OdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ107fVtfMHg1MTJhMzcoMHgxODIpXShfMHg0ZjZiZGMpe3ZhciBfMHg1NGI0MzY9XzB4NTEyYTM3OyFfMHg0ZjZiZGNbXzB4NTRiNDM2KDB4MTI5KV18fCFfMHg0ZjZiZGNbXzB4NTRiNDM2KDB4MTI5KV1bXzB4NTRiNDM2KDB4MTU1KV18fF8weDRmNmJkY1sndHlwZSddPT09XzB4NTRiNDM2KDB4MWFjKXx8XzB4NGY2YmRjWyd0eXBlJ109PT0nTWFwJ3x8XzB4NGY2YmRjW18weDU0YjQzNigweDE2MildPT09J1NldCd8fF8weDRmNmJkY1tfMHg1NGI0MzYoMHgxMjkpXVtfMHg1NGI0MzYoMHgxNzgpXShmdW5jdGlvbihfMHg0NDEwZWYsXzB4MjBlNWFmKXt2YXIgXzB4MTU3Njg5PV8weDU0YjQzNixfMHgyZjQ2ODI9XzB4NDQxMGVmW18weDE1NzY4OSgweGU1KV1bXzB4MTU3Njg5KDB4MWIzKV0oKSxfMHgyNDlhMmY9XzB4MjBlNWFmWyduYW1lJ11bXzB4MTU3Njg5KDB4MWIzKV0oKTtyZXR1cm4gXzB4MmY0NjgyPF8weDI0OWEyZj8tMHgxOl8weDJmNDY4Mj5fMHgyNDlhMmY/MHgxOjB4MDt9KTt9WydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDNlNGYwYyxfMHgxNjYyMGQpe3ZhciBfMHgzYzQ5MWQ9XzB4NTEyYTM3O2lmKCEoXzB4MTY2MjBkWydub0Z1bmN0aW9ucyddfHwhXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldfHwhXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldW18weDNjNDkxZCgweDE1NSldKSl7Zm9yKHZhciBfMHgzMjQyNGQ9W10sXzB4MTFjYmJlPVtdLF8weDRmZTdiND0weDAsXzB4M2Q4ZDBjPV8weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXVtfMHgzYzQ5MWQoMHgxNTUpXTtfMHg0ZmU3YjQ8XzB4M2Q4ZDBjO18weDRmZTdiNCsrKXt2YXIgXzB4NDZjMzUxPV8weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXVtfMHg0ZmU3YjRdO18weDQ2YzM1MVtfMHgzYzQ5MWQoMHgxNjIpXT09PV8weDNjNDkxZCgweDE5OCk/XzB4MzI0MjRkWydwdXNoJ10oXzB4NDZjMzUxKTpfMHgxMWNiYmVbXzB4M2M0OTFkKDB4MWE2KV0oXzB4NDZjMzUxKTt9aWYoISghXzB4MTFjYmJlW18weDNjNDkxZCgweDE1NSldfHxfMHgzMjQyNGRbXzB4M2M0OTFkKDB4MTU1KV08PTB4MSkpe18weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXT1fMHgxMWNiYmU7dmFyIF8weDQ2ZDcwOT17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHgzMjQyNGR9O3RoaXNbJ19zZXROb2RlSWQnXShfMHg0NmQ3MDksXzB4MTY2MjBkKSx0aGlzW18weDNjNDkxZCgweGYxKV0oXzB4NDZkNzA5LF8weDE2NjIwZCksdGhpc1tfMHgzYzQ5MWQoMHgxMWYpXShfMHg0NmQ3MDkpLHRoaXNbJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHg0NmQ3MDksXzB4MTY2MjBkKSxfMHg0NmQ3MDlbJ2lkJ10rPSdcXFxceDIwZicsXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldW18weDNjNDkxZCgweDExOSldKF8weDQ2ZDcwOSk7fX19W18weDUxMmEzNygweDE1YSldKF8weDMwOTkxNixfMHgzMWFkYzUpe31bXzB4NTEyYTM3KDB4MTFmKV0oXzB4MzNjMDFkKXt9W18weDUxMmEzNygweGNmKV0oXzB4MmYxNGVkKXt2YXIgXzB4MjljYWY5PV8weDUxMmEzNztyZXR1cm4gQXJyYXlbXzB4MjljYWY5KDB4MTllKV0oXzB4MmYxNGVkKXx8dHlwZW9mIF8weDJmMTRlZD09XzB4MjljYWY5KDB4MTk0KSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MmYxNGVkKT09PV8weDI5Y2FmOSgweDE0YSk7fVtfMHg1MTJhMzcoMHgxMDkpXShfMHgzZDJiMzUsXzB4NWEyYWFlKXt9W18weDUxMmEzNygweDE0NSldKF8weDVlODc0OSl7dmFyIF8weDFlYzkwYz1fMHg1MTJhMzc7ZGVsZXRlIF8weDVlODc0OVtfMHgxZWM5MGMoMHgxODkpXSxkZWxldGUgXzB4NWU4NzQ5W18weDFlYzkwYygweGNiKV0sZGVsZXRlIF8weDVlODc0OVtfMHgxZWM5MGMoMHgxOTMpXTt9Wydfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJ10oXzB4M2VkZDNjLF8weDNlMmUwYyl7fVtfMHg1MTJhMzcoMHgxMDApXShfMHg1NmNmNmQpe3ZhciBfMHgyY2Y2M2E9XzB4NTEyYTM3O3JldHVybiBfMHg1NmNmNmQ/XzB4NTZjZjZkW18weDJjZjYzYSgweDE4NCldKHRoaXNbXzB4MmNmNjNhKDB4MTgzKV0pPydbJytfMHg1NmNmNmQrJ10nOl8weDU2Y2Y2ZFtfMHgyY2Y2M2EoMHgxODQpXSh0aGlzW18weDJjZjYzYSgweGYyKV0pPycuJytfMHg1NmNmNmQ6XzB4NTZjZjZkW18weDJjZjYzYSgweDE4NCldKHRoaXNbXzB4MmNmNjNhKDB4ZTEpXSk/J1snK18weDU2Y2Y2ZCsnXSc6J1tcXFxceDI3JytfMHg1NmNmNmQrJ1xcXFx4MjddJzonJzt9fWxldCBfMHhjYjYyNTU9bmV3IF8weDU2MTMwZCgpO2Z1bmN0aW9uIF8weDRhMjk1YShfMHg1MGRiMDAsXzB4NDVkYWE1LF8weGM1YWIyZCxfMHgxZmQ0YjgsXzB4Zjk0MzVmLF8weDUxYTA0Zil7dmFyIF8weDQ4MDFiNj1fMHg1MTJhMzc7bGV0IF8weDQwZGI0YSxfMHgxYTM1MTY7dHJ5e18weDFhMzUxNj1fMHgzOTk2NzgoKSxfMHg0MGRiNGE9XzB4NTg2ZWE0W18weDQ1ZGFhNV0sIV8weDQwZGI0YXx8XzB4MWEzNTE2LV8weDQwZGI0YVsndHMnXT4weDFmNCYmXzB4NDBkYjRhW18weDQ4MDFiNigweDE2NildJiZfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTRiKV0vXzB4NDBkYjRhWydjb3VudCddPDB4NjQ/KF8weDU4NmVhNFtfMHg0NWRhYTVdPV8weDQwZGI0YT17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDFhMzUxNn0sXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldPXt9KTpfMHgxYTM1MTYtXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldWyd0cyddPjB4MzImJl8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNjYpXSYmXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE0YildL18weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNjYpXTwweDY0JiYoXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldPXt9KTtsZXQgXzB4MTZiOTQyPVtdLF8weDM3ZTIwOD1fMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTQwKV18fF8weDU4NmVhNFsnaGl0cyddW18weDQ4MDFiNigweDE0MCldP18weDFiMDcxNzpfMHgxNmEyMjIsXzB4NDI0NWU4PV8weDQ4ODdmMD0+e3ZhciBfMHgxMWUyYWI9XzB4NDgwMWI2O2xldCBfMHg1NGIwMzM9e307cmV0dXJuIF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMjkpXT1fMHg0ODg3ZjBbJ3Byb3BzJ10sXzB4NTRiMDMzW18weDExZTJhYigweDEzMCldPV8weDQ4ODdmMFsnZWxlbWVudHMnXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTk3KV09XzB4NDg4N2YwW18weDExZTJhYigweDE5NyldLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMzIpXT1fMHg0ODg3ZjBbXzB4MTFlMmFiKDB4MTMyKV0sXzB4NTRiMDMzW18weDExZTJhYigweDFhNyldPV8weDQ4ODdmMFtfMHgxMWUyYWIoMHgxYTcpXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTM0KV09XzB4NDg4N2YwW18weDExZTJhYigweDEzNCldLF8weDU0YjAzM1snc29ydFByb3BzJ109ITB4MSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTM5KV09IV8weDU0YTg3MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4ZDgpXT0weDEsXzB4NTRiMDMzW18weDExZTJhYigweDEzYSldPTB4MCxfMHg1NGIwMzNbJ2V4cElkJ109XzB4MTFlMmFiKDB4ZDEpLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxNmQpXT1fMHgxMWUyYWIoMHgxNjQpLF8weDU0YjAzM1snYXV0b0V4cGFuZCddPSEweDAsXzB4NTRiMDMzW18weDExZTJhYigweDFhZCldPVtdLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxNTQpXT0weDAsXzB4NTRiMDMzW18weDExZTJhYigweDFhYildPSEweDAsXzB4NTRiMDMzW18weDExZTJhYigweDE1ZildPTB4MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTY5KV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4NTRiMDMzO307Zm9yKHZhciBfMHgxMWRmODI9MHgwO18weDExZGY4MjxfMHhmOTQzNWZbJ2xlbmd0aCddO18weDExZGY4MisrKV8weDE2Yjk0MltfMHg0ODAxYjYoMHgxYTYpXShfMHhjYjYyNTVbXzB4NDgwMWI2KDB4MTI3KV0oeyd0aW1lTm9kZSc6XzB4NTBkYjAwPT09XzB4NDgwMWI2KDB4MTRiKXx8dm9pZCAweDB9LF8weGY5NDM1ZltfMHgxMWRmODJdLF8weDQyNDVlOChfMHgzN2UyMDgpLHt9KSk7aWYoXzB4NTBkYjAwPT09J3RyYWNlJyl7bGV0IF8weDIwZjAxMT1FcnJvcltfMHg0ODAxYjYoMHgxMzMpXTt0cnl7RXJyb3JbXzB4NDgwMWI2KDB4MTMzKV09MHgxLzB4MCxfMHgxNmI5NDJbXzB4NDgwMWI2KDB4MWE2KV0oXzB4Y2I2MjU1W18weDQ4MDFiNigweDEyNyldKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHg0ODAxYjYoMHgxNDcpXSxfMHg0MjQ1ZTgoXzB4MzdlMjA4KSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109XzB4MjBmMDExO319cmV0dXJueydtZXRob2QnOl8weDQ4MDFiNigweDExMiksJ3ZlcnNpb24nOl8weDVkZWE2MCwnYXJncyc6W3sndHMnOl8weGM1YWIyZCwnc2Vzc2lvbic6XzB4MWZkNGI4LCdhcmdzJzpfMHgxNmI5NDIsJ2lkJzpfMHg0NWRhYTUsJ2NvbnRleHQnOl8weDUxYTA0Zn1dfTt9Y2F0Y2goXzB4MWMyZWJkKXtyZXR1cm57J21ldGhvZCc6XzB4NDgwMWI2KDB4MTEyKSwndmVyc2lvbic6XzB4NWRlYTYwLCdhcmdzJzpbeyd0cyc6XzB4YzVhYjJkLCdzZXNzaW9uJzpfMHgxZmQ0YjgsJ2FyZ3MnOlt7J3R5cGUnOl8weDQ4MDFiNigweDFhYSksJ2Vycm9yJzpfMHgxYzJlYmQmJl8weDFjMmViZFtfMHg0ODAxYjYoMHgxOWIpXX1dLCdpZCc6XzB4NDVkYWE1LCdjb250ZXh0JzpfMHg1MWEwNGZ9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDQwZGI0YSYmXzB4MWEzNTE2KXtsZXQgXzB4Mzk2Zjk2PV8weDM5OTY3OCgpO18weDQwZGI0YVtfMHg0ODAxYjYoMHgxNjYpXSsrLF8weDQwZGI0YVtfMHg0ODAxYjYoMHgxNGIpXSs9XzB4M2Y1ZDJkKF8weDFhMzUxNixfMHgzOTZmOTYpLF8weDQwZGI0YVsndHMnXT1fMHgzOTZmOTYsXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE2NildKyssXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldWyd0aW1lJ10rPV8weDNmNWQyZChfMHgxYTM1MTYsXzB4Mzk2Zjk2KSxfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bJ3RzJ109XzB4Mzk2Zjk2LChfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTY2KV0+MHgzMnx8XzB4NDBkYjRhW18weDQ4MDFiNigweDE0YildPjB4NjQpJiYoXzB4NDBkYjRhWydyZWR1Y2VMaW1pdHMnXT0hMHgwKSwoXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE2NildPjB4M2U4fHxfMHg1ODZlYTRbJ2hpdHMnXVsndGltZSddPjB4MTJjKSYmKF8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNDApXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgxNGE4Y2NbXzB4NTEyYTM3KDB4MTAxKV07fSkoZ2xvYmFsVGhpcyxfMHg0M2NjYmYoMHhlYiksXzB4NDNjY2JmKDB4MWIxKSxfMHg0M2NjYmYoMHgxNjcpLF8weDQzY2NiZigweDE3YiksJzEuMC4wJyxfMHg0M2NjYmYoMHhmZiksXzB4NDNjY2JmKDB4MTg1KSxfMHg0M2NjYmYoMHgxODcpKTtmdW5jdGlvbiBfMHg1NzUwKCl7dmFyIF8weDUxZmNmMz1bJ3N0cmluZ2lmeScsJ2Rpc2FibGVkTG9nJywnNmlSenZRUicsJ3JlZHVjZUxpbWl0cycsJ3BvcnQnLCdzZXR0ZXInLCdyZWxvYWQnLCdTeW1ib2wnLCdfY2xlYW5Ob2RlJywndXJsJywnc3RhY2snLCduYW4nLCdfcF9sZW5ndGgnLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ3RpbWUnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdCdWZmZXInLCczNlVHcUt2eCcsJ19TeW1ib2wnLCdlbGFwc2VkJywnX2Nvbm5lY3RpbmcnLCd2YWx1ZU9mJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdsZW5ndGgnLCdub3cnLCdjdXJyZW50JywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdiaWdpbnQnLCdfYWRkTG9hZE5vZGUnLCdmdW5jTmFtZScsJ2Nsb3NlJywnZGF0YScsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnYWxsU3RyTGVuZ3RoJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJzE5MTI0MjhwZVVrWlMnLCd0eXBlJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ3Jvb3RfZXhwJywnNzA1NTNNa3dvVEknLCdjb3VudCcsXFxcIi9ob21lL2FkbWluaXN0cmFkb3IvLnZzY29kZS1zZXJ2ZXIvZXh0ZW5zaW9ucy93YWxsYWJ5anMuY29uc29sZS1uaW5qYS0wLjAuMTgyL25vZGVfbW9kdWxlc1xcXCIsJ3BhdGhUb0ZpbGVVUkwnLCdub2RlJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnd3M6Ly8nLCdpbmRleE9mJywncm9vdEV4cHJlc3Npb24nLCcyMTAwVGRvd2JhJywnX3JlY29ubmVjdFRpbWVvdXQnLCcxNzE0OTQ1ZmNwT09TJywnX2NhcElmU3RyaW5nJywnX2FkZFByb3BlcnR5Jywnb25lcnJvcicsJ19pc1VuZGVmaW5lZCcsJ3N1YnN0cicsJ0Vycm9yJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdzb3J0JywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0JywnMTQ5WGJFU2pFJywnd2VicGFjaycsJzI3MmlYT2dXWScsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnbnVsbCcsJ2pvaW4nLCdfaXNTZXQnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ19zb3J0UHJvcHMnLCdfbnVtYmVyUmVnRXhwJywnbWF0Y2gnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwic2ExXFxcIixcXFwiMTAuMzAuMC44MVxcXCIsXFxcIjE3Mi4yMC4wLjFcXFwiXSwncmVhZHlTdGF0ZScsJycsJ2NhbGwnLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdjb25zb2xlJywnaG9zdCcsJ1BPU0lUSVZFX0lORklOSVRZJywndGVzdCcsJ2hpdHMnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnLCdfaXNOZWdhdGl2ZVplcm8nLCdib29sZWFuJywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ19oYXNNYXBPbkl0c1BhdGgnLCdvYmplY3QnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ3dhcm4nLCdzdHJMZW5ndGgnLCdmdW5jdGlvbicsJ19XZWJTb2NrZXRDbGFzcycsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdtZXNzYWdlJywnX3NvY2tldCcsJ29uY2xvc2UnLCdpc0FycmF5JywnMzcwNDY5Y01LQ0xCJywnaW5jbHVkZXMnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ191bmRlZmluZWQnLCdoYXNPd25Qcm9wZXJ0eScsJzpsb2dQb2ludElkOicsJ3NsaWNlJywncHVzaCcsJ2F1dG9FeHBhbmRMaW1pdCcsJ19yZWdFeHBUb1N0cmluZycsJ2ZvckVhY2gnLCd1bmtub3duJywncmVzb2x2ZUdldHRlcnMnLCdhcnJheScsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdwcm9jZXNzJywnYmluZCcsJ251bWJlcicsJzM0NjQzJywnaHJ0aW1lJywndG9Mb3dlckNhc2UnLCd2YWx1ZScsJ3VucmVmJywnV2ViU29ja2V0JywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfaXNQcmltaXRpdmVUeXBlJywnXFxcXHgyMGJyb3dzZXInLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnZGVmYXVsdCcsJ19oYXNTZXRPbkl0c1BhdGgnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ21hcCcsJ19kYXRlVG9TdHJpbmcnLCdfaXNBcnJheScsJ1NldCcsJ3Jvb3RfZXhwX2lkJywnX3Byb3BlcnR5TmFtZScsJ19jb25uZWN0VG9Ib3N0Tm93JywnX2luQnJvd3NlcicsJzE0NjQ1NThid0NJdmwnLCdwZXJmX2hvb2tzJywncGFyZW50JywnZGVwdGgnLCdhc3RybycsJ19vYmplY3RUb1N0cmluZycsJ251eHQnLCdnZXRQcm90b3R5cGVPZicsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdhdXRvRXhwYW5kJywnY29uc3RydWN0b3InLCdfYWRkT2JqZWN0UHJvcGVydHknLCdfcXVvdGVkUmVnRXhwJywnb25vcGVuJywnZGF0ZScsJ25vZGVNb2R1bGVzJywnbmFtZScsJ19kaXNwb3NlV2Vic29ja2V0JywnX3NldE5vZGVJZCcsJ2luZGV4JywnY2FwcGVkRWxlbWVudHMnLCdwYXJzZScsJ2xvY2FsaG9zdCcsJ3N0cmluZycsJ3BlcmZvcm1hbmNlJywnc3ltYm9sJywnbG9jYXRpb24nLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ19zZXROb2RlTGFiZWwnLCdfa2V5U3RyUmVnRXhwJywnX2lzTWFwJywnZ2xvYmFsJywnU3RyaW5nJywnNEdLYlVacicsJ3Byb3RvdHlwZScsJ3NlbmQnLCdfV2ViU29ja2V0JywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdjYXBwZWRQcm9wcycsJzE2ODkyNTY0MjE1NTInLCdfcHJvcGVydHlBY2Nlc3NvcicsJ19jb25zb2xlX25pbmphJywnTkVHQVRJVkVfSU5GSU5JVFknLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ19wXycsJ3Bvc2l0aXZlSW5maW5pdHknLCdwb3AnLCd0aW1lU3RhbXAnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnZXJyb3InLCdfcHJvcGVydHknLCd2ZXJzaW9ucycsJ19IVE1MQWxsQ29sbGVjdGlvbicsJzYyMTQwZkJ1ZHhVJywncGF0aCcsJ2dldFdlYlNvY2tldENsYXNzJywnY2FwcGVkJywnbG9nJywnbWV0aG9kJywnZGlzYWJsZWRUcmFjZScsJ3RyYWNlJywnYXJndW1lbnRSZXNvbHV0aW9uRXJyb3InLCdfd3MnLCdcXFxceDIwc2VydmVyJywndW5zaGlmdCcsJzEwTW9leWlKJywndGltZUVuZCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnX2FsbG93ZWRUb1NlbmQnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ19fZXMnKydNb2R1bGUnLCd1bmRlZmluZWQnLCdyZXBsYWNlJywndG9TdHJpbmcnLCdvbm1lc3NhZ2UnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJ2VudW1lcmFibGUnLCdzZXJpYWxpemUnLCdfcF9uYW1lJywncHJvcHMnLCd0aGVuJywnQm9vbGVhbicsJ2hvc3RuYW1lJywnX2Nvbm5lY3RlZCcsJzIzMzR5a0VTeEgnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdlbGVtZW50cycsJy4uLicsJ3RvdGFsU3RyTGVuZ3RoJywnc3RhY2tUcmFjZUxpbWl0JywnYXV0b0V4cGFuZE1heERlcHRoJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ1tvYmplY3RcXFxceDIwTWFwXScsJ19zZW5kRXJyb3JNZXNzYWdlJywnTWFwJywnbm9GdW5jdGlvbnMnLCdsZXZlbCcsJ190eXBlJywnd3MvaW5kZXguanMnXTtfMHg1NzUwPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDUxZmNmMzt9O3JldHVybiBfMHg1NzUwKCk7fVwiKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRoZW1lLS1saWdodC52LWljb24ge1xcbiAgY29sb3I6ICMyZDUyYTg7XFxufVxcbi50aGVtZS0tbGlnaHQudi1sYWJlbC0taXMtZGlzYWJsZWQge1xcbiAgY29sb3I6IGdyZXkgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUGVyc29ubmVsQWN0aW9uRm9ybS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQSsyQkE7RUFDQSxjQUFBO0FBQ0E7QUFFQTtFQUNBLHNCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiByZWY9XFxcInRvcFxcXCI+XFxuICAgIDwhLS0gZGlzY2xhaW1lciAtLT5cXG4gICAgPGRpc2NsYWltZXItcmVnaXN0ZXIgLz5cXG4gICAgPCEtLSBkaXNjbGFpbWVyIC0tPlxcblxcbiAgICA8YWxlcnRcXG4gICAgICA6dGV4dD1cXFwidGV4dEFsZXJ0XFxcIlxcbiAgICAgIDpldmVudD1cXFwiYWxlcnRFdmVudFxcXCJcXG4gICAgICA6c2hvdz1cXFwic2hvd0FsZXJ0XFxcIlxcbiAgICAgIEBzaG93LWFsZXJ0PVxcXCJ1cGRhdGVBbGVydCgkZXZlbnQpXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJtYi0yXFxcIlxcbiAgICAvPlxcblxcbiAgICA8IS0tIHJvdyAtLT5cXG4gICAgPHYtcm93XFxuICAgICAgdi1pZj1cXFwiIWxvYWRpbmdcXFwiXFxuICAgICAgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDEwcHhcXFwiXFxuICAgICAgY2xhc3M9XFxcInAtNCBzaGFkb3dcXFwiXFxuICAgID5cXG4gICAgICA8aDVcXG4gICAgICAgIGNsYXNzPVxcXCJmdy1ib2xkIHBiLTIgbWItNFxcXCJcXG4gICAgICAgIHN0eWxlPVxcXCJib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5XFxcIlxcbiAgICAgID5cXG4gICAgICAgIEktIERBVE9TIEdFTkVSQUxFU1xcbiAgICAgIDwvaDU+XFxuXFxuICAgICAgPCEtLSBuYW1lIC0tPlxcbiAgICAgIDx2LWNvbFxcbiAgICAgICAgY29scz1cXFwiMTJcXFwiXFxuICAgICAgICBzbT1cXFwiMTJcXFwiXFxuICAgICAgICBtZD1cXFwiNlxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJtLTAgcGItM1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8YmFzZS1pbnB1dFxcbiAgICAgICAgICBsYWJlbD1cXFwiTm9tYnJlIGRlbCBlbXBsZWFkb1xcXCJcXG4gICAgICAgICAgdi1tb2RlbD1cXFwiJHYuZWRpdGVkSXRlbS5uYW1lLiRtb2RlbFxcXCJcXG4gICAgICAgICAgOnZhbGlkYXRpb249XFxcIiR2LmVkaXRlZEl0ZW0ubmFtZVxcXCJcXG4gICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVxcXCJub25lXFxcIlxcbiAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICA6ZGlzYWJsZWQ9XFxcInRydWVcXFwiXFxuICAgICAgICAvPlxcbiAgICAgIDwvdi1jb2w+XFxuICAgICAgPCEtLSBuYW1lIC0tPlxcblxcbiAgICAgIDwhLS0gcG9zaXRpb25fc2lnbmF0dXJlIC0tPlxcbiAgICAgIDx2LWNvbFxcbiAgICAgICAgY29scz1cXFwiMTJcXFwiXFxuICAgICAgICBzbT1cXFwiMTJcXFwiXFxuICAgICAgICBtZD1cXFwiNlxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJtLTAgcGItM1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8YmFzZS1pbnB1dFxcbiAgICAgICAgICBsYWJlbD1cXFwiQ2FyZ29cXFwiXFxuICAgICAgICAgIHYtbW9kZWw9XFxcIiR2LmVkaXRlZEl0ZW0ucG9zaXRpb25fc2lnbmF0dXJlLiRtb2RlbFxcXCJcXG4gICAgICAgICAgOnZhbGlkYXRpb249XFxcIiR2LmVkaXRlZEl0ZW0ucG9zaXRpb25fc2lnbmF0dXJlXFxcIlxcbiAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgIDpkaXNhYmxlZD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgPC92LWNvbD5cXG4gICAgICA8IS0tIHBvc2l0aW9uX3NpZ25hdHVyZSAtLT5cXG5cXG4gICAgICA8IS0tIGRlcGVuZGVuY3kgLS0+XFxuICAgICAgPHYtY29sXFxuICAgICAgICBjb2xzPVxcXCIxMlxcXCJcXG4gICAgICAgIHNtPVxcXCIxMlxcXCJcXG4gICAgICAgIG1kPVxcXCIxMlxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJtLTAgcGItM1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8YmFzZS1pbnB1dFxcbiAgICAgICAgICBsYWJlbD1cXFwiVW5pZGFkIGRlIHRyYWJham9cXFwiXFxuICAgICAgICAgIHYtbW9kZWw9XFxcIiR2LmVkaXRlZEl0ZW0uZGVwZW5kZW5jeV9uYW1lLiRtb2RlbFxcXCJcXG4gICAgICAgICAgOnZhbGlkYXRpb249XFxcIiR2LmVkaXRlZEl0ZW0uZGVwZW5kZW5jeV9uYW1lXFxcIlxcbiAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgIDpkaXNhYmxlZD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgPC92LWNvbD5cXG4gICAgICA8IS0tIGRlcGVuZGVuY3kgLS0+XFxuXFxuICAgICAgPGg1XFxuICAgICAgICBjbGFzcz1cXFwiZnctYm9sZCBwYi0yIG1iLTRcXFwiXFxuICAgICAgICBzdHlsZT1cXFwiYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheVxcXCJcXG4gICAgICA+XFxuICAgICAgICBJSS0gTkFUVVJBTEVaQSBERSBMQSBMSUNFTkNJQSBQT1I6XFxuICAgICAgPC9oNT5cXG5cXG4gICAgICA8IS0tIGp1c3RpZmljYWN0aW9uX25hbWUgLS0+XFxuICAgICAgPHYtY29sXFxuICAgICAgICBjb2xzPVxcXCIxMlxcXCJcXG4gICAgICAgIHNtPVxcXCIxMlxcXCJcXG4gICAgICAgIG1kPVxcXCIxMlxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJtLTAgcGItNFxcXCJcXG4gICAgICA+XFxuICAgICAgICA8YmFzZS1zZWxlY3Qtc2VhcmNoXFxuICAgICAgICAgIGxhYmVsPVxcXCJUaXBvIGRlIGp1c3RpZmljYWNpw7NuXFxcIlxcbiAgICAgICAgICB2LW1vZGVsLnRyaW09XFxcIiR2LmVkaXRlZEl0ZW0uanVzdGlmaWNhdGlvbl9uYW1lLiRtb2RlbFxcXCJcXG4gICAgICAgICAgOml0ZW1zPVxcXCJqdXN0aWZpY2F0aW9uc1xcXCJcXG4gICAgICAgICAgaXRlbT1cXFwianVzdGlmaWNhdGlvbl9uYW1lXFxcIlxcbiAgICAgICAgICA6dmFsaWRhdGlvbj1cXFwiJHYuZWRpdGVkSXRlbS5qdXN0aWZpY2F0aW9uX25hbWVcXFwiXFxuICAgICAgICAvPlxcbiAgICAgIDwvdi1jb2w+XFxuICAgICAgPCEtLSBqdXN0aWZpY2FjdGlvbl9uYW1lIC0tPlxcbiAgICAgIDxoNVxcbiAgICAgICAgY2xhc3M9XFxcImZ3LWJvbGQgcGItMiBtYi00XFxcIlxcbiAgICAgICAgc3R5bGU9XFxcImJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXlcXFwiXFxuICAgICAgPlxcbiAgICAgICAgSUlJLi0gUEVSSU9ETyBQT1I6XFxuICAgICAgPC9oNT5cXG4gICAgICA8IS0tIHJhZGlvIGdyb3VwIC0tPlxcbiAgICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyXFxcIj5cXG4gICAgICAgIDx2LXJhZGlvLWdyb3VwXFxuICAgICAgICAgIHYtbW9kZWw9XFxcIiR2LmVkaXRlZEl0ZW0ucGVyaW9kX2J5LiRtb2RlbFxcXCJcXG4gICAgICAgICAgcm93XFxuICAgICAgICA+XFxuICAgICAgICAgIDwhLS0gcmFkaW8gaG91cnMgLS0+XFxuICAgICAgICAgIDx2LXJhZGlvXFxuICAgICAgICAgICAgdmFsdWU9XFxcImhvdXJzXFxcIlxcbiAgICAgICAgICAgIEBjbGljaz1cXFwic2hvd0hvdXJGb3JtKClcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmxhYmVsPlxcbiAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IDhweDsgY29sb3I6ICMzMTM5NDVcXFwiPkhPUkFTPC9zdHJvbmc+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICA8L3YtcmFkaW8+XFxuICAgICAgICAgIDwhLS0gcmFkaW8gaG91cnMgLS0+XFxuICAgICAgICAgIDwhLS0gcmFkaW8gZGF5cyAtLT5cXG4gICAgICAgICAgPHYtcmFkaW9cXG4gICAgICAgICAgICB2YWx1ZT1cXFwiZGF5c1xcXCJcXG4gICAgICAgICAgICBAY2xpY2s9XFxcInNob3dEYXlGb3JtKClcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmxhYmVsPlxcbiAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IDhweDsgY29sb3I6ICMzMTM5NDVcXFwiPkTDjUFTPC9zdHJvbmc+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICA8L3YtcmFkaW8+XFxuICAgICAgICAgIDwhLS0gcmFkaW8gZGF5cyAtLT5cXG4gICAgICAgIDwvdi1yYWRpby1ncm91cD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8IS0tIHJhZGlvIGdyb3VwIC0tPlxcblxcbiAgICAgIDwhLS0gaG91cnMgY29sIC0tPlxcbiAgICAgIDx2LWNvbFxcbiAgICAgICAgY29scz1cXFwiMTJcXFwiXFxuICAgICAgICBzbT1cXFwiMTJcXFwiXFxuICAgICAgICBtZD1cXFwiMTJcXFwiXFxuICAgICAgICB2LXNob3c9XFxcImVkaXRlZEl0ZW0ucGVyaW9kX2J5ID09ICdob3VycydcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPGg2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBmdy1ib2xkXFxcIj5IT1JBUzo8L2g2PlxcbiAgICAgICAgPHYtcm93IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcXCI+XFxuICAgICAgICAgIDwhLS0gZnJvbV9ob3VyIC0tPlxcbiAgICAgICAgICA8di1jb2xcXG4gICAgICAgICAgICBjb2xzPVxcXCIxMlxcXCJcXG4gICAgICAgICAgICBzbT1cXFwiNlxcXCJcXG4gICAgICAgICAgICBtZD1cXFwiNFxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgPGJhc2UtaW5wdXRcXG4gICAgICAgICAgICAgIGxhYmVsPVxcXCJEZXNkZSBsYXNcXFwiXFxuICAgICAgICAgICAgICB2LW1vZGVsPVxcXCIkdi5lZGl0ZWRJdGVtLmZyb21faG91ci4kbW9kZWxcXFwiXFxuICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cXFwiJHYuZWRpdGVkSXRlbS5mcm9tX2hvdXJcXFwiXFxuICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XFxcImRlZmF1bHRcXFwiXFxuICAgICAgICAgICAgICB0eXBlPVxcXCJ0aW1lXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgIDwvdi1jb2w+XFxuICAgICAgICAgIDwhLS0gZnJvbV9ob3VyIC0tPlxcbiAgICAgICAgICA8IS0tIGZyb21faG91ciAtLT5cXG4gICAgICAgICAgPHYtY29sXFxuICAgICAgICAgICAgY29scz1cXFwiMTJcXFwiXFxuICAgICAgICAgICAgc209XFxcIjZcXFwiXFxuICAgICAgICAgICAgbWQ9XFxcIjRcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcIlxcXCJcXG4gICAgICAgICAgPlxcbiAgICAgICAgICAgIDxiYXNlLWlucHV0XFxuICAgICAgICAgICAgICBsYWJlbD1cXFwiaGFzdGEgbGFzXFxcIlxcbiAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiJHYuZWRpdGVkSXRlbS50b19ob3VyLiRtb2RlbFxcXCJcXG4gICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVxcXCIkdi5lZGl0ZWRJdGVtLnRvX2hvdXJcXFwiXFxuICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XFxcImRlZmF1bHRcXFwiXFxuICAgICAgICAgICAgICB0eXBlPVxcXCJ0aW1lXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgIDwvdi1jb2w+XFxuICAgICAgICAgIDwhLS0gZnJvbV9ob3VyIC0tPlxcblxcbiAgICAgICAgICA8IS0tIHRvdGFsX2hvdXJzIC0tPlxcbiAgICAgICAgICA8di1jb2xcXG4gICAgICAgICAgICBjb2xzPVxcXCIxMlxcXCJcXG4gICAgICAgICAgICBzbT1cXFwiMTJcXFwiXFxuICAgICAgICAgICAgbWQ9XFxcIjhcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcIm0tMCBwYi0zXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgPGJhc2UtaW5wdXRcXG4gICAgICAgICAgICAgIGxhYmVsPVxcXCJUb3RhbCBkZSBob3Jhc1xcXCJcXG4gICAgICAgICAgICAgIHYtbW9kZWw9XFxcIiR2LmVkaXRlZEl0ZW0udG90YWxfaG91cnMuJG1vZGVsXFxcIlxcbiAgICAgICAgICAgICAgOnZhbGlkYXRpb249XFxcIiR2LmVkaXRlZEl0ZW0udG90YWxfaG91cnNcXFwiXFxuICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgPC92LWNvbD5cXG4gICAgICAgICAgPCEtLSB0b3RhbF9ob3VycyAtLT5cXG4gICAgICAgICAgPCEtLSBlZmZlY3RpdmVfZGF0ZSAtLT5cXG4gICAgICAgICAgPHYtY29sXFxuICAgICAgICAgICAgY29scz1cXFwiMTJcXFwiXFxuICAgICAgICAgICAgc209XFxcIjEyXFxcIlxcbiAgICAgICAgICAgIG1kPVxcXCI4XFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgICA8YmFzZS1pbnB1dFxcbiAgICAgICAgICAgICAgbGFiZWw9XFxcIkZlY2hhIGVmZWN0aXZhIHBhcmFcXFwiXFxuICAgICAgICAgICAgICB2LW1vZGVsPVxcXCIkdi5lZGl0ZWRJdGVtLmVmZmVjdGl2ZV9kYXRlLiRtb2RlbFxcXCJcXG4gICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVxcXCIkdi5lZGl0ZWRJdGVtLmVmZmVjdGl2ZV9kYXRlXFxcIlxcbiAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVxcXCJkZWZhdWx0XFxcIlxcbiAgICAgICAgICAgICAgdHlwZT1cXFwiZGF0ZVxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICA8L3YtY29sPlxcbiAgICAgICAgICA8IS0tIGVmZmVjdGl2ZV9kYXRlIC0tPlxcbiAgICAgICAgPC92LXJvdz5cXG4gICAgICA8L3YtY29sPlxcbiAgICAgIDwhLS0gaG91cnMgY29sIC0tPlxcblxcbiAgICAgIDwhLS0gZGF0ZXMgY29sIC0tPlxcbiAgICAgIDx2LWNvbFxcbiAgICAgICAgY29scz1cXFwiMTJcXFwiXFxuICAgICAgICBzbT1cXFwiMTJcXFwiXFxuICAgICAgICBtZD1cXFwiMTJcXFwiXFxuICAgICAgICB2LXNob3c9XFxcImVkaXRlZEl0ZW0ucGVyaW9kX2J5ID09ICdkYXlzJ1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8aDYgY2xhc3M9XFxcInRleHQtY2VudGVyIGZ3LWJvbGRcXFwiPkTDjUEoUykgQ09NUExFVE8oUyk6PC9oNj5cXG4gICAgICAgIDx2LXJvdyBzdHlsZT1cXFwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXFwiPlxcbiAgICAgICAgICA8IS0tIGZyb21fZGF0ZSAtLT5cXG4gICAgICAgICAgPHYtY29sXFxuICAgICAgICAgICAgY29scz1cXFwiMTJcXFwiXFxuICAgICAgICAgICAgc209XFxcIjEyXFxcIlxcbiAgICAgICAgICAgIG1kPVxcXCI0XFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgICA8YmFzZS1pbnB1dFxcbiAgICAgICAgICAgICAgbGFiZWw9XFxcIkRlbFxcXCJcXG4gICAgICAgICAgICAgIHYtbW9kZWw9XFxcIiR2LmVkaXRlZEl0ZW0uZnJvbV9kYXRlLiRtb2RlbFxcXCJcXG4gICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVxcXCIkdi5lZGl0ZWRJdGVtLmZyb21fZGF0ZVxcXCJcXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cXFwiZGVmYXVsdFxcXCJcXG4gICAgICAgICAgICAgIHR5cGU9XFxcImRhdGVcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgPC92LWNvbD5cXG4gICAgICAgICAgPCEtLSBmcm9tX2RhdGUgLS0+XFxuICAgICAgICAgIDwhLS0gZnJvbV9kYXRlIC0tPlxcbiAgICAgICAgICA8di1jb2xcXG4gICAgICAgICAgICBjb2xzPVxcXCIxMlxcXCJcXG4gICAgICAgICAgICBzbT1cXFwiMTJcXFwiXFxuICAgICAgICAgICAgbWQ9XFxcIjRcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcIlxcXCJcXG4gICAgICAgICAgPlxcbiAgICAgICAgICAgIDxiYXNlLWlucHV0XFxuICAgICAgICAgICAgICBsYWJlbD1cXFwiQWxcXFwiXFxuICAgICAgICAgICAgICB2LW1vZGVsPVxcXCIkdi5lZGl0ZWRJdGVtLnRvX2RhdGUuJG1vZGVsXFxcIlxcbiAgICAgICAgICAgICAgOnZhbGlkYXRpb249XFxcIiR2LmVkaXRlZEl0ZW0udG9fZGF0ZVxcXCJcXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cXFwiZGVmYXVsdFxcXCJcXG4gICAgICAgICAgICAgIHR5cGU9XFxcImRhdGVcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgPC92LWNvbD5cXG4gICAgICAgICAgPCEtLSBmcm9tX2RhdGUgLS0+XFxuICAgICAgICAgIDwhLS0gdG90YWxfZGF5cyAtLT5cXG4gICAgICAgICAgPHYtY29sXFxuICAgICAgICAgICAgY29scz1cXFwiMTJcXFwiXFxuICAgICAgICAgICAgc209XFxcIjEyXFxcIlxcbiAgICAgICAgICAgIG1kPVxcXCI4XFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJtLTAgcGItM1xcXCJcXG4gICAgICAgICAgPlxcbiAgICAgICAgICAgIDxiYXNlLWlucHV0XFxuICAgICAgICAgICAgICBsYWJlbD1cXFwiVG90YWwgZGUgZMOtYXNcXFwiXFxuICAgICAgICAgICAgICB2LW1vZGVsPVxcXCIkdi5lZGl0ZWRJdGVtLnRvdGFsX2RheXMuJG1vZGVsXFxcIlxcbiAgICAgICAgICAgICAgOnZhbGlkYXRpb249XFxcIiR2LmVkaXRlZEl0ZW0udG90YWxfZGF5c1xcXCJcXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICA8L3YtY29sPlxcbiAgICAgICAgICA8IS0tIHRvdGFsX2RheXMgLS0+XFxuICAgICAgICA8L3Ytcm93PlxcbiAgICAgIDwvdi1jb2w+XFxuICAgICAgPCEtLSBkYXRlcyBjb2wgLS0+XFxuXFxuICAgICAgPGg1XFxuICAgICAgICBjbGFzcz1cXFwiZnctYm9sZCBwYi0yIG1iLTQgcHQtNFxcXCJcXG4gICAgICAgIHN0eWxlPVxcXCJib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5XFxcIlxcbiAgICAgID5cXG4gICAgICAgIElWLSBKVVNUSUZJQ0FOVEVTXFxuICAgICAgPC9oNT5cXG5cXG4gICAgICA8IS0tIGp1c3RpZmljYXRpb24gLS0+XFxuICAgICAgPHYtY29sXFxuICAgICAgICBjb2xzPVxcXCIxMlxcXCJcXG4gICAgICAgIHNtPVxcXCIxMlxcXCJcXG4gICAgICAgIG1kPVxcXCIxMlxcXCJcXG4gICAgICA+XFxuICAgICAgICA8YmFzZS10ZXh0LWFyZWFcXG4gICAgICAgICAgbGFiZWw9XFxcIkp1c3RpZmljYWNpw7NuXFxcIlxcbiAgICAgICAgICB2LW1vZGVsPVxcXCIkdi5lZGl0ZWRJdGVtLmp1c3RpZmljYXRpb24uJG1vZGVsXFxcIlxcbiAgICAgICAgICA6dmFsaWRhdGlvbj1cXFwiJHYuZWRpdGVkSXRlbS5qdXN0aWZpY2F0aW9uXFxcIlxcbiAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICAgIDpyb3dzPVxcXCI2XFxcIlxcbiAgICAgICAgICBjb3VudGVyXFxuICAgICAgICAvPlxcblxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57eyAkdi5lZGl0ZWRJdGVtLmp1c3RpZmljYXRpb24uJG1vZGVsLmxlbmd0aCB9fSAvIDQwMDwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvdi1jb2w+XFxuICAgICAgPCEtLSBqdXN0aWZpY2F0aW9uIC0tPlxcblxcbiAgICAgIDxoNVxcbiAgICAgICAgY2xhc3M9XFxcImZ3LWJvbGQgcGItMiBtYi00XFxcIlxcbiAgICAgICAgc3R5bGU9XFxcImJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXlcXFwiXFxuICAgICAgPlxcbiAgICAgICAgVi4gVElFTVBPIEVYVFJBT1JESU5BUklPIC8gREVTQ0FOU09cXG4gICAgICA8L2g1PlxcblxcbiAgICAgIDxoNiBjbGFzcz1cXFwiZnctYm9sZCBtYi0wXFxcIj5cXG4gICAgICAgIEVuIGNhc28gZGUgc29saWNpdHVkIGRlIGRlc2NhbnNvIGNvbXBlbnNhdG9yaW8gZGV0YWxsYXIgY2F1c2EgbyBtb3Rpdm9cXG4gICAgICAgIHF1ZSBsbyBnZW5lcsOzOlxcbiAgICAgIDwvaDY+XFxuICAgICAgPCEtLSBleHRyYW9yZGluYXJ5X3dvcmsgLS0+XFxuICAgICAgPHYtY29sXFxuICAgICAgICBjb2xzPVxcXCIxMlxcXCJcXG4gICAgICAgIHhzPVxcXCIxMlxcXCJcXG4gICAgICAgIHNtPVxcXCIxMlxcXCJcXG4gICAgICAgIG1kPVxcXCI2XFxcIlxcbiAgICAgID5cXG4gICAgICAgIDx2LWNoZWNrYm94XFxuICAgICAgICAgIHYtbW9kZWw9XFxcIiR2LmVkaXRlZEl0ZW0uZXh0cmFvcmRpbmFyeV93b3JrLiRtb2RlbFxcXCJcXG4gICAgICAgICAgOnZhbGlkYXRpb24uc3luYz1cXFwiJHYuZWRpdGVkSXRlbS5leHRyYW9yZGluYXJ5X3dvcmtcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IDZweFxcXCI+XFxuICAgICAgICAgICAgICBUcmFiYWpvIGV4dHJhb3JkaW5hcmlvIGVuIGTDrWEgZGVzY2Fuc28sIHZhY2FjacOzbiBvIGFzdWV0b1xcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgPC92LWNoZWNrYm94PlxcbiAgICAgIDwvdi1jb2w+XFxuICAgICAgPCEtLSBleHRyYW9yZGluYXJ5X3dvcmsgLS0+XFxuXFxuICAgICAgPCEtLSB0cmFpbmluZyAtLT5cXG4gICAgICA8di1jb2xcXG4gICAgICAgIGNvbHM9XFxcIjEyXFxcIlxcbiAgICAgICAgeHM9XFxcIjEyXFxcIlxcbiAgICAgICAgc209XFxcIjEyXFxcIlxcbiAgICAgICAgbWQ9XFxcIjZcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPHYtY2hlY2tib3hcXG4gICAgICAgICAgdi1tb2RlbD1cXFwiJHYuZWRpdGVkSXRlbS50cmFpbmluZy4kbW9kZWxcXFwiXFxuICAgICAgICAgIDp2YWxpZGF0aW9uLnN5bmM9XFxcIiR2LmVkaXRlZEl0ZW0udHJhaW5pbmdcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IDZweFxcXCI+XFxuICAgICAgICAgICAgICBDYXBhY2l0YWNpw7NuIGVuIGTDrWEgZGVzY2Fuc28sIHZhY2FjacOzbiBvIGFzdWV0b1xcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgPC92LWNoZWNrYm94PlxcbiAgICAgIDwvdi1jb2w+XFxuICAgICAgPCEtLSB0cmFpbmluZyAtLT5cXG5cXG4gICAgICA8aDYgY2xhc3M9XFxcImZ3LWJvbGRcXFwiPkRldGFsbGUgZGUgbGEgYWN0aXZpZGFkIHJlYWxpemFkYTo8L2g2PlxcblxcbiAgICAgIDwhLS0gZXhlY3V0aW9uX3NpdGUgLS0+XFxuICAgICAgPHYtY29sXFxuICAgICAgICBjb2xzPVxcXCIxMlxcXCJcXG4gICAgICAgIHNtPVxcXCIxMlxcXCJcXG4gICAgICAgIG1kPVxcXCI4XFxcIlxcbiAgICAgICAgY2xhc3M9XFxcIm0tMCBwYi0zXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxiYXNlLWlucHV0XFxuICAgICAgICAgIGxhYmVsPVxcXCJMdWdhciBkZSBlamVjdWNpw7NuXFxcIlxcbiAgICAgICAgICB2LW1vZGVsLnRyaW09XFxcIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX3NpdGUuJG1vZGVsXFxcIlxcbiAgICAgICAgICA6dmFsaWRhdGlvbj1cXFwiJHYuZWRpdGVkSXRlbS5leGVjdXRpb25fc2l0ZVxcXCJcXG4gICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVxcXCJub25lXFxcIlxcbiAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgLz5cXG4gICAgICA8L3YtY29sPlxcbiAgICAgIDwhLS0gZXhlY3V0aW9uX3NpdGUgLS0+XFxuXFxuICAgICAgPCEtLSBleGVjdXRpb25fZGF0ZSAtLT5cXG4gICAgICA8di1jb2xcXG4gICAgICAgIGNvbHM9XFxcIjEyXFxcIlxcbiAgICAgICAgc209XFxcIjEyXFxcIlxcbiAgICAgICAgbWQ9XFxcIjRcXFwiXFxuICAgICAgICBjbGFzcz1cXFwibS0wIHBiLTNcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPGJhc2UtaW5wdXRcXG4gICAgICAgICAgbGFiZWw9XFxcIkZlY2hhIGRlIGVqZWN1Y2nDs25cXFwiXFxuICAgICAgICAgIHYtbW9kZWw9XFxcIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX2RhdGUuJG1vZGVsXFxcIlxcbiAgICAgICAgICA6dmFsaWRhdGlvbj1cXFwiJHYuZWRpdGVkSXRlbS5leGVjdXRpb25fZGF0ZVxcXCJcXG4gICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVxcXCJub25lXFxcIlxcbiAgICAgICAgICB0eXBlPVxcXCJkYXRlXFxcIlxcbiAgICAgICAgLz5cXG4gICAgICA8L3YtY29sPlxcbiAgICAgIDwhLS0gZXhlY3V0aW9uX2RhdGUgLS0+XFxuXFxuICAgICAgPCEtLSBleGVjdXRpb25fc2NoZWR1bGUgLS0+XFxuICAgICAgPHYtY29sXFxuICAgICAgICBjb2xzPVxcXCIxMlxcXCJcXG4gICAgICAgIHNtPVxcXCIxMlxcXCJcXG4gICAgICAgIG1kPVxcXCI0XFxcIlxcbiAgICAgICAgY2xhc3M9XFxcIm0tMCBwYi0zXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxiYXNlLWlucHV0XFxuICAgICAgICAgIGxhYmVsPVxcXCJIb3JhcmlvIGRlIGVqZWN1Y2nDs25cXFwiXFxuICAgICAgICAgIHYtbW9kZWw9XFxcIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX3NjaGVkdWxlLiRtb2RlbFxcXCJcXG4gICAgICAgICAgOnZhbGlkYXRpb249XFxcIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX3NjaGVkdWxlXFxcIlxcbiAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAvPlxcbiAgICAgIDwvdi1jb2w+XFxuICAgICAgPCEtLSBleGVjdXRpb25fc2NoZWR1bGUgLS0+XFxuXFxuICAgICAgPCEtLSBleGVjdXRpb25fbnVtYmVyX2hvdXJzIC0tPlxcbiAgICAgIDx2LWNvbFxcbiAgICAgICAgY29scz1cXFwiMTJcXFwiXFxuICAgICAgICBzbT1cXFwiMTJcXFwiXFxuICAgICAgICBtZD1cXFwiNFxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJtLTAgcGItM1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8YmFzZS1pbnB1dFxcbiAgICAgICAgICBsYWJlbD1cXFwiQ2FudGlkYWQgZGUgaG9yYXNcXFwiXFxuICAgICAgICAgIHYtbW9kZWw9XFxcIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX251bWJlcl9ob3Vycy4kbW9kZWxcXFwiXFxuICAgICAgICAgIDp2YWxpZGF0aW9uPVxcXCIkdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl9udW1iZXJfaG91cnNcXFwiXFxuICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgICAgdHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgLz5cXG4gICAgICA8L3YtY29sPlxcbiAgICAgIDwhLS0gZXhlY3V0aW9uX251bWJlcl9ob3VycyAtLT5cXG5cXG4gICAgICA8IS0tIGFzc2lnbmVkX2J5IC0tPlxcbiAgICAgIDx2LWNvbFxcbiAgICAgICAgY29scz1cXFwiMTJcXFwiXFxuICAgICAgICBzbT1cXFwiMTJcXFwiXFxuICAgICAgICBtZD1cXFwiNFxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJtLTAgcGItM1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8YmFzZS1pbnB1dFxcbiAgICAgICAgICBsYWJlbD1cXFwiQXNpZ25hZG8gcG9yXFxcIlxcbiAgICAgICAgICB2LW1vZGVsPVxcXCIkdi5lZGl0ZWRJdGVtLmFzc2lnbmVkX2J5LiRtb2RlbFxcXCJcXG4gICAgICAgICAgOnZhbGlkYXRpb249XFxcIiR2LmVkaXRlZEl0ZW0uYXNzaWduZWRfYnlcXFwiXFxuICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgPC92LWNvbD5cXG4gICAgICA8IS0tIGFzc2lnbmVkX2J5IC0tPlxcblxcbiAgICAgIDwhLS0gbnVtYmVyX2RheXNfcmVxdWVzdGVkIC0tPlxcbiAgICAgIDx2LWNvbFxcbiAgICAgICAgY29scz1cXFwiMTJcXFwiXFxuICAgICAgICBzbT1cXFwiMTJcXFwiXFxuICAgICAgICBtZD1cXFwiM1xcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJtLTAgcGItM1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8YmFzZS1pbnB1dFxcbiAgICAgICAgICBsYWJlbD1cXFwiQ2FudGlkYWQgZGUgZMOtYXMgc29saWNpdGFkb3NcXFwiXFxuICAgICAgICAgIHYtbW9kZWw9XFxcIiR2LmVkaXRlZEl0ZW0ubnVtYmVyX2RheXNfcmVxdWVzdGVkLiRtb2RlbFxcXCJcXG4gICAgICAgICAgOnZhbGlkYXRpb249XFxcIiR2LmVkaXRlZEl0ZW0ubnVtYmVyX2RheXNfcmVxdWVzdGVkXFxcIlxcbiAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICAgIHR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgPC92LWNvbD5cXG4gICAgICA8IS0tIG51bWJlcl9kYXlzX3JlcXVlc3RlZCAtLT5cXG5cXG4gICAgICA8IS0tIGV4ZWN1dGlvbl9lZmZlY3RpdmVfZGF0ZSAtLT5cXG4gICAgICA8di1jb2xcXG4gICAgICAgIGNvbHM9XFxcIjEyXFxcIlxcbiAgICAgICAgc209XFxcIjEyXFxcIlxcbiAgICAgICAgbWQ9XFxcIjNcXFwiXFxuICAgICAgICBjbGFzcz1cXFwibS0wIHBiLTNcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPGJhc2UtaW5wdXRcXG4gICAgICAgICAgbGFiZWw9XFxcIkZlY2hhIHF1ZSBzZSBoYXLDoSBlZmVjdGl2b1xcXCJcXG4gICAgICAgICAgdi1tb2RlbD1cXFwiJHYuZWRpdGVkSXRlbS5leGVjdXRpb25fZWZmZWN0aXZlX2RhdGUuJG1vZGVsXFxcIlxcbiAgICAgICAgICA6dmFsaWRhdGlvbj1cXFwiJHYuZWRpdGVkSXRlbS5leGVjdXRpb25fZWZmZWN0aXZlX2RhdGVcXFwiXFxuICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgICAgdHlwZT1cXFwiZGF0ZVxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgPC92LWNvbD5cXG4gICAgICA8IS0tIGV4ZWN1dGlvbl9lZmZlY3RpdmVfZGF0ZSAtLT5cXG5cXG4gICAgICA8IS0tIGV4ZWN1dGlvbl9mcm9tIC0tPlxcbiAgICAgIDx2LWNvbFxcbiAgICAgICAgY29scz1cXFwiMTJcXFwiXFxuICAgICAgICBzbT1cXFwiMTJcXFwiXFxuICAgICAgICBtZD1cXFwiM1xcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJtLTAgcGItM1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8YmFzZS1pbnB1dFxcbiAgICAgICAgICBsYWJlbD1cXFwiRGVzZGVcXFwiXFxuICAgICAgICAgIHYtbW9kZWw9XFxcIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX2Zyb20uJG1vZGVsXFxcIlxcbiAgICAgICAgICA6dmFsaWRhdGlvbj1cXFwiJHYuZWRpdGVkSXRlbS5leGVjdXRpb25fZnJvbVxcXCJcXG4gICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVxcXCJub25lXFxcIlxcbiAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgLz5cXG4gICAgICA8L3YtY29sPlxcbiAgICAgIDwhLS0gZXhlY3V0aW9uX2Zyb20gLS0+XFxuXFxuICAgICAgPCEtLSBleGVjdXRpb25fdG8gLS0+XFxuICAgICAgPHYtY29sXFxuICAgICAgICBjb2xzPVxcXCIxMlxcXCJcXG4gICAgICAgIHNtPVxcXCIxMlxcXCJcXG4gICAgICAgIG1kPVxcXCIzXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcIm0tMCBwYi0zXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxiYXNlLWlucHV0XFxuICAgICAgICAgIGxhYmVsPVxcXCJIYXN0YVxcXCJcXG4gICAgICAgICAgdi1tb2RlbD1cXFwiJHYuZWRpdGVkSXRlbS5leGVjdXRpb25fdG8uJG1vZGVsXFxcIlxcbiAgICAgICAgICA6dmFsaWRhdGlvbj1cXFwiJHYuZWRpdGVkSXRlbS5leGVjdXRpb25fdG9cXFwiXFxuICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgPC92LWNvbD5cXG4gICAgICA8IS0tIGV4ZWN1dGlvbl90byAtLT5cXG5cXG4gICAgICA8aDVcXG4gICAgICAgIGNsYXNzPVxcXCJmdy1ib2xkIHB0LTMgcGItMiBtYi0wXFxcIlxcbiAgICAgICAgc3R5bGU9XFxcImJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXlcXFwiXFxuICAgICAgPlxcbiAgICAgICAgVkkuIEFORVhBUiBET0NVTUVOVE9TXFxuICAgICAgPC9oNT5cXG5cXG4gICAgICA8IS0tIGp1c3RpZmljYXRpb25fZmlsZSAtLT5cXG4gICAgICA8di1jb2xcXG4gICAgICAgIGNvbHM9XFxcIjEyXFxcIlxcbiAgICAgICAgeHM9XFxcIjEyXFxcIlxcbiAgICAgICAgc209XFxcIjEyXFxcIlxcbiAgICAgICAgbWQ9XFxcIjZcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPGg2IGNsYXNzPVxcXCJtYi0wIGZ3LWJvbGRcXFwiPlxcbiAgICAgICAgICBEb2N1bWVudGFjacOzbiBvcmlnaW5hbCBwYXJhIGp1c3RpZmljYWNpw7NuIGRlIGFjY2nDs24gZGUgcGVyc29uYWwgKFBERikuXFxuICAgICAgICA8L2g2PlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPihDdWFuZG8gc2VhIHJlcXVlcmlkbyk8L3NwYW4+XFxuICAgICAgICA8aW5wdXQtZmlsZVxcbiAgICAgICAgICBhY2NlcHQ9XFxcImFwcGxpY2F0aW9uL3BkZlxcXCJcXG4gICAgICAgICAgdi1tb2RlbD1cXFwiJHYuZWRpdGVkSXRlbS5qdXN0aWZpY2F0aW9uX2ZpbGUuJG1vZGVsXFxcIlxcbiAgICAgICAgICA6dmFsaWRhdGlvbj1cXFwiJHYuZWRpdGVkSXRlbS5qdXN0aWZpY2F0aW9uX2ZpbGVcXFwiXFxuICAgICAgICAgIEB1cGRhdGUtZmlsZT1cXFwiZWRpdGVkSXRlbS5qdXN0aWZpY2F0aW9uX2ZpbGUgPSAkZXZlbnRcXFwiXFxuICAgICAgICAgIEBmaWxlLXNpemUtZXhjZWVkZWQ9XFxcIiRlbWl0KCdmaWxlLXNpemUtZXhjZWVkZWQnLCB0cnVlKVxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgPC92LWNvbD5cXG4gICAgICA8IS0tIGp1c3RpZmljYXRpb25fZmlsZSAtLT5cXG5cXG4gICAgICA8IS0tIGJ1dHRvbnMgLS0+XFxuICAgICAgPHYtcm93PlxcbiAgICAgICAgPHYtY29sXFxuICAgICAgICAgIGFsaWduPVxcXCJjZW50ZXJcXFwiXFxuICAgICAgICAgIGNvbHM9XFxcIjEyXFxcIlxcbiAgICAgICAgICBzbT1cXFwiMTJcXFwiXFxuICAgICAgICAgIG1kPVxcXCIxMlxcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcIlxcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgPHYtYnRuXFxuICAgICAgICAgICAgY29sb3I9XFxcImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlXFxcIlxcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwibG9hZGluZyB8fCAhdXNlci5pbm1lZGlhdGVfc3VwZXJpb3JfaWRcXFwiXFxuICAgICAgICAgICAgcm91bmRlZFxcbiAgICAgICAgICAgIEBjbGljaz1cXFwic2F2ZSgpXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgU29saWNpdGFyXFxuICAgICAgICAgIDwvdi1idG4+XFxuXFxuICAgICAgICAgIDx2LWJ0blxcbiAgICAgICAgICAgIGNvbG9yPVxcXCJidG4tbm9ybWFsLWNsb3NlIG5vLXVwcGVyY2FzZVxcXCJcXG4gICAgICAgICAgICByb3VuZGVkXFxuICAgICAgICAgICAgQGNsaWNrPVxcXCJjbGVhckZvcm0oKVxcXCJcXG4gICAgICAgICAgPlxcbiAgICAgICAgICAgIExpbXBpYXJcXG4gICAgICAgICAgPC92LWJ0bj5cXG5cXG4gICAgICAgICAgPHBcXG4gICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1yZWQgbXQtM1xcXCJcXG4gICAgICAgICAgICB2LWlmPVxcXCIhdXNlci5pbm1lZGlhdGVfc3VwZXJpb3JfaWRcXFwiXFxuICAgICAgICAgID5ObyBwb2Ryw6FzIHJlZ2lzdHJhciB0dXMgYWNjaW9uZXMgZGUgcGVyc29uYWwgaGFzdGEgcXVlIHR1IGplZmUgaW5tZWRpYXRvXFxuICAgICAgICAgICAgaW5pY2llIHNlc2nDs24gZGVudHJvIGRlIGxhXFxuICAgICAgICAgICAgcGxhdGFmb3JtYS48L3A+XFxuICAgICAgICA8L3YtY29sPlxcbiAgICAgIDwvdi1yb3c+XFxuICAgICAgPCEtLSBidXR0b25zIC0tPlxcbiAgICA8L3Ytcm93PlxcbiAgICA8IS0tIHJvdyAtLT5cXG5cXG4gICAgPCEtLSBsb2FkZXIgLS0+XFxuICAgIDx2LXJvd1xcbiAgICAgIHYtc2hvdz1cXFwibG9hZGluZ1xcXCJcXG4gICAgICBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgYm9yZGVyLXJhZGl1czogMTBweFxcXCJcXG4gICAgICBjbGFzcz1cXFwicC00IHNoYWRvd1xcXCJcXG4gICAgPlxcbiAgICAgIDxsb2FkZXIgdi1zaG93PVxcXCJsb2FkaW5nXFxcIiAvPlxcbiAgICA8L3Ytcm93PlxcbiAgICA8IS0tIGxvYWRlciAtLT5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQge1xcbiAgcmVxdWlyZWQsXFxuICBlbWFpbCxcXG4gIG1pbkxlbmd0aCxcXG4gIG1heExlbmd0aCxcXG4gIHJlcXVpcmVkSWYsXFxufSBmcm9tIFxcXCJ2dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnNcXFwiO1xcbmltcG9ydCBsaWIgZnJvbSBcXFwiLi4vbGlicy9mdW5jdGlvblxcXCI7XFxuaW1wb3J0IHVzZXJBcGkgZnJvbSBcXFwiLi4vYXBpcy91c2VyQXBpXFxcIjtcXG5pbXBvcnQganVzdGlmaWNhdGlvblR5cGVBcGkgZnJvbSBcXFwiLi4vYXBpcy9qdXN0aWZpY2F0aW9uVHlwZUFwaVxcXCI7XFxuaW1wb3J0IHBlcnNvbm5lbEFjdGlvbkFwaSBmcm9tIFxcXCIuLi9hcGlzL3BlcnNvbm5lbEFjdGlvbkFwaVxcXCI7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgZGF0YTogKCkgPT4gKHtcXG4gICAgbG9hZGluZzogZmFsc2UsXFxuICAgIHRleHRBbGVydDogXFxcIlxcXCIsXFxuICAgIGFsZXJ0RXZlbnQ6IFxcXCJzdWNjZXNzXFxcIixcXG4gICAgc2hvd0FsZXJ0OiBmYWxzZSxcXG4gICAganVzdGlmaWNhdGlvbnM6IFtdLFxcbiAgICByYWRpb0FsZXJ0OiBmYWxzZSxcXG4gICAgc2hvd0RheUlucHV0czogZmFsc2UsXFxuICAgIHNob3dIb3VySW5wdXRzOiBmYWxzZSxcXG4gICAgZWRpdGVkSXRlbToge1xcbiAgICAgIG5hbWU6IFxcXCJcXFwiLFxcbiAgICAgIHBvc2l0aW9uX3NpZ25hdHVyZTogXFxcIlxcXCIsXFxuICAgICAgZGVwZW5kZW5jeV9uYW1lOiBcXFwiXFxcIixcXG4gICAgICBqdXN0aWZpY2F0aW9uX25hbWU6IFxcXCJcXFwiLFxcbiAgICAgIGZyb21faG91cjogXFxcIlxcXCIsXFxuICAgICAgdG9faG91cjogXFxcIlxcXCIsXFxuICAgICAgdG90YWxfaG91cnM6IFxcXCJcXFwiLFxcbiAgICAgIGVmZmVjdGl2ZV9kYXRlOiBcXFwiXFxcIixcXG4gICAgICBmcm9tX2RhdGU6IFxcXCJcXFwiLFxcbiAgICAgIHRvX2RhdGU6IFxcXCJcXFwiLFxcbiAgICAgIHRvdGFsX2RheXM6IFxcXCJcXFwiLFxcbiAgICAgIGp1c3RpZmljYXRpb246IFxcXCJcXFwiLFxcbiAgICAgIGp1c3RpZmljYXRpb25fZmlsZTogXFxcIlxcXCIsXFxuICAgICAgZXh0cmFvcmRpbmFyeV93b3JrOiBmYWxzZSxcXG4gICAgICB0cmFpbmluZzogZmFsc2UsXFxuICAgICAgZXhlY3V0aW9uX3NpdGU6IFxcXCJcXFwiLFxcbiAgICAgIGV4ZWN1dGlvbl9kYXRlOiBcXFwiXFxcIixcXG4gICAgICBleGVjdXRpb25fc2NoZWR1bGU6IFxcXCJcXFwiLFxcbiAgICAgIGV4ZWN1dGlvbl9udW1iZXJfaG91cnM6IFxcXCJcXFwiLFxcbiAgICAgIGFzc2lnbmVkX2J5OiBcXFwiXFxcIixcXG4gICAgICBudW1iZXJfZGF5c19yZXF1ZXN0ZWQ6IFxcXCJcXFwiLFxcbiAgICAgIGV4ZWN1dGlvbl9lZmZlY3RpdmVfZGF0ZTogXFxcIlxcXCIsXFxuICAgICAgZXhlY3V0aW9uX2Zyb206IFxcXCJcXFwiLFxcbiAgICAgIGV4ZWN1dGlvbl90bzogXFxcIlxcXCIsXFxuICAgICAgcGVyaW9kX2J5OiBcXFwiaG91cnNcXFwiLFxcbiAgICB9LFxcbiAgICBkZWZhdWx0SXRlbToge1xcbiAgICAgIG5hbWU6IFxcXCJcXFwiLFxcbiAgICAgIHBvc2l0aW9uX3NpZ25hdHVyZTogXFxcIlxcXCIsXFxuICAgICAgZGVwZW5kZW5jeV9uYW1lOiBcXFwiXFxcIixcXG4gICAgICBqdXN0aWZpY2F0aW9uX25hbWU6IFxcXCJcXFwiLFxcbiAgICAgIGZyb21faG91cjogXFxcIlxcXCIsXFxuICAgICAgdG9faG91cjogXFxcIlxcXCIsXFxuICAgICAgdG90YWxfaG91cnM6IFxcXCJcXFwiLFxcbiAgICAgIGVmZmVjdGl2ZV9kYXRlOiBcXFwiXFxcIixcXG4gICAgICBmcm9tX2RhdGU6IFxcXCJcXFwiLFxcbiAgICAgIHRvX2RhdGU6IFxcXCJcXFwiLFxcbiAgICAgIHRvdGFsX2RheXM6IFxcXCJcXFwiLFxcbiAgICAgIGp1c3RpZmljYXRpb246IFxcXCJcXFwiLFxcbiAgICAgIGp1c3RpZmljYXRpb25fZmlsZTogXFxcIlxcXCIsXFxuICAgICAgZXh0cmFvcmRpbmFyeV93b3JrOiBmYWxzZSxcXG4gICAgICB0cmFpbmluZzogZmFsc2UsXFxuICAgICAgZXhlY3V0aW9uX3NpdGU6IFxcXCJcXFwiLFxcbiAgICAgIGV4ZWN1dGlvbl9kYXRlOiBcXFwiXFxcIixcXG4gICAgICBleGVjdXRpb25fc2NoZWR1bGU6IFxcXCJcXFwiLFxcbiAgICAgIGV4ZWN1dGlvbl9udW1iZXJfaG91cnM6IFxcXCJcXFwiLFxcbiAgICAgIGFzc2lnbmVkX2J5OiBcXFwiXFxcIixcXG4gICAgICBudW1iZXJfZGF5c19yZXF1ZXN0ZWQ6IFxcXCJcXFwiLFxcbiAgICAgIGV4ZWN1dGlvbl9lZmZlY3RpdmVfZGF0ZTogXFxcIlxcXCIsXFxuICAgICAgZXhlY3V0aW9uX2Zyb206IFxcXCJcXFwiLFxcbiAgICAgIGV4ZWN1dGlvbl90bzogXFxcIlxcXCIsXFxuICAgICAgcGVyaW9kX2J5OiBcXFwiaG91cnNcXFwiLFxcbiAgICB9LFxcbiAgfSksXFxuXFxuICB2YWxpZGF0aW9uczoge1xcbiAgICBlZGl0ZWRJdGVtOiB7XFxuICAgICAgLy8gUGFydCAxXFxuICAgICAgbmFtZToge1xcbiAgICAgICAgcmVxdWlyZWQsXFxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcXG4gICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoKDUwMCksXFxuICAgICAgfSxcXG4gICAgICBwb3NpdGlvbl9zaWduYXR1cmU6IHtcXG4gICAgICAgIHJlcXVpcmVkLFxcbiAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXFxuICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCg1MDApLFxcbiAgICAgIH0sXFxuICAgICAgZGVwZW5kZW5jeV9uYW1lOiB7XFxuICAgICAgICByZXF1aXJlZCxcXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxcbiAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgoNTAwKSxcXG4gICAgICB9LFxcbiAgICAgIC8vIFBhcnQgMlxcbiAgICAgIGp1c3RpZmljYXRpb25fbmFtZToge1xcbiAgICAgICAgcmVxdWlyZWQsXFxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcXG4gICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoKDUwMCksXFxuICAgICAgfSxcXG4gICAgICAvLyBQYXJ0IDNcXG4gICAgICBwZXJpb2RfYnk6IHtcXG4gICAgICAgIHJlcXVpcmVkOiByZXF1aXJlZCxcXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxcbiAgICAgIH0sXFxuICAgICAgLy8gUGFydCAzIC0gSG91cnNcXG4gICAgICBmcm9tX2hvdXI6IHtcXG4gICAgICAgIHJlcXVpcmVkOiByZXF1aXJlZElmKGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSXRlbS5wZXJpb2RfYnkgPT0gJ2hvdXJzJztcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXFxuICAgICAgfSxcXG4gICAgICB0b19ob3VyOiB7XFxuICAgICAgICByZXF1aXJlZDogcmVxdWlyZWRJZihmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgIHJldHVybiB0aGlzLmVkaXRlZEl0ZW0ucGVyaW9kX2J5ID09ICdob3Vycyc7XFxuICAgICAgICB9KSxcXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxcbiAgICAgIH0sXFxuICAgICAgdG90YWxfaG91cnM6IHtcXG4gICAgICAgIHJlcXVpcmVkOiByZXF1aXJlZElmKGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSXRlbS5wZXJpb2RfYnkgPT0gJ2hvdXJzJztcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXFxuICAgICAgfSxcXG4gICAgICBlZmZlY3RpdmVfZGF0ZToge1xcbiAgICAgICAgcmVxdWlyZWQ6IHJlcXVpcmVkSWYoZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICByZXR1cm4gdGhpcy5lZGl0ZWRJdGVtLnBlcmlvZF9ieSA9PSAnaG91cnMnO1xcbiAgICAgICAgfSksXFxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcXG4gICAgICB9LFxcbiAgICAgIC8vIFBhcnQgMyAtIERheXNcXG4gICAgICBmcm9tX2RhdGU6IHtcXG4gICAgICAgIHJlcXVpcmVkOiByZXF1aXJlZElmKGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSXRlbS5wZXJpb2RfYnkgPT0gJ2RheXMnO1xcbiAgICAgICAgfSksXFxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcXG4gICAgICB9LFxcbiAgICAgIHRvX2RhdGU6IHtcXG4gICAgICAgIHJlcXVpcmVkOiByZXF1aXJlZElmKGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSXRlbS5wZXJpb2RfYnkgPT0gJ2RheXMnO1xcbiAgICAgICAgfSksXFxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcXG4gICAgICB9LFxcbiAgICAgIHRvdGFsX2RheXM6IHtcXG4gICAgICAgIHJlcXVpcmVkOiByZXF1aXJlZElmKGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSXRlbS5wZXJpb2RfYnkgPT0gJ2RheXMnO1xcbiAgICAgICAgfSksXFxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcXG4gICAgICB9LFxcbiAgICAgIC8vIFBhcnQgNCAtIEp1c3RpZmljYXRpb25cXG4gICAgICBqdXN0aWZpY2F0aW9uOiB7XFxuICAgICAgICByZXF1aXJlZCxcXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxcbiAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgoNDAwKSxcXG4gICAgICB9LFxcbiAgICAgIGp1c3RpZmljYXRpb25fZmlsZToge30sXFxuICAgICAgZXh0cmFvcmRpbmFyeV93b3JrOiBmYWxzZSxcXG4gICAgICB0cmFpbmluZzogZmFsc2UsXFxuICAgICAgZXhlY3V0aW9uX3NpdGU6IFxcXCJcXFwiLFxcbiAgICAgIGV4ZWN1dGlvbl9kYXRlOiBcXFwiXFxcIixcXG4gICAgICBleGVjdXRpb25fc2NoZWR1bGU6IFxcXCJcXFwiLFxcbiAgICAgIGV4ZWN1dGlvbl9udW1iZXJfaG91cnM6IFxcXCJcXFwiLFxcbiAgICAgIGFzc2lnbmVkX2J5OiBcXFwiXFxcIixcXG4gICAgICBudW1iZXJfZGF5c19yZXF1ZXN0ZWQ6IFxcXCJcXFwiLFxcbiAgICAgIGV4ZWN1dGlvbl9lZmZlY3RpdmVfZGF0ZTogXFxcIlxcXCIsXFxuICAgICAgZXhlY3V0aW9uX2Zyb206IFxcXCJcXFwiLFxcbiAgICAgIGV4ZWN1dGlvbl90bzogXFxcIlxcXCIsXFxuICAgIH0sXFxuICB9LFxcblxcbiAgY3JlYXRlZCgpIHtcXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XFxuICB9LFxcblxcbiAgY29tcHV0ZWQ6IHtcXG4gICAgbXVsdGlwbGljYXI6IGZ1bmN0aW9uICgpIHtcXG4gICAgICByZXR1cm4gKFxcbiAgICAgICAgK3RoaXMuZWRpdGVkSXRlbS5hc3NpZ25lZF9ieSAqICt0aGlzLmVkaXRlZEl0ZW0uZXhlY3V0aW9uX251bWJlcl9ob3Vyc1xcbiAgICAgICk7XFxuICAgIH0sXFxuICB9LFxcblxcbiAgbWV0aG9kczoge1xcbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XFxuXFxuICAgICAgbGV0IHJlcXVlc3RzID0gW1xcbiAgICAgICAgdXNlckFwaS5nZXQoYC9hY3R1YWxVc2VyYCksXFxuICAgICAgICBqdXN0aWZpY2F0aW9uVHlwZUFwaS5nZXQobnVsbCwge1xcbiAgICAgICAgICBwYXJhbXM6IHsgaXRlbXNQZXJQYWdlOiAtMSB9LFxcbiAgICAgICAgfSksXFxuICAgICAgXTtcXG5cXG4gICAgICBjb25zdCByZXNwb25zZXMgPSBhd2FpdCBQcm9taXNlLmFsbChyZXF1ZXN0cykuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIFxcXCJObyBmdWUgcG9zaWJsZSBvYnRlbmVyIGxvcyByZWdpc3Ryb3MuXFxcIiwgXFxcImZhaWxcXFwiKTtcXG5cXG4gICAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBsaWIudmVyaWZ5U2Vzc2lvbkZpbmlzaGVkKFxcbiAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMsXFxuICAgICAgICAgIDQwMVxcbiAgICAgICAgKTtcXG4gICAgICB9KTtcXG5cXG4gICAgICBpZiAocmVzcG9uc2VzKSB7XFxuICAgICAgICB0aGlzLnVzZXIgPSByZXNwb25zZXNbMF0uZGF0YS51c2VyO1xcbiAgICAgICAgdGhpcy5qdXN0aWZpY2F0aW9ucyA9IHJlc3BvbnNlc1sxXS5kYXRhLnJlY29yZHM7XFxuXFxuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0ubmFtZSA9IHRoaXMudXNlci5uYW1lO1xcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtLnBvc2l0aW9uX3NpZ25hdHVyZSA9IHRoaXMudXNlci5wb3NpdGlvbl9zaWduYXR1cmU7XFxuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0uZGVwZW5kZW5jeV9uYW1lID0gdGhpcy51c2VyLmRlcGVuZGVuY3lfbmFtZTtcXG4gICAgICB9XFxuXFxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XFxuICAgIH0sXFxuXFxuICAgIGFzeW5jIHNhdmUoKSB7XFxuICAgICAgdGhpcy4kdi4kdG91Y2goKTtcXG5cXG4gICAgICBpZiAodGhpcy4kdi5lZGl0ZWRJdGVtLiRpbnZhbGlkKSB7XFxuICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIFxcXCJDYW1wb3Mgb2JsaWdhdG9yaW9zLlxcXCIsIFxcXCJmYWlsXFxcIik7XFxuICAgICAgICByZXR1cm47XFxuICAgICAgfVxcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XFxuXFxuICAgICAgbGV0IHsgZGF0YSwgc3RhdHVzIH0gPSBhd2FpdCBwZXJzb25uZWxBY3Rpb25BcGlcXG4gICAgICAgIC5wb3N0KG51bGwsIHRoaXMuZWRpdGVkSXRlbSlcXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIFxcXCJmYWlsXFxcIik7XFxuXFxuICAgICAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBsaWIudmVyaWZ5U2Vzc2lvbkZpbmlzaGVkKFxcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyxcXG4gICAgICAgICAgICA0MDFcXG4gICAgICAgICAgKTtcXG4gICAgICAgICAgdGhpcy5jbGVhckZvcm0oKTtcXG4gICAgICAgIH0pO1xcblxcbiAgICAgIGlmIChzdGF0dXMgPT0gJzIwMCcpIHtcXG4gICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgZGF0YS5tZXNzYWdlLCBkYXRhLnN0YXRlLCAxMDAwMCk7XFxuICAgICAgICB0aGlzLmNsZWFyRm9ybSgpO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIGRhdGEubWVzc2FnZSwgZGF0YS5zdGF0ZSk7XFxuICAgICAgfVxcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xcbiAgICB9LFxcblxcbiAgICBzaG93SG91ckZvcm0oKSB7XFxuICAgICAgdGhpcy5zaG93RGF5SW5wdXRzID0gZmFsc2U7XFxuICAgICAgdGhpcy5zaG93SG91cklucHV0cyA9IHRydWU7XFxuICAgICAgdGhpcy4kdi4kcmVzZXQoKTtcXG4gICAgICB0aGlzLmVkaXRlZEl0ZW0uZnJvbV9ob3VyID0gXFxcIlxcXCI7XFxuICAgICAgdGhpcy5lZGl0ZWRJdGVtLnRvX2hvdXIgPSBcXFwiXFxcIjtcXG4gICAgICB0aGlzLmVkaXRlZEl0ZW0udG90YWxfaG91cnMgPSBcXFwiXFxcIjtcXG4gICAgICB0aGlzLmVkaXRlZEl0ZW0uZWZmZWN0aXZlX2RhdGUgPSBcXFwiXFxcIjtcXG4gICAgfSxcXG5cXG4gICAgc2hvd0RheUZvcm0oKSB7XFxuICAgICAgdGhpcy5zaG93SG91cklucHV0cyA9IGZhbHNlO1xcbiAgICAgIHRoaXMuc2hvd0RheUlucHV0cyA9IHRydWU7XFxuICAgICAgdGhpcy4kdi4kcmVzZXQoKTtcXG4gICAgICB0aGlzLmVkaXRlZEl0ZW0uZnJvbV9kYXRlID0gXFxcIlxcXCI7XFxuICAgICAgdGhpcy5lZGl0ZWRJdGVtLnRvX2RhdGUgPSBcXFwiXFxcIjtcXG4gICAgICB0aGlzLmVkaXRlZEl0ZW0udG90YWxfZGF5cyA9IFxcXCJcXFwiO1xcbiAgICB9LFxcblxcbiAgICBjbGVhckZvcm0oKSB7XFxuICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSk7XFxuICAgICAgdGhpcy5zaG93RGF5SW5wdXRzID0gZmFsc2U7XFxuICAgICAgdGhpcy5zaG93SG91cklucHV0cyA9IGZhbHNlO1xcbiAgICAgIHRoaXMuJHYuJHJlc2V0KCk7XFxuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XFxuICAgIH0sXFxuXFxuICAgIHVwZGF0ZUFsZXJ0KHNob3cgPSBmYWxzZSwgdGV4dCA9IFxcXCJBbGVydGFcXFwiLCBldmVudCA9IFxcXCJzdWNjZXNzXFxcIikge1xcbiAgICAgIHRoaXMudGV4dEFsZXJ0ID0gdGV4dDtcXG4gICAgICB0aGlzLmFsZXJ0RXZlbnQgPSBldmVudDtcXG4gICAgICB0aGlzLnNob3dBbGVydCA9IHNob3c7XFxuICAgICAgaWYgKHNob3cpIHtcXG4gICAgICAgIHRoaXMuJHJlZnMudG9wLnNjcm9sbEludG9WaWV3KCk7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgfSxcXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4udGhlbWUtLWxpZ2h0LnYtaWNvbiB7XFxuICBjb2xvcjogIzJkNTJhODtcXG59XFxuXFxuLnRoZW1lLS1saWdodC52LWxhYmVsLS1pcy1kaXNhYmxlZCB7XFxuICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xcbn1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVyc29ubmVsQWN0aW9uRm9ybS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGVyc29ubmVsQWN0aW9uRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmMxMWM5ODImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGVyc29ubmVsQWN0aW9uRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BlcnNvbm5lbEFjdGlvbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1BlcnNvbm5lbEFjdGlvbkZvcm0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2FkbWluaXN0cmFkb3IvbmdpbngvYXBwcy9BY2Npb25EZVBlcnNvbmFsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2JjMTFjOTgyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JjMTFjOTgyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JjMTFjOTgyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QZXJzb25uZWxBY3Rpb25Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYzExYzk4MiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiYzExYzk4MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUGVyc29ubmVsQWN0aW9uRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVyc29ubmVsQWN0aW9uRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZXJzb25uZWxBY3Rpb25Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZXJzb25uZWxBY3Rpb25Gb3JtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BlcnNvbm5lbEFjdGlvbkZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJjMTFjOTgyJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHJlZjogXCJ0b3BcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGlzY2xhaW1lci1yZWdpc3RlclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFsZXJ0XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHRleHQ6IF92bS50ZXh0QWxlcnQsXG4gICAgICAgICAgZXZlbnQ6IF92bS5hbGVydEV2ZW50LFxuICAgICAgICAgIHNob3c6IF92bS5zaG93QWxlcnQsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJzaG93LWFsZXJ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlQWxlcnQoJGV2ZW50KVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLmxvYWRpbmdcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC00IHNoYWRvd1wiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImg1XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZnctYm9sZCBwYi0yIG1iLTRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiYm9yZGVyLWJvdHRvbVwiOiBcIjFweCBzb2xpZCBsaWdodGdyYXlcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIEktIERBVE9TIEdFTkVSQUxFU1xcbiAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLTAgcGItM1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sczogXCIxMlwiLCBzbTogXCIxMlwiLCBtZDogXCI2XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTm9tYnJlIGRlbCBlbXBsZWFkb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IF92bS4kdi5lZGl0ZWRJdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiR2LmVkaXRlZEl0ZW0ubmFtZS4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS4kdi5lZGl0ZWRJdGVtLm5hbWUsIFwiJG1vZGVsXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHYuZWRpdGVkSXRlbS5uYW1lLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLTAgcGItM1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sczogXCIxMlwiLCBzbTogXCIxMlwiLCBtZDogXCI2XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ2FyZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBfdm0uJHYuZWRpdGVkSXRlbS5wb3NpdGlvbl9zaWduYXR1cmUsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiR2LmVkaXRlZEl0ZW0ucG9zaXRpb25fc2lnbmF0dXJlLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLnBvc2l0aW9uX3NpZ25hdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiR2LmVkaXRlZEl0ZW0ucG9zaXRpb25fc2lnbmF0dXJlLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLTAgcGItM1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sczogXCIxMlwiLCBzbTogXCIxMlwiLCBtZDogXCIxMlwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImJhc2UtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlVuaWRhZCBkZSB0cmFiYWpvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LmVkaXRlZEl0ZW0uZGVwZW5kZW5jeV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS4kdi5lZGl0ZWRJdGVtLmRlcGVuZGVuY3lfbmFtZS4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS5kZXBlbmRlbmN5X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIkdi5lZGl0ZWRJdGVtLmRlcGVuZGVuY3lfbmFtZS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImg1XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZnctYm9sZCBwYi0yIG1iLTRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiYm9yZGVyLWJvdHRvbVwiOiBcIjFweCBzb2xpZCBsaWdodGdyYXlcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIElJLSBOQVRVUkFMRVpBIERFIExBIExJQ0VOQ0lBIFBPUjpcXG4gICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS0wIHBiLTRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHM6IFwiMTJcIiwgc206IFwiMTJcIiwgbWQ6IFwiMTJcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLXNlbGVjdC1zZWFyY2hcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRpcG8gZGUganVzdGlmaWNhY2nDs25cIixcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmp1c3RpZmljYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IFwianVzdGlmaWNhdGlvbl9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LmVkaXRlZEl0ZW0uanVzdGlmaWNhdGlvbl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uJHYuZWRpdGVkSXRlbS5qdXN0aWZpY2F0aW9uX25hbWUuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0uanVzdGlmaWNhdGlvbl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgJCR2ID09PSBcInN0cmluZ1wiID8gJCR2LnRyaW0oKSA6ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIkdi5lZGl0ZWRJdGVtLmp1c3RpZmljYXRpb25fbmFtZS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImg1XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZnctYm9sZCBwYi0yIG1iLTRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiYm9yZGVyLWJvdHRvbVwiOiBcIjFweCBzb2xpZCBsaWdodGdyYXlcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIElJSS4tIFBFUklPRE8gUE9SOlxcbiAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZGlzcGxheTogXCJmbGV4XCIsIFwianVzdGlmeS1jb250ZW50XCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtcmFkaW8tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiR2LmVkaXRlZEl0ZW0ucGVyaW9kX2J5LiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS4kdi5lZGl0ZWRJdGVtLnBlcmlvZF9ieSwgXCIkbW9kZWxcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHYuZWRpdGVkSXRlbS5wZXJpb2RfYnkuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1yYWRpb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YWx1ZTogXCJob3Vyc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0hvdXJGb3JtKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cm9uZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLWxlZnRcIjogXCI4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMzMTM5NDVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSE9SQVNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDExMjMyNzgyNTRcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtcmFkaW9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IFwiZGF5c1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0RheUZvcm0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb25nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjhweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzMxMzk0NVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEw41BU1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMjk0MzczOTg1OFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lZGl0ZWRJdGVtLnBlcmlvZF9ieSA9PSBcImhvdXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0ZWRJdGVtLnBlcmlvZF9ieSA9PSAnaG91cnMnXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sczogXCIxMlwiLCBzbTogXCIxMlwiLCBtZDogXCIxMlwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgZnctYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiSE9SQVM6XCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwianVzdGlmeS1jb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2xzOiBcIjEyXCIsIHNtOiBcIjZcIiwgbWQ6IFwiNFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzZGUgbGFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBfdm0uJHYuZWRpdGVkSXRlbS5mcm9tX2hvdXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS4kdi5lZGl0ZWRJdGVtLmZyb21faG91ci4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS5mcm9tX2hvdXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHYuZWRpdGVkSXRlbS5mcm9tX2hvdXIuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sczogXCIxMlwiLCBzbTogXCI2XCIsIG1kOiBcIjRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImhhc3RhIGxhc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LmVkaXRlZEl0ZW0udG9faG91cixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiR2LmVkaXRlZEl0ZW0udG9faG91ci4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS50b19ob3VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiR2LmVkaXRlZEl0ZW0udG9faG91ci4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLTAgcGItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzOiBcIjEyXCIsIHNtOiBcIjEyXCIsIG1kOiBcIjhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVG90YWwgZGUgaG9yYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IF92bS4kdi5lZGl0ZWRJdGVtLnRvdGFsX2hvdXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiR2LmVkaXRlZEl0ZW0udG90YWxfaG91cnMuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0udG90YWxfaG91cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHYuZWRpdGVkSXRlbS50b3RhbF9ob3Vycy4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2xzOiBcIjEyXCIsIHNtOiBcIjEyXCIsIG1kOiBcIjhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkZlY2hhIGVmZWN0aXZhIHBhcmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IF92bS4kdi5lZGl0ZWRJdGVtLmVmZmVjdGl2ZV9kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uJHYuZWRpdGVkSXRlbS5lZmZlY3RpdmVfZGF0ZS4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS5lZmZlY3RpdmVfZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIkdi5lZGl0ZWRJdGVtLmVmZmVjdGl2ZV9kYXRlLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0ucGVyaW9kX2J5ID09IFwiZGF5c1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZWRpdGVkSXRlbS5wZXJpb2RfYnkgPT0gJ2RheXMnXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sczogXCIxMlwiLCBzbTogXCIxMlwiLCBtZDogXCIxMlwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgZnctYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRMONQShTKSBDT01QTEVUTyhTKTpcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHM6IFwiMTJcIiwgc206IFwiMTJcIiwgbWQ6IFwiNFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBfdm0uJHYuZWRpdGVkSXRlbS5mcm9tX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS4kdi5lZGl0ZWRJdGVtLmZyb21fZGF0ZS4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS5mcm9tX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHYuZWRpdGVkSXRlbS5mcm9tX2RhdGUuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sczogXCIxMlwiLCBzbTogXCIxMlwiLCBtZDogXCI0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2UtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJBbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LmVkaXRlZEl0ZW0udG9fZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiR2LmVkaXRlZEl0ZW0udG9fZGF0ZS4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS50b19kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiR2LmVkaXRlZEl0ZW0udG9fZGF0ZS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLTAgcGItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzOiBcIjEyXCIsIHNtOiBcIjEyXCIsIG1kOiBcIjhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVG90YWwgZGUgZMOtYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IF92bS4kdi5lZGl0ZWRJdGVtLnRvdGFsX2RheXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uJHYuZWRpdGVkSXRlbS50b3RhbF9kYXlzLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLnRvdGFsX2RheXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHYuZWRpdGVkSXRlbS50b3RhbF9kYXlzLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImg1XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZnctYm9sZCBwYi0yIG1iLTQgcHQtNFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJib3JkZXItYm90dG9tXCI6IFwiMXB4IHNvbGlkIGxpZ2h0Z3JheVwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgSVYtIEpVU1RJRklDQU5URVNcXG4gICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2xzOiBcIjEyXCIsIHNtOiBcIjEyXCIsIG1kOiBcIjEyXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS10ZXh0LWFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkp1c3RpZmljYWNpw7NuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LmVkaXRlZEl0ZW0uanVzdGlmaWNhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IDYsXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiR2LmVkaXRlZEl0ZW0uanVzdGlmaWNhdGlvbi4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS4kdi5lZGl0ZWRJdGVtLmp1c3RpZmljYXRpb24sIFwiJG1vZGVsXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHYuZWRpdGVkSXRlbS5qdXN0aWZpY2F0aW9uLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImp1c3RpZnktY29udGVudFwiOiBcImZsZXgtZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS5qdXN0aWZpY2F0aW9uLiRtb2RlbC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiIC8gNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiaDVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmdy1ib2xkIHBiLTIgbWItNFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJib3JkZXItYm90dG9tXCI6IFwiMXB4IHNvbGlkIGxpZ2h0Z3JheVwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgVi4gVElFTVBPIEVYVFJBT1JESU5BUklPIC8gREVTQ0FOU09cXG4gICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnctYm9sZCBtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgRW4gY2FzbyBkZSBzb2xpY2l0dWQgZGUgZGVzY2Fuc28gY29tcGVuc2F0b3JpbyBkZXRhbGxhciBjYXVzYSBvIG1vdGl2b1xcbiAgICAgIHF1ZSBsbyBnZW5lcsOzOlxcbiAgICBcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2xzOiBcIjEyXCIsIHhzOiBcIjEyXCIsIHNtOiBcIjEyXCIsIG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsaWRhdGlvbjogX3ZtLiR2LmVkaXRlZEl0ZW0uZXh0cmFvcmRpbmFyeV93b3JrIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6dmFsaWRhdGlvblwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4dHJhb3JkaW5hcnlfd29ya1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWxlZnRcIjogXCI2cHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFRyYWJham8gZXh0cmFvcmRpbmFyaW8gZW4gZMOtYSBkZXNjYW5zbywgdmFjYWNpw7NuIG8gYXN1ZXRvXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgMzc5OTcyOTcwN1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uJHYuZWRpdGVkSXRlbS5leHRyYW9yZGluYXJ5X3dvcmsuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0uZXh0cmFvcmRpbmFyeV93b3JrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHYuZWRpdGVkSXRlbS5leHRyYW9yZGluYXJ5X3dvcmsuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sczogXCIxMlwiLCB4czogXCIxMlwiLCBzbTogXCIxMlwiLCBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbGlkYXRpb246IF92bS4kdi5lZGl0ZWRJdGVtLnRyYWluaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6dmFsaWRhdGlvblwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLiR2LmVkaXRlZEl0ZW0sIFwidHJhaW5pbmdcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tbGVmdFwiOiBcIjZweFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgQ2FwYWNpdGFjacOzbiBlbiBkw61hIGRlc2NhbnNvLCB2YWNhY2nDs24gbyBhc3VldG9cXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAyODAxMjYwODMyXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS4kdi5lZGl0ZWRJdGVtLnRyYWluaW5nLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLiR2LmVkaXRlZEl0ZW0udHJhaW5pbmcsIFwiJG1vZGVsXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHYuZWRpdGVkSXRlbS50cmFpbmluZy4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnctYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJEZXRhbGxlIGRlIGxhIGFjdGl2aWRhZCByZWFsaXphZGE6XCIpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0tMCBwYi0zXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzOiBcIjEyXCIsIHNtOiBcIjEyXCIsIG1kOiBcIjhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJMdWdhciBkZSBlamVjdWNpw7NuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX3NpdGUsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX3NpdGUuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX3NpdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiAkJHYgPT09IFwic3RyaW5nXCIgPyAkJHYudHJpbSgpIDogJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX3NpdGUuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0tMCBwYi0zXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzOiBcIjEyXCIsIHNtOiBcIjEyXCIsIG1kOiBcIjRcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJGZWNoYSBkZSBlamVjdWNpw7NuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX2RhdGUuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIkdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl9kYXRlLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLTAgcGItM1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sczogXCIxMlwiLCBzbTogXCIxMlwiLCBtZDogXCI0XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSG9yYXJpbyBkZSBlamVjdWNpw7NuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX3NjaGVkdWxlLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS4kdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl9zY2hlZHVsZS4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS5leGVjdXRpb25fc2NoZWR1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIkdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl9zY2hlZHVsZS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS0wIHBiLTNcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHM6IFwiMTJcIiwgc206IFwiMTJcIiwgbWQ6IFwiNFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImJhc2UtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNhbnRpZGFkIGRlIGhvcmFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX251bWJlcl9ob3VycyxcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS4kdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl9udW1iZXJfaG91cnMuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX251bWJlcl9ob3VycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX251bWJlcl9ob3Vycy4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS0wIHBiLTNcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHM6IFwiMTJcIiwgc206IFwiMTJcIiwgbWQ6IFwiNFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImJhc2UtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFzaWduYWRvIHBvclwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IF92bS4kdi5lZGl0ZWRJdGVtLmFzc2lnbmVkX2J5LFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS4kdi5lZGl0ZWRJdGVtLmFzc2lnbmVkX2J5LiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLiR2LmVkaXRlZEl0ZW0uYXNzaWduZWRfYnksIFwiJG1vZGVsXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHYuZWRpdGVkSXRlbS5hc3NpZ25lZF9ieS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS0wIHBiLTNcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHM6IFwiMTJcIiwgc206IFwiMTJcIiwgbWQ6IFwiM1wiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImJhc2UtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNhbnRpZGFkIGRlIGTDrWFzIHNvbGljaXRhZG9zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LmVkaXRlZEl0ZW0ubnVtYmVyX2RheXNfcmVxdWVzdGVkLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiR2LmVkaXRlZEl0ZW0ubnVtYmVyX2RheXNfcmVxdWVzdGVkLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLm51bWJlcl9kYXlzX3JlcXVlc3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiR2LmVkaXRlZEl0ZW0ubnVtYmVyX2RheXNfcmVxdWVzdGVkLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLTAgcGItM1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sczogXCIxMlwiLCBzbTogXCIxMlwiLCBtZDogXCIzXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRmVjaGEgcXVlIHNlIGhhcsOhIGVmZWN0aXZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX2VmZmVjdGl2ZV9kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS4kdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl9lZmZlY3RpdmVfZGF0ZS4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS5leGVjdXRpb25fZWZmZWN0aXZlX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiJHYuZWRpdGVkSXRlbS5leGVjdXRpb25fZWZmZWN0aXZlX2RhdGUuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0tMCBwYi0zXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzOiBcIjEyXCIsIHNtOiBcIjEyXCIsIG1kOiBcIjNcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJEZXNkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IF92bS4kdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl9mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS4kdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl9mcm9tLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl9mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHYuZWRpdGVkSXRlbS5leGVjdXRpb25fZnJvbS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS0wIHBiLTNcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHM6IFwiMTJcIiwgc206IFwiMTJcIiwgbWQ6IFwiM1wiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImJhc2UtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkhhc3RhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LmVkaXRlZEl0ZW0uZXhlY3V0aW9uX3RvLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS4kdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl90by4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS4kdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl90bywgXCIkbW9kZWxcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIkdi5lZGl0ZWRJdGVtLmV4ZWN1dGlvbl90by4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImg1XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZnctYm9sZCBwdC0zIHBiLTIgbWItMFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJib3JkZXItYm90dG9tXCI6IFwiMXB4IHNvbGlkIGxpZ2h0Z3JheVwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgVkkuIEFORVhBUiBET0NVTUVOVE9TXFxuICAgIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sczogXCIxMlwiLCB4czogXCIxMlwiLCBzbTogXCIxMlwiLCBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wIGZ3LWJvbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgRG9jdW1lbnRhY2nDs24gb3JpZ2luYWwgcGFyYSBqdXN0aWZpY2FjacOzbiBkZSBhY2Npw7NuIGRlIHBlcnNvbmFsIChQREYpLlxcbiAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LW11dGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIoQ3VhbmRvIHNlYSByZXF1ZXJpZG8pXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dC1maWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vcGRmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LmVkaXRlZEl0ZW0uanVzdGlmaWNhdGlvbl9maWxlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlLWZpbGVcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRlZEl0ZW0uanVzdGlmaWNhdGlvbl9maWxlID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImZpbGUtc2l6ZS1leGNlZWRlZFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiZmlsZS1zaXplLWV4Y2VlZGVkXCIsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiR2LmVkaXRlZEl0ZW0uanVzdGlmaWNhdGlvbl9maWxlLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLmp1c3RpZmljYXRpb25fZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiR2LmVkaXRlZEl0ZW0uanVzdGlmaWNhdGlvbl9maWxlLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sczogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc206IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZGluZyB8fCAhX3ZtLnVzZXIuaW5tZWRpYXRlX3N1cGVyaW9yX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIFNvbGljaXRhclxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJidG4tbm9ybWFsLWNsb3NlIG5vLXVwcGVyY2FzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2xlYXJGb3JtKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgTGltcGlhclxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnVzZXIuaW5tZWRpYXRlX3N1cGVyaW9yX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmVkIG10LTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJObyBwb2Ryw6FzIHJlZ2lzdHJhciB0dXMgYWNjaW9uZXMgZGUgcGVyc29uYWwgaGFzdGEgcXVlIHR1IGplZmUgaW5tZWRpYXRvXFxuICAgICAgICAgIGluaWNpZSBzZXNpw7NuIGRlbnRybyBkZSBsYVxcbiAgICAgICAgICBwbGF0YWZvcm1hLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxvYWRpbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwLTQgc2hhZG93XCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2ZmZlwiLCBcImJvcmRlci1yYWRpdXNcIjogXCIxMHB4XCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibG9hZGVyXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibG9hZGluZ1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnYWxwaGEnLCAvXlthLXpBLVpdKiQvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2FscGhhTnVtJywgL15bYS16QS1aMC05XSokLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWxpZGF0b3JzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbGlkYXRvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdhbmQnXG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvcnMubGVuZ3RoID4gMCAmJiB2YWxpZGF0b3JzLnJlZHVjZShmdW5jdGlvbiAodmFsaWQsIGZuKSB7XG4gICAgICByZXR1cm4gdmFsaWQgJiYgZm4uYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgIH0sIHRydWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobWluLCBtYXgpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnYmV0d2VlbicsXG4gICAgbWluOiBtaW4sXG4gICAgbWF4OiBtYXhcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoIS9cXHMvLnRlc3QodmFsdWUpIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgJiYgK21pbiA8PSArdmFsdWUgJiYgK21heCA+PSArdmFsdWU7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcSA9IGV4cG9ydHMucmVnZXggPSBleHBvcnRzLnJlZiA9IGV4cG9ydHMubGVuID0gdm9pZCAwO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFBhcmFtc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfd2l0aFBhcmFtcy5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF93aXRoUGFyYW1zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vd2l0aFBhcmFtc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIHJlcSA9IGZ1bmN0aW9uIHJlcSh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiAhIXZhbHVlLmxlbmd0aDtcblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHZhbHVlLmdldFRpbWUoKSk7XG4gIH1cblxuICBpZiAoX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgXyBpbiB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuICEhU3RyaW5nKHZhbHVlKS5sZW5ndGg7XG59O1xuXG5leHBvcnRzLnJlcSA9IHJlcTtcblxudmFyIGxlbiA9IGZ1bmN0aW9uIGxlbih2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5sZW5ndGg7XG5cbiAgaWYgKF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIFN0cmluZyh2YWx1ZSkubGVuZ3RoO1xufTtcblxuZXhwb3J0cy5sZW4gPSBsZW47XG5cbnZhciByZWYgPSBmdW5jdGlvbiByZWYocmVmZXJlbmNlLCB2bSwgcGFyZW50Vm0pIHtcbiAgcmV0dXJuIHR5cGVvZiByZWZlcmVuY2UgPT09ICdmdW5jdGlvbicgPyByZWZlcmVuY2UuY2FsbCh2bSwgcGFyZW50Vm0pIDogcGFyZW50Vm1bcmVmZXJlbmNlXTtcbn07XG5cbmV4cG9ydHMucmVmID0gcmVmO1xuXG52YXIgcmVnZXggPSBmdW5jdGlvbiByZWdleCh0eXBlLCBleHByKSB7XG4gIHJldHVybiAoMCwgX3dpdGhQYXJhbXMuZGVmYXVsdCkoe1xuICAgIHR5cGU6IHR5cGVcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICFyZXEodmFsdWUpIHx8IGV4cHIudGVzdCh2YWx1ZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5yZWdleCA9IHJlZ2V4OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdkZWNpbWFsJywgL15bLV0/XFxkKihcXC5cXGQrKT8kLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIGVtYWlsUmVnZXggPSAvXig/OltBLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bQS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSp8XCIoPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2ZdfFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XXsyLH0oPzpbYS16MC05LV0qW2EtejAtOV0pP3xcXFsoPzooPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldP3xbYS16MC05LV0qW2EtejAtOV06KD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjEtXFx4NWFcXHg1My1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKylcXF0pJC9pO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2VtYWlsJywgZW1haWxSZWdleCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhbHBoYVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYWxwaGEuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhbHBoYU51bVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYWxwaGFOdW0uZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhbmRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FuZC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImJldHdlZW5cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2JldHdlZW4uZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNpbWFsXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9kZWNpbWFsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZW1haWxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2VtYWlsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuZXhwb3J0cy5oZWxwZXJzID0gdm9pZCAwO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaW50ZWdlclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZWdlci5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlwQWRkcmVzc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaXBBZGRyZXNzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWFjQWRkcmVzc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWFjQWRkcmVzcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1heExlbmd0aFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWF4TGVuZ3RoLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWF4VmFsdWVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21heFZhbHVlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWluTGVuZ3RoXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9taW5MZW5ndGguZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtaW5WYWx1ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWluVmFsdWUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJub3RcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX25vdC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm51bWVyaWNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX251bWVyaWMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJvclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfb3IuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZXF1aXJlZFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcmVxdWlyZWQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZXF1aXJlZElmXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yZXF1aXJlZElmLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVxdWlyZWRVbmxlc3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JlcXVpcmVkVW5sZXNzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2FtZUFzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zYW1lQXMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1cmxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3VybC5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9hbHBoYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYWxwaGFcIikpO1xuXG52YXIgX2FscGhhTnVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hbHBoYU51bVwiKSk7XG5cbnZhciBfbnVtZXJpYyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbnVtZXJpY1wiKSk7XG5cbnZhciBfYmV0d2VlbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYmV0d2VlblwiKSk7XG5cbnZhciBfZW1haWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2VtYWlsXCIpKTtcblxudmFyIF9pcEFkZHJlc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lwQWRkcmVzc1wiKSk7XG5cbnZhciBfbWFjQWRkcmVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWFjQWRkcmVzc1wiKSk7XG5cbnZhciBfbWF4TGVuZ3RoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYXhMZW5ndGhcIikpO1xuXG52YXIgX21pbkxlbmd0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWluTGVuZ3RoXCIpKTtcblxudmFyIF9yZXF1aXJlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVxdWlyZWRcIikpO1xuXG52YXIgX3JlcXVpcmVkSWYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlcXVpcmVkSWZcIikpO1xuXG52YXIgX3JlcXVpcmVkVW5sZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZXF1aXJlZFVubGVzc1wiKSk7XG5cbnZhciBfc2FtZUFzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zYW1lQXNcIikpO1xuXG52YXIgX3VybCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXJsXCIpKTtcblxudmFyIF9vciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vb3JcIikpO1xuXG52YXIgX2FuZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYW5kXCIpKTtcblxudmFyIF9ub3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25vdFwiKSk7XG5cbnZhciBfbWluVmFsdWUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21pblZhbHVlXCIpKTtcblxudmFyIF9tYXhWYWx1ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWF4VmFsdWVcIikpO1xuXG52YXIgX2ludGVnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2ludGVnZXJcIikpO1xuXG52YXIgX2RlY2ltYWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RlY2ltYWxcIikpO1xuXG52YXIgaGVscGVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2NvbW1vblwiKSk7XG5cbmV4cG9ydHMuaGVscGVycyA9IGhlbHBlcnM7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnaW50ZWdlcicsIC8oXlswLTldKiQpfCheLVswLTldKyQpLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICB0eXBlOiAnaXBBZGRyZXNzJ1xufSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICghKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIG5pYmJsZXMgPSB2YWx1ZS5zcGxpdCgnLicpO1xuICByZXR1cm4gbmliYmxlcy5sZW5ndGggPT09IDQgJiYgbmliYmxlcy5ldmVyeShuaWJibGVWYWxpZCk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbnZhciBuaWJibGVWYWxpZCA9IGZ1bmN0aW9uIG5pYmJsZVZhbGlkKG5pYmJsZSkge1xuICBpZiAobmliYmxlLmxlbmd0aCA+IDMgfHwgbmliYmxlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChuaWJibGVbMF0gPT09ICcwJyAmJiBuaWJibGUgIT09ICcwJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghbmliYmxlLm1hdGNoKC9eXFxkKyQvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBudW1lcmljID0gK25pYmJsZSB8IDA7XG4gIHJldHVybiBudW1lcmljID49IDAgJiYgbnVtZXJpYyA8PSAyNTU7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIHZhciBzZXBhcmF0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICc6JztcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWFjQWRkcmVzcydcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcGFydHMgPSB0eXBlb2Ygc2VwYXJhdG9yID09PSAnc3RyaW5nJyAmJiBzZXBhcmF0b3IgIT09ICcnID8gdmFsdWUuc3BsaXQoc2VwYXJhdG9yKSA6IHZhbHVlLmxlbmd0aCA9PT0gMTIgfHwgdmFsdWUubGVuZ3RoID09PSAxNiA/IHZhbHVlLm1hdGNoKC8uezJ9L2cpIDogbnVsbDtcbiAgICByZXR1cm4gcGFydHMgIT09IG51bGwgJiYgKHBhcnRzLmxlbmd0aCA9PT0gNiB8fCBwYXJ0cy5sZW5ndGggPT09IDgpICYmIHBhcnRzLmV2ZXJ5KGhleFZhbGlkKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxudmFyIGhleFZhbGlkID0gZnVuY3Rpb24gaGV4VmFsaWQoaGV4KSB7XG4gIHJldHVybiBoZXgudG9Mb3dlckNhc2UoKS5tYXRjaCgvXlswLTlhLWZdezJ9JC8pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KGxlbmd0aCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtYXhMZW5ndGgnLFxuICAgIG1heDogbGVuZ3RoXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKDAsIF9jb21tb24ubGVuKSh2YWx1ZSkgPD0gbGVuZ3RoO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobWF4KSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21heFZhbHVlJyxcbiAgICBtYXg6IG1heFxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICghL1xccy8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSAmJiArdmFsdWUgPD0gK21heDtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KGxlbmd0aCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtaW5MZW5ndGgnLFxuICAgIG1pbjogbGVuZ3RoXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKDAsIF9jb21tb24ubGVuKSh2YWx1ZSkgPj0gbGVuZ3RoO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobWluKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21pblZhbHVlJyxcbiAgICBtaW46IG1pblxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICghL1xccy8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSAmJiArdmFsdWUgPj0gK21pbjtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHZhbGlkYXRvcikge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdub3QnXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgdm0pIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICF2YWxpZGF0b3IuY2FsbCh0aGlzLCB2YWx1ZSwgdm0pO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdudW1lcmljJywgL15bMC05XSokLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWxpZGF0b3JzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbGlkYXRvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdvcidcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9ycy5sZW5ndGggPiAwICYmIHZhbGlkYXRvcnMucmVkdWNlKGZ1bmN0aW9uICh2YWxpZCwgZm4pIHtcbiAgICAgIHJldHVybiB2YWxpZCB8fCBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICB0eXBlOiAncmVxdWlyZWQnXG59LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gKDAsIF9jb21tb24ucmVxKSh2YWx1ZS50cmltKCkpO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY29tbW9uLnJlcSkodmFsdWUpO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQocHJvcCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdyZXF1aXJlZElmJyxcbiAgICBwcm9wOiBwcm9wXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgcGFyZW50Vm0pIHtcbiAgICByZXR1cm4gKDAsIF9jb21tb24ucmVmKShwcm9wLCB0aGlzLCBwYXJlbnRWbSkgPyAoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSA6IHRydWU7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChwcm9wKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ3JlcXVpcmVkVW5sZXNzJyxcbiAgICBwcm9wOiBwcm9wXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgcGFyZW50Vm0pIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlZikocHJvcCwgdGhpcywgcGFyZW50Vm0pID8gKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgOiB0cnVlO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoZXF1YWxUbykge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdzYW1lQXMnLFxuICAgIGVxOiBlcXVhbFRvXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgcGFyZW50Vm0pIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICgwLCBfY29tbW9uLnJlZikoZXF1YWxUbywgdGhpcywgcGFyZW50Vm0pO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIHVybFJlZ2V4ID0gL14oPzooPzooPzpodHRwcz98ZnRwKTopP1xcL1xcLykoPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdTAwYTEtXFx1ZmZmZl1bYS16MC05XFx1MDBhMS1cXHVmZmZmXy1dezAsNjJ9KT9bYS16MC05XFx1MDBhMS1cXHVmZmZmXVxcLikrKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9XFwuPykpKD86OlxcZHsyLDV9KT8oPzpbLz8jXVxcUyopPyQvaTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCd1cmwnLCB1cmxSZWdleCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIHdpdGhQYXJhbXMgPSBwcm9jZXNzLmVudi5CVUlMRCA9PT0gJ3dlYicgPyByZXF1aXJlKCcuL3dpdGhQYXJhbXNCcm93c2VyJykud2l0aFBhcmFtcyA6IHJlcXVpcmUoJy4vcGFyYW1zJykud2l0aFBhcmFtcztcbnZhciBfZGVmYXVsdCA9IHdpdGhQYXJhbXM7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMud2l0aFBhcmFtcyA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgcm9vdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB7fTtcblxudmFyIGZha2VXaXRoUGFyYW1zID0gZnVuY3Rpb24gZmFrZVdpdGhQYXJhbXMocGFyYW1zT3JDbG9zdXJlLCBtYXliZVZhbGlkYXRvcikge1xuICBpZiAoX3R5cGVvZihwYXJhbXNPckNsb3N1cmUpID09PSAnb2JqZWN0JyAmJiBtYXliZVZhbGlkYXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG1heWJlVmFsaWRhdG9yO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtc09yQ2xvc3VyZShmdW5jdGlvbiAoKSB7fSk7XG59O1xuXG52YXIgd2l0aFBhcmFtcyA9IHJvb3QudnVlbGlkYXRlID8gcm9vdC52dWVsaWRhdGUud2l0aFBhcmFtcyA6IGZha2VXaXRoUGFyYW1zO1xuZXhwb3J0cy53aXRoUGFyYW1zID0gd2l0aFBhcmFtczsiXSwibmFtZXMiOlsicmVxdWlyZWQiLCJlbWFpbCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInJlcXVpcmVkSWYiLCJkYXRhIiwibG9hZGluZyIsInRleHRBbGVydCIsImFsZXJ0RXZlbnQiLCJzaG93QWxlcnQiLCJqdXN0aWZpY2F0aW9ucyIsInJhZGlvQWxlcnQiLCJzaG93RGF5SW5wdXRzIiwic2hvd0hvdXJJbnB1dHMiLCJlZGl0ZWRJdGVtIiwibmFtZSIsInBvc2l0aW9uX3NpZ25hdHVyZSIsImRlcGVuZGVuY3lfbmFtZSIsImp1c3RpZmljYXRpb25fbmFtZSIsImZyb21faG91ciIsInRvX2hvdXIiLCJ0b3RhbF9ob3VycyIsImVmZmVjdGl2ZV9kYXRlIiwiZnJvbV9kYXRlIiwidG9fZGF0ZSIsInRvdGFsX2RheXMiLCJqdXN0aWZpY2F0aW9uIiwianVzdGlmaWNhdGlvbl9maWxlIiwiZXh0cmFvcmRpbmFyeV93b3JrIiwidHJhaW5pbmciLCJleGVjdXRpb25fc2l0ZSIsImV4ZWN1dGlvbl9kYXRlIiwiZXhlY3V0aW9uX3NjaGVkdWxlIiwiZXhlY3V0aW9uX251bWJlcl9ob3VycyIsImFzc2lnbmVkX2J5IiwibnVtYmVyX2RheXNfcmVxdWVzdGVkIiwiZXhlY3V0aW9uX2VmZmVjdGl2ZV9kYXRlIiwiZXhlY3V0aW9uX2Zyb20iLCJleGVjdXRpb25fdG8iLCJwZXJpb2RfYnkiLCJkZWZhdWx0SXRlbSIsInZhbGlkYXRpb25zIiwiY3JlYXRlZCIsImNvbXB1dGVkIiwibXVsdGlwbGljYXIiLCJtZXRob2RzIiwiaW5pdGlhbGl6ZSIsInJlcXVlc3RzIiwidXNlckFwaSIsImp1c3RpZmljYXRpb25UeXBlQXBpIiwicGFyYW1zIiwiaXRlbXNQZXJQYWdlIiwiUHJvbWlzZSIsImVycm9yIiwicmVzcG9uc2VzIiwic2F2ZSIsInBlcnNvbm5lbEFjdGlvbkFwaSIsInBvc3QiLCJzdGF0dXMiLCJzaG93SG91ckZvcm0iLCJzaG93RGF5Rm9ybSIsImNsZWFyRm9ybSIsInVwZGF0ZUFsZXJ0IiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY3VsdHVyYUhvdXNlQXBpIiwidmVyaWZ5U2Vzc2lvbkZpbmlzaGVkIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJvb19vbyIsIm9vX2NtIiwiZXZhbCIsImUiLCJpIiwidiIsImNvbnNvbGVMb2ciLCJvb190ciIsImNvbnNvbGVUcmFjZSIsIm9vX3RzIiwiY29uc29sZVRpbWUiLCJvb190ZSIsImNvbnNvbGVUaW1lRW5kIl0sInNvdXJjZVJvb3QiOiIifQ==