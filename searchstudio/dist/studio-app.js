/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cd49");


/***/ }),

/***/ "0079":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "384c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "44e5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0079");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "45d2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4a2c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultsContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("384c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultsContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultsContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4f87":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "540d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5ada");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5ada":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6a3b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7bde":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7c2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_relatedSearches_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9692");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_relatedSearches_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_relatedSearches_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9405":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchOptionsSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e355");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchOptionsSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchOptionsSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9692":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aada":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6a3b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b566":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchFeedbackSection_vue_vue_type_style_index_0_id_514b9647_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("45d2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchFeedbackSection_vue_vue_type_style_index_0_id_514b9647_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchFeedbackSection_vue_vue_type_style_index_0_id_514b9647_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cd49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./src/scss/app.scss
var app = __webpack_require__("4f87");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b8fe842c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/SearchStudioClient.vue?vue&type=template&id=3ded29da&
var SearchStudioClientvue_type_template_id_3ded29da_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"searchContainer"}},[_c('SearchResultsContainer',{ref:"studioWidget",attrs:{"connector":_vm.studioConnector}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/SearchStudioClient.vue?vue&type=template&id=3ded29da&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("262e");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 4 modules
var createSuper = __webpack_require__("2caf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__("00b4");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js + 1 modules
var vue_property_decorator = __webpack_require__("60a3");

// EXTERNAL MODULE: ./node_modules/vuex-module-decorators/dist/esm/index.js
var esm = __webpack_require__("6fc5");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b8fe842c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchResultsContainer.vue?vue&type=template&id=28a26308&
var SearchResultsContainervue_type_template_id_28a26308_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"result-edit",class:_vm.showEdit? 'show-edit' : '',on:{"mouseenter":_vm.mouseenter,"mouseleave":_vm.mouseleave}},[(_vm.searchStore.builderConfig && _vm.hasResults)?_c('div',{staticClass:"edit-button",on:{"click":_vm.editResults}},[_vm._v("EDIT RESULT ITEMS")]):_vm._e(),(_vm.searchStore.searchFired && _vm.hasResults)?_c('div',{staticClass:"sf-lists active",class:[_vm.computeLayout ? 'layout-grid' : 'layout-list']},[_c('div',{staticClass:"row reset-row"},[_c('SearchResults',{attrs:{"search-results":_vm.searchStore.searchResults,"metadata":_vm.searchStore.metadata.searchResult,"track":_vm.SearchHelper.track,"field-formatters":_vm.field_formatters,"display":_vm.searchStore.viewDisplay,"hide-unique-key":_vm.hideUniqueKey}})],1)]):_vm._e()]),(!_vm.paginationDefined)?_c('PaginationSection'):_vm._e()],1)}
var SearchResultsContainervue_type_template_id_28a26308_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SearchResultsContainer.vue?vue&type=template&id=28a26308&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("4e82");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("841c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b8fe842c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Facets.vue?vue&type=template&id=94d8740c&
var Facetsvue_type_template_id_94d8740c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.searchStore.searchFired && _vm.hasResults)?_c('div',{staticClass:"facet-wrapper facet-container-holder",class:_vm.showEdit? 'show-edit' : '',on:{"mouseenter":_vm.mouseenter,"mouseleave":_vm.mouseleave}},[(_vm.searchStore.builderConfig && _vm.hasResults)?_c('div',{staticClass:"edit-button",on:{"click":_vm.editFcets}},[_vm._v("EDIT FACETS STYLE")]):_vm._e(),(_vm.template)?_c('runtime-template-compiler',{attrs:{"template":_vm.template}}):(!_vm.template)?_c('div',{staticClass:"facet-template-container"},[_c('div',{staticClass:"pill-container"},[_c('div',{staticClass:"pill ",on:{"click":function($event){_vm.showMobileSideMenu= true}}},[_vm._v("Filter By "),_c('span',{staticClass:"pill-close filter-by"})]),_vm._l((_vm.facet_qs),function(facet,index){return _c('div',{key:facet,staticClass:"pill",class:{'last':_vm.facet_qs.length -1 === index },on:{"click":function($event){return _vm.removeFacet(facet)}}},[_vm._v(_vm._s(_vm.showFacet(facet))+" "),_c('span',{staticClass:"pill-close"})])}),(_vm.facet_qs.length > 0)?_c('div',{staticClass:"pill clear-filters",on:{"click":_vm.clearFilters}},[_vm._v("Clear Filters "),_c('span')]):_vm._e()],2),_c('div',{staticClass:"sidebar-background",class:{'show-facet-overlay': _vm.showMobileSideMenu}}),_c('div',{staticClass:"sf-sidebar-container",class:{'show-facet-overlay': _vm.showMobileSideMenu}},[_c('div',{staticClass:"sf-mobile-header"},[_c('div',{staticClass:"sf-mobile-header-text"},[_vm._v("Filter By")]),_c('button',{staticClass:"btn btn-custom text-primary",attrs:{"type":"button"},on:{"click":_vm.closeSideMenu}},[_c('span',{staticClass:"search-close"})])]),_c('div',{staticClass:"sf-sidebar"},[_c('ul',{staticClass:"list-group accordion",attrs:{"id":"search-facets"}},[_c('li',{staticClass:"list-group-item-searchstudio-js"},[_c('div',{staticClass:"collapse show",attrs:{"id":"collapse-topics","data-parent":"#search-facets"}},[_c('ul',{staticClass:"list-unstyled"},[_c('div',{attrs:{"id":"ss-search-results"}},[_c('div',{staticClass:"filters",class:{ 'd-none': !_vm.faceting_enabled }},[_c('form',{attrs:{"action":"/","method":"get"}},_vm._l((_vm.computedFacets),function(facet,index){return _c('div',{key:index,staticClass:"facet-list mb-4"},[_c('h4',{staticClass:"sidebar-heading"},[_c('a',{staticClass:"text-uppercase",class:[facet.facet_toggle ? 'active' : ''],attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.toggleFacet(index)}}},[_vm._v(_vm._s(facet.facet_label)+" ")])]),_c('div',{staticClass:"collapse",class:[facet.facet_toggle ? 'show' : '']},[_c('ul',{staticClass:"list-unstyled pl-3"},_vm._l((facet.facets),function(row,i){return _c('li',{key:i,class:[row.show ? '' : 'd-none']},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.facet_qs),expression:"facet_qs"}],attrs:{"type":"checkbox","id":row.label},domProps:{"value":((encodeURIComponent(facet.facet_name)) + ":\"" + (encodeURIComponent(row.label)) + "\""),"checked":Array.isArray(_vm.facet_qs)?_vm._i(_vm.facet_qs,((encodeURIComponent(facet.facet_name)) + ":\"" + (encodeURIComponent(row.label)) + "\""))>-1:(_vm.facet_qs)},on:{"change":[function($event){var $$a=_vm.facet_qs,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=(encodeURIComponent(facet.facet_name)) + ":\"" + (encodeURIComponent(row.label)) + "\"",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.facet_qs=$$a.concat([$$v]))}else{$$i>-1&&(_vm.facet_qs=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.facet_qs=$$c}},_vm.doSearch]}}),_c('label',{staticClass:"ml-1",attrs:{"for":row.label}},[_c('span',{ref:'elipsisTooltip'+i+index,refInFor:true,staticClass:"facet-name"},[_vm._v(" "+_vm._s(_vm.cleanValue(_vm.getFieldValue(facet.facet_name, row.label)))+" ")]),_vm._v(" ("+_vm._s(row.count)+")")]),(_vm.$refs['elipsisTooltip'+i+index] && _vm.addElipsisTracking('elipsisTooltip'+i+index))?_c('div'):_vm._e(),_c('div',{staticClass:"facet-tooltip-wrapper",attrs:{"id":'elipsisTooltip'+i+index}},[_c('span',{staticClass:"facet-tooltip"},[_vm._v(" "+_vm._s(_vm.cleanValue(_vm.getFieldValue(facet.facet_name, row.label)))+" ("+_vm._s(row.count)+") ")])])])}),0),(_vm.hasFacetPagination(index))?_c('div',{staticClass:"more-less"},[(_vm.hasMoreFacets(index))?_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.doMoreFacets(index)}}},[_vm._v("More")]):_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.doLessFacets(index)}}},[_vm._v("Less")])]):_vm._e()])])}),0)])])])])])]),_c('button',{staticClass:"btn btn-custom close-button",attrs:{"type":"button"},on:{"click":_vm.closeSideMenu}},[_vm._v("Done")])])])]):_vm._e()],1):_vm._e()}
var Facetsvue_type_template_id_94d8740c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Facets.vue?vue&type=template&id=94d8740c&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__("b85c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("2909");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/stores/store.ts


vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
/* harmony default export */ var store = (new vuex_esm["a" /* default */].Store({
  modules: {}
}));
// CONCATENATED MODULE: ./src/services/TrackHelper.ts




var TrackHelper_TrackHelper = /*#__PURE__*/function () {
  function TrackHelper() {
    Object(classCallCheck["a" /* default */])(this, TrackHelper);
  }

  Object(createClass["a" /* default */])(TrackHelper, null, [{
    key: "getImpressions",
    value: function getImpressions(store) {
      var impressions = [];
      var idNum = 1;

      for (var key in store.searchResultsValue) {
        var row = store.searchResultsValue[key];

        if (store.uniqueIdValue in row) {
          var obj = {}; //@ts-ignore

          obj.cDocId = TrackHelper.getDataForAnalytics(row[store.uniqueIdValue]);

          if (store.metadataValue.searchResult.fieldFormatting.title in row) {
            //@ts-ignore
            obj.cDocTitle = TrackHelper.getDataForAnalytics(row[store.metadataValue.searchResult.fieldFormatting.title]);
          }

          obj.position = store.startDocVal + idNum;
          impressions.push(obj);
          idNum += 1;
        }
      }

      return impressions;
    }
  }, {
    key: "analyticsTrack",
    value: function analyticsTrack(store) {
      var track = {
        key: store.studioConnectorValue.apikey,
        query: store.searchTermValue,
        shownHits: store.recordsPerPageValue,
        totalHits: store.totalResultsValue,
        pageNo: store.currentPageValue,
        latency: store.latency,
        session: store.studioConnectorValue.session,
        impressions: TrackHelper.getImpressions(store),
        language: store.languageVal
      };

      if (track.query != '') {
        /* eslint-disable */
        //@ts-ignore
        _msq.push(['track', track]);
        /* eslint-enable */

      }
    }
  }, {
    key: "getDataForAnalytics",
    value: function getDataForAnalytics(value) {
      if (value !== null) {
        if (typeof value == 'undefined') return '';else if (typeof value == 'string') return value;else if (typeof value.join != 'undefined') return value[0];else return value;
      } else {
        return '';
      }
    }
  }]);

  return TrackHelper;
}();

/* harmony default export */ var services_TrackHelper = (TrackHelper_TrackHelper);
// CONCATENATED MODULE: ./src/stores/search.ts
















var search_SearchStore = /*#__PURE__*/function (_VuexModule) {
  Object(inherits["a" /* default */])(SearchStore, _VuexModule);

  var _super = Object(createSuper["a" /* default */])(SearchStore);

  function SearchStore() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SearchStore);

    _this = _super.apply(this, arguments); //@ts-ignore

    _this.studioConfig = studioConfig; //@ts-ignore

    _this.builderConfig = window.builderConfig;
    _this.searchData = {
      test: 1
    };
    _this.searchResultsValue = [];
    _this.searchFiredValue = false;
    _this.facetsValue = [];
    _this.metadataValue = {};
    _this.uniqueIdValue = 'id';
    _this.studioConnectorValue = null;
    _this.viewDisplayValue = null;
    _this.facetPaginationValue = null;
    _this.searchTermValue = '';
    _this.recordsPerPageValue = null;
    _this.totalResultsValue = null;
    _this.latency = 0;
    _this.startDocVal = 0;
    _this.endDocValue = 0;
    _this.searchFilter = false;
    _this.facets_query = '';
    _this.currentPageValue = 1;
    _this.track = {};
    _this.searchQuery = '';
    _this.searchSuggestionsValue = [];
    _this.spelling_suggestion = '';
    _this.firstLoadValue = true;
    _this.layout_grid = false;
    _this.loadingValue = false;
    _this.sortSelectedValue = '';
    _this.myFacetsValue = [];
    _this.sortOptions = [];
    _this.relatedSearches = [];
    _this.languageVal = 'en';
    return _this;
  }

  Object(createClass["a" /* default */])(SearchStore, [{
    key: "searchFired",
    get: function get() {
      return this.searchFiredValue;
    }
  }, {
    key: "language",
    get: function get() {
      return this.languageVal;
    }
  }, {
    key: "myFacets",
    get: function get() {
      return this.myFacetsValue;
    }
  }, {
    key: "test",
    get: function get() {
      return this.searchData.test;
    }
  }, {
    key: "totalResults",
    get: function get() {
      return this.totalResultsValue;
    }
  }, {
    key: "endDoc",
    get: function get() {
      return this.endDocValue;
    }
  }, {
    key: "facets",
    get: function get() {
      return this.facetsValue;
    }
  }, {
    key: "latencyVal",
    get: function get() {
      return this.latency;
    }
  }, {
    key: "recordsPerPage",
    get: function get() {
      return this.recordsPerPageValue;
    }
  }, {
    key: "metadata",
    get: function get() {
      return this.metadataValue;
    }
  }, {
    key: "currentPage",
    get: function get() {
      return this.currentPageValue;
    }
  }, {
    key: "spellingSuggestion",
    get: function get() {
      return this.spelling_suggestion;
    }
  }, {
    key: "searchResults",
    get: function get() {
      return this.searchResultsValue;
    }
  }, {
    key: "uniqueId",
    get: function get() {
      return this.uniqueIdValue;
    }
  }, {
    key: "loading",
    get: function get() {
      return this.loadingValue;
    }
  }, {
    key: "searchTerm",
    get: function get() {
      return this.searchTermValue;
    }
  }, {
    key: "firstLoad",
    get: function get() {
      return this.firstLoadValue;
    }
  }, {
    key: "layoutGrid",
    get: function get() {
      return this.layout_grid;
    }
  }, {
    key: "facetsQuery",
    get: function get() {
      return this.facets_query;
    }
  }, {
    key: "searchSuggestions",
    get: function get() {
      return this.searchSuggestionsValue;
    }
  }, {
    key: "startDoc",
    get: function get() {
      return this.startDocVal;
    }
  }, {
    key: "studioConnector",
    get: function get() {
      return this.studioConnectorValue;
    }
  }, {
    key: "viewDisplay",
    get: function get() {
      return this.viewDisplayValue;
    }
  }, {
    key: "facetPagination",
    get: function get() {
      return this.facetPaginationValue;
    }
  }, {
    key: "sortOptionsMapped",
    get: function get() {
      return this.sortOptions;
    }
  }, {
    key: "sort_method",
    get: function get() {
      var obj = {
        selected: this.sortSelectedValue,
        options: [{
          key: '',
          value: 'Relevance'
        }, {
          key: this.studioConnectorValue.fields['date'] + ' desc',
          value: 'Most Recent'
        }]
      };

      if (this.sortOptions.length) {
        var sOptions = this.sortOptions.map(function (option) {
          return {
            value: option.label,
            key: option.name + ' ' + option.order
          };
        });
        obj.options = [{
          key: '',
          value: 'Relevance'
        }].concat(Object(toConsumableArray["a" /* default */])(sOptions));
      }

      if (this.studioConnectorValue.defaultSort) {
        if (this.studioConnectorValue.defaultSort == 'date' || this.studioConnectorValue.defaultSort == 'recent') obj['selected'] = this.studioConnectorValue.fields['date'] + ' desc';
      }

      return obj;
    }
  }, {
    key: "setRelatedSearches",
    value: function setRelatedSearches(resp) {
      var newArr = [];

      if (resp.response) {
        var _iterator = Object(createForOfIteratorHelper["a" /* default */])(resp.response.docs),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var iterator = _step.value;
            newArr.push(iterator.related_search);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      this.relatedSearches = newArr;
    }
  }, {
    key: "parseSearchResults",
    value: function parseSearchResults(response) {
      this.searchResultsValue = response.response.docs;
      this.metadataValue = response.metadata;
      this.metadataValue.searchResult = {};
      this.metadataValue.searchResult['fields'] = response.responseHeader.params.fl;
      this.uniqueIdValue = response.responseHeader.params.uniqueId;
      this.metadataValue.searchResult['uniqueId'] = response.responseHeader.params.uniqueId;
      if ('highlighting' in response) this.metadataValue.searchResult['highlighting'] = response.highlighting;else this.metadataValue.searchResult['highlighting'] = {};
      this.metadataValue.searchResult['fieldFormatting'] = this.studioConnectorValue.fields;

      if (response.metadata.sorts) {
        this.sortOptions = Object(toConsumableArray["a" /* default */])(response.metadata.sorts);
      }

      if (response.facet_counts) this.facetsValue = response.facet_counts.facet_fields;
      this.recordsPerPageValue = parseInt(response.responseHeader.params.rows);
      this.searchQuery = response.responseHeader.params.q;
      this.startDocVal = parseInt(response.response.start + '');
      this.totalResultsValue = parseInt(response.response.numFound + '');
      this.latency = parseInt(response.responseHeader.QTime + '');
      this.endDocValue = this.startDocVal + this.recordsPerPageValue;

      if (this.endDocValue > this.totalResultsValue) {
        this.endDocValue = this.totalResultsValue;
      }

      this.searchFiredValue = true;
      this.loadingValue = false; //AnalyticsAPI Track

      services_TrackHelper.analyticsTrack(this);
      this.spelling_suggestion = '';

      if ('spellcheck' in response && 'suggestions' in response['spellcheck']) {
        if (response['spellcheck']['suggestions'].length > 0) {
          this.spelling_suggestion = response['spellcheck']['suggestions'][1]['suggestion'][0];

          if (typeof this.spelling_suggestion != 'string') {
            if ('word' in this.spelling_suggestion) this.spelling_suggestion = this.spelling_suggestion['word'];
          }
        }
      }

      var firstElement = document.getElementsByClassName('search-results-wrapper')[0];
      var secondElement = document.getElementsByClassName('result-container-wrapper')[0];
      var thirdElement = document.getElementsByClassName('search-results-summary-options-wrapper')[0];
      var fourthElement = document.getElementsByClassName('search-input-wrapper')[0];

      if (!this.totalResultsValue && this.searchTermValue !== '') {
        var _secondElement$classL, _firstElement$classLi, _thirdElement$classLi, _fourthElement$classL;

        secondElement === null || secondElement === void 0 ? void 0 : (_secondElement$classL = secondElement.classList) === null || _secondElement$classL === void 0 ? void 0 : _secondElement$classL.add('no-results');
        firstElement === null || firstElement === void 0 ? void 0 : (_firstElement$classLi = firstElement.classList) === null || _firstElement$classLi === void 0 ? void 0 : _firstElement$classLi.add('no-results');
        thirdElement === null || thirdElement === void 0 ? void 0 : (_thirdElement$classLi = thirdElement.classList) === null || _thirdElement$classLi === void 0 ? void 0 : _thirdElement$classLi.add('no-results');
        fourthElement === null || fourthElement === void 0 ? void 0 : (_fourthElement$classL = fourthElement.classList) === null || _fourthElement$classL === void 0 ? void 0 : _fourthElement$classL.add('no-results');
      } else {
        var _secondElement$classL2, _firstElement$classLi2, _thirdElement$classLi2, _fourthElement$classL2;

        secondElement === null || secondElement === void 0 ? void 0 : (_secondElement$classL2 = secondElement.classList) === null || _secondElement$classL2 === void 0 ? void 0 : _secondElement$classL2.remove('no-results');
        firstElement === null || firstElement === void 0 ? void 0 : (_firstElement$classLi2 = firstElement.classList) === null || _firstElement$classLi2 === void 0 ? void 0 : _firstElement$classLi2.remove('no-results');
        thirdElement === null || thirdElement === void 0 ? void 0 : (_thirdElement$classLi2 = thirdElement.classList) === null || _thirdElement$classLi2 === void 0 ? void 0 : _thirdElement$classLi2.remove('no-results');
        fourthElement === null || fourthElement === void 0 ? void 0 : (_fourthElement$classL2 = fourthElement.classList) === null || _fourthElement$classL2 === void 0 ? void 0 : _fourthElement$classL2.remove('no-results');
      }
    }
  }, {
    key: "triggerFacetEdit",
    value: function triggerFacetEdit() {
      this.builderConfig.facetCounter++;
    }
  }, {
    key: "triggerSummaryEdit",
    value: function triggerSummaryEdit() {
      this.builderConfig.summaryCounter++;
    }
  }, {
    key: "triggerFeedbackEdit",
    value: function triggerFeedbackEdit() {
      this.builderConfig.feedbackCounter++;
    }
  }, {
    key: "triggerInputEdit",
    value: function triggerInputEdit() {
      this.builderConfig.inputCounter++;
    }
  }, {
    key: "triggerRelatedSearchesEdit",
    value: function triggerRelatedSearchesEdit() {
      this.builderConfig.relatedCounter++;
    }
  }, {
    key: "triggerResultEdit",
    value: function triggerResultEdit() {
      this.builderConfig.resultCounter++;
    }
  }, {
    key: "triggerResultPagingEdit",
    value: function triggerResultPagingEdit() {
      this.builderConfig.resultPagingCounter++;
    }
  }, {
    key: "triggerEmptyResultEdit",
    value: function triggerEmptyResultEdit() {
      this.builderConfig.emptyResultCounter++;
    }
  }, {
    key: "setConfigValues",
    value: function setConfigValues(data) {
      this.facetPaginationValue = data.facetPagination;
      this.viewDisplayValue = data.viewDisplay;
      this.studioConfig.suggestAfterMinChars = data.suggestAfterMinChars;
      this.studioConnectorValue = data.studioConnector;
    }
  }, {
    key: "setTestMutation",
    value: function setTestMutation(data) {
      this.searchData.test = data;
    }
  }, {
    key: "setSearchSuggestionsMutation",
    value: function setSearchSuggestionsMutation(data) {
      this.searchSuggestionsValue = data;
    }
  }, {
    key: "setLoadingMutation",
    value: function setLoadingMutation(data) {
      this.loadingValue = data;
    }
  }, {
    key: "setSortSelectedMutation",
    value: function setSortSelectedMutation(data) {
      this.sortSelectedValue = data;
    }
  }, {
    key: "setSearchTermMutation",
    value: function setSearchTermMutation(data) {
      this.searchTermValue = data;
    }
  }, {
    key: "setFacetsQueryMutation",
    value: function setFacetsQueryMutation(data) {
      this.facets_query = data;
    }
  }, {
    key: "setLayoutGridMutation",
    value: function setLayoutGridMutation(data) {
      this.layout_grid = data;
    }
  }, {
    key: "setFirstLoadMutation",
    value: function setFirstLoadMutation(data) {
      this.firstLoadValue = data;
    }
  }, {
    key: "setSearchFiredMutation",
    value: function setSearchFiredMutation(data) {
      this.searchFiredValue = data;
    }
  }, {
    key: "setStartDocMutation",
    value: function setStartDocMutation(data) {
      this.startDocVal = data;
    }
  }, {
    key: "setCurrentPageMutation",
    value: function setCurrentPageMutation(data) {
      this.currentPageValue = data;
    }
  }, {
    key: "setRecordsPerPageMutation",
    value: function setRecordsPerPageMutation(data) {
      this.recordsPerPageValue = data;
    }
  }, {
    key: "setSearchResultsMutation",
    value: function setSearchResultsMutation(data) {
      this.searchResultsValue = data;
    }
  }, {
    key: "setMyFacetsMutation",
    value: function setMyFacetsMutation(data) {
      this.myFacetsValue = data;
    }
  }, {
    key: "setLanguageMutation",
    value: function setLanguageMutation(language) {
      this.languageVal = language;
    }
  }, {
    key: "setMyFacetPageMutation",
    value: function setMyFacetPageMutation(data) {
      this.myFacetsValue[data.index].facet_page = data.page;
    }
  }, {
    key: "setTest",
    value: function setTest(data) {
      return data.test;
    }
  }]);

  return SearchStore;
}(esm["d" /* VuexModule */]);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setRelatedSearches", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "parseSearchResults", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "triggerFacetEdit", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "triggerSummaryEdit", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "triggerFeedbackEdit", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "triggerInputEdit", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "triggerRelatedSearchesEdit", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "triggerResultEdit", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "triggerResultPagingEdit", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "triggerEmptyResultEdit", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setConfigValues", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setTestMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setSearchSuggestionsMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setLoadingMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setSortSelectedMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setSearchTermMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setFacetsQueryMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setLayoutGridMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setFirstLoadMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setSearchFiredMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setStartDocMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setCurrentPageMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setRecordsPerPageMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setSearchResultsMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setMyFacetsMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setLanguageMutation", null);

