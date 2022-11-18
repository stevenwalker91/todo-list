/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-background: linear-gradient(to right, #7600ff , #ff0069e0);\n    --error-color-primary: rgb(190, 35, 35);\n    --primary-color: #fc3780;\n}\n\nbody {\n    margin: 0;\n    min-height: 100vh;\n}\n\n#app-container {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    grid-template-rows: 130px 1fr;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    min-height: 100vh;\n}\n\n#sidebar{\n    background-color: #eeeeee;\n    min-height: 100%;\n    grid-row:2/3;\n    box-shadow: 2px 1px 6px 0px rgb(0 0 0 / 25%);\n}\n\n#header {\n    background-image: var(--primary-background);\n    width: 100%;\n    grid-column: 1/3;\n    box-shadow: 1px 1px 6px 0px rgb(0 0 0 / 25%);\n}\n\nul{\n    padding-left: 0;\n}\n\nli {\n    list-style: none;\n    padding: 15px 40px;\n    cursor: pointer;\n    font-weight: lighter;\n}\n\nli:hover {\n    background-color: #b3b2b2;\n}\n\n.menu-items {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding-left: 40px;\n\n}\n\n.sub-item {\n    padding-left: 90px;\n}\n\n.pull-right {\n    margin-left: auto;\n}\n\n.active {\n    background-image: var(--primary-background);\n    color: white;\n}\n\nhr {\n    border: 0;\n    height: 1px;\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));\n}\n\n.modal {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.6);\n    display: none;\n    justify-content: center;\n    align-items: center;\n    left: 0;\n    top: 0;\n    z-index: 1;\n}\n\n.modal-content{\n    display: flex;\n    max-width: 700px;\n    background-color: white;\n    border-radius: 5px;\n    gap: 5px;\n    box-shadow: 1px 1px 6px 0px rgb(0 0 0 / 25%);\n}\n\nform {\n    display: flex;\n    flex-flow: row wrap;\n    gap: 3vw;\n    padding: 50px 10px;\n    align-items: center;\n    margin-left: auto;\n    width: 75%;\n}\n\nlabel {\n    text-transform: uppercase;\n    font-size: 11px;\n    font-weight: bolder;\n    letter-spacing: 1px;\n    margin-bottom: 2px;\n}\n\n#task-submission>.input-group>input, textarea, select {\n    width: 200px;\n    border: none;\n    border-bottom: 1px solid #bcb9b9;\n    resize: none;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\ntextarea {\n    border: 1px solid #bcb9b9;\n    border-radius: 5px;\n}\n\n\ninput:invalid:not(:placeholder-shown) {\n  border-bottom:1px solid var(--error-color-primary);\n}\n\ninput:focus {\n  border-color: var(--primary-color);\n  outline: 0;\n}\n\ninput:required+label:after{\n    content: \" *\";\n    color: var(--error-color-primary);\n\n}\n\n.input-group {\n    display: flex;\n    flex-flow: column-reverse nowrap;\n}\n\n.btn-group {\n    display: flex;\n    gap: 30px;\n}\n\n\n.close {\n    color: #aaaaaa;\n    font-size: 28px;\n    font-weight: bold;\n    padding-top: 10px;\n    padding-right: 10px;\n    cursor: pointer;\n    margin-left: auto;\n}\n\n#main-inner-container {\n    padding: 40px;\n    font-size: 14px;\n}\n\n.header-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#tasks-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-top: 20px;\n}\n\n.task {\n    border: 1px solid gray;\n    border-radius: 5px;\n    padding:10px;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    border-left: 6px solid gray;\n}\n\n.priority {\n    border-left: 6px solid red;\n}\n\n.low-priority {\n    border-left: 6px solid green;\n}\n\n.task-title {\n    display: flex;\n    gap: 10px;\n}\n\n.task-controls {\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n\n}\n\nbutton {\n    border-radius: 4px;\n    padding: 5px 20px;\n    border: 2px solid var(--primary-color);\n    font-weight: bold;\n}\n\n.btn:hover {\n    cursor: pointer;\n    box-shadow: 1px 1px 6px 0px rgb(0 0 0 / 25%);\n}\n\n\nbutton.primary {\n    color: white;\n    background-color: var(--primary-color);\n    border: none;\n    border: 2px solid var(--primary-color);\n}\n\nbutton.secondary {\n    color: var(--primary-color);\n    background-color: white;\n    \n}\n\n.icon-btn:hover, input[type=\"checkbox\"] {\n    color: var(--primary-color);\n    cursor: pointer;\n\n    \n}\n\n.task:hover {\n    box-shadow: 1px 1px 6px 0px rgb(0 0 0 / 25%);\n}\n\n.due-date {\n    font-size: 12px;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oEAAoE;IACpE,uCAAuC;IACvC,wBAAwB;AAC5B;;AAEA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,6BAA6B;IAC7B,4DAA4D;IAC5D,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,4CAA4C;AAChD;;AAEA;IACI,2CAA2C;IAC3C,WAAW;IACX,gBAAgB;IAChB,4CAA4C;AAChD;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,kBAAkB;;AAEtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,2CAA2C;IAC3C,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,WAAW;IACX,mGAAmG;AACvG;;AAEA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,OAAO;IACP,MAAM;IACN,UAAU;AACd;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;IAClB,QAAQ;IACR,4CAA4C;AAChD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gCAAgC;IAChC,YAAY;IACZ,2DAA2D;AAC/D;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;;AAGA;EACE,kDAAkD;AACpD;;AAEA;EACE,kCAAkC;EAClC,UAAU;AACZ;;AAEA;IACI,aAAa;IACb,iCAAiC;;AAErC;;AAEA;IACI,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;;AAGA;IACI,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,SAAS;;AAEb;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,sCAAsC;IACtC,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,4CAA4C;AAChD;;;AAGA;IACI,YAAY;IACZ,sCAAsC;IACtC,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,2BAA2B;IAC3B,uBAAuB;;AAE3B;;AAEA;IACI,2BAA2B;IAC3B,eAAe;;;AAGnB;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,eAAe;AACnB","sourcesContent":[":root {\n    --primary-background: linear-gradient(to right, #7600ff , #ff0069e0);\n    --error-color-primary: rgb(190, 35, 35);\n    --primary-color: #fc3780;\n}\n\nbody {\n    margin: 0;\n    min-height: 100vh;\n}\n\n#app-container {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    grid-template-rows: 130px 1fr;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    min-height: 100vh;\n}\n\n#sidebar{\n    background-color: #eeeeee;\n    min-height: 100%;\n    grid-row:2/3;\n    box-shadow: 2px 1px 6px 0px rgb(0 0 0 / 25%);\n}\n\n#header {\n    background-image: var(--primary-background);\n    width: 100%;\n    grid-column: 1/3;\n    box-shadow: 1px 1px 6px 0px rgb(0 0 0 / 25%);\n}\n\nul{\n    padding-left: 0;\n}\n\nli {\n    list-style: none;\n    padding: 15px 40px;\n    cursor: pointer;\n    font-weight: lighter;\n}\n\nli:hover {\n    background-color: #b3b2b2;\n}\n\n.menu-items {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding-left: 40px;\n\n}\n\n.sub-item {\n    padding-left: 90px;\n}\n\n.pull-right {\n    margin-left: auto;\n}\n\n.active {\n    background-image: var(--primary-background);\n    color: white;\n}\n\nhr {\n    border: 0;\n    height: 1px;\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));\n}\n\n.modal {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.6);\n    display: none;\n    justify-content: center;\n    align-items: center;\n    left: 0;\n    top: 0;\n    z-index: 1;\n}\n\n.modal-content{\n    display: flex;\n    max-width: 700px;\n    background-color: white;\n    border-radius: 5px;\n    gap: 5px;\n    box-shadow: 1px 1px 6px 0px rgb(0 0 0 / 25%);\n}\n\nform {\n    display: flex;\n    flex-flow: row wrap;\n    gap: 3vw;\n    padding: 50px 10px;\n    align-items: center;\n    margin-left: auto;\n    width: 75%;\n}\n\nlabel {\n    text-transform: uppercase;\n    font-size: 11px;\n    font-weight: bolder;\n    letter-spacing: 1px;\n    margin-bottom: 2px;\n}\n\n#task-submission>.input-group>input, textarea, select {\n    width: 200px;\n    border: none;\n    border-bottom: 1px solid #bcb9b9;\n    resize: none;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\ntextarea {\n    border: 1px solid #bcb9b9;\n    border-radius: 5px;\n}\n\n\ninput:invalid:not(:placeholder-shown) {\n  border-bottom:1px solid var(--error-color-primary);\n}\n\ninput:focus {\n  border-color: var(--primary-color);\n  outline: 0;\n}\n\ninput:required+label:after{\n    content: \" *\";\n    color: var(--error-color-primary);\n\n}\n\n.input-group {\n    display: flex;\n    flex-flow: column-reverse nowrap;\n}\n\n.btn-group {\n    display: flex;\n    gap: 30px;\n}\n\n\n.close {\n    color: #aaaaaa;\n    font-size: 28px;\n    font-weight: bold;\n    padding-top: 10px;\n    padding-right: 10px;\n    cursor: pointer;\n    margin-left: auto;\n}\n\n#main-inner-container {\n    padding: 40px;\n    font-size: 14px;\n}\n\n.header-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#tasks-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-top: 20px;\n}\n\n.task {\n    border: 1px solid gray;\n    border-radius: 5px;\n    padding:10px;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    border-left: 6px solid gray;\n}\n\n.priority {\n    border-left: 6px solid red;\n}\n\n.low-priority {\n    border-left: 6px solid green;\n}\n\n.task-title {\n    display: flex;\n    gap: 10px;\n}\n\n.task-controls {\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n\n}\n\nbutton {\n    border-radius: 4px;\n    padding: 5px 20px;\n    border: 2px solid var(--primary-color);\n    font-weight: bold;\n}\n\n.btn:hover {\n    cursor: pointer;\n    box-shadow: 1px 1px 6px 0px rgb(0 0 0 / 25%);\n}\n\n\nbutton.primary {\n    color: white;\n    background-color: var(--primary-color);\n    border: none;\n    border: 2px solid var(--primary-color);\n}\n\nbutton.secondary {\n    color: var(--primary-color);\n    background-color: white;\n    \n}\n\n.icon-btn:hover, input[type=\"checkbox\"] {\n    color: var(--primary-color);\n    cursor: pointer;\n\n    \n}\n\n.task:hover {\n    box-shadow: 1px 1px 6px 0px rgb(0 0 0 / 25%);\n}\n\n.due-date {\n    font-size: 12px;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFormType": () => (/* binding */ addFormType),
/* harmony export */   "addProjectsToTaskForm": () => (/* binding */ addProjectsToTaskForm),
/* harmony export */   "clearModal": () => (/* binding */ clearModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "displayModal": () => (/* binding */ displayModal),
/* harmony export */   "getFormInputs": () => (/* binding */ getFormInputs),
/* harmony export */   "loadExistingTaskInForm": () => (/* binding */ loadExistingTaskInForm),
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects),
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks),
/* harmony export */   "updateActiveMenuItem": () => (/* binding */ updateActiveMenuItem),
/* harmony export */   "updateCurrentView": () => (/* binding */ updateCurrentView)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");



