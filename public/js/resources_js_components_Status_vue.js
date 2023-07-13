(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Status_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Status.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Status.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_StatusApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/StatusApi */ "./resources/js/apis/StatusApi.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      search: "",
      selected: [],
      dialog: false,
      dialogDelete: false,
      headers: [{
        text: "ESTADO",
        value: "status_name"
      }, {
        text: "ORDEN",
        value: "order_id"
      }, {
        text: "ACCIONES",
        value: "actions",
        sortable: false
      }],
      records: [],
      recordsFiltered: [],
      editedIndex: -1,
      title: "RequestStatus",
      totalItems: 0,
      options: {},
      editedItem: {
        status_name: "",
        order_id: 0
      },
      defaultItem: {
        status_name: "",
        order_id: 0
      },
      selectedTab: 0,
      loading: false,
      debounce: 0,
      textAlert: "",
      alertEvent: "success",
      showAlert: false,
      redirectSessionFinished: false,
      alertTimeOut: 0
    };
  },
  // Validations
  validations: {
    editedItem: {
      status_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.minLength)(1)
      },
      order_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.minLength)(1)
      }
    }
  },
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
        var requests, responses;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;

                _this.$v.$reset();

                _this.records = [];
                _this.recordsFiltered = [];
                requests = [_this.getDataFromApi()];
                _context.next = 7;
                return Promise.all(requests)["catch"](function (error) {
                  _this.updateAlert(true, "No fue posible obtener el registro.", "fail");

                  _this.redirectSessionFinished = lib.verifySessionFinished(error.response.status, 419);
                });

              case 7:
                responses = _context.sent;

                if (responses) {}

                _this.loading = false;

              case 10:
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
      this.selectedTab = 0;
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
    save: function save() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var edited, _yield$requestStatusA, data, _yield$requestStatusA2, _data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.$v.$touch();

                if (!_this3.$v.$invalid) {
                  _context2.next = 4;
                  break;
                }

                _this3.updateAlert(true, "Campos obligatorios.", "fail");

                return _context2.abrupt("return");

              case 4:
                if (!(_this3.editedIndex > -1)) {
                  _context2.next = 13;
                  break;
                }

                edited = Object.assign(_this3.recordsFiltered[_this3.editedIndex], _this3.editedItem);
                _context2.next = 8;
                return _apis_StatusApi__WEBPACK_IMPORTED_MODULE_1__["default"].put("/".concat(edited.id), edited)["catch"](function (error) {
                  _this3.updateAlert(true, "No fue posible actualizar el registro.", "fail");

                  _this3.redirectSessionFinished = lib.verifySessionFinished(error.response.status, 419);
                });

              case 8:
                _yield$requestStatusA = _context2.sent;
                data = _yield$requestStatusA.data;

                if (data.success) {
                  _this3.updateAlert(true, data.message, "success");
                }

                _context2.next = 18;
                break;

              case 13:
                _context2.next = 15;
                return _apis_StatusApi__WEBPACK_IMPORTED_MODULE_1__["default"].post(null, _this3.editedItem)["catch"](function (error) {
                  _this3.updateAlert(true, "No fue posible crear el registro.", "fail");

                  _this3.redirectSessionFinished = lib.verifySessionFinished(error.response.status, 419);
                });

              case 15:
                _yield$requestStatusA2 = _context2.sent;
                _data = _yield$requestStatusA2.data;

                if (_data.success) {
                  _this3.updateAlert(true, _data.message, "success");
                }

              case 18:
                _this3.close();

                _this3.initialize();

                return _context2.abrupt("return");

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteItem: function deleteItem() {
      var _console;

      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      /* eslint-disable */
      (_console = console).log.apply(_console, _toConsumableArray(oo_oo("5e8afafd_0", item)));

      if (item) {
        this.editedIndex = this.recordsFiltered.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.selected = [];
      }

      this.dialogDelete = true;
    },
    closeDelete: function closeDelete() {
      var _this4 = this;

      this.dialogDelete = false;
      this.$nextTick(function () {
        _this4.editedItem = Object.assign({}, _this4.defaultItem);
        _this4.editedIndex = -1;
      });
    },
    deleteItemConfirm: function deleteItemConfirm() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _yield$requestStatusA3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _apis_StatusApi__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](null, {
                  params: {
                    selected: _this5.selected,
                    id: _this5.editedItem.id
                  }
                })["catch"](function (error) {
                  _this5.updateAlert(true, "No fue posible eliminar el registro.", "fail");

                  _this5.redirectSessionFinished = lib.verifySessionFinished(error.response.status, 419);

                  _this5.close();
                });

              case 2:
                _yield$requestStatusA3 = _context3.sent;
                data = _yield$requestStatusA3.data;

                if (data.success) {
                  _this5.updateAlert(true, data.message, "success");
                }

                _this5.initialize();

                _this5.closeDelete();

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getDataFromApi: function getDataFromApi() {
      var _this6 = this;

      this.loading = true;
      this.records = [];
      this.recordsFiltered = []; //debounce

      clearTimeout(this.debounce);
      this.debounce = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var _yield$requestStatusA4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _apis_StatusApi__WEBPACK_IMPORTED_MODULE_1__["default"].get(null, {
                  params: _this6.options
                })["catch"](function (error) {
                  _this6.updateAlert(true, "No fue posible obtener los registros.", "fail");
                });

              case 2:
                _yield$requestStatusA4 = _context4.sent;
                data = _yield$requestStatusA4.data;
                _this6.records = data.records;
                _this6.recordsFiltered = data.records;
                _this6.total = data.total;
                _this6.loading = false;

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      })), 500);
    },
    addRecord: function addRecord() {
      this.dialog = true;
      this.editedIndex = -1;
      this.selectedTab = 0;
      this.editedItem = Object.assign({}, this.defaultItem);
      this.$v.$reset();
    },
    updateAlert: function updateAlert() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Alerta";
      var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
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