Object(tslib_es6["a" /* __decorate */])([esm["c" /* Mutation */]], search_SearchStore.prototype, "setMyFacetPageMutation", null);

Object(tslib_es6["a" /* __decorate */])([Object(esm["a" /* Action */])({
  commit: 'setTestMutation'
})], search_SearchStore.prototype, "setTest", null);

search_SearchStore = Object(tslib_es6["a" /* __decorate */])([Object(esm["b" /* Module */])({
  name: 'Test',
  dynamic: true,
  store: store
})], search_SearchStore);
/* harmony default export */ var search = (search_SearchStore);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__("e9c4");

// CONCATENATED MODULE: ./src/services/SearchHelper.ts













var storeState = Object(esm["e" /* getModule */])(search);

var SearchHelper_SearchHelper = /*#__PURE__*/function () {
  function SearchHelper() {
    Object(classCallCheck["a" /* default */])(this, SearchHelper);
  }

  Object(createClass["a" /* default */])(SearchHelper, null, [{
    key: "executeSearch",
    value: function executeSearch(searchParams) {
      var query = '';
      var search = searchParams.search ? searchParams.search : storeState.searchTerm;
      search = search == '' ? '*' : search;

      if (searchParams.facet) {
        query = searchParams.facet;
      }

      if (searchParams.sort) {
        query += query !== '' ? "&sort=".concat(searchParams.sort) : "sort=".concat(searchParams.sort);
      }

      if (searchParams.start) {
        query += query !== '' ? "&start=".concat(searchParams.start) : "start=".concat(searchParams.start);
      }

      storeState.studioConnector.search(search, SearchHelper.parseSearchResults, query);

      if (storeState.studioConnector.relatedSearchesURL) {
        fetch(storeState.studioConnector.relatedSearchesURL + '?search=' + encodeURIComponent(search) + '&language=' + storeState.language, {
          method: 'GET',
          headers: storeState.studioConnector.auth_header_related,
          credentials: 'same-origin'
        }).then(function (response) {
          return response.json();
        }).then(function (result) {
          storeState.setRelatedSearches(result); //TODO: figure out why the set requires another render loop

          setTimeout(function () {
            var impressions = [];

            for (var i = 0; i < storeState.relatedSearches.length; i++) {
              var _search = storeState.relatedSearches[i];
              impressions.push({
                relatedSearch: _search,
                position: i + 1
              });
            }

            if (result.response.docs.length) {
              var trackImpressions = {
                session: storeState.studioConnector.session,
                key: storeState.studioConnector.apikey,
                query: storeState.searchTerm,
                shownHits: storeState.relatedSearches.length,
                latency: result.responseHeader.qTime,
                impressions: impressions,
                language: storeState.language
              };
              /* eslint-disable */
              //@ts-ignore

              _msq.push(['trackRelatedSearch', trackImpressions]);
              /* eslint-enable */

            }
          }, 100);
        }).catch(function (error) {
          return console.log(error);
        });
      }
    }
  }, {
    key: "parseSearchResults",
    value: function parseSearchResults(response) {
      storeState.parseSearchResults(response);
      SearchHelper.preserveState();
    }
  }, {
    key: "search",
    value: function search(event, pageStart) {
      var searchKeyword;

      if (storeState.searchTerm) {
        searchKeyword = storeState.searchTerm;
      } else {
        //If searchTerm is empty or not set, search for everything - *
        searchKeyword = '*';
      }

      storeState.setLoadingMutation(true);
      SearchHelper.preserveState();

      if (storeState.searchTerm == '' && SearchHelper.default_query_present()) {
        if (SearchHelper.default_query_present()) searchKeyword = storeState.studioConnector.defaultQuery;
      }

      storeState.setSortSelectedMutation(storeState.sort_method.selected);
      SearchHelper.executeSearch({
        sort: storeState.sort_method.selected,
        search: searchKeyword,
        start: pageStart,
        facet: storeState.facets_query
      });
    }
  }, {
    key: "default_query_present",
    value: function default_query_present() {
      if (storeState.studioConnector) {
        if (storeState.studioConnector.defaultQuery) return true;
      }

      return false;
    }
  }, {
    key: "getFacetByLabel",
    value: function getFacetByLabel(label, facets) {
      return facets.find(function (facet) {
        return 'facet' + facet.facet_label === label;
      });
    }
  }, {
    key: "preserveState",
    value: function preserveState(extra) {
      window.localStorage.setItem('style', storeState.layoutGrid + '');

      if (SearchHelper.$route) {
        var previousRouteQuery = JSON.stringify(SearchHelper.$route.query);
        var pageStart = storeState.startDoc + '';

        if (storeState.startDoc === 0) {
          var _SearchHelper$$route, _SearchHelper$$route$;

          if ((_SearchHelper$$route = SearchHelper.$route) !== null && _SearchHelper$$route !== void 0 && (_SearchHelper$$route$ = _SearchHelper$$route.query) !== null && _SearchHelper$$route$ !== void 0 && _SearchHelper$$route$.start && this.firstLoad) {
            var _SearchHelper$$route2, _SearchHelper$$route3;

            pageStart = ((_SearchHelper$$route2 = SearchHelper.$route) === null || _SearchHelper$$route2 === void 0 ? void 0 : (_SearchHelper$$route3 = _SearchHelper$$route2.query) === null || _SearchHelper$$route3 === void 0 ? void 0 : _SearchHelper$$route3.start) + '';
          }
        }

        this.firstLoad = false;

        var query = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, SearchHelper.$route.query), {}, {
          searchStudioQuery: storeState.searchTerm,
          style: storeState.layoutGrid + '',
          facets: storeState.facetsQuery,
          sort: storeState.sort_method.selected,
          start: pageStart
        });

        if (extra) {
          if (extra.facets) {
            var _iterator = Object(createForOfIteratorHelper["a" /* default */])(extra.facets),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var facet = _step.value;

                if (this.getFacetByLabel('facet' + facet.facet_label, extra.facets)) {
                  var _this$getFacetByLabel;

                  query['facet' + facet.facet_label] = ((_this$getFacetByLabel = this.getFacetByLabel('facet' + facet.facet_label, extra.facets)) === null || _this$getFacetByLabel === void 0 ? void 0 : _this$getFacetByLabel.facet_page) + '';
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }

        if (previousRouteQuery !== JSON.stringify(query)) {
          SearchHelper.$router.replace({
            query: query
          }).catch(function () {});
        }
      }
    }
  }]);

  return SearchHelper;
}();