//we'll maintain a variable that shows the current view so we can retrieve
//the relevant tasks
let currentView = 'inbox';

//some global variables that will be used by multiple functions
const modal = document.getElementById('taskModal');
const form = document.getElementById('task-submission');
const formElements = form.querySelectorAll('input, select, textarea');


const displayModal = () => {
    modal.style.display = 'flex';
}

const closeModal = () => {
    modal.style.display = 'none';
}

//clear down the modal forms for if its submitted or user explicitly cancels
const clearModal = () => {
    formElements.forEach(element => {
        element.value = '';
    })
}

const addProjectsToTaskForm = () => {
    const projectDropdown = document.getElementById('task-project');
    const listOfProjects = _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectList;
    let elements = [];
    //add a blank value to the list so user doesn't have to select a project
    const blankElement = document.createElement("option");
    elements.push(blankElement);

    //iterate over the list of projects adding each as an option for the dropdown
    listOfProjects.forEach(project => {
        const element = document.createElement("option");
        element.value = project.id;
        element.innerText = project.title;
        elements.push(element);
    })

    //replaceChildren function will remove any options already there and add all from fresh
    //removes the need to compare what's there to prevent duplication
    projectDropdown.replaceChildren(...elements);
}

//iterate through the elements in the form and add values to an array which is returned
const getFormInputs = () => {
    let formInputs = [];
    formElements.forEach(element => formInputs.push(element.value));
    return formInputs;
}

//add data attribute to form to determine whether it's editing or creating a new task
const addFormType = (updateType) => {
    form.dataset.formtype = updateType;
}

//function to load tasks to the UI
const loadTasks = (project) => {
    const taskContainer = document.getElementById('tasks-container');
    const listOfTasks = _tasks_js__WEBPACK_IMPORTED_MODULE_1__.getTasks(currentView, project);

    let elements = [];

    //build up the html
    listOfTasks.forEach(task => {
        //take title
        const taskElement = document.createElement('div');
        taskElement.classList = 'task';
        if (task.priority === 'high') {
            taskElement.classList += ' priority'
        }
        if (task.priority === 'low') {
            taskElement.classList += ' low-priority'
        }

        const taskTitle = document.createElement('div');
        taskTitle.classList = 'task-title';
        taskElement.appendChild(taskTitle);

        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox';
        taskTitle.appendChild(checkBox);

        const title = document.createElement('span');
        title.innerText = task.title;
        taskTitle.appendChild(title);

        //task controls 

        const controlsContainer = document.createElement('div');
        controlsContainer.classList = 'task-controls';
        taskElement.appendChild(controlsContainer);

        const dateContainer = document.createElement('span');
        dateContainer.classList = 'due-date';
        dateContainer.innerText = task.dueDate;
        controlsContainer.appendChild(dateContainer);


        const infoBtn = document.createElement('span');
        infoBtn.classList = 'material-symbols-outlined icon-btn task-info';
        infoBtn.innerHTML = 'info';
        infoBtn.dataset.itemid = task.id;
        controlsContainer.appendChild(infoBtn);

        const editBtn = document.createElement('span');
        editBtn.classList = 'material-symbols-outlined icon-btn edit-task';
        editBtn.innerText = 'edit_note';
        editBtn.dataset.itemid = task.id;
        controlsContainer.appendChild(editBtn);

        editBtn.addEventListener('click', (event) => {
            addFormType('edit');
            addProjectsToTaskForm();
            loadExistingTaskInForm(event.target.dataset.itemid);
            displayModal();
        })

        const deleteBtn = document.createElement('span');
        deleteBtn.classList = 'material-symbols-outlined icon-btn delete-task';
        deleteBtn.innerHTML = 'delete';
        deleteBtn.dataset.itemid = task.id;
        controlsContainer.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', (event) => {
            if (confirm(`Are you sure you want to delete this task? \n\n ${task.title}`)) {
                _tasks_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask(event.target.dataset.itemid);
                loadTasks();
            }

        })

        elements.push(taskElement);
    })

    taskContainer.replaceChildren(...elements);
}


const updateCurrentView = (view) => {
    currentView = view;

}

const updateActiveMenuItem = (newActiveMenuItem) => {
    const oldActiveMenuItem = document.querySelector('.active');
    oldActiveMenuItem.classList.toggle('active');
    newActiveMenuItem.classList.toggle('active');
}

const loadProjects = () => {
    const listOfProjects = _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectList;
    const projectList = document.getElementById('project-list');
    let elements = [];

    listOfProjects.forEach(project => {
        const newProject = document.createElement('li');
        newProject.classList.add('sub-item', 'primary-menu-items');
        newProject.innerText = project.title;
        newProject.dataset.projectid = project.id;
        newProject.dataset.display = 'project';
        elements.push(newProject);
    })

    projectList.replaceChildren(...elements);

}

