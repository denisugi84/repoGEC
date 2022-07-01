(self.webpackChunk=self.webpackChunk||[]).push([[278],{6278:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var s=a(582),n=a.n(s),i=a(2852);const r={components:{Paginate:n(),MeetingCard:i.Z},data:function(){return{table:{columns:[{label:"",field:"avatar",sortable:!1},{label:"Deskripsi",field:"description",sortable:!0},{label:"Nama",field:"nama",sortable:!0}],rows:[],last_page:0,totalRows:0,serverParams:{trashed:"n",dinas:"",unit:"",status:"",searchTerm:"",page:1,perPage:24}}}},mounted:function(){this.initData()},methods:{initData:function(){var e=this;return $.LoadingOverlay("show"),new Promise((function(t){axios.get("/api/meeting",{params:e.table.serverParams}).then((function(t){e.table.rows=t.data.data,e.table.totalRows=t.data.total,e.table.last_page=t.data.last_page,e.$root.setPageHeader("Management Member","Fetched ".concat(e.table.rows.length," from total ").concat(e.table.totalRows," ").concat("y"==e.table.serverParams.trashed?"trashed":""," data(s)"))})).catch((function(e){console.log(e.response)})).then((function(){$.LoadingOverlay("hide"),e.$root.goToTop()}))}))}}};const l=(0,a(1900).Z)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.table.serverParams.searchTerm,expression:"table.serverParams.searchTerm"}],staticClass:"form-control",attrs:{type:"text",id:"searchTerm",placeholder:"Enter to Search"},domProps:{value:e.table.serverParams.searchTerm},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.initData.apply(null,arguments)},input:function(t){t.target.composing||e.$set(e.table.serverParams,"searchTerm",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"d-grid"},[e.$can("meeting-add")?a("router-link",{staticClass:"btn btn-primary btn-md",attrs:{to:{name:"meeting.add"}}},[a("i",{staticClass:"fa fa-plus"}),e._v(" Buat Meeting")]):e._e()],1)])])])]),e._v(" "),a("div",{staticStyle:{"margin-top":"-18px"}},[e.table.rows.length>0?a("div",[a("div",{staticClass:"row"},e._l(e.table.rows,(function(t){return a("div",{key:t.id,staticClass:"col-md-3 mb-2"},[a("MeetingCard",{attrs:{meeting:t,show_img:!0,btn_detail:!0,show_thumbnail:!0,button:!0,index_mode:!0},on:{initData:e.initData}})],1)})),0),e._v(" "),a("paginate",{attrs:{"page-count":e.table.last_page,"container-class":"pagination pagination-primary justify-content-end","prev-class":"page-item prev","prev-link-class":"page-link","next-class":"page-item next","next-link-class":"page-link","page-class":"page-item","page-link-class":"page-link","active-class":"active","prev-text":"Prev","next-text":"Next","click-handler":e.initData},model:{value:e.table.serverParams.page,callback:function(t){e.$set(e.table.serverParams,"page",t)},expression:"table.serverParams.page"}})],1):a("NoData")],1)])}),[],!1,null,null,null).exports},2852:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const s={props:["meeting","btn_detail","show_thumbnail","show_img","show_export","index_mode"],methods:{exportMeeting:function(e){var t=this;axios.get("/api/meeting/".concat(this.meeting.id,"/export/").concat(e),{responseType:"blob"}).then((function(e){var a=URL.createObjectURL(e.data),s=document.createElement("a");s.href=a,s.setAttribute("download","Meeting ".concat(t.meeting.title)),document.body.appendChild(s),s.click()}))},deleteMeeting:function(){console.log("delete meeting"),this.$emit("initData")}}};const n=(0,a(1900).Z)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card h-100 card-developer-meetup"},[e.show_img?a("div",{staticClass:"meetup-img-wrapper rounded-top text-center"},[a("img",{staticClass:"img-fluid",attrs:{src:"/app-assets/images/meeting-vector.jpg",alt:"Meeting Pic"}})]):e._e(),e._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"meetup-header d-flex align-items-center"},[a("div",{staticClass:"my-auto"},[a("h4",{staticClass:"card-title mb-25"},[e._v(e._s(e.meeting.title))]),e._v(" "),a("p",{staticClass:"card-text mb-0"},[e._v(e._s(e.meeting.description?e.meeting.description:"N/A"))])])]),e._v(" "),e.meeting.created_by?a("div",{staticClass:"d-flex flex-row meetings"},[e._m(0),e._v(" "),a("div",{staticClass:"content-body"},[a("h6",{staticClass:"mb-0"},[e._v("Dibuat Oleh")]),e._v(" "),a("small",[e._v(e._s(e.meeting.created_by.nama))])])]):e._e(),e._v(" "),a("div",{staticClass:"d-flex flex-row meetings"},[a("div",{staticClass:"avatar bg-light-primary rounded me-1"},[a("div",{staticClass:"avatar-content"},[a("svg",{staticClass:"feather feather-calendar avatar-icon font-medium-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("rect",{attrs:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}}),e._v(" "),a("line",{attrs:{x1:"16",y1:"2",x2:"16",y2:"6"}}),e._v(" "),a("line",{attrs:{x1:"8",y1:"2",x2:"8",y2:"6"}}),e._v(" "),a("line",{attrs:{x1:"3",y1:"10",x2:"21",y2:"10"}})])])]),e._v(" "),a("div",{staticClass:"content-body"},[a("h6",{staticClass:"mb-0"},[e._v(e._s(e.$root.indonesianDate(e.meeting.start)))]),e._v(" "),a("small",[e._v(e._s(e.$root.indonesianDate(e.meeting.start,"time")))])])]),e._v(" "),a("div",{staticClass:"d-flex flex-row meetings"},[a("div",{staticClass:"avatar bg-light-primary rounded me-1"},[a("div",{staticClass:"avatar-content"},[a("svg",{staticClass:"feather feather-map-pin avatar-icon font-medium-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}}),e._v(" "),a("circle",{attrs:{cx:"12",cy:"10",r:"3"}})])])]),e._v(" "),a("div",{staticClass:"content-body"},[a("h6",{staticClass:"mb-0"},[e._v("Lokasi")]),e._v(" "),a("small",[e._v(e._s(e.meeting.location?e.meeting.location:"N/A"))])])]),e._v(" "),a("div",{staticClass:"d-flex flex-row meetings"},[e._m(1),e._v(" "),a("div",{staticClass:"content-body"},[a("h6",{staticClass:"mb-0"},[e._v("Notulen")]),e._v(" "),a("small",[e._v(e._s(e.meeting.notulen?e.meeting.notulen.nama:"N/A"))])])]),e._v(" "),a("div",{staticClass:"d-flex flex-row meetings"},[e._m(2),e._v(" "),a("div",{staticClass:"content-body"},[a("h6",{staticClass:"mb-0"},[e._v("Dibuat pada")]),e._v(" "),a("small",[e._v(e._s(e.$root.indonesianDate(e.meeting.created_at,"datetime")))])])]),e._v(" "),e.show_thumbnail?a("div",{staticClass:"avatar-group"},[e._l(e.meeting.limit_member,(function(e,t){return a("div",{key:t,staticClass:"avatar pull-up",attrs:{"data-bs-toggle":"tooltip","data-popup":"tooltip-custom","data-bs-placement":"bottom",title:"","data-bs-original-title":e.nama}},[a("img",{attrs:{src:e.avatar,alt:"Avatar",width:"33",height:"33"}})])})),e._v(" "),e.meeting.member_count-e.meeting.limit_member.length>0?a("h6",{staticClass:"align-self-center cursor-pointer ms-50 mb-0"},[e._v("+"+e._s(e.meeting.member_count-e.meeting.limit_member.length)+" lainnya")]):e._e()],2):e._e(),e._v(" "),e.$can("meeting-report")&&e.show_export?a("div",{staticClass:"mt-2 d-grid"},[a("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.exportMeeting("pdf")}}},[e._v("\n                Export to PDF\n            ")])]):e._e(),e._v(" "),e.$can("meeting-detail")&&e.btn_detail?a("div",{staticClass:"mt-2 d-grid"},[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"meeting.detail",params:{meeting_id:e.meeting.id}}}},[e._v("\n                Detail\n            ")])],1):e._e(),e._v(" "),e.$can("meeting-delete")&&e.index_mode?a("div",{staticClass:"mt-2 d-grid"},[a("button",{staticClass:"btn btn-danger",on:{click:e.deleteMeeting}},[e._v("\n                Hapus\n            ")])]):e._e()])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"avatar bg-light-primary rounded me-1"},[t("div",{staticClass:"avatar-content"},[t("i",{staticClass:"fa fa-user"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"avatar bg-light-primary rounded me-1"},[t("div",{staticClass:"avatar-content"},[t("i",{staticClass:"fa fa-sticky-note-o"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"avatar bg-light-primary rounded me-1"},[t("div",{staticClass:"avatar-content"},[t("i",{staticClass:"fa fa-clock-o"})])])}],!1,null,null,null).exports},582:function(e){e.exports=function(e){function t(s){if(a[s])return a[s].exports;var n=a[s]={exports:{},id:s,loaded:!1};return e[s].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var n=s(a(1));e.exports=n.default},function(e,t,a){a(2);var s=a(6)(a(7),a(8),"data-v-82963a40",null);e.exports=s.exports},function(e,t,a){var s=a(3);"string"==typeof s&&(s=[[e.id,s,""]]),a(5)(s,{}),s.locals&&(e.exports=s.locals)},function(e,t,a){(e.exports=a(4)()).push([e.id,"a[data-v-82963a40]{cursor:pointer}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(s[i]=!0)}for(n=0;n<t.length;n++){var r=t[n];"number"==typeof r[0]&&s[r[0]]||(a&&!r[2]?r[2]=a:a&&(r[2]="("+r[2]+") and ("+a+")"),e.push(r))}},e}},function(e,t,a){function s(e,t){for(var a=0;a<e.length;a++){var s=e[a],n=u[s.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](s.parts[i]);for(;i<s.parts.length;i++)n.parts.push(o(s.parts[i],t))}else{var r=[];for(i=0;i<s.parts.length;i++)r.push(o(s.parts[i],t));u[s.id]={id:s.id,refs:1,parts:r}}}}function n(e){for(var t=[],a={},s=0;s<e.length;s++){var n=e[s],i=n[0],r={css:n[1],media:n[2],sourceMap:n[3]};a[i]?a[i].parts.push(r):t.push(a[i]={id:i,parts:[r]})}return t}function i(e,t){var a=v(),s=h[h.length-1];if("top"===e.insertAt)s?s.nextSibling?a.insertBefore(t,s.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),h.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=h.indexOf(e);t>=0&&h.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function o(e,t){var a,s,n;if(t.singleton){var i=m++;a=f||(f=l(t)),s=c.bind(null,a,i,!1),n=c.bind(null,a,i,!0)}else a=l(t),s=d.bind(null,a),n=function(){r(a)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else n()}}function c(e,t,a,s){var n=a?"":s.css;if(e.styleSheet)e.styleSheet.cssText=b(t,n);else{var i=document.createTextNode(n),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function d(e,t){var a=t.css,s=t.media,n=t.sourceMap;if(s&&e.setAttribute("media",s),n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var u={},p=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},g=p((function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())})),v=p((function(){return document.head||document.getElementsByTagName("head")[0]})),f=null,m=0,h=[];e.exports=function(e,t){void 0===(t=t||{}).singleton&&(t.singleton=g()),void 0===t.insertAt&&(t.insertAt="bottom");var a=n(e);return s(a,t),function(e){for(var i=[],r=0;r<a.length;r++){var l=a[r];(o=u[l.id]).refs--,i.push(o)}for(e&&s(n(e),t),r=0;r<i.length;r++){var o;if(0===(o=i[r]).refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete u[o.id]}}}};var b=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,a,s){var n,i=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(n=e,i=e.default);var l="function"==typeof i?i.options:i;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),a&&(l._scopeId=a),s){var o=l.computed||(l.computed={});Object.keys(s).forEach((function(e){var t=s[e];o[e]=function(){return t}}))}return{esModule:n,exports:i,options:l}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var a=0;a<this.pageCount;a++){var s={index:a,content:a+1,selected:a===this.selected-1};t[a]=s}else{for(var n=Math.floor(this.pageRange/2),i=function(a){var s={index:a,content:a+1,selected:a===e.selected-1};t[a]=s},r=function(e){var a={disabled:!0,breakView:!0};t[e]=a},l=0;l<this.marginPages;l++)i(l);var o=0;this.selected-n>0&&(o=this.selected-1-n);var c=o+this.pageRange-1;c>=this.pageCount&&(o=(c=this.pageCount-1)-this.pageRange+1);for(var d=o;d<=c&&d<=this.pageCount-1;d++)i(d);o>this.marginPages&&r(o-1),c+1<this.pageCount-this.marginPages&&r(c+1);for(var u=this.pageCount-1;u>=this.pageCount-this.marginPages;u--)i(u)}return t}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.noLiSurround?a("div",{class:e.containerClass},[e.firstLastButton?a("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){e.selectFirstPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectFirstPage():null}}}):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():a("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}}),e._v(" "),e._l(e.pages,(function(t){return[t.breakView?a("a",{class:[e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?a("a",{class:[e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):a("a",{class:[e.pageLinkClass,t.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(a){e.handlePageSelected(t.index+1)},keyup:function(a){return"button"in a||!e._k(a.keyCode,"enter",13)?void e.handlePageSelected(t.index+1):null}}},[e._v(e._s(t.content))])]})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():a("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}}),e._v(" "),e.firstLastButton?a("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){e.selectLastPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectLastPage():null}}}):e._e()],2):a("ul",{class:e.containerClass},[e.firstLastButton?a("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[a("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){e.selectFirstPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectFirstPage():null}}})]):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():a("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[a("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}})]),e._v(" "),e._l(e.pages,(function(t){return a("li",{class:[e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""]},[t.breakView?a("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?a("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):a("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(a){e.handlePageSelected(t.index+1)},keyup:function(a){return"button"in a||!e._k(a.keyCode,"enter",13)?void e.handlePageSelected(t.index+1):null}}},[e._v(e._s(t.content))])])})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():a("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[a("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}})]),e._v(" "),e.firstLastButton?a("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[a("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){e.selectLastPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectLastPage():null}}})]):e._e()],2)},staticRenderFns:[]}}])}}]);