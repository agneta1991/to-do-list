"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_10_todo_list"] = self["webpackChunk_10_todo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background: rgb(183, 183, 181);\n  background: linear-gradient(0deg, rgba(183, 183, 181, 1) 0%, rgba(255, 255, 255, 1) 100%);\n  font-size: 1rem;\n  font-family: Arial, Helvetica, sans-serif;\n  height: 100vh;\n}\n\n.todaysToDo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: darkslategray;\n  border: 0.5px solid lightgray;\n}\n\n.inputAdd {\n  border: 0.5px solid lightgray;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nh1 {\n  font-weight: 400;\n  margin: 0;\n  padding: 0.8rem;\n  font-size: 1.4rem;\n}\n\ni {\n  padding-right: 1rem;\n  color: lightslategray;\n}\n\n.material-symbols-outlined {\n  color: lightslategray;\n  padding-right: 1rem;\n  font-size: 1rem;\n}\n\n#container {\n  background-color: #fff;\n  margin: 5em;\n  box-shadow: 4px 2.5px 10px lightslategray;\n}\n\ninput {\n  outline: none;\n  border: none;\n  width: 100%;\n}\n\n.checkboxtick {\n  width: 5%;\n}\n\n#input {\n  width: 87%;\n  margin: 0;\n  padding: 0.8rem;\n  font-size: 1.2rem;\n  font-style: italic;\n  border: none;\n  outline: none;\n}\n\n#clearBtn {\n  width: 100%;\n  font-size: 1.2rem;\n  padding: 1rem;\n  color: lightslategray;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\n.list {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  list-style: none;\n  width: auto;\n  border: 0.5px solid lightgray;\n  padding: 0.8rem;\n  padding-right: 0;\n}\n\np {\n  margin: 0;\n  padding-left: 0.8rem;\n  width: 85%;\n}\n\n.completed {\n  color: grey;\n}\n\n.edit-field {\n  font-size: 1.2rem;\n  color: rgb(99, 97, 97);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://10.-todo_list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://10.-todo_list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://10.-todo_list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://10.-todo_list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://10.-todo_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://10.-todo_list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://10.-todo_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://10.-todo_list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://10.-todo_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://10.-todo_list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_addtask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addtask.js */ \"./src/modules/addtask.js\");\n/* harmony import */ var _modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/localstorage.js */ \"./src/modules/localstorage.js\");\n/* harmony import */ var _modules_clearfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/clearfunction */ \"./src/modules/clearfunction.js\");\n\n\n\n\n\nlet tasks = (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.loadTasksFromStorage)();\n\nconst taskList = document.getElementById('taskList');\nconst taskInput = document.getElementById('input');\n\nfunction addTasks() {\n  taskList.innerHTML = '';\n  tasks.forEach((task) => {\n    (0,_modules_addtask_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(task, taskList, tasks);\n  });\n}\n\ntaskInput.addEventListener('keyup', (event) => {\n  if (event.key === 'Enter') {\n    event.preventDefault();\n    const description = taskInput.value.trim();\n\n    if (description !== '') {\n      const newTask = {\n        description,\n        completed: false,\n        index: tasks.length,\n      };\n\n      tasks.push(newTask);\n      taskInput.value = '';\n      (0,_modules_addtask_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(newTask, taskList, tasks);\n\n      (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.saveTasksToStorage)(tasks);\n    }\n  }\n});\n\nconst btn = document.getElementById('clearBtn');\nbtn.addEventListener('click', (e) => {\n  (0,_modules_clearfunction__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(tasks)});\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  tasks = (0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__.loadTasksFromStorage)();\n  addTasks();\n});\n\n\n//# sourceURL=webpack://10.-todo_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/addtask.js":
/*!********************************!*\
  !*** ./src/modules/addtask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   returnTask: () => (/* reexport safe */ _returnTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   updateLocalStorage: () => (/* reexport safe */ _localstorage_js__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage),\n/* harmony export */   updateTaskIndices: () => (/* reexport safe */ _localstorage_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskIndices)\n/* harmony export */ });\n/* harmony import */ var _completingTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completingTask.js */ \"./src/modules/completingTask.js\");\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.js */ \"./src/modules/localstorage.js\");\n/* harmony import */ var _edittask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edittask.js */ \"./src/modules/edittask.js\");\n/* harmony import */ var _returnTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./returnTask.js */ \"./src/modules/returnTask.js\");\n\n\n\n\n\nlet taskIdCounter = 0;\n\nfunction addTask(task, taskList, tasks) {\n  const listItem = document.createElement('li');\n  listItem.style.textDecoration = task.completed ? 'line-through' : 'none';\n  listItem.className = 'list';\n  listItem.id = `task-${taskIdCounter}`;\n  taskIdCounter += 1;\n  taskList.appendChild(listItem);\n\n  const checkbox = document.createElement('input');\n  checkbox.type = 'checkbox';\n  checkbox.className = 'checkboxtick';\n  checkbox.checked = task.completed;\n  checkbox.addEventListener('change', (event) => {\n    task = (0,_returnTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(tasks, event);\n    (0,_completingTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(event, tasks, task);\n  });\n  listItem.appendChild(checkbox);\n\n  const p = document.createElement('p');\n  p.innerHTML = task.description;\n  p.className = 'content';\n  listItem.appendChild(p);\n\n  const icon = document.createElement('i');\n  icon.className = 'fa-solid fa-ellipsis-vertical';\n  listItem.appendChild(icon);\n\n  icon.addEventListener('click', (e) => {\n    (0,_edittask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(icon, e, tasks, listItem);\n  });\n}\n\n\n\n\n//# sourceURL=webpack://10.-todo_list/./src/modules/addtask.js?");