const loadExistingTaskInForm = (id) => {
    
    const taskToUpdate = _tasks_js__WEBPACK_IMPORTED_MODULE_1__.getSingleTask(id);

    const title = document.getElementById('task-title');
    const dueDate = document.getElementById('task-due-date');
    const priority = document.getElementById('priority');
    const project = document.getElementById('task-project');
    const description = document.getElementById('task-description');
    const saveBtn = document.getElementById('create-task');

    title.value = taskToUpdate.title;
    dueDate.value = taskToUpdate.dueDate;
    priority.value = taskToUpdate.priority;
    project.value = taskToUpdate.project;
    description.value = taskToUpdate.description;
    saveBtn.dataset.itemid = id;

}




/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");



window.addEventListener('load', () => {
    _display_js__WEBPACK_IMPORTED_MODULE_0__.loadProjects();

    const primaryMenuItems = document.querySelectorAll('.primary-menu-items');
    primaryMenuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            _display_js__WEBPACK_IMPORTED_MODULE_0__.updateCurrentView(event.target.dataset.display);
            //check if clicked item has a project ID, in which case pass it to the load tasks function
            if (event.target.dataset.projectid){
                _display_js__WEBPACK_IMPORTED_MODULE_0__.loadTasks(event.target.dataset.projectid);
            } else {
                _display_js__WEBPACK_IMPORTED_MODULE_0__.loadTasks();
            }

            _display_js__WEBPACK_IMPORTED_MODULE_0__.updateActiveMenuItem(item);
        })
    })
})

//first add any keyboard shortcuts we want to use across the UI
document.addEventListener('keydown',  (event) => {
    const enteredChar = event.key;

    //if the user is typing in an input field, stop the function
    if (event.target.tagName == "INPUT" && enteredChar != 'Escape') {
        return;
    }
    switch(enteredChar) {
        case 'Escape':
            _display_js__WEBPACK_IMPORTED_MODULE_0__.closeModal();
            break;
        case 'n':
            _display_js__WEBPACK_IMPORTED_MODULE_0__.displayModal();
            break;
        case '+':
            _display_js__WEBPACK_IMPORTED_MODULE_0__.displayModal();
            break;

    }
});

//listen for users clicking to add a new task and present them the modal
const newTaskBtn = document.getElementById('new-task');
newTaskBtn.addEventListener('click', () => {
    _display_js__WEBPACK_IMPORTED_MODULE_0__.addFormType('new');
    _display_js__WEBPACK_IMPORTED_MODULE_0__.addProjectsToTaskForm();
    _display_js__WEBPACK_IMPORTED_MODULE_0__.displayModal();
})



//listen for users closing the modal (they can also use keyboard shortcut)
const closeModalBtn = document.getElementById('closeModal');
closeModalBtn.addEventListener('click', _display_js__WEBPACK_IMPORTED_MODULE_0__.closeModal)

const cancelBtn = document.getElementById('cancel-task');
cancelBtn.addEventListener('click', () => {
    _display_js__WEBPACK_IMPORTED_MODULE_0__.closeModal();
    _display_js__WEBPACK_IMPORTED_MODULE_0__.clearModal();
})


//process new task submission ans reload the UI with tasks
const form = document.getElementById('task-submission');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formInputs = _display_js__WEBPACK_IMPORTED_MODULE_0__.getFormInputs();
    
    if (form.dataset.formtype === 'new') {
        //spread operator means i can just through all the inputs in a oner
        _tasks_js__WEBPACK_IMPORTED_MODULE_1__.newTask(...formInputs);
    } else if (form.dataset.formtype === 'edit') {
        //add the id into the form inputs
        const id = document.getElementById('create-task').dataset.itemid;
        formInputs.unshift(id);
        _tasks_js__WEBPACK_IMPORTED_MODULE_1__.editTask(...formInputs);
    }

    _display_js__WEBPACK_IMPORTED_MODULE_0__.loadTasks();

    //now clear down the form
    _display_js__WEBPACK_IMPORTED_MODULE_0__.closeModal();
    _display_js__WEBPACK_IMPORTED_MODULE_0__.clearModal();
})

//edit, delete and info add event listener is done in display.js when the ui component is created




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "editProject": () => (/* binding */ editProject),
/* harmony export */   "newProject": () => (/* binding */ newProject),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


let projectList = [];

const Project = (title, description, type) => {
    const id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
    return {id, title, description, type}
}


const newProject = (title, description, type) => {
    //first check to see if any other projects already exist with name provided and error if so
    const projectsWithTitle = projectList.filter(project => project.title === title);
    if (projectsWithTitle.length !== 0 ) {
        console.log('error this is a duplicate');
        return;
    }

    const newProject = Project(title, description, type);
    projectList.push(newProject);
}

const editProject = (id, title, description, type) => {
    const index = projectList.findIndex(project => project.id == id);
    projectList[index].title = title;
    projectList[index].description = description;
    projectList[index].type = type;
}

const deleteProject = (id) => {
    const index = projectList.findIndex(project => project.id === id);
    projectList.splice(index, 1);
}





/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "getSingleTask": () => (/* binding */ getSingleTask),
/* harmony export */   "getTasks": () => (/* binding */ getTasks),
/* harmony export */   "newTask": () => (/* binding */ newTask),
/* harmony export */   "tasksList": () => (/* binding */ tasksList)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


let tasksList = [];

//factory function for creating neew tasks
const Task = (title, description, dueDate, priority, project) => {
    const id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const completed = false;
    return {id, title, description, dueDate, priority, project, completed};
}

//function to call factory to create the tasks
const newTask = (title, dueDate, priority, project, description) => {
    const newTask = Task(title, description, dueDate, priority, project);
    tasksList.push(newTask);
}

const editTask = (id, title, dueDate, priority, project, description) => {
    const index = tasksList.findIndex(task => task.id == id);
    tasksList[index].title = title;
    tasksList[index].description = description;
    tasksList[index].dueDate = dueDate;
    tasksList[index].priority = priority;
    tasksList[index].project = project;

}

const deleteTask = (id) => {
    const index = tasksList.findIndex(task => task.id == id);
    tasksList.splice(index, 1);
}

//function to retrieve tasks which takes a filter - defaults on all tasks if filter not provided
//accepted values are "today" or "project" - when providing project the actual project id should also be provided
const getTasks = (filter, project) => {

    if (filter === 'today') {
        //logic dependent on how dates will be handled - filter statement will need to be updated to look at date
        return tasksList.filter(task => task.title == 'do other stuff');
    } 

    if (filter === 'project') {
        return tasksList.filter(task => task.project === project);
    }

    if (filter === 'important') {
        return tasksList.filter(task => task.priority === 'high');
    }

    return tasksList;
}

const getSingleTask = (id) => {
    const taskToReturn = tasksList.filter(task => task.id === id);
    return taskToReturn[0];
}



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners.js */ "./src/listeners.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display.js */ "./src/display.js");








//stuff below for testing functions
_tasks_js__WEBPACK_IMPORTED_MODULE_1__.newTask('do stuff', '2022-11-03T16:21', 'high', 'High', 'default');
_tasks_js__WEBPACK_IMPORTED_MODULE_1__.newTask('do other stuff', '2022-11-03T16:21', 'low', 'high', 'default');
_tasks_js__WEBPACK_IMPORTED_MODULE_1__.newTask('it\'s my birthday, bake a cake', '2022-11-03T16:21', 'medium', 'high', 'default');


_projects_js__WEBPACK_IMPORTED_MODULE_0__.newProject('Project 1', 'other stuff', 'default')
_projects_js__WEBPACK_IMPORTED_MODULE_0__.newProject('Project 2', 'other stuff', 'default')


_display_js__WEBPACK_IMPORTED_MODULE_4__.loadTasks();
//display.loadProjects();