SearchHelper_SearchHelper.track = {};
SearchHelper_SearchHelper.$route = null;
SearchHelper_SearchHelper.$router = null;
SearchHelper_SearchHelper.firstLoad = true;
/* harmony default export */ var services_SearchHelper = (SearchHelper_SearchHelper);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Facets.vue?vue&type=script&lang=ts&

























var Facetsvue_type_script_lang_ts_storeState = Object(esm["e" /* getModule */])(search);

var Facetsvue_type_script_lang_ts_Facets = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(Facets, _Vue);

  var _super = Object(createSuper["a" /* default */])(Facets);

  function Facets() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Facets);

    _this = _super.apply(this, arguments);
    _this.searchStore = Facetsvue_type_script_lang_ts_storeState;
    _this.showMobileSideMenu = false;
    _this.template = null;
    _this.encodeURIComponent = encodeURIComponent;
    _this.showEdit = false;
    _this.elipsisTracker = {};
    _this._ = lodash_default.a;
    _this.facet_qs = [];
    _this.myFacets = [];
    _this.headingMap = null;
    _this.faceting_enabled = false;
    return _this;
  }

  Object(createClass["a" /* default */])(Facets, [{
    key: "onMetadata",
    value: function onMetadata(newVal) {
      this.computeHeadingMap(newVal);
    }
  }, {
    key: "onMyFacetsChange",
    value: function onMyFacetsChange(newVal) {
      var _iterator = Object(createForOfIteratorHelper["a" /* default */])(this.myFacets),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var facet = _step.value;
          this.expandFacets('facet' + facet.facet_label);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.preserveState();
    }
  }, {
    key: "computedFacets",
    get: function get() {
      return this.generateFacetsData(this.searchStore.facets);
    }
  }, {
    key: "checkboxName",
    value: function checkboxName(facet, row) {
      return "".concat(facet.facet_name, ":%22").concat(row.label, "%22");
    }
  }, {
    key: "mouseenter",
    value: function mouseenter() {
      if (this.searchStore.builderConfig) {
        this.showEdit = true;
      }
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      this.showEdit = false;
    }
  }, {
    key: "editFcets",
    value: function editFcets() {
      this.searchStore.triggerFacetEdit();
    }
  }, {
    key: "checkIfHasCustomTemplate",
    value: function checkIfHasCustomTemplate() {
      if (this.searchStore.studioConfig.customFacetTemplate) {
        var template = document.getElementById(this.searchStore.studioConfig.customFacetTemplate.replace('#', ''));

        if (template) {
          this.template = template.innerHTML;
        }
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      this.headingMap = {};
      this.faceting_enabled = this.searchStore.facets != null && this.searchStore.facets.constructor == Object;
      this.computeHeadingMap(this.searchStore.metadata.facets);

      if (this.$route.query.facets && this.$route.query.facets.indexOf('fq=') !== -1) {
        this.facet_qs = this.$route.query.facets.replace(/fq=/g, '').split('&');
      }

      this.checkIfHasCustomTemplate();
      setTimeout(function () {
        _this2.updateIsElipsis();
      }, 1000);
      setTimeout(function () {
        _this2.updateIsElipsis();
      }, 2000);
    }
  }, {
    key: "hasResults",
    get: function get() {
      var _this$searchStore$sea;

      return !!((_this$searchStore$sea = this.searchStore.searchResults) !== null && _this$searchStore$sea !== void 0 && _this$searchStore$sea.length);
    }
  }, {
    key: "resizeHandler",
    value: function resizeHandler() {
      var _this3 = this;

      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }

      this.resizeTimeout = setTimeout(function () {
        _this3.updateIsElipsis();

        _this3.$forceUpdate();
      }, 250);
    }
  }, {
    key: "created",
    value: function created() {
      window.addEventListener('resize', this.resizeHandler);
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }, {
    key: "getFacetByLabel",
    value: function getFacetByLabel(label) {
      return this.myFacets.find(function (facet) {
        return 'facet' + facet.facet_label === label;
      });
    }
  }, {
    key: "closeSideMenu",
    value: function closeSideMenu() {
      this.showMobileSideMenu = false;
    }
  }, {
    key: "clearFilters",
    value: function clearFilters() {
      var _this4 = this;

      this.facet_qs = [];
      this.myFacets.forEach(function (facet, index) {
        _this4.doLessFacets(index);
      });
      this.doSearch();
    }
  }, {
    key: "showFacet",
    value: function showFacet(facet) {
      var first = facet.search('"') + 1;
      var last = facet.length - 1;
      return decodeURIComponent(facet.slice(first, last));
    }
  }, {
    key: "expandFacets",
    value: function expandFacets(type) {
      var facet = this.getFacetByLabel(type);

      if (facet) {
        if (this.$route.query && this.$route.query[type] || facet.expand) {
          var number = parseInt(this.$route.query[type]);

          if (facet.expand && facet.expand > 1) {
            number = facet.expand;
          }

          for (var i = 0; i < number - 1; i++) {
            this.doMoreFacets(this.myFacets.indexOf(facet), true);
          }
        }
      }
    }
  }, {
    key: "updateIsElipsis",
    value: function updateIsElipsis() {
      for (var key in this.elipsisTracker) {
        if (Object.prototype.hasOwnProperty.call(this.elipsisTracker, key)) {
          var element = this.elipsisTracker[key];
          var popup = document.getElementById(key); //@ts-ignore

          if (element.element.offsetWidth < element.element.scrollWidth) {
            if (popup) {
              popup.classList.add('show');
            }
          } else {
            if (popup) {
              popup.classList.remove('show');
            }
          }

          document.getElementById(key);
        }
      }
    }
  }, {
    key: "preserveState",
    value: function preserveState() {
      var _this5 = this;

      services_SearchHelper.preserveState({
        facets: this.myFacets
      });
      setTimeout(function () {
        _this5.updateIsElipsis();

        _this5.$forceUpdate();
      }, 100);
    }
  }, {
    key: "cleanValue",
    value: function cleanValue(value) {
      if (value !== null) {
        if (typeof value == 'undefined') return '';else if (typeof value == 'string') return value.replace(/_/g, ' ');else if (typeof value.join != 'undefined') return value.join(', ').replace(/_/g, ' ');else return value;
      } else {
        return '';
      }
    }
  }, {
    key: "toggleFacet",
    value: function toggleFacet(index) {
      console.log('this.computedFacets[index].facet_toggle', this.computedFacets[index].facet_toggle);
      this.computedFacets[index].facet_toggle = !this.computedFacets[index].facet_toggle;
    }
  }, {
    key: "doMoreFacets",
    value: function doMoreFacets(index, ignorePreserve) {
      var _this6 = this;

      this.myFacets[index].facet_page++;

      lodash_default.a.map(this.myFacets, function (item, i) {
        lodash_default.a.map(item.facets, function (facet, j) {
          if (index == i) {
            if (j < _this6.searchStore.facetPagination * _this6.myFacets[index].facet_page) {
              facet.show = true;
            }
          }
        });
      });

      if (!ignorePreserve) {
        this.preserveState();
      }
    }
  }, {
    key: "addElipsisTracking",
    value: function addElipsisTracking(name) {
      var _this$$refs$name;

      //@ts-ignore
      var ref = (_this$$refs$name = this.$refs[name]) === null || _this$$refs$name === void 0 ? void 0 : _this$$refs$name[0];

      if (!this.elipsisTracker[name]) {
        if (ref) {
          this.elipsisTracker[name] = {
            value: false,
            element: ref
          };
        }
      } else {
        if (ref) {
          //@ts-ignore
          this.elipsisTracker[name].element = ref;
        }
      }

      return '';
    }
  }, {
    key: "doLessFacets",
    value: function doLessFacets(index) {
      var _this7 = this;

      lodash_default.a.map(this.myFacets, function (item, i) {
        lodash_default.a.map(item.facets, function (facet, j) {
          if (index == i) {
            if (j < _this7.searchStore.facetPagination) {
              facet.show = true;
            } else {
              facet.show = false;
            }
          }
        });
      });

      this.myFacets[index].facet_page = 1;
      this.preserveState();
    }
  }, {
    key: "hasMoreFacets",
    value: function hasMoreFacets(index) {
      var visible_facets = lodash_default.a.compact(lodash_default.a.map(this.myFacets[index].facets, 'show')).length;

      var facet_count = this.myFacets[index].facets.length;
      var hidden_facets = facet_count - visible_facets;
      return facet_count > this.searchStore.facetPagination && hidden_facets > 0;
    }
  }, {
    key: "hasFacetPagination",
    value: function hasFacetPagination(index) {
      return this.myFacets[index].facets.length > this.searchStore.facetPagination;
    }
  }, {
    key: "doSearch",
    value: function doSearch() {
      var facet_query = [];
      this.facet_qs.forEach(function (e) {
        facet_query = facet_query.concat('fq=' + e.replace('  ', ' '));
      });
      this.filterSearch(facet_query.join('&'));
    }
  }, {
    key: "removeFacet",
    value: function removeFacet(facet) {
      var index = this.facet_qs.indexOf(facet);
      this.facet_qs.splice(index, 1);
      this.doLessFacets(index);
      this.doSearch();
    }
  }, {
    key: "filterSearch",
    value: function filterSearch(facet_qs, pageStart) {
      this.searchStore.setFacetsQueryMutation('');

      if (facet_qs === null || facet_qs.length == 0) {
        var _storeState$sort_meth;

        this.searchStore.setStartDocMutation(pageStart ? parseInt(pageStart) : 0); // this.startDoc = pageStart ? parseInt(pageStart) : 0;

        if (Facetsvue_type_script_lang_ts_storeState !== null && Facetsvue_type_script_lang_ts_storeState !== void 0 && (_storeState$sort_meth = Facetsvue_type_script_lang_ts_storeState.sort_method) !== null && _storeState$sort_meth !== void 0 && _storeState$sort_meth.selected) {
          services_SearchHelper.executeSearch({
            sort: Facetsvue_type_script_lang_ts_storeState.sort_method.selected,
            start: this.searchStore.startDoc
          });
        } else {
          services_SearchHelper.executeSearch({
            start: this.searchStore.startDoc
          });
        }
      } else {
        var _storeState$sort_meth2;

        if (Facetsvue_type_script_lang_ts_storeState !== null && Facetsvue_type_script_lang_ts_storeState !== void 0 && (_storeState$sort_meth2 = Facetsvue_type_script_lang_ts_storeState.sort_method) !== null && _storeState$sort_meth2 !== void 0 && _storeState$sort_meth2.selected) {
          services_SearchHelper.executeSearch({
            sort: Facetsvue_type_script_lang_ts_storeState.sort_method.selected,
            facet: facet_qs,
            start: pageStart
          });
        } else {
          services_SearchHelper.executeSearch({
            facet: facet_qs,
            start: pageStart
          });
        }

        this.searchStore.setFacetsQueryMutation(facet_qs);
      }

      this.preserveState();
    }
  }, {
    key: "computeHeadingMap",
    value: function computeHeadingMap(newVal) {
      this.headingMap = {};

      for (var idx in newVal) {
        var m = newVal[idx];
        this.headingMap[m.name] = m.label;
      }
    }
  }, {
    key: "field_formatters",
    get: function get() {
      if (this.searchStore.studioConnector.fieldFormatters == null) return {};
      return this.searchStore.studioConnector.fieldFormatters;
    }
  }, {
    key: "generateFacetsData",
    value: function generateFacetsData(newValue) {
      var _this8 = this;

      if (newValue != null && newValue.constructor == Object) this.faceting_enabled = true;else this.faceting_enabled = false;
      var tmpFacets = [];

      if (this.faceting_enabled) {
        var facets = newValue;
        if (!this.headingMap) this.computeHeadingMap(this.searchStore.metadata.facets);

        lodash_default.a.mapKeys(facets, function (value, key) {
          if (value != null && value.length > 0) {
            var _prevFacet$facet_page;

            var _facets = [];

            lodash_default.a.forEach(lodash_default.a.chunk(value, 2), function (item, index) {
              var show = index < _this8.searchStore.facetPagination ? true : false;

              _facets.push({
                label: item[0],
                count: lodash_default.a.trim(item[1]),
                show: show
              });
            });

            var prevFacet = _this8.myFacets.find(function (fac) {
              return fac.facet_label === _this8.headingMap[key];
            });

            var page = (_prevFacet$facet_page = prevFacet === null || prevFacet === void 0 ? void 0 : prevFacet.facet_page) !== null && _prevFacet$facet_page !== void 0 ? _prevFacet$facet_page : 1;
            tmpFacets.push({
              facet_name: key,
              facet_toggle: true,
              facet_label: _this8.headingMap[key],
              facet_page: 1,
              facets: _facets,
              expand: page
            });
          }
        });
      }

      this.myFacets = tmpFacets;
      return this.myFacets;
    }
  }, {
    key: "getFieldValue",
    value: function getFieldValue(fieldname, value) {
      if (fieldname in this.field_formatters) return this.field_formatters[fieldname](value);
      return value;
    }
  }]);

  return Facets;
}(vue_property_decorator["c" /* Vue */]);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["d" /* Watch */])('searchStore.metadata.facets')], Facetsvue_type_script_lang_ts_Facets.prototype, "onMetadata", null);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["d" /* Watch */])('myFacets')], Facetsvue_type_script_lang_ts_Facets.prototype, "onMyFacetsChange", null);