/***/ }),

/***/ "./src/modules/clearfunction.js":
/*!**************************************!*\
  !*** ./src/modules/clearfunction.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ \"./src/modules/localstorage.js\");\n\n\nfunction clearFunction(tasks) {\n    const individualTasks = tasks.filter((task) => task.completed === true);\n    const indexes = individualTasks.map((task) => task.index);\n    indexes.reverse().forEach((indexToDelete) => {\n      tasks.splice(indexToDelete, 1);\n    });\n    (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.updateTaskIndices)(tasks);\n    (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);\n  \n    individualTasks.forEach((task) => {\n      const taskElement = document.getElementById(`task-${task.index}`);\n      if (taskElement) {\n        taskElement.remove();\n      }\n    });\n  }\n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearFunction);\n\n//# sourceURL=webpack://10.-todo_list/./src/modules/clearfunction.js?");

/***/ }),

/***/ "./src/modules/completingTask.js":
/*!***************************************!*\
  !*** ./src/modules/completingTask.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.js */ \"./src/modules/localstorage.js\");\n\n\nfunction completionFunction(checkbox, tasks, task) {\n  task.completed = !task.completed;\n  if (task.completed) {\n    checkbox.target.parentElement.style.textDecoration = 'line-through';\n  } else {\n    checkbox.target.parentElement.style.textDecoration = 'none';\n  }\n  (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completionFunction);\n\n\n//# sourceURL=webpack://10.-todo_list/./src/modules/completingTask.js?");

/***/ }),

/***/ "./src/modules/deletetask.js":
/*!***********************************!*\
  !*** ./src/modules/deletetask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.js */ \"./src/modules/localstorage.js\");\n\n\nfunction deleteTask(listItem, tasks) {\n  const taskList = listItem.parentNode;\n  const taskIndex = Array.from(taskList.children).indexOf(listItem);\n  taskList.removeChild(listItem);\n\n  tasks.splice(taskIndex, 1);\n\n  (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskIndices)(tasks);\n  (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);\n\n//# sourceURL=webpack://10.-todo_list/./src/modules/deletetask.js?");

/***/ }),

/***/ "./src/modules/edittask.js":
/*!*********************************!*\
  !*** ./src/modules/edittask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.js */ \"./src/modules/localstorage.js\");\n/* harmony import */ var _deletetask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deletetask.js */ \"./src/modules/deletetask.js\");\n/* harmony import */ var _returnTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./returnTask.js */ \"./src/modules/returnTask.js\");\n\n\n\n\nfunction editFunction(icon, e, tasks, listItem) {\n  const isEditMode = listItem.classList.contains('edit-mode');\n\n  if (!isEditMode) {\n    icon.className = 'fa-solid fa-trash-can';\n    listItem.classList.add('edit-mode');\n\n    const content = listItem.querySelector('.content');\n\n    if (!content) return;\n\n    const inputField = document.createElement('input');\n    inputField.type = 'text';\n    inputField.value = content.innerHTML;\n    inputField.className = 'edit-field';\n    inputField.style.backgroundColor = 'lightyellow';\n    listItem.style.backgroundColor = 'lightyellow';\n\n    listItem.replaceChild(inputField, content);\n    (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskIndices)(tasks);\n\n    inputField.addEventListener('blur', (event) => {\n      const task = (0,_returnTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(tasks, event);\n      task.description = inputField.value;\n      content.innerHTML = inputField.value;\n      listItem.replaceChild(content, inputField);\n      listItem.style.backgroundColor = 'white';\n      icon.className = 'fa-solid fa-ellipsis-vertical';\n      (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);\n      listItem.classList.remove('edit-mode');\n    });\n  } else {\n    (0,_deletetask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(listItem, tasks);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editFunction);\n\n\n//# sourceURL=webpack://10.-todo_list/./src/modules/edittask.js?");

/***/ }),

/***/ "./src/modules/localstorage.js":
/*!*************************************!*\
  !*** ./src/modules/localstorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadTasksFromStorage: () => (/* binding */ loadTasksFromStorage),\n/* harmony export */   saveTasksToStorage: () => (/* binding */ saveTasksToStorage),\n/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage),\n/* harmony export */   updateTaskIndices: () => (/* binding */ updateTaskIndices)\n/* harmony export */ });\nconst saveTasksToStorage = (tasks) => {\n  window.localStorage.setItem('tasks', JSON.stringify(tasks));\n};\n\nconst loadTasksFromStorage = () => {\n  const storedTasks = window.localStorage.getItem('tasks');\n  return storedTasks ? JSON.parse(storedTasks) : [];\n};\n\nfunction updateLocalStorage(tasks) {\n  localStorage.clear();\n  window.localStorage.setItem('tasks', JSON.stringify(tasks));\n}\n\nfunction updateTaskIndices(tasks) {\n  tasks = loadTasksFromStorage();\n  tasks.forEach((task, index) => {\n    task.index = index;\n  });\n}\n\n\n\n\n//# sourceURL=webpack://10.-todo_list/./src/modules/localstorage.js?");

/***/ }),

/***/ "./src/modules/returnTask.js":
/*!***********************************!*\
  !*** ./src/modules/returnTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction returnTask(tasks, event) {\n  const listItem = event.target.parentNode;\n  const taskList = listItem.parentNode;\n  const taskIndex = Array.from(taskList.children).indexOf(listItem);\n  return tasks[taskIndex];\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (returnTask);\n\n//# sourceURL=webpack://10.-todo_list/./src/modules/returnTask.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);