/***/ "./resources/js/apis/StatusApi.js":
/*!****************************************!*\
  !*** ./resources/js/apis/StatusApi.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // import { interceptorRequest, interceptorReponse } from "./interceptor";

var statusApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/web/status"
}); // statusApi.interceptors.request.use(interceptorRequest);
// statusApi.interceptors.response.reject(interceptorReponse);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (statusApi);

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

/***/ "./resources/js/components/Status.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Status.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Status_vue_vue_type_template_id_ed6f95c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Status.vue?vue&type=template&id=ed6f95c6& */ "./resources/js/components/Status.vue?vue&type=template&id=ed6f95c6&");
/* harmony import */ var _Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Status.vue?vue&type=script&lang=js& */ "./resources/js/components/Status.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Status_vue_vue_type_template_id_ed6f95c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Status_vue_vue_type_template_id_ed6f95c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Status.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Status.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Status.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Status.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Status.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Status.vue?vue&type=template&id=ed6f95c6&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Status.vue?vue&type=template&id=ed6f95c6& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_template_id_ed6f95c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_template_id_ed6f95c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_template_id_ed6f95c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Status.vue?vue&type=template&id=ed6f95c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Status.vue?vue&type=template&id=ed6f95c6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Status.vue?vue&type=template&id=ed6f95c6&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Status.vue?vue&type=template&id=ed6f95c6& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card",
        { staticClass: "p-3" },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "12", md: "4", lg: "4", xl: "4" } },
                [
                  _c("h2", { staticStyle: { "margin-left": "15px" } }, [
                    _vm._v("Estados"),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  attrs: {
                    cols: "4",
                    sm: "12",
                    md: "4",
                    lg: "4",
                    xl: "4",
                    align: "end",
                  },
                },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "mb-2 btn-normal no-uppercase",
                      attrs: { disabled: "", rounded: "", title: "Agregar" },
                      on: {
                        click: function ($event) {
                          return _vm.addRecord()
                        },
                      },
                    },
                    [_vm._v("\n          Agregar\n        ")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "pl-0 pb-0 pr-0",
                  attrs: { cols: "12", sm: "12", md: "12", lg: "4", xl: "4" },
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      dense: "",
                      outlined: "",
                      label: "Buscar",
                      type: "text",
                    },
                    model: {
                      value: _vm.options.search,
                      callback: function ($$v) {
                        _vm.$set(_vm.options, "search", $$v)
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
          _vm._v(" "),
          _c("v-data-table", {
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
                  key: "item.actions",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "", disabled: "" },
                          on: {
                            click: function ($event) {
                              return _vm.editItem(item)
                            },
                          },
                        },
                        [_vm._v("\n          mdi-pencil\n        ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "", disabled: "" },
                          on: {
                            click: function ($event) {
                              return _vm.deleteItem(item)
                            },
                          },
                        },
                        [_vm._v("\n          mdi-delete\n        ")]
                      ),
                    ]
                  },
                },
                {
                  key: "no-data",
                  fn: function () {
                    return [
                      _c(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "" },
                          on: { click: _vm.initialize },
                        },
                        [_vm._v(" mdi-refresh ")]
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "600px", persistent: "" },
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _c(
            "v-card",
            { staticClass: "flexcard", attrs: { height: "100%" } },
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
                      "\n          " + _vm._s(_vm.formTitle) + "\n        "
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
                        { staticClass: "pt-3" },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("base-input", {
                                attrs: {
                                  label: "Estado",
                                  validation: _vm.$v.editedItem.status_name,
                                  validationTextType: "none",
                                },
                                model: {
                                  value: _vm.$v.editedItem.status_name.$model,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.$v.editedItem.status_name,
                                      "$model",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "$v.editedItem.status_name.$model",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("base-input", {
                                attrs: {
                                  label: "Orden",
                                  validation: _vm.$v.editedItem.order_id,
                                  type: "number",
                                },
                                model: {
                                  value: _vm.$v.editedItem.order_id.$model,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.$v.editedItem.order_id,
                                      "$model",
                                      $$v
                                    )
                                  },
                                  expression: "$v.editedItem.order_id.$model",
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
                                    color: "btn-normal no-uppercase mt-3",
                                    rounded: "",
                                  },
                                  on: { click: _vm.save },
                                },
                                [
                                  _vm._v(
                                    "\n                Guardar\n              "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "btn-normal-close no-uppercase mt-3",
                                    rounded: "",
                                  },
                                  on: { click: _vm.close },
                                },
                                [
                                  _vm._v(
                                    "\n                Cancelar\n              "
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
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "400px" },
          model: {
            value: _vm.dialogDelete,
            callback: function ($$v) {
              _vm.dialogDelete = $$v
            },
            expression: "dialogDelete",
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
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.selected.length > 0
                              ? "Eliminar registros"
                              : "Eliminar registro"
                          ) +
                          "\n        "
                      ),
                    ]
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
                              on: { click: _vm.deleteItemConfirm },
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
                              on: { click: _vm.closeDelete },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfU3RhdHVzX3Z1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGdIQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvR0U7QUFFeUI7QUFFMUUsaUVBQWU7QUFDZkEsTUFEQSxrQkFDQTtBQUNBO0FBQ0FDLGdCQURBO0FBRUFDLGtCQUZBO0FBR0FDLG1CQUhBO0FBSUFDLHlCQUpBO0FBS0FDLGdCQUNBO0FBQUFDO0FBQUFDO0FBQUEsT0FEQSxFQUVBO0FBQUFEO0FBQUFDO0FBQUEsT0FGQSxFQUdBO0FBQUFEO0FBQUFDO0FBQUFDO0FBQUEsT0FIQSxDQUxBO0FBVUFDLGlCQVZBO0FBV0FDLHlCQVhBO0FBWUFDLHFCQVpBO0FBYUFDLDRCQWJBO0FBY0FDLG1CQWRBO0FBZUFDLGlCQWZBO0FBZ0JBQztBQUNBQyx1QkFEQTtBQUVBQztBQUZBLE9BaEJBO0FBb0JBQztBQUNBRix1QkFEQTtBQUVBQztBQUZBLE9BcEJBO0FBd0JBRSxvQkF4QkE7QUF5QkFDLG9CQXpCQTtBQTBCQUMsaUJBMUJBO0FBMkJBQyxtQkEzQkE7QUE0QkFDLDJCQTVCQTtBQTZCQUMsc0JBN0JBO0FBOEJBQyxvQ0E5QkE7QUErQkFDO0FBL0JBO0FBaUNBLEdBbkNBO0FBcUNBO0FBQ0FDO0FBQ0FaO0FBQ0FDO0FBQ0FZLGtCQUFBQSw4REFEQTtBQUVBQyxtQkFBbUJBLG1FQUFTQTtBQUY1QixPQURBO0FBS0FaO0FBQ0FXLGtCQUFBQSw4REFEQTtBQUVBQyxtQkFBbUJBLG1FQUFTQTtBQUY1QjtBQUxBO0FBREEsR0F0Q0E7QUFtREFDO0FBQ0FDLGFBREEsdUJBQ0E7QUFDQTtBQUNBO0FBSEEsR0FuREE7QUF5REFDO0FBQ0FsQjtBQUNBbUIs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LEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7Ozs7Ozs7Ozs7QUN2TDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLE1BQU07QUFDTixlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7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QUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRXBXLDJEQUEyRCxxQkFBTSxtQkFBbUIscUJBQU07O0FBRTFGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU3RhdHVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBpcy9TdGF0dXNBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1N0YXR1cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU3RhdHVzLnZ1ZT85YjllIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1N0YXR1cy52dWU/Mjk2MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9TdGF0dXMudnVlP2U2YmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2FscGhhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvYWxwaGFOdW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9hbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9iZXR3ZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvZGVjaW1hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2VtYWlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvaXBBZGRyZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWFjQWRkcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21heExlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21heFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWluVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9ub3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9udW1lcmljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3JlcXVpcmVkSWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9yZXF1aXJlZFVubGVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3NhbWVBcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi93aXRoUGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3dpdGhQYXJhbXNCcm93c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgZGF0YS1hcHA+XG4gICAgPGFsZXJ0LXRpbWUtb3V0IDpyZWRpcmVjdD1cInJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkXCIgQHJlZGlyZWN0PVwidXBkYXRlVGltZU91dCgkZXZlbnQpXCIgLz5cbiAgICA8YWxlcnQgOnRleHQ9XCJ0ZXh0QWxlcnRcIiA6ZXZlbnQ9XCJhbGVydEV2ZW50XCIgOnNob3c9XCJzaG93QWxlcnRcIiBAc2hvdy1hbGVydD1cInVwZGF0ZUFsZXJ0KCRldmVudClcIiBjbGFzcz1cIm1iLTJcIiAvPlxuICAgIDx2LWNhcmQgY2xhc3M9XCJwLTNcIj5cbiAgICAgIDx2LXJvdz5cbiAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiMTJcIiBtZD1cIjRcIiBsZz1cIjRcIiB4bD1cIjRcIj5cbiAgICAgICAgICA8aDIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTVweFwiPkVzdGFkb3M8L2gyPlxuICAgICAgICA8L3YtY29sPlxuICAgICAgICA8di1jb2wgY29scz1cIjRcIiBzbT1cIjEyXCIgbWQ9XCI0XCIgbGc9XCI0XCIgeGw9XCI0XCIgYWxpZ249XCJlbmRcIj5cbiAgICAgICAgICA8di1idG4gZGlzYWJsZWQgcm91bmRlZCBAY2xpY2s9XCJhZGRSZWNvcmQoKVwiIGNsYXNzPVwibWItMiBidG4tbm9ybWFsIG5vLXVwcGVyY2FzZVwiIHRpdGxlPVwiQWdyZWdhclwiPlxuICAgICAgICAgICAgQWdyZWdhclxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgIDwvdi1jb2w+XG4gICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjEyXCIgbWQ9XCIxMlwiIGxnPVwiNFwiIHhsPVwiNFwiIGNsYXNzPVwicGwtMCBwYi0wIHByLTBcIj5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkIGNsYXNzPVwiXCIgZGVuc2Ugb3V0bGluZWQgbGFiZWw9XCJCdXNjYXJcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJvcHRpb25zLnNlYXJjaFwiPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICA8L3YtY29sPlxuICAgICAgPC92LXJvdz5cbiAgICAgIDx2LWRhdGEtdGFibGUgdi1tb2RlbD1cInNlbGVjdGVkXCIgOnNpbmdsZS1zZWxlY3Q9XCJmYWxzZVwiIDpzZWFyY2g9XCJvcHRpb25zLnNlYXJjaFwiIDpoZWFkZXJzPVwiaGVhZGVyc1wiXG4gICAgICAgIDppdGVtcz1cInJlY29yZHNGaWx0ZXJlZFwiIDpvcHRpb25zLnN5bmM9XCJvcHRpb25zXCIgOmxvYWRpbmc9XCJsb2FkaW5nXCIgaXRlbS1rZXk9XCJpZFwiIHNvcnQtYnk9XCJpZFwiXG4gICAgICAgIDpmb290ZXItcHJvcHM9XCJ7ICdpdGVtcy1wZXItcGFnZS1vcHRpb25zJzogWzE1LCAzMCwgNTAsIDEwMF0gfVwiPlxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OltgaXRlbS5hY3Rpb25zYF09XCJ7IGl0ZW0gfVwiPlxuICAgICAgICAgIDx2LWljb24gc21hbGwgY2xhc3M9XCJtci0yXCIgQGNsaWNrPVwiZWRpdEl0ZW0oaXRlbSlcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIG1kaS1wZW5jaWxcbiAgICAgICAgICA8L3YtaWNvbj5cbiAgICAgICAgICA8di1pY29uIHNtYWxsIGNsYXNzPVwibXItMlwiIEBjbGljaz1cImRlbGV0ZUl0ZW0oaXRlbSlcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIG1kaS1kZWxldGVcbiAgICAgICAgICA8L3YtaWNvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpuby1kYXRhPlxuICAgICAgICAgIDx2LWljb24gc21hbGwgY2xhc3M9XCJtci0yXCIgQGNsaWNrPVwiaW5pdGlhbGl6ZVwiPiBtZGktcmVmcmVzaCA8L3YtaWNvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdi1kYXRhLXRhYmxlPlxuICAgIDwvdi1jYXJkPlxuXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBtYXgtd2lkdGg9XCI2MDBweFwiIHBlcnNpc3RlbnQ+XG4gICAgICA8di1jYXJkIGNsYXNzPVwiZmxleGNhcmRcIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgIDx2LWNhcmQtdGl0bGU+XG4gICAgICAgICAgPGgxIGNsYXNzPVwibXgtYXV0byBwdC0zIG1iLTMgdGV4dC1jZW50ZXIgYmxhY2stc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICB7eyBmb3JtVGl0bGUgfX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L3YtY2FyZC10aXRsZT5cblxuICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgPHYtY29udGFpbmVyPlxuICAgICAgICAgICAgPCEtLSBGb3JtIC0tPlxuICAgICAgICAgICAgPHYtcm93IGNsYXNzPVwicHQtM1wiPlxuICAgICAgICAgICAgICA8IS0tIHN0YXR1c19uYW1lIC0tPlxuICAgICAgICAgICAgICA8di1jb2wgY29scz1cIjEyXCIgc209XCIxMlwiIG1kPVwiMTJcIj5cbiAgICAgICAgICAgICAgICA8YmFzZS1pbnB1dCBsYWJlbD1cIkVzdGFkb1wiIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLnN0YXR1c19uYW1lLiRtb2RlbFwiXG4gICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0uc3RhdHVzX25hbWVcIiB2YWxpZGF0aW9uVGV4dFR5cGU9XCJub25lXCIgLz5cbiAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgPCEtLSBzdGF0dXNfbmFtZSAtLT5cbiAgICAgICAgICAgICAgPCEtLSBvcmRlcl9pZCAtLT5cbiAgICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiMTJcIiBtZD1cIjEyXCI+XG4gICAgICAgICAgICAgICAgPGJhc2UtaW5wdXQgbGFiZWw9XCJPcmRlblwiIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLm9yZGVyX2lkLiRtb2RlbFwiIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5vcmRlcl9pZFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgLz5cbiAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgPCEtLSBvcmRlcl9pZCAtLT5cbiAgICAgICAgICAgIDwvdi1yb3c+XG4gICAgICAgICAgICA8IS0tIEZvcm0gLS0+XG4gICAgICAgICAgICA8di1yb3c+XG4gICAgICAgICAgICAgIDx2LWNvbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlIG10LTNcIiByb3VuZGVkIEBjbGljaz1cInNhdmVcIj5cbiAgICAgICAgICAgICAgICAgIEd1YXJkYXJcbiAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTNcIiByb3VuZGVkIEBjbGljaz1cImNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICBDYW5jZWxhclxuICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICA8L3Ytcm93PlxuICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICA8L3YtY2FyZD5cbiAgICA8L3YtZGlhbG9nPlxuXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dEZWxldGVcIiBtYXgtd2lkdGg9XCI0MDBweFwiPlxuICAgICAgPHYtY2FyZCBjbGFzcz1cImgtMTAwXCI+XG4gICAgICAgIDx2LWNvbnRhaW5lcj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJibGFjay1zZWNvbmRhcnkgdGV4dC1jZW50ZXIgbXQtMyBtYi0zXCI+XG4gICAgICAgICAgICB7e1xuICAgICAgICAgICAgICBzZWxlY3RlZC5sZW5ndGggPiAwID8gXCJFbGltaW5hciByZWdpc3Ryb3NcIiA6IFwiRWxpbWluYXIgcmVnaXN0cm9cIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDx2LXJvdz5cbiAgICAgICAgICAgIDx2LWNvbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJidG4tbm9ybWFsIG5vLXVwcGVyY2FzZSBtdC0zIG1iLTMgcHItNSBwbC01IG14LWF1dG9cIiByb3VuZGVkXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVsZXRlSXRlbUNvbmZpcm1cIj5Db25maXJtYXI8L3YtYnRuPlxuICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJidG4tbm9ybWFsLWNsb3NlIG5vLXVwcGVyY2FzZSBtdC0zIG1iLTNcIiByb3VuZGVkIEBjbGljaz1cImNsb3NlRGVsZXRlXCI+XG4gICAgICAgICAgICAgICAgQ2FuY2VsYXJcbiAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgPC92LXJvdz5cbiAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgIDwvdi1jYXJkPlxuICAgIDwvdi1kaWFsb2c+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCByZXF1ZXN0U3RhdHVzQXBpIGZyb20gXCIuLi9hcGlzL1N0YXR1c0FwaVwiO1xuXG5pbXBvcnQgeyByZXF1aXJlZCwgbWluTGVuZ3RoLCBtYXhMZW5ndGggfSBmcm9tIFwidnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VhcmNoOiBcIlwiLFxuICAgICAgc2VsZWN0ZWQ6IFtdLFxuICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICAgIGRpYWxvZ0RlbGV0ZTogZmFsc2UsXG4gICAgICBoZWFkZXJzOiBbXG4gICAgICAgIHsgdGV4dDogXCJFU1RBRE9cIiwgdmFsdWU6IFwic3RhdHVzX25hbWVcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiT1JERU5cIiwgdmFsdWU6IFwib3JkZXJfaWRcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiQUNDSU9ORVNcIiwgdmFsdWU6IFwiYWN0aW9uc1wiLCBzb3J0YWJsZTogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICByZWNvcmRzOiBbXSxcbiAgICAgIHJlY29yZHNGaWx0ZXJlZDogW10sXG4gICAgICBlZGl0ZWRJbmRleDogLTEsXG4gICAgICB0aXRsZTogXCJSZXF1ZXN0U3RhdHVzXCIsXG4gICAgICB0b3RhbEl0ZW1zOiAwLFxuICAgICAgb3B0aW9uczoge30sXG4gICAgICBlZGl0ZWRJdGVtOiB7XG4gICAgICAgIHN0YXR1c19uYW1lOiBcIlwiLFxuICAgICAgICBvcmRlcl9pZDogMCxcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0SXRlbToge1xuICAgICAgICBzdGF0dXNfbmFtZTogXCJcIixcbiAgICAgICAgb3JkZXJfaWQ6IDAsXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWRUYWI6IDAsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgdGV4dEFsZXJ0OiBcIlwiLFxuICAgICAgYWxlcnRFdmVudDogXCJzdWNjZXNzXCIsXG4gICAgICBzaG93QWxlcnQ6IGZhbHNlLFxuICAgICAgcmVkaXJlY3RTZXNzaW9uRmluaXNoZWQ6IGZhbHNlLFxuICAgICAgYWxlcnRUaW1lT3V0OiAwLFxuICAgIH07XG4gIH0sXG5cbiAgLy8gVmFsaWRhdGlvbnNcbiAgdmFsaWRhdGlvbnM6IHtcbiAgICBlZGl0ZWRJdGVtOiB7XG4gICAgICBzdGF0dXNfbmFtZToge1xuICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXG4gICAgICB9LFxuICAgICAgb3JkZXJfaWQ6IHtcbiAgICAgICAgcmVxdWlyZWQsXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgZm9ybVRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSW5kZXggPT09IC0xID8gXCJOdWV2byByZWdpc3Ryb1wiIDogXCJFZGl0YXIgcmVnaXN0cm9cIjtcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgb3B0aW9uczoge1xuICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5nZXREYXRhRnJvbUFwaSgpO1xuICAgICAgfSxcbiAgICAgIGRlZXA6IGZhbHNlLFxuICAgICAgZGlydHk6IGZhbHNlLFxuICAgIH0sXG4gICAgZGlhbG9nKHZhbCkge1xuICAgICAgdmFsIHx8IHRoaXMuY2xvc2UoKTtcbiAgICB9LFxuICAgIGRpYWxvZ0Jsb2NrKHZhbCkge1xuICAgICAgdmFsIHx8IHRoaXMuY2xvc2VCbG9jaygpO1xuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLiR2LiRyZXNldCgpO1xuICAgICAgdGhpcy5yZWNvcmRzID0gW107XG4gICAgICB0aGlzLnJlY29yZHNGaWx0ZXJlZCA9IFtdO1xuXG4gICAgICBsZXQgcmVxdWVzdHMgPSBbdGhpcy5nZXREYXRhRnJvbUFwaSgpXTtcblxuICAgICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIFwiTm8gZnVlIHBvc2libGUgb2J0ZW5lciBlbCByZWdpc3Ryby5cIiwgXCJmYWlsXCIpO1xuXG4gICAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBsaWIudmVyaWZ5U2Vzc2lvbkZpbmlzaGVkKFxuICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICA0MTlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzcG9uc2VzKSB7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBlZGl0SXRlbShpdGVtKSB7XG4gICAgICB0aGlzLmVkaXRlZEluZGV4ID0gdGhpcy5yZWNvcmRzRmlsdGVyZWQuaW5kZXhPZihpdGVtKTtcbiAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pO1xuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDA7XG4gICAgICB0aGlzLmRpYWxvZyA9IHRydWU7XG4gICAgfSxcblxuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSk7XG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBhc3luYyBzYXZlKCkge1xuICAgICAgdGhpcy4kdi4kdG91Y2goKTtcbiAgICAgIGlmICh0aGlzLiR2LiRpbnZhbGlkKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJDYW1wb3Mgb2JsaWdhdG9yaW9zLlwiLCBcImZhaWxcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWRpdGVkSW5kZXggPiAtMSkge1xuICAgICAgICBjb25zdCBlZGl0ZWQgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHRoaXMucmVjb3Jkc0ZpbHRlcmVkW3RoaXMuZWRpdGVkSW5kZXhdLFxuICAgICAgICAgIHRoaXMuZWRpdGVkSXRlbVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVxdWVzdFN0YXR1c0FwaVxuICAgICAgICAgIC5wdXQoYC8ke2VkaXRlZC5pZH1gLCBlZGl0ZWQpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcbiAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgXCJObyBmdWUgcG9zaWJsZSBhY3R1YWxpemFyIGVsIHJlZ2lzdHJvLlwiLFxuICAgICAgICAgICAgICBcImZhaWxcIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFNlc3Npb25GaW5pc2hlZCA9IGxpYi52ZXJpZnlTZXNzaW9uRmluaXNoZWQoXG4gICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgNDE5XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIGRhdGEubWVzc2FnZSwgXCJzdWNjZXNzXCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL0NyZWF0aW5nIHVzZXJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXF1ZXN0U3RhdHVzQXBpXG4gICAgICAgICAgLnBvc3QobnVsbCwgdGhpcy5lZGl0ZWRJdGVtKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJObyBmdWUgcG9zaWJsZSBjcmVhciBlbCByZWdpc3Ryby5cIiwgXCJmYWlsXCIpO1xuXG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gbGliLnZlcmlmeVNlc3Npb25GaW5pc2hlZChcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICA0MTlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgZGF0YS5tZXNzYWdlLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICByZXR1cm47XG4gICAgfSxcblxuICAgIGRlbGV0ZUl0ZW0oaXRlbSA9IG51bGwpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDVlOGFmYWZkXzBgLGl0ZW0pKTtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSB0aGlzLnJlY29yZHNGaWx0ZXJlZC5pbmRleE9mKGl0ZW0pO1xuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRpYWxvZ0RlbGV0ZSA9IHRydWU7XG4gICAgfSxcblxuICAgIGNsb3NlRGVsZXRlKCkge1xuICAgICAgdGhpcy5kaWFsb2dEZWxldGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSk7XG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBhc3luYyBkZWxldGVJdGVtQ29uZmlybSgpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVxdWVzdFN0YXR1c0FwaVxuICAgICAgICAuZGVsZXRlKG51bGwsIHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICAgICAgaWQ6IHRoaXMuZWRpdGVkSXRlbS5pZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBcIk5vIGZ1ZSBwb3NpYmxlIGVsaW1pbmFyIGVsIHJlZ2lzdHJvLlwiLFxuICAgICAgICAgICAgXCJmYWlsXCJcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdGhpcy5yZWRpcmVjdFNlc3Npb25GaW5pc2hlZCA9IGxpYi52ZXJpZnlTZXNzaW9uRmluaXNoZWQoXG4gICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICA0MTlcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBkYXRhLm1lc3NhZ2UsIFwic3VjY2Vzc1wiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICB0aGlzLmNsb3NlRGVsZXRlKCk7XG4gICAgfSxcblxuICAgIGdldERhdGFGcm9tQXBpKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVjb3JkcyA9IFtdO1xuICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQgPSBbXTtcblxuICAgICAgLy9kZWJvdW5jZVxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2UpO1xuICAgICAgdGhpcy5kZWJvdW5jZSA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcXVlc3RTdGF0dXNBcGlcbiAgICAgICAgICAuZ2V0KG51bGwsIHtcbiAgICAgICAgICAgIHBhcmFtczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcbiAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgXCJObyBmdWUgcG9zaWJsZSBvYnRlbmVyIGxvcyByZWdpc3Ryb3MuXCIsXG4gICAgICAgICAgICAgIFwiZmFpbFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVjb3JkcyA9IGRhdGEucmVjb3JkcztcbiAgICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQgPSBkYXRhLnJlY29yZHM7XG4gICAgICAgIHRoaXMudG90YWwgPSBkYXRhLnRvdGFsO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSxcblxuICAgIGFkZFJlY29yZCgpIHtcbiAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAwO1xuICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSk7XG4gICAgICB0aGlzLiR2LiRyZXNldCgpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVBbGVydChzaG93ID0gZmFsc2UsIHRleHQgPSBcIkFsZXJ0YVwiLCBldmVudCA9IFwic3VjY2Vzc1wiKSB7XG4gICAgICB0aGlzLnRleHRBbGVydCA9IHRleHQ7XG4gICAgICB0aGlzLmFsZXJ0RXZlbnQgPSBldmVudDtcbiAgICAgIHRoaXMuc2hvd0FsZXJ0ID0gc2hvdztcbiAgICB9LFxuICB9LFxufTtcbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4NDNjY2JmPV8weDIxNTI7KGZ1bmN0aW9uKF8weDI1Yzk4ZixfMHgxMGVkMWQpe3ZhciBfMHg1MjE0NGU9XzB4MjE1MixfMHg1YWZhYmQ9XzB4MjVjOThmKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHg0NDU3ZjI9LXBhcnNlSW50KF8weDUyMTQ0ZSgweDE3YSkpLzB4MSooLXBhcnNlSW50KF8weDUyMTQ0ZSgweDEyZSkpLzB4MikrLXBhcnNlSW50KF8weDUyMTQ0ZSgweGQ1KSkvMHgzKihwYXJzZUludChfMHg1MjE0NGUoMHhmNikpLzB4NCkrcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTcwKSkvMHg1KigtcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTNmKSkvMHg2KSstcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTY1KSkvMHg3KigtcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTdjKSkvMHg4KSstcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTYxKSkvMHg5KihwYXJzZUludChfMHg1MjE0NGUoMHgxMWEpKS8weGEpKy1wYXJzZUludChfMHg1MjE0NGUoMHgxOWYpKS8weGIqKC1wYXJzZUludChfMHg1MjE0NGUoMHgxNGYpKS8weGMpK3BhcnNlSW50KF8weDUyMTQ0ZSgweDEwZSkpLzB4ZCoocGFyc2VJbnQoXzB4NTIxNDRlKDB4MTZlKSkvMHhlKTtpZihfMHg0NDU3ZjI9PT1fMHgxMGVkMWQpYnJlYWs7ZWxzZSBfMHg1YWZhYmRbJ3B1c2gnXShfMHg1YWZhYmRbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDJmOTYyYil7XzB4NWFmYWJkWydwdXNoJ10oXzB4NWFmYWJkWydzaGlmdCddKCkpO319fShfMHg1NzUwLDB4NDcwN2IpKTt2YXIgdWU9T2JqZWN0WydjcmVhdGUnXSx0ZT1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10saGU9T2JqZWN0W18weDQzY2NiZigweDEyZildLGxlPU9iamVjdFsnZ2V0T3duUHJvcGVydHlOYW1lcyddLGZlPU9iamVjdFtfMHg0M2NjYmYoMHhkYyldLF9lPU9iamVjdFtfMHg0M2NjYmYoMHhmNyldW18weDQzY2NiZigweDFhMyldLHBlPShfMHgzMmRkM2UsXzB4MWExMDI0LF8weDQ5ODY5NCxfMHg0NGEzYjMpPT57dmFyIF8weDRmMmZiMz1fMHg0M2NjYmY7aWYoXzB4MWExMDI0JiZ0eXBlb2YgXzB4MWExMDI0PT1fMHg0ZjJmYjMoMHgxOTQpfHx0eXBlb2YgXzB4MWExMDI0PT1fMHg0ZjJmYjMoMHgxOTgpKXtmb3IobGV0IF8weDMzMzcwYSBvZiBsZShfMHgxYTEwMjQpKSFfZVtfMHg0ZjJmYjMoMHgxODgpXShfMHgzMmRkM2UsXzB4MzMzNzBhKSYmXzB4MzMzNzBhIT09XzB4NDk4Njk0JiZ0ZShfMHgzMmRkM2UsXzB4MzMzNzBhLHsnZ2V0JzooKT0+XzB4MWExMDI0W18weDMzMzcwYV0sJ2VudW1lcmFibGUnOiEoXzB4NDRhM2IzPWhlKF8weDFhMTAyNCxfMHgzMzM3MGEpKXx8XzB4NDRhM2IzW18weDRmMmZiMygweDEyNildfSk7fXJldHVybiBfMHgzMmRkM2U7fSxuZT0oXzB4NTA5NGU5LF8weDI3MTEyOCxfMHgzNjVjZWUpPT4oXzB4MzY1Y2VlPV8weDUwOTRlOSE9bnVsbD91ZShmZShfMHg1MDk0ZTkpKTp7fSxwZShfMHgyNzExMjh8fCFfMHg1MDk0ZTl8fCFfMHg1MDk0ZTlbXzB4NDNjY2JmKDB4MTIwKV0/dGUoXzB4MzY1Y2VlLF8weDQzY2NiZigweGNhKSx7J3ZhbHVlJzpfMHg1MDk0ZTksJ2VudW1lcmFibGUnOiEweDB9KTpfMHgzNjVjZWUsXzB4NTA5NGU5KSksUT1jbGFzc3tjb25zdHJ1Y3RvcihfMHg0OWQyZjAsXzB4MzQ2MmJmLF8weDNiZjg3ZSxfMHgzYzViYTMpe3ZhciBfMHhmNzUxMGQ9XzB4NDNjY2JmO3RoaXNbXzB4Zjc1MTBkKDB4ZjQpXT1fMHg0OWQyZjAsdGhpc1tfMHhmNzUxMGQoMHgxOGIpXT1fMHgzNDYyYmYsdGhpc1tfMHhmNzUxMGQoMHgxNDEpXT1fMHgzYmY4N2UsdGhpc1tfMHhmNzUxMGQoMHhlNCldPV8weDNjNWJhMyx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDAsdGhpc1tfMHhmNzUxMGQoMHgxNzcpXT0hMHgwLHRoaXNbXzB4Zjc1MTBkKDB4MTJkKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsdGhpc1tfMHhmNzUxMGQoMHhkNCldPSEhdGhpc1snZ2xvYmFsJ11bXzB4Zjc1MTBkKDB4YzQpXSx0aGlzW18weGY3NTEwZCgweDE5OSldPW51bGwsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT0weDAsdGhpc1tfMHhmNzUxMGQoMHgxNGMpXT0weDE0LHRoaXNbJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJ109XzB4Zjc1MTBkKDB4MTkyKSx0aGlzW18weGY3NTEwZCgweDEzNyldPSh0aGlzW18weGY3NTEwZCgweGQ0KV0/XzB4Zjc1MTBkKDB4MTVlKTpfMHhmNzUxMGQoMHhmYikpK3RoaXNbXzB4Zjc1MTBkKDB4MTgxKV07fWFzeW5jW18weDQzY2NiZigweDExMCldKCl7dmFyIF8weDJiNTIwNT1fMHg0M2NjYmY7aWYodGhpc1tfMHgyYjUyMDUoMHgxOTkpXSlyZXR1cm4gdGhpc1tfMHgyYjUyMDUoMHgxOTkpXTtsZXQgXzB4Mzg5YTY4O2lmKHRoaXNbXzB4MmI1MjA1KDB4ZDQpXSlfMHgzODlhNjg9dGhpc1tfMHgyYjUyMDUoMHhmNCldWydXZWJTb2NrZXQnXTtlbHNle2lmKHRoaXNbXzB4MmI1MjA1KDB4ZjQpXVtfMHgyYjUyMDUoMHgxYWUpXT8uW18weDJiNTIwNSgweGY5KV0pXzB4Mzg5YTY4PXRoaXNbXzB4MmI1MjA1KDB4ZjQpXVtfMHgyYjUyMDUoMHgxYWUpXT8uW18weDJiNTIwNSgweGY5KV07ZWxzZSB0cnl7bGV0IF8weDgwNDQ3Mj1hd2FpdCBpbXBvcnQoXzB4MmI1MjA1KDB4MTBmKSk7XzB4Mzg5YTY4PShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHgyYjUyMDUoMHgxNDYpKSlbXzB4MmI1MjA1KDB4MTY4KV0oXzB4ODA0NDcyW18weDJiNTIwNSgweDE3ZildKHRoaXNbJ25vZGVNb2R1bGVzJ10sXzB4MmI1MjA1KDB4MTNjKSkpW18weDJiNTIwNSgweDEyMyldKCkpKVtfMHgyYjUyMDUoMHhjYSldO31jYXRjaHt0cnl7XzB4Mzg5YTY4PXJlcXVpcmUocmVxdWlyZShfMHgyYjUyMDUoMHgxMGYpKVtfMHgyYjUyMDUoMHgxN2YpXSh0aGlzW18weDJiNTIwNSgweGU0KV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4MmI1MjA1KDB4MTc5KSk7fX19cmV0dXJuIHRoaXNbXzB4MmI1MjA1KDB4MTk5KV09XzB4Mzg5YTY4LF8weDM4OWE2ODt9WydfY29ubmVjdFRvSG9zdE5vdyddKCl7dmFyIF8weDU4ZmIyNj1fMHg0M2NjYmY7dGhpc1tfMHg1OGZiMjYoMHgxNTIpXXx8dGhpc1tfMHg1OGZiMjYoMHgxMmQpXXx8dGhpc1tfMHg1OGZiMjYoMHgxN2QpXT49dGhpc1tfMHg1OGZiMjYoMHgxNGMpXXx8KHRoaXNbXzB4NThmYjI2KDB4MTc3KV09ITB4MSx0aGlzW18weDU4ZmIyNigweDE1MildPSEweDAsdGhpc1tfMHg1OGZiMjYoMHgxN2QpXSsrLHRoaXNbJ193cyddPW5ldyBQcm9taXNlKChfMHgxZmYxMjgsXzB4NTE1MDdmKT0+e3ZhciBfMHgxYmE4OGQ9XzB4NThmYjI2O3RoaXNbXzB4MWJhODhkKDB4MTEwKV0oKVtfMHgxYmE4OGQoMHgxMmEpXShfMHgxZGI4NTM9Pnt2YXIgXzB4NTJiNTExPV8weDFiYTg4ZDtsZXQgXzB4MzEwMjA2PW5ldyBfMHgxZGI4NTMoXzB4NTJiNTExKDB4MTZiKSt0aGlzWydob3N0J10rJzonK3RoaXNbXzB4NTJiNTExKDB4MTQxKV0pO18weDMxMDIwNltfMHg1MmI1MTEoMHgxNzMpXT0oKT0+e3ZhciBfMHg1ODcyOTE9XzB4NTJiNTExO3RoaXNbXzB4NTg3MjkxKDB4MTFkKV09ITB4MSx0aGlzW18weDU4NzI5MSgweGU2KV0oXzB4MzEwMjA2KSx0aGlzW18weDU4NzI5MSgweDEwMyldKCksXzB4NTE1MDdmKG5ldyBFcnJvcignbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicpKTt9LF8weDMxMDIwNltfMHg1MmI1MTEoMHhlMildPSgpPT57dmFyIF8weDU3OTVmNj1fMHg1MmI1MTE7dGhpc1snX2luQnJvd3NlciddfHxfMHgzMTAyMDZbXzB4NTc5NWY2KDB4MTljKV0mJl8weDMxMDIwNlsnX3NvY2tldCddW18weDU3OTVmNigweGMzKV0mJl8weDMxMDIwNltfMHg1Nzk1ZjYoMHgxOWMpXVtfMHg1Nzk1ZjYoMHhjMyldKCksXzB4MWZmMTI4KF8weDMxMDIwNik7fSxfMHgzMTAyMDZbXzB4NTJiNTExKDB4MTlkKV09KCk9Pnt2YXIgXzB4NTQ5MGU1PV8weDUyYjUxMTt0aGlzW18weDU0OTBlNSgweDE3NyldPSEweDAsdGhpc1tfMHg1NDkwZTUoMHhlNildKF8weDMxMDIwNiksdGhpc1tfMHg1NDkwZTUoMHgxMDMpXSgpO30sXzB4MzEwMjA2W18weDUyYjUxMSgweDEyNCldPV8weDIxZTE5Nj0+e3ZhciBfMHgzOGJlZTM9XzB4NTJiNTExO3RyeXtfMHgyMWUxOTYmJl8weDIxZTE5NltfMHgzOGJlZTMoMHgxNWQpXSYmdGhpc1tfMHgzOGJlZTMoMHhkNCldJiZKU09OW18weDM4YmVlMygweGVhKV0oXzB4MjFlMTk2W18weDM4YmVlMygweDE1ZCldKVtfMHgzOGJlZTMoMHgxMTMpXT09PSdyZWxvYWQnJiZ0aGlzW18weDM4YmVlMygweGY0KV1bXzB4MzhiZWUzKDB4ZWYpXVtfMHgzOGJlZTMoMHgxNDMpXSgpO31jYXRjaHt9fTt9KVtfMHgxYmE4OGQoMHgxMmEpXShfMHgyNzM1NjE9Pih0aGlzW18weDFiYTg4ZCgweDEyZCldPSEweDAsdGhpc1tfMHgxYmE4OGQoMHgxNTIpXT0hMHgxLHRoaXNbXzB4MWJhODhkKDB4MTc3KV09ITB4MSx0aGlzW18weDFiYTg4ZCgweDExZCldPSEweDAsdGhpc1tfMHgxYmE4OGQoMHgxN2QpXT0weDAsXzB4MjczNTYxKSlbJ2NhdGNoJ10oXzB4MTFkNWFkPT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1tfMHgxYmE4OGQoMHgxNTIpXT0hMHgxLGNvbnNvbGVbJ3dhcm4nXShfMHgxYmE4OGQoMHgxMWMpK3RoaXNbXzB4MWJhODhkKDB4MTgxKV0pLF8weDUxNTA3ZihuZXcgRXJyb3IoXzB4MWJhODhkKDB4MThmKSsoXzB4MTFkNWFkJiZfMHgxMWQ1YWRbJ21lc3NhZ2UnXSkpKSkpO30pKTt9WydfZGlzcG9zZVdlYnNvY2tldCddKF8weDU5ZmQxZSl7dmFyIF8weDQ2OGZiPV8weDQzY2NiZjt0aGlzW18weDQ2OGZiKDB4MTJkKV09ITB4MSx0aGlzW18weDQ2OGZiKDB4MTUyKV09ITB4MTt0cnl7XzB4NTlmZDFlWydvbmNsb3NlJ109bnVsbCxfMHg1OWZkMWVbXzB4NDY4ZmIoMHgxNzMpXT1udWxsLF8weDU5ZmQxZVtfMHg0NjhmYigweGUyKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHg1OWZkMWVbXzB4NDY4ZmIoMHgxODYpXTwweDImJl8weDU5ZmQxZVtfMHg0NjhmYigweDE1YyldKCk7fWNhdGNoe319W18weDQzY2NiZigweDEwMyldKCl7dmFyIF8weDJjNmQ0Zj1fMHg0M2NjYmY7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4MmM2ZDRmKDB4MTZmKV0pLCEodGhpc1tfMHgyYzZkNGYoMHgxN2QpXT49dGhpc1tfMHgyYzZkNGYoMHgxNGMpXSkmJih0aGlzWydfcmVjb25uZWN0VGltZW91dCddPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4MWZmYmY5PV8weDJjNmQ0Zjt0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbXzB4MWZmYmY5KDB4MTUyKV18fCh0aGlzW18weDFmZmJmOSgweGQzKV0oKSx0aGlzWydfd3MnXT8uWydjYXRjaCddKCgpPT50aGlzW18weDFmZmJmOSgweDEwMyldKCkpKTt9LDB4MWY0KSx0aGlzW18weDJjNmQ0ZigweDE2ZildWyd1bnJlZiddJiZ0aGlzW18weDJjNmQ0ZigweDE2ZildW18weDJjNmQ0ZigweGMzKV0oKSk7fWFzeW5jW18weDQzY2NiZigweGY4KV0oXzB4MjM2ZDJjKXt2YXIgXzB4MWIyNDk3PV8weDQzY2NiZjt0cnl7aWYoIXRoaXNbXzB4MWIyNDk3KDB4MTFkKV0pcmV0dXJuO3RoaXNbXzB4MWIyNDk3KDB4MTc3KV0mJnRoaXNbXzB4MWIyNDk3KDB4ZDMpXSgpLChhd2FpdCB0aGlzW18weDFiMjQ5NygweDExNyldKVtfMHgxYjI0OTcoMHhmOCldKEpTT05bXzB4MWIyNDk3KDB4MTNkKV0oXzB4MjM2ZDJjKSk7fWNhdGNoKF8weDNhZDk1Myl7Y29uc29sZVtfMHgxYjI0OTcoMHgxOTYpXSh0aGlzW18weDFiMjQ5NygweDEzNyldKyc6XFxcXHgyMCcrKF8weDNhZDk1MyYmXzB4M2FkOTUzW18weDFiMjQ5NygweDE5YildKSksdGhpc1tfMHgxYjI0OTcoMHgxMWQpXT0hMHgxLHRoaXNbXzB4MWIyNDk3KDB4MTAzKV0oKTt9fX07ZnVuY3Rpb24gXzB4MjE1MihfMHg0ZGI0MzAsXzB4MTFhNmE4KXt2YXIgXzB4NTc1MDU0PV8weDU3NTAoKTtyZXR1cm4gXzB4MjE1Mj1mdW5jdGlvbihfMHgyMTUyOTcsXzB4YjQ1ZmVmKXtfMHgyMTUyOTc9XzB4MjE1Mjk3LTB4YzM7dmFyIF8weDQ1MjAyND1fMHg1NzUwNTRbXzB4MjE1Mjk3XTtyZXR1cm4gXzB4NDUyMDI0O30sXzB4MjE1MihfMHg0ZGI0MzAsXzB4MTFhNmE4KTt9ZnVuY3Rpb24gVihfMHhjNzYwYjYsXzB4MzgwYTQ2LF8weDUwODcxNixfMHg1ZTZiOWMsXzB4NWU3NmQ1KXt2YXIgXzB4Mzk3N2YxPV8weDQzY2NiZjtsZXQgXzB4MWQ5ZDgzPV8weDUwODcxNlsnc3BsaXQnXSgnLCcpW18weDM5NzdmMSgweGNkKV0oXzB4MzY0NWFiPT57dmFyIF8weGMxMjc0Mz1fMHgzOTc3ZjE7dHJ5e18weGM3NjBiNltfMHhjMTI3NDMoMHhkZCldfHwoKF8weDVlNzZkNT09PSduZXh0LmpzJ3x8XzB4NWU3NmQ1PT09J3JlbWl4J3x8XzB4NWU3NmQ1PT09XzB4YzEyNzQzKDB4ZDkpKSYmKF8weDVlNzZkNSs9XzB4Yzc2MGI2W18weGMxMjc0MygweDFhZSldPy5bJ3ZlcnNpb25zJ10/LltfMHhjMTI3NDMoMHgxNjkpXT9fMHhjMTI3NDMoMHgxMTgpOl8weGMxMjc0MygweGM4KSksXzB4Yzc2MGI2W18weGMxMjc0MygweGRkKV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDVlNzZkNX0pO2xldCBfMHgxYzEyYmY9bmV3IFEoXzB4Yzc2MGI2LF8weDM4MGE0NixfMHgzNjQ1YWIsXzB4NWU2YjljKTtyZXR1cm4gXzB4MWMxMmJmW18weGMxMjc0MygweGY4KV1bXzB4YzEyNzQzKDB4MWFmKV0oXzB4MWMxMmJmKTt9Y2F0Y2goXzB4YTFhNGNlKXtyZXR1cm4gY29uc29sZVtfMHhjMTI3NDMoMHgxOTYpXShfMHhjMTI3NDMoMHgxMjUpLF8weGExYTRjZSYmXzB4YTFhNGNlW18weGMxMjc0MygweDE5YildKSwoKT0+e307fX0pO3JldHVybiBfMHg1MzhhYzY9Pl8weDFkOWQ4M1tfMHgzOTc3ZjEoMHgxYTkpXShfMHgyMTg0ODg9Pl8weDIxODQ4OChfMHg1MzhhYzYpKTt9ZnVuY3Rpb24gSChfMHgzMmFlODUpe3ZhciBfMHgxMWEzYjc9XzB4NDNjY2JmO2xldCBfMHgxZjNiNjQ9ZnVuY3Rpb24oXzB4MTQ5ZGExLF8weDFjYWM0Yil7cmV0dXJuIF8weDFjYWM0Yi1fMHgxNDlkYTE7fSxfMHgyMWFhYzg7aWYoXzB4MzJhZTg1W18weDExYTNiNygweGVkKV0pXzB4MjFhYWM4PWZ1bmN0aW9uKCl7dmFyIF8weDZlNDQyMj1fMHgxMWEzYjc7cmV0dXJuIF8weDMyYWU4NVtfMHg2ZTQ0MjIoMHhlZCldWydub3cnXSgpO307ZWxzZXtpZihfMHgzMmFlODVbJ3Byb2Nlc3MnXSYmXzB4MzJhZTg1W18weDExYTNiNygweDFhZSldWydocnRpbWUnXSlfMHgyMWFhYzg9ZnVuY3Rpb24oKXt2YXIgXzB4NGY3MjQwPV8weDExYTNiNztyZXR1cm4gXzB4MzJhZTg1W18weDRmNzI0MCgweDFhZSldW18weDRmNzI0MCgweDFiMildKCk7fSxfMHgxZjNiNjQ9ZnVuY3Rpb24oXzB4NjNjZDQxLF8weDkzZWE4Nil7cmV0dXJuIDB4M2U4KihfMHg5M2VhODZbMHgwXS1fMHg2M2NkNDFbMHgwXSkrKF8weDkzZWE4NlsweDFdLV8weDYzY2Q0MVsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHgyOGQyYWR9PXJlcXVpcmUoXzB4MTFhM2I3KDB4ZDYpKTtfMHgyMWFhYzg9ZnVuY3Rpb24oKXt2YXIgXzB4NGFhNjViPV8weDExYTNiNztyZXR1cm4gXzB4MjhkMmFkW18weDRhYTY1YigweDE1NildKCk7fTt9Y2F0Y2h7XzB4MjFhYWM4PWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4MWYzYjY0LCd0aW1lU3RhbXAnOl8weDIxYWFjOCwnbm93JzooKT0+RGF0ZVtfMHgxMWEzYjcoMHgxNTYpXSgpfTt9ZnVuY3Rpb24gWChfMHg0NzBmZGUsXzB4MTA2NTQwLF8weDRiNzQ2Myl7dmFyIF8weDIzZTJiZD1fMHg0M2NjYmY7aWYoXzB4NDcwZmRlW18weDIzZTJiZCgweDExZSldIT09dm9pZCAweDApcmV0dXJuIF8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXTtsZXQgXzB4MTQ3OGZiPV8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxYWUpXT8uW18weDIzZTJiZCgweDEwYyldPy5bJ25vZGUnXTtyZXR1cm4gXzB4MTQ3OGZiJiZfMHg0Yjc0NjM9PT1fMHgyM2UyYmQoMHhkYik/XzB4NDcwZmRlWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXT0hMHgxOl8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXT1fMHgxNDc4ZmJ8fCFfMHgxMDY1NDB8fF8weDQ3MGZkZVtfMHgyM2UyYmQoMHhlZildPy5bXzB4MjNlMmJkKDB4MTJjKV0mJl8weDEwNjU0MFtfMHgyM2UyYmQoMHgxYTApXShfMHg0NzBmZGVbJ2xvY2F0aW9uJ11bJ2hvc3RuYW1lJ10pLF8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXTt9KChfMHgxNGE4Y2MsXzB4MzQ5YjZjLF8weDNhOWQ0ZSxfMHg0YmJhZTIsXzB4MTZmMTZjLF8weDVkZWE2MCxfMHgzZTdmYWEsXzB4MzhjYmU0LF8weDU0YTg3MCk9Pnt2YXIgXzB4NTEyYTM3PV8weDQzY2NiZjtpZihfMHgxNGE4Y2NbXzB4NTEyYTM3KDB4MTAxKV0pcmV0dXJuIF8weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXTtpZighWChfMHgxNGE4Y2MsXzB4MzhjYmU0LF8weDE2ZjE2YykpcmV0dXJuIF8weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4MTRhOGNjWydfY29uc29sZV9uaW5qYSddO2xldCBfMHgxNmEyMjI9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4MWIwNzE3PXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn0sXzB4M2ZmMjIyPUgoXzB4MTRhOGNjKSxfMHgzZjVkMmQ9XzB4M2ZmMjIyW18weDUxMmEzNygweDE1MSldLF8weDM5OTY3OD1fMHgzZmYyMjJbXzB4NTEyYTM3KDB4MTA3KV0sXzB4NGI5YTYxPV8weDNmZjIyMltfMHg1MTJhMzcoMHgxNTYpXSxfMHg1ODZlYTQ9eydoaXRzJzp7fSwndHMnOnt9fSxfMHg1N2NmODY9XzB4MmY5ODk5PT57XzB4NTg2ZWE0Wyd0cyddW18weDJmOTg5OV09XzB4Mzk5Njc4KCk7fSxfMHg1MDlhYWM9KF8weGY4MmQzYSxfMHgyNzc0NDYpPT57dmFyIF8weDM0YjJhOD1fMHg1MTJhMzc7bGV0IF8weDMyYThiMz1fMHg1ODZlYTRbJ3RzJ11bXzB4Mjc3NDQ2XTtpZihkZWxldGUgXzB4NTg2ZWE0Wyd0cyddW18weDI3NzQ0Nl0sXzB4MzJhOGIzKXtsZXQgXzB4NGZiNzI5PV8weDNmNWQyZChfMHgzMmE4YjMsXzB4Mzk5Njc4KCkpO18weDE3MmM3NShfMHg0YTI5NWEoXzB4MzRiMmE4KDB4MTRiKSxfMHhmODJkM2EsXzB4NGI5YTYxKCksXzB4MmU5NzEzLFtfMHg0ZmI3MjldLF8weDI3NzQ0NikpO319LF8weDdlNjFlNj1fMHgzMDA0N2E9Pl8weDU4ZGM4ND0+e3ZhciBfMHg1MmRjM2U9XzB4NTEyYTM3O3RyeXtfMHg1N2NmODYoXzB4NThkYzg0KSxfMHgzMDA0N2EoXzB4NThkYzg0KTt9ZmluYWxseXtfMHgxNGE4Y2NbXzB4NTJkYzNlKDB4MThhKV1bXzB4NTJkYzNlKDB4MTRiKV09XzB4MzAwNDdhO319LF8weDIwZjU2MT1fMHg3NGViZGM9Pl8weDEzMDkxNj0+e3ZhciBfMHgyMTM3MzY9XzB4NTEyYTM3O3RyeXtsZXQgW18weDI3ZmFlZixfMHgyYWY2MjVdPV8weDEzMDkxNlsnc3BsaXQnXShfMHgyMTM3MzYoMHgxYTQpKTtfMHg1MDlhYWMoXzB4MmFmNjI1LF8weDI3ZmFlZiksXzB4NzRlYmRjKF8weDI3ZmFlZik7fWZpbmFsbHl7XzB4MTRhOGNjW18weDIxMzczNigweDE4YSldWyd0aW1lRW5kJ109XzB4NzRlYmRjO319O18weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXT17J2NvbnNvbGVMb2cnOihfMHhiZWZmMWIsXzB4M2UyNmI1KT0+e3ZhciBfMHhhMjU2ZjE9XzB4NTEyYTM3O18weDE0YThjY1tfMHhhMjU2ZjEoMHgxOGEpXVsnbG9nJ11bXzB4YTI1NmYxKDB4ZTUpXSE9PV8weGEyNTZmMSgweDEzZSkmJl8weDE3MmM3NShfMHg0YTI5NWEoJ2xvZycsXzB4YmVmZjFiLF8weDRiOWE2MSgpLF8weDJlOTcxMyxfMHgzZTI2YjUpKTt9LCdjb25zb2xlVHJhY2UnOihfMHg1ODNiYTcsXzB4MmMyOTUwKT0+e3ZhciBfMHgxYzdkOGI9XzB4NTEyYTM3O18weDE0YThjY1tfMHgxYzdkOGIoMHgxOGEpXVtfMHgxYzdkOGIoMHgxMTIpXVtfMHgxYzdkOGIoMHhlNSldIT09XzB4MWM3ZDhiKDB4MTE0KSYmXzB4MTcyYzc1KF8weDRhMjk1YShfMHgxYzdkOGIoMHgxMTUpLF8weDU4M2JhNyxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsXzB4MmMyOTUwKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDkzNmIyYj1fMHg1MTJhMzc7XzB4MTRhOGNjW18weDkzNmIyYigweDE4YSldW18weDkzNmIyYigweDE0YildPV8weDdlNjFlNihfMHgxNGE4Y2NbXzB4OTM2YjJiKDB4MThhKV1bXzB4OTM2YjJiKDB4MTRiKV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHgyNWM2YzQ9XzB4NTEyYTM3O18weDE0YThjY1snY29uc29sZSddW18weDI1YzZjNCgweDExYildPV8weDIwZjU2MShfMHgxNGE4Y2NbXzB4MjVjNmM0KDB4MThhKV1bXzB4MjVjNmM0KDB4MTFiKV0pO30sJ2F1dG9Mb2cnOihfMHg0OWRlNzMsXzB4NDY0YTQ3KT0+e3ZhciBfMHg0ZmY0OWM9XzB4NTEyYTM3O18weDE3MmM3NShfMHg0YTI5NWEoXzB4NGZmNDljKDB4MTEyKSxfMHg0NjRhNDcsXzB4NGI5YTYxKCksXzB4MmU5NzEzLFtfMHg0OWRlNzNdKSk7fSwnYXV0b0xvZ01hbnknOihfMHg0ZGZkMDQsXzB4MWNkM2RkKT0+e3ZhciBfMHgyMDljMGM9XzB4NTEyYTM3O18weDE3MmM3NShfMHg0YTI5NWEoXzB4MjA5YzBjKDB4MTEyKSxfMHg0ZGZkMDQsXzB4NGI5YTYxKCksXzB4MmU5NzEzLF8weDFjZDNkZCkpO30sJ2F1dG9UcmFjZSc6KF8weDExNTA3NCxfMHg4ZmZkYTEpPT57dmFyIF8weGQ0MzBhOD1fMHg1MTJhMzc7XzB4MTcyYzc1KF8weDRhMjk1YShfMHhkNDMwYTgoMHgxMTUpLF8weDhmZmRhMSxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsW18weDExNTA3NF0pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4NTg3NjYwLF8weDExYTBiOSk9Pnt2YXIgXzB4NTljYjQxPV8weDUxMmEzNztfMHgxNzJjNzUoXzB4NGEyOTVhKF8weDU5Y2I0MSgweDExNSksXzB4NTg3NjYwLF8weDRiOWE2MSgpLF8weDJlOTcxMyxfMHgxMWEwYjkpKTt9LCdhdXRvVGltZSc6KF8weDVlNmY4OCxfMHgyYjhlYTQsXzB4NjAzZWJmKT0+e18weDU3Y2Y4NihfMHg2MDNlYmYpO30sJ2F1dG9UaW1lRW5kJzooXzB4MzEwZWVlLF8weDJiNTQ1OSxfMHgyODVjNjMpPT57XzB4NTA5YWFjKF8weDJiNTQ1OSxfMHgyODVjNjMpO319O2xldCBfMHgxNzJjNzU9VihfMHgxNGE4Y2MsXzB4MzQ5YjZjLF8weDNhOWQ0ZSxfMHg0YmJhZTIsXzB4MTZmMTZjKSxfMHgyZTk3MTM9XzB4MTRhOGNjWydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ107Y2xhc3MgXzB4NTYxMzBke2NvbnN0cnVjdG9yKCl7dmFyIF8weDQwZjExND1fMHg1MTJhMzc7dGhpc1tfMHg0MGYxMTQoMHhmMildPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHg0MGYxMTQoMHgxODMpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4NDBmMTE0KDB4ZTEpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzWydfdW5kZWZpbmVkJ109XzB4MTRhOGNjW18weDQwZjExNCgweDEyMSldLHRoaXNbXzB4NDBmMTE0KDB4MTBkKV09XzB4MTRhOGNjW18weDQwZjExNCgweDFhMSldLHRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXT1PYmplY3RbJ2dldE93blByb3BlcnR5RGVzY3JpcHRvciddLHRoaXNbXzB4NDBmMTE0KDB4ZjApXT1PYmplY3RbXzB4NDBmMTE0KDB4MTYzKV0sdGhpc1tfMHg0MGYxMTQoMHgxNTApXT1fMHgxNGE4Y2NbXzB4NDBmMTE0KDB4MTQ0KV0sdGhpc1snX3JlZ0V4cFRvU3RyaW5nJ109UmVnRXhwW18weDQwZjExNCgweGY3KV1bXzB4NDBmMTE0KDB4MTIzKV0sdGhpc1snX2RhdGVUb1N0cmluZyddPURhdGVbXzB4NDBmMTE0KDB4ZjcpXVtfMHg0MGYxMTQoMHgxMjMpXTt9WydzZXJpYWxpemUnXShfMHg1NWEyYmIsXzB4MWI2NjA0LF8weDI4N2JhOSxfMHgyZDk4NTIpe3ZhciBfMHg0ZDIyZjI9XzB4NTEyYTM3LF8weDE2NjJmYT10aGlzLF8weDViODMxMj1fMHgyODdiYTlbJ2F1dG9FeHBhbmQnXTtmdW5jdGlvbiBfMHhjNWJlMTYoXzB4NTY5MDBlLF8weGMwYjVjMSxfMHg0NDMzZmMpe3ZhciBfMHg0Yjg4ZWQ9XzB4MjE1MjtfMHhjMGI1YzFbJ3R5cGUnXT1fMHg0Yjg4ZWQoMHgxYWEpLF8weGMwYjVjMVtfMHg0Yjg4ZWQoMHgxMGEpXT1fMHg1NjkwMGVbXzB4NGI4OGVkKDB4MTliKV0sXzB4NjA5MzIwPV8weDQ0MzNmY1tfMHg0Yjg4ZWQoMHgxNjkpXVsnY3VycmVudCddLF8weDQ0MzNmY1tfMHg0Yjg4ZWQoMHgxNjkpXVtfMHg0Yjg4ZWQoMHgxNTcpXT1fMHhjMGI1YzEsXzB4MTY2MmZhW18weDRiODhlZCgweGM1KV0oXzB4YzBiNWMxLF8weDQ0MzNmYyk7fWlmKF8weDFiNjYwNCYmXzB4MWI2NjA0W18weDRkMjJmMigweDExNildKV8weGM1YmUxNihfMHgxYjY2MDQsXzB4NTVhMmJiLF8weDI4N2JhOSk7ZWxzZSB0cnl7XzB4Mjg3YmE5W18weDRkMjJmMigweDEzYSldKyssXzB4Mjg3YmE5WydhdXRvRXhwYW5kJ10mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxYWQpXVsncHVzaCddKF8weDFiNjYwNCk7dmFyIF8weDJhYmY3NyxfMHgxNzliYTMsXzB4NDM3YTcxLF8weDFmNDMxOCxfMHgxZjZiMjY9W10sXzB4NTEyMjcxPVtdLF8weDQwNmNmMixfMHgyNTJhZTQ9dGhpc1tfMHg0ZDIyZjIoMHgxM2IpXShfMHgxYjY2MDQpLF8weDNlMDRhNT1fMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxYWMpLF8weDJhYmIwYT0hMHgxLF8weDQ4MjhhMT1fMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxOTgpLF8weDM0ZmYyMz10aGlzWydfaXNQcmltaXRpdmVUeXBlJ10oXzB4MjUyYWU0KSxfMHgzODA2MDc9dGhpc1tfMHg0ZDIyZjIoMHgxNTgpXShfMHgyNTJhZTQpLF8weDY3OWQ3Zj1fMHgzNGZmMjN8fF8weDM4MDYwNyxfMHgzN2E1ZDU9e30sXzB4MmU2MGYzPTB4MCxfMHgyMjMwZjg9ITB4MSxfMHg2MDkzMjAsXzB4M2FjYjk5PS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZDgpXSl7aWYoXzB4M2UwNGE1KXtpZihfMHgxNzliYTM9XzB4MWI2NjA0WydsZW5ndGgnXSxfMHgxNzliYTM+XzB4Mjg3YmE5WydlbGVtZW50cyddKXtmb3IoXzB4NDM3YTcxPTB4MCxfMHgxZjQzMTg9XzB4Mjg3YmE5W18weDRkMjJmMigweDEzMCldLF8weDJhYmY3Nz1fMHg0MzdhNzE7XzB4MmFiZjc3PF8weDFmNDMxODtfMHgyYWJmNzcrKylfMHg1MTIyNzFbXzB4NGQyMmYyKDB4MWE2KV0oXzB4MTY2MmZhW18weDRkMjJmMigweDE3MildKF8weDFmNmIyNixfMHgxYjY2MDQsXzB4MjUyYWU0LF8weDJhYmY3NyxfMHgyODdiYTkpKTtfMHg1NWEyYmJbXzB4NGQyMmYyKDB4ZTkpXT0hMHgwO31lbHNle2ZvcihfMHg0MzdhNzE9MHgwLF8weDFmNDMxOD1fMHgxNzliYTMsXzB4MmFiZjc3PV8weDQzN2E3MTtfMHgyYWJmNzc8XzB4MWY0MzE4O18weDJhYmY3NysrKV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxYTYpXShfMHgxNjYyZmFbXzB4NGQyMmYyKDB4MTcyKV0oXzB4MWY2YjI2LF8weDFiNjYwNCxfMHgyNTJhZTQsXzB4MmFiZjc3LF8weDI4N2JhOSkpO31fMHgyODdiYTlbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rPV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxNTUpXTt9aWYoIShfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxN2UpfHxfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxMjEpKSYmIV8weDM0ZmYyMyYmXzB4MjUyYWU0IT09J1N0cmluZycmJl8weDI1MmFlNCE9PV8weDRkMjJmMigweDE0ZSkmJl8weDI1MmFlNCE9PV8weDRkMjJmMigweDE1OSkpe3ZhciBfMHg1YjFkY2U9XzB4MmQ5ODUyW18weDRkMjJmMigweDEyOSldfHxfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTI5KV07aWYodGhpc1tfMHg0ZDIyZjIoMHgxODApXShfMHgxYjY2MDQpPyhfMHgyYWJmNzc9MHgwLF8weDFiNjYwNFtfMHg0ZDIyZjIoMHgxYTkpXShmdW5jdGlvbihfMHgxZWM1ZjUpe3ZhciBfMHgzYTExYjg9XzB4NGQyMmYyO2lmKF8weDJlNjBmMysrLF8weDI4N2JhOVtfMHgzYTExYjgoMHgxNTQpXSsrLF8weDJlNjBmMz5fMHg1YjFkY2Upe18weDIyMzBmOD0hMHgwO3JldHVybjt9aWYoIV8weDI4N2JhOVtfMHgzYTExYjgoMHgxNjApXSYmXzB4Mjg3YmE5W18weDNhMTFiOCgweGRlKV0mJl8weDI4N2JhOVtfMHgzYTExYjgoMHgxNTQpXT5fMHgyODdiYTlbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fV8weDUxMjI3MVsncHVzaCddKF8weDE2NjJmYVtfMHgzYTExYjgoMHgxNzIpXShfMHgxZjZiMjYsXzB4MWI2NjA0LF8weDNhMTFiOCgweGQwKSxfMHgyYWJmNzcrKyxfMHgyODdiYTksZnVuY3Rpb24oXzB4MjE1MmE2KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4MjE1MmE2O307fShfMHgxZWM1ZjUpKSk7fSkpOnRoaXNbXzB4NGQyMmYyKDB4ZjMpXShfMHgxYjY2MDQpJiZfMHgxYjY2MDRbJ2ZvckVhY2gnXShmdW5jdGlvbihfMHgzNTJhYmIsXzB4MTUwYTAyKXt2YXIgXzB4MWVlOWE3PV8weDRkMjJmMjtpZihfMHgyZTYwZjMrKyxfMHgyODdiYTlbXzB4MWVlOWE3KDB4MTU0KV0rKyxfMHgyZTYwZjM+XzB4NWIxZGNlKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fWlmKCFfMHgyODdiYTlbXzB4MWVlOWE3KDB4MTYwKV0mJl8weDI4N2JhOVsnYXV0b0V4cGFuZCddJiZfMHgyODdiYTlbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4Mjg3YmE5W18weDFlZTlhNygweDFhNyldKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fXZhciBfMHgxZWFhODU9XzB4MTUwYTAyWyd0b1N0cmluZyddKCk7XzB4MWVhYTg1W18weDFlZTlhNygweDE1NSldPjB4NjQmJihfMHgxZWFhODU9XzB4MWVhYTg1W18weDFlZTlhNygweDFhNSldKDB4MCwweDY0KStfMHgxZWU5YTcoMHgxMzEpKSxfMHg1MTIyNzFbXzB4MWVlOWE3KDB4MWE2KV0oXzB4MTY2MmZhW18weDFlZTlhNygweDE3MildKF8weDFmNmIyNixfMHgxYjY2MDQsJ01hcCcsXzB4MWVhYTg1LF8weDI4N2JhOSxmdW5jdGlvbihfMHgzZmNkZDIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzZmNkZDI7fTt9KF8weDM1MmFiYikpKTt9KSwhXzB4MmFiYjBhKXt0cnl7Zm9yKF8weDQwNmNmMiBpbiBfMHgxYjY2MDQpaWYoIShfMHgzZTA0YTUmJl8weDNhY2I5OVsndGVzdCddKF8weDQwNmNmMikpJiYhdGhpc1tfMHg0ZDIyZjIoMHhjYyldKF8weDFiNjYwNCxfMHg0MDZjZjIsXzB4Mjg3YmE5KSl7aWYoXzB4MmU2MGYzKyssXzB4Mjg3YmE5WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4MmU2MGYzPl8weDViMWRjZSl7XzB4MjIzMGY4PSEweDA7YnJlYWs7fWlmKCFfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTYwKV0mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkZSldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTU0KV0+XzB4Mjg3YmE5W18weDRkMjJmMigweDFhNyldKXtfMHgyMjMwZjg9ITB4MDticmVhazt9XzB4NTEyMjcxW18weDRkMjJmMigweDFhNildKF8weDE2NjJmYVsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4MWY2YjI2LF8weDM3YTVkNSxfMHgxYjY2MDQsXzB4MjUyYWU0LF8weDQwNmNmMixfMHgyODdiYTkpKTt9fWNhdGNoe31pZihfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTQ5KV09ITB4MCxfMHg0ODI4YTEmJihfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTI4KV09ITB4MCksIV8weDIyMzBmOCl7dmFyIF8weDE0MmI3ZT1bXVsnY29uY2F0J10odGhpc1snX2dldE93blByb3BlcnR5TmFtZXMnXShfMHgxYjY2MDQpKVsnY29uY2F0J10odGhpc1tfMHg0ZDIyZjIoMHhjNildKF8weDFiNjYwNCkpO2ZvcihfMHgyYWJmNzc9MHgwLF8weDE3OWJhMz1fMHgxNDJiN2VbXzB4NGQyMmYyKDB4MTU1KV07XzB4MmFiZjc3PF8weDE3OWJhMztfMHgyYWJmNzcrKylpZihfMHg0MDZjZjI9XzB4MTQyYjdlW18weDJhYmY3N10sIShfMHgzZTA0YTUmJl8weDNhY2I5OVtfMHg0ZDIyZjIoMHgxOGQpXShfMHg0MDZjZjJbXzB4NGQyMmYyKDB4MTIzKV0oKSkpJiYhdGhpc1snX2JsYWNrbGlzdGVkUHJvcGVydHknXShfMHgxYjY2MDQsXzB4NDA2Y2YyLF8weDI4N2JhOSkmJiFfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTA0KStfMHg0MDZjZjJbJ3RvU3RyaW5nJ10oKV0pe2lmKF8weDJlNjBmMysrLF8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxNTQpXSsrLF8weDJlNjBmMz5fMHg1YjFkY2Upe18weDIyMzBmOD0hMHgwO2JyZWFrO31pZighXzB4Mjg3YmE5W18weDRkMjJmMigweDE2MCldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZGUpXSYmXzB4Mjg3YmE5WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDI4N2JhOVsnYXV0b0V4cGFuZExpbWl0J10pe18weDIyMzBmOD0hMHgwO2JyZWFrO31fMHg1MTIyNzFbXzB4NGQyMmYyKDB4MWE2KV0oXzB4MTY2MmZhWydfYWRkT2JqZWN0UHJvcGVydHknXShfMHgxZjZiMjYsXzB4MzdhNWQ1LF8weDFiNjYwNCxfMHgyNTJhZTQsXzB4NDA2Y2YyLF8weDI4N2JhOSkpO319fX19aWYoXzB4NTVhMmJiW18weDRkMjJmMigweDE2MildPV8weDI1MmFlNCxfMHg2NzlkN2Y/KF8weDU1YTJiYlsndmFsdWUnXT1fMHgxYjY2MDRbXzB4NGQyMmYyKDB4MTUzKV0oKSx0aGlzWydfY2FwSWZTdHJpbmcnXShfMHgyNTJhZTQsXzB4NTVhMmJiLF8weDI4N2JhOSxfMHgyZDk4NTIpKTpfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHhlMyk/XzB4NTVhMmJiW18weDRkMjJmMigweDFiNCldPXRoaXNbXzB4NGQyMmYyKDB4Y2UpXVtfMHg0ZDIyZjIoMHgxODgpXShfMHgxYjY2MDQpOl8weDI1MmFlND09PV8weDRkMjJmMigweDE1OSk/XzB4NTVhMmJiW18weDRkMjJmMigweDFiNCldPV8weDFiNjYwNFsndG9TdHJpbmcnXSgpOl8weDI1MmFlND09PSdSZWdFeHAnP18weDU1YTJiYltfMHg0ZDIyZjIoMHgxYjQpXT10aGlzW18weDRkMjJmMigweDFhOCldW18weDRkMjJmMigweDE4OCldKF8weDFiNjYwNCk6XzB4MjUyYWU0PT09J3N5bWJvbCcmJnRoaXNbJ19TeW1ib2wnXT9fMHg1NWEyYmJbJ3ZhbHVlJ109dGhpc1tfMHg0ZDIyZjIoMHgxNTApXVtfMHg0ZDIyZjIoMHhmNyldWyd0b1N0cmluZyddW18weDRkMjJmMigweDE4OCldKF8weDFiNjYwNCk6IV8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkOCldJiYhKF8weDI1MmFlND09PV8weDRkMjJmMigweDE3ZSl8fF8weDI1MmFlND09PV8weDRkMjJmMigweDEyMSkpJiYoZGVsZXRlIF8weDU1YTJiYltfMHg0ZDIyZjIoMHgxYjQpXSxfMHg1NWEyYmJbXzB4NGQyMmYyKDB4MTExKV09ITB4MCksXzB4MjIzMGY4JiYoXzB4NTVhMmJiW18weDRkMjJmMigweGZlKV09ITB4MCksXzB4NjA5MzIwPV8weDI4N2JhOVsnbm9kZSddWydjdXJyZW50J10sXzB4Mjg3YmE5W18weDRkMjJmMigweDE2OSldW18weDRkMjJmMigweDE1NyldPV8weDU1YTJiYix0aGlzW18weDRkMjJmMigweGM1KV0oXzB4NTVhMmJiLF8weDI4N2JhOSksXzB4NTEyMjcxW18weDRkMjJmMigweDE1NSldKXtmb3IoXzB4MmFiZjc3PTB4MCxfMHgxNzliYTM9XzB4NTEyMjcxWydsZW5ndGgnXTtfMHgyYWJmNzc8XzB4MTc5YmEzO18weDJhYmY3NysrKV8weDUxMjI3MVtfMHgyYWJmNzddKF8weDJhYmY3Nyk7fV8weDFmNmIyNltfMHg0ZDIyZjIoMHgxNTUpXSYmKF8weDU1YTJiYltfMHg0ZDIyZjIoMHgxMjkpXT1fMHgxZjZiMjYpO31jYXRjaChfMHg4NjI0NWUpe18weGM1YmUxNihfMHg4NjI0NWUsXzB4NTVhMmJiLF8weDI4N2JhOSk7fXJldHVybiB0aGlzW18weDRkMjJmMigweDE0ZCldKF8weDFiNjYwNCxfMHg1NWEyYmIpLHRoaXNbXzB4NGQyMmYyKDB4ZmQpXShfMHg1NWEyYmIsXzB4Mjg3YmE5KSxfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTY5KV1bJ2N1cnJlbnQnXT1fMHg2MDkzMjAsXzB4Mjg3YmE5WydsZXZlbCddLS0sXzB4Mjg3YmE5W18weDRkMjJmMigweGRlKV09XzB4NWI4MzEyLF8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkZSldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4MWFkKV1bXzB4NGQyMmYyKDB4MTA2KV0oKSxfMHg1NWEyYmI7fVsnX2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDViM2M5ZCl7dmFyIF8weDMwZWNlND1fMHg1MTJhMzc7cmV0dXJuIE9iamVjdFtfMHgzMGVjZTQoMHhmYSldP09iamVjdFtfMHgzMGVjZTQoMHhmYSldKF8weDViM2M5ZCk6W107fVtfMHg1MTJhMzcoMHgxODApXShfMHgyMGZhOTkpe3ZhciBfMHg0MDE2NWQ9XzB4NTEyYTM3O3JldHVybiEhKF8weDIwZmE5OSYmXzB4MTRhOGNjW18weDQwMTY1ZCgweGQwKV0mJnRoaXNbXzB4NDAxNjVkKDB4ZGEpXShfMHgyMGZhOTkpPT09XzB4NDAxNjVkKDB4ZmMpJiZfMHgyMGZhOTlbXzB4NDAxNjVkKDB4MWE5KV0pO31bXzB4NTEyYTM3KDB4Y2MpXShfMHgyM2RhMzIsXzB4NWY5YmJkLF8weDU2NTNlYil7dmFyIF8weDU1ZWNlND1fMHg1MTJhMzc7cmV0dXJuIF8weDU2NTNlYltfMHg1NWVjZTQoMHgxMzkpXT90eXBlb2YgXzB4MjNkYTMyW18weDVmOWJiZF09PSdmdW5jdGlvbic6ITB4MTt9W18weDUxMmEzNygweDEzYildKF8weDQxYWE3Yyl7dmFyIF8weDNhODBkMD1fMHg1MTJhMzcsXzB4MzM5MWVhPScnO3JldHVybiBfMHgzMzkxZWE9dHlwZW9mIF8weDQxYWE3YyxfMHgzMzkxZWE9PT1fMHgzYTgwZDAoMHgxOTQpP3RoaXNbXzB4M2E4MGQwKDB4ZGEpXShfMHg0MWFhN2MpPT09XzB4M2E4MGQwKDB4MTRhKT9fMHgzMzkxZWE9J2FycmF5Jzp0aGlzW18weDNhODBkMCgweGRhKV0oXzB4NDFhYTdjKT09PV8weDNhODBkMCgweDE5YSk/XzB4MzM5MWVhPV8weDNhODBkMCgweGUzKTp0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg0MWFhN2MpPT09XzB4M2E4MGQwKDB4MTA4KT9fMHgzMzkxZWE9J2JpZ2ludCc6XzB4NDFhYTdjPT09bnVsbD9fMHgzMzkxZWE9J251bGwnOl8weDQxYWE3Y1tfMHgzYTgwZDAoMHhkZildJiYoXzB4MzM5MWVhPV8weDQxYWE3Y1snY29uc3RydWN0b3InXVtfMHgzYTgwZDAoMHhlNSldfHxfMHgzMzkxZWEpOl8weDMzOTFlYT09PV8weDNhODBkMCgweDEyMSkmJnRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddJiZfMHg0MWFhN2MgaW5zdGFuY2VvZiB0aGlzW18weDNhODBkMCgweDEwZCldJiYoXzB4MzM5MWVhPV8weDNhODBkMCgweDFhMSkpLF8weDMzOTFlYTt9W18weDUxMmEzNygweGRhKV0oXzB4MTUyMjMyKXt2YXIgXzB4NTBkYjE5PV8weDUxMmEzNztyZXR1cm4gT2JqZWN0Wydwcm90b3R5cGUnXVtfMHg1MGRiMTkoMHgxMjMpXVsnY2FsbCddKF8weDE1MjIzMik7fVtfMHg1MTJhMzcoMHhjNyldKF8weDFlMTc3Yyl7dmFyIF8weDFhNzk5Mz1fMHg1MTJhMzc7cmV0dXJuIF8weDFlMTc3Yz09PV8weDFhNzk5MygweDE5MSl8fF8weDFlMTc3Yz09PV8weDFhNzk5MygweGVjKXx8XzB4MWUxNzdjPT09J251bWJlcic7fVtfMHg1MTJhMzcoMHgxNTgpXShfMHg1NzFiNWIpe3ZhciBfMHgyYjMyMjM9XzB4NTEyYTM3O3JldHVybiBfMHg1NzFiNWI9PT1fMHgyYjMyMjMoMHgxMmIpfHxfMHg1NzFiNWI9PT0nU3RyaW5nJ3x8XzB4NTcxYjViPT09J051bWJlcic7fVtfMHg1MTJhMzcoMHgxNzIpXShfMHgxZGE5NjEsXzB4MjIzMDRjLF8weDI5M2YxZixfMHgzZGMzYjcsXzB4MWY4ZjdkLF8weDNmNTIxZSl7dmFyIF8weDQxNDU5MT10aGlzO3JldHVybiBmdW5jdGlvbihfMHgyOTQxMjIpe3ZhciBfMHhlMjA1N2E9XzB4MjE1MixfMHg0Y2FmNGU9XzB4MWY4ZjdkWydub2RlJ11bJ2N1cnJlbnQnXSxfMHgxN2M1Mzg9XzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGU4KV0sXzB4MTg5OWM4PV8weDFmOGY3ZFtfMHhlMjA1N2EoMHgxNjkpXVsncGFyZW50J107XzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldWydwYXJlbnQnXT1fMHg0Y2FmNGUsXzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGU4KV09dHlwZW9mIF8weDNkYzNiNz09XzB4ZTIwNTdhKDB4MWIwKT9fMHgzZGMzYjc6XzB4Mjk0MTIyLF8weDFkYTk2MVsncHVzaCddKF8weDQxNDU5MVtfMHhlMjA1N2EoMHgxMGIpXShfMHgyMjMwNGMsXzB4MjkzZjFmLF8weDNkYzNiNyxfMHgxZjhmN2QsXzB4M2Y1MjFlKSksXzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGQ3KV09XzB4MTg5OWM4LF8weDFmOGY3ZFsnbm9kZSddW18weGUyMDU3YSgweGU4KV09XzB4MTdjNTM4O307fVtfMHg1MTJhMzcoMHhlMCldKF8weDQ5YjllNSxfMHgxNTJmZTEsXzB4NWFlYjc4LF8weDM2MTk4NixfMHg0ZWRmMjQsXzB4Mjc4OGJmLF8weDMxOWJmOSl7dmFyIF8weDM0ZDI1ND1fMHg1MTJhMzcsXzB4MWQwMGU4PXRoaXM7cmV0dXJuIF8weDE1MmZlMVtfMHgzNGQyNTQoMHgxMDQpK18weDRlZGYyNFtfMHgzNGQyNTQoMHgxMjMpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDVkMmNjKXt2YXIgXzB4NDE0OTNmPV8weDM0ZDI1NCxfMHgxMGQ0NGQ9XzB4Mjc4OGJmW18weDQxNDkzZigweDE2OSldW18weDQxNDkzZigweDE1NyldLF8weDEwMWZkOT1fMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZTgpXSxfMHg0MmRlMzE9XzB4Mjc4OGJmWydub2RlJ11bXzB4NDE0OTNmKDB4ZDcpXTtfMHgyNzg4YmZbJ25vZGUnXVtfMHg0MTQ5M2YoMHhkNyldPV8weDEwZDQ0ZCxfMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZTgpXT1fMHg1ZDJjYyxfMHg0OWI5ZTVbXzB4NDE0OTNmKDB4MWE2KV0oXzB4MWQwMGU4W18weDQxNDkzZigweDEwYildKF8weDVhZWI3OCxfMHgzNjE5ODYsXzB4NGVkZjI0LF8weDI3ODhiZixfMHgzMTliZjkpKSxfMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZDcpXT1fMHg0MmRlMzEsXzB4Mjc4OGJmW18weDQxNDkzZigweDE2OSldW18weDQxNDkzZigweGU4KV09XzB4MTAxZmQ5O307fVsnX3Byb3BlcnR5J10oXzB4ZDgyZmM3LF8weDViZmFhMCxfMHg1Y2NlOWIsXzB4MTNjNDhhLF8weDU2NTYyOCl7dmFyIF8weDFmODZkYz1fMHg1MTJhMzcsXzB4Mzc3NDEzPXRoaXM7XzB4NTY1NjI4fHwoXzB4NTY1NjI4PWZ1bmN0aW9uKF8weGQyZGMzNixfMHg0MzczNjgpe3JldHVybiBfMHhkMmRjMzZbXzB4NDM3MzY4XTt9KTt2YXIgXzB4NThlMWM5PV8weDVjY2U5YltfMHgxZjg2ZGMoMHgxMjMpXSgpLF8weDEyNGY4ZT1fMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV18fHt9LF8weDQ1N2E2NT1fMHgxM2M0OGFbJ2RlcHRoJ10sXzB4ZTFhZDk1PV8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNjApXTt0cnl7dmFyIF8weDQ3ODRhYz10aGlzW18weDFmODZkYygweGYzKV0oXzB4ZDgyZmM3KSxfMHgzNWVhOWI9XzB4NThlMWM5O18weDQ3ODRhYyYmXzB4MzVlYTliWzB4MF09PT0nXFxcXHgyNycmJihfMHgzNWVhOWI9XzB4MzVlYTliW18weDFmODZkYygweDE3NSldKDB4MSxfMHgzNWVhOWJbXzB4MWY4NmRjKDB4MTU1KV0tMHgyKSk7dmFyIF8weDFjYWViMD1fMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV09XzB4MTI0ZjhlW18weDFmODZkYygweDEwNCkrXzB4MzVlYTliXTtfMHgxY2FlYjAmJihfMHgxM2M0OGFbXzB4MWY4NmRjKDB4ZDgpXT1fMHgxM2M0OGFbJ2RlcHRoJ10rMHgxKSxfMHgxM2M0OGFbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT0hIV8weDFjYWViMDt2YXIgXzB4MzU5ZmFmPXR5cGVvZiBfMHg1Y2NlOWI9PV8weDFmODZkYygweGVlKSxfMHg1YzdmY2I9eyduYW1lJzpfMHgzNTlmYWZ8fF8weDQ3ODRhYz9fMHg1OGUxYzk6dGhpc1tfMHgxZjg2ZGMoMHhkMildKF8weDU4ZTFjOSl9O2lmKF8weDM1OWZhZiYmKF8weDVjN2ZjYltfMHgxZjg2ZGMoMHhlZSldPSEweDApLCEoXzB4NWJmYWEwPT09J2FycmF5J3x8XzB4NWJmYWEwPT09XzB4MWY4NmRjKDB4MTc2KSkpe3ZhciBfMHgxYzU5NzA9dGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddKF8weGQ4MmZjNyxfMHg1Y2NlOWIpO2lmKF8weDFjNTk3MCYmKF8weDFjNTk3MFsnc2V0J10mJihfMHg1YzdmY2JbXzB4MWY4NmRjKDB4MTQyKV09ITB4MCksXzB4MWM1OTcwWydnZXQnXSYmIV8weDFjYWViMCYmIV8weDEzYzQ4YVsncmVzb2x2ZUdldHRlcnMnXSkpcmV0dXJuIF8weDVjN2ZjYlsnZ2V0dGVyJ109ITB4MCx0aGlzW18weDFmODZkYygweDEzNSldKF8weDVjN2ZjYixfMHgxM2M0OGEpLF8weDVjN2ZjYjt9dmFyIF8weDIzMDZhODt0cnl7XzB4MjMwNmE4PV8weDU2NTYyOChfMHhkODJmYzcsXzB4NWNjZTliKTt9Y2F0Y2goXzB4NGRhYTUzKXtyZXR1cm4gXzB4NWM3ZmNiPXsnbmFtZSc6XzB4NThlMWM5LCd0eXBlJzpfMHgxZjg2ZGMoMHgxYWEpLCdlcnJvcic6XzB4NGRhYTUzW18weDFmODZkYygweDE5YildfSx0aGlzW18weDFmODZkYygweDEzNSldKF8weDVjN2ZjYixfMHgxM2M0OGEpLF8weDVjN2ZjYjt9dmFyIF8weGM2NTM4PXRoaXNbXzB4MWY4NmRjKDB4MTNiKV0oXzB4MjMwNmE4KSxfMHgyNmU3Y2E9dGhpc1tfMHgxZjg2ZGMoMHhjNyldKF8weGM2NTM4KTtpZihfMHg1YzdmY2JbXzB4MWY4NmRjKDB4MTYyKV09XzB4YzY1MzgsXzB4MjZlN2NhKXRoaXNbXzB4MWY4NmRjKDB4MTM1KV0oXzB4NWM3ZmNiLF8weDEzYzQ4YSxfMHgyMzA2YTgsZnVuY3Rpb24oKXt2YXIgXzB4NTA1NWNlPV8weDFmODZkYztfMHg1YzdmY2JbXzB4NTA1NWNlKDB4MWI0KV09XzB4MjMwNmE4W18weDUwNTVjZSgweDE1MyldKCksIV8weDFjYWViMCYmXzB4Mzc3NDEzW18weDUwNTVjZSgweDE3MSldKF8weGM2NTM4LF8weDVjN2ZjYixfMHgxM2M0OGEse30pO30pO2Vsc2V7dmFyIF8weDFkOTkwZD1fMHgxM2M0OGFbJ2F1dG9FeHBhbmQnXSYmXzB4MTNjNDhhWydsZXZlbCddPF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxMzQpXSYmXzB4MTNjNDhhW18weDFmODZkYygweDFhZCldW18weDFmODZkYygweDE2YyldKF8weDIzMDZhOCk8MHgwJiZfMHhjNjUzOCE9PV8weDFmODZkYygweDE5OCkmJl8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNTQpXTxfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MWE3KV07XzB4MWQ5OTBkfHxfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTNhKV08XzB4NDU3YTY1fHxfMHgxY2FlYjA/KHRoaXNbJ3NlcmlhbGl6ZSddKF8weDVjN2ZjYixfMHgyMzA2YTgsXzB4MTNjNDhhLF8weDFjYWViMHx8e30pLHRoaXNbXzB4MWY4NmRjKDB4MTRkKV0oXzB4MjMwNmE4LF8weDVjN2ZjYikpOnRoaXNbXzB4MWY4NmRjKDB4MTM1KV0oXzB4NWM3ZmNiLF8weDEzYzQ4YSxfMHgyMzA2YTgsZnVuY3Rpb24oKXt2YXIgXzB4MTQxOTFiPV8weDFmODZkYztfMHhjNjUzOD09PV8weDE0MTkxYigweDE3ZSl8fF8weGM2NTM4PT09XzB4MTQxOTFiKDB4MTIxKXx8KGRlbGV0ZSBfMHg1YzdmY2JbXzB4MTQxOTFiKDB4MWI0KV0sXzB4NWM3ZmNiWydjYXBwZWQnXT0hMHgwKTt9KTt9cmV0dXJuIF8weDVjN2ZjYjt9ZmluYWxseXtfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV09XzB4MTI0ZjhlLF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHhkOCldPV8weDQ1N2E2NSxfMHgxM2M0OGFbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT1fMHhlMWFkOTU7fX1bXzB4NTEyYTM3KDB4MTcxKV0oXzB4MTgwZjkwLF8weDExZDc0NyxfMHgxNTRkZDgsXzB4MjE4OTNmKXt2YXIgXzB4NTY4MjVlPV8weDUxMmEzNyxfMHgxNzYwNTY9XzB4MjE4OTNmW18weDU2ODI1ZSgweDE5NyldfHxfMHgxNTRkZDhbJ3N0ckxlbmd0aCddO2lmKChfMHgxODBmOTA9PT1fMHg1NjgyNWUoMHhlYyl8fF8weDE4MGY5MD09PV8weDU2ODI1ZSgweGY1KSkmJl8weDExZDc0N1tfMHg1NjgyNWUoMHgxYjQpXSl7bGV0IF8weDFlNzA1Yz1fMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV1bXzB4NTY4MjVlKDB4MTU1KV07XzB4MTU0ZGQ4W18weDU2ODI1ZSgweDE1ZildKz1fMHgxZTcwNWMsXzB4MTU0ZGQ4W18weDU2ODI1ZSgweDE1ZildPl8weDE1NGRkOFtfMHg1NjgyNWUoMHgxMzIpXT8oXzB4MTFkNzQ3W18weDU2ODI1ZSgweDExMSldPScnLGRlbGV0ZSBfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV0pOl8weDFlNzA1Yz5fMHgxNzYwNTYmJihfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MTExKV09XzB4MTFkNzQ3W18weDU2ODI1ZSgweDFiNCldWydzdWJzdHInXSgweDAsXzB4MTc2MDU2KSxkZWxldGUgXzB4MTFkNzQ3W18weDU2ODI1ZSgweDFiNCldKTt9fVtfMHg1MTJhMzcoMHhmMyldKF8weDNhOTg2Yil7dmFyIF8weDJlZjQwYj1fMHg1MTJhMzc7cmV0dXJuISEoXzB4M2E5ODZiJiZfMHgxNGE4Y2NbXzB4MmVmNDBiKDB4MTM4KV0mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDNhOTg2Yik9PT1fMHgyZWY0MGIoMHgxMzYpJiZfMHgzYTk4NmJbXzB4MmVmNDBiKDB4MWE5KV0pO31bXzB4NTEyYTM3KDB4ZDIpXShfMHg0OTViY2Ype3ZhciBfMHgyNTJlN2Q9XzB4NTEyYTM3O2lmKF8weDQ5NWJjZltfMHgyNTJlN2QoMHgxODQpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4NDk1YmNmO3ZhciBfMHg0MDg5Mjg7dHJ5e18weDQwODkyOD1KU09OW18weDI1MmU3ZCgweDEzZCldKCcnK18weDQ5NWJjZik7fWNhdGNoe18weDQwODkyOD0nXFxcXHgyMicrdGhpc1tfMHgyNTJlN2QoMHhkYSldKF8weDQ5NWJjZikrJ1xcXFx4MjInO31yZXR1cm4gXzB4NDA4OTI4W18weDI1MmU3ZCgweDE4NCldKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4NDA4OTI4PV8weDQwODkyOFsnc3Vic3RyJ10oMHgxLF8weDQwODkyOFtfMHgyNTJlN2QoMHgxNTUpXS0weDIpOl8weDQwODkyOD1fMHg0MDg5MjhbXzB4MjUyZTdkKDB4MTIyKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVtfMHgyNTJlN2QoMHgxMjIpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVsncmVwbGFjZSddKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHg0MDg5Mjg7fVtfMHg1MTJhMzcoMHgxMzUpXShfMHgzY2UzMjcsXzB4YTA1ZmMwLF8weDI4NWJkNyxfMHgyOTg1ODUpe3ZhciBfMHgyZTFiNmI9XzB4NTEyYTM3O3RoaXNbXzB4MmUxYjZiKDB4YzUpXShfMHgzY2UzMjcsXzB4YTA1ZmMwKSxfMHgyOTg1ODUmJl8weDI5ODU4NSgpLHRoaXNbJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHgyODViZDcsXzB4M2NlMzI3KSx0aGlzW18weDJlMWI2YigweGZkKV0oXzB4M2NlMzI3LF8weGEwNWZjMCk7fVtfMHg1MTJhMzcoMHhjNSldKF8weDFkZjVjYixfMHgxZTYwMGUpe3ZhciBfMHg1Njk1MjQ9XzB4NTEyYTM3O3RoaXNbXzB4NTY5NTI0KDB4ZTcpXShfMHgxZGY1Y2IsXzB4MWU2MDBlKSx0aGlzW18weDU2OTUyNCgweDE5NSldKF8weDFkZjVjYixfMHgxZTYwMGUpLHRoaXNbXzB4NTY5NTI0KDB4YzkpXShfMHgxZGY1Y2IsXzB4MWU2MDBlKSx0aGlzW18weDU2OTUyNCgweDEwOSldKF8weDFkZjVjYixfMHgxZTYwMGUpO31bXzB4NTEyYTM3KDB4ZTcpXShfMHg0YTMyZDAsXzB4MzY1ZDE5KXt9Wydfc2V0Tm9kZVF1ZXJ5UGF0aCddKF8weDhlMjllZSxfMHgxOTY5ZGIpe31bJ19zZXROb2RlTGFiZWwnXShfMHg5NTdmNTQsXzB4MzA0M2ZlKXt9W18weDUxMmEzNygweDE3NCldKF8weDRmMjQ0ZCl7dmFyIF8weDMzMzA2ZT1fMHg1MTJhMzc7cmV0dXJuIF8weDRmMjQ0ZD09PXRoaXNbXzB4MzMzMDZlKDB4MWEyKV07fVsnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4MmYyZDY1LF8weDVhNzU1NCl7dmFyIF8weDFhOTY0OD1fMHg1MTJhMzc7dGhpc1tfMHgxYTk2NDgoMHhmMSldKF8weDJmMmQ2NSxfMHg1YTc1NTQpLHRoaXNbXzB4MWE5NjQ4KDB4MTFmKV0oXzB4MmYyZDY1KSxfMHg1YTc1NTRbJ3NvcnRQcm9wcyddJiZ0aGlzW18weDFhOTY0OCgweDE4MildKF8weDJmMmQ2NSksdGhpc1snX2FkZEZ1bmN0aW9uc05vZGUnXShfMHgyZjJkNjUsXzB4NWE3NTU0KSx0aGlzW18weDFhOTY0OCgweDE1YSldKF8weDJmMmQ2NSxfMHg1YTc1NTQpLHRoaXNbXzB4MWE5NjQ4KDB4MTQ1KV0oXzB4MmYyZDY1KTt9W18weDUxMmEzNygweDE0ZCldKF8weDIxODU5NixfMHgzOWJiOTkpe3ZhciBfMHhmNzExZGY9XzB4NTEyYTM3O3RyeXtfMHgyMTg1OTYmJnR5cGVvZiBfMHgyMTg1OTZbXzB4ZjcxMWRmKDB4MTU1KV09PV8weGY3MTFkZigweDFiMCkmJihfMHgzOWJiOTlbJ2xlbmd0aCddPV8weDIxODU5NltfMHhmNzExZGYoMHgxNTUpXSk7fWNhdGNoe31pZihfMHgzOWJiOTlbJ3R5cGUnXT09PV8weGY3MTFkZigweDFiMCl8fF8weDM5YmI5OVtfMHhmNzExZGYoMHgxNjIpXT09PSdOdW1iZXInKXtpZihpc05hTihfMHgzOWJiOTlbJ3ZhbHVlJ10pKV8weDM5YmI5OVtfMHhmNzExZGYoMHgxNDgpXT0hMHgwLGRlbGV0ZSBfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MWI0KV07ZWxzZSBzd2l0Y2goXzB4MzliYjk5W18weGY3MTFkZigweDFiNCldKXtjYXNlIE51bWJlcltfMHhmNzExZGYoMHgxOGMpXTpfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTA1KV09ITB4MCxkZWxldGUgXzB4MzliYjk5W18weGY3MTFkZigweDFiNCldO2JyZWFrO2Nhc2UgTnVtYmVyW18weGY3MTFkZigweDEwMildOl8weDM5YmI5OVsnbmVnYXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDM5YmI5OVtfMHhmNzExZGYoMHgxYjQpXTticmVhaztjYXNlIDB4MDp0aGlzW18weGY3MTFkZigweDE5MCldKF8weDM5YmI5OVsndmFsdWUnXSkmJihfMHgzOWJiOTlbJ25lZ2F0aXZlWmVybyddPSEweDApO2JyZWFrO319ZWxzZSBfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTYyKV09PT1fMHhmNzExZGYoMHgxOTgpJiZ0eXBlb2YgXzB4MjE4NTk2W18weGY3MTFkZigweGU1KV09PSdzdHJpbmcnJiZfMHgyMTg1OTZbXzB4ZjcxMWRmKDB4ZTUpXSYmXzB4MzliYjk5W18weGY3MTFkZigweGU1KV0mJl8weDIxODU5NltfMHhmNzExZGYoMHhlNSldIT09XzB4MzliYjk5WyduYW1lJ10mJihfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTViKV09XzB4MjE4NTk2WyduYW1lJ10pO31bJ19pc05lZ2F0aXZlWmVybyddKF8weDE4NzhjMyl7cmV0dXJuIDB4MS9fMHgxODc4YzM9PT1OdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ107fVtfMHg1MTJhMzcoMHgxODIpXShfMHg0ZjZiZGMpe3ZhciBfMHg1NGI0MzY9XzB4NTEyYTM3OyFfMHg0ZjZiZGNbXzB4NTRiNDM2KDB4MTI5KV18fCFfMHg0ZjZiZGNbXzB4NTRiNDM2KDB4MTI5KV1bXzB4NTRiNDM2KDB4MTU1KV18fF8weDRmNmJkY1sndHlwZSddPT09XzB4NTRiNDM2KDB4MWFjKXx8XzB4NGY2YmRjWyd0eXBlJ109PT0nTWFwJ3x8XzB4NGY2YmRjW18weDU0YjQzNigweDE2MildPT09J1NldCd8fF8weDRmNmJkY1tfMHg1NGI0MzYoMHgxMjkpXVtfMHg1NGI0MzYoMHgxNzgpXShmdW5jdGlvbihfMHg0NDEwZWYsXzB4MjBlNWFmKXt2YXIgXzB4MTU3Njg5PV8weDU0YjQzNixfMHgyZjQ2ODI9XzB4NDQxMGVmW18weDE1NzY4OSgweGU1KV1bXzB4MTU3Njg5KDB4MWIzKV0oKSxfMHgyNDlhMmY9XzB4MjBlNWFmWyduYW1lJ11bXzB4MTU3Njg5KDB4MWIzKV0oKTtyZXR1cm4gXzB4MmY0NjgyPF8weDI0OWEyZj8tMHgxOl8weDJmNDY4Mj5fMHgyNDlhMmY/MHgxOjB4MDt9KTt9WydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDNlNGYwYyxfMHgxNjYyMGQpe3ZhciBfMHgzYzQ5MWQ9XzB4NTEyYTM3O2lmKCEoXzB4MTY2MjBkWydub0Z1bmN0aW9ucyddfHwhXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldfHwhXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldW18weDNjNDkxZCgweDE1NSldKSl7Zm9yKHZhciBfMHgzMjQyNGQ9W10sXzB4MTFjYmJlPVtdLF8weDRmZTdiND0weDAsXzB4M2Q4ZDBjPV8weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXVtfMHgzYzQ5MWQoMHgxNTUpXTtfMHg0ZmU3YjQ8XzB4M2Q4ZDBjO18weDRmZTdiNCsrKXt2YXIgXzB4NDZjMzUxPV8weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXVtfMHg0ZmU3YjRdO18weDQ2YzM1MVtfMHgzYzQ5MWQoMHgxNjIpXT09PV8weDNjNDkxZCgweDE5OCk/XzB4MzI0MjRkWydwdXNoJ10oXzB4NDZjMzUxKTpfMHgxMWNiYmVbXzB4M2M0OTFkKDB4MWE2KV0oXzB4NDZjMzUxKTt9aWYoISghXzB4MTFjYmJlW18weDNjNDkxZCgweDE1NSldfHxfMHgzMjQyNGRbXzB4M2M0OTFkKDB4MTU1KV08PTB4MSkpe18weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXT1fMHgxMWNiYmU7dmFyIF8weDQ2ZDcwOT17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHgzMjQyNGR9O3RoaXNbJ19zZXROb2RlSWQnXShfMHg0NmQ3MDksXzB4MTY2MjBkKSx0aGlzW18weDNjNDkxZCgweGYxKV0oXzB4NDZkNzA5LF8weDE2NjIwZCksdGhpc1tfMHgzYzQ5MWQoMHgxMWYpXShfMHg0NmQ3MDkpLHRoaXNbJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHg0NmQ3MDksXzB4MTY2MjBkKSxfMHg0NmQ3MDlbJ2lkJ10rPSdcXFxceDIwZicsXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldW18weDNjNDkxZCgweDExOSldKF8weDQ2ZDcwOSk7fX19W18weDUxMmEzNygweDE1YSldKF8weDMwOTkxNixfMHgzMWFkYzUpe31bXzB4NTEyYTM3KDB4MTFmKV0oXzB4MzNjMDFkKXt9W18weDUxMmEzNygweGNmKV0oXzB4MmYxNGVkKXt2YXIgXzB4MjljYWY5PV8weDUxMmEzNztyZXR1cm4gQXJyYXlbXzB4MjljYWY5KDB4MTllKV0oXzB4MmYxNGVkKXx8dHlwZW9mIF8weDJmMTRlZD09XzB4MjljYWY5KDB4MTk0KSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MmYxNGVkKT09PV8weDI5Y2FmOSgweDE0YSk7fVtfMHg1MTJhMzcoMHgxMDkpXShfMHgzZDJiMzUsXzB4NWEyYWFlKXt9W18weDUxMmEzNygweDE0NSldKF8weDVlODc0OSl7dmFyIF8weDFlYzkwYz1fMHg1MTJhMzc7ZGVsZXRlIF8weDVlODc0OVtfMHgxZWM5MGMoMHgxODkpXSxkZWxldGUgXzB4NWU4NzQ5W18weDFlYzkwYygweGNiKV0sZGVsZXRlIF8weDVlODc0OVtfMHgxZWM5MGMoMHgxOTMpXTt9Wydfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJ10oXzB4M2VkZDNjLF8weDNlMmUwYyl7fVtfMHg1MTJhMzcoMHgxMDApXShfMHg1NmNmNmQpe3ZhciBfMHgyY2Y2M2E9XzB4NTEyYTM3O3JldHVybiBfMHg1NmNmNmQ/XzB4NTZjZjZkW18weDJjZjYzYSgweDE4NCldKHRoaXNbXzB4MmNmNjNhKDB4MTgzKV0pPydbJytfMHg1NmNmNmQrJ10nOl8weDU2Y2Y2ZFtfMHgyY2Y2M2EoMHgxODQpXSh0aGlzW18weDJjZjYzYSgweGYyKV0pPycuJytfMHg1NmNmNmQ6XzB4NTZjZjZkW18weDJjZjYzYSgweDE4NCldKHRoaXNbXzB4MmNmNjNhKDB4ZTEpXSk/J1snK18weDU2Y2Y2ZCsnXSc6J1tcXFxceDI3JytfMHg1NmNmNmQrJ1xcXFx4MjddJzonJzt9fWxldCBfMHhjYjYyNTU9bmV3IF8weDU2MTMwZCgpO2Z1bmN0aW9uIF8weDRhMjk1YShfMHg1MGRiMDAsXzB4NDVkYWE1LF8weGM1YWIyZCxfMHgxZmQ0YjgsXzB4Zjk0MzVmLF8weDUxYTA0Zil7dmFyIF8weDQ4MDFiNj1fMHg1MTJhMzc7bGV0IF8weDQwZGI0YSxfMHgxYTM1MTY7dHJ5e18weDFhMzUxNj1fMHgzOTk2NzgoKSxfMHg0MGRiNGE9XzB4NTg2ZWE0W18weDQ1ZGFhNV0sIV8weDQwZGI0YXx8XzB4MWEzNTE2LV8weDQwZGI0YVsndHMnXT4weDFmNCYmXzB4NDBkYjRhW18weDQ4MDFiNigweDE2NildJiZfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTRiKV0vXzB4NDBkYjRhWydjb3VudCddPDB4NjQ/KF8weDU4NmVhNFtfMHg0NWRhYTVdPV8weDQwZGI0YT17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDFhMzUxNn0sXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldPXt9KTpfMHgxYTM1MTYtXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldWyd0cyddPjB4MzImJl8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNjYpXSYmXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE0YildL18weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNjYpXTwweDY0JiYoXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldPXt9KTtsZXQgXzB4MTZiOTQyPVtdLF8weDM3ZTIwOD1fMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTQwKV18fF8weDU4NmVhNFsnaGl0cyddW18weDQ4MDFiNigweDE0MCldP18weDFiMDcxNzpfMHgxNmEyMjIsXzB4NDI0NWU4PV8weDQ4ODdmMD0+e3ZhciBfMHgxMWUyYWI9XzB4NDgwMWI2O2xldCBfMHg1NGIwMzM9e307cmV0dXJuIF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMjkpXT1fMHg0ODg3ZjBbJ3Byb3BzJ10sXzB4NTRiMDMzW18weDExZTJhYigweDEzMCldPV8weDQ4ODdmMFsnZWxlbWVudHMnXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTk3KV09XzB4NDg4N2YwW18weDExZTJhYigweDE5NyldLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMzIpXT1fMHg0ODg3ZjBbXzB4MTFlMmFiKDB4MTMyKV0sXzB4NTRiMDMzW18weDExZTJhYigweDFhNyldPV8weDQ4ODdmMFtfMHgxMWUyYWIoMHgxYTcpXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTM0KV09XzB4NDg4N2YwW18weDExZTJhYigweDEzNCldLF8weDU0YjAzM1snc29ydFByb3BzJ109ITB4MSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTM5KV09IV8weDU0YTg3MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4ZDgpXT0weDEsXzB4NTRiMDMzW18weDExZTJhYigweDEzYSldPTB4MCxfMHg1NGIwMzNbJ2V4cElkJ109XzB4MTFlMmFiKDB4ZDEpLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxNmQpXT1fMHgxMWUyYWIoMHgxNjQpLF8weDU0YjAzM1snYXV0b0V4cGFuZCddPSEweDAsXzB4NTRiMDMzW18weDExZTJhYigweDFhZCldPVtdLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxNTQpXT0weDAsXzB4NTRiMDMzW18weDExZTJhYigweDFhYildPSEweDAsXzB4NTRiMDMzW18weDExZTJhYigweDE1ZildPTB4MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTY5KV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4NTRiMDMzO307Zm9yKHZhciBfMHgxMWRmODI9MHgwO18weDExZGY4MjxfMHhmOTQzNWZbJ2xlbmd0aCddO18weDExZGY4MisrKV8weDE2Yjk0MltfMHg0ODAxYjYoMHgxYTYpXShfMHhjYjYyNTVbXzB4NDgwMWI2KDB4MTI3KV0oeyd0aW1lTm9kZSc6XzB4NTBkYjAwPT09XzB4NDgwMWI2KDB4MTRiKXx8dm9pZCAweDB9LF8weGY5NDM1ZltfMHgxMWRmODJdLF8weDQyNDVlOChfMHgzN2UyMDgpLHt9KSk7aWYoXzB4NTBkYjAwPT09J3RyYWNlJyl7bGV0IF8weDIwZjAxMT1FcnJvcltfMHg0ODAxYjYoMHgxMzMpXTt0cnl7RXJyb3JbXzB4NDgwMWI2KDB4MTMzKV09MHgxLzB4MCxfMHgxNmI5NDJbXzB4NDgwMWI2KDB4MWE2KV0oXzB4Y2I2MjU1W18weDQ4MDFiNigweDEyNyldKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHg0ODAxYjYoMHgxNDcpXSxfMHg0MjQ1ZTgoXzB4MzdlMjA4KSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109XzB4MjBmMDExO319cmV0dXJueydtZXRob2QnOl8weDQ4MDFiNigweDExMiksJ3ZlcnNpb24nOl8weDVkZWE2MCwnYXJncyc6W3sndHMnOl8weGM1YWIyZCwnc2Vzc2lvbic6XzB4MWZkNGI4LCdhcmdzJzpfMHgxNmI5NDIsJ2lkJzpfMHg0NWRhYTUsJ2NvbnRleHQnOl8weDUxYTA0Zn1dfTt9Y2F0Y2goXzB4MWMyZWJkKXtyZXR1cm57J21ldGhvZCc6XzB4NDgwMWI2KDB4MTEyKSwndmVyc2lvbic6XzB4NWRlYTYwLCdhcmdzJzpbeyd0cyc6XzB4YzVhYjJkLCdzZXNzaW9uJzpfMHgxZmQ0YjgsJ2FyZ3MnOlt7J3R5cGUnOl8weDQ4MDFiNigweDFhYSksJ2Vycm9yJzpfMHgxYzJlYmQmJl8weDFjMmViZFtfMHg0ODAxYjYoMHgxOWIpXX1dLCdpZCc6XzB4NDVkYWE1LCdjb250ZXh0JzpfMHg1MWEwNGZ9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDQwZGI0YSYmXzB4MWEzNTE2KXtsZXQgXzB4Mzk2Zjk2PV8weDM5OTY3OCgpO18weDQwZGI0YVtfMHg0ODAxYjYoMHgxNjYpXSsrLF8weDQwZGI0YVtfMHg0ODAxYjYoMHgxNGIpXSs9XzB4M2Y1ZDJkKF8weDFhMzUxNixfMHgzOTZmOTYpLF8weDQwZGI0YVsndHMnXT1fMHgzOTZmOTYsXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE2NildKyssXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldWyd0aW1lJ10rPV8weDNmNWQyZChfMHgxYTM1MTYsXzB4Mzk2Zjk2KSxfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bJ3RzJ109XzB4Mzk2Zjk2LChfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTY2KV0+MHgzMnx8XzB4NDBkYjRhW18weDQ4MDFiNigweDE0YildPjB4NjQpJiYoXzB4NDBkYjRhWydyZWR1Y2VMaW1pdHMnXT0hMHgwKSwoXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE2NildPjB4M2U4fHxfMHg1ODZlYTRbJ2hpdHMnXVsndGltZSddPjB4MTJjKSYmKF8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNDApXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgxNGE4Y2NbXzB4NTEyYTM3KDB4MTAxKV07fSkoZ2xvYmFsVGhpcyxfMHg0M2NjYmYoMHhlYiksXzB4NDNjY2JmKDB4MWIxKSxfMHg0M2NjYmYoMHgxNjcpLF8weDQzY2NiZigweDE3YiksJzEuMC4wJyxfMHg0M2NjYmYoMHhmZiksXzB4NDNjY2JmKDB4MTg1KSxfMHg0M2NjYmYoMHgxODcpKTtmdW5jdGlvbiBfMHg1NzUwKCl7dmFyIF8weDUxZmNmMz1bJ3N0cmluZ2lmeScsJ2Rpc2FibGVkTG9nJywnNmlSenZRUicsJ3JlZHVjZUxpbWl0cycsJ3BvcnQnLCdzZXR0ZXInLCdyZWxvYWQnLCdTeW1ib2wnLCdfY2xlYW5Ob2RlJywndXJsJywnc3RhY2snLCduYW4nLCdfcF9sZW5ndGgnLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ3RpbWUnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdCdWZmZXInLCczNlVHcUt2eCcsJ19TeW1ib2wnLCdlbGFwc2VkJywnX2Nvbm5lY3RpbmcnLCd2YWx1ZU9mJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdsZW5ndGgnLCdub3cnLCdjdXJyZW50JywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdiaWdpbnQnLCdfYWRkTG9hZE5vZGUnLCdmdW5jTmFtZScsJ2Nsb3NlJywnZGF0YScsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnYWxsU3RyTGVuZ3RoJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJzE5MTI0MjhwZVVrWlMnLCd0eXBlJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ3Jvb3RfZXhwJywnNzA1NTNNa3dvVEknLCdjb3VudCcsXFxcIi9ob21lL2FkbWluaXN0cmFkb3IvLnZzY29kZS1zZXJ2ZXIvZXh0ZW5zaW9ucy93YWxsYWJ5anMuY29uc29sZS1uaW5qYS0wLjAuMTgyL25vZGVfbW9kdWxlc1xcXCIsJ3BhdGhUb0ZpbGVVUkwnLCdub2RlJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnd3M6Ly8nLCdpbmRleE9mJywncm9vdEV4cHJlc3Npb24nLCcyMTAwVGRvd2JhJywnX3JlY29ubmVjdFRpbWVvdXQnLCcxNzE0OTQ1ZmNwT09TJywnX2NhcElmU3RyaW5nJywnX2FkZFByb3BlcnR5Jywnb25lcnJvcicsJ19pc1VuZGVmaW5lZCcsJ3N1YnN0cicsJ0Vycm9yJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdzb3J0JywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0JywnMTQ5WGJFU2pFJywnd2VicGFjaycsJzI3MmlYT2dXWScsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnbnVsbCcsJ2pvaW4nLCdfaXNTZXQnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ19zb3J0UHJvcHMnLCdfbnVtYmVyUmVnRXhwJywnbWF0Y2gnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwic2ExXFxcIixcXFwiMTAuMzAuMC44MVxcXCIsXFxcIjE3Mi4yMC4wLjFcXFwiXSwncmVhZHlTdGF0ZScsJycsJ2NhbGwnLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdjb25zb2xlJywnaG9zdCcsJ1BPU0lUSVZFX0lORklOSVRZJywndGVzdCcsJ2hpdHMnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnLCdfaXNOZWdhdGl2ZVplcm8nLCdib29sZWFuJywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ19oYXNNYXBPbkl0c1BhdGgnLCdvYmplY3QnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ3dhcm4nLCdzdHJMZW5ndGgnLCdmdW5jdGlvbicsJ19XZWJTb2NrZXRDbGFzcycsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdtZXNzYWdlJywnX3NvY2tldCcsJ29uY2xvc2UnLCdpc0FycmF5JywnMzcwNDY5Y01LQ0xCJywnaW5jbHVkZXMnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ191bmRlZmluZWQnLCdoYXNPd25Qcm9wZXJ0eScsJzpsb2dQb2ludElkOicsJ3NsaWNlJywncHVzaCcsJ2F1dG9FeHBhbmRMaW1pdCcsJ19yZWdFeHBUb1N0cmluZycsJ2ZvckVhY2gnLCd1bmtub3duJywncmVzb2x2ZUdldHRlcnMnLCdhcnJheScsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdwcm9jZXNzJywnYmluZCcsJ251bWJlcicsJzM0NjQzJywnaHJ0aW1lJywndG9Mb3dlckNhc2UnLCd2YWx1ZScsJ3VucmVmJywnV2ViU29ja2V0JywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfaXNQcmltaXRpdmVUeXBlJywnXFxcXHgyMGJyb3dzZXInLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnZGVmYXVsdCcsJ19oYXNTZXRPbkl0c1BhdGgnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ21hcCcsJ19kYXRlVG9TdHJpbmcnLCdfaXNBcnJheScsJ1NldCcsJ3Jvb3RfZXhwX2lkJywnX3Byb3BlcnR5TmFtZScsJ19jb25uZWN0VG9Ib3N0Tm93JywnX2luQnJvd3NlcicsJzE0NjQ1NThid0NJdmwnLCdwZXJmX2hvb2tzJywncGFyZW50JywnZGVwdGgnLCdhc3RybycsJ19vYmplY3RUb1N0cmluZycsJ251eHQnLCdnZXRQcm90b3R5cGVPZicsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdhdXRvRXhwYW5kJywnY29uc3RydWN0b3InLCdfYWRkT2JqZWN0UHJvcGVydHknLCdfcXVvdGVkUmVnRXhwJywnb25vcGVuJywnZGF0ZScsJ25vZGVNb2R1bGVzJywnbmFtZScsJ19kaXNwb3NlV2Vic29ja2V0JywnX3NldE5vZGVJZCcsJ2luZGV4JywnY2FwcGVkRWxlbWVudHMnLCdwYXJzZScsJ2xvY2FsaG9zdCcsJ3N0cmluZycsJ3BlcmZvcm1hbmNlJywnc3ltYm9sJywnbG9jYXRpb24nLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ19zZXROb2RlTGFiZWwnLCdfa2V5U3RyUmVnRXhwJywnX2lzTWFwJywnZ2xvYmFsJywnU3RyaW5nJywnNEdLYlVacicsJ3Byb3RvdHlwZScsJ3NlbmQnLCdfV2ViU29ja2V0JywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdjYXBwZWRQcm9wcycsJzE2ODkyNTY0MjE1NTInLCdfcHJvcGVydHlBY2Nlc3NvcicsJ19jb25zb2xlX25pbmphJywnTkVHQVRJVkVfSU5GSU5JVFknLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ19wXycsJ3Bvc2l0aXZlSW5maW5pdHknLCdwb3AnLCd0aW1lU3RhbXAnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnZXJyb3InLCdfcHJvcGVydHknLCd2ZXJzaW9ucycsJ19IVE1MQWxsQ29sbGVjdGlvbicsJzYyMTQwZkJ1ZHhVJywncGF0aCcsJ2dldFdlYlNvY2tldENsYXNzJywnY2FwcGVkJywnbG9nJywnbWV0aG9kJywnZGlzYWJsZWRUcmFjZScsJ3RyYWNlJywnYXJndW1lbnRSZXNvbHV0aW9uRXJyb3InLCdfd3MnLCdcXFxceDIwc2VydmVyJywndW5zaGlmdCcsJzEwTW9leWlKJywndGltZUVuZCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnX2FsbG93ZWRUb1NlbmQnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ19fZXMnKydNb2R1bGUnLCd1bmRlZmluZWQnLCdyZXBsYWNlJywndG9TdHJpbmcnLCdvbm1lc3NhZ2UnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJ2VudW1lcmFibGUnLCdzZXJpYWxpemUnLCdfcF9uYW1lJywncHJvcHMnLCd0aGVuJywnQm9vbGVhbicsJ2hvc3RuYW1lJywnX2Nvbm5lY3RlZCcsJzIzMzR5a0VTeEgnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdlbGVtZW50cycsJy4uLicsJ3RvdGFsU3RyTGVuZ3RoJywnc3RhY2tUcmFjZUxpbWl0JywnYXV0b0V4cGFuZE1heERlcHRoJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ1tvYmplY3RcXFxceDIwTWFwXScsJ19zZW5kRXJyb3JNZXNzYWdlJywnTWFwJywnbm9GdW5jdGlvbnMnLCdsZXZlbCcsJ190eXBlJywnd3MvaW5kZXguanMnXTtfMHg1NzUwPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDUxZmNmMzt9O3JldHVybiBfMHg1NzUwKCk7fVwiKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi88L3NjcmlwdD5cbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCB7IGludGVyY2VwdG9yUmVxdWVzdCwgaW50ZXJjZXB0b3JSZXBvbnNlIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JcIjtcblxuY29uc3Qgc3RhdHVzQXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcIi93ZWIvc3RhdHVzXCIsXG59KTtcblxuLy8gc3RhdHVzQXBpLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShpbnRlcmNlcHRvclJlcXVlc3QpO1xuLy8gc3RhdHVzQXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS5yZWplY3QoaW50ZXJjZXB0b3JSZXBvbnNlKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdHVzQXBpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3RhdHVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lZDZmOTVjNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdGF0dXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdGF0dXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9hZG1pbmlzdHJhZG9yL25naW54L2FwcHMvQWNjaW9uRGVQZXJzb25hbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlZDZmOTVjNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlZDZmOTVjNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlZDZmOTVjNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3RhdHVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lZDZmOTVjNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlZDZmOTVjNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvU3RhdHVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdGF0dXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3RhdHVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdGF0dXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVkNmY5NWM2JlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IFwiZGF0YS1hcHBcIjogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJhbGVydC10aW1lLW91dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHJlZGlyZWN0OiBfdm0ucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICByZWRpcmVjdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVUaW1lT3V0KCRldmVudClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhbGVydFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0ZXh0OiBfdm0udGV4dEFsZXJ0LFxuICAgICAgICAgIGV2ZW50OiBfdm0uYWxlcnRFdmVudCxcbiAgICAgICAgICBzaG93OiBfdm0uc2hvd0FsZXJ0LFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwic2hvdy1hbGVydFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZUFsZXJ0KCRldmVudClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicC0zXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2xzOiBcIjEyXCIsIHNtOiBcIjEyXCIsIG1kOiBcIjRcIiwgbGc6IFwiNFwiLCB4bDogXCI0XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1sZWZ0XCI6IFwiMTVweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJFc3RhZG9zXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sczogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgIHNtOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgIG1kOiBcIjRcIixcbiAgICAgICAgICAgICAgICAgICAgbGc6IFwiNFwiLFxuICAgICAgICAgICAgICAgICAgICB4bDogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImVuZFwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yIGJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IFwiXCIsIHJvdW5kZWQ6IFwiXCIsIHRpdGxlOiBcIkFncmVnYXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZFJlY29yZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgQWdyZWdhclxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBsLTAgcGItMCBwci0wXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzOiBcIjEyXCIsIHNtOiBcIjEyXCIsIG1kOiBcIjEyXCIsIGxnOiBcIjRcIiwgeGw6IFwiNFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGVuc2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQnVzY2FyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcHRpb25zLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm9wdGlvbnMsIFwic2VhcmNoXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3B0aW9ucy5zZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LWRhdGEtdGFibGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJzaW5nbGUtc2VsZWN0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBzZWFyY2g6IF92bS5vcHRpb25zLnNlYXJjaCxcbiAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgICAgIGl0ZW1zOiBfdm0ucmVjb3Jkc0ZpbHRlcmVkLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ub3B0aW9ucyxcbiAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpZFwiLFxuICAgICAgICAgICAgICBcInNvcnQtYnlcIjogXCJpZFwiLFxuICAgICAgICAgICAgICBcImZvb3Rlci1wcm9wc1wiOiB7IFwiaXRlbXMtcGVyLXBhZ2Utb3B0aW9uc1wiOiBbMTUsIDMwLCA1MCwgMTAwXSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwidXBkYXRlOm9wdGlvbnNcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5vcHRpb25zID0gJGV2ZW50XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJpdGVtLmFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc21hbGw6IFwiXCIsIGRpc2FibGVkOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdEl0ZW0oaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgbWRpLXBlbmNpbFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc21hbGw6IFwiXCIsIGRpc2FibGVkOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlSXRlbShpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBtZGktZGVsZXRlXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJuby1kYXRhXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzbWFsbDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmluaXRpYWxpemUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIG1kaS1yZWZyZXNoIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNjAwcHhcIiwgcGVyc2lzdGVudDogXCJcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kaWFsb2cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXhjYXJkXCIsIGF0dHJzOiB7IGhlaWdodDogXCIxMDAlXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImgxXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwibXgtYXV0byBwdC0zIG1iLTMgdGV4dC1jZW50ZXIgYmxhY2stc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmZvcm1UaXRsZSkgKyBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHM6IFwiMTJcIiwgc206IFwiMTJcIiwgbWQ6IFwiMTJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFc3RhZG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBfdm0uJHYuZWRpdGVkSXRlbS5zdGF0dXNfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uJHYuZWRpdGVkSXRlbS5zdGF0dXNfbmFtZS4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS5zdGF0dXNfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLnN0YXR1c19uYW1lLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHM6IFwiMTJcIiwgc206IFwiMTJcIiwgbWQ6IFwiMTJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJPcmRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IF92bS4kdi5lZGl0ZWRJdGVtLm9yZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS4kdi5lZGl0ZWRJdGVtLm9yZGVyX2lkLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLm9yZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHYuZWRpdGVkSXRlbS5vcmRlcl9pZC4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNhdmUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIEd1YXJkYXJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBDYW5jZWxhclxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjQwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kaWFsb2dEZWxldGUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGlhbG9nRGVsZXRlID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dEZWxldGVcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoLTEwMFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJoMVwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJsYWNrLXNlY29uZGFyeSB0ZXh0LWNlbnRlciBtdC0zIG1iLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJFbGltaW5hciByZWdpc3Ryb3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkVsaW1pbmFyIHJlZ2lzdHJvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlIG10LTMgbWItMyBwci01IHBsLTUgbXgtYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZGVsZXRlSXRlbUNvbmZpcm0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25maXJtYXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTMgbWItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VEZWxldGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIENhbmNlbGFyXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdhbHBoYScsIC9eW2EtekEtWl0qJC8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnYWxwaGFOdW0nLCAvXlthLXpBLVowLTldKiQvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbGlkYXRvcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsaWRhdG9yc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ2FuZCdcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9ycy5sZW5ndGggPiAwICYmIHZhbGlkYXRvcnMucmVkdWNlKGZ1bmN0aW9uICh2YWxpZCwgZm4pIHtcbiAgICAgIHJldHVybiB2YWxpZCAmJiBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSwgdHJ1ZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChtaW4sIG1heCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdiZXR3ZWVuJyxcbiAgICBtaW46IG1pbixcbiAgICBtYXg6IG1heFxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICghL1xccy8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSAmJiArbWluIDw9ICt2YWx1ZSAmJiArbWF4ID49ICt2YWx1ZTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxID0gZXhwb3J0cy5yZWdleCA9IGV4cG9ydHMucmVmID0gZXhwb3J0cy5sZW4gPSB2b2lkIDA7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUGFyYW1zXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF93aXRoUGFyYW1zLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3dpdGhQYXJhbXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi93aXRoUGFyYW1zXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgcmVxID0gZnVuY3Rpb24gcmVxKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuICEhdmFsdWUubGVuZ3RoO1xuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiAhaXNOYU4odmFsdWUuZ2V0VGltZSgpKTtcbiAgfVxuXG4gIGlmIChfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBfIGluIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gISFTdHJpbmcodmFsdWUpLmxlbmd0aDtcbn07XG5cbmV4cG9ydHMucmVxID0gcmVxO1xuXG52YXIgbGVuID0gZnVuY3Rpb24gbGVuKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlLmxlbmd0aDtcblxuICBpZiAoX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5sZW5ndGg7XG59O1xuXG5leHBvcnRzLmxlbiA9IGxlbjtcblxudmFyIHJlZiA9IGZ1bmN0aW9uIHJlZihyZWZlcmVuY2UsIHZtLCBwYXJlbnRWbSkge1xuICByZXR1cm4gdHlwZW9mIHJlZmVyZW5jZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlZmVyZW5jZS5jYWxsKHZtLCBwYXJlbnRWbSkgOiBwYXJlbnRWbVtyZWZlcmVuY2VdO1xufTtcblxuZXhwb3J0cy5yZWYgPSByZWY7XG5cbnZhciByZWdleCA9IGZ1bmN0aW9uIHJlZ2V4KHR5cGUsIGV4cHIpIHtcbiAgcmV0dXJuICgwLCBfd2l0aFBhcmFtcy5kZWZhdWx0KSh7XG4gICAgdHlwZTogdHlwZVxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gIXJlcSh2YWx1ZSkgfHwgZXhwci50ZXN0KHZhbHVlKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLnJlZ2V4ID0gcmVnZXg7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2RlY2ltYWwnLCAvXlstXT9cXGQqKFxcLlxcZCspPyQvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgZW1haWxSZWdleCA9IC9eKD86W0EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLltBLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKnxcIig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3Zl18W1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldezIsfSg/OlthLXowLTktXSpbYS16MC05XSk/fFxcWyg/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/fFthLXowLTktXSpbYS16MC05XTooPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHg1YVxceDUzLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkrKVxcXSkkL2k7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnZW1haWwnLCBlbWFpbFJlZ2V4KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFscGhhXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hbHBoYS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFscGhhTnVtXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hbHBoYU51bS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFuZFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYW5kLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYmV0d2VlblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYmV0d2Vlbi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY2ltYWxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2RlY2ltYWwuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlbWFpbFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZW1haWwuZGVmYXVsdDtcbiAgfVxufSk7XG5leHBvcnRzLmhlbHBlcnMgPSB2b2lkIDA7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpbnRlZ2VyXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlZ2VyLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXBBZGRyZXNzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pcEFkZHJlc3MuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtYWNBZGRyZXNzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYWNBZGRyZXNzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWF4TGVuZ3RoXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYXhMZW5ndGguZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtYXhWYWx1ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWF4VmFsdWUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtaW5MZW5ndGhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21pbkxlbmd0aC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1pblZhbHVlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9taW5WYWx1ZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm5vdFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbm90LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibnVtZXJpY1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbnVtZXJpYy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm9yXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9vci5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlcXVpcmVkXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yZXF1aXJlZC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlcXVpcmVkSWZcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JlcXVpcmVkSWYuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZXF1aXJlZFVubGVzc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcmVxdWlyZWRVbmxlc3MuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzYW1lQXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3NhbWVBcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInVybFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdXJsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2FscGhhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hbHBoYVwiKSk7XG5cbnZhciBfYWxwaGFOdW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FscGhhTnVtXCIpKTtcblxudmFyIF9udW1lcmljID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9udW1lcmljXCIpKTtcblxudmFyIF9iZXR3ZWVuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iZXR3ZWVuXCIpKTtcblxudmFyIF9lbWFpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZW1haWxcIikpO1xuXG52YXIgX2lwQWRkcmVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXBBZGRyZXNzXCIpKTtcblxudmFyIF9tYWNBZGRyZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYWNBZGRyZXNzXCIpKTtcblxudmFyIF9tYXhMZW5ndGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21heExlbmd0aFwiKSk7XG5cbnZhciBfbWluTGVuZ3RoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9taW5MZW5ndGhcIikpO1xuXG52YXIgX3JlcXVpcmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZXF1aXJlZFwiKSk7XG5cbnZhciBfcmVxdWlyZWRJZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVxdWlyZWRJZlwiKSk7XG5cbnZhciBfcmVxdWlyZWRVbmxlc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlcXVpcmVkVW5sZXNzXCIpKTtcblxudmFyIF9zYW1lQXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NhbWVBc1wiKSk7XG5cbnZhciBfdXJsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91cmxcIikpO1xuXG52YXIgX29yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9vclwiKSk7XG5cbnZhciBfYW5kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hbmRcIikpO1xuXG52YXIgX25vdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbm90XCIpKTtcblxudmFyIF9taW5WYWx1ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWluVmFsdWVcIikpO1xuXG52YXIgX21heFZhbHVlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYXhWYWx1ZVwiKSk7XG5cbnZhciBfaW50ZWdlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaW50ZWdlclwiKSk7XG5cbnZhciBfZGVjaW1hbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZGVjaW1hbFwiKSk7XG5cbnZhciBoZWxwZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vY29tbW9uXCIpKTtcblxuZXhwb3J0cy5oZWxwZXJzID0gaGVscGVycztcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdpbnRlZ2VyJywgLyheWzAtOV0qJCl8KF4tWzAtOV0rJCkvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gIHR5cGU6ICdpcEFkZHJlc3MnXG59LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKCEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbmliYmxlcyA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gIHJldHVybiBuaWJibGVzLmxlbmd0aCA9PT0gNCAmJiBuaWJibGVzLmV2ZXJ5KG5pYmJsZVZhbGlkKTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxudmFyIG5pYmJsZVZhbGlkID0gZnVuY3Rpb24gbmliYmxlVmFsaWQobmliYmxlKSB7XG4gIGlmIChuaWJibGUubGVuZ3RoID4gMyB8fCBuaWJibGUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG5pYmJsZVswXSA9PT0gJzAnICYmIG5pYmJsZSAhPT0gJzAnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFuaWJibGUubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIG51bWVyaWMgPSArbmliYmxlIHwgMDtcbiAgcmV0dXJuIG51bWVyaWMgPj0gMCAmJiBudW1lcmljIDw9IDI1NTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgdmFyIHNlcGFyYXRvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJzonO1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtYWNBZGRyZXNzJ1xuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoISgwLCBfY29tbW9uLnJlcSkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBwYXJ0cyA9IHR5cGVvZiBzZXBhcmF0b3IgPT09ICdzdHJpbmcnICYmIHNlcGFyYXRvciAhPT0gJycgPyB2YWx1ZS5zcGxpdChzZXBhcmF0b3IpIDogdmFsdWUubGVuZ3RoID09PSAxMiB8fCB2YWx1ZS5sZW5ndGggPT09IDE2ID8gdmFsdWUubWF0Y2goLy57Mn0vZykgOiBudWxsO1xuICAgIHJldHVybiBwYXJ0cyAhPT0gbnVsbCAmJiAocGFydHMubGVuZ3RoID09PSA2IHx8IHBhcnRzLmxlbmd0aCA9PT0gOCkgJiYgcGFydHMuZXZlcnkoaGV4VmFsaWQpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG52YXIgaGV4VmFsaWQgPSBmdW5jdGlvbiBoZXhWYWxpZChoZXgpIHtcbiAgcmV0dXJuIGhleC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9eWzAtOWEtZl17Mn0kLyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobGVuZ3RoKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21heExlbmd0aCcsXG4gICAgbWF4OiBsZW5ndGhcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoMCwgX2NvbW1vbi5sZW4pKHZhbHVlKSA8PSBsZW5ndGg7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChtYXgpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWF4VmFsdWUnLFxuICAgIG1heDogbWF4XG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKCEvXFxzLy50ZXN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpICYmICt2YWx1ZSA8PSArbWF4O1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobGVuZ3RoKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21pbkxlbmd0aCcsXG4gICAgbWluOiBsZW5ndGhcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoMCwgX2NvbW1vbi5sZW4pKHZhbHVlKSA+PSBsZW5ndGg7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChtaW4pIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWluVmFsdWUnLFxuICAgIG1pbjogbWluXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKCEvXFxzLy50ZXN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpICYmICt2YWx1ZSA+PSArbWluO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQodmFsaWRhdG9yKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ25vdCdcbiAgfSwgZnVuY3Rpb24gKHZhbHVlLCB2bSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgIXZhbGlkYXRvci5jYWxsKHRoaXMsIHZhbHVlLCB2bSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ251bWVyaWMnLCAvXlswLTldKiQvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbGlkYXRvcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsaWRhdG9yc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ29yJ1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3JzLmxlbmd0aCA+IDAgJiYgdmFsaWRhdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKHZhbGlkLCBmbikge1xuICAgICAgcmV0dXJuIHZhbGlkIHx8IGZuLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICB9LCBmYWxzZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gIHR5cGU6ICdyZXF1aXJlZCdcbn0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiAoMCwgX2NvbW1vbi5yZXEpKHZhbHVlLnRyaW0oKSk7XG4gIH1cblxuICByZXR1cm4gKDAsIF9jb21tb24ucmVxKSh2YWx1ZSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChwcm9wKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ3JlcXVpcmVkSWYnLFxuICAgIHByb3A6IHByb3BcbiAgfSwgZnVuY3Rpb24gKHZhbHVlLCBwYXJlbnRWbSkge1xuICAgIHJldHVybiAoMCwgX2NvbW1vbi5yZWYpKHByb3AsIHRoaXMsIHBhcmVudFZtKSA/ICgwLCBfY29tbW9uLnJlcSkodmFsdWUpIDogdHJ1ZTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHByb3ApIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAncmVxdWlyZWRVbmxlc3MnLFxuICAgIHByb3A6IHByb3BcbiAgfSwgZnVuY3Rpb24gKHZhbHVlLCBwYXJlbnRWbSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVmKShwcm9wLCB0aGlzLCBwYXJlbnRWbSkgPyAoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSA6IHRydWU7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChlcXVhbFRvKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ3NhbWVBcycsXG4gICAgZXE6IGVxdWFsVG9cbiAgfSwgZnVuY3Rpb24gKHZhbHVlLCBwYXJlbnRWbSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gKDAsIF9jb21tb24ucmVmKShlcXVhbFRvLCB0aGlzLCBwYXJlbnRWbSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgdXJsUmVnZXggPSAvXig/Oig/Oig/Omh0dHBzP3xmdHApOik/XFwvXFwvKSg/OlxcUysoPzo6XFxTKik/QCk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16MC05XFx1MDBhMS1cXHVmZmZmXVthLXowLTlcXHUwMGExLVxcdWZmZmZfLV17MCw2Mn0pP1thLXowLTlcXHUwMGExLVxcdWZmZmZdXFwuKSsoPzpbYS16XFx1MDBhMS1cXHVmZmZmXXsyLH1cXC4/KSkoPzo6XFxkezIsNX0pPyg/OlsvPyNdXFxTKik/JC9pO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ3VybCcsIHVybFJlZ2V4KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgd2l0aFBhcmFtcyA9IHByb2Nlc3MuZW52LkJVSUxEID09PSAnd2ViJyA/IHJlcXVpcmUoJy4vd2l0aFBhcmFtc0Jyb3dzZXInKS53aXRoUGFyYW1zIDogcmVxdWlyZSgnLi9wYXJhbXMnKS53aXRoUGFyYW1zO1xudmFyIF9kZWZhdWx0ID0gd2l0aFBhcmFtcztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53aXRoUGFyYW1zID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciByb290ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHt9O1xuXG52YXIgZmFrZVdpdGhQYXJhbXMgPSBmdW5jdGlvbiBmYWtlV2l0aFBhcmFtcyhwYXJhbXNPckNsb3N1cmUsIG1heWJlVmFsaWRhdG9yKSB7XG4gIGlmIChfdHlwZW9mKHBhcmFtc09yQ2xvc3VyZSkgPT09ICdvYmplY3QnICYmIG1heWJlVmFsaWRhdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbWF5YmVWYWxpZGF0b3I7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zT3JDbG9zdXJlKGZ1bmN0aW9uICgpIHt9KTtcbn07XG5cbnZhciB3aXRoUGFyYW1zID0gcm9vdC52dWVsaWRhdGUgPyByb290LnZ1ZWxpZGF0ZS53aXRoUGFyYW1zIDogZmFrZVdpdGhQYXJhbXM7XG5leHBvcnRzLndpdGhQYXJhbXMgPSB3aXRoUGFyYW1zOyJdLCJuYW1lcyI6WyJkYXRhIiwic2VhcmNoIiwic2VsZWN0ZWQiLCJkaWFsb2ciLCJkaWFsb2dEZWxldGUiLCJoZWFkZXJzIiwidGV4dCIsInZhbHVlIiwic29ydGFibGUiLCJyZWNvcmRzIiwicmVjb3Jkc0ZpbHRlcmVkIiwiZWRpdGVkSW5kZXgiLCJ0aXRsZSIsInRvdGFsSXRlbXMiLCJvcHRpb25zIiwiZWRpdGVkSXRlbSIsInN0YXR1c19uYW1lIiwib3JkZXJfaWQiLCJkZWZhdWx0SXRlbSIsInNlbGVjdGVkVGFiIiwibG9hZGluZyIsImRlYm91bmNlIiwidGV4dEFsZXJ0IiwiYWxlcnRFdmVudCIsInNob3dBbGVydCIsInJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkIiwiYWxlcnRUaW1lT3V0IiwidmFsaWRhdGlvbnMiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsImNvbXB1dGVkIiwiZm9ybVRpdGxlIiwid2F0Y2giLCJoYW5kbGVyIiwiZGVlcCIsImRpcnR5IiwidmFsIiwiZGlhbG9nQmxvY2siLCJjcmVhdGVkIiwibWV0aG9kcyIsImluaXRpYWxpemUiLCJyZXF1ZXN0cyIsIlByb21pc2UiLCJlcnJvciIsInJlc3BvbnNlcyIsImVkaXRJdGVtIiwiaXRlbSIsImNsb3NlIiwic2F2ZSIsImVkaXRlZCIsIk9iamVjdCIsInJlcXVlc3RTdGF0dXNBcGkiLCJwdXQiLCJwb3N0IiwiZGVsZXRlSXRlbSIsImNsb3NlRGVsZXRlIiwiZGVsZXRlSXRlbUNvbmZpcm0iLCJwYXJhbXMiLCJpZCIsImdldERhdGFGcm9tQXBpIiwiY2xlYXJUaW1lb3V0IiwiZ2V0IiwiYWRkUmVjb3JkIiwidXBkYXRlQWxlcnQiLCJ2Iiwib29fY20iLCJheGlvcyIsInN0YXR1c0FwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9