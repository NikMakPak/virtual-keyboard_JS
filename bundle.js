/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style/style.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    box-sizing: border-box;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: Georgia, 'Times New Roman', Times, serif;\\r\\n    font-size: 20px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n    max-width: 1280px;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n\\r\\n.container:first-child {\\r\\n    margin-top: 6%;\\r\\n}\\r\\n\\r\\nul {\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\nli {\\r\\n    padding-left: 20px;\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\nli::before {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    top: calc(50% - 5px);\\r\\n    left: 0;\\r\\n    height: 10px;\\r\\n    width: 10px;\\r\\n    border-radius: 50%;\\r\\n    background-color: coral;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n    margin-top: 10px;\\r\\n    padding: 5px 10px;\\r\\n    width: 100%;\\r\\n    font-size: 20px;\\r\\n    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);\\r\\n    border: 1px solid grey;\\r\\n    border-radius: 4px;\\r\\n}\\r\\n\\r\\n.keyboard {\\r\\n    position: relative;\\r\\n    left: 0;\\r\\n    bottom: 0;\\r\\n    width: 100%;\\r\\n    padding: 5px 0;\\r\\n    background: coral;\\r\\n    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);\\r\\n    user-select: none;\\r\\n    transition: bottom 0.4s;\\r\\n}\\r\\n\\r\\n.keyboard__layout {\\r\\n    padding: 5px 10px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.keyboard__key{\\r\\n    height: 45px;\\r\\n    width: 6%;\\r\\n    max-width: 90px;\\r\\n    margin: 3px;\\r\\n    border-radius: 4px;\\r\\n    border: none;\\r\\n    background: rgba(255, 255, 255, 0.2);\\r\\n    color: #ffffff;\\r\\n    font-size: 1.05rem;\\r\\n    outline: none;\\r\\n    cursor: pointer;\\r\\n    display: inline-flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    vertical-align: top;\\r\\n    padding: 0;\\r\\n    -webkit-tap-highlight-color: transparent;\\r\\n    position: relative;\\r\\n    transition: all 0.2s;\\r\\n}\\r\\n\\r\\n.keyboard__key:active {\\r\\n    background: rgba(255, 255, 255, 0.12);\\r\\n}\\r\\n\\r\\n.keyboard__key--wide {\\r\\n    width: 12%;\\r\\n}\\r\\n\\r\\n.keyboard__key--extra-wide {\\r\\n    width: 29.5%;\\r\\n    max-width: 500px;\\r\\n}\\r\\n\\r\\n.keyboard__key--activatable::after {\\r\\n    content: '';\\r\\n    top: 10px;\\r\\n    right: 10px;\\r\\n    position: absolute;\\r\\n    width: 8px;\\r\\n    height: 8px;\\r\\n    background: rgba(0, 0, 0, 0.4);\\r\\n    border-radius: 50%;\\r\\n}\\r\\n\\r\\n.keyboard__key--active::after {\\r\\n    background: #d7ba39;\\r\\n}\\r\\n\\r\\n.keyboard__key--dark {\\r\\n    background: rgba(0, 0, 0, 0.25);\\r\\n}\\r\\n\\r\\n.keyboard__key--keyDown {\\r\\n    animation-name: keyDown;\\r\\n    animation-duration: 0.2s;\\r\\n    background: rgba(255, 255, 255, 0.4);\\r\\n    transition: all 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n@keyframes keyDown {\\r\\n    from {\\r\\n        background: rgba(255, 255, 255, 0.2); \\r\\n    } \\r\\n\\r\\n    to{\\r\\n        background: rgba(255, 255, 255, 0.4);\\r\\n    }\\r\\n}\\r\\n\\r\\n.keyboard__lang {\\r\\n    padding: 5px 10px;\\r\\n    position: absolute;\\r\\n    width: 45px;\\r\\n    height: 45px;\\r\\n    top: -45px;\\r\\n    left: 0;\\r\\n    color: coral;\\r\\n    text-align: center;\\r\\n    vertical-align: middle;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    font-size: 1.20rem;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\n.keyboard__icon {\\r\\n    height: 2rem;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://keyboard/./src/assets/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/style/style.css":
/*!************************************!*\
  !*** ./src/assets/style/style.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://keyboard/./src/assets/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/modules/keyboard.js":
/*!****************************************!*\
  !*** ./src/assets/modules/keyboard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyboard\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _img_Backspace_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/Backspace.svg */ \"./src/assets/img/Backspace.svg\");\n/* harmony import */ var _img_CapsLock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/CapsLock.svg */ \"./src/assets/img/CapsLock.svg\");\n/* harmony import */ var _img_Space_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/Space.svg */ \"./src/assets/img/Space.svg\");\n/* harmony import */ var _img_Enter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/Enter.svg */ \"./src/assets/img/Enter.svg\");\n/* harmony import */ var _img_Meta_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/Meta.svg */ \"./src/assets/img/Meta.svg\");\n/* harmony import */ var _img_Alt_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/Alt.svg */ \"./src/assets/img/Alt.svg\");\n/* harmony import */ var _img_ArrowDown_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/ArrowDown.svg */ \"./src/assets/img/ArrowDown.svg\");\n/* harmony import */ var _img_ArrowUp_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/ArrowUp.svg */ \"./src/assets/img/ArrowUp.svg\");\n/* harmony import */ var _img_ArrowLeft_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/ArrowLeft.svg */ \"./src/assets/img/ArrowLeft.svg\");\n/* harmony import */ var _img_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/ArrowRight.svg */ \"./src/assets/img/ArrowRight.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst Keyboard = {\r\n    \r\n    elements: {\r\n        main: null,\r\n        layout: null,\r\n        keys: [],\r\n        langIndication: null,\r\n        display: null,\r\n    },\r\n\r\n    props: {\r\n        value: '',\r\n        capsLock: false,\r\n        lang: localStorage['lang'] || 'EN',\r\n        carret: null,  \r\n        shiftPress: false,\r\n        altPress: false, \r\n    },\r\n\r\n    init(display) {\r\n        this.elements.main = document.createElement('div');\r\n        this.elements.layout = document.createElement('div');\r\n        this.elements.langIndication = document.createElement('div');\r\n        \r\n        this.elements.main.classList.add('keyboard', 'container');\r\n        this.elements.layout.classList.add('keyboard__layout');\r\n        this.elements.langIndication.classList.add('keyboard__lang');\r\n\r\n        this.elements.langIndication.textContent = localStorage['lang'] || 'EN';\r\n        \r\n        const keysFragment = this._createKeys(this.props.lang);\r\n        \r\n        this.elements.layout.append(keysFragment);\r\n        this.elements.main.append(this.elements.langIndication);\r\n        this.elements.main.append(this.elements.layout);\r\n        \r\n        document.body.append(this.elements.main);\r\n\r\n        this.elements.display = display;\r\n\r\n        this.elements.display.addEventListener('blur', () => {\r\n            this.props.value = this.elements.display.value \r\n        });\r\n\r\n        this.elements.display.addEventListener('keydown', (event) => {\r\n            if(event.key === \"CapsLock\") {\r\n                this._toggleCapsLock();\r\n            }   \r\n         \r\n          if(event.key === \"Shift\") {\r\n              this.props.shiftPress = true;\r\n          }  \r\n          \r\n          if(event.key === \"Alt\") {\r\n            this.props.altPress = true;\r\n          }\r\n          \r\n          if(this.props.shiftPress && this.props.altPress) {\r\n              this._changeLang();\r\n          }\r\n        \r\n          for(let key of this.elements.keys) {\r\n\r\n              if(event.key === key.dataset.key || event.key === key.dataset.key.toUpperCase() ) {\r\n                key.classList.add('keyboard__key--keyDown')}\r\n          } \r\n        })\r\n\r\n        this.elements.display.addEventListener('keyup', (event) => {\r\n\r\n            if(event.key === \"Shift\") {\r\n                this.props.shiftPress = false;\r\n            }  \r\n            \r\n            if(event.key === \"Alt\") {\r\n              this.props.altPress = false;\r\n            }\r\n        \r\n            for(let key of this.elements.keys) {\r\n  \r\n                if(event.key === key.dataset.key || event.key === key.dataset.key.toUpperCase() ) {\r\n  \r\n                  setTimeout(()=> {\r\n                    key.classList.remove('keyboard__key--keyDown')\r\n                  }, 200)  \r\n                }\r\n            } \r\n          })\r\n\r\n\r\n        console.log(Keyboard);\r\n        \r\n        this._updateKeysProp();\r\n\r\n    },\r\n\r\n    _createKeys(lang) {\r\n        \r\n        const fragment = document.createDocumentFragment('div'); \r\n\r\n        const EN_lang = [\r\n            '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Delete', \r\n            'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\',  \r\n            'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', \"'\", 'Enter', \r\n            'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'ShiftR', \r\n            'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'\r\n        ];\r\n\r\n        const RU_lang = [\r\n            'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Delete', \r\n            'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\\\', \r\n            'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', \r\n            'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'ShiftR', \r\n            'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'\r\n        ];\r\n\r\n        let currentLang;\r\n\r\n        switch(lang) {\r\n            case \"EN\": \r\n                currentLang = EN_lang\r\n                break;\r\n\r\n            case \"RU\":\r\n                currentLang = RU_lang\r\n                break;\r\n        };\r\n     \r\n        for(let i = 0; i <  currentLang.length; i++) {\r\n            \r\n            const keyEl = document.createElement('button');\r\n            \r\n            keyEl.classList.add('keyboard__key');\r\n\r\n            keyEl.setAttribute(\"type\", \"button\");\r\n            keyEl.setAttribute('data-char', currentLang[i].charCodeAt());\r\n            keyEl.setAttribute('data-key', currentLang[i]);\r\n\r\n\r\n            switch(currentLang[i]) {\r\n                \r\n                case 'Backspace':\r\n                    \r\n                    keyEl.classList.add('keyboard__key--wide');\r\n\r\n                    const iconBackSpace = this._createKeyIcon();\r\n                    iconBackSpace.setAttribute('src', _img_Backspace_svg__WEBPACK_IMPORTED_MODULE_0__);\r\n                    keyEl.append(iconBackSpace);\r\n\r\n                    keyEl.addEventListener(\"click\", () => {\r\n\r\n                        if (this.elements.display.selectionEnd === this.props.value.length) { \r\n                            this.props.value = this.props.value.substring(0, this.props.value.length - 1);\r\n                            this.props.carret = null\r\n                        }\r\n                        else {\r\n                            let start = this.props.value.substring(0, this.elements.display.selectionEnd); \r\n                            let end = this.props.value.substring(this.elements.display.selectionEnd, this.props.value.length );\r\n                            this.props.value = start.substring(0, start.length - 1) + end;\r\n                            \r\n                            this.props.carret = this.props.value.length - end.length;\r\n                        }\r\n                        this._onKeyClick();\r\n                    });\r\n                break;\r\n\r\n                case 'Tab':\r\n                    keyEl.classList.add('keyboard__key--wide');\r\n                    \r\n                    keyEl.append(this._createFakeCildEl('Tab'))\r\n\r\n                    keyEl.addEventListener(\"click\", () => {\r\n                        this.props.value += '  ';\r\n                        this._onKeyClick();\r\n                    });\r\n\r\n                break;\r\n\r\n                case 'CapsLock':\r\n                    keyEl.classList.add('keyboard__key--wide', \"keyboard__key--activatable\");\r\n\r\n                    const iconCaps = this._createKeyIcon();\r\n                    iconCaps.setAttribute('src', _img_CapsLock_svg__WEBPACK_IMPORTED_MODULE_1__);\r\n                    keyEl.append(iconCaps);\r\n\r\n                    keyEl.addEventListener(\"click\", () => {\r\n                        this._toggleCapsLock();\r\n                    });\r\n                break;\r\n\r\n                case 'Enter':\r\n                    keyEl.classList.add('keyboard__key--wide');\r\n                    \r\n                    const iconEnter = this._createKeyIcon();\r\n                    iconEnter.setAttribute('src', _img_Enter_svg__WEBPACK_IMPORTED_MODULE_3__);\r\n                    keyEl.append(iconEnter);\r\n\r\n                    keyEl.addEventListener(\"click\", () => {\r\n\r\n                        if (this.elements.display.selectionEnd === this.props.value.length) { \r\n                           this.props.value += '\\n';\r\n                           this.props.carret = null\r\n                       }\r\n                       else {\r\n                           let start = this.props.value.substring(0, this.elements.display.selectionEnd); \r\n                           let end = this.props.value.substring(this.elements.display.selectionEnd, this.props.value.length );\r\n                           this.props.value = start + \"\\n\" + end;\r\n                           \r\n                           this.props.carret = this.props.value.length - end.length;\r\n                       }\r\n                       this._onKeyClick();\r\n                   });\r\n                break;\r\n\r\n                case ' ':\r\n                    keyEl.classList.add('keyboard__key--extra-wide');\r\n                    \r\n                    const iconSpace = this._createKeyIcon();\r\n                    iconSpace.setAttribute('src', _img_Space_svg__WEBPACK_IMPORTED_MODULE_2__);\r\n                    keyEl.append(iconSpace);\r\n\r\n                    \r\n                    keyEl.addEventListener(\"click\", () => {\r\n\r\n                        if (this.elements.display.selectionEnd === this.props.value.length) { \r\n                           this.props.value += ' ';\r\n                           this.props.carret = null\r\n                       }\r\n                       else {\r\n                           let start = this.props.value.substring(0, this.elements.display.selectionEnd); \r\n                           let end = this.props.value.substring(this.elements.display.selectionEnd, this.props.value.length );\r\n                           this.props.value = start + \" \" + end;\r\n                           \r\n                           this.props.carret = this.props.value.length - end.length;\r\n                       }\r\n                       this._onKeyClick();\r\n                   });\r\n                    \r\n                break;\r\n\r\n                case 'ArrowRight':\r\n                    \r\n                    keyEl.classList.add('keyboard__key--dark');\r\n\r\n                    const iconRight = this._createKeyIcon();\r\n                    iconRight.setAttribute('src', _img_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_9__);\r\n                    keyEl.append(iconRight);\r\n\r\n                    keyEl.addEventListener(\"click\", () => {\r\n                        \r\n                        if(this.elements.display.selectionEnd === this.props.value.length) return;\r\n                        \r\n                        this.elements.display.selectionStart += 1;\r\n                        \r\n                        this._onKeyClick();\r\n                    });\r\n                break;\r\n\r\n                case 'ArrowDown':\r\n                    \r\n                    keyEl.classList.add('keyboard__key--dark');\r\n\r\n                    const iconDown = this._createKeyIcon();\r\n                    iconDown.setAttribute('src', _img_ArrowDown_svg__WEBPACK_IMPORTED_MODULE_6__);\r\n                    keyEl.append(iconDown);\r\n\r\n                    keyEl.addEventListener(\"click\", () => {\r\n                        let test = this.elements.display.value.substr(0, this.elements.display.selectionStart).split(\"\\n\").length\r\n                        console.log(test);\r\n                        console.log(this.props.value.length)\r\n                    });\r\n                break;\r\n\r\n                case 'ArrowLeft':\r\n                    \r\n                    keyEl.classList.add('keyboard__key--dark');\r\n\r\n                    const iconLeft = this._createKeyIcon();\r\n                    iconLeft.setAttribute('src', _img_ArrowLeft_svg__WEBPACK_IMPORTED_MODULE_8__);\r\n                    keyEl.append(iconLeft);\r\n\r\n                    keyEl.addEventListener(\"click\", () => {\r\n                        if(this.elements.display.selectionEnd === 0) return;\r\n                        \r\n                        this.elements.display.selectionEnd -= 1;\r\n\r\n                        this._onKeyClick();\r\n                    });\r\n                break;\r\n\r\n                case 'ArrowUp':\r\n                    \r\n                    keyEl.classList.add('keyboard__key--dark');\r\n\r\n                    const iconUp = this._createKeyIcon();\r\n                    iconUp.setAttribute('src', _img_ArrowUp_svg__WEBPACK_IMPORTED_MODULE_7__);\r\n                    keyEl.append(iconUp);\r\n\r\n                    keyEl.addEventListener(\"click\", () => {\r\n                    });\r\n                break;\r\n\r\n                case 'Meta':\r\n\r\n                    const iconMeta = this._createKeyIcon();\r\n                    iconMeta.setAttribute('src', _img_Meta_svg__WEBPACK_IMPORTED_MODULE_4__);\r\n                    keyEl.append(iconMeta);\r\n\r\n                    keyEl.addEventListener(\"click\", () => {\r\n                    });\r\n                break;\r\n\r\n                case 'Alt':\r\n\r\n                    const iconAlt = this._createKeyIcon();\r\n                    iconAlt.setAttribute('src', _img_Alt_svg__WEBPACK_IMPORTED_MODULE_5__);\r\n                    keyEl.append(iconAlt);\r\n\r\n                    keyEl.classList.add('keyboard__key--wide');\r\n\r\n                    keyEl.addEventListener('click' , () => {\r\n                        this._changeLang(this.props.lang);\r\n                    })\r\n\r\n                break;\r\n\r\n                case 'Control':\r\n                    keyEl.append(this._createFakeCildEl('Ctrl'))\r\n\r\n                    keyEl.addEventListener(\"click\", () => {\r\n                    });\r\n                break;\r\n\r\n                case 'Shift':\r\n                    keyEl.append(this._createFakeCildEl('Shift'))\r\n                    keyEl.classList.add('keyboard__key--wide')\r\n                    keyEl.addEventListener(\"click\", () => {\r\n                    });\r\n                break;\r\n\r\n                case 'ShiftR':\r\n                    keyEl.append(this._createFakeCildEl('Shift'))\r\n                    keyEl.classList.add('keyboard__key--wide')\r\n                    keyEl.addEventListener(\"click\", () => {\r\n                    });\r\n                break;\r\n\r\n                case 'Delete':\r\n                    keyEl.append(this._createFakeCildEl('Delete'));\r\n\r\n                    keyEl.addEventListener(\"click\", () => {\r\n\r\n                         if (this.elements.display.selectionEnd === this.props.value.length) { \r\n                            this.props.value = this.props.value.slice(0, this.props.value.length - 1);\r\n                            this.props.carret = null\r\n                        }\r\n                        else {\r\n                            let start = this.props.value.substring(0, this.elements.display.selectionEnd); \r\n                            let end = this.props.value.substring(this.elements.display.selectionEnd, this.props.value.length );\r\n                            this.props.value = start + end.slice(1, start.length);\r\n                            \r\n                            this.props.carret = this.props.value.length - end.length + 1;\r\n                        }\r\n                        this._onKeyClick();\r\n\r\n                    });\r\n                break;\r\n                \r\n                default:\r\n                    keyEl.textContent = currentLang[i];\r\n\r\n                    keyEl.addEventListener('click', () => {\r\n\r\n                        if (this.elements.display.selectionEnd === this.props.value.length) { \r\n                            this.props.value += this.props.capsLock ? currentLang[i].toUpperCase() : currentLang[i].toLowerCase();\r\n                            this.props.carret = null\r\n                        }\r\n                        else {\r\n                            let start = this.props.value.substring(0, this.elements.display.selectionEnd); \r\n                            let end = this.props.value.substring(this.elements.display.selectionEnd, this.props.value.length );\r\n                            this.props.value = this.props.capsLock ? (start + currentLang[i].toUpperCase() + end) : (start + currentLang[i].toLowerCase() + end) ;\r\n                            \r\n                            this.props.carret = this.props.value.length - end.length;\r\n                        }\r\n\r\n                        // this.props.value += this.props.capsLock ? currentLang[i].toUpperCase() : currentLang[i].toLowerCase();\r\n                        this._onKeyClick();\r\n                    })  \r\n            }\r\n\r\n            this.props.capsLock = false;\r\n            \r\n            fragment.append(keyEl);\r\n            \r\n            if (['\\\\', 'delete', 'Enter', 'ShiftR'].includes(currentLang[i])) {\r\n                fragment.append(document.createElement('br'));\r\n            }\r\n\r\n            this.props.lang = lang;\r\n            this.elements.langIndication.textContent = lang;\r\n\r\n        }\r\n        return fragment;\r\n    },\r\n    \r\n    _onKeyClick() {\r\n        this.elements.display.focus();\r\n\r\n        this.elements.display.value = this.props.value;\r\n\r\n        if(this.props.carret) {\r\n            this.elements.display.selectionEnd = this.props.carret\r\n        }\r\n        this.props.carret = null;\r\n    },\r\n\r\n    _updateKeysProp() {\r\n        this.elements.keys = this.elements.layout.querySelectorAll(\".keyboard__key\");\r\n    },\r\n\r\n    _createKeyIcon() {\r\n        const img = document.createElement('img');\r\n        img.classList.add('keyboard__icon');\r\n        return img;\r\n    },\r\n\r\n    _createFakeCildEl(inner) {\r\n        const el = document.createElement('span');\r\n        el.textContent = inner;\r\n        return el;\r\n    },\r\n\r\n\r\n    _toggleCapsLock() {\r\n\r\n        Keyboard.props.capsLock = !Keyboard.props.capsLock;\r\n\r\n        for (const key of this.elements.keys) {\r\n            if (key.childElementCount === 0) {\r\n\r\n                key.textContent = this.props.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();\r\n            }\r\n        }\r\n        \r\n        this.elements.layout.querySelector('[data-key=\"CapsLock\"]').classList.toggle(\"keyboard__key--active\", this.props.capsLock);\r\n\r\n    },\r\n\r\n    _changeLang(){\r\n\r\n        this.elements.layout.innerHTML = '';\r\n        let newLang;\r\n\r\n        switch(this.elements.langIndication.textContent) {\r\n            case 'EN': \r\n            newLang = this._createKeys('RU');\r\n            break;\r\n\r\n            case 'RU':\r\n            newLang = this._createKeys('EN');\r\n           break;\r\n        }\r\n\r\n        this.elements.keys = document.querySelectorAll('.keyboard__key');\r\n\r\n        this.elements.layout.append(newLang);\r\n\r\n        localStorage.setItem('lang', this.elements.langIndication.textContent);\r\n        \r\n        this._updateKeysProp();\r\n    },\r\n}\r\n\n\n//# sourceURL=webpack://keyboard/./src/assets/modules/keyboard.js?");

/***/ }),

