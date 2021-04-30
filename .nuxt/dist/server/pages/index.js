exports.ids = [2];
exports.modules = {

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1749fc10", content, true, context)
};

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{\n  margin:0;\n  padding:0\n}\n*{\n  color:#fff\n}\nbody{\n  background-color:#171c28\n}\n.container{\n  width:58.333333%;\n  margin-left:auto;\n  margin-right:auto;\n  border-width:0;\n  padding-top:6rem;\n  padding-bottom:6rem\n}\n.logo{\n  border-radius:8px;\n  overflow:hidden;\n  width:150px;\n  height:150px;\n  justify-content:flex-end;\n  display:flex;\n  float:right;\n  box-shadow:2px 3px 4px #23272a\n}\n.logo img{\n  display:block;\n  min-width:100%;\n  min-height:100%\n}\n.text{\n  --tw-space-x-reverse:0;\n  margin-right:calc(2rem*var(--tw-space-x-reverse));\n  margin-left:calc(2rem*(1 - var(--tw-space-x-reverse)))\n}\nsection{\n  min-width:300px;\n  transform:translateY(-50%);\n  max-width:750px;\n  margin:auto;\n  padding:1em\n}\n@media (max-width:600px){\nsection{\n    transform:translateY(-10%) translateX(-2vw);\n    width:65vw;\n    min-width:200px\n}\n}\n.badge{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n.dark .badge{\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity))\n}\n.badge{\n  border-radius:9999px;\n  display:inline-block;\n  font-weight:600;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity))\n}\n.dark .badge{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.badge:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(209, 213, 219, var(--tw-bg-opacity))\n}\n.card-image{\n  max-width:100%;\n  height:auto;\n  width:250px\n}\n.card-title{\n  color:#000;\n  font-size:22px;\n  line-height:24px;\n  font-weight:700;\n  margin:15px 0 0\n}\n.card-subtitle{\n  color:#666;\n  font-size:17px;\n  line-height:1.5rem\n}\n.project-card{\n  display:flex;\n  flex-direction:column;\n  background-color:#fff;\n  padding:1.5rem;\n  border-radius:10px;\n  border:1px solid hsla(0,0%,82.7%,.397);\n  justify-content:center\n}\n.project-card-light{\n  box-shadow:0 10px 30px -15px rgba(0,0,0,.2);\n  transition:all .3s ease\n}\n.project-card-dark,.project-card-light{\n  -webkit-transition:all .3s ease;\n  -o-transition:all .3s ease\n}\n.project-card-dark{\n  box-shadow:0 10px 30px -15px #d9dbdf;\n  transition:all .25s ease\n}\n.project-detail{\n  text-align:center\n}\n.project-card-light:hover{\n  box-shadow:0 2px 2px -10px rgba(0,0,0,.2)\n}\n.project-card-dark:hover{\n  box-shadow:0 2px 2px -10px #d9dbdf\n}\n.project-image{\n  position:relative;\n  height:250px;\n  overflow:hidden;\n  text-align:center\n}\n.projects-container{\n  display:grid;\n  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));\n  gap:1rem 1rem\n}\n.project-card-footer span.project-tag{\n  background:#55198b;\n  color:#f5f2f4;\n  vertical-align:middle;\n  align-items:center;\n  border-radius:4px;\n  display:inline-flex;\n  font-size:.75rem;\n  height:2em;\n  justify-content:center;\n  white-space:nowrap;\n  line-height:1.5;\n  margin:0 .5rem .5rem 0;\n  padding:0 .75em;\n  cursor:pointer;\n  transition:.2s ease-in\n}\n@media (max-width:768px){\n.project-subtitle{\n    font-size:16px;\n    text-align:center\n}\n}\n.wave{\n  -webkit-animation-name:wave-animation;\n          animation-name:wave-animation;\n  -webkit-animation-duration:2.5s;\n          animation-duration:2.5s;\n  -webkit-animation-iteration-count:infinite;\n          animation-iteration-count:infinite;\n  transform-origin:70% 70%;\n  display:inline-block\n}\n@-webkit-keyframes wave-animation{\n0%{\n    transform:rotate(0deg)\n}\n10%{\n    transform:rotate(14deg)\n}\n20%{\n    transform:rotate(-8deg)\n}\n30%{\n    transform:rotate(14deg)\n}\n40%{\n    transform:rotate(-4deg)\n}\n50%{\n    transform:rotate(10deg)\n}\n60%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(0deg)\n}\n}\n@keyframes wave-animation{\n0%{\n    transform:rotate(0deg)\n}\n10%{\n    transform:rotate(14deg)\n}\n20%{\n    transform:rotate(-8deg)\n}\n30%{\n    transform:rotate(14deg)\n}\n40%{\n    transform:rotate(-4deg)\n}\n50%{\n    transform:rotate(10deg)\n}\n60%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(0deg)\n}\n}\nbody{\n  font-size:3.5em\n}\nh1{\n  font-size:.5em\n}\n.social-media-div{\n  font-size:2em\n}\n.icon-button{\n  margin-bottom:10px\n}\n.icon-button i{\n  color:#fff;\n  border-radius:2.6rem;\n  cursor:pointer;\n  display:inline-block;\n  font-size:1.3rem;\n  height:2.6rem;\n  line-height:2.6rem;\n  position:relative;\n  text-align:center;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  width:2.6rem;\n  margin:0 5px 10px;\n  transition:.2s ease-in\n}\n.facebook i{\n  background-color:#3b5998\n}\n.linkedin i{\n  background-color:#0e76a8\n}\n.github i{\n  background-color:#333\n}\n.gitlab i{\n  background-color:#fca326\n}\n.google i{\n  background-color:#ea4335\n}\n.twitter i{\n  background-color:#1da1f2\n}\n.medium i{\n  background-color:#000\n}\n.stack-overflow i{\n  background-color:#f48024\n}\n.instagram i{\n  background-color:#c13584\n}\n.facebook i:hover,.github i:hover,.gitlab i:hover,.google i:hover,.instagram i:hover,.linkedin i:hover,.medium i:hover,.stack-overflow i:hover,.twitter i:hover{\n  background-color:#000\n}\n@media (max-width:768px){\n.social-media-div{\n    text-align:center\n}\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=09afb5cb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"logo w-40 h-40 rounded-full ring-4 ring-gray-200 dark:ring-gray-700\" style=\"background-position: center center; background-image: url(https://media.discordapp.net/attachments/818093236173799424/824207085835124755/Dipper_Avatar.png); background-size: cover;\"><img src=\"https://media.discordapp.net/attachments/818093236173799424/824207085835124755/Dipper_Avatar.png\" draggable=\"false\" alt=\"image\" width=\"100%\" height=\"100%\" class=\"invisible rounded-md sm:transform\"></div> "),_vm._ssrNode("<div class=\"text space-y-px sm:w-9/20\">","</div>",[_vm._ssrNode("<h1> Hi all, I'm AdemCan Certel <span class=\"wave\">👋</span></h1> <h1 class=\"text-2xl font-normal\">Let's introduce myself first and then talk about what I've done. I live in Istanbul/Turkey at the age of 17, I'm a high school student. A passionate Front End Developer 🚀 have been in the software industry since 2018 and developing my own career.</h1> "),_c('Status'),_vm._ssrNode(" <a href=\"https://github.com/AdemCanCertel\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"icon-button github\"><i class=\"fab fa-github\"></i><span></span></a><a href=\"https://www.linkedin.com/in/ademcancertel/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"icon-button linkedin\"><i class=\"fab fa-linkedin-in\"></i><span></span></a><a href=\"mailto:ademcancertel619@gmail.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"icon-button google\"><i class=\"fab fa-google\"></i><span></span></a><a href=\"https://gitlab.com/AdemCan0BEY\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"icon-button gitlab\"><i class=\"fab fa-gitlab\"></i><span></span></a><a href=\"https://www.facebook.com/ademcancertel\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"icon-button facebook\"><i class=\"fab fa-facebook-f\"></i><span></span></a><a href=\"https://www.instagram.com/ademcancertel_/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"icon-button instagram\"><i class=\"fab fa-instagram\"></i><span></span></a>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"text space-y-px sm:w-10/12\">","</div>",[_vm._ssrNode("<h1 class=\"text-2xl font-normal\">Projects</h1> "),_c('GitHubRepos')],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=09afb5cb&

// EXTERNAL MODULE: ./components/common/Navbar.vue + 4 modules
var Navbar = __webpack_require__(11);

// EXTERNAL MODULE: ./components/GitHubRepos.vue + 4 modules
var GitHubRepos = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["default"],
    GitHubRepos: GitHubRepos["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ad57a2f2"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Status: __webpack_require__(10).default,GitHubRepos: __webpack_require__(9).default})


/***/ })

};;
//# sourceMappingURL=index.js.map