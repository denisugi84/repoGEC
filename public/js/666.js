"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[666],{7666:(a,t,e)=>{e.r(t),e.d(t,{default:()=>s});const i={data:function(){return{error_validation:{},profile:{member:{nama:"",tempat_lahir:"",tanggal_lahir:"",avatar:"",title:{id:"",level:"",multiple_member:"n",nama:""},unit:{unit:"",dinas:""}}}}},mounted:function(){this.initData()},methods:{initData:function(){var a=this;$.LoadingOverlay("show"),axios.get("/api/profile").then((function(t){a.profile=t.data})).catch((function(a){console.log(a.response)})).then((function(){$.LoadingOverlay("hide")}))},updateData:function(){var a=this;swal({title:"Akan memperbaharui Profile Anda",text:"Lanjutkan?",icon:"warning",buttons:!0,dangerMode:!1}).then((function(t){t&&($.LoadingOverlay("show"),axios.post("/api/profile",a.profile).then((function(a){console.log(a.data)})).catch((function(a){console.log(a.response)})).then((function(){$.LoadingOverlay("hide")})))}))}}};const s=(0,e(1900).Z)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mb-2"},[e("div",{staticClass:"row"},[a.profile.member.unit?e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"card border-secondary"},[e("div",{staticClass:"card-header"},[e("div",[e("h2",{staticClass:"fw-bolder mb-0"},[a._v("Unit & Dinas")]),a._v(" "),e("p",{staticClass:"card-text"},[a._v("Dinas : "+a._s(a.profile.member.unit.dinas)+" | Unit\n                                                    : "+a._s(a.profile.member.unit.unit))])]),a._v(" "),a._m(0)])])]):a._e(),a._v(" "),a.profile.member.title?e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"card border-secondary"},[e("div",{staticClass:"card-header"},[e("div",[e("h2",{staticClass:"fw-bolder mb-0"},[a._v("Jabatan")]),a._v(" "),e("p",{staticClass:"card-text"},[a._v(a._s(a.profile.member.title.nama))])]),a._v(" "),a._m(1)])])]):a._e()])]),a._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"no_anggota"}},[a._v("No. Anggota")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.profile.member.no_anggota,expression:"profile.member.no_anggota"}],staticClass:"form-control",attrs:{type:"text",id:"no_anggota",disabled:""},domProps:{value:a.profile.member.no_anggota},on:{input:function(t){t.target.composing||a.$set(a.profile.member,"no_anggota",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"nopeg"}},[a._v("No. Pegawai")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.profile.member.nopeg,expression:"profile.member.nopeg"}],staticClass:"form-control",attrs:{type:"text",id:"nopeg",disabled:""},domProps:{value:a.profile.member.nopeg},on:{input:function(t){t.target.composing||a.$set(a.profile.member,"nopeg",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"nama"}},[a._v("Nama\n                                    "),e("Required")],1),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.profile.member.nama,expression:"profile.member.nama"}],staticClass:"form-control",attrs:{type:"text",id:"nama"},domProps:{value:a.profile.member.nama},on:{input:function(t){t.target.composing||a.$set(a.profile.member,"nama",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"tempat_lahir"}},[a._v("Tempat Lahir\n                                    "),e("Required")],1),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.profile.member.tempat_lahir,expression:"profile.member.tempat_lahir"}],staticClass:"form-control",attrs:{type:"text",id:"tempat_lahir"},domProps:{value:a.profile.member.tempat_lahir},on:{input:function(t){t.target.composing||a.$set(a.profile.member,"tempat_lahir",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"tanggal_lahir"}},[a._v("Tanggal Lahir\n                                    "),e("Required")],1),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.profile.member.tanggal_lahir,expression:"profile.member.tanggal_lahir"}],staticClass:"form-control",attrs:{type:"date",id:"tanggal_lahir"},domProps:{value:a.profile.member.tanggal_lahir},on:{input:function(t){t.target.composing||a.$set(a.profile.member,"tanggal_lahir",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[a._v("Alamat E-Mail\n                                    "),e("Required")],1),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.profile.member.email,expression:"profile.member.email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:a.profile.member.email},on:{input:function(t){t.target.composing||a.$set(a.profile.member,"email",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"phone"}},[a._v("No. Telephone\n                                    "),e("Required")],1),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.profile.member.phone,expression:"profile.member.phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone"},domProps:{value:a.profile.member.phone},on:{input:function(t){t.target.composing||a.$set(a.profile.member,"phone",t.target.value)}}})])])])])])]),a._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[a._m(2),a._v(" "),e("div",{staticClass:"alert-body"},[e("ul",{staticClass:"warning-list"},[e("li",[a._v("Form dengan Tanda\n                            "),e("Required"),a._v(" adalah wajib diisi / tidak boleh kosong")],1),a._v(" "),e("li",[a._v("Isi setiap Form dengan data yang benar dan dapat dipertanggung jawabkan")]),a._v(" "),e("li",[a._v("Tekan tombol "),e("span",{staticClass:"badge bg-primary pointer",on:{click:a.updateData}},[a._m(3)]),a._v(" dibawah ini apabila ingin\n                            memperbaharui profile")])])])]),a._v(" "),e("div",{staticClass:"d-grid"},[e("button",{staticClass:"btn btn-primary mb-1",attrs:{type:"submit"},on:{click:a.updateData}},[e("i",{staticClass:"fa fa-check"}),a._v("\n                    Update")]),a._v(" "),e("button",{staticClass:"btn btn-warning",on:{click:a.initData}},[e("i",{staticClass:"fa fa-refresh"}),a._v(" Reset\n                    Profile")])])])])])}),[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"avatar bg-light-primary p-50 m-0"},[t("div",{staticClass:"avatar-content"},[t("i",{staticClass:"fa fa-building fa-2x"})])])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"avatar bg-light-primary p-50 m-0"},[t("div",{staticClass:"avatar-content"},[t("i",{staticClass:"fa fa-briefcase fa-2x"})])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("h4",{staticClass:"alert-heading"},[e("i",{staticClass:"fa fa-exclamation-triangle"}),a._v(" Instruksi")])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("strong",[e("i",{staticClass:"fa fa-check"}),a._v(" Update")])}],!1,null,null,null).exports}}]);