Facetsvue_type_script_lang_ts_Facets = Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["a" /* Component */])({// other options
})], Facetsvue_type_script_lang_ts_Facets);
/* harmony default export */ var Facetsvue_type_script_lang_ts_ = (Facetsvue_type_script_lang_ts_Facets);
// CONCATENATED MODULE: ./src/components/Facets.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Facetsvue_type_script_lang_ts_ = (Facetsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Facets.vue?vue&type=style&index=0&lang=scss&
var Facetsvue_type_style_index_0_lang_scss_ = __webpack_require__("fef1");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Facets.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Facetsvue_type_script_lang_ts_,
  Facetsvue_type_template_id_94d8740c_render,
  Facetsvue_type_template_id_94d8740c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_Facets = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b8fe842c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchResults.vue?vue&type=template&id=e8a84bf0&
var SearchResultsvue_type_template_id_e8a84bf0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-list w-100 p-0 d-flex flex-wrap position-relative"},[(_vm.loading)?_c('div',{staticClass:"loading"},[_vm._m(0)]):_vm._e(),_vm._l((_vm.orderedSearchResults),function(result){return _c('div',{key:result.id,staticClass:"list-wrapper"},[_c('SearchResult',{attrs:{"result":result,"display":_vm.display,"uniqueId":_vm.uniqueId,"hideUniqueKey":_vm.hideUniqueKey,"analyticsTrackClick":_vm.analyticsTrackClick,"fieldFormatters":_vm.fieldFormatters,"metadata":_vm.metadata}})],1)})],2)}
var SearchResultsvue_type_template_id_e8a84bf0_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spinner-border"},[_c('span',{staticClass:"sr-only"},[_vm._v("Loading...")])])}]


// CONCATENATED MODULE: ./src/components/SearchResults.vue?vue&type=template&id=e8a84bf0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b8fe842c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Result.vue?vue&type=template&id=11895f66&
var Resultvue_type_template_id_11895f66_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.template)?_c('runtime-template-compiler',{attrs:{"template":_vm.template}}):_c('div',{staticClass:"card-searchstudio-js",class:{'card-searchstudio-js-grid-layout': _vm.isGridLayout, 'has-thumbnail': _vm.thumbnail !== ''}},[_c('div',{staticClass:"card-searchstudio-jsClass"},[_c('div',{staticClass:"card-searchstudio-js-body p-0"},[(_vm.ribbon)?_c('span',{staticClass:"badge",class:_vm.valueClass(_vm.ribbon),domProps:{"innerHTML":_vm._s(_vm.ribbon)}}):_vm._e(),(_vm.title)?_c('div',{staticClass:"card-searchstudio-js-title"},[(_vm.url)?_c('a',{staticClass:"stretched-link",attrs:{"href":_vm.url},domProps:{"innerHTML":_vm._s(_vm.title)},on:{"click":_vm.navigate}}):_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}})]):_vm._e(),(_vm.paths)?_c('span',{staticClass:"card-searchstudio-js-path",domProps:{"innerHTML":_vm._s(_vm.paths)}}):_vm._e(),(_vm.promoted)?_c('span',{staticClass:"star elevated",class:_vm.valueClass(_vm.ribbon)},[_vm._v(" ")]):_vm._e(),(_vm.thumbnail)?_c('div',{staticClass:"thumbnail"},[_c('span',[_c('img',{attrs:{"src":_vm.thumbnail}})])]):_vm._e(),(_vm.date || _vm.snippet)?_c('div',{staticClass:"card-searchstudio-js-body p-0"},[(_vm.date)?_c('div',[_c('div',{staticClass:"card-searchstudio-js-text"},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.date)}})])]):_vm._e(),(_vm.snippet)?_c('div',[_c('div',{staticClass:"card-searchstudio-js-text"},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.snippet)}})])]):_vm._e()]):_vm._e(),_vm._l((_vm.result),function(value,propertyName){return _c('div',{key:propertyName,staticClass:"card-searchstudio-js-body p-0"},[(_vm.displayProperty(value, propertyName))?_c('div',[_c('div',{staticClass:"card-searchstudio-js-text",class:propertyName},[(_vm.isImage(value))?_c('span',{staticClass:"image"},[_c('img',{attrs:{"src":value}})]):_c('span',{class:_vm.valueClass(value),domProps:{"innerHTML":_vm._s(_vm.extractedValue(propertyName, value))}})])]):_vm._e()])})],2)])])}
var Resultvue_type_template_id_11895f66_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Result.vue?vue&type=template&id=11895f66&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("257e");

// EXTERNAL MODULE: ./node_modules/vue-runtime-template-compiler/dist/vue-runtime-template-compiler.esm.js
var vue_runtime_template_compiler_esm = __webpack_require__("6787");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Result.vue?vue&type=script&lang=ts&














 //@ts-ignore


var Resultvue_type_script_lang_ts_storeState = Object(esm["e" /* getModule */])(search);

var Resultvue_type_script_lang_ts_SearchResult = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(SearchResult, _Vue);

  var _super = Object(createSuper["a" /* default */])(SearchResult);

  function SearchResult() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SearchResult);

    _this = _super.apply(this, arguments);
    _this.some = 'asdasd';
    _this.template = null;
    _this.searchStore = Resultvue_type_script_lang_ts_storeState;
    _this.parentComponent = Object(assertThisInitialized["a" /* default */])(_this);
    return _this;
  }

  Object(createClass["a" /* default */])(SearchResult, [{
    key: "onTemplateDataChange",
    value: function onTemplateDataChange(newVal) {
      var _this2 = this;

      this.template = null;
      setTimeout(function () {
        _this2.renderTemplate();
      }, 0);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.renderTemplate();
    }
  }, {
    key: "renderTemplate",
    value: function renderTemplate() {
      if (this.searchStore.studioConfig.customResultTemplate) {
        var template = document.getElementById(this.searchStore.studioConfig.customResultTemplate.replace('#', ''));

        if (template) {
          this.template = template.innerHTML;
        }
      }
    }
  }, {
    key: "displayProperty",
    value: function displayProperty(value, key) {
      return value && !this.isReservedProperty(key) && !this.isHiddenProperty(key);
    }
  }, {
    key: "ribbon",
    get: function get() {
      return this.ribonDataExists ? this.clean_ribbon(this.get_field_value(this.metadata.fieldFormatting.ribbon, this.result)) : '';
    }
  }, {
    key: "cardClass",
    get: function get() {
      if (this.display == 'grid') return 'card-searchstudio-js-inner';else return 'card-searchstudio-js-inner-row';
    }
  }, {
    key: "ribonDataExists",
    get: function get() {
      return this.metadata.fieldFormatting && this.contains_field(this.result, this.metadata.fieldFormatting.ribbon);
    }
  }, {
    key: "ribbonClass",
    get: function get() {
      return this.result[this.metadata.fieldFormatting.ribbon];
    }
  }, {
    key: "titleDataExists",
    get: function get() {
      return this.metadata.fieldFormatting && this.contains_field(this.result, this.metadata.fieldFormatting.title);
    }
  }, {
    key: "pathsExists",
    get: function get() {
      return this.contains_field(this.result, this.metadata.fieldFormatting.paths);
    }
  }, {
    key: "paths",
    get: function get() {
      return this.pathsExists ? this.get_field_value(this.metadata.fieldFormatting.paths, this.result) : '';
    }
  }, {
    key: "urlDataExists",
    get: function get() {
      return this.contains_field(this.result, this.metadata.fieldFormatting.url);
    }
  }, {
    key: "url",
    get: function get() {
      return this.urlDataExists ? this.extractedValue(this.metadata.fieldFormatting.url, this.result[this.metadata.fieldFormatting.url]) : '';
    }
  }, {
    key: "title",
    get: function get() {
      return this.titleDataExists ? this.get_field_value(this.metadata.fieldFormatting.title, this.result) : '';
    }
  }, {
    key: "promoted",
    get: function get() {
      return this.result['[elevated]'];
    }
  }, {
    key: "hasThumbnail",
    get: function get() {
      return this.contains_field(this.result, this.metadata.fieldFormatting.thumbnail);
    }
  }, {
    key: "thumbnail",
    get: function get() {
      return this.hasThumbnail ? this.result[this.metadata.fieldFormatting.thumbnail] : '';
    }
  }, {
    key: "isGridLayout",
    get: function get() {
      return this.searchStore.layoutGrid;
    }
  }, {
    key: "dateDataExists",
    get: function get() {
      return this.metadata.fieldFormatting && this.contains_field(this.result, this.metadata.fieldFormatting.date);
    }
  }, {
    key: "date",
    get: function get() {
      return this.dateDataExists ? this.get_field_value(this.metadata.fieldFormatting.date, this.result) : '';
    }
  }, {
    key: "snippetDataExists",
    get: function get() {
      return this.metadata.fieldFormatting && this.contains_field(this.result, this.metadata.fieldFormatting.snippet);
    }
  }, {
    key: "snippet",
    get: function get() {
      return this.snippetDataExists ? this.get_field_value(this.metadata.fieldFormatting.snippet, this.result) : '';
    }
  }, {
    key: "navigate",
    value: function navigate() {
      this.analyticsTrackClick(this.extractedValue(this.searchStore.uniqueId, this.result[this.searchStore.uniqueId]));
    }
  }, {
    key: "contains_field",
    value: function contains_field(result, fieldnames) {
      for (var idx in fieldnames) {
        var fieldname = fieldnames[idx];
        if (fieldname in result) return true;
      }

      return false;
    }
  }, {
    key: "extractedValue",
    value: function extractedValue(fieldname, value) {
      if (fieldname in this.fieldFormatters) value = this.fieldFormatters[fieldname](value);
      return value;
    }
  }, {
    key: "get_field_value",
    value: function get_field_value(fieldnames, result) {
      var value = '';

      for (var idx in fieldnames) {
        var fieldname = fieldnames[idx];

        if (fieldname in result) {
          var valueInner = this.extractedValue(fieldname, result[fieldname]);
          value += valueInner;
        }
      }

      return value;
    }
  }, {
    key: "isReservedProperty",
    value: function isReservedProperty(propertyName) {
      var _this$metadata$fieldF;

      var reservedFieldnames = ((_this$metadata$fieldF = this.metadata.fieldFormatting.url) !== null && _this$metadata$fieldF !== void 0 ? _this$metadata$fieldF : '').concat(this.metadata.fieldFormatting.title).concat(this.metadata.fieldFormatting.ribbon).concat('[elevated]').concat(this.metadata.fieldFormatting.paths).concat(this.metadata.fieldFormatting.thumbnail).concat(this.metadata.fieldFormatting.snippet).concat(this.metadata.fieldFormatting.date);

      for (var idx in reservedFieldnames) {
        var fieldname = reservedFieldnames[idx];
        if (propertyName == fieldname) return true;
      }

      return false;
    }
  }, {
    key: "clean_ribbon",
    value: function clean_ribbon(value) {
      if (value !== null) {
        if (typeof value == 'undefined') return '';else if (typeof value == 'string') return value.replace(/_/g, ' ');else if (typeof value.join != 'undefined') return value.join(', ').replace(/_/g, ' ');else return value;
      }

      return value;
    }
  }, {
    key: "isHiddenProperty",
    value: function isHiddenProperty(propertyName) {
      if (this.hideUniqueKey && propertyName == this.uniqueId) return true;
      return false;
    }
  }, {
    key: "isImage",
    value: function isImage(value) {
      var regex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i; //@ts-ignore

      return regex.test(this.cleanValue(value));
    }
  }, {
    key: "cleanValue",
    value: function cleanValue(value) {
      if (value !== null) {
        if (typeof value == 'undefined') return '';else if (typeof value == 'string') return value;else if (typeof value.join != 'undefined') return value.join('... ');else return value;
      } else {
        return '';
      }
    }
  }, {
    key: "valueClass",
    value: function valueClass(value) {
      var cls = 'text';

      if (value !== null) {
        if (typeof value == 'undefined') cls = 'text';else if (typeof value == 'string') cls = value;else if (typeof value.join != 'undefined') cls = value.join(', ');
        var idx = cls.indexOf(' ');
        if (idx != -1) cls = cls.substring(0, idx);
      }

      return cls;
    }
  }]);

  return SearchResult;
}(vue_property_decorator["c" /* Vue */]);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])({
  required: true
})], Resultvue_type_script_lang_ts_SearchResult.prototype, "result", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])({
  required: true
})], Resultvue_type_script_lang_ts_SearchResult.prototype, "metadata", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])({
  required: true
})], Resultvue_type_script_lang_ts_SearchResult.prototype, "fieldFormatters", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])({
  required: true
})], Resultvue_type_script_lang_ts_SearchResult.prototype, "display", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])({
  required: true
})], Resultvue_type_script_lang_ts_SearchResult.prototype, "uniqueId", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])({
  required: true
})], Resultvue_type_script_lang_ts_SearchResult.prototype, "hideUniqueKey", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])({
  required: true
})], Resultvue_type_script_lang_ts_SearchResult.prototype, "analyticsTrackClick", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["d" /* Watch */])('result', {
  deep: true
})], Resultvue_type_script_lang_ts_SearchResult.prototype, "onTemplateDataChange", null);

Resultvue_type_script_lang_ts_SearchResult = Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["a" /* Component */])({
  // other options
  components: {
    RuntimeTemplateCompiler: vue_runtime_template_compiler_esm["a" /* RuntimeTemplateCompiler */]
  }
})], Resultvue_type_script_lang_ts_SearchResult);
/* harmony default export */ var Resultvue_type_script_lang_ts_ = (Resultvue_type_script_lang_ts_SearchResult);
// CONCATENATED MODULE: ./src/components/Result.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Resultvue_type_script_lang_ts_ = (Resultvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Result.vue?vue&type=style&index=0&lang=scss&
var Resultvue_type_style_index_0_lang_scss_ = __webpack_require__("aada");

// CONCATENATED MODULE: ./src/components/Result.vue






/* normalize component */