/***/ "./src/assets/modules/textarea.js":
/*!****************************************!*\
  !*** ./src/assets/modules/textarea.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTextareaEl\": () => (/* binding */ createTextareaEl)\n/* harmony export */ });\nfunction createTextareaEl() {\r\n    const wrapper = document.createElement('div');\r\n    const textarea = document.createElement('textarea');\r\n    const label = document.createElement('label');\r\n    const disclamer = document.createElement('ul');\r\n    const infoOS = document.createElement('li');\r\n    const langChange = document.createElement('li');\r\n    const langChangeVirtual = document.createElement('li');\r\n\r\n    textarea.setAttribute('id', 'display');\r\n    textarea.setAttribute('name', 'display');\r\n    textarea.setAttribute('cols', '30');\r\n    textarea.setAttribute('rows', '10');\r\n\r\n    label.setAttribute('for', 'display');\r\n\r\n    wrapper.classList.add('container');\r\n\r\n    infoOS.textContent = 'Создана для Windows';\r\n    langChange.textContent = 'Переключение языка - левый Shift + левый Alt';\r\n    langChangeVirtual.textContent = 'Переключение виртуально - Alt';\r\n\r\n    disclamer.append(infoOS);\r\n    disclamer.append(langChange);\r\n    disclamer.append(langChangeVirtual);\r\n    label.append(disclamer);\r\n    wrapper.append(label);\r\n    wrapper.append(textarea);\r\n\r\n    return {\r\n        wrapper,\r\n        textarea,\r\n    }\r\n}\n\n//# sourceURL=webpack://keyboard/./src/assets/modules/textarea.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style/style.css */ \"./src/assets/style/style.css\");\n/* harmony import */ var _assets_modules_textarea_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/modules/textarea.js */ \"./src/assets/modules/textarea.js\");\n/* harmony import */ var _assets_modules_keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/modules/keyboard.js */ \"./src/assets/modules/keyboard.js\");\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n\r\n    const display = (0,_assets_modules_textarea_js__WEBPACK_IMPORTED_MODULE_1__.createTextareaEl)();\r\n   \r\n    document.body.append(display.wrapper);\r\n    \r\n    _assets_modules_keyboard_js__WEBPACK_IMPORTED_MODULE_2__.Keyboard.init(display.textarea);\r\n   \r\n});\n\n//# sourceURL=webpack://keyboard/./src/index.js?");

