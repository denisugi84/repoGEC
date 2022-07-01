"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_dashboard_components_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pages/dashboard/components/Admin */ "./resources/js/pages/dashboard/components/Admin.vue");
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AdminDashboard: _pages_dashboard_components_Admin__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/components/Admin.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/components/Admin.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      count: {
        meeting: 0,
        member: 0,
        title: 0,
        unit: 0
      },
      activity_logs: []
    };
  },
  computed: {
    user: function user() {
      return JSON.parse(this.$store.getters.user);
    }
  },
  mounted: function mounted() {
    this.$root.setPageHeader('Dashboard', 'GMF Employees Club');
    this.initData();
  },
  methods: {
    initData: function initData() {
      var _this = this;

      axios.get('/api/dashboard').then(function (res) {
        _this.count = res.data.count;
        _this.activity_logs = res.data.activity_logs;
      });
    },
    goTo: function goTo(page) {
      if (page == 'meeting') this.$router.push({
        name: 'meeting.index'
      });else if (page == 'member') this.$router.push({
        name: 'member.index'
      });else if (page == 'title') this.$router.push({
        name: 'title.index'
      });else if (page == 'unit') this.$router.push({
        name: 'unit.index'
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=b3c5cf30& */ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/dashboard/components/Admin.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/dashboard/components/Admin.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Admin_vue_vue_type_template_id_d9304e8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin.vue?vue&type=template&id=d9304e8c& */ "./resources/js/pages/dashboard/components/Admin.vue?vue&type=template&id=d9304e8c&");
/* harmony import */ var _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin.vue?vue&type=script&lang=js& */ "./resources/js/pages/dashboard/components/Admin.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admin_vue_vue_type_template_id_d9304e8c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Admin_vue_vue_type_template_id_d9304e8c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/dashboard/components/Admin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/dashboard/components/Admin.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/components/Admin.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/components/Admin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=b3c5cf30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&");


/***/ }),

/***/ "./resources/js/pages/dashboard/components/Admin.vue?vue&type=template&id=d9304e8c&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/components/Admin.vue?vue&type=template&id=d9304e8c& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_d9304e8c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_d9304e8c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_d9304e8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=template&id=d9304e8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/components/Admin.vue?vue&type=template&id=d9304e8c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", [_vm.$can("dashboard") ? _c("AdminDashboard") : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/components/Admin.vue?vue&type=template&id=d9304e8c&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/components/Admin.vue?vue&type=template&id=d9304e8c& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mt-2" }, [
    _c("section", { attrs: { id: "dashboard-ecommerce" } }, [
      _c("div", { staticClass: "row match-height" }, [
        _c("div", { staticClass: "col-xl-4 col-md-6 col-12" }, [
          _c(
            "div",
            {
              staticClass:
                "card bg-primary text-white card-congratulation-medal",
            },
            [
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "text-white" }, [
                  _vm._v("Hi, "),
                  _c("strong", [
                    _c("i", [_vm._v(_vm._s(_vm.user.member.nama))]),
                  ]),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text text-white font-small-3" }, [
                  _vm._v(
                    "No. Anggota : " +
                      _vm._s(_vm.user.member.no_anggota) +
                      " | No. Pegawai " +
                      _vm._s(_vm.user.member.nopeg)
                  ),
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "mb-75 mt-2 pt-50 text-white" }, [
                  _vm._v(_vm._s(_vm.user.member.title.nama) + " "),
                  _c("i", { staticClass: "pointer fa fa-question-circle" }),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-success waves-effect waves-float waves-light",
                    attrs: { type: "button" },
                  },
                  [_vm._v("Profil Saya")]
                ),
                _vm._v(" "),
                _c("img", {
                  staticClass: "congratulation-medal",
                  attrs: {
                    src: "https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/illustration/badge.svg",
                    alt: "Medal Pic",
                  },
                }),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-8 col-md-6 col-12" }, [
          _c("div", { staticClass: "card card-statistics" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card-body statistics-body" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-xl-3 col-sm-6 col-12 pointer mb-2 mb-xl-0",
                    on: {
                      click: function ($event) {
                        return _vm.goTo("meeting")
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "d-flex flex-row" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-auto" }, [
                        _c("h4", { staticClass: "fw-bolder mb-0" }, [
                          _vm._v(_vm._s(_vm.count.meeting)),
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "card-text font-small-3 mb-0" },
                          [_vm._v("Meeting")]
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-xl-3 col-sm-6 col-12 pointer mb-2 mb-xl-0",
                    on: {
                      click: function ($event) {
                        return _vm.goTo("member")
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "d-flex flex-row" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-auto" }, [
                        _c("h4", { staticClass: "fw-bolder mb-0" }, [
                          _vm._v(_vm._s(_vm.count.member)),
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "card-text font-small-3 mb-0" },
                          [_vm._v("Member")]
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-xl-3 col-sm-6 col-12 pointer mb-2 mb-sm-0",
                    on: {
                      click: function ($event) {
                        return _vm.goTo("title")
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "d-flex flex-row" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-auto" }, [
                        _c("h4", { staticClass: "fw-bolder mb-0" }, [
                          _vm._v(_vm._s(_vm.count.title)),
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "card-text font-small-3 mb-0" },
                          [_vm._v("Jabatan")]
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-xl-3 col-sm-6 col-12 pointer",
                    on: {
                      click: function ($event) {
                        return _vm.goTo("unit")
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "d-flex flex-row" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-auto" }, [
                        _c("h4", { staticClass: "fw-bolder mb-0" }, [
                          _vm._v(_vm._s(_vm.count.unit)),
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "card-text font-small-3 mb-0" },
                          [_vm._v("Unit")]
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]),
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Statistics")]),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex align-items-center" }, [
        _c("p", { staticClass: "card-text font-small-2 me-25 mb-0" }, [
          _vm._v("Updated 1 month ago"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "avatar bg-light-primary me-2" }, [
      _c("div", { staticClass: "avatar-content" }, [
        _c("i", { staticClass: "fa fa-globe fa-2x" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "avatar bg-light-info me-2" }, [
      _c("div", { staticClass: "avatar-content" }, [
        _c("i", { staticClass: "fa fa-users fa-2x" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "avatar bg-light-danger me-2" }, [
      _c("div", { staticClass: "avatar-content" }, [
        _c("i", { staticClass: "fa fa-briefcase fa-2x" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "avatar bg-light-success me-2" }, [
      _c("div", { staticClass: "avatar-content" }, [
        _c("i", { staticClass: "fa fa-stack-exchange fa-2x" }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);