var Result_component = Object(componentNormalizer["a" /* default */])(
  components_Resultvue_type_script_lang_ts_,
  Resultvue_type_template_id_11895f66_render,
  Resultvue_type_template_id_11895f66_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Result = (Result_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchResults.vue?vue&type=script&lang=ts&














var SearchResultsvue_type_script_lang_ts_storeState = Object(esm["e" /* getModule */])(search);

var SearchResultsvue_type_script_lang_ts_SearchResults = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(SearchResults, _Vue);

  var _super = Object(createSuper["a" /* default */])(SearchResults);

  function SearchResults() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SearchResults);

    _this = _super.apply(this, arguments);
    _this.resultFields = [];
    _this.uniqueId = '';
    _this.trackClick = {};
    _this.selected = null;
    _this.renderCount = 0;
    _this.loading = false;
    _this.searchStore = SearchResultsvue_type_script_lang_ts_storeState;
    return _this;
  }

  Object(createClass["a" /* default */])(SearchResults, [{
    key: "mounted",
    value: function mounted() {
      this.uniqueId = this.metadata.uniqueId;
      this.highlighting = this.metadata.highlighting;
      this.resultFields = this.metadata.fields.split(',');
    }
  }, {
    key: "onMetadataChange",
    value: function onMetadataChange() {
      this.resultFields = this.metadata.fields.split(',');
      this.uniqueId = this.metadata.uniqueId;
      this.highlighting = this.metadata.highlighting;
    }
  }, {
    key: "orderedSearchResults",
    get: function get() {
      var results = [];

      for (var oidx in this.searchResults) {
        var outputResultRow = {};
        var searchResultsRow = this.searchResults[oidx];
        var id = searchResultsRow[this.uniqueId];

        var _iterator = Object(createForOfIteratorHelper["a" /* default */])(this.resultFields),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var attrname = _step.value;

            if (attrname === this.searchStore.studioConfig.connector.fields.url) {
              outputResultRow[attrname] = searchResultsRow[attrname];
            } else if (attrname in searchResultsRow) {
              outputResultRow[attrname] = this.getHighlightedResults(attrname, searchResultsRow[attrname], id);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        results.push(outputResultRow);
      }

      return results;
    }
  }, {
    key: "clickedImpression",
    value: function clickedImpression(item) {
      if (item != null) {
        var impressions = services_TrackHelper.getImpressions(SearchResultsvue_type_script_lang_ts_storeState);

        for (var oidx in impressions) {
          var row = impressions[oidx];

          if (row['cDocId'] == item) {
            return row;
          }
        }
      }

      return null;
    }
  }, {
    key: "ev",
    value: function ev(event) {
      this.selected = event[0];
    }
  }, {
    key: "analyticsTrackClick",
    value: function analyticsTrackClick(item) {
      this.selected = item;
      var clickData = this.clickedImpression(item);

      if (clickData != null) {
        this.trackClick = {
          key: SearchResultsvue_type_script_lang_ts_storeState.studioConnector.apikey,
          query: SearchResultsvue_type_script_lang_ts_storeState.searchTerm,
          shownHits: SearchResultsvue_type_script_lang_ts_storeState.recordsPerPage,
          totalHits: SearchResultsvue_type_script_lang_ts_storeState.totalResults,
          pageNo: SearchResultsvue_type_script_lang_ts_storeState.currentPage,
          latency: SearchResultsvue_type_script_lang_ts_storeState.latencyVal,
          session: SearchResultsvue_type_script_lang_ts_storeState.studioConnector.session,
          cDocId: clickData.cDocId,
          cDocTitle: clickData.cDocTitle,
          position: clickData.position,
          language: SearchResultsvue_type_script_lang_ts_storeState.language
        };

        if (this.trackClick.query != '') {
          /* eslint-disable */
          //@ts-ignore
          _msq.push(['trackClick', this.trackClick]);
          /* eslint-enable */

        }
      }
    }
  }, {
    key: "getHighlightedResults",
    value: function getHighlightedResults(fieldname, value, id) {
      if (id in this.highlighting) {
        var h = this.highlighting[id];

        if (fieldname in h) {
          var h_value = h[fieldname];
          return this.cleanValue(h_value);
        }
      }

      return this.cleanValue(value);
    }
  }, {
    key: "cleanValue",
    value: function cleanValue(value) {
      if (value !== null) {
        if (typeof value == 'undefined') return '';else if (typeof value == 'string') return value;else if (typeof value.join != 'undefined') return value.join('... ');else return value;
      } else {
        return '';
      }
    }
  }]);

  return SearchResults;
}(vue_property_decorator["c" /* Vue */]);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])({
  required: true
})], SearchResultsvue_type_script_lang_ts_SearchResults.prototype, "searchResults", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])({
  required: true
})], SearchResultsvue_type_script_lang_ts_SearchResults.prototype, "metadata", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])()], SearchResultsvue_type_script_lang_ts_SearchResults.prototype, "fields", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])({
  required: true
})], SearchResultsvue_type_script_lang_ts_SearchResults.prototype, "fieldFormatters", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])({
  required: true
})], SearchResultsvue_type_script_lang_ts_SearchResults.prototype, "display", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])({
  required: true
})], SearchResultsvue_type_script_lang_ts_SearchResults.prototype, "hideUniqueKey", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["d" /* Watch */])('metadata', {
  deep: true
})], SearchResultsvue_type_script_lang_ts_SearchResults.prototype, "onMetadataChange", null);

SearchResultsvue_type_script_lang_ts_SearchResults = Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["a" /* Component */])({
  components: {
    SearchResult: Result
  }
})], SearchResultsvue_type_script_lang_ts_SearchResults);
/* harmony default export */ var SearchResultsvue_type_script_lang_ts_ = (SearchResultsvue_type_script_lang_ts_SearchResults);
// CONCATENATED MODULE: ./src/components/SearchResults.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_SearchResultsvue_type_script_lang_ts_ = (SearchResultsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/SearchResults.vue?vue&type=style&index=0&lang=scss&
var SearchResultsvue_type_style_index_0_lang_scss_ = __webpack_require__("44e5");

// CONCATENATED MODULE: ./src/components/SearchResults.vue






/* normalize component */

var SearchResults_component = Object(componentNormalizer["a" /* default */])(
  components_SearchResultsvue_type_script_lang_ts_,
  SearchResultsvue_type_template_id_e8a84bf0_render,
  SearchResultsvue_type_template_id_e8a84bf0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_SearchResults = (SearchResults_component.exports);
// EXTERNAL MODULE: ./node_modules/vue-autosuggest/dist/vue-autosuggest.esm.js
var vue_autosuggest_esm = __webpack_require__("2831");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b8fe842c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/paginationSection.vue?vue&type=template&id=2b852b78&
var paginationSectionvue_type_template_id_2b852b78_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.template && !_vm.reloading)?_c('runtime-template-compiler',{attrs:{"template":_vm.template}}):(_vm.hasResults && !_vm.reloading)?_c('div',{staticClass:"d-flex flex-wrap w-100 py-3 rl-search paging-container",class:_vm.showEditPaging? 'show-edit' : '',on:{"mouseenter":_vm.mouseenterPaging,"mouseleave":_vm.mouseleavePaging}},[(_vm.searchStore.builderConfig && _vm.hasResults)?_c('div',{staticClass:"edit-button",on:{"click":_vm.editResultsPaging}},[_vm._v("EDIT RESULT PAGING STYLE")]):_vm._e(),_c('div',{staticClass:"text-left col-xl-6 col-lg-8 col-md-8 pagination-wrap"},[_c('ul',{staticClass:"pagination justify-content-end"},[_c('li',{staticClass:"page-item",class:{'disabled' : _vm.searchStore.loading}},[(_vm.searchStore.searchFired)?_c('a',{staticClass:"page-link-searchstudio-js",attrs:{"href":"#","disabled":_vm.searchStore.startDoc === 0 || _vm.searchStore.loading,"variant":"outline-primary"},on:{"click":function($event){$event.preventDefault();_vm.searchStore.startDoc !== 0 && _vm.prevPage()}}},[_vm._v(" < Previous ")]):_vm._e()]),_c('li',{staticClass:"page-item"},[(_vm.searchStore.searchFired)?_c('span',{staticClass:"page-link-searchstudio-js"},[_c('strong',[_vm._v(_vm._s(_vm.searchStore.startDoc + 1)+" — "+_vm._s(_vm.searchStore.endDoc)+" ")]),_vm._v(" of "),_c('strong',[_vm._v(_vm._s(_vm.searchStore.totalResults))])]):_vm._e()]),_c('li',{staticClass:"page-item",class:{'disabled' : _vm.searchStore.loading}},[(_vm.searchStore.searchFired)?_c('a',{staticClass:"page-link-searchstudio-js",attrs:{"href":"#","disabled":_vm.searchStore.endDoc === _vm.searchStore.totalResults || _vm.searchStore.loading,"variant":"outline-primary"},on:{"click":function($event){$event.preventDefault();_vm.searchStore.totalResults !== _vm.searchStore.endDoc && _vm.nextPage()}}},[_vm._v(" Next > ")]):_vm._e()])])])]):_vm._e()}
var paginationSectionvue_type_template_id_2b852b78_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/paginationSection.vue?vue&type=template&id=2b852b78&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/paginationSection.vue?vue&type=script&lang=ts&








 //@ts-ignore




var paginationSectionvue_type_script_lang_ts_storeState = Object(esm["e" /* getModule */])(search);

var paginationSectionvue_type_script_lang_ts_PaginationSection = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(PaginationSection, _Vue);

  var _super = Object(createSuper["a" /* default */])(PaginationSection);

  function PaginationSection() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PaginationSection);

    _this = _super.apply(this, arguments);
    _this.storeState = paginationSectionvue_type_script_lang_ts_storeState;
    _this.searchStore = paginationSectionvue_type_script_lang_ts_storeState;
    _this.SearchHelper = services_SearchHelper;
    _this.showEditPaging = false;
    _this.showEdit = false;
    _this.template = null;
    _this.reloading = false;
    return _this;
  }

  Object(createClass["a" /* default */])(PaginationSection, [{
    key: "onSearchResultsChange",
    value: function onSearchResultsChange(newVal) {
      var _this2 = this;

      this.reloading = true;
      setTimeout(function () {
        _this2.reloading = false;

        _this2.$forceUpdate();
      }, 0);
    }
  }, {
    key: "hasResults",
    get: function get() {
      var _this$searchStore$sea;

      return !!((_this$searchStore$sea = this.searchStore.searchResults) !== null && _this$searchStore$sea !== void 0 && _this$searchStore$sea.length);
    }
  }, {
    key: "mouseenterPaging",
    value: function mouseenterPaging() {
      if (this.searchStore.builderConfig) {
        this.showEditPaging = true;
      }
    }
  }, {
    key: "mouseleavePaging",
    value: function mouseleavePaging() {
      this.showEditPaging = false;
    }
  }, {
    key: "editResultsPaging",
    value: function editResultsPaging() {
      this.searchStore.triggerResultPagingEdit();
    }
  }, {
    key: "nextPage",
    value: function nextPage() {
      var _storeState$sort_meth;

      this.searchStore.setLoadingMutation(true);
      this.searchStore.setStartDocMutation(this.searchStore.startDoc + this.searchStore.recordsPerPage);
      services_SearchHelper.preserveState();

      if (paginationSectionvue_type_script_lang_ts_storeState !== null && paginationSectionvue_type_script_lang_ts_storeState !== void 0 && (_storeState$sort_meth = paginationSectionvue_type_script_lang_ts_storeState.sort_method) !== null && _storeState$sort_meth !== void 0 && _storeState$sort_meth.selected) {
        services_SearchHelper.executeSearch({
          sort: paginationSectionvue_type_script_lang_ts_storeState.sort_method.selected,
          start: this.searchStore.startDoc,
          facet: this.searchStore.facetsQuery
        });
      } else {
        services_SearchHelper.executeSearch({
          start: this.searchStore.startDoc,
          facet: this.searchStore.facetsQuery
        });
      }

      this.searchStore.setCurrentPageMutation(this.searchStore.currentPage + 1);
      document.body.scrollTop = 0; // For Safari

      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }, {
    key: "prevPage",
    value: function prevPage() {
      var _storeState$sort_meth2;

      this.searchStore.setLoadingMutation(true);
      this.searchStore.setStartDocMutation(this.searchStore.startDoc - this.searchStore.recordsPerPage);
      services_SearchHelper.preserveState();

      if (paginationSectionvue_type_script_lang_ts_storeState !== null && paginationSectionvue_type_script_lang_ts_storeState !== void 0 && (_storeState$sort_meth2 = paginationSectionvue_type_script_lang_ts_storeState.sort_method) !== null && _storeState$sort_meth2 !== void 0 && _storeState$sort_meth2.selected) {
        services_SearchHelper.executeSearch({
          sort: paginationSectionvue_type_script_lang_ts_storeState.sort_method.selected,
          start: this.searchStore.startDoc,
          facet: this.searchStore.facetsQuery
        });
      } else {
        services_SearchHelper.executeSearch({
          start: this.searchStore.startDoc,
          facet: this.searchStore.facetsQuery
        });
      }

      this.searchStore.setCurrentPageMutation(this.searchStore.currentPage - 1);
      document.body.scrollTop = 0; // For Safari

      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }, {
    key: "mounted",
    value: function mounted() {
      if (this.searchStore.studioConfig.customPaginationTemplate) {
        var template = document.getElementById(this.searchStore.studioConfig.customPaginationTemplate.replace('#', ''));

        if (template) {
          this.template = template.innerHTML;
        }
      }
    }
  }]);

  return PaginationSection;
}(vue_property_decorator["c" /* Vue */]);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["d" /* Watch */])('searchStore.searchResults', {
  deep: true
})], paginationSectionvue_type_script_lang_ts_PaginationSection.prototype, "onSearchResultsChange", null);

paginationSectionvue_type_script_lang_ts_PaginationSection = Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["a" /* Component */])({
  components: {
    VueAutosuggest: vue_autosuggest_esm["a" /* VueAutosuggest */]
  }
})], paginationSectionvue_type_script_lang_ts_PaginationSection);
/* harmony default export */ var paginationSectionvue_type_script_lang_ts_ = (paginationSectionvue_type_script_lang_ts_PaginationSection);
// CONCATENATED MODULE: ./src/components/paginationSection.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_paginationSectionvue_type_script_lang_ts_ = (paginationSectionvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/paginationSection.vue?vue&type=style&index=0&lang=scss&
var paginationSectionvue_type_style_index_0_lang_scss_ = __webpack_require__("f52c");

// CONCATENATED MODULE: ./src/components/paginationSection.vue






/* normalize component */