/***/ }),

/***/ "./src/assets/img/Alt.svg":
/*!********************************!*\
  !*** ./src/assets/img/Alt.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c6a9f0f4ff46e5485f09.svg\";\n\n//# sourceURL=webpack://keyboard/./src/assets/img/Alt.svg?");

/***/ }),

/***/ "./src/assets/img/ArrowDown.svg":
/*!**************************************!*\
  !*** ./src/assets/img/ArrowDown.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"081c4948b11ba547e1b3.svg\";\n\n//# sourceURL=webpack://keyboard/./src/assets/img/ArrowDown.svg?");

/***/ }),

/***/ "./src/assets/img/ArrowLeft.svg":
/*!**************************************!*\
  !*** ./src/assets/img/ArrowLeft.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3114dfabde80692cd4e9.svg\";\n\n//# sourceURL=webpack://keyboard/./src/assets/img/ArrowLeft.svg?");

/***/ }),

/***/ "./src/assets/img/ArrowRight.svg":
/*!***************************************!*\
  !*** ./src/assets/img/ArrowRight.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f5e7ed08ec22fac0c112.svg\";\n\n//# sourceURL=webpack://keyboard/./src/assets/img/ArrowRight.svg?");

/***/ }),

/***/ "./src/assets/img/ArrowUp.svg":
/*!************************************!*\
  !*** ./src/assets/img/ArrowUp.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"968661ea193dc637db92.svg\";\n\n//# sourceURL=webpack://keyboard/./src/assets/img/ArrowUp.svg?");

/***/ }),

