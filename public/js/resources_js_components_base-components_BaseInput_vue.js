"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_base-components_BaseInput_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  inheritAttrs: false,
  data: function data() {
    return {
      data: "",
      counter: 0,
      icon: "visibility"
    };
  },
  props: {
    label: {
      type: String,
      "default": ""
    },
    validation: {
      type: Object,
      "default": ""
    },
    validationTextType: {
      type: String,
      "default": ""
    },
    required: {
      type: Boolean,
      "default": false
    },
    type: {
      type: String,
      "default": "text"
    },
    mask: {
      type: String,
      "default": ""
    },
    validationsInput: {
      type: Object,
      "default": function _default() {
        return {
          required: true,
          format: false,
          minLength: false,
          maxLength: false,
          minValue: false,
          maxValue: false,
          isValidDui: false,
          isValidNit: false,
          isValidIsss: false,
          isValidAfp: false,
          isValidConamypeId: false,
          isValidNrc: false,
          email: false,
          showPassword: false
        };
      }
    },
    min: {
      type: Number,
      "default": 0
    },
    max: {
      type: Number,
      "default": 150
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  watch: {
    type: function type(val) {
      this.icon = this.type == "password" ? "visibility" : "visibility_off";
    }
  },
  mounted: function mounted() {
    this.data = this.$attrs.value;
    this.validation.$reset();
  },
  updated: function updated() {
    this.data = this.validation.$model;
  },
  methods: {
    updateValue: function updateValue() {
      this.validation.$model = this.data;
      this.$emit("input", this.data);
    },
    validateText: function validateText() {
      if (this.data) {
        switch (this.validationTextType) {
          case "default":
            this.data = this.data.replace(/[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\' ']/gi, "");
            this.data = this.data.replace(/^([a-zA-Z0-9])\1{4}/gi, "");
            break;

          case "only-letters":
            this.data = this.data.replace(/[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\' ']/gi, "");
            break;

          case "only-numbers":
            this.data = this.data.replace(/[^0-9\-]/g, "");
            break;

          case "none":
            break;

          case "only-repeats":
            this.data = this.data.replace(/^([a-zA-Z0-9])\1{4}/g, "");
            break;

          default:
            break;
        }
      }

      this.validation.$model = this.data;
      this.$emit("keyup", this.data);
    },
    showPassword: function showPassword() {
      var show = this.type == "password" ? "text" : "password";
      this.$emit("update-password", {
        show: show
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-text-field--outlined {\n  border-color: #1976d2 !important;\n}\n.v-text-field--outlined.v-input--is-focused fieldset,\n.v-text-field--outlined.v-input--has-state fieldset {\n  border-color: #2d52a8 !important;\n}\n.v-text-field__details {\n  display: none;\n}\n.material-icons {\n  width: 30px;\n  height: auto;\n}\np {\n  margin-bottom: 0px;\n  height: 20px;\n  line-height: 20px; /* same as height! */\n  display: flex;\n  justify-content: left;\n  align-content: center;\n  flex-direction: row;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/base-components/BaseInput.vue"],"names":[],"mappings":";AAmRA;EACA,gCAAA;AACA;AAEA;;EAEA,gCAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;AACA;AAEA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA,EAAA,oBAAA;EACA,aAAA;EACA,qBAAA;EACA,qBAAA;EACA,mBAAA;AACA","sourcesContent":["<template>\n  <div>\n    <v-text-field\n      dense\n      :label=\"label\"\n      outlined\n      v-model.trim=\"data\"\n      :class=\"{\n        'is-invalid': validation.$error,\n        'is-valid': !validation.$invalid,\n      }\"\n      :key=\"counter\"\n      :min=\"min\"\n      :max=\"max\"\n      :readonly=\"readonly\"\n      :disabled=\"disabled\"\n      :type=\"type\"\n      @input=\"updateValue\"\n      v-mask=\"mask\"\n      @keyup=\"validateText()\"\n      autocomplete=\"new-password\"\n      class=\"mb-1\"\n    >\n      <v-icon\n        slot=\"append\"\n        color=\"green\"\n        v-if=\"validationsInput.showPassword\"\n        @click=\"showPassword()\"\n      >\n        {{ icon }}\n      </v-icon>\n    </v-text-field>\n    <v-container class=\"mb-0 pt-0 my-auto orange-text\" v-if=\"validation.$dirty\">\n      <template v-if=\"!validationsInput.required\">\n        <v-row class=\"pt-0\" v-if=\"!validationsInput.required\">\n          <p class=\"mb-0 mt-1 text-muted\">(Campo opcional)</p>\n        </v-row>\n      </template>\n      <template>\n        <v-row\n          v-if=\"validation.$error && validationsInput.required\"\n          class=\"pt-0\"\n        >\n          <p class=\"mb-0 mt-1\">\n            <i class=\"material-icons\">error_outline</i> Campo requerido.\n          </p>\n        </v-row>\n        <v-row v-if=\"validationsInput.minLength && !validation.minLength\">\n          <p class=\"pl-0 mt-1\">\n            <i class=\"material-icons\">error_outline</i> {{ min }} carácter\n            mínimo.\n          </p>\n        </v-row>\n        <v-row v-if=\"validationsInput.maxLength && !validation.maxLength\">\n          <p class=\"pl-0 pr-0 mt-1\">\n            <i class=\"material-icons\">error_outline</i> {{ max }} caracteres\n            máximo.\n          </p>\n        </v-row>\n        <v-row v-if=\"validationsInput.minValue && !validation.minValue\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> {{ min }} es el valor\n            mínimo.\n          </p>\n        </v-row>\n        <v-row v-if=\"validationsInput.maxValue && !validation.maxValue\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> {{ max }} el valor\n            máximo.\n          </p>\n        </v-row>\n        <v-row v-if=\"validationsInput.format && !validation.isValidNumber\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> Formato inválido\n          </p>\n        </v-row>\n        <v-row v-if=\"validationsInput.isValidDui && !validation.isValidDui\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> DUI inválido\n          </p>\n        </v-row>\n        <v-row v-if=\"validationsInput.isValidNit && !validation.isValidNit\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> NIT inválido\n          </p>\n        </v-row>\n        <v-row v-if=\"validationsInput.isValidIsss && !validation.isValidIsss\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> ISSS inválido\n          </p>\n        </v-row>\n        <v-row v-if=\"validationsInput.isValidAfp && !validation.isValidAfp\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> AFP inválido\n          </p>\n        </v-row>\n        <v-row\n          v-if=\"\n            validationsInput.isValidConamypeId && !validation.isValidConamypeId\n          \"\n        >\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> ID de Conamype inválido\n          </p>\n        </v-row>\n        <v-row v-if=\"validationsInput.isValidNrc && !validation.isValidNrc\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> NRC inválido\n          </p>\n        </v-row>\n        <v-row v-if=\"validationsInput.email && !validation.email\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> Formato de correo\n            electrónico inválido.\n          </p>\n        </v-row>\n        <v-row\n          v-if=\"validationsInput.isValidPassword && !validation.isValidPassword\"\n        >\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i>\n            8 caracteres mínimo.\n          </p>\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i>\n            1 mayúscula mínimo.\n          </p>\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i>\n            1 minúscula mínimo.\n          </p>\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i>\n            13 caracteres máximo.\n          </p>\n        </v-row>\n      </template>\n    </v-container>\n  </div>\n</template>\n\n<script>\nexport default {\n  inheritAttrs: false,\n  data() {\n    return {\n      data: \"\",\n      counter: 0,\n      icon: \"visibility\",\n    };\n  },\n  props: {\n    label: {\n      type: String,\n      default: \"\",\n    },\n    validation: {\n      type: Object,\n      default: \"\",\n    },\n    validationTextType: {\n      type: String,\n      default: \"\",\n    },\n    required: {\n      type: Boolean,\n      default: false,\n    },\n    type: {\n      type: String,\n      default: \"text\",\n    },\n    mask: {\n      type: String,\n      default: \"\",\n    },\n    validationsInput: {\n      type: Object,\n      default: () => {\n        return {\n          required: true,\n          format: false,\n          minLength: false,\n          maxLength: false,\n          minValue: false,\n          maxValue: false,\n          isValidDui: false,\n          isValidNit: false,\n          isValidIsss: false,\n          isValidAfp: false,\n          isValidConamypeId: false,\n          isValidNrc: false,\n          email: false,\n          showPassword: false,\n        };\n      },\n    },\n    min: {\n      type: Number,\n      default: 0,\n    },\n    max: {\n      type: Number,\n      default: 150,\n    },\n    readonly: {\n      type: Boolean,\n      default: false,\n    },\n    disabled: {\n      type: Boolean,\n      default: false,\n    },\n  },\n  watch: {\n    type(val) {\n      this.icon = this.type == \"password\" ? \"visibility\" : \"visibility_off\";\n    },\n  },\n  mounted() {\n    this.data = this.$attrs.value;\n    this.validation.$reset();\n  },\n  updated() {\n    this.data = this.validation.$model;\n  },\n  methods: {\n    updateValue() {\n      this.validation.$model = this.data;\n      this.$emit(\"input\", this.data);\n    },\n\n    validateText() {\n      if (this.data) {\n        switch (this.validationTextType) {\n          case \"default\":\n            this.data = this.data.replace(\n              /[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\\' ']/gi,\n              \"\"\n            );\n            this.data = this.data.replace(/^([a-zA-Z0-9])\\1{4}/gi, \"\");\n            break;\n          case \"only-letters\":\n            this.data = this.data.replace(\n              /[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\\' ']/gi,\n              \"\"\n            );\n            break;\n          case \"only-numbers\":\n            this.data = this.data.replace(/[^0-9\\-]/g, \"\");\n            break;\n          case \"none\":\n            break;\n          case \"only-repeats\":\n            this.data = this.data.replace(/^([a-zA-Z0-9])\\1{4}/g, \"\");\n            break;\n          default:\n            break;\n        }\n      }\n\n      this.validation.$model = this.data;\n      this.$emit(\"keyup\", this.data);\n    },\n\n    showPassword() {\n      const show = this.type == \"password\" ? \"text\" : \"password\";\n\n      this.$emit(\"update-password\", { show });\n    },\n  },\n};\n</script>\n\n<style>\n.v-text-field--outlined {\n  border-color: #1976d2 !important;\n}\n\n.v-text-field--outlined.v-input--is-focused fieldset,\n.v-text-field--outlined.v-input--has-state fieldset {\n  border-color: #2d52a8 !important;\n}\n\n.v-text-field__details {\n  display: none;\n}\n\n.material-icons {\n  width: 30px;\n  height: auto;\n}\n\np {\n  margin-bottom: 0px;\n  height: 20px;\n  line-height: 20px; /* same as height! */\n  display: flex;\n  justify-content: left;\n  align-content: center;\n  flex-direction: row;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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

/***/ "./resources/js/components/base-components/BaseInput.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=template&id=7e2bcf61& */ "./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&");
/* harmony import */ var _BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=script&lang=js& */ "./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.render,
  _BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/base-components/BaseInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=template&id=7e2bcf61& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    [
      _c(
        "v-text-field",
        {
          directives: [
            {
              name: "mask",
              rawName: "v-mask",
              value: _vm.mask,
              expression: "mask",
            },
          ],
          key: _vm.counter,
          staticClass: "mb-1",
          class: {
            "is-invalid": _vm.validation.$error,
            "is-valid": !_vm.validation.$invalid,
          },
          attrs: {
            dense: "",
            label: _vm.label,
            outlined: "",
            min: _vm.min,
            max: _vm.max,
            readonly: _vm.readonly,
            disabled: _vm.disabled,
            type: _vm.type,
            autocomplete: "new-password",
          },
          on: {
            input: _vm.updateValue,
            keyup: function ($event) {
              return _vm.validateText()
            },
          },
          model: {
            value: _vm.data,
            callback: function ($$v) {
              _vm.data = typeof $$v === "string" ? $$v.trim() : $$v
            },
            expression: "data",
          },
        },
        [
          _vm.validationsInput.showPassword
            ? _c(
                "v-icon",
                {
                  attrs: { slot: "append", color: "green" },
                  on: {
                    click: function ($event) {
                      return _vm.showPassword()
                    },
                  },
                  slot: "append",
                },
                [_vm._v("\n      " + _vm._s(_vm.icon) + "\n    ")]
              )
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _vm.validation.$dirty
        ? _c(
            "v-container",
            { staticClass: "mb-0 pt-0 my-auto orange-text" },
            [
              !_vm.validationsInput.required
                ? [
                    !_vm.validationsInput.required
                      ? _c("v-row", { staticClass: "pt-0" }, [
                          _c("p", { staticClass: "mb-0 mt-1 text-muted" }, [
                            _vm._v("(Campo opcional)"),
                          ]),
                        ])
                      : _vm._e(),
                  ]
                : _vm._e(),
              _vm._v(" "),
              [
                _vm.validation.$error && _vm.validationsInput.required
                  ? _c("v-row", { staticClass: "pt-0" }, [
                      _c("p", { staticClass: "mb-0 mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" Campo requerido.\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.minLength && !_vm.validation.minLength
                  ? _c("v-row", [
                      _c("p", { staticClass: "pl-0 mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.min) +
                            " carácter\n          mínimo.\n        "
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.maxLength && !_vm.validation.maxLength
                  ? _c("v-row", [
                      _c("p", { staticClass: "pl-0 pr-0 mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.max) +
                            " caracteres\n          máximo.\n        "
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.minValue && !_vm.validation.minValue
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.min) +
                            " es el valor\n          mínimo.\n        "
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.maxValue && !_vm.validation.maxValue
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.max) +
                            " el valor\n          máximo.\n        "
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.format && !_vm.validation.isValidNumber
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" Formato inválido\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.isValidDui && !_vm.validation.isValidDui
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" DUI inválido\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.isValidNit && !_vm.validation.isValidNit
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" NIT inválido\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.isValidIsss && !_vm.validation.isValidIsss
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" ISSS inválido\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.isValidAfp && !_vm.validation.isValidAfp
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" AFP inválido\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.isValidConamypeId &&
                !_vm.validation.isValidConamypeId
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" ID de Conamype inválido\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.isValidNrc && !_vm.validation.isValidNrc
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" NRC inválido\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.email && !_vm.validation.email
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(
                          " Formato de correo\n          electrónico inválido.\n        "
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.isValidPassword &&
                !_vm.validation.isValidPassword
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v("\n          8 caracteres mínimo.\n        "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v("\n          1 mayúscula mínimo.\n        "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v("\n          1 minúscula mínimo.\n        "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v("\n          13 caracteres máximo.\n        "),
                      ]),
                    ])
                  : _vm._e(),
              ],
            ],
            2
          )
        : _vm._e(),
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfYmFzZS1jb21wb25lbnRzX0Jhc2VJbnB1dF92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThJQSxpRUFBZTtBQUNmQSxxQkFEQTtBQUVBQyxNQUZBLGtCQUVBO0FBQ0E7QUFDQUEsY0FEQTtBQUVBQyxnQkFGQTtBQUdBQztBQUhBO0FBS0EsR0FSQTtBQVNBQztBQUNBQztBQUNBQyxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBQztBQUNBRCxrQkFEQTtBQUVBO0FBRkEsS0FMQTtBQVNBRTtBQUNBRixrQkFEQTtBQUVBO0FBRkEsS0FUQTtBQWFBRztBQUNBSCxtQkFEQTtBQUVBO0FBRkEsS0FiQTtBQWlCQUE7QUFDQUEsa0JBREE7QUFFQTtBQUZBLEtBakJBO0FBcUJBSTtBQUNBSixrQkFEQTtBQUVBO0FBRkEsS0FyQkE7QUF5QkFLO0FBQ0FMLGtCQURBO0FBRUE7QUFDQTtBQUNBRyx3QkFEQTtBQUVBRyx1QkFGQTtBQUdBQywwQkFIQTtBQUlBQywwQkFKQTtBQUtBQyx5QkFMQTtBQU1BQyx5QkFOQTtBQU9BQywyQkFQQTtBQVFBQywyQkFSQTtBQVNBQyw0QkFUQTtBQVVBQywyQkFWQTtBQVdBQyxrQ0FYQTtBQVlBQywyQkFaQTtBQWFBQyxzQkFiQTtBQWNBQztBQWRBO0FBZ0JBO0FBbkJBLEtBekJBO0FBOENBQztBQUNBbkIsa0JBREE7QUFFQTtBQUZBLEtBOUNBO0FBa0RBb0I7QUFDQXBCLGtCQURBO0FBRUE7QUFGQSxLQWxEQTtBQXNEQXFCO0FBQ0FyQixtQkFEQTtBQUVBO0FBRkEsS0F0REE7QUEwREFzQjtBQUNBdEIsbUJBREE7QUFFQTtBQUZB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlP2I0YzAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlPzQ2ODMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlPzFkMDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0Jhc2VJbnB1dC52dWU/NTk2MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZUlucHV0LnZ1ZT8yYWE3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlPzk1NGIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHYtdGV4dC1maWVsZFxuICAgICAgZGVuc2VcbiAgICAgIDpsYWJlbD1cImxhYmVsXCJcbiAgICAgIG91dGxpbmVkXG4gICAgICB2LW1vZGVsLnRyaW09XCJkYXRhXCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2lzLWludmFsaWQnOiB2YWxpZGF0aW9uLiRlcnJvcixcbiAgICAgICAgJ2lzLXZhbGlkJzogIXZhbGlkYXRpb24uJGludmFsaWQsXG4gICAgICB9XCJcbiAgICAgIDprZXk9XCJjb3VudGVyXCJcbiAgICAgIDptaW49XCJtaW5cIlxuICAgICAgOm1heD1cIm1heFwiXG4gICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICA6dHlwZT1cInR5cGVcIlxuICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWVcIlxuICAgICAgdi1tYXNrPVwibWFza1wiXG4gICAgICBAa2V5dXA9XCJ2YWxpZGF0ZVRleHQoKVwiXG4gICAgICBhdXRvY29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxuICAgICAgY2xhc3M9XCJtYi0xXCJcbiAgICA+XG4gICAgICA8di1pY29uXG4gICAgICAgIHNsb3Q9XCJhcHBlbmRcIlxuICAgICAgICBjb2xvcj1cImdyZWVuXCJcbiAgICAgICAgdi1pZj1cInZhbGlkYXRpb25zSW5wdXQuc2hvd1Bhc3N3b3JkXCJcbiAgICAgICAgQGNsaWNrPVwic2hvd1Bhc3N3b3JkKClcIlxuICAgICAgPlxuICAgICAgICB7eyBpY29uIH19XG4gICAgICA8L3YtaWNvbj5cbiAgICA8L3YtdGV4dC1maWVsZD5cbiAgICA8di1jb250YWluZXIgY2xhc3M9XCJtYi0wIHB0LTAgbXktYXV0byBvcmFuZ2UtdGV4dFwiIHYtaWY9XCJ2YWxpZGF0aW9uLiRkaXJ0eVwiPlxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhdmFsaWRhdGlvbnNJbnB1dC5yZXF1aXJlZFwiPlxuICAgICAgICA8di1yb3cgY2xhc3M9XCJwdC0wXCIgdi1pZj1cIiF2YWxpZGF0aW9uc0lucHV0LnJlcXVpcmVkXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtYi0wIG10LTEgdGV4dC1tdXRlZFwiPihDYW1wbyBvcGNpb25hbCk8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlPlxuICAgICAgICA8di1yb3dcbiAgICAgICAgICB2LWlmPVwidmFsaWRhdGlvbi4kZXJyb3IgJiYgdmFsaWRhdGlvbnNJbnB1dC5yZXF1aXJlZFwiXG4gICAgICAgICAgY2xhc3M9XCJwdC0wXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwIGNsYXNzPVwibWItMCBtdC0xXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gQ2FtcG8gcmVxdWVyaWRvLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC92LXJvdz5cbiAgICAgICAgPHYtcm93IHYtaWY9XCJ2YWxpZGF0aW9uc0lucHV0Lm1pbkxlbmd0aCAmJiAhdmFsaWRhdGlvbi5taW5MZW5ndGhcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInBsLTAgbXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IHt7IG1pbiB9fSBjYXLDoWN0ZXJcbiAgICAgICAgICAgIG3DrW5pbW8uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3Ytcm93PlxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb25zSW5wdXQubWF4TGVuZ3RoICYmICF2YWxpZGF0aW9uLm1heExlbmd0aFwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwicGwtMCBwci0wIG10LTFcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPiB7eyBtYXggfX0gY2FyYWN0ZXJlc1xuICAgICAgICAgICAgbcOheGltby5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbnNJbnB1dC5taW5WYWx1ZSAmJiAhdmFsaWRhdGlvbi5taW5WYWx1ZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IHt7IG1pbiB9fSBlcyBlbCB2YWxvclxuICAgICAgICAgICAgbcOtbmltby5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbnNJbnB1dC5tYXhWYWx1ZSAmJiAhdmFsaWRhdGlvbi5tYXhWYWx1ZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IHt7IG1heCB9fSBlbCB2YWxvclxuICAgICAgICAgICAgbcOheGltby5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbnNJbnB1dC5mb3JtYXQgJiYgIXZhbGlkYXRpb24uaXNWYWxpZE51bWJlclwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IEZvcm1hdG8gaW52w6FsaWRvXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3Ytcm93PlxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb25zSW5wdXQuaXNWYWxpZER1aSAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkRHVpXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gRFVJIGludsOhbGlkb1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC92LXJvdz5cbiAgICAgICAgPHYtcm93IHYtaWY9XCJ2YWxpZGF0aW9uc0lucHV0LmlzVmFsaWROaXQgJiYgIXZhbGlkYXRpb24uaXNWYWxpZE5pdFwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IE5JVCBpbnbDoWxpZG9cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbnNJbnB1dC5pc1ZhbGlkSXNzcyAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkSXNzc1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IElTU1MgaW52w6FsaWRvXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3Ytcm93PlxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb25zSW5wdXQuaXNWYWxpZEFmcCAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkQWZwXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gQUZQIGludsOhbGlkb1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC92LXJvdz5cbiAgICAgICAgPHYtcm93XG4gICAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICAgdmFsaWRhdGlvbnNJbnB1dC5pc1ZhbGlkQ29uYW15cGVJZCAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkQ29uYW15cGVJZFxuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPiBJRCBkZSBDb25hbXlwZSBpbnbDoWxpZG9cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbnNJbnB1dC5pc1ZhbGlkTnJjICYmICF2YWxpZGF0aW9uLmlzVmFsaWROcmNcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPiBOUkMgaW52w6FsaWRvXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3Ytcm93PlxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb25zSW5wdXQuZW1haWwgJiYgIXZhbGlkYXRpb24uZW1haWxcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPiBGb3JtYXRvIGRlIGNvcnJlb1xuICAgICAgICAgICAgZWxlY3Ryw7NuaWNvIGludsOhbGlkby5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LXJvd1xuICAgICAgICAgIHYtaWY9XCJ2YWxpZGF0aW9uc0lucHV0LmlzVmFsaWRQYXNzd29yZCAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkUGFzc3dvcmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT5cbiAgICAgICAgICAgIDggY2FyYWN0ZXJlcyBtw61uaW1vLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPlxuICAgICAgICAgICAgMSBtYXnDunNjdWxhIG3DrW5pbW8uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+XG4gICAgICAgICAgICAxIG1pbsO6c2N1bGEgbcOtbmltby5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT5cbiAgICAgICAgICAgIDEzIGNhcmFjdGVyZXMgbcOheGltby5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvdi1jb250YWluZXI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogXCJcIixcbiAgICAgIGNvdW50ZXI6IDAsXG4gICAgICBpY29uOiBcInZpc2liaWxpdHlcIixcbiAgICB9O1xuICB9LFxuICBwcm9wczoge1xuICAgIGxhYmVsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIlwiLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvbjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogXCJcIixcbiAgICB9LFxuICAgIHZhbGlkYXRpb25UZXh0VHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIixcbiAgICB9LFxuICAgIHJlcXVpcmVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcInRleHRcIixcbiAgICB9LFxuICAgIG1hc2s6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uc0lucHV0OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgZm9ybWF0OiBmYWxzZSxcbiAgICAgICAgICBtaW5MZW5ndGg6IGZhbHNlLFxuICAgICAgICAgIG1heExlbmd0aDogZmFsc2UsXG4gICAgICAgICAgbWluVmFsdWU6IGZhbHNlLFxuICAgICAgICAgIG1heFZhbHVlOiBmYWxzZSxcbiAgICAgICAgICBpc1ZhbGlkRHVpOiBmYWxzZSxcbiAgICAgICAgICBpc1ZhbGlkTml0OiBmYWxzZSxcbiAgICAgICAgICBpc1ZhbGlkSXNzczogZmFsc2UsXG4gICAgICAgICAgaXNWYWxpZEFmcDogZmFsc2UsXG4gICAgICAgICAgaXNWYWxpZENvbmFteXBlSWQ6IGZhbHNlLFxuICAgICAgICAgIGlzVmFsaWROcmM6IGZhbHNlLFxuICAgICAgICAgIGVtYWlsOiBmYWxzZSxcbiAgICAgICAgICBzaG93UGFzc3dvcmQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9LFxuICAgIG1pbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIG1heDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMTUwLFxuICAgIH0sXG4gICAgcmVhZG9ubHk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB0eXBlKHZhbCkge1xuICAgICAgdGhpcy5pY29uID0gdGhpcy50eXBlID09IFwicGFzc3dvcmRcIiA/IFwidmlzaWJpbGl0eVwiIDogXCJ2aXNpYmlsaXR5X29mZlwiO1xuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy4kYXR0cnMudmFsdWU7XG4gICAgdGhpcy52YWxpZGF0aW9uLiRyZXNldCgpO1xuICB9LFxuICB1cGRhdGVkKCkge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMudmFsaWRhdGlvbi4kbW9kZWw7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvbi4kbW9kZWwgPSB0aGlzLmRhdGE7XG4gICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgdGhpcy5kYXRhKTtcbiAgICB9LFxuXG4gICAgdmFsaWRhdGVUZXh0KCkge1xuICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMudmFsaWRhdGlvblRleHRUeXBlKSB7XG4gICAgICAgICAgY2FzZSBcImRlZmF1bHRcIjpcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKFxuICAgICAgICAgICAgICAvW15BLVrDoMOow6zDssO5w4DDiMOMw5LDmcOhw6nDrcOzw7rDvcOBw4nDjcOTw5rDsVxcJyAnXS9naSxcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eKFthLXpBLVowLTldKVxcMXs0fS9naSwgXCJcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwib25seS1sZXR0ZXJzXCI6XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShcbiAgICAgICAgICAgICAgL1teQS1aw6DDqMOsw7LDucOAw4jDjMOSw5nDocOpw63Ds8O6w73DgcOJw43Dk8Oaw7FcXCcgJ10vZ2ksXG4gICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwib25seS1udW1iZXJzXCI6XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvW14wLTlcXC1dL2csIFwiXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm5vbmVcIjpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJvbmx5LXJlcGVhdHNcIjpcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eKFthLXpBLVowLTldKVxcMXs0fS9nLCBcIlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnZhbGlkYXRpb24uJG1vZGVsID0gdGhpcy5kYXRhO1xuICAgICAgdGhpcy4kZW1pdChcImtleXVwXCIsIHRoaXMuZGF0YSk7XG4gICAgfSxcblxuICAgIHNob3dQYXNzd29yZCgpIHtcbiAgICAgIGNvbnN0IHNob3cgPSB0aGlzLnR5cGUgPT0gXCJwYXNzd29yZFwiID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCI7XG5cbiAgICAgIHRoaXMuJGVtaXQoXCJ1cGRhdGUtcGFzc3dvcmRcIiwgeyBzaG93IH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi52LXRleHQtZmllbGQtLW91dGxpbmVkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XG59XG5cbi52LXRleHQtZmllbGQtLW91dGxpbmVkLnYtaW5wdXQtLWlzLWZvY3VzZWQgZmllbGRzZXQsXG4udi10ZXh0LWZpZWxkLS1vdXRsaW5lZC52LWlucHV0LS1oYXMtc3RhdGUgZmllbGRzZXQge1xuICBib3JkZXItY29sb3I6ICMyZDUyYTggIWltcG9ydGFudDtcbn1cblxuLnYtdGV4dC1maWVsZF9fZGV0YWlscyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7IC8qIHNhbWUgYXMgaGVpZ2h0ISAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQge1xcbiAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XFxufVxcbi52LXRleHQtZmllbGQtLW91dGxpbmVkLnYtaW5wdXQtLWlzLWZvY3VzZWQgZmllbGRzZXQsXFxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQudi1pbnB1dC0taGFzLXN0YXRlIGZpZWxkc2V0IHtcXG4gIGJvcmRlci1jb2xvcjogIzJkNTJhOCAhaW1wb3J0YW50O1xcbn1cXG4udi10ZXh0LWZpZWxkX19kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjBweDsgLyogc2FtZSBhcyBoZWlnaHQhICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0Jhc2VJbnB1dC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW1SQTtFQUNBLGdDQUFBO0FBQ0E7QUFFQTs7RUFFQSxnQ0FBQTtBQUNBO0FBRUE7RUFDQSxhQUFBO0FBQ0E7QUFFQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0E7QUFFQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBLEVBQUEsb0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdj5cXG4gICAgPHYtdGV4dC1maWVsZFxcbiAgICAgIGRlbnNlXFxuICAgICAgOmxhYmVsPVxcXCJsYWJlbFxcXCJcXG4gICAgICBvdXRsaW5lZFxcbiAgICAgIHYtbW9kZWwudHJpbT1cXFwiZGF0YVxcXCJcXG4gICAgICA6Y2xhc3M9XFxcIntcXG4gICAgICAgICdpcy1pbnZhbGlkJzogdmFsaWRhdGlvbi4kZXJyb3IsXFxuICAgICAgICAnaXMtdmFsaWQnOiAhdmFsaWRhdGlvbi4kaW52YWxpZCxcXG4gICAgICB9XFxcIlxcbiAgICAgIDprZXk9XFxcImNvdW50ZXJcXFwiXFxuICAgICAgOm1pbj1cXFwibWluXFxcIlxcbiAgICAgIDptYXg9XFxcIm1heFxcXCJcXG4gICAgICA6cmVhZG9ubHk9XFxcInJlYWRvbmx5XFxcIlxcbiAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuICAgICAgOnR5cGU9XFxcInR5cGVcXFwiXFxuICAgICAgQGlucHV0PVxcXCJ1cGRhdGVWYWx1ZVxcXCJcXG4gICAgICB2LW1hc2s9XFxcIm1hc2tcXFwiXFxuICAgICAgQGtleXVwPVxcXCJ2YWxpZGF0ZVRleHQoKVxcXCJcXG4gICAgICBhdXRvY29tcGxldGU9XFxcIm5ldy1wYXNzd29yZFxcXCJcXG4gICAgICBjbGFzcz1cXFwibWItMVxcXCJcXG4gICAgPlxcbiAgICAgIDx2LWljb25cXG4gICAgICAgIHNsb3Q9XFxcImFwcGVuZFxcXCJcXG4gICAgICAgIGNvbG9yPVxcXCJncmVlblxcXCJcXG4gICAgICAgIHYtaWY9XFxcInZhbGlkYXRpb25zSW5wdXQuc2hvd1Bhc3N3b3JkXFxcIlxcbiAgICAgICAgQGNsaWNrPVxcXCJzaG93UGFzc3dvcmQoKVxcXCJcXG4gICAgICA+XFxuICAgICAgICB7eyBpY29uIH19XFxuICAgICAgPC92LWljb24+XFxuICAgIDwvdi10ZXh0LWZpZWxkPlxcbiAgICA8di1jb250YWluZXIgY2xhc3M9XFxcIm1iLTAgcHQtMCBteS1hdXRvIG9yYW5nZS10ZXh0XFxcIiB2LWlmPVxcXCJ2YWxpZGF0aW9uLiRkaXJ0eVxcXCI+XFxuICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcIiF2YWxpZGF0aW9uc0lucHV0LnJlcXVpcmVkXFxcIj5cXG4gICAgICAgIDx2LXJvdyBjbGFzcz1cXFwicHQtMFxcXCIgdi1pZj1cXFwiIXZhbGlkYXRpb25zSW5wdXQucmVxdWlyZWRcXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibWItMCBtdC0xIHRleHQtbXV0ZWRcXFwiPihDYW1wbyBvcGNpb25hbCk8L3A+XFxuICAgICAgICA8L3Ytcm93PlxcbiAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgPHRlbXBsYXRlPlxcbiAgICAgICAgPHYtcm93XFxuICAgICAgICAgIHYtaWY9XFxcInZhbGlkYXRpb24uJGVycm9yICYmIHZhbGlkYXRpb25zSW5wdXQucmVxdWlyZWRcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJwdC0wXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibWItMCBtdC0xXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IENhbXBvIHJlcXVlcmlkby5cXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgPC92LXJvdz5cXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uc0lucHV0Lm1pbkxlbmd0aCAmJiAhdmFsaWRhdGlvbi5taW5MZW5ndGhcXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwicGwtMCBtdC0xXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IHt7IG1pbiB9fSBjYXLDoWN0ZXJcXG4gICAgICAgICAgICBtw61uaW1vLlxcbiAgICAgICAgICA8L3A+XFxuICAgICAgICA8L3Ytcm93PlxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcInZhbGlkYXRpb25zSW5wdXQubWF4TGVuZ3RoICYmICF2YWxpZGF0aW9uLm1heExlbmd0aFxcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJwbC0wIHByLTAgbXQtMVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPiB7eyBtYXggfX0gY2FyYWN0ZXJlc1xcbiAgICAgICAgICAgIG3DoXhpbW8uXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvdi1yb3c+XFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbnNJbnB1dC5taW5WYWx1ZSAmJiAhdmFsaWRhdGlvbi5taW5WYWx1ZVxcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IHt7IG1pbiB9fSBlcyBlbCB2YWxvclxcbiAgICAgICAgICAgIG3DrW5pbW8uXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvdi1yb3c+XFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbnNJbnB1dC5tYXhWYWx1ZSAmJiAhdmFsaWRhdGlvbi5tYXhWYWx1ZVxcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IHt7IG1heCB9fSBlbCB2YWxvclxcbiAgICAgICAgICAgIG3DoXhpbW8uXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvdi1yb3c+XFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbnNJbnB1dC5mb3JtYXQgJiYgIXZhbGlkYXRpb24uaXNWYWxpZE51bWJlclxcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IEZvcm1hdG8gaW52w6FsaWRvXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvdi1yb3c+XFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbnNJbnB1dC5pc1ZhbGlkRHVpICYmICF2YWxpZGF0aW9uLmlzVmFsaWREdWlcXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPiBEVUkgaW52w6FsaWRvXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvdi1yb3c+XFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbnNJbnB1dC5pc1ZhbGlkTml0ICYmICF2YWxpZGF0aW9uLmlzVmFsaWROaXRcXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPiBOSVQgaW52w6FsaWRvXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvdi1yb3c+XFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbnNJbnB1dC5pc1ZhbGlkSXNzcyAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkSXNzc1xcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IElTU1MgaW52w6FsaWRvXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvdi1yb3c+XFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbnNJbnB1dC5pc1ZhbGlkQWZwICYmICF2YWxpZGF0aW9uLmlzVmFsaWRBZnBcXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPiBBRlAgaW52w6FsaWRvXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvdi1yb3c+XFxuICAgICAgICA8di1yb3dcXG4gICAgICAgICAgdi1pZj1cXFwiXFxuICAgICAgICAgICAgdmFsaWRhdGlvbnNJbnB1dC5pc1ZhbGlkQ29uYW15cGVJZCAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkQ29uYW15cGVJZFxcbiAgICAgICAgICBcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IElEIGRlIENvbmFteXBlIGludsOhbGlkb1xcbiAgICAgICAgICA8L3A+XFxuICAgICAgICA8L3Ytcm93PlxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcInZhbGlkYXRpb25zSW5wdXQuaXNWYWxpZE5yYyAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkTnJjXFxcIj5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4gTlJDIGludsOhbGlkb1xcbiAgICAgICAgICA8L3A+XFxuICAgICAgICA8L3Ytcm93PlxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcInZhbGlkYXRpb25zSW5wdXQuZW1haWwgJiYgIXZhbGlkYXRpb24uZW1haWxcXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPiBGb3JtYXRvIGRlIGNvcnJlb1xcbiAgICAgICAgICAgIGVsZWN0csOzbmljbyBpbnbDoWxpZG8uXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvdi1yb3c+XFxuICAgICAgICA8di1yb3dcXG4gICAgICAgICAgdi1pZj1cXFwidmFsaWRhdGlvbnNJbnB1dC5pc1ZhbGlkUGFzc3dvcmQgJiYgIXZhbGlkYXRpb24uaXNWYWxpZFBhc3N3b3JkXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPlxcbiAgICAgICAgICAgIDggY2FyYWN0ZXJlcyBtw61uaW1vLlxcbiAgICAgICAgICA8L3A+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+XFxuICAgICAgICAgICAgMSBtYXnDunNjdWxhIG3DrW5pbW8uXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT5cXG4gICAgICAgICAgICAxIG1pbsO6c2N1bGEgbcOtbmltby5cXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPlxcbiAgICAgICAgICAgIDEzIGNhcmFjdGVyZXMgbcOheGltby5cXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgPC92LXJvdz5cXG4gICAgICA8L3RlbXBsYXRlPlxcbiAgICA8L3YtY29udGFpbmVyPlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXFxuICBkYXRhKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGRhdGE6IFxcXCJcXFwiLFxcbiAgICAgIGNvdW50ZXI6IDAsXFxuICAgICAgaWNvbjogXFxcInZpc2liaWxpdHlcXFwiLFxcbiAgICB9O1xcbiAgfSxcXG4gIHByb3BzOiB7XFxuICAgIGxhYmVsOiB7XFxuICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgIGRlZmF1bHQ6IFxcXCJcXFwiLFxcbiAgICB9LFxcbiAgICB2YWxpZGF0aW9uOiB7XFxuICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgIGRlZmF1bHQ6IFxcXCJcXFwiLFxcbiAgICB9LFxcbiAgICB2YWxpZGF0aW9uVGV4dFR5cGU6IHtcXG4gICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgZGVmYXVsdDogXFxcIlxcXCIsXFxuICAgIH0sXFxuICAgIHJlcXVpcmVkOiB7XFxuICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgfSxcXG4gICAgdHlwZToge1xcbiAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICBkZWZhdWx0OiBcXFwidGV4dFxcXCIsXFxuICAgIH0sXFxuICAgIG1hc2s6IHtcXG4gICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgZGVmYXVsdDogXFxcIlxcXCIsXFxuICAgIH0sXFxuICAgIHZhbGlkYXRpb25zSW5wdXQ6IHtcXG4gICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgZGVmYXVsdDogKCkgPT4ge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICAgIGZvcm1hdDogZmFsc2UsXFxuICAgICAgICAgIG1pbkxlbmd0aDogZmFsc2UsXFxuICAgICAgICAgIG1heExlbmd0aDogZmFsc2UsXFxuICAgICAgICAgIG1pblZhbHVlOiBmYWxzZSxcXG4gICAgICAgICAgbWF4VmFsdWU6IGZhbHNlLFxcbiAgICAgICAgICBpc1ZhbGlkRHVpOiBmYWxzZSxcXG4gICAgICAgICAgaXNWYWxpZE5pdDogZmFsc2UsXFxuICAgICAgICAgIGlzVmFsaWRJc3NzOiBmYWxzZSxcXG4gICAgICAgICAgaXNWYWxpZEFmcDogZmFsc2UsXFxuICAgICAgICAgIGlzVmFsaWRDb25hbXlwZUlkOiBmYWxzZSxcXG4gICAgICAgICAgaXNWYWxpZE5yYzogZmFsc2UsXFxuICAgICAgICAgIGVtYWlsOiBmYWxzZSxcXG4gICAgICAgICAgc2hvd1Bhc3N3b3JkOiBmYWxzZSxcXG4gICAgICAgIH07XFxuICAgICAgfSxcXG4gICAgfSxcXG4gICAgbWluOiB7XFxuICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgIGRlZmF1bHQ6IDAsXFxuICAgIH0sXFxuICAgIG1heDoge1xcbiAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICBkZWZhdWx0OiAxNTAsXFxuICAgIH0sXFxuICAgIHJlYWRvbmx5OiB7XFxuICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgfSxcXG4gICAgZGlzYWJsZWQ6IHtcXG4gICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICB9LFxcbiAgfSxcXG4gIHdhdGNoOiB7XFxuICAgIHR5cGUodmFsKSB7XFxuICAgICAgdGhpcy5pY29uID0gdGhpcy50eXBlID09IFxcXCJwYXNzd29yZFxcXCIgPyBcXFwidmlzaWJpbGl0eVxcXCIgOiBcXFwidmlzaWJpbGl0eV9vZmZcXFwiO1xcbiAgICB9LFxcbiAgfSxcXG4gIG1vdW50ZWQoKSB7XFxuICAgIHRoaXMuZGF0YSA9IHRoaXMuJGF0dHJzLnZhbHVlO1xcbiAgICB0aGlzLnZhbGlkYXRpb24uJHJlc2V0KCk7XFxuICB9LFxcbiAgdXBkYXRlZCgpIHtcXG4gICAgdGhpcy5kYXRhID0gdGhpcy52YWxpZGF0aW9uLiRtb2RlbDtcXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgIHVwZGF0ZVZhbHVlKCkge1xcbiAgICAgIHRoaXMudmFsaWRhdGlvbi4kbW9kZWwgPSB0aGlzLmRhdGE7XFxuICAgICAgdGhpcy4kZW1pdChcXFwiaW5wdXRcXFwiLCB0aGlzLmRhdGEpO1xcbiAgICB9LFxcblxcbiAgICB2YWxpZGF0ZVRleHQoKSB7XFxuICAgICAgaWYgKHRoaXMuZGF0YSkge1xcbiAgICAgICAgc3dpdGNoICh0aGlzLnZhbGlkYXRpb25UZXh0VHlwZSkge1xcbiAgICAgICAgICBjYXNlIFxcXCJkZWZhdWx0XFxcIjpcXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShcXG4gICAgICAgICAgICAgIC9bXkEtWsOgw6jDrMOyw7nDgMOIw4zDksOZw6HDqcOtw7PDusO9w4HDicONw5PDmsOxXFxcXCcgJ10vZ2ksXFxuICAgICAgICAgICAgICBcXFwiXFxcIlxcbiAgICAgICAgICAgICk7XFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL14oW2EtekEtWjAtOV0pXFxcXDF7NH0vZ2ksIFxcXCJcXFwiKTtcXG4gICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgY2FzZSBcXFwib25seS1sZXR0ZXJzXFxcIjpcXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShcXG4gICAgICAgICAgICAgIC9bXkEtWsOgw6jDrMOyw7nDgMOIw4zDksOZw6HDqcOtw7PDusO9w4HDicONw5PDmsOxXFxcXCcgJ10vZ2ksXFxuICAgICAgICAgICAgICBcXFwiXFxcIlxcbiAgICAgICAgICAgICk7XFxuICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgIGNhc2UgXFxcIm9ubHktbnVtYmVyc1xcXCI6XFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL1teMC05XFxcXC1dL2csIFxcXCJcXFwiKTtcXG4gICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgY2FzZSBcXFwibm9uZVxcXCI6XFxuICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgIGNhc2UgXFxcIm9ubHktcmVwZWF0c1xcXCI6XFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL14oW2EtekEtWjAtOV0pXFxcXDF7NH0vZywgXFxcIlxcXCIpO1xcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICBkZWZhdWx0OlxcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICB0aGlzLnZhbGlkYXRpb24uJG1vZGVsID0gdGhpcy5kYXRhO1xcbiAgICAgIHRoaXMuJGVtaXQoXFxcImtleXVwXFxcIiwgdGhpcy5kYXRhKTtcXG4gICAgfSxcXG5cXG4gICAgc2hvd1Bhc3N3b3JkKCkge1xcbiAgICAgIGNvbnN0IHNob3cgPSB0aGlzLnR5cGUgPT0gXFxcInBhc3N3b3JkXFxcIiA/IFxcXCJ0ZXh0XFxcIiA6IFxcXCJwYXNzd29yZFxcXCI7XFxuXFxuICAgICAgdGhpcy4kZW1pdChcXFwidXBkYXRlLXBhc3N3b3JkXFxcIiwgeyBzaG93IH0pO1xcbiAgICB9LFxcbiAgfSxcXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4udi10ZXh0LWZpZWxkLS1vdXRsaW5lZCB7XFxuICBib3JkZXItY29sb3I6ICMxOTc2ZDIgIWltcG9ydGFudDtcXG59XFxuXFxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQudi1pbnB1dC0taXMtZm9jdXNlZCBmaWVsZHNldCxcXG4udi10ZXh0LWZpZWxkLS1vdXRsaW5lZC52LWlucHV0LS1oYXMtc3RhdGUgZmllbGRzZXQge1xcbiAgYm9yZGVyLWNvbG9yOiAjMmQ1MmE4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi52LXRleHQtZmllbGRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4OyAvKiBzYW1lIGFzIGhlaWdodCEgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlSW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Jhc2VJbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2UyYmNmNjEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9CYXNlSW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2FkbWluaXN0cmFkb3IvbmdpbngvYXBwcy9BY2Npb25EZVBlcnNvbmFsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdlMmJjZjYxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdlMmJjZjYxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdlMmJjZjYxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CYXNlSW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlMmJjZjYxJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdlMmJjZjYxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZUlucHV0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlSW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlSW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTJiY2Y2MSZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi10ZXh0LWZpZWxkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibWFza1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbWFza1wiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1hc2ssXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWFza1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGtleTogX3ZtLmNvdW50ZXIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMVwiLFxuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZhbGlkYXRpb24uJGVycm9yLFxuICAgICAgICAgICAgXCJpcy12YWxpZFwiOiAhX3ZtLnZhbGlkYXRpb24uJGludmFsaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgZGVuc2U6IFwiXCIsXG4gICAgICAgICAgICBsYWJlbDogX3ZtLmxhYmVsLFxuICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgICBtaW46IF92bS5taW4sXG4gICAgICAgICAgICBtYXg6IF92bS5tYXgsXG4gICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZCxcbiAgICAgICAgICAgIHR5cGU6IF92bS50eXBlLFxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm5ldy1wYXNzd29yZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBfdm0udXBkYXRlVmFsdWUsXG4gICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZhbGlkYXRlVGV4dCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kYXRhID0gdHlwZW9mICQkdiA9PT0gXCJzdHJpbmdcIiA/ICQkdi50cmltKCkgOiAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGFcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQuc2hvd1Bhc3N3b3JkXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJhcHBlbmRcIiwgY29sb3I6IFwiZ3JlZW5cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dQYXNzd29yZCgpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc2xvdDogXCJhcHBlbmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0uaWNvbikgKyBcIlxcbiAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnZhbGlkYXRpb24uJGRpcnR5XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTAgcHQtMCBteS1hdXRvIG9yYW5nZS10ZXh0XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgIV92bS52YWxpZGF0aW9uc0lucHV0LnJlcXVpcmVkXG4gICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0udmFsaWRhdGlvbnNJbnB1dC5yZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCB7IHN0YXRpY0NsYXNzOiBcInB0LTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTAgbXQtMSB0ZXh0LW11dGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIihDYW1wbyBvcGNpb25hbClcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbi4kZXJyb3IgJiYgX3ZtLnZhbGlkYXRpb25zSW5wdXQucmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCB7IHN0YXRpY0NsYXNzOiBcInB0LTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMCBtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBDYW1wbyByZXF1ZXJpZG8uXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQubWluTGVuZ3RoICYmICFfdm0udmFsaWRhdGlvbi5taW5MZW5ndGhcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicGwtMCBtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWluKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgY2Fyw6FjdGVyXFxuICAgICAgICAgIG3DrW5pbW8uXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbnNJbnB1dC5tYXhMZW5ndGggJiYgIV92bS52YWxpZGF0aW9uLm1heExlbmd0aFxuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJwbC0wIHByLTAgbXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm1heCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGNhcmFjdGVyZXNcXG4gICAgICAgICAgbcOheGltby5cXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uc0lucHV0Lm1pblZhbHVlICYmICFfdm0udmFsaWRhdGlvbi5taW5WYWx1ZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWluKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgZXMgZWwgdmFsb3JcXG4gICAgICAgICAgbcOtbmltby5cXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uc0lucHV0Lm1heFZhbHVlICYmICFfdm0udmFsaWRhdGlvbi5tYXhWYWx1ZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWF4KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgZWwgdmFsb3JcXG4gICAgICAgICAgbcOheGltby5cXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uc0lucHV0LmZvcm1hdCAmJiAhX3ZtLnZhbGlkYXRpb24uaXNWYWxpZE51bWJlclxuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBGb3JtYXRvIGludsOhbGlkb1xcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uc0lucHV0LmlzVmFsaWREdWkgJiYgIV92bS52YWxpZGF0aW9uLmlzVmFsaWREdWlcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgRFVJIGludsOhbGlkb1xcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uc0lucHV0LmlzVmFsaWROaXQgJiYgIV92bS52YWxpZGF0aW9uLmlzVmFsaWROaXRcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTklUIGludsOhbGlkb1xcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uc0lucHV0LmlzVmFsaWRJc3NzICYmICFfdm0udmFsaWRhdGlvbi5pc1ZhbGlkSXNzc1xuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBJU1NTIGludsOhbGlkb1xcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uc0lucHV0LmlzVmFsaWRBZnAgJiYgIV92bS52YWxpZGF0aW9uLmlzVmFsaWRBZnBcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgQUZQIGludsOhbGlkb1xcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uc0lucHV0LmlzVmFsaWRDb25hbXlwZUlkICYmXG4gICAgICAgICAgICAgICAgIV92bS52YWxpZGF0aW9uLmlzVmFsaWRDb25hbXlwZUlkXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIElEIGRlIENvbmFteXBlIGludsOhbGlkb1xcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uc0lucHV0LmlzVmFsaWROcmMgJiYgIV92bS52YWxpZGF0aW9uLmlzVmFsaWROcmNcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTlJDIGludsOhbGlkb1xcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uc0lucHV0LmVtYWlsICYmICFfdm0udmFsaWRhdGlvbi5lbWFpbFxuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgRm9ybWF0byBkZSBjb3JyZW9cXG4gICAgICAgICAgZWxlY3Ryw7NuaWNvIGludsOhbGlkby5cXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uc0lucHV0LmlzVmFsaWRQYXNzd29yZCAmJlxuICAgICAgICAgICAgICAgICFfdm0udmFsaWRhdGlvbi5pc1ZhbGlkUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgOCBjYXJhY3RlcmVzIG3DrW5pbW8uXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAxIG1hecO6c2N1bGEgbcOtbmltby5cXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIDEgbWluw7pzY3VsYSBtw61uaW1vLlxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgMTMgY2FyYWN0ZXJlcyBtw6F4aW1vLlxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJpbmhlcml0QXR0cnMiLCJkYXRhIiwiY291bnRlciIsImljb24iLCJwcm9wcyIsImxhYmVsIiwidHlwZSIsInZhbGlkYXRpb24iLCJ2YWxpZGF0aW9uVGV4dFR5cGUiLCJyZXF1aXJlZCIsIm1hc2siLCJ2YWxpZGF0aW9uc0lucHV0IiwiZm9ybWF0IiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImlzVmFsaWREdWkiLCJpc1ZhbGlkTml0IiwiaXNWYWxpZElzc3MiLCJpc1ZhbGlkQWZwIiwiaXNWYWxpZENvbmFteXBlSWQiLCJpc1ZhbGlkTnJjIiwiZW1haWwiLCJzaG93UGFzc3dvcmQiLCJtaW4iLCJtYXgiLCJyZWFkb25seSIsImRpc2FibGVkIiwid2F0Y2giLCJ2YWwiLCJtb3VudGVkIiwidXBkYXRlZCIsIm1ldGhvZHMiLCJ1cGRhdGVWYWx1ZSIsInZhbGlkYXRlVGV4dCIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9