var paginationSection_component = Object(componentNormalizer["a" /* default */])(
  components_paginationSectionvue_type_script_lang_ts_,
  paginationSectionvue_type_template_id_2b852b78_render,
  paginationSectionvue_type_template_id_2b852b78_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var paginationSection = (paginationSection_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchResultsContainer.vue?vue&type=script&lang=ts&











 //@ts-ignore






var SearchResultsContainervue_type_script_lang_ts_storeState = Object(esm["e" /* getModule */])(search);

var SearchResultsContainervue_type_script_lang_ts_SearchResultsContainer = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(SearchResultsContainer, _Vue);

  var _super = Object(createSuper["a" /* default */])(SearchResultsContainer);

  function SearchResultsContainer() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SearchResultsContainer);

    _this = _super.apply(this, arguments);
    _this.searchStore = SearchResultsContainervue_type_script_lang_ts_storeState;
    _this.SearchHelper = services_SearchHelper; //@ts-ignore

    _this.paginationDefined = studioConfig.paginationSection;
    _this.showEdit = false;
    _this.template = null;
    return _this;
  }

  Object(createClass["a" /* default */])(SearchResultsContainer, [{
    key: "updated",
    value: function updated() {
      this.searchFunctionality();
    }
  }, {
    key: "onShowProgressBarChange",
    value: function onShowProgressBarChange(newValue) {
      this.searchFunctionality();
    }
  }, {
    key: "created",
    value: function created() {
      this.renderTemplate();
    }
  }, {
    key: "renderTemplate",
    value: function renderTemplate() {
      if (this.searchStore.studioConfig.customPagingTemplate) {
        var template = document.getElementById(this.searchStore.studioConfig.customPagingTemplate.replace('#', ''));

        if (template) {
          this.template = template.innerHTML;
        }
      }
    }
  }, {
    key: "mouseenter",
    value: function mouseenter() {
      if (this.searchStore.builderConfig) {
        this.showEdit = true;
      }
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      this.showEdit = false;
    }
  }, {
    key: "searchFunctionality",
    value: function searchFunctionality() {
      if (this.searchStore.firstLoad && this.searchStore.studioConnector) {
        var sort = this.$route.query.sort;
        this.searchStore.setFirstLoadMutation(false);
        var start = null;

        if (this.$route.query && this.$route.query.start) {
          start = this.$route.query.start;
        }

        if (this.$route.query && this.$route.query.sort) {
          this.searchStore.setSortSelectedMutation(sort);
        }

        if (this.$route.query && this.$route.query.style) {
          this.searchStore.setLayoutGridMutation(this.$route.query.style == 'true' ? true : false);
        } else if (window.localStorage.getItem('style')) {
          this.searchStore.setLayoutGridMutation(window.localStorage.getItem('style') == 'true' ? true : false);
        }

        if (this.$route.query && this.$route.query.searchStudioQuery && !this.$route.query.facets) {
          this.searchStore.setSearchTermMutation(this.$route.query.searchStudioQuery);
          services_SearchHelper.search(null, start);
        } else if (this.$route.query && this.$route.query.searchStudioQuery && this.$route.query.facets) {
          this.searchStore.setSearchTermMutation(this.$route.query.searchStudioQuery);
        }

        if (this.$route.query && this.$route.query.facets) {
          this.searchStore.setFacetsQueryMutation(this.$route.query.facets);
          this.filterSearch(this.searchStore.facetsQuery, start);
        } else {
          this.searchDefault();
        }
      }
    }
  }, {
    key: "hideUniqueKey",
    get: function get() {
      if (this.searchStore.studioConnector.hideUniqueKey) return true;
      return false;
    }
  }, {
    key: "hasResults",
    get: function get() {
      var _this$searchStore$sea;

      return !!((_this$searchStore$sea = this.searchStore.searchResults) !== null && _this$searchStore$sea !== void 0 && _this$searchStore$sea.length);
    }
  }, {
    key: "field_formatters",
    get: function get() {
      if (this.searchStore.studioConnector.fieldFormatters == null) return {};
      return this.searchStore.studioConnector.fieldFormatters;
    }
  }, {
    key: "default_query_present",
    get: function get() {
      if (this.searchStore.studioConnector) {
        if (this.searchStore.studioConnector.defaultQuery) return true;
      }

      return false;
    }
  }, {
    key: "computeLayout",
    get: function get() {
      if (this.searchStore.viewDisplay == 'multi') {
        return this.searchStore.layoutGrid;
      } else if (this.searchStore.viewDisplay == 'grid') {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "editResults",
    value: function editResults() {
      this.searchStore.triggerResultEdit();
    }
  }, {
    key: "editResultsPaging",
    value: function editResultsPaging() {
      this.searchStore.triggerResultPagingEdit();
    }
  }, {
    key: "filterSearch",
    value: function filterSearch(facet_qs, pageStart) {
      this.searchStore.setFacetsQueryMutation('');

      if (facet_qs === null || facet_qs.length == 0) {
        var _storeState$sort_meth;

        this.searchStore.setStartDocMutation(pageStart ? parseInt(pageStart) : 0);

        if (SearchResultsContainervue_type_script_lang_ts_storeState !== null && SearchResultsContainervue_type_script_lang_ts_storeState !== void 0 && (_storeState$sort_meth = SearchResultsContainervue_type_script_lang_ts_storeState.sort_method) !== null && _storeState$sort_meth !== void 0 && _storeState$sort_meth.selected) {
          services_SearchHelper.executeSearch({
            sort: SearchResultsContainervue_type_script_lang_ts_storeState.sort_method.selected,
            start: this.searchStore.startDoc
          });
        } else {
          services_SearchHelper.executeSearch({
            start: this.searchStore.startDoc
          });
        }
      } else {
        var _storeState$sort_meth2;

        if (SearchResultsContainervue_type_script_lang_ts_storeState !== null && SearchResultsContainervue_type_script_lang_ts_storeState !== void 0 && (_storeState$sort_meth2 = SearchResultsContainervue_type_script_lang_ts_storeState.sort_method) !== null && _storeState$sort_meth2 !== void 0 && _storeState$sort_meth2.selected) {
          services_SearchHelper.executeSearch({
            sort: SearchResultsContainervue_type_script_lang_ts_storeState.sort_method.selected,
            facet: facet_qs,
            start: pageStart
          });
        } else {
          services_SearchHelper.executeSearch({
            facet: facet_qs,
            start: pageStart
          });
        }

        this.searchStore.setFacetsQueryMutation(facet_qs);
      }

      services_SearchHelper.preserveState();
    }
  }, {
    key: "searchDefault",
    value: function searchDefault() {
      if (this.default_query_present) {
        services_SearchHelper.search();
      }
    }
  }]);

  return SearchResultsContainer;
}(vue_property_decorator["c" /* Vue */]);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["d" /* Watch */])('searchStore.studioConnector')], SearchResultsContainervue_type_script_lang_ts_SearchResultsContainer.prototype, "onShowProgressBarChange", null);

SearchResultsContainervue_type_script_lang_ts_SearchResultsContainer = Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["a" /* Component */])({
  components: {
    Facets: components_Facets,
    SearchResults: components_SearchResults,
    VueAutosuggest: vue_autosuggest_esm["a" /* VueAutosuggest */],
    PaginationSection: paginationSection
  }
})], SearchResultsContainervue_type_script_lang_ts_SearchResultsContainer);
/* harmony default export */ var SearchResultsContainervue_type_script_lang_ts_ = (SearchResultsContainervue_type_script_lang_ts_SearchResultsContainer);
// CONCATENATED MODULE: ./src/components/SearchResultsContainer.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_SearchResultsContainervue_type_script_lang_ts_ = (SearchResultsContainervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/SearchResultsContainer.vue?vue&type=style&index=0&lang=scss&
var SearchResultsContainervue_type_style_index_0_lang_scss_ = __webpack_require__("4a2c");

// CONCATENATED MODULE: ./src/components/SearchResultsContainer.vue






/* normalize component */

var SearchResultsContainer_component = Object(componentNormalizer["a" /* default */])(
  components_SearchResultsContainervue_type_script_lang_ts_,
  SearchResultsContainervue_type_template_id_28a26308_render,
  SearchResultsContainervue_type_template_id_28a26308_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_SearchResultsContainer = (SearchResultsContainer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/SearchStudioClient.vue?vue&type=script&lang=ts&











var SearchStudioClientvue_type_script_lang_ts_storeState = Object(esm["e" /* getModule */])(search);

var SearchStudioClientvue_type_script_lang_ts_SearchStudioClient = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(SearchStudioClient, _Vue);

  var _super = Object(createSuper["a" /* default */])(SearchStudioClient);

  function SearchStudioClient() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SearchStudioClient);

    _this = _super.apply(this, arguments);
    _this.searchTerm = '';
    _this.studioConnector = null;
    _this.storeState = SearchStudioClientvue_type_script_lang_ts_storeState;
    return _this;
  }

  Object(createClass["a" /* default */])(SearchStudioClient, [{
    key: "setConnection",
    value: function setConnection(c) {
      this.studioConnector = c;
    }
  }, {
    key: "addStoreValue",
    value: function addStoreValue() {
      SearchStudioClientvue_type_script_lang_ts_storeState.setTest({
        test: SearchStudioClientvue_type_script_lang_ts_storeState.test + 1
      });
    }
  }]);

  return SearchStudioClient;
}(vue_property_decorator["c" /* Vue */]);

SearchStudioClientvue_type_script_lang_ts_SearchStudioClient = Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["a" /* Component */])({
  components: {
    SearchResultsContainer: components_SearchResultsContainer
  }
})], SearchStudioClientvue_type_script_lang_ts_SearchStudioClient);
/* harmony default export */ var SearchStudioClientvue_type_script_lang_ts_ = (SearchStudioClientvue_type_script_lang_ts_SearchStudioClient);
// CONCATENATED MODULE: ./src/SearchStudioClient.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_SearchStudioClientvue_type_script_lang_ts_ = (SearchStudioClientvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/SearchStudioClient.vue





/* normalize component */

var SearchStudioClient_component = Object(componentNormalizer["a" /* default */])(
  src_SearchStudioClientvue_type_script_lang_ts_,
  SearchStudioClientvue_type_template_id_3ded29da_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_SearchStudioClient = (SearchStudioClient_component.exports);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__("9861");

// CONCATENATED MODULE: ./src/services/SearchStudioConnector.js












var SearchStudioConnector_SearchStudioConnector = /*#__PURE__*/function () {
  function SearchStudioConnector(endpoint, authorization, apikey, session) {
    var _this = this;

    var fields = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var searchAdditionalArgs = arguments.length > 5 ? arguments[5] : undefined;
    var suggester = arguments.length > 6 ? arguments[6] : undefined;
    var fieldFormatters = arguments.length > 7 ? arguments[7] : undefined;
    var defaultQuery = arguments.length > 8 ? arguments[8] : undefined;
    var defaultSort = arguments.length > 9 ? arguments[9] : undefined;
    var hideUniqueKey = arguments.length > 10 ? arguments[10] : undefined;
    var relatedSearches = arguments.length > 11 ? arguments[11] : undefined;
    var searchAPIKey = arguments.length > 12 ? arguments[12] : undefined;
    var language = arguments.length > 13 ? arguments[13] : undefined;

    Object(classCallCheck["a" /* default */])(this, SearchStudioConnector);

    Object(defineProperty["a" /* default */])(this, "url", '');

    Object(defineProperty["a" /* default */])(this, "relatedSearches", '');

    Object(defineProperty["a" /* default */])(this, "suggester", '');

    Object(defineProperty["a" /* default */])(this, "auth_header", null);

    Object(defineProperty["a" /* default */])(this, "auth_header_related", null);

    Object(defineProperty["a" /* default */])(this, "language", 'en');

    Object(defineProperty["a" /* default */])(this, "apikey", '');

    Object(defineProperty["a" /* default */])(this, "session", '');

    this.url = endpoint;
    this.language = language;
    this.relatedSearchesURL = relatedSearches;
    this.suggester = suggester;
    this.apikey = apikey;
    this.session = session;
    this.auth_header = new Headers();
    this.auth_header.append('Accept', 'application/json');
    this.auth_header.append('Authorization', 'Basic ' + authorization);
    this.auth_header_related = new Headers();
    this.auth_header_related.append('Accept', 'application/json');
    this.auth_header_related.append('Authorization', searchAPIKey);
    this.fields = {};

    for (var fieldname in fields) {
      this.fields[fieldname] = [];
      var value = fields[fieldname];
      if (typeof value == 'string') this.fields[fieldname].push(value);else value.forEach(function (element) {
        return _this.fields[fieldname].push(element);
      });
    }

    if (typeof searchAdditionalArgs != 'undefined') this.searchAdditionalArgs = '&' + searchAdditionalArgs;else this.searchAdditionalArgs = '';
    this.fieldFormatters = fieldFormatters;
    this.defaultQuery = defaultQuery;
    this.defaultSort = defaultSort;
    this.hideUniqueKey = hideUniqueKey;
  }

  Object(createClass["a" /* default */])(SearchStudioConnector, [{
    key: "search",
    value: function search(term, callbackMethod) {
      var queryParams = new Proxy(new URLSearchParams(window.location.search), {
        get: function get(searchParams, prop) {
          return searchParams.get(prop);
        }
      });
      var addedLanguageVariant = queryParams.languageVariant ? '&fq=_language:' + queryParams.languageVariant : '';

      for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }

      var ss_url = this.url + '?q=' + encodeURIComponent(term) + this.toQueryString(params) + this.searchAdditionalArgs + '&language=' + this.language + addedLanguageVariant;
      fetch(ss_url, {
        method: 'GET',
        headers: this.auth_header,
        credentials: 'same-origin'
      }).then(function (response) {
        return response.json();
      }).then(function (result) {
        return callbackMethod(result);
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "suggest",
    value: function suggest(term, callbackMethod) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }

      var ss_url = this.suggester + '?q=' + term + this.toQueryString(params) + '&language=' + this.language; //console.log("url post params")

      console.log(ss_url);
      fetch(ss_url, {
        method: 'GET',
        headers: this.auth_header,
        credentials: 'same-origin'
      }).then(function (response) {
        return response.json();
      }).then(function (result) {
        return callbackMethod(result);
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "fields",
    value: function fields() {
      return this.fields;
    }
  }, {
    key: "toQueryString",
    value: function toQueryString(obj) {
      return '&' + obj.join('&');
    }
  }]);

  return SearchStudioConnector;
}();


// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b8fe842c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/searchInput.vue?vue&type=template&id=32853234&
var searchInputvue_type_template_id_32853234_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-container-wrapper",class:_vm.showEdit? 'show-edit' : '',on:{"mouseenter":_vm.mouseenter,"mouseleave":_vm.mouseleave}},[(_vm.storeState.builderConfig)?_c('div',{staticClass:"edit-button",on:{"click":_vm.editInput}},[_vm._v(" Edit Search Box ")]):_vm._e(),(_vm.template)?_c('runtime-template-compiler',{attrs:{"template":_vm.template}}):_c('div',{staticClass:"input-container"},[_c('div',{staticClass:"sf-header-searchstudio-js mb-5"},[_c('div',{},[_c('div',{staticClass:"sf-form"},[_c('div',{staticClass:"form-group"},[(_vm.autoSuggest)?_c('vue-autosuggest',{staticClass:"form-control-suggest",class:{'ignore-branding': _vm.storeState.studioConfig.hideBranding},attrs:{"value":_vm.storeState.searchTerm,"suggestions":_vm.storeState.searchSuggestions,"get-suggestion-value":_vm.getSuggestionValue,"limit":10,"input-props":{ id: 'searchTerm', placeholder: 'Search For...', autofocus: true }},on:{"input":_vm.onSuggestionInputChange,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.onSuggestionClick.apply(null, arguments)}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var suggestion = ref.suggestion;
return [_c('div',{domProps:{"innerHTML":_vm._s(suggestion.item)}})]}}],null,false,3196671459)}):_vm._e(),(!_vm.autoSuggest)?_c('input',{staticClass:"form-control form-control-lg",class:{'ignore-branding': _vm.storeState.studioConfig.hideBranding},attrs:{"type":"text","id":"searchTerm","placeholder":"Search","autofocus":""},domProps:{"value":_vm.storeState.searchTerm},on:{"change":_vm.searchWithNoAutoSuggest,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.searchWithNoAutoSuggest.apply(null, arguments)},"keydown":_vm.resetSearch}}):_vm._e(),(!_vm.storeState.loading)?_c('span',[(_vm.searchTerm === _vm.storeState.searchTerm && _vm.searchTerm !== '')?_c('button',{staticClass:"btn text-primary search-close-button",attrs:{"type":"button"},on:{"click":_vm.searchClose}},[_c('span',{staticClass:"search-close"})]):_c('button',{staticClass:"btn text-primary search-close-button",attrs:{"type":"submit"},on:{"click":_vm.onSearchIconClick}},[_c('span',{staticClass:"search-icon"})])]):_vm._e(),(_vm.storeState.loading)?_c('div',{staticClass:"loader"},[_c('div',{staticClass:"spinner-border"},[_c('span',{staticClass:"sr-only"},[_vm._v("Loading...")])])]):_vm._e()],1)])])])])],1)}
var searchInputvue_type_template_id_32853234_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/searchInput.vue?vue&type=template&id=32853234&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/searchInput.vue?vue&type=script&lang=ts&









 //@ts-ignore




