"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_profile_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      error_validation: {},
      profile: {
        member: {
          nama: '',
          tempat_lahir: '',
          tanggal_lahir: '',
          avatar: '',
          title: {
            id: "",
            level: "",
            multiple_member: "n",
            nama: ""
          },
          unit: {
            unit: '',
            dinas: ''
          }
        }
      }
    };
  },
  mounted: function mounted() {
    this.initData();
  },
  methods: {
    initData: function initData() {
      var _this = this;

      $.LoadingOverlay("show");
      axios.get('/api/profile').then(function (res) {
        _this.profile = res.data;
      })["catch"](function (e) {
        console.log(e.response);
      }).then(function () {
        $.LoadingOverlay("hide");
      });
    },
    updateData: function updateData() {
      var _this2 = this;

      swal({
        title: "Akan memperbaharui Profile Anda",
        text: "Lanjutkan?",
        icon: "warning",
        buttons: true,
        dangerMode: false
      }).then(function (value) {
        if (value) {
          $.LoadingOverlay("show");
          axios.post("/api/profile", _this2.profile).then(function (res) {
            console.log(res.data);
          })["catch"](function (e) {
            console.log(e.response);
          }).then(function () {
            $.LoadingOverlay("hide");
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/profile/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/profile/Index.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_06fdef9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=06fdef9a& */ "./resources/js/pages/profile/Index.vue?vue&type=template&id=06fdef9a&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/profile/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_06fdef9a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_06fdef9a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/profile/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/profile/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/profile/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/profile/Index.vue?vue&type=template&id=06fdef9a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/profile/Index.vue?vue&type=template&id=06fdef9a& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_06fdef9a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_06fdef9a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_06fdef9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=06fdef9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/Index.vue?vue&type=template&id=06fdef9a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/Index.vue?vue&type=template&id=06fdef9a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/Index.vue?vue&type=template&id=06fdef9a& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12 mb-2" }, [
                _c("div", { staticClass: "row" }, [
                  _vm.profile.member.unit
                    ? _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "card border-secondary" }, [
                          _c("div", { staticClass: "card-header" }, [
                            _c("div", [
                              _c("h2", { staticClass: "fw-bolder mb-0" }, [
                                _vm._v("Unit & Dinas"),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "card-text" }, [
                                _vm._v(
                                  "Dinas : " +
                                    _vm._s(_vm.profile.member.unit.dinas) +
                                    " | Unit\n                                                    : " +
                                    _vm._s(_vm.profile.member.unit.unit)
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _vm._m(0),
                          ]),
                        ]),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.profile.member.title
                    ? _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "card border-secondary" }, [
                          _c("div", { staticClass: "card-header" }, [
                            _c("div", [
                              _c("h2", { staticClass: "fw-bolder mb-0" }, [
                                _vm._v("Jabatan"),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "card-text" }, [
                                _vm._v(_vm._s(_vm.profile.member.title.nama)),
                              ]),
                            ]),
                            _vm._v(" "),
                            _vm._m(1),
                          ]),
                        ]),
                      ])
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "no_anggota" } }, [
                    _vm._v("No. Anggota"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.profile.member.no_anggota,
                        expression: "profile.member.no_anggota",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "no_anggota", disabled: "" },
                    domProps: { value: _vm.profile.member.no_anggota },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.profile.member,
                          "no_anggota",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "nopeg" } }, [
                    _vm._v("No. Pegawai"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.profile.member.nopeg,
                        expression: "profile.member.nopeg",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "nopeg", disabled: "" },
                    domProps: { value: _vm.profile.member.nopeg },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.profile.member,
                          "nopeg",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "nama" } },
                    [
                      _vm._v("Nama\n                                    "),
                      _c("Required"),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.profile.member.nama,
                        expression: "profile.member.nama",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "nama" },
                    domProps: { value: _vm.profile.member.nama },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.profile.member,
                          "nama",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "tempat_lahir" } },
                    [
                      _vm._v(
                        "Tempat Lahir\n                                    "
                      ),
                      _c("Required"),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.profile.member.tempat_lahir,
                        expression: "profile.member.tempat_lahir",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "tempat_lahir" },
                    domProps: { value: _vm.profile.member.tempat_lahir },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.profile.member,
                          "tempat_lahir",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "tanggal_lahir" } },
                    [
                      _vm._v(
                        "Tanggal Lahir\n                                    "
                      ),
                      _c("Required"),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.profile.member.tanggal_lahir,
                        expression: "profile.member.tanggal_lahir",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "date", id: "tanggal_lahir" },
                    domProps: { value: _vm.profile.member.tanggal_lahir },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.profile.member,
                          "tanggal_lahir",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "email" } },
                    [
                      _vm._v(
                        "Alamat E-Mail\n                                    "
                      ),
                      _c("Required"),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.profile.member.email,
                        expression: "profile.member.email",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "email", id: "email" },
                    domProps: { value: _vm.profile.member.email },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.profile.member,
                          "email",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "phone" } },
                    [
                      _vm._v(
                        "No. Telephone\n                                    "
                      ),
                      _c("Required"),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.profile.member.phone,
                        expression: "profile.member.phone",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "phone" },
                    domProps: { value: _vm.profile.member.phone },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.profile.member,
                          "phone",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
              ]),
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
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "alert-body" }, [
              _c("ul", { staticClass: "warning-list" }, [
                _c(
                  "li",
                  [
                    _vm._v("Form dengan Tanda\n                            "),
                    _c("Required"),
                    _vm._v(" adalah wajib diisi / tidak boleh kosong"),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "Isi setiap Form dengan data yang benar dan dapat dipertanggung jawabkan"
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("Tekan tombol "),
                  _c(
                    "span",
                    {
                      staticClass: "badge bg-primary pointer",
                      on: { click: _vm.updateData },
                    },
                    [_vm._m(3)]
                  ),
                  _vm._v(
                    " dibawah ini apabila ingin\n                            memperbaharui profile"
                  ),
                ]),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "d-grid" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary mb-1",
              attrs: { type: "submit" },
              on: { click: _vm.updateData },
            },
            [
              _c("i", { staticClass: "fa fa-check" }),
              _vm._v("\n                    Update"),
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-warning", on: { click: _vm.initData } },
            [
              _c("i", { staticClass: "fa fa-refresh" }),
              _vm._v(" Reset\n                    Profile"),
            ]
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "avatar bg-light-primary p-50 m-0" }, [
      _c("div", { staticClass: "avatar-content" }, [
        _c("i", { staticClass: "fa fa-building fa-2x" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "avatar bg-light-primary p-50 m-0" }, [
      _c("div", { staticClass: "avatar-content" }, [
        _c("i", { staticClass: "fa fa-briefcase fa-2x" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "alert-heading" }, [
      _c("i", { staticClass: "fa fa-exclamation-triangle" }),
      _vm._v(" Instruksi"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("strong", [
      _c("i", { staticClass: "fa fa-check" }),
      _vm._v(" Update"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);