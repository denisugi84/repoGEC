"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_settings_mail_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/mail/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/mail/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      smtp: {
        host: '',
        smtp_auth: true,
        username: '',
        password: '',
        smtp_secure: 'tls',
        port: 587
      },
      error_validation: {},
      submitted: false
    };
  },
  mounted: function mounted() {
    this.$root.setPageHeader('Pengaturan Email Client', 'SMTP Client');
    this.initData();
  },
  methods: {
    initData: function initData() {
      var _this = this;

      $.LoadingOverlay("show");
      axios.get('/api/setting/email').then(function (res) {
        _this.smtp = res.data;
      })["catch"](function (e) {
        console.log(e);
      }).then(function () {
        $.LoadingOverlay("hide");
      });
    },
    saveData: function saveData() {
      var _this2 = this;

      swal({
        title: "Anda akan memperbaharui Pengaturan SMTP Client / Email",
        text: "Lanjutkan?",
        icon: "warning",
        buttons: true,
        dangerMode: false
      }).then(function (value) {
        if (value) {
          _this2.submitted = true;
          $.LoadingOverlay("show");
          axios.post('/api/setting/email', _this2.smtp).then(function (res) {
            if (res.data.status == true) {
              _this2.initData();

              toastr.success(res.data.message, "Success!");
            } else {
              swal("Please check your input", res.data.message, "warning");
              _this2.error_validation = res.data.data;
              _this2.submitted = false;

              _this2.applyValidator(res.data.data);
            }
          })["catch"](function (e) {
            console.log(e.response);
          }).then(function () {
            $.LoadingOverlay("hide");
          });
        }
      });
    },
    resetForm: function resetForm() {
      this.initData();
    },
    applyValidator: function applyValidator(error_validation) {
      this.error_validation = error_validation;
      var obj = error_validation;
      Object.keys(this.error_validation).forEach(function (key) {});
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/settings/mail/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/settings/mail/Index.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_7ded4eed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7ded4eed& */ "./resources/js/pages/settings/mail/Index.vue?vue&type=template&id=7ded4eed&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/mail/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_7ded4eed___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_7ded4eed___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/mail/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/mail/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/settings/mail/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/mail/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/mail/Index.vue?vue&type=template&id=7ded4eed&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/settings/mail/Index.vue?vue&type=template&id=7ded4eed& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7ded4eed___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7ded4eed___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7ded4eed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=7ded4eed& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/mail/Index.vue?vue&type=template&id=7ded4eed&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/mail/Index.vue?vue&type=template&id=7ded4eed&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/mail/Index.vue?vue&type=template&id=7ded4eed& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
            return _vm.saveData.apply(null, arguments)
          },
        },
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-8 mb-2" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "host" } },
                    [_vm._v("SMTP Host "), _c("Required")],
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.smtp.host,
                        expression: "smtp.host",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      "is-invalid":
                        Array.isArray(_vm.error_validation.host) &&
                        _vm.error_validation.host.length > 0,
                      "is-valid":
                        !_vm.error_validation.unit && this.submitted == true,
                    },
                    attrs: {
                      type: "text",
                      placeholder: "Example: smtp.mail.com",
                      id: "host",
                    },
                    domProps: { value: _vm.smtp.host },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.smtp, "host", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "invalid-feedback" },
                    _vm._l(_vm.error_validation.host, function (txt, i) {
                      return _c("ul", { key: i, staticClass: "warning-list" }, [
                        _c("li", [_vm._v(_vm._s(txt))]),
                      ])
                    }),
                    0
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "smtp_auth" } },
                    [_vm._v("Auth "), _c("Required")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.smtp.smtp_auth,
                          expression: "smtp.smtp_auth",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "smtp_auth", id: "smtp_auth" },
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.smtp,
                            "smtp_auth",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { domProps: { value: 1 } }, [
                        _vm._v("True"),
                      ]),
                      _vm._v(" "),
                      _c("option", { domProps: { value: 0 } }, [
                        _vm._v("False"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "invalid-feedback" },
                    _vm._l(_vm.error_validation.smtp_auth, function (txt, i) {
                      return _c("ul", { key: i, staticClass: "warning-list" }, [
                        _c("li", [_vm._v(_vm._s(txt))]),
                      ])
                    }),
                    0
                  ),
                ]),
                _vm._v(" "),
                _vm.smtp.smtp_auth
                  ? _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        { attrs: { for: "smtp_auth" } },
                        [_vm._v("Username "), _c("Required")],
                        1
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.smtp.username,
                            expression: "smtp.username",
                          },
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid":
                            Array.isArray(_vm.error_validation.username) &&
                            _vm.error_validation.username.length > 0,
                          "is-valid":
                            !_vm.error_validation.username &&
                            this.submitted == true,
                        },
                        attrs: {
                          type: "text",
                          placeholder: "username@mail.com",
                          id: "username",
                        },
                        domProps: { value: _vm.smtp.username },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.smtp, "username", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "invalid-feedback" },
                        _vm._l(
                          _vm.error_validation.username,
                          function (txt, i) {
                            return _c(
                              "ul",
                              { key: i, staticClass: "warning-list" },
                              [_c("li", [_vm._v(_vm._s(txt))])]
                            )
                          }
                        ),
                        0
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.smtp.smtp_auth
                  ? _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        { attrs: { for: "password" } },
                        [_vm._v("Password "), _c("Required")],
                        1
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.smtp.password,
                            expression: "smtp.password",
                          },
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid":
                            Array.isArray(_vm.error_validation.password) &&
                            _vm.error_validation.password.length > 0,
                          "is-valid":
                            !_vm.error_validation.password &&
                            this.submitted == true,
                        },
                        attrs: {
                          type: "password",
                          placeholder: "Your Secret Password",
                          id: "password",
                        },
                        domProps: { value: _vm.smtp.password },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.smtp, "password", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "invalid-feedback" },
                        _vm._l(
                          _vm.error_validation.password,
                          function (txt, i) {
                            return _c(
                              "ul",
                              { key: i, staticClass: "warning-list" },
                              [_c("li", [_vm._v(_vm._s(txt))])]
                            )
                          }
                        ),
                        0
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "port" } },
                    [_vm._v("Port "), _c("Required")],
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.smtp.port,
                        expression: "smtp.port",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      "is-invalid":
                        Array.isArray(_vm.error_validation.port) &&
                        _vm.error_validation.port.length > 0,
                      "is-valid":
                        !_vm.error_validation.port && this.submitted == true,
                    },
                    attrs: { type: "number", placeholder: "587", id: "port" },
                    domProps: { value: _vm.smtp.port },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.smtp, "port", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "invalid-feedback" },
                    _vm._l(_vm.error_validation.port, function (txt, i) {
                      return _c("ul", { key: i, staticClass: "warning-list" }, [
                        _c("li", [_vm._v(_vm._s(txt))]),
                      ])
                    }),
                    0
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "protocol" } },
                    [_vm._v("Protocol "), _c("Required")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.smtp.smtp_secure,
                          expression: "smtp.smtp_secure",
                        },
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid":
                          Array.isArray(_vm.error_validation.smtp_secure) &&
                          _vm.error_validation.smtp_secure.length > 0,
                        "is-valid":
                          !_vm.error_validation.smtp_secure &&
                          this.submitted == true,
                      },
                      attrs: { name: "protocol", id: "protocol" },
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.smtp,
                            "smtp_secure",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "tls" } }, [
                        _vm._v("TLS"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "ssl" } }, [
                        _vm._v("SSL"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "invalid-feedback" },
                    _vm._l(_vm.error_validation.smtp_secure, function (txt, i) {
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
                        _vm._v("Form with\n                                "),
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
                  _vm._v(" Reset\n                        Form"),
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