var searchInputvue_type_script_lang_ts_storeState = Object(esm["e" /* getModule */])(search);

var searchInputvue_type_script_lang_ts_SearchInput = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(SearchInput, _Vue);

  var _super = Object(createSuper["a" /* default */])(SearchInput);

  function SearchInput() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SearchInput);

    _this = _super.apply(this, arguments);
    _this.storeState = searchInputvue_type_script_lang_ts_storeState;
    _this.SearchHelper = services_SearchHelper;
    _this.showEdit = false;
    _this.template = null;
    _this.searchTerm = '';
    return _this;
  }

  Object(createClass["a" /* default */])(SearchInput, [{
    key: "setSearchTerm",
    value: function setSearchTerm(e) {
      searchInputvue_type_script_lang_ts_storeState.setSearchTermMutation(e.target.value);
      this.searchTerm = e.target.value;
    }
  }, {
    key: "autoSuggest",
    get: function get() {
      return searchInputvue_type_script_lang_ts_storeState.studioConnector != null && searchInputvue_type_script_lang_ts_storeState.studioConnector.suggester != null;
    }
  }, {
    key: "resetSearch",
    value: function resetSearch() {
      this.storeState.setSearchFiredMutation(false);
    }
  }, {
    key: "searchClose",
    value: function searchClose() {
      this.storeState.setSearchTermMutation('');
      this.searchTerm = '';
      var found = document.getElementsByClassName('input-container');

      if (found[0]) {
        var inputs = found[0].querySelectorAll('input');

        if (inputs[0]) {
          inputs[0].focus();
        }
      }
    }
  }, {
    key: "getSuggestionValue",
    value: function getSuggestionValue(val) {
      var clean_text = val.item.replace(/<b>/g, '').replace(/<\/b>/g, '');
      this.storeState.setSearchTermMutation(clean_text);
      this.searchTerm = clean_text;
      services_SearchHelper.search();
      return clean_text;
    }
  }, {
    key: "mouseenter",
    value: function mouseenter() {
      if (this.storeState.builderConfig) {
        this.showEdit = true;
      }
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      this.showEdit = false;
    }
  }, {
    key: "onSearchIconClick",
    value: function onSearchIconClick() {
      var _this2 = this;

      this.storeState.setSearchTermMutation(this.searchTerm);
      setTimeout(function () {
        _this2.SearchHelper.search();
      }, 0);
    }
  }, {
    key: "onSuggestionInputChange",
    value: function onSuggestionInputChange(searchInput) {
      this.searchTerm = searchInput;

      if (searchInput.length >= searchInputvue_type_script_lang_ts_storeState.studioConfig.suggestAfterMinChars) {
        searchInputvue_type_script_lang_ts_storeState.studioConnector.suggest(searchInput, this.parseSuggestions);
      } else {
        searchInputvue_type_script_lang_ts_storeState.setSearchSuggestionsMutation([]);
      }
    }
  }, {
    key: "searchWithNoAutoSuggest",
    value: function searchWithNoAutoSuggest(e) {
      this.storeState.setSearchTermMutation(e.target.value);
      this.searchTerm = e.target.value;
      services_SearchHelper.search();
    }
  }, {
    key: "onSuggestionClick",
    value: function onSuggestionClick() {
      var _document$querySelect;

      //@ts-ignore
      this.storeState.setSearchTermMutation(document.querySelector('input[id=searchTerm]').value); //@ts-ignore

      this.searchTerm = (_document$querySelect = document.querySelector('input[id=searchTerm]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value;
      services_SearchHelper.search();
    }
  }, {
    key: "parseSuggestions",
    value: function parseSuggestions(response) {
      searchInputvue_type_script_lang_ts_storeState.setSearchSuggestionsMutation([]);

      if (response) {
        var suggestions = [];

        for (var suggester in response.suggest) {
          for (var term in response.suggest[suggester]) {
            for (var idx in response.suggest[suggester][term].suggestions) {
              suggestions.push(response.suggest[suggester][term].suggestions[idx].term);
            }
          }
        }

        searchInputvue_type_script_lang_ts_storeState.setSearchSuggestionsMutation([{
          data: suggestions
        }]);
      }
    }
  }, {
    key: "editInput",
    value: function editInput() {
      this.storeState.triggerInputEdit();
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this3 = this;

      if (this.storeState.studioConfig.customSearchTemplate) {
        var template = document.getElementById(this.storeState.studioConfig.customSearchTemplate.replace('#', ''));

        if (template) {
          this.template = template.innerHTML;
        }
      }

      setTimeout(function () {
        _this3.searchTerm = _this3.storeState.searchTerm;
      }, 100);
    }
  }]);

  return SearchInput;
}(vue_property_decorator["c" /* Vue */]);

searchInputvue_type_script_lang_ts_SearchInput = Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["a" /* Component */])({
  components: {
    VueAutosuggest: vue_autosuggest_esm["a" /* VueAutosuggest */]
  }
})], searchInputvue_type_script_lang_ts_SearchInput);
/* harmony default export */ var searchInputvue_type_script_lang_ts_ = (searchInputvue_type_script_lang_ts_SearchInput);
// CONCATENATED MODULE: ./src/components/searchInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_searchInputvue_type_script_lang_ts_ = (searchInputvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/searchInput.vue?vue&type=style&index=0&lang=scss&
var searchInputvue_type_style_index_0_lang_scss_ = __webpack_require__("540d");

// CONCATENATED MODULE: ./src/components/searchInput.vue






/* normalize component */

var searchInput_component = Object(componentNormalizer["a" /* default */])(
  components_searchInputvue_type_script_lang_ts_,
  searchInputvue_type_template_id_32853234_render,
  searchInputvue_type_template_id_32853234_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var searchInput = (searchInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b8fe842c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/searchFeedbackSection.vue?vue&type=template&id=514b9647&scoped=true&
var searchFeedbackSectionvue_type_template_id_514b9647_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search-feedback-filters-wrapper-container"},[_c('div',{staticClass:"search-feedback-filters-wrapper",class:_vm.showEdit? 'show-edit' : '',on:{"mouseenter":_vm.mouseenter,"mouseleave":_vm.mouseleave}},[_c('div',{staticClass:"edit-button",on:{"click":_vm.editFeedback}},[_vm._v(" EDIT RESULTS SUMMARY ")]),(_vm.template)?_c('runtime-template-compiler',{attrs:{"template":_vm.template}}):_c('div',[(_vm.searchStore.searchFired && _vm.hasResults)?_c('div',{staticClass:"search-feedback-filters align-items-center",class:{ active: _vm.hasResults }},[_c('div',{staticClass:"sf-filter-info"},[(_vm.searchStore.searchFired)?_c('span',[_vm._v(" Showing "),_c('strong',[_vm._v(_vm._s(_vm.searchStore.startDoc + 1)+" — "+_vm._s(_vm.searchStore.endDoc)+" ")]),_vm._v(" of "),_c('strong',[_vm._v(_vm._s(_vm.searchStore.totalResults))]),_vm._v(" results "),(_vm.searchStore.studioConnector.defaultQuery != _vm.searchStore.searchTerm && _vm.searchStore.searchTerm != '')?_c('span',[_vm._v(" for "),_c('strong',[_vm._v("\""+_vm._s(_vm.searchStore.searchTerm)+"\"")])]):_vm._e()]):_vm._e()])]):_vm._e()])],1),_c('div',{staticClass:"search-feedback-filters-wrapper",class:_vm.showEditNoResult? 'show-edit' : '',on:{"mouseenter":_vm.mouseenterNoResult,"mouseleave":_vm.mouseleaveNoResult}},[(_vm.searchStore.builderConfig && !_vm.hasResults)?_c('div',{staticClass:"edit-button",on:{"click":_vm.editEmptyResults}},[_vm._v(" EDIT Empty results ")]):_vm._e(),(_vm.noResultTemplate)?_c('runtime-template-compiler',{attrs:{"template":_vm.noResultTemplate}}):_c('div',[(_vm.searchStore.searchFired && !_vm.hasResults)?_c('div',{staticClass:"search-feedback-filters align-items-center 4444",class:{ active: _vm.searchStore.searchFired && !_vm.hasResults }},[_c('div',{staticClass:"sf-filter-info"},[_c('span',{staticClass:"d-block"},[_vm._v(" Showing "),_c('strong',[_vm._v("no results")]),_vm._v(" for "),_c('strong',[_vm._v("\""+_vm._s(_vm.searchStore.searchTerm)+"\"")])]),_c('br'),(_vm.hasSpellingSuggestion)?_c('span',[_vm._v(" Did you mean "),_c('a',{staticClass:"text-primary",attrs:{"href":"#"},on:{"click":_vm.onSpellingSuggestionClick}},[_vm._v(_vm._s(_vm.searchStore.spellingSuggestion))]),_vm._v("?")]):_vm._e()])]):_vm._e(),(_vm.searchStore.searchFired && !_vm.hasResults)?_c('div',{staticClass:"sf-lists",class:{ active: _vm.searchStore.searchFired && !_vm.hasResults }},[_c('aside',{staticClass:"sf-sidebar no-results"},[_c('p',[_vm._v("Try searching for search related terms or topics. We offer a wide variety of content to help you get the information you need.")]),_c('p',[_vm._v("Lost? Click on the ‘X” in the Search Box to reset your search.")])])]):_vm._e()])],1)])}
var searchFeedbackSectionvue_type_template_id_514b9647_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/searchFeedbackSection.vue?vue&type=template&id=514b9647&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/searchFeedbackSection.vue?vue&type=script&lang=ts&












var searchFeedbackSectionvue_type_script_lang_ts_storeState = Object(esm["e" /* getModule */])(search);

var searchFeedbackSectionvue_type_script_lang_ts_SearchFeedbackSection = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(SearchFeedbackSection, _Vue);

  var _super = Object(createSuper["a" /* default */])(SearchFeedbackSection);

  function SearchFeedbackSection() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SearchFeedbackSection);

    _this = _super.apply(this, arguments);
    _this.searchStore = searchFeedbackSectionvue_type_script_lang_ts_storeState;
    _this.SearchHelper = services_SearchHelper;
    _this.template = null;
    _this.noResultTemplate = null;
    _this.showEdit = false;
    _this.showEditNoResult = false;
    return _this;
  }

  Object(createClass["a" /* default */])(SearchFeedbackSection, [{
    key: "hasSpellingSuggestion",
    get: function get() {
      return this.searchStore.spellingSuggestion.length > 0;
    }
  }, {
    key: "hasResults",
    get: function get() {
      var _this$searchStore$sea;

      return !!((_this$searchStore$sea = this.searchStore.searchResults) !== null && _this$searchStore$sea !== void 0 && _this$searchStore$sea.length);
    }
  }, {
    key: "mouseenter",
    value: function mouseenter() {
      if (this.searchStore.builderConfig) {
        this.showEdit = true;
      }
    }
  }, {
    key: "mouseenterNoResult",
    value: function mouseenterNoResult() {
      if (this.searchStore.builderConfig) {
        this.showEditNoResult = true;
      }
    }
  }, {
    key: "editEmptyResults",
    value: function editEmptyResults() {
      this.searchStore.triggerEmptyResultEdit();
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      this.showEdit = false;
    }
  }, {
    key: "mouseleaveNoResult",
    value: function mouseleaveNoResult() {
      this.showEditNoResult = false;
    }
  }, {
    key: "editFeedback",
    value: function editFeedback() {
      this.searchStore.triggerFeedbackEdit();
    }
  }, {
    key: "onSpellingSuggestionClick",
    value: function onSpellingSuggestionClick() {
      this.searchStore.setSearchTermMutation(this.searchStore.spellingSuggestion);
      services_SearchHelper.search();
    }
  }, {
    key: "mounted",
    value: function mounted() {
      if (this.searchStore.studioConfig.customSearchFeedbackTemplate) {
        var template = document.getElementById(this.searchStore.studioConfig.customSearchFeedbackTemplate.replace('#', ''));

        if (template) {
          this.template = template.innerHTML;
        }
      }

      if (this.searchStore.studioConfig.customNoResultTemplate) {
        var _template = document.getElementById(this.searchStore.studioConfig.customNoResultTemplate.replace('#', ''));

        if (_template) {
          this.noResultTemplate = _template.innerHTML;
        }
      }
    }
  }]);

  return SearchFeedbackSection;
}(vue_property_decorator["c" /* Vue */]);

searchFeedbackSectionvue_type_script_lang_ts_SearchFeedbackSection = Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["a" /* Component */])({
  components: {}
})], searchFeedbackSectionvue_type_script_lang_ts_SearchFeedbackSection);
/* harmony default export */ var searchFeedbackSectionvue_type_script_lang_ts_ = (searchFeedbackSectionvue_type_script_lang_ts_SearchFeedbackSection);
// CONCATENATED MODULE: ./src/components/searchFeedbackSection.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_searchFeedbackSectionvue_type_script_lang_ts_ = (searchFeedbackSectionvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/searchFeedbackSection.vue?vue&type=style&index=0&id=514b9647&lang=scss&scoped=true&
var searchFeedbackSectionvue_type_style_index_0_id_514b9647_lang_scss_scoped_true_ = __webpack_require__("b566");

// CONCATENATED MODULE: ./src/components/searchFeedbackSection.vue






/* normalize component */

var searchFeedbackSection_component = Object(componentNormalizer["a" /* default */])(
  components_searchFeedbackSectionvue_type_script_lang_ts_,
  searchFeedbackSectionvue_type_template_id_514b9647_scoped_true_render,
  searchFeedbackSectionvue_type_template_id_514b9647_scoped_true_staticRenderFns,
  false,
  null,
  "514b9647",
  null
  
)