//displayModal();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELDJFQUEyRSw4Q0FBOEMsK0JBQStCLEdBQUcsVUFBVSxnQkFBZ0Isd0JBQXdCLEdBQUcsb0JBQW9CLG9CQUFvQix1Q0FBdUMsb0NBQW9DLG1FQUFtRSx3QkFBd0IsR0FBRyxhQUFhLGdDQUFnQyx1QkFBdUIsbUJBQW1CLG1EQUFtRCxHQUFHLGFBQWEsa0RBQWtELGtCQUFrQix1QkFBdUIsbURBQW1ELEdBQUcsT0FBTyxzQkFBc0IsR0FBRyxRQUFRLHVCQUF1Qix5QkFBeUIsc0JBQXNCLDJCQUEyQixHQUFHLGNBQWMsZ0NBQWdDLEdBQUcsaUJBQWlCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLHlCQUF5QixLQUFLLGVBQWUseUJBQXlCLEdBQUcsaUJBQWlCLHdCQUF3QixHQUFHLGFBQWEsa0RBQWtELG1CQUFtQixHQUFHLFFBQVEsZ0JBQWdCLGtCQUFrQiwwR0FBMEcsR0FBRyxZQUFZLHNCQUFzQixrQkFBa0IsbUJBQW1CLHdDQUF3QyxvQkFBb0IsOEJBQThCLDBCQUEwQixjQUFjLGFBQWEsaUJBQWlCLEdBQUcsbUJBQW1CLG9CQUFvQix1QkFBdUIsOEJBQThCLHlCQUF5QixlQUFlLG1EQUFtRCxHQUFHLFVBQVUsb0JBQW9CLDBCQUEwQixlQUFlLHlCQUF5QiwwQkFBMEIsd0JBQXdCLGlCQUFpQixHQUFHLFdBQVcsZ0NBQWdDLHNCQUFzQiwwQkFBMEIsMEJBQTBCLHlCQUF5QixHQUFHLDJEQUEyRCxtQkFBbUIsbUJBQW1CLHVDQUF1QyxtQkFBbUIsa0VBQWtFLEdBQUcsY0FBYyxnQ0FBZ0MseUJBQXlCLEdBQUcsNkNBQTZDLHVEQUF1RCxHQUFHLGlCQUFpQix1Q0FBdUMsZUFBZSxHQUFHLCtCQUErQixzQkFBc0Isd0NBQXdDLEtBQUssa0JBQWtCLG9CQUFvQix1Q0FBdUMsR0FBRyxnQkFBZ0Isb0JBQW9CLGdCQUFnQixHQUFHLGNBQWMscUJBQXFCLHNCQUFzQix3QkFBd0Isd0JBQXdCLDBCQUEwQixzQkFBc0Isd0JBQXdCLEdBQUcsMkJBQTJCLG9CQUFvQixzQkFBc0IsR0FBRyx1QkFBdUIsb0JBQW9CLHFDQUFxQywwQkFBMEIsR0FBRyxzQkFBc0Isb0JBQW9CLDZCQUE2QixnQkFBZ0Isd0JBQXdCLEdBQUcsV0FBVyw2QkFBNkIseUJBQXlCLG1CQUFtQixvQkFBb0IsMEJBQTBCLGdCQUFnQixrQ0FBa0MsR0FBRyxlQUFlLGlDQUFpQyxHQUFHLG1CQUFtQixtQ0FBbUMsR0FBRyxpQkFBaUIsb0JBQW9CLGdCQUFnQixHQUFHLG9CQUFvQix3QkFBd0Isb0JBQW9CLDBCQUEwQixnQkFBZ0IsS0FBSyxZQUFZLHlCQUF5Qix3QkFBd0IsNkNBQTZDLHdCQUF3QixHQUFHLGdCQUFnQixzQkFBc0IsbURBQW1ELEdBQUcsc0JBQXNCLG1CQUFtQiw2Q0FBNkMsbUJBQW1CLDZDQUE2QyxHQUFHLHNCQUFzQixrQ0FBa0MsOEJBQThCLFNBQVMsK0NBQStDLGtDQUFrQyxzQkFBc0IsV0FBVyxpQkFBaUIsbURBQW1ELEdBQUcsZUFBZSxzQkFBc0IsR0FBRyxhQUFhLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxpQ0FBaUMsMkVBQTJFLDhDQUE4QywrQkFBK0IsR0FBRyxVQUFVLGdCQUFnQix3QkFBd0IsR0FBRyxvQkFBb0Isb0JBQW9CLHVDQUF1QyxvQ0FBb0MsbUVBQW1FLHdCQUF3QixHQUFHLGFBQWEsZ0NBQWdDLHVCQUF1QixtQkFBbUIsbURBQW1ELEdBQUcsYUFBYSxrREFBa0Qsa0JBQWtCLHVCQUF1QixtREFBbUQsR0FBRyxPQUFPLHNCQUFzQixHQUFHLFFBQVEsdUJBQXVCLHlCQUF5QixzQkFBc0IsMkJBQTJCLEdBQUcsY0FBYyxnQ0FBZ0MsR0FBRyxpQkFBaUIsb0JBQW9CLDBCQUEwQixnQkFBZ0IseUJBQXlCLEtBQUssZUFBZSx5QkFBeUIsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsYUFBYSxrREFBa0QsbUJBQW1CLEdBQUcsUUFBUSxnQkFBZ0Isa0JBQWtCLDBHQUEwRyxHQUFHLFlBQVksc0JBQXNCLGtCQUFrQixtQkFBbUIsd0NBQXdDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGNBQWMsYUFBYSxpQkFBaUIsR0FBRyxtQkFBbUIsb0JBQW9CLHVCQUF1Qiw4QkFBOEIseUJBQXlCLGVBQWUsbURBQW1ELEdBQUcsVUFBVSxvQkFBb0IsMEJBQTBCLGVBQWUseUJBQXlCLDBCQUEwQix3QkFBd0IsaUJBQWlCLEdBQUcsV0FBVyxnQ0FBZ0Msc0JBQXNCLDBCQUEwQiwwQkFBMEIseUJBQXlCLEdBQUcsMkRBQTJELG1CQUFtQixtQkFBbUIsdUNBQXVDLG1CQUFtQixrRUFBa0UsR0FBRyxjQUFjLGdDQUFnQyx5QkFBeUIsR0FBRyw2Q0FBNkMsdURBQXVELEdBQUcsaUJBQWlCLHVDQUF1QyxlQUFlLEdBQUcsK0JBQStCLHNCQUFzQix3Q0FBd0MsS0FBSyxrQkFBa0Isb0JBQW9CLHVDQUF1QyxHQUFHLGdCQUFnQixvQkFBb0IsZ0JBQWdCLEdBQUcsY0FBYyxxQkFBcUIsc0JBQXNCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHNCQUFzQix3QkFBd0IsR0FBRywyQkFBMkIsb0JBQW9CLHNCQUFzQixHQUFHLHVCQUF1QixvQkFBb0IscUNBQXFDLDBCQUEwQixHQUFHLHNCQUFzQixvQkFBb0IsNkJBQTZCLGdCQUFnQix3QkFBd0IsR0FBRyxXQUFXLDZCQUE2Qix5QkFBeUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLGtDQUFrQyxHQUFHLGVBQWUsaUNBQWlDLEdBQUcsbUJBQW1CLG1DQUFtQyxHQUFHLGlCQUFpQixvQkFBb0IsZ0JBQWdCLEdBQUcsb0JBQW9CLHdCQUF3QixvQkFBb0IsMEJBQTBCLGdCQUFnQixLQUFLLFlBQVkseUJBQXlCLHdCQUF3Qiw2Q0FBNkMsd0JBQXdCLEdBQUcsZ0JBQWdCLHNCQUFzQixtREFBbUQsR0FBRyxzQkFBc0IsbUJBQW1CLDZDQUE2QyxtQkFBbUIsNkNBQTZDLEdBQUcsc0JBQXNCLGtDQUFrQyw4QkFBOEIsU0FBUywrQ0FBK0Msa0NBQWtDLHNCQUFzQixXQUFXLGlCQUFpQixtREFBbUQsR0FBRyxlQUFlLHNCQUFzQixHQUFHLHlCQUF5QjtBQUMxclY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0EsaUVBQWU7QUFDZjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDSEQsaUVBQWUsY0FBYyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sd0RBQVE7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ1M7QUFDTjtBQUNzQjs7QUFFakQ7QUFDQSxNQUFNLDZEQUFpQjtBQUN2QixXQUFXLDZEQUFpQjtBQUM1Qjs7QUFFQTtBQUNBLGlEQUFpRCwrQ0FBRyxLQUFLOztBQUV6RDtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUyw4REFBZTtBQUN4Qjs7QUFFQSxpRUFBZSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUM1QmM7O0FBRS9CO0FBQ0EscUNBQXFDLHNEQUFVO0FBQy9DOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm1CO0FBQ047O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHFEQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0NBQWM7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRSxXQUFXO0FBQ3RGLGdCQUFnQixpREFBZ0I7QUFDaEM7QUFDQTs7QUFFQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIscURBQW9CO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQW1COztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0x3QztBQUNKOztBQUVwQztBQUNBLElBQUkscURBQW9COztBQUV4QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUF5QjtBQUNyQztBQUNBO0FBQ0EsZ0JBQWdCLGtEQUFpQjtBQUNqQyxjQUFjO0FBQ2QsZ0JBQWdCLGtEQUFpQjtBQUNqQzs7QUFFQSxZQUFZLDZEQUE0QjtBQUN4QyxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQWtCO0FBQzlCO0FBQ0E7QUFDQSxZQUFZLHFEQUFvQjtBQUNoQztBQUNBO0FBQ0EsWUFBWSxxREFBb0I7QUFDaEM7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQW1CO0FBQ3ZCLElBQUksOERBQTZCO0FBQ2pDLElBQUkscURBQW9CO0FBQ3hCLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0Esd0NBQXdDLG1EQUFrQjs7QUFFMUQ7QUFDQTtBQUNBLElBQUksbURBQWtCO0FBQ3RCLElBQUksbURBQWtCO0FBQ3RCLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNEQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFhO0FBQ3JCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFjO0FBQ3RCOztBQUVBLElBQUksa0RBQWlCOztBQUVyQjtBQUNBLElBQUksbURBQWtCO0FBQ3RCLElBQUksbURBQWtCO0FBQ3RCLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGbUM7O0FBRW5DOztBQUVBO0FBQ0EsZUFBZSxnREFBSztBQUNwQixZQUFZO0FBQ1o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDb0M7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGdEQUFNO0FBQ3JCO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN2REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEM7QUFDUjtBQUNNO0FBQ0U7QUFDdkI7QUFDbUI7OztBQUd4QztBQUNBLDhDQUFhO0FBQ2IsOENBQWE7QUFDYiw4Q0FBYTs7O0FBR2Isb0RBQW1CO0FBQ25CLG9EQUFtQjs7O0FBR25CLGtEQUFpQjtBQUNqQjs7QUFFQSxpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNzYwMGZmICwgI2ZmMDA2OWUwKTtcXG4gICAgLS1lcnJvci1jb2xvci1wcmltYXJ5OiByZ2IoMTkwLCAzNSwgMzUpO1xcbiAgICAtLXByaW1hcnktY29sb3I6ICNmYzM3ODA7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jYXBwLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzMHB4IDFmcjtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI3NpZGViYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGdyaWQtcm93OjIvMztcXG4gICAgYm94LXNoYWRvdzogMnB4IDFweCA2cHggMHB4IHJnYigwIDAgMCAvIDI1JSk7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA2cHggMHB4IHJnYigwIDAgMCAvIDI1JSk7XFxufVxcblxcbnVse1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMTVweCA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2IyYjI7XFxufVxcblxcbi5tZW51LWl0ZW1zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuXFxufVxcblxcbi5zdWItaXRlbSB7XFxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcXG59XFxuXFxuLnB1bGwtcmlnaHQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaHIge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSwgcmdiYSgwLCAwLCAwLCAwKSk7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNnB4IDBweCByZ2IoMCAwIDAgLyAyNSUpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgZ2FwOiAzdnc7XFxuICAgIHBhZGRpbmc6IDUwcHggMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHdpZHRoOiA3NSU7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxufVxcblxcbiN0YXNrLXN1Ym1pc3Npb24+LmlucHV0LWdyb3VwPmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmNiOWI5O1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiY2I5Yjk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuaW5wdXQ6aW52YWxpZDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XFxuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1lcnJvci1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbmlucHV0OnJlcXVpcmVkK2xhYmVsOmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiICpcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3ItcHJpbWFyeSk7XFxuXFxufVxcblxcbi5pbnB1dC1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2Ugbm93cmFwO1xcbn1cXG5cXG4uYnRuLWdyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG5cXG4uY2xvc2Uge1xcbiAgICBjb2xvcjogI2FhYWFhYTtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbiNtYWluLWlubmVyLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN0YXNrcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgZ3JheTtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCByZWQ7XFxufVxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRhc2stY29udHJvbHMge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNnB4IDBweCByZ2IoMCAwIDAgLyAyNSUpO1xcbn1cXG5cXG5cXG5idXR0b24ucHJpbWFyeSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbmJ1dHRvbi5zZWNvbmRhcnkge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBcXG59XFxuXFxuLmljb24tYnRuOmhvdmVyLCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIFxcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNnB4IDBweCByZ2IoMCAwIDAgLyAyNSUpO1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5j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SSxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlOzs7QUFHbkI7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzc2MDBmZiAsICNmZjAwNjllMCk7XFxuICAgIC0tZXJyb3ItY29sb3ItcHJpbWFyeTogcmdiKDE5MCwgMzUsIDM1KTtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjZmMzNzgwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2FwcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMzBweCAxZnI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNzaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBncmlkLXJvdzoyLzM7XFxuICAgIGJveC1zaGFkb3c6IDJweCAxcHggNnB4IDBweCByZ2IoMCAwIDAgLyAyNSUpO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNnB4IDBweCByZ2IoMCAwIDAgLyAyNSUpO1xcbn1cXG5cXG51bHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDE1cHggNDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiMmIyO1xcbn1cXG5cXG4ubWVudS1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcblxcbn1cXG5cXG4uc3ViLWl0ZW0ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XFxufVxcblxcbi5wdWxsLXJpZ2h0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhyIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMyksIHJnYmEoMCwgMCwgMCwgMCkpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDZweCAwcHggcmdiKDAgMCAwIC8gMjUlKTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIGdhcDogM3Z3O1xcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICB3aWR0aDogNzUlO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG5cXG4jdGFzay1zdWJtaXNzaW9uPi5pbnB1dC1ncm91cD5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JjYjliOTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmNiOWI5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcbmlucHV0OmludmFsaWQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tZXJyb3ItY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG5pbnB1dDpyZXF1aXJlZCtsYWJlbDphZnRlcntcXG4gICAgY29udGVudDogXFxcIiAqXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yLXByaW1hcnkpO1xcblxcbn1cXG5cXG4uaW5wdXQtZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlIG5vd3JhcDtcXG59XFxuXFxuLmJ0bi1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuXFxuLmNsb3NlIHtcXG4gICAgY29sb3I6ICNhYWFhYWE7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4jbWFpbi1pbm5lci1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdGFza3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmVkO1xcbn1cXG5cXG4ubG93LXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrLWNvbnRyb2xzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDZweCAwcHggcmdiKDAgMCAwIC8gMjUlKTtcXG59XFxuXFxuXFxuYnV0dG9uLnByaW1hcnkge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG5idXR0b24uc2Vjb25kYXJ5IHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgXFxufVxcblxcbi5pY29uLWJ0bjpob3ZlciwgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDZweCAwcHggcmdiKDAgMCAwIC8gMjUlKTtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgKiBhcyBwcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzLmpzJztcbmltcG9ydCAqIGFzIHRhc2tzIGZyb20gJy4vdGFza3MuanMnO1xuXG4vL3dlJ2xsIG1haW50YWluIGEgdmFyaWFibGUgdGhhdCBzaG93cyB0aGUgY3VycmVudCB2aWV3IHNvIHdlIGNhbiByZXRyaWV2ZVxuLy90aGUgcmVsZXZhbnQgdGFza3NcbmxldCBjdXJyZW50VmlldyA9ICdpbmJveCc7XG5cbi8vc29tZSBnbG9iYWwgdmFyaWFibGVzIHRoYXQgd2lsbCBiZSB1c2VkIGJ5IG11bHRpcGxlIGZ1bmN0aW9uc1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza01vZGFsJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stc3VibWlzc2lvbicpO1xuY29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpO1xuXG5cbmNvbnN0IGRpc3BsYXlNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufVxuXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbi8vY2xlYXIgZG93biB0aGUgbW9kYWwgZm9ybXMgZm9yIGlmIGl0cyBzdWJtaXR0ZWQgb3IgdXNlciBleHBsaWNpdGx5IGNhbmNlbHNcbmNvbnN0IGNsZWFyTW9kYWwgPSAoKSA9PiB7XG4gICAgZm9ybUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9KVxufVxuXG5jb25zdCBhZGRQcm9qZWN0c1RvVGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stcHJvamVjdCcpO1xuICAgIGNvbnN0IGxpc3RPZlByb2plY3RzID0gcHJvamVjdHMucHJvamVjdExpc3Q7XG4gICAgbGV0IGVsZW1lbnRzID0gW107XG4gICAgLy9hZGQgYSBibGFuayB2YWx1ZSB0byB0aGUgbGlzdCBzbyB1c2VyIGRvZXNuJ3QgaGF2ZSB0byBzZWxlY3QgYSBwcm9qZWN0XG4gICAgY29uc3QgYmxhbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBlbGVtZW50cy5wdXNoKGJsYW5rRWxlbWVudCk7XG5cbiAgICAvL2l0ZXJhdGUgb3ZlciB0aGUgbGlzdCBvZiBwcm9qZWN0cyBhZGRpbmcgZWFjaCBhcyBhbiBvcHRpb24gZm9yIHRoZSBkcm9wZG93blxuICAgIGxpc3RPZlByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gcHJvamVjdC5pZDtcbiAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pXG5cbiAgICAvL3JlcGxhY2VDaGlsZHJlbiBmdW5jdGlvbiB3aWxsIHJlbW92ZSBhbnkgb3B0aW9ucyBhbHJlYWR5IHRoZXJlIGFuZCBhZGQgYWxsIGZyb20gZnJlc2hcbiAgICAvL3JlbW92ZXMgdGhlIG5lZWQgdG8gY29tcGFyZSB3aGF0J3MgdGhlcmUgdG8gcHJldmVudCBkdXBsaWNhdGlvblxuICAgIHByb2plY3REcm9wZG93bi5yZXBsYWNlQ2hpbGRyZW4oLi4uZWxlbWVudHMpO1xufVxuXG4vL2l0ZXJhdGUgdGhyb3VnaCB0aGUgZWxlbWVudHMgaW4gdGhlIGZvcm0gYW5kIGFkZCB2YWx1ZXMgdG8gYW4gYXJyYXkgd2hpY2ggaXMgcmV0dXJuZWRcbmNvbnN0IGdldEZvcm1JbnB1dHMgPSAoKSA9PiB7XG4gICAgbGV0IGZvcm1JbnB1dHMgPSBbXTtcbiAgICBmb3JtRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGZvcm1JbnB1dHMucHVzaChlbGVtZW50LnZhbHVlKSk7XG4gICAgcmV0dXJuIGZvcm1JbnB1dHM7XG59XG5cbi8vYWRkIGRhdGEgYXR0cmlidXRlIHRvIGZvcm0gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgaXQncyBlZGl0aW5nIG9yIGNyZWF0aW5nIGEgbmV3IHRhc2tcbmNvbnN0IGFkZEZvcm1UeXBlID0gKHVwZGF0ZVR5cGUpID0+IHtcbiAgICBmb3JtLmRhdGFzZXQuZm9ybXR5cGUgPSB1cGRhdGVUeXBlO1xufVxuXG4vL2Z1bmN0aW9uIHRvIGxvYWQgdGFza3MgdG8gdGhlIFVJXG5jb25zdCBsb2FkVGFza3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbGlzdE9mVGFza3MgPSB0YXNrcy5nZXRUYXNrcyhjdXJyZW50VmlldywgcHJvamVjdCk7XG5cbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcblxuICAgIC8vYnVpbGQgdXAgdGhlIGh0bWxcbiAgICBsaXN0T2ZUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAvL3Rha2UgdGl0bGVcbiAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0ID0gJ3Rhc2snO1xuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QgKz0gJyBwcmlvcml0eSdcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdCArPSAnIGxvdy1wcmlvcml0eSdcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0ID0gJ3Rhc2stdGl0bGUnO1xuICAgICAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBjaGVja0JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgdGFza1RpdGxlLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay50aXRsZTtcbiAgICAgICAgdGFza1RpdGxlLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICAvL3Rhc2sgY29udHJvbHMgXG5cbiAgICAgICAgY29uc3QgY29udHJvbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udHJvbHNDb250YWluZXIuY2xhc3NMaXN0ID0gJ3Rhc2stY29udHJvbHMnO1xuICAgICAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChjb250cm9sc0NvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QgPSAnZHVlLWRhdGUnO1xuICAgICAgICBkYXRlQ29udGFpbmVyLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG5cblxuICAgICAgICBjb25zdCBpbmZvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpbmZvQnRuLmNsYXNzTGlzdCA9ICdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGljb24tYnRuIHRhc2staW5mbyc7XG4gICAgICAgIGluZm9CdG4uaW5uZXJIVE1MID0gJ2luZm8nO1xuICAgICAgICBpbmZvQnRuLmRhdGFzZXQuaXRlbWlkID0gdGFzay5pZDtcbiAgICAgICAgY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0J0bik7XG5cbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QgPSAnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBpY29uLWJ0biBlZGl0LXRhc2snO1xuICAgICAgICBlZGl0QnRuLmlubmVyVGV4dCA9ICdlZGl0X25vdGUnO1xuICAgICAgICBlZGl0QnRuLmRhdGFzZXQuaXRlbWlkID0gdGFzay5pZDtcbiAgICAgICAgY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgYWRkRm9ybVR5cGUoJ2VkaXQnKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RzVG9UYXNrRm9ybSgpO1xuICAgICAgICAgICAgbG9hZEV4aXN0aW5nVGFza0luRm9ybShldmVudC50YXJnZXQuZGF0YXNldC5pdGVtaWQpO1xuICAgICAgICAgICAgZGlzcGxheU1vZGFsKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0ID0gJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgaWNvbi1idG4gZGVsZXRlLXRhc2snO1xuICAgICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJ2RlbGV0ZSc7XG4gICAgICAgIGRlbGV0ZUJ0bi5kYXRhc2V0Lml0ZW1pZCA9IHRhc2suaWQ7XG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/IFxcblxcbiAke3Rhc2sudGl0bGV9YCkpIHtcbiAgICAgICAgICAgICAgICB0YXNrcy5kZWxldGVUYXNrKGV2ZW50LnRhcmdldC5kYXRhc2V0Lml0ZW1pZCk7XG4gICAgICAgICAgICAgICAgbG9hZFRhc2tzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICBlbGVtZW50cy5wdXNoKHRhc2tFbGVtZW50KTtcbiAgICB9KVxuXG4gICAgdGFza0NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oLi4uZWxlbWVudHMpO1xufVxuXG5cbmNvbnN0IHVwZGF0ZUN1cnJlbnRWaWV3ID0gKHZpZXcpID0+IHtcbiAgICBjdXJyZW50VmlldyA9IHZpZXc7XG5cbn1cblxuY29uc3QgdXBkYXRlQWN0aXZlTWVudUl0ZW0gPSAobmV3QWN0aXZlTWVudUl0ZW0pID0+IHtcbiAgICBjb25zdCBvbGRBY3RpdmVNZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICBvbGRBY3RpdmVNZW51SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBuZXdBY3RpdmVNZW51SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbn1cblxuY29uc3QgbG9hZFByb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RPZlByb2plY3RzID0gcHJvamVjdHMucHJvamVjdExpc3Q7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1saXN0Jyk7XG4gICAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgICBsaXN0T2ZQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzdWItaXRlbScsICdwcmltYXJ5LW1lbnUtaXRlbXMnKTtcbiAgICAgICAgbmV3UHJvamVjdC5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBuZXdQcm9qZWN0LmRhdGFzZXQucHJvamVjdGlkID0gcHJvamVjdC5pZDtcbiAgICAgICAgbmV3UHJvamVjdC5kYXRhc2V0LmRpc3BsYXkgPSAncHJvamVjdCc7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgfSlcblxuICAgIHByb2plY3RMaXN0LnJlcGxhY2VDaGlsZHJlbiguLi5lbGVtZW50cyk7XG5cbn1cblxuY29uc3QgbG9hZEV4aXN0aW5nVGFza0luRm9ybSA9IChpZCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHRhc2tUb1VwZGF0ZSA9IHRhc2tzLmdldFNpbmdsZVRhc2soaWQpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZScpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kdWUtZGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXByb2plY3QnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtdGFzaycpO1xuXG4gICAgdGl0bGUudmFsdWUgPSB0YXNrVG9VcGRhdGUudGl0bGU7XG4gICAgZHVlRGF0ZS52YWx1ZSA9IHRhc2tUb1VwZGF0ZS5kdWVEYXRlO1xuICAgIHByaW9yaXR5LnZhbHVlID0gdGFza1RvVXBkYXRlLnByaW9yaXR5O1xuICAgIHByb2plY3QudmFsdWUgPSB0YXNrVG9VcGRhdGUucHJvamVjdDtcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2tUb1VwZGF0ZS5kZXNjcmlwdGlvbjtcbiAgICBzYXZlQnRuLmRhdGFzZXQuaXRlbWlkID0gaWQ7XG5cbn1cblxuXG5leHBvcnQge1xuICAgIGRpc3BsYXlNb2RhbCxcbiAgICBjbG9zZU1vZGFsLFxuICAgIGFkZFByb2plY3RzVG9UYXNrRm9ybSxcbiAgICBjbGVhck1vZGFsLFxuICAgIGFkZEZvcm1UeXBlLFxuICAgIGdldEZvcm1JbnB1dHMsXG4gICAgbG9hZFRhc2tzLFxuICAgIHVwZGF0ZUN1cnJlbnRWaWV3LFxuICAgIHVwZGF0ZUFjdGl2ZU1lbnVJdGVtLFxuICAgIGxvYWRQcm9qZWN0cyxcbiAgICBsb2FkRXhpc3RpbmdUYXNrSW5Gb3JtXG59IiwiaW1wb3J0ICogYXMgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXkuanMnO1xuaW1wb3J0ICogYXMgdGFza3MgZnJvbSAnLi90YXNrcy5qcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIGRpc3BsYXkubG9hZFByb2plY3RzKCk7XG5cbiAgICBjb25zdCBwcmltYXJ5TWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaW1hcnktbWVudS1pdGVtcycpO1xuICAgIHByaW1hcnlNZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheS51cGRhdGVDdXJyZW50VmlldyhldmVudC50YXJnZXQuZGF0YXNldC5kaXNwbGF5KTtcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgY2xpY2tlZCBpdGVtIGhhcyBhIHByb2plY3QgSUQsIGluIHdoaWNoIGNhc2UgcGFzcyBpdCB0byB0aGUgbG9hZCB0YXNrcyBmdW5jdGlvblxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnByb2plY3RpZCl7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5sb2FkVGFza3MoZXZlbnQudGFyZ2V0LmRhdGFzZXQucHJvamVjdGlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5sb2FkVGFza3MoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGlzcGxheS51cGRhdGVBY3RpdmVNZW51SXRlbShpdGVtKTtcbiAgICAgICAgfSlcbiAgICB9KVxufSlcblxuLy9maXJzdCBhZGQgYW55IGtleWJvYXJkIHNob3J0Y3V0cyB3ZSB3YW50IHRvIHVzZSBhY3Jvc3MgdGhlIFVJXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGVudGVyZWRDaGFyID0gZXZlbnQua2V5O1xuXG4gICAgLy9pZiB0aGUgdXNlciBpcyB0eXBpbmcgaW4gYW4gaW5wdXQgZmllbGQsIHN0b3AgdGhlIGZ1bmN0aW9uXG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09IFwiSU5QVVRcIiAmJiBlbnRlcmVkQ2hhciAhPSAnRXNjYXBlJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaChlbnRlcmVkQ2hhcikge1xuICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgICAgZGlzcGxheS5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbic6XG4gICAgICAgICAgICBkaXNwbGF5LmRpc3BsYXlNb2RhbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgZGlzcGxheS5kaXNwbGF5TW9kYWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgfVxufSk7XG5cbi8vbGlzdGVuIGZvciB1c2VycyBjbGlja2luZyB0byBhZGQgYSBuZXcgdGFzayBhbmQgcHJlc2VudCB0aGVtIHRoZSBtb2RhbFxuY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpO1xubmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkaXNwbGF5LmFkZEZvcm1UeXBlKCduZXcnKTtcbiAgICBkaXNwbGF5LmFkZFByb2plY3RzVG9UYXNrRm9ybSgpO1xuICAgIGRpc3BsYXkuZGlzcGxheU1vZGFsKCk7XG59KVxuXG5cblxuLy9saXN0ZW4gZm9yIHVzZXJzIGNsb3NpbmcgdGhlIG1vZGFsICh0aGV5IGNhbiBhbHNvIHVzZSBrZXlib2FyZCBzaG9ydGN1dClcbmNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbCcpO1xuY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXkuY2xvc2VNb2RhbClcblxuY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC10YXNrJyk7XG5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGlzcGxheS5jbG9zZU1vZGFsKCk7XG4gICAgZGlzcGxheS5jbGVhck1vZGFsKCk7XG59KVxuXG5cbi8vcHJvY2VzcyBuZXcgdGFzayBzdWJtaXNzaW9uIGFucyByZWxvYWQgdGhlIFVJIHdpdGggdGFza3NcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1zdWJtaXNzaW9uJyk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybUlucHV0cyA9IGRpc3BsYXkuZ2V0Rm9ybUlucHV0cygpO1xuICAgIFxuICAgIGlmIChmb3JtLmRhdGFzZXQuZm9ybXR5cGUgPT09ICduZXcnKSB7XG4gICAgICAgIC8vc3ByZWFkIG9wZXJhdG9yIG1lYW5zIGkgY2FuIGp1c3QgdGhyb3VnaCBhbGwgdGhlIGlucHV0cyBpbiBhIG9uZXJcbiAgICAgICAgdGFza3MubmV3VGFzayguLi5mb3JtSW5wdXRzKTtcbiAgICB9IGVsc2UgaWYgKGZvcm0uZGF0YXNldC5mb3JtdHlwZSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgIC8vYWRkIHRoZSBpZCBpbnRvIHRoZSBmb3JtIGlucHV0c1xuICAgICAgICBjb25zdCBpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtdGFzaycpLmRhdGFzZXQuaXRlbWlkO1xuICAgICAgICBmb3JtSW5wdXRzLnVuc2hpZnQoaWQpO1xuICAgICAgICB0YXNrcy5lZGl0VGFzayguLi5mb3JtSW5wdXRzKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5LmxvYWRUYXNrcygpO1xuXG4gICAgLy9ub3cgY2xlYXIgZG93biB0aGUgZm9ybVxuICAgIGRpc3BsYXkuY2xvc2VNb2RhbCgpO1xuICAgIGRpc3BsYXkuY2xlYXJNb2RhbCgpO1xufSlcblxuLy9lZGl0LCBkZWxldGUgYW5kIGluZm8gYWRkIGV2ZW50IGxpc3RlbmVyIGlzIGRvbmUgaW4gZGlzcGxheS5qcyB3aGVuIHRoZSB1aSBjb21wb25lbnQgaXMgY3JlYXRlZFxuXG5cbiIsImltcG9ydCB7IHY0IGFzIHV1aWQ0IH0gZnJvbSAndXVpZCc7XG5cbmxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgdHlwZSkgPT4ge1xuICAgIGNvbnN0IGlkID0gdXVpZDQoKTtcbiAgICByZXR1cm4ge2lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHR5cGV9XG59XG5cblxuY29uc3QgbmV3UHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHR5cGUpID0+IHtcbiAgICAvL2ZpcnN0IGNoZWNrIHRvIHNlZSBpZiBhbnkgb3RoZXIgcHJvamVjdHMgYWxyZWFkeSBleGlzdCB3aXRoIG5hbWUgcHJvdmlkZWQgYW5kIGVycm9yIGlmIHNvXG4gICAgY29uc3QgcHJvamVjdHNXaXRoVGl0bGUgPSBwcm9qZWN0TGlzdC5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09PSB0aXRsZSk7XG4gICAgaWYgKHByb2plY3RzV2l0aFRpdGxlLmxlbmd0aCAhPT0gMCApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIHRoaXMgaXMgYSBkdXBsaWNhdGUnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgdHlwZSk7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbn1cblxuY29uc3QgZWRpdFByb2plY3QgPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdHlwZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdExpc3QuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5pZCA9PSBpZCk7XG4gICAgcHJvamVjdExpc3RbaW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gICAgcHJvamVjdExpc3RbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgcHJvamVjdExpc3RbaW5kZXhdLnR5cGUgPSB0eXBlO1xufVxuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0TGlzdC5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBpZCk7XG4gICAgcHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuXG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdExpc3QsXG4gICAgbmV3UHJvamVjdCxcbiAgICBlZGl0UHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0XG5cbn0iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxubGV0IHRhc2tzTGlzdCA9IFtdO1xuXG4vL2ZhY3RvcnkgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIG5lZXcgdGFza3NcbmNvbnN0IFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGlkID0gdXVpZHY0KCk7XG4gICAgY29uc3QgY29tcGxldGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHtpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgY29tcGxldGVkfTtcbn1cblxuLy9mdW5jdGlvbiB0byBjYWxsIGZhY3RvcnkgdG8gY3JlYXRlIHRoZSB0YXNrc1xuY29uc3QgbmV3VGFzayA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY29uc3QgbmV3VGFzayA9IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gICAgdGFza3NMaXN0LnB1c2gobmV3VGFzayk7XG59XG5cbmNvbnN0IGVkaXRUYXNrID0gKGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0YXNrc0xpc3QuZmluZEluZGV4KHRhc2sgPT4gdGFzay5pZCA9PSBpZCk7XG4gICAgdGFza3NMaXN0W2luZGV4XS50aXRsZSA9IHRpdGxlO1xuICAgIHRhc2tzTGlzdFtpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0YXNrc0xpc3RbaW5kZXhdLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRhc2tzTGlzdFtpbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0YXNrc0xpc3RbaW5kZXhdLnByb2plY3QgPSBwcm9qZWN0O1xuXG59XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSAoaWQpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRhc2tzTGlzdC5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09IGlkKTtcbiAgICB0YXNrc0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuLy9mdW5jdGlvbiB0byByZXRyaWV2ZSB0YXNrcyB3aGljaCB0YWtlcyBhIGZpbHRlciAtIGRlZmF1bHRzIG9uIGFsbCB0YXNrcyBpZiBmaWx0ZXIgbm90IHByb3ZpZGVkXG4vL2FjY2VwdGVkIHZhbHVlcyBhcmUgXCJ0b2RheVwiIG9yIFwicHJvamVjdFwiIC0gd2hlbiBwcm92aWRpbmcgcHJvamVjdCB0aGUgYWN0dWFsIHByb2plY3QgaWQgc2hvdWxkIGFsc28gYmUgcHJvdmlkZWRcbmNvbnN0IGdldFRhc2tzID0gKGZpbHRlciwgcHJvamVjdCkgPT4ge1xuXG4gICAgaWYgKGZpbHRlciA9PT0gJ3RvZGF5Jykge1xuICAgICAgICAvL2xvZ2ljIGRlcGVuZGVudCBvbiBob3cgZGF0ZXMgd2lsbCBiZSBoYW5kbGVkIC0gZmlsdGVyIHN0YXRlbWVudCB3aWxsIG5lZWQgdG8gYmUgdXBkYXRlZCB0byBsb29rIGF0IGRhdGVcbiAgICAgICAgcmV0dXJuIHRhc2tzTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLnRpdGxlID09ICdkbyBvdGhlciBzdHVmZicpO1xuICAgIH0gXG5cbiAgICBpZiAoZmlsdGVyID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tzTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3QpO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXIgPT09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgIHJldHVybiB0YXNrc0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza3NMaXN0O1xufVxuXG5jb25zdCBnZXRTaW5nbGVUYXNrID0gKGlkKSA9PiB7XG4gICAgY29uc3QgdGFza1RvUmV0dXJuID0gdGFza3NMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suaWQgPT09IGlkKTtcbiAgICByZXR1cm4gdGFza1RvUmV0dXJuWzBdO1xufVxuXG5leHBvcnQge1xuICAgIHRhc2tzTGlzdCxcbiAgICBuZXdUYXNrLFxuICAgIGVkaXRUYXNrLFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgZ2V0VGFza3MsXG4gICAgZ2V0U2luZ2xlVGFza1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgKiBhcyB0YXNrcyBmcm9tICcuL3Rhc2tzLmpzJztcbmltcG9ydCAqIGFzIHByb2plY3RzIGZyb20gJy4vcHJvamVjdHMuanMnO1xuaW1wb3J0ICogYXMgbGlzdGVuZXJzIGZyb20gJy4vbGlzdGVuZXJzLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXkuanMnO1xuXG5cbi8vc3R1ZmYgYmVsb3cgZm9yIHRlc3RpbmcgZnVuY3Rpb25zXG50YXNrcy5uZXdUYXNrKCdkbyBzdHVmZicsICcyMDIyLTExLTAzVDE2OjIxJywgJ2hpZ2gnLCAnSGlnaCcsICdkZWZhdWx0Jyk7XG50YXNrcy5uZXdUYXNrKCdkbyBvdGhlciBzdHVmZicsICcyMDIyLTExLTAzVDE2OjIxJywgJ2xvdycsICdoaWdoJywgJ2RlZmF1bHQnKTtcbnRhc2tzLm5ld1Rhc2soJ2l0XFwncyBteSBiaXJ0aGRheSwgYmFrZSBhIGNha2UnLCAnMjAyMi0xMS0wM1QxNjoyMScsICdtZWRpdW0nLCAnaGlnaCcsICdkZWZhdWx0Jyk7XG5cblxucHJvamVjdHMubmV3UHJvamVjdCgnUHJvamVjdCAxJywgJ290aGVyIHN0dWZmJywgJ2RlZmF1bHQnKVxucHJvamVjdHMubmV3UHJvamVjdCgnUHJvamVjdCAyJywgJ290aGVyIHN0dWZmJywgJ2RlZmF1bHQnKVxuXG5cbmRpc3BsYXkubG9hZFRhc2tzKCk7XG4vL2Rpc3BsYXkubG9hZFByb2plY3RzKCk7XG5cbi8vZGlzcGxheU1vZGFsKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9