/***/ "./src/assets/img/Backspace.svg":
/*!**************************************!*\
  !*** ./src/assets/img/Backspace.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb55d04019a1cdb95ecc.svg\";\n\n//# sourceURL=webpack://keyboard/./src/assets/img/Backspace.svg?");

/***/ }),

/***/ "./src/assets/img/CapsLock.svg":
/*!*************************************!*\
  !*** ./src/assets/img/CapsLock.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d3e8d0f5a0e1a193d8b.svg\";\n\n//# sourceURL=webpack://keyboard/./src/assets/img/CapsLock.svg?");

/***/ }),

/***/ "./src/assets/img/Enter.svg":
/*!**********************************!*\
  !*** ./src/assets/img/Enter.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e7d6de38c63a9de9ecc.svg\";\n\n//# sourceURL=webpack://keyboard/./src/assets/img/Enter.svg?");

/***/ }),

/***/ "./src/assets/img/Meta.svg":
/*!*********************************!*\
  !*** ./src/assets/img/Meta.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f499ac472e3b6523dd50.svg\";\n\n//# sourceURL=webpack://keyboard/./src/assets/img/Meta.svg?");

/***/ }),

/***/ "./src/assets/img/Space.svg":
/*!**********************************!*\
  !*** ./src/assets/img/Space.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e6268161facc06838a1.svg\";\n\n//# sourceURL=webpack://keyboard/./src/assets/img/Space.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;