/* harmony default export */ var searchFeedbackSection = (searchFeedbackSection_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b8fe842c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/searchOptionsSection.vue?vue&type=template&id=68e4982b&
var searchOptionsSectionvue_type_template_id_68e4982b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-filter-actions-wrapper",class:_vm.showEdit? 'show-edit' : '',on:{"mouseenter":_vm.mouseenter,"mouseleave":_vm.mouseleave}},[(_vm.searchStore.builderConfig)?_c('div',{staticClass:"edit-button",on:{"click":_vm.editInput}},[_vm._v("EDIT RESULT OPTIONS")]):_vm._e(),(_vm.template)?_c('runtime-template-compiler',{attrs:{"template":_vm.template}}):_c('div',{staticClass:"sf-filter-actions"},[(_vm.searchStore.searchFired && _vm.hasResults)?_c('div',[_c('div',{staticClass:"d-flex flex-wrap justify-content-end"},[(_vm.searchStore.viewDisplay == 'multi')?_c('div',{staticClass:"view-card-searchstudio-js-style mr-3"},[_vm._v(" View Style "),_c('a',{class:[_vm.searchStore.layoutGrid ? 'active' : ''],attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.layoutStyle.apply(null, arguments)}}},[_c('span',{staticClass:"icon-grid"}),_c('span',{staticClass:"icon-list"})])]):_vm._e(),(_vm.hasMostRecent)?_c('div',{staticClass:"form-inline justify-content-end"},[_c('label',{staticClass:"ml-4 mr-2",attrs:{"for":"sort-by"}},[_vm._v("Sort By")]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchStore.sort_method.selected),expression:"searchStore.sort_method.selected"}],staticClass:"custom-select-searchstudio-js",attrs:{"id":"sort-by"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.searchStore.sort_method, "selected", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},_vm.SearchHelper.search]}},_vm._l((_vm.searchStore.sort_method.options),function(option){return _c('option',{key:option.key,domProps:{"value":option.key}},[_vm._v(" "+_vm._s(option.value)+" ")])}),0)]):_vm._e()])]):_vm._e()])],1)}
var searchOptionsSectionvue_type_template_id_68e4982b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/searchOptionsSection.vue?vue&type=template&id=68e4982b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/searchOptionsSection.vue?vue&type=script&lang=ts&











var searchOptionsSectionvue_type_script_lang_ts_storeState = Object(esm["e" /* getModule */])(search);

var searchOptionsSectionvue_type_script_lang_ts_SearchOptionsSection = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(SearchOptionsSection, _Vue);

  var _super = Object(createSuper["a" /* default */])(SearchOptionsSection);

  function SearchOptionsSection() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SearchOptionsSection);

    _this = _super.apply(this, arguments);
    _this.searchStore = searchOptionsSectionvue_type_script_lang_ts_storeState;
    _this.SearchHelper = services_SearchHelper;
    _this.template = null;
    _this.showEdit = false;
    return _this;
  }

  Object(createClass["a" /* default */])(SearchOptionsSection, [{
    key: "hasMostRecent",
    get: function get() {
      return this.searchStore.studioConnector != null && ('date' in this.searchStore.studioConnector.fields || this.searchStore.sortOptionsMapped.length > 0);
    }
  }, {
    key: "hasResults",
    get: function get() {
      var _this$searchStore$sea;

      return !!((_this$searchStore$sea = this.searchStore.searchResults) !== null && _this$searchStore$sea !== void 0 && _this$searchStore$sea.length);
    }
  }, {
    key: "mouseenter",
    value: function mouseenter() {
      if (this.searchStore.builderConfig) {
        this.showEdit = true;
      }
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      this.showEdit = false;
    }
  }, {
    key: "editInput",
    value: function editInput() {
      this.searchStore.triggerSummaryEdit();
    }
  }, {
    key: "layoutStyle",
    value: function layoutStyle() {
      this.searchStore.setLayoutGridMutation(!this.searchStore.layoutGrid);
      services_SearchHelper.preserveState();
    }
  }, {
    key: "mounted",
    value: function mounted() {
      if (this.searchStore.studioConfig.customSearchOptionSectionTemplate) {
        var template = document.getElementById(this.searchStore.studioConfig.customSearchOptionSectionTemplate.replace('#', ''));

        if (template) {
          this.template = template.innerHTML;
        }
      }
    }
  }]);

  return SearchOptionsSection;
}(vue_property_decorator["c" /* Vue */]);

searchOptionsSectionvue_type_script_lang_ts_SearchOptionsSection = Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["a" /* Component */])({
  components: {}
})], searchOptionsSectionvue_type_script_lang_ts_SearchOptionsSection);
/* harmony default export */ var searchOptionsSectionvue_type_script_lang_ts_ = (searchOptionsSectionvue_type_script_lang_ts_SearchOptionsSection);
// CONCATENATED MODULE: ./src/components/searchOptionsSection.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_searchOptionsSectionvue_type_script_lang_ts_ = (searchOptionsSectionvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/searchOptionsSection.vue?vue&type=style&index=0&lang=scss&
var searchOptionsSectionvue_type_style_index_0_lang_scss_ = __webpack_require__("9405");

// CONCATENATED MODULE: ./src/components/searchOptionsSection.vue






/* normalize component */

var searchOptionsSection_component = Object(componentNormalizer["a" /* default */])(
  components_searchOptionsSectionvue_type_script_lang_ts_,
  searchOptionsSectionvue_type_template_id_68e4982b_render,
  searchOptionsSectionvue_type_template_id_68e4982b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var searchOptionsSection = (searchOptionsSection_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b8fe842c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/relatedSearches.vue?vue&type=template&id=13289150&
var relatedSearchesvue_type_template_id_13289150_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-container-wrapper",class:_vm.showEdit? 'show-edit' : '',on:{"mouseenter":_vm.mouseenter,"mouseleave":_vm.mouseleave}},[(_vm.storeState.builderConfig)?_c('div',{staticClass:"edit-button",on:{"click":_vm.editInput}},[_vm._v(" Edit Related Searches ")]):_vm._e(),(_vm.template)?_c('runtime-template-compiler',{attrs:{"template":_vm.template}}):_c('div',{staticClass:"related-searches-container"},[(_vm.storeState.relatedSearches.length)?_c('div',[_c('b',[_vm._v("Related searches:")]),_vm._l((_vm.storeState.relatedSearches),function(value,index){return _c('span',{key:index,staticClass:"related-search"},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){return _vm.search(value, $event, index + 1)}}},[_vm._v(" "+_vm._s(value)+" "),(index < _vm.storeState.relatedSearches.length - 1 )?_c('span',[_vm._v(",")]):_vm._e()])])})],2):_vm._e()])],1)}
var relatedSearchesvue_type_template_id_13289150_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/relatedSearches.vue?vue&type=template&id=13289150&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/relatedSearches.vue?vue&type=script&lang=ts&










 //@ts-ignore




var relatedSearchesvue_type_script_lang_ts_storeState = Object(esm["e" /* getModule */])(search);

var relatedSearchesvue_type_script_lang_ts_RelatedSearches = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(RelatedSearches, _Vue);

  var _super = Object(createSuper["a" /* default */])(RelatedSearches);

  function RelatedSearches() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, RelatedSearches);

    _this = _super.apply(this, arguments);
    _this.storeState = relatedSearchesvue_type_script_lang_ts_storeState;
    _this.searchStore = relatedSearchesvue_type_script_lang_ts_storeState;
    _this.SearchHelper = services_SearchHelper;
    _this.showEdit = false;
    _this.template = null;
    return _this;
  }

  Object(createClass["a" /* default */])(RelatedSearches, [{
    key: "relatedSearchesURL",
    get: function get() {
      return relatedSearchesvue_type_script_lang_ts_storeState.studioConnector != null && relatedSearchesvue_type_script_lang_ts_storeState.studioConnector.relatedSearchesURL != null;
    }
  }, {
    key: "editInput",
    value: function editInput() {
      this.storeState.triggerRelatedSearchesEdit();
    }
  }, {
    key: "mouseenter",
    value: function mouseenter() {
      if (this.storeState.builderConfig) {
        this.showEdit = true;
      }
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      this.showEdit = false;
    }
  }, {
    key: "analyticsTrackClick",
    value: function analyticsTrackClick(relatedQuery, position) {
      if (relatedQuery) {
        var trackClick = {
          session: relatedSearchesvue_type_script_lang_ts_storeState.studioConnector.session,
          key: relatedSearchesvue_type_script_lang_ts_storeState.studioConnector.apikey,
          query: relatedSearchesvue_type_script_lang_ts_storeState.searchTerm,
          position: position,
          relatedSearch: relatedQuery,
          pageNo: 1,
          shownHits: relatedSearchesvue_type_script_lang_ts_storeState.relatedSearches.length,
          totalHits: relatedSearchesvue_type_script_lang_ts_storeState.relatedSearches.length,
          language: relatedSearchesvue_type_script_lang_ts_storeState.language
        };
        console.log('trackClick', JSON.stringify(trackClick));
        /* eslint-disable */
        //@ts-ignore

        _msq.push(['trackRelatedSearchClick', trackClick]);
        /* eslint-enable */

      }
    }
  }, {
    key: "search",
    value: function search(value, event, position) {
      var _this2 = this;

      this.analyticsTrackClick(value, position);
      event.preventDefault();
      event.stopPropagation();
      this.storeState.setSearchTermMutation(value);
      setTimeout(function () {
        _this2.SearchHelper.search();

        document.body.scrollTop = 0; // For Safari

        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }, 0);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      if (this.storeState.studioConfig.customRelatedSearchesTemplate) {
        var template = document.getElementById(this.storeState.studioConfig.customRelatedSearchesTemplate.replace('#', ''));

        if (template) {
          this.template = template.innerHTML;
        }
      }
    }
  }]);

  return RelatedSearches;
}(vue_property_decorator["c" /* Vue */]);

relatedSearchesvue_type_script_lang_ts_RelatedSearches = Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["a" /* Component */])({
  components: {
    VueAutosuggest: vue_autosuggest_esm["a" /* VueAutosuggest */]
  }
})], relatedSearchesvue_type_script_lang_ts_RelatedSearches);
/* harmony default export */ var relatedSearchesvue_type_script_lang_ts_ = (relatedSearchesvue_type_script_lang_ts_RelatedSearches);
// CONCATENATED MODULE: ./src/components/relatedSearches.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_relatedSearchesvue_type_script_lang_ts_ = (relatedSearchesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/relatedSearches.vue?vue&type=style&index=0&lang=scss&
var relatedSearchesvue_type_style_index_0_lang_scss_ = __webpack_require__("7c2a");

// CONCATENATED MODULE: ./src/components/relatedSearches.vue






/* normalize component */

var relatedSearches_component = Object(componentNormalizer["a" /* default */])(
  components_relatedSearchesvue_type_script_lang_ts_,
  relatedSearchesvue_type_template_id_13289150_render,
  relatedSearchesvue_type_template_id_13289150_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_relatedSearches = (relatedSearches_component.exports);
// CONCATENATED MODULE: ./src/main.ts





var _conf$connector;



 //@ts-ignore


 //@ts-ignore

 //@ts-ignore








 //@ts-ignore




vue_runtime_esm["a" /* default */].config.productionTip = false;
vue_runtime_esm["a" /* default */].use(vue_autosuggest_esm["b" /* default */]);
vue_runtime_esm["a" /* default */].use(vue_runtime_template_compiler_esm["b" /* default */]);
vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
var routes = [];
var router = new vue_router_esm["a" /* default */]({
  mode: 'history',
  routes: routes
}); //@ts-ignore

var conf = studioConfig;
var main_storeState = Object(esm["e" /* getModule */])(search);

if (conf !== null && conf !== void 0 && (_conf$connector = conf.connector) !== null && _conf$connector !== void 0 && _conf$connector.language) {
  var _conf$connector2;

  main_storeState.setLanguageMutation(conf === null || conf === void 0 ? void 0 : (_conf$connector2 = conf.connector) === null || _conf$connector2 === void 0 ? void 0 : _conf$connector2.language);
}
/* eslint-disable */


if (conf) {
  new vue_runtime_esm["a" /* default */]({
    store: store,
    router: router,
    el: conf.searchInput,
    render: function render(h) {
      return h(searchInput);
    },
    mounted: function mounted() {}
  });

  if (conf.facetSection) {
    new vue_runtime_esm["a" /* default */]({
      store: store,
      router: router,
      el: conf.facetSection,
      render: function render(h) {
        return h(components_Facets);
      },
      mounted: function mounted() {}
    });
  }

  if (conf.searchResultSummarySection) {
    new vue_runtime_esm["a" /* default */]({
      store: store,
      router: router,
      el: conf.searchResultSummarySection,
      render: function render(h) {
        return h(searchFeedbackSection);
      },
      mounted: function mounted() {}
    });
  }

  if (conf.paginationSection) {
    new vue_runtime_esm["a" /* default */]({
      store: store,
      router: router,
      el: conf.paginationSection,
      render: function render(h) {
        return h(paginationSection);
      },
      mounted: function mounted() {}
    });
  }

  if (conf.searchOptionsSection) {
    new vue_runtime_esm["a" /* default */]({
      store: store,
      router: router,
      el: conf.searchOptionsSection,
      render: function render(h) {
        return h(searchOptionsSection);
      },
      mounted: function mounted() {}
    });
  }

  if (conf.relatedSearchesSection) {
    setTimeout(function () {
      new vue_runtime_esm["a" /* default */]({
        store: store,
        router: router,
        el: conf.relatedSearchesSection,
        render: function render(h) {
          return h(components_relatedSearches);
        },
        mounted: function mounted() {}
      });
    }, 1000);
  }

  new vue_runtime_esm["a" /* default */]({
    router: router,
    store: store,
    el: conf.searchResults,
    render: function render(h) {
      return h(src_SearchStudioClient);
    },
    mounted: function mounted() {
      services_SearchHelper.$route = this.$route;
      services_SearchHelper.$router = this.$router;
      var connector = new SearchStudioConnector_SearchStudioConnector(conf.connector.url, conf.connector.authentication, conf.connector.apikey, conf.connector.session, conf.connector.fields, conf.connector.searchAdditionalArgs, conf.connector.suggester, conf.connector.fieldFormatters, conf.connector.defaultQuery, conf.connector.defaultSort, conf.connector.hideUniqueKey, conf.connector.relatedSearches, conf.connector.searchAPIKey, main_storeState.language);
      var display = 'grid';

      if (conf.display) {
        display = conf.display;
      }

      var facets = 5;

      if (conf.facet_pagination) {
        facets = conf.facet_pagination;
      }

      var suggestAfterMinChars = 3;

      if (conf.suggestAfterMinChars) {
        suggestAfterMinChars = conf.suggestAfterMinChars;
      }

      main_storeState.setConfigValues({
        facetPagination: facets,
        viewDisplay: display,
        suggestAfterMinChars: suggestAfterMinChars,
        studioConnector: connector
      });
    }
  });
}
/* eslint-enable */

/***/ }),

/***/ "d245":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e355":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f52c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paginationSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7bde");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paginationSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paginationSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fef1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facets_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d245");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facets_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facets_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ });
//# sourceMappingURL=app.92954c37.js.map