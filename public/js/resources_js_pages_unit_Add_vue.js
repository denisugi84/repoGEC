"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_unit_Add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/unit/Add.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/unit/Add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_unit_components_Form_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pages/unit/components/Form.vue */ "./resources/js/pages/unit/components/Form.vue");
//
//
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
  components: {
    Form: _pages_unit_components_Form_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/unit/components/Form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/unit/components/Form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['unit'],
  data: function data() {
    return {
      action: 'save',
      url: '/api/unit',
      form: {},
      submitted: false,
      error_validation: {}
    };
  },
  mounted: function mounted() {
    this.checkAction();
  },
  methods: {
    checkAction: function checkAction() {
      if (this.unit) {
        this.action = 'update';
        this.url += "/".concat(this.$route.params.unit_id);
        this.getUnit();
      }
    },
    getUnit: function getUnit() {
      var _this = this;

      axios.get("/api/unit/".concat(this.$route.params.unit_id)).then(function (res) {
        _this.form = res.data;
      });
    },
    request: function () {
      var _request = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.unit) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return axios.put(this.url, this.form);

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                console.log('ok');
                _context.next = 9;
                return axios.post(this.url, this.form);

              case 9:
                return _context.abrupt("return", _context.sent);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function request() {
        return _request.apply(this, arguments);
      }

      return request;
    }(),
    proceedData: function () {
      var _proceedData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                swal({
                  title: "Anda akan ".concat(this.action == 'save' ? 'menambahkan' : 'memperbaharui', " data Unit"),
                  text: "Lanjutkan?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: false
                }).then(function (value) {
                  if (value) {
                    $.LoadingOverlay("show");

                    _this2.request().then(function (res) {
                      if (res.data.status == true) {
                        _this2.$router.push({
                          name: 'unit.index'
                        });

                        _this2.submitted = true;
                        toastr.success(res.data.message, "Success!");
                      } else {
                        swal("Please check your input", res.data.message, "warning");
                        _this2.error_validation = res.data.data;

                        _this2.applyValidator(res.data.data);
                      }
                    })["catch"](function (e) {
                      console.log(e.response);
                    }).then(function () {
                      $.LoadingOverlay("hide");
                    });
                  }
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function proceedData() {
        return _proceedData.apply(this, arguments);
      }

      return proceedData;
    }(),
    applyValidator: function applyValidator(error_validation) {
      this.error_validation = error_validation;
      var obj = error_validation;
      Object.keys(this.error_validation).forEach(function (key) {});
    },
    resetForm: function resetForm() {
      this.checkAction();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/unit/Add.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/unit/Add.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_ba0c3e42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=ba0c3e42& */ "./resources/js/pages/unit/Add.vue?vue&type=template&id=ba0c3e42&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/pages/unit/Add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_ba0c3e42___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_vue_vue_type_template_id_ba0c3e42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/unit/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/unit/components/Form.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/unit/components/Form.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_593f359b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=593f359b& */ "./resources/js/pages/unit/components/Form.vue?vue&type=template&id=593f359b&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/pages/unit/components/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_593f359b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_593f359b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/unit/components/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/unit/Add.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/unit/Add.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/unit/Add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/unit/components/Form.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/unit/components/Form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/unit/components/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/unit/Add.vue?vue&type=template&id=ba0c3e42&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/unit/Add.vue?vue&type=template&id=ba0c3e42& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_ba0c3e42___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_ba0c3e42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_ba0c3e42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=template&id=ba0c3e42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/unit/Add.vue?vue&type=template&id=ba0c3e42&");


/***/ }),

/***/ "./resources/js/pages/unit/components/Form.vue?vue&type=template&id=593f359b&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/unit/components/Form.vue?vue&type=template&id=593f359b& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_593f359b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_593f359b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_593f359b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=593f359b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/unit/components/Form.vue?vue&type=template&id=593f359b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/unit/Add.vue?vue&type=template&id=ba0c3e42&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/unit/Add.vue?vue&type=template&id=ba0c3e42& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body" }, [_c("Form")], 1),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/unit/components/Form.vue?vue&type=template&id=593f359b&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/unit/components/Form.vue?vue&type=template&id=593f359b& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.proceedData.apply(null, arguments)
          },
        },
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-8" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "unit" } },
                    [_vm._v("Unit "), _c("Required")],
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.unit,
                        expression: "form.unit",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      "is-invalid":
                        Array.isArray(_vm.error_validation.unit) &&
                        _vm.error_validation.unit.length > 0,
                      "is-valid":
                        !_vm.error_validation.unit && this.submitted == true,
                    },
                    attrs: { type: "text", id: "unit" },
                    domProps: { value: _vm.form.unit },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "unit", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "invalid-feedback" },
                    _vm._l(_vm.error_validation.unit, function (txt, i) {
                      return _c("ul", { key: i, staticClass: "warning-list" }, [
                        _c("li", [_vm._v(_vm._s(txt))]),
                      ])
                    }),
                    0
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "dinas" } },
                    [_vm._v("Dinas "), _c("Required")],
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.dinas,
                        expression: "form.dinas",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      "is-invalid":
                        Array.isArray(_vm.error_validation.dinas) &&
                        _vm.error_validation.dinas.length > 0,
                      "is-valid":
                        !_vm.error_validation.dinas && this.submitted == true,
                    },
                    attrs: { type: "text", id: "dinas" },
                    domProps: { value: _vm.form.dinas },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "dinas", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "invalid-feedback" },
                    _vm._l(_vm.error_validation.dinas, function (txt, i) {
                      return _c("ul", { key: i, staticClass: "warning-list" }, [
                        _c("li", [_vm._v(_vm._s(txt))]),
                      ])
                    }),
                    0
                  ),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c(
              "div",
              { staticClass: "alert alert-warning", attrs: { role: "alert" } },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "alert-body" }, [
                  _c("ul", { staticClass: "warning-list" }, [
                    _c(
                      "li",
                      [
                        _vm._v("Form with "),
                        _c("Required"),
                        _vm._v(" is should be filled / can't let blank"),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "Please fill form with correct data and do it with your own responsibility"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "Click Save button below this after you finished filled all necessary form"
                      ),
                    ]),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "d-grid gap-1" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-warning",
                  attrs: { type: "button" },
                  on: { click: _vm.resetForm },
                },
                [
                  _c("i", { staticClass: "fa fa-refresh" }),
                  _vm._v(" Reset Form"),
                ]
              ),
            ]),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "alert-heading" }, [
      _c("i", { staticClass: "fa fa-exclamation-triangle" }),
      _vm._v(" Instruction"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-primary", attrs: { type: "submit" } },
      [_c("i", { staticClass: "fa fa-check" }), _vm._v(" Save Data")]
    )
  },
]
render._withStripped = true



/***/ })

}]);