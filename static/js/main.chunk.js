(this["webpackJsonpfluidity"] = this["webpackJsonpfluidity"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/base/animations.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/base/animations.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@keyframes circling-shadow {\n    0%{ filter:\n        drop-shadow(-10px -10px 0 var(--accent-color2))\n        drop-shadow(10px 10px 0 var(--accent-color));\n    }\n    25%{ filter:\n        drop-shadow(-10px 10px 0 var(--accent-color2))\n        drop-shadow(10px -10px 0 var(--accent-color));\n    }\n    50%{ filter:\n        drop-shadow(10px 10px 0 var(--accent-color))\n        drop-shadow(-10px -10px 0 var(--accent-color2));\n    }\n    75%{ filter:\n        drop-shadow(10px -10px 0 var(--accent-color))\n        drop-shadow(-10px 10px 0 var(--accent-color2));\n    }\n    100%{ filter:\n        drop-shadow(-10px -10px 0 var(--accent-color2))\n        drop-shadow(10px 10px 0 var(--accent-color));\n    }\n}\n@keyframes circling-shadow-small {\n    0%{ filter:\n        drop-shadow(-5px -5px 0 var(--accent-color2))\n        drop-shadow(5px 5px 0 var(--accent-color));\n    }\n    25%{ filter:\n        drop-shadow(-5px 5px 0 var(--accent-color2))\n        drop-shadow(5px -5px 0 var(--accent-color));\n    }\n    50%{ filter:\n        drop-shadow(5px 5px 0 var(--accent-color))\n        drop-shadow(-5px -5px 0 var(--accent-color2));\n    }\n    75%{ filter:\n        drop-shadow(5px -5px 0 var(--accent-color))\n        drop-shadow(-5px 5px 0 var(--accent-color2));\n    }\n    100%{ filter:\n        drop-shadow(-5px -5px 0 var(--accent-color2))\n        drop-shadow(5px 5px 0 var(--accent-color));\n    }\n}\n\n@keyframes text-flicker {\n    from {\n        text-shadow: 1px 0 0 var(--accent-color), -2px 0 0 var(--accent-color2);\n    }\n    to {\n        text-shadow: 2px 0.5px 2px var(--accent-color), -1px -0.5px 2px var(--accent-color2);\n    }\n}\n\n@keyframes box-flicker {\n    from {\n        filter: drop-shadow(1px 0 0 var(--accent-color)) drop-shadow(-2px 0 0 var(--accent-color2));\n    }\n    to {\n        filter: drop-shadow(2px 0.5px 2px var(--accent-color)) drop-shadow( -1px -0.5px 2px var(--accent-color2));\n    }\n}\n\n@keyframes accordion-hover {\n    0% {\n        clip: rect(9px, 9999px, 99px, 0);\n    }\n    100% {\n        clip: rect(9px, 9999px, 99px, 0);\n   }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/base/index.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/base/index.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./variables.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/base/variables.css");
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./animations.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/base/animations.css");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./FiraCode-Light.woff */ "./src/base/FiraCode-Light.woff");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./FiraCode-Regular.woff */ "./src/base/FiraCode-Regular.woff");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "/***********************\n * Idk what this does. *\n *    No touchies.\t   *\n **********************/\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/********************\n *   \t  Fonts \t\t  *\n ********************/\n@font-face {\n\tfont-family: 'Fira Code';\n\tfont-style: normal;\n\tfont-weight: 300;\n\tsrc: local('Fira Code'), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\n}\n@font-face {\n\tfont-family: 'Fira Code';\n\tfont-style: normal;\n\tfont-weight: 500;\n\tsrc: local('Fira Code'), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n}\nbody * {\n\tfont-family: \"Fira Code\";\n\tfont-weight: 300;\n}\n\n/********************\n * \t   General\t\t  *\n ********************/\n\nhtml, body, #root {\n\theight:100%;\n\twidth:100%;\n}\nbody {\n\tmargin: 0;\n\tbackground-color: var(--bg-color);\n\tcolor: var(--default-color);\n\toverflow: hidden;\n}\np {\n\tmargin:0px\n}\na, a:visited, a:active {\n\tcolor: var(--default-color);\n\ttext-decoration: none;\n}\n\n/********************\n * \t   Scrollbar\t*\n ********************/\n::-webkit-scrollbar {\n    /* width */\n    width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    /* Handle */\n    background: var(--default-color);\n}\n\n::-webkit-scrollbar-thumb:hover {\n\t/* Handle on hover */\n    background: var(--default-color);\n}\n\n::-webkit-scrollbar-track-piece {\n    /* not handle on */\n    background: transparent;\n} ", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/base/variables.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/base/variables.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n\t--bg-color: rgba(46,46,46);\n\t--default-color: rgba(230,230,230);\n\t--accent-color: rgb(255, 180, 230);\n\t--accent-color2: rgb(180, 255, 230);\n\t--border-radius: 5px;\n\t--settings-window-gap: 50px;\n\t--text-shadow-downwards: 1px 0px 0 var(--accent-color),\n            -1px 0px 0 var(--accent-color),\n            0px -1px 0 var(--accent-color),\n            0px 1px 0 var(--accent-color),\n            0px 2px 0 var(--accent-color),\n            0px 3px 0 var(--accent-color),\n            0px 4px 0 var(--accent-color);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_variables_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/variables.css */ "./src/base/variables.css");
/* harmony import */ var _base_variables_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_base_variables_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Startpage_Startpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Startpage/Startpage */ "./src/Startpage/Startpage.tsx");
/* harmony import */ var _Startpage_Settings_settingsHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Startpage/Settings/settingsHandler */ "./src/Startpage/Settings/settingsHandler.ts");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/App.tsx";





const App = () => {
  //Apply colors
  const root = document.documentElement;
  const colors = _Startpage_Settings_settingsHandler__WEBPACK_IMPORTED_MODULE_3__["Design"].getWithFallback().colors;
  Object.keys(colors).forEach(key => {
    root.style.setProperty(key, colors[key]);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Startpage_Startpage__WEBPACK_IMPORTED_MODULE_2__["Startpage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Startpage/LinkContainer/Accordion/Accordion.tsx":
/*!*************************************************************!*\
  !*** ./src/Startpage/LinkContainer/Accordion/Accordion.tsx ***!
  \*************************************************************/
/*! exports provided: AccordionContainer, AccordionGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionContainer", function() { return AccordionContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionGroup", function() { return AccordionGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/Startpage/LinkContainer/Accordion/Accordion.tsx";


const StyledAccordionContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    margin-left: 100px;
    display:flex;
    width:calc(100% - 400px - 100px);
`;
const AccordionContainer = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAccordionContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  }, props.children);
};
const StyledAccordionGroup = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    height: 400px;
    display: flex;
    padding: 0 10px;
    flex-direction: row;
    border-right:3px solid var(--default-color);
    :first-of-type{
        border-left:3px solid var(--default-color);
    }
`;
const AccordionContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    height: 100%;
    width: ${_ref => {
  let {
    width
  } = _ref;
  return width + "px";
}};
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    transition:.3s;
`;
const AccordionTitleWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    padding: 0;
    background-color: var(--bg-color);
    border: 4px solid var(--accent-color);
    height: 100%;
    width: 90px;
    cursor: ${_ref2 => {
  let {
    active
  } = _ref2;
  return active ? "default" : "pointer";
}};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    position: relative;
    ::before {
        content: "";
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: ${_ref3 => {
  let {
    active
  } = _ref3;
  return active ? "390px" : "0";
}};
        background-color: var(--accent-color);
        transition:  ${_ref4 => {
  let {
    active
  } = _ref4;
  return active ? "1s" : ".5s";
}};
    }
    :hover, :focus{
        outline: none;
        ${_ref5 => {
  let {
    active
  } = _ref5;
  return !active && `
            ::before {
                height: 50%;
            }
            > .wave {
                top: 180px;
                ::before{
                    animation: wave 12s infinite cubic-bezier(0.71, 0.33, 0.33, 0.68);
                    top: -25%;
                    left: 50%;
                }
            }
        `;
}}
    }

    > .wave {
        /* Waves Source: https://codepen.io/mburakerman/pen/eRZZEv */
        width: 82px;
        height: 50px;
        position: absolute;
        top: ${_ref6 => {
  let {
    active
  } = _ref6;
  return active ? "0px" : "350px";
}};
        overflow: hidden;
        transition:  ${_ref7 => {
  let {
    active
  } = _ref7;
  return active ? "1s" : ".5s";
}};
        ::before{
            content:"";
            width: 180px;
            height: 185px;
            position: absolute;
            top: -25%;
            left: 50%;
            margin-left: -90px;
            margin-top: -140px;
            border-radius: 37%;
            background-color: var(--bg-color);
            animation: wave 12s infinite cubic-bezier(0.71, 0.33, 0.33, 0.68);
        }
        @keyframes wave {
            from { transform: rotate(0deg);}
            from { transform: rotate(360deg);}
        }
    }


    ${_ref8 => {
  let {
    active
  } = _ref8;
  return !active && `
        :hover{
            > * {
                color: var(--bg-color);
                text-shadow:
                    5px 0px 0 var(--accent-color),
                    4px 0px 0 var(--accent-color),
                    3px 0px 0 var(--accent-color),
                    2px 0px 0 var(--accent-color),
                    1px 0px 0 var(--accent-color),
                    -1px 0px 0 var(--accent-color),
                    0px 1px 0 var(--accent-color),
                    0px -1px 0 var(--accent-color);
            }
        }
    `;
}};
`;
const AccordionTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].h1`
    transform: rotate(90deg);
    min-width: max-content;
    color: ${_ref9 => {
  let {
    active
  } = _ref9;
  return active ? "var(--bg-color)" : "var(--default-color)";
}};
    transition: .5s;
    letter-spacing: 5px;
`;
const AccordionGroup = _ref10 => {
  let {
    active,
    title,
    children,
    onClick
  } = _ref10;
  const [contentWidth, setContentWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(active ? 500 : 0);
  let parent;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (parent && active) {
      setContentWidth(parent.clientWidth - parent.children.length * 113 - 3);
    } else {
      setContentWidth(0);
    }
  }, [active]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAccordionGroup, {
    ref: elem => parent = elem === null || elem === void 0 ? void 0 : elem.parentElement,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccordionTitleWrapper, {
    active: active,
    onClick: onClick,
    tabIndex: active ? -1 : undefined,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wave",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccordionTitle, {
    active: active,
    title: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccordionContent, {
    width: contentWidth,
    "aria-hidden": !active || undefined,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, children));
};

/***/ }),

/***/ "./src/Startpage/LinkContainer/LinkContainer.tsx":
/*!*******************************************************!*\
  !*** ./src/Startpage/LinkContainer/LinkContainer.tsx ***!
  \*******************************************************/
/*! exports provided: LinkContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkContainer", function() { return LinkContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _Accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Accordion/Accordion */ "./src/Startpage/LinkContainer/Accordion/Accordion.tsx");
/* harmony import */ var _Settings_settingsHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Settings/settingsHandler */ "./src/Startpage/Settings/settingsHandler.ts");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/Startpage/LinkContainer/LinkContainer.tsx";




const LinkItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].a`
    width: fit-content;
    white-space: nowrap;
    position:relative;
    padding: 10px 0 10px 30px;
    font-size:1rem;

    ::before{
        position:absolute;
        left:0px;
        bottom:5px;
        z-index:0;
        content: "";
        height:5px;
        width:100%;
        background-color: var(--accent-color);
        transition:.5s;
        opacity:.7;
    }

    :hover, :focus {
        color: var(--accent-color2);
        animation:text-flicker 0.01s ease 0s infinite alternate;
        outline: none;
    }

`;
const LinkContainer = () => {
  const [active, setActive] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  let linkGroups = _Settings_settingsHandler__WEBPACK_IMPORTED_MODULE_3__["Links"].getWithFallback();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 12
    }
  }, linkGroups === null || linkGroups === void 0 ? void 0 : linkGroups.map((group, groupIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionGroup"], {
    key: "AccordionGroup" + groupIndex,
    active: active === groupIndex,
    title: group.title,
    onClick: () => setActive(groupIndex),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, group.links.map((link, linkIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkItem, {
    tabIndex: active !== groupIndex ? -1 : undefined,
    key: "LinkItem" + linkIndex,
    href: link.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, link.label)))));
};

/***/ }),

/***/ "./src/Startpage/Searchbar/Searchbar.tsx":
/*!***********************************************!*\
  !*** ./src/Startpage/Searchbar/Searchbar.tsx ***!
  \***********************************************/
/*! exports provided: Searchbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Searchbar", function() { return Searchbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _Settings_settingsHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Settings/settingsHandler */ "./src/Startpage/Settings/settingsHandler.ts");
/* harmony import */ var _data_pictures_google_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/pictures/google.svg */ "./src/data/pictures/google.svg");
/* harmony import */ var _data_pictures_google_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_pictures_google_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_pictures_duckduckgo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/pictures/duckduckgo.svg */ "./src/data/pictures/duckduckgo.svg");
/* harmony import */ var _data_pictures_duckduckgo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_pictures_duckduckgo_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_pictures_qwant_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/pictures/qwant.svg */ "./src/data/pictures/qwant.svg");
/* harmony import */ var _data_pictures_qwant_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_pictures_qwant_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/Startpage/Searchbar/Searchbar.tsx";






const StyledSearchbarContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    position: absolute;
    left: calc(100px - 2.9rem - 10px);
    right: 100px;
    bottom: 40px;
    height:min-content;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    `;
const StyledSearchbar = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].input`
    width: 100%;
    font-size: 30pt;
    
    background-color: rgba(0,0,0,0);
    color: var(--default-color);
    transition: .3s;
    border: none;
    border-bottom: 2px solid var(--default-color);
    opacity: 0.3;
    
    ::placeholder {
        color: var(--default-color);
    }
    
    :hover, :focus {
        opacity: 1;
        outline: none;
    }
`;
const SearchIcon = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    height: 2.9rem;
    width: 3.1rem;
    margin: auto 10px auto 0;

    background: var(--default-color);
    
    mask-size: cover;
    mask-image: url(${_ref => {
  let {
    src
  } = _ref;
  return src;
}});
`;
const Searchbar = () => {
  const searchSettings = _Settings_settingsHandler__WEBPACK_IMPORTED_MODULE_2__["Search"].getWithFallback();
  const engine = (searchSettings === null || searchSettings === void 0 ? void 0 : searchSettings.engine) || "duckduckgo.com/";
  let searchSymbol = _data_pictures_duckduckgo_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
  if (engine.startsWith("google")) searchSymbol = _data_pictures_google_svg__WEBPACK_IMPORTED_MODULE_3___default.a;else if (engine.startsWith("qwant")) searchSymbol = _data_pictures_qwant_svg__WEBPACK_IMPORTED_MODULE_5___default.a;

  const redirectToSearch = query => {
    if (searchSettings === null || searchSettings === void 0 ? void 0 : searchSettings.fastForward[query]) window.location.href = searchSettings.fastForward[query];else window.location.href = "https://" + engine + "?q=" + query;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSearchbarContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchIcon, {
    src: searchSymbol,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSearchbar, {
    placeholder: "Always stay clean!",
    type: "input",
    onKeyUp: e => e.which === 13 && redirectToSearch(e.currentTarget.value),
    autoFocus: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }));
};

/***/ }),

/***/ "./src/Startpage/Settings/Changelog/Changelog.tsx":
/*!********************************************************!*\
  !*** ./src/Startpage/Settings/Changelog/Changelog.tsx ***!
  \********************************************************/
/*! exports provided: Changelog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Changelog", function() { return Changelog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _data_changelog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/changelog */ "./src/data/changelog.ts");
/* harmony import */ var _data_pictures_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/pictures/logo.png */ "./src/data/pictures/logo.png");
/* harmony import */ var _data_pictures_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_pictures_logo_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/Startpage/Settings/Changelog/Changelog.tsx";




const ChangelogWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    > h1 {
        font-weight: 500;
    }
    > img {
        width: 180px;
        height: 180px;
    }
`;
const StyledVersion = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    width: 600px;
    > p {
        margin-bottom: 10px;
    }
`;
const ChangeItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].li`
    white-space: nowrap;
`;
const Changelog = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChangelogWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _data_pictures_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Changelog"), _data_changelog__WEBPACK_IMPORTED_MODULE_2__["changelog"].map(version => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Version, Object.assign({}, version, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 60
    }
  }))));
};

const Version = _ref => {
  let {
    version,
    description,
    changes
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledVersion, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "v", version), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, description), changes && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "Changes:"), changes === null || changes === void 0 ? void 0 : changes.map(change => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChangeItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 35
    }
  }, change)));
};

/***/ }),

/***/ "./src/Startpage/Settings/DesignSettings/DesignSettings.tsx":
/*!******************************************************************!*\
  !*** ./src/Startpage/Settings/DesignSettings/DesignSettings.tsx ***!
  \******************************************************************/
/*! exports provided: SettingButtonRow, DesignSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingButtonRow", function() { return SettingButtonRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignSettings", function() { return DesignSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _SettingsWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SettingsWindow */ "./src/Startpage/Settings/SettingsWindow.tsx");
/* harmony import */ var _components_OptionSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/OptionSlider */ "./src/components/OptionSlider.tsx");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Dropdown */ "./src/components/Dropdown.tsx");
/* harmony import */ var _components_OptionTextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/OptionTextInput */ "./src/components/OptionTextInput.tsx");
/* harmony import */ var _components_ColorPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ColorPicker */ "./src/components/ColorPicker.tsx");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/data */ "./src/data/data.ts");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/Startpage/Settings/DesignSettings/DesignSettings.tsx";









const DesignPreview = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    ${_ref => {
  let {
    colors
  } = _ref;
  return Object.keys(colors).map(key => key + `:` + colors[key]).toString().replaceAll(",", ";") + ";";
}}

    background-color: var(--bg-color);
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    border: 2px solid var(--accent-color);
    width: calc(100% - 400px);
    height: 100%;
    position: relative;
    ::before{
        content: "${_ref2 => {
  let {
    name
  } = _ref2;
  return name;
}}";
        color: var(--accent-color);
        position: absolute;
        top: 10px;
        left: 15px;
        font-size: 0.8rem;
    }
    ::after{
        content: "Design Preview";
        color: var(--accent-color);
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 0.8rem;
    }
    @media screen and (max-width: 1400px) {
        > img {width: 200px; height: 200px;}
        > div > div {
            width: 50px;
            height: 200px;
            > h2 {font-size: 1rem;}
            > .wave {
                width: 50px;
            }
        }
    }
    @media screen and (max-width: 1200px) {
        > img {width: 150px; height: 150px;}
        > div > div {
            width: 1rem;
            margin-left: 0.5rem;
            height: 150px;
            > h2 {font-size: 0.8rem;}
            > .wave {
                display: none;
            }
        }
    }
`;
const ImagePreview = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].img`
    margin: 10px; 
    height: 300px;
    width: 300px;
    border: 1px solid var(--default-color);
    padding: 5px;
    object-fit:cover;

    animation:circling-shadow-small 4s ease 0s infinite normal;
`;
const StyledAccordionPreview = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    border: 4px solid ${_ref3 => {
  let {
    colorVar
  } = _ref3;
  return `var(${colorVar})`;
}};
    height: 300px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    ::before {
        content: "";
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 100%;
        background-color: ${_ref4 => {
  let {
    colorVar
  } = _ref4;
  return `var(${colorVar})`;
}};
    }

   > .wave {
        width: 80px;
        height: 50px;
        position: absolute;
        top: 0px;
        overflow: hidden;
        ::before{
            content:"";
            width: 180px;
            height: 185px;
            position: absolute;
            top: -25%;
            left: 50%;
            margin-left: -90px;
            margin-top: -140px;
            border-radius: 37%;
            background: var(--bg-color);
            animation: wave 12s infinite cubic-bezier(0.71, 0.33, 0.33, 0.68);
        }
        @keyframes wave {
            from { transform: rotate(0deg);}
            from { transform: rotate(360deg);}
        }
    }
`;
const SectionDivider = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    width:calc(100% - 80px);
    padding: 20px 40px;
     position: relative;
    :before{
        content:"";
        width:calc(100% - 80px);
        position: absolute;
    }
`;
const AccordionPreviewTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].h2`
    transform: rotate(90deg);
    min-width: max-content;
    color: var(--bg-color);
    transition: .5s;
    letter-spacing: 5px;
`;
const AccordionPreviewContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    display: flex;
    justify-content: center;
    align-items:center;
    margin: 10px;
    > * {
        margin-left: 30px;
    }
`;
const SettingButtonRow = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    display: flex;
    justify-content: space-between;
`;

const AccordionPreview = _ref5 => {
  let {
    title,
    colorVar
  } = _ref5;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAccordionPreview, {
    colorVar: colorVar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wave",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccordionPreviewTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, title));
};

const DesignSettings = _ref6 => {
  let {
    design,
    setDesign,
    themes,
    setThemes
  } = _ref6;
  const [isNewDesign, setIsNewDesign] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const setName = name => setDesign({ ...design,
    name: name
  });

  const setColors = colors => setDesign({ ...design,
    colors: colors
  });

  const setImage = image => setDesign({ ...design,
    image: image
  }); // check if design does exist already


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let currTheme = themes.filter(theme => themeEquals(theme, design));

    if (currTheme.length > 0) {
      setIsNewDesign(false);
    } else if (!isNewDesign) {
      setIsNewDesign(true);
    }
  }, [design, themes]);

  const themeChange = themeName => {
    const newTheme = themes.filter(theme => theme.name === themeName);

    if (newTheme.length > 0) {
      setDesign(newTheme[0]);
    }
  };

  const addTheme = newTheme => {
    setThemes([...themes.filter(theme => theme.name !== newTheme.name), newTheme]);
  };

  const removeTheme = themeName => {
    setThemes(themes.filter(theme => theme.name !== themeName));
    if (themes.length > 0) themeChange(themes[0].name);
  };

  const themeExists = themeName => {
    return themes.filter(theme => theme.name === design.name).length > 0;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsWindow__WEBPACK_IMPORTED_MODULE_3__["StyledSettingsContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsWindow__WEBPACK_IMPORTED_MODULE_3__["SettingsLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  }, "Theme"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsWindow__WEBPACK_IMPORTED_MODULE_3__["SettingElement"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 21
    }
  }, themes && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
    value: design.name,
    items: themes.map(theme => ({
      label: theme.name,
      value: theme.name
    })),
    onChange: themeChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 36
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsWindow__WEBPACK_IMPORTED_MODULE_3__["SettingElement"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OptionTextInput__WEBPACK_IMPORTED_MODULE_6__["OptionTextInput"], {
    value: design.name,
    onChange: setName,
    placeholder: "Theme name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionDivider, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsWindow__WEBPACK_IMPORTED_MODULE_3__["SettingElement"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OptionTextInput__WEBPACK_IMPORTED_MODULE_6__["OptionTextInput"], {
    value: design.image,
    onChange: setImage,
    placeholder: "Image URL",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OptionSlider__WEBPACK_IMPORTED_MODULE_4__["OptionSlider"], {
    currentValue: design.image,
    values: _data_data__WEBPACK_IMPORTED_MODULE_8__["images"],
    onChange: setImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionDivider, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsWindow__WEBPACK_IMPORTED_MODULE_3__["SettingElement"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_7__["ColorPicker"], {
    colors: design.colors,
    setColors: setColors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionDivider, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsWindow__WEBPACK_IMPORTED_MODULE_3__["SettingElement"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SettingButtonRow, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsWindow__WEBPACK_IMPORTED_MODULE_3__["SettingsButton"], {
    onClick: () => addTheme(design),
    text: !themeExists(design.name) ? "Add Theme" : "Save Theme",
    icon: !themeExists(design.name) ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSave"],
    disabled: !isNewDesign ? true : undefined,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 29
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsWindow__WEBPACK_IMPORTED_MODULE_3__["SettingsButton"], {
    onClick: () => removeTheme(design.name),
    text: "Remove Theme",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMinus"],
    disabled: !themeExists(design.name),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 29
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DesignPreview, {
    name: design.name,
    colors: design.colors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImagePreview, {
    src: design.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccordionPreviewContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccordionPreview, {
    title: "Default",
    colorVar: "--default-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccordionPreview, {
    title: "Accent",
    colorVar: "--accent-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccordionPreview, {
    title: "Accent 2",
    colorVar: "--accent-color2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 21
    }
  }))));
};

const themeEquals = (theme1, theme2) => {
  let isEqual = true;
  if (theme1.name !== theme2.name) isEqual = false;
  if (theme1.image !== theme2.image) isEqual = false;
  Object.keys(theme1.colors).forEach(key => {
    if (theme1.colors[key] !== theme2.colors[key]) isEqual = false;
  });
  return isEqual;
};

/***/ }),

/***/ "./src/Startpage/Settings/LinkSettings/LinkSettings.tsx":
/*!**************************************************************!*\
  !*** ./src/Startpage/Settings/LinkSettings/LinkSettings.tsx ***!
  \**************************************************************/
/*! exports provided: GeneralSettingsContent, LinkSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingsContent", function() { return GeneralSettingsContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkSettings", function() { return LinkSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _SettingsWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SettingsWindow */ "./src/Startpage/Settings/SettingsWindow.tsx");
/* harmony import */ var _OptionTextArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OptionTextArea */ "./src/Startpage/Settings/LinkSettings/OptionTextArea.tsx");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/Startpage/Settings/LinkSettings/LinkSettings.tsx";




const GeneralSettingsContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    width: 100%;
`;
const LinkSettings = _ref => {
  let {
    linkGroups,
    setLinkGroups
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GeneralSettingsContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsWindow__WEBPACK_IMPORTED_MODULE_2__["SettingsLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Links"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OptionTextArea__WEBPACK_IMPORTED_MODULE_3__["OptionTextArea"], {
    onChange: setLinkGroups,
    initialValue: linkGroups,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }));
};

/***/ }),

/***/ "./src/Startpage/Settings/LinkSettings/OptionTextArea.tsx":
/*!****************************************************************!*\
  !*** ./src/Startpage/Settings/LinkSettings/OptionTextArea.tsx ***!
  \****************************************************************/
/*! exports provided: OptionTextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionTextArea", function() { return OptionTextArea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _settingsHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settingsHandler */ "./src/Startpage/Settings/settingsHandler.ts");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/Startpage/Settings/LinkSettings/OptionTextArea.tsx";



const StyledOptionTextArea = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    position: relative;
    border: 2px solid var(--default-color);
    display:flex;
    padding: 10px 0 10px 20px;
    height: calc(100% - 40px);
    ${_ref => {
  let {
    error
  } = _ref;
  return error && `
        ::after{
            content: "${error}";
            color: var(--accent-color);
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 0.8rem;
        }
    `;
}}
`;
const StyledTextArea = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].textarea`
    background-color: var(--bg-color);
    color: var(--default-color);
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    resize: none;
`;
const placeholder = JSON.stringify([{
  title: "Title",
  links: [{
    label: "label",
    value: "url"
  }, {
    label: "label",
    value: "url"
  }, {
    label: "label",
    value: "url"
  }]
}], null, 2);

const getLinksAsString = () => {
  // try to do usual parse
  try {
    const parseLinks = localStorage.getItem("link-groups");
    if (!!parseLinks) return JSON.stringify(_settingsHandler__WEBPACK_IMPORTED_MODULE_2__["Links"].parse(parseLinks), null, 2);
  } catch {} // try to parse broken json


  const links = _settingsHandler__WEBPACK_IMPORTED_MODULE_2__["Links"].getRaw();

  if (links) {
    return links.replaceAll(':[{', ':[\n      {\n').replaceAll('[{"', '[\n  {\n"').replaceAll('}]}]', '}]\n  }\n]').replaceAll(']},{', '\n  },\n  {\n').replaceAll('},{', '\n      },\n      {\n').replaceAll('"}]', '"\n      }\n    ]').replaceAll('"title":', '    "title":').replaceAll('"links":', '\n    "links":').replaceAll('"label":', '        "label":').replaceAll('"value":', '\n        "value":');
  } //Last possible option


  return JSON.stringify(_settingsHandler__WEBPACK_IMPORTED_MODULE_2__["Links"].getWithFallback(), null, 2);
};

const OptionTextArea = _ref2 => {
  let {
    initialValue,
    onChange
  } = _ref2;
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getLinksAsString());

  const tryOnChangeEvent = linkGroups => {
    setValue(linkGroups);

    try {
      const parsedData = _settingsHandler__WEBPACK_IMPORTED_MODULE_2__["Links"].parse(linkGroups);
      setError(undefined);
      onChange(parsedData);
    } catch {
      setError("Your links are not parseable. Probably you have a Syntax Error?");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledOptionTextArea, {
    error: error,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTextArea, {
    onChange: e => tryOnChangeEvent(e.currentTarget.value),
    placeholder: placeholder,
    value: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }));
};

/***/ }),

/***/ "./src/Startpage/Settings/SearchSettings/FastForwardSearch.tsx":
/*!*********************************************************************!*\
  !*** ./src/Startpage/Settings/SearchSettings/FastForwardSearch.tsx ***!
  \*********************************************************************/
/*! exports provided: FastForwardItem, FastForwardAddItem, FastForwardSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastForwardItem", function() { return FastForwardItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastForwardAddItem", function() { return FastForwardAddItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastForwardSearch", function() { return FastForwardSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/IconButton */ "./src/components/IconButton.tsx");
/* harmony import */ var _components_OptionTextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/OptionTextInput */ "./src/components/OptionTextInput.tsx");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/Startpage/Settings/SearchSettings/FastForwardSearch.tsx";





const FastForwardWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    margin-bottom: 20px;
    display: flex;
    @media screen and (max-width: 1300px) {
        flex-direction: column;
    }
`;
const FastForwardTable = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].table`
    width: 50%;
    padding: 0 20px;
    @media screen and (max-width: 1300px) {
        width: 100%;
    }
`;
const StyledFastForwardItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].tr`
    > td {
        padding: 10px 0;
        overflow: hidden;
        white-space: nowrap;
    }
    > :first-of-type { max-width: 100px; }
    > :nth-of-type(3) {max-width: 300px; }
    > :last-of-type { width: 50px; }
`;
const AddItemButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_IconButton__WEBPACK_IMPORTED_MODULE_3__["IconButton"])`
    font-size: 1rem;
    display: inline;
`;
const AddItemTextField = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_OptionTextInput__WEBPACK_IMPORTED_MODULE_4__["OptionTextInput"])`
    width: calc(100% - 50px)
`;
const FastForwardItem = _ref => {
  let {
    value,
    url,
    deleteThis
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledFastForwardItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    title: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, `"${value}"`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "\xA0:\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    title: url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, `"${url}"`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_IconButton__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"],
    onClick: () => deleteThis(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 18
    }
  })));
};
const FastForwardAddItem = _ref2 => {
  let {
    add
  } = _ref2;
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [url, setUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledFastForwardItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddItemTextField, {
    value: value,
    onChange: newValue => setValue(newValue),
    placeholder: "search string",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "\xA0:\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddItemTextField, {
    value: url,
    onChange: newUrl => setUrl(newUrl),
    placeholder: "destination",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddItemButton, {
    disabled: !value || !url,
    onClick: () => value && url && add(value, url),
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  })));
};
const FastForwardSearch = _ref3 => {
  let {
    links,
    onChange
  } = _ref3;

  const deleteValue = value => {
    const copy = { ...links
    };
    delete copy[value];
    onChange({ ...copy
    });
  };

  const addValue = (value, url) => {
    const copy = { ...links
    };
    copy[value] = url;
    onChange({ ...copy
    });
  };

  const table = Object.keys(links).sort().map(value => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FastForwardItem, {
    key: value,
    value: value,
    url: links[value],
    deleteThis: () => deleteValue(value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }));
  const tableLeft = [...table].splice(0, table.length / 2 + table.length % 2);
  const tableRight = [...table].splice(table.length / 2 + table.length % 2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FastForwardWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FastForwardTable, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, tableLeft)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FastForwardTable, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, tableRight))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FastForwardTable, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FastForwardAddItem, {
    add: addValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 22
    }
  }))));
};

/***/ }),

/***/ "./src/Startpage/Settings/SearchSettings/SearchSettings.tsx":
/*!******************************************************************!*\
  !*** ./src/Startpage/Settings/SearchSettings/SearchSettings.tsx ***!
  \******************************************************************/
/*! exports provided: SearchSettingsContent, SearchSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSettingsContent", function() { return SearchSettingsContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSettings", function() { return SearchSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _SettingsWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SettingsWindow */ "./src/Startpage/Settings/SettingsWindow.tsx");
/* harmony import */ var _components_OptionSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/OptionSlider */ "./src/components/OptionSlider.tsx");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/data */ "./src/data/data.ts");
/* harmony import */ var _FastForwardSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FastForwardSearch */ "./src/Startpage/Settings/SearchSettings/FastForwardSearch.tsx");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/Startpage/Settings/SearchSettings/SearchSettings.tsx";






const SearchSettingsContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    width: 100%;
    overflow-y: auto;
`;
const SearchSettings = _ref => {
  let {
    searchSettings,
    setSearchSettings
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchSettingsContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsWindow__WEBPACK_IMPORTED_MODULE_2__["SettingsLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Searchbar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsWindow__WEBPACK_IMPORTED_MODULE_2__["SettingElement"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OptionSlider__WEBPACK_IMPORTED_MODULE_3__["OptionSlider"], {
    currentValue: searchSettings.engine,
    values: _data_data__WEBPACK_IMPORTED_MODULE_4__["searchEngines"],
    onChange: engine => setSearchSettings({ ...searchSettings,
      engine: engine
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsWindow__WEBPACK_IMPORTED_MODULE_2__["SettingsLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Fast Forward Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FastForwardSearch__WEBPACK_IMPORTED_MODULE_5__["FastForwardSearch"], {
    links: searchSettings.fastForward,
    onChange: fastForward => setSearchSettings({ ...searchSettings,
      fastForward: fastForward
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }));
};

/***/ }),

/***/ "./src/Startpage/Settings/Settings.tsx":
/*!*********************************************!*\
  !*** ./src/Startpage/Settings/Settings.tsx ***!
  \*********************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _SettingsWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingsWindow */ "./src/Startpage/Settings/SettingsWindow.tsx");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/Startpage/Settings/Settings.tsx";





const SettingsPopupToggle = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].button`
	position: fixed;
	top: 20px;
	right: 20px;
	font-size: 20px;

	color: var(--default-color);
    background-color: transparent;
    border: none;
	opacity: 0.3;

	cursor: pointer;
	transition: .3s;

    :hover{
        opacity: .5;
        color: var(--accent-color2);
        animation: box-flicker 0.01s ease 0s infinite alternate;
    }
    :focus{
        outline: none;
    }
`;
const PopupCover = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div`
    position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
    background-color: var(--bg-color);
    opacity: 0.7;
`;
const Settings = () => {
  const [showSettings, setShowSettings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const hidePopup = () => setShowSettings(false);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SettingsPopupToggle, {
    onClick: () => setShowSettings(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSlidersH"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  })), showSettings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PopupCover, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsWindow__WEBPACK_IMPORTED_MODULE_4__["SettingsWindow"], {
    hidePopup: hidePopup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  })));
};

/***/ }),

/***/ "./src/Startpage/Settings/SettingsWindow.tsx":
/*!***************************************************!*\
  !*** ./src/Startpage/Settings/SettingsWindow.tsx ***!
  \***************************************************/
/*! exports provided: StyledSettingsContent, SettingsLabel, SettingElement, SettingsButton, SettingsWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSettingsContent", function() { return StyledSettingsContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsLabel", function() { return SettingsLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingElement", function() { return SettingElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsButton", function() { return SettingsButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsWindow", function() { return SettingsWindow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _settingsHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settingsHandler */ "./src/Startpage/Settings/settingsHandler.ts");
/* harmony import */ var _components_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/IconButton */ "./src/components/IconButton.tsx");
/* harmony import */ var _LinkSettings_LinkSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinkSettings/LinkSettings */ "./src/Startpage/Settings/LinkSettings/LinkSettings.tsx");
/* harmony import */ var _SearchSettings_SearchSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchSettings/SearchSettings */ "./src/Startpage/Settings/SearchSettings/SearchSettings.tsx");
/* harmony import */ var _DesignSettings_DesignSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DesignSettings/DesignSettings */ "./src/Startpage/Settings/DesignSettings/DesignSettings.tsx");
/* harmony import */ var _Changelog_Changelog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Changelog/Changelog */ "./src/Startpage/Settings/Changelog/Changelog.tsx");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/Startpage/Settings/SettingsWindow.tsx";









const StyledSettingsWindow = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    background-color: var(--bg-color);
    position: absolute;

    top: var(--settings-window-gap);
    right: var(--settings-window-gap);
    bottom: var(--settings-window-gap);
    left: var(--settings-window-gap);

    border: 2px solid var(--default-color);
    padding: 60px 30px 30px 30px;
    box-shadow: 10px 10px 0px var(--accent-color);
`;
const WindowContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    width: 100%;
    height: calc(100% - 80px);
    display:flex;
`;
const WindowHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    ::before{
        content:"Settings";
        margin: 5px 20px 0 10px;
    }
    color: var(--bg-color);
    background-color: var(--default-color);
    width:100%;
    height: 32px;
    position:absolute;
    left:0;
    top:0;
    display:flex;
    justify-content: space-between;
`;
const WindowFooter = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    display:flex;
    justify-content: space-between;
    position:absolute;
    left:30px;
    right:30px;
    bottom:30px;
`;
const StyledSettingsContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    background-color: var(--bg-color);
    width:400px;
    height:100%;
    margin-right:30px;
    padding-right:20px;
    overflow-y: auto;
`;
const SettingsLabel = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].p`
    font-size: 1rem;
    padding: 10px 0;
`;
const SettingElement = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    background-color: var(--bg-color);
    position: relative;
    padding: 10px 0px;
    + {
        margin-top:15px;
    }
`;
const CloseButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_IconButton__WEBPACK_IMPORTED_MODULE_4__["IconButton"])`
    z-index:15;
    height:30px;
    opacity: 1;
    padding:0;
`;
const SettingsButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_IconButton__WEBPACK_IMPORTED_MODULE_4__["IconButton"])`
    background-color: var(--default-color);
    color: var(--bg-color);
    font-size: 1rem;
    padding: 10px 20px;
    :enabled:hover{
        animation: circling-shadow-small 2s ease 0s infinite normal;
    }
`;
const Tabbar = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
const TabOption = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    font-size: 1rem;
    font-weight: 500;
    transition: .3s;
    height: 100%;
    min-width: 150px;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: ${_ref => {
  let {
    active
  } = _ref;
  return active ? "default" : "pointer";
}};
    ${_ref2 => {
  let {
    active
  } = _ref2;
  return active && "text-shadow: var(--text-shadow-downwards)";
}};
    :hover {
        text-shadow: var(--text-shadow-downwards);
    }
`;
const TabOptions = ["Links", "Appearance", "Searchbar", "Changelog"];
const SettingsWindow = _ref3 => {
  let {
    hidePopup
  } = _ref3;
  const [currentTab, setCurrentTab] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(TabOptions[0]);
  const [design, setDesign] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_settingsHandler__WEBPACK_IMPORTED_MODULE_3__["Design"].getWithFallback());
  const [themes, setThemes] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_settingsHandler__WEBPACK_IMPORTED_MODULE_3__["Themes"].getWithFallback());
  const [linkGroups, setLinkGroups] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_settingsHandler__WEBPACK_IMPORTED_MODULE_3__["Links"].getWithFallback());
  const [searchSettings, setSearchSettings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_settingsHandler__WEBPACK_IMPORTED_MODULE_3__["Search"].getWithFallback());

  const applyValues = () => {
    _settingsHandler__WEBPACK_IMPORTED_MODULE_3__["Design"].set(design);
    _settingsHandler__WEBPACK_IMPORTED_MODULE_3__["Themes"].set(themes);
    _settingsHandler__WEBPACK_IMPORTED_MODULE_3__["Search"].set(searchSettings);
    _settingsHandler__WEBPACK_IMPORTED_MODULE_3__["Links"].set(linkGroups);
    window.location.reload(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSettingsWindow, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WindowHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tabbar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, TabOptions.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabOption, {
    key: option,
    active: option === currentTab,
    onClick: () => setCurrentTab(option),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }, option))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CloseButton, {
    inverted: true,
    onClick: () => hidePopup(),
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WindowContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, currentTab === "Links" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkSettings_LinkSettings__WEBPACK_IMPORTED_MODULE_5__["LinkSettings"], {
    linkGroups: linkGroups,
    setLinkGroups: setLinkGroups,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 21
    }
  }), currentTab === "Appearance" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DesignSettings_DesignSettings__WEBPACK_IMPORTED_MODULE_7__["DesignSettings"], {
    design: design,
    setDesign: setDesign,
    themes: themes,
    setThemes: setThemes,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }), currentTab === "Searchbar" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchSettings_SearchSettings__WEBPACK_IMPORTED_MODULE_6__["SearchSettings"], {
    searchSettings: searchSettings,
    setSearchSettings: setSearchSettings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 21
    }
  }), currentTab === "Changelog" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Changelog_Changelog__WEBPACK_IMPORTED_MODULE_8__["Changelog"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 48
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WindowFooter, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SettingsButton, {
    onClick: () => applyValues(),
    text: "Apply Changes",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSave"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SettingsButton, {
    onClick: () => {
      window.location.reload(false);
    },
    text: "Discard Changes",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFire"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SettingsButton, {
    onClick: () => {
      localStorage.clear();
      window.location.reload(false);
    },
    text: "Delete All Settings",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  })));
};

/***/ }),

/***/ "./src/Startpage/Settings/settingsHandler.ts":
/*!***************************************************!*\
  !*** ./src/Startpage/Settings/settingsHandler.ts ***!
  \***************************************************/
/*! exports provided: Search, Links, Design, Themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Design", function() { return Design; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Themes", function() { return Themes; });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/data */ "./src/data/data.ts");

const Search = {
  get: () => {
    const lsSearch = localStorage.getItem("search-settings");
    if (!!lsSearch) return Search.parse(lsSearch);
    return undefined;
  },
  getWithFallback: () => {
    try {
      return Search.get() || _data_data__WEBPACK_IMPORTED_MODULE_0__["searchSettings"];
    } catch {
      console.error("Your currently applied search settings appear to be corrupted.");
      return _data_data__WEBPACK_IMPORTED_MODULE_0__["searchSettings"];
    }
  },
  set: searchSettings => localStorage.setItem("search-settings", JSON.stringify(searchSettings)),
  parse: searchSettings => JSON.parse(searchSettings)
};
const Links = {
  getRaw: () => localStorage.getItem("link-groups"),
  get: () => {
    const lsLinks = localStorage.getItem("link-groups");
    if (!!lsLinks) return Links.parse(lsLinks);
    return undefined;
  },
  getWithFallback: () => {
    try {
      return Links.get() || _data_data__WEBPACK_IMPORTED_MODULE_0__["links"];
    } catch {
      console.error("Your currently applied links appear to be corrupted.");
      return _data_data__WEBPACK_IMPORTED_MODULE_0__["links"];
    }
  },
  set: themes => localStorage.setItem("link-groups", JSON.stringify(themes)),
  parse: linkGroups => JSON.parse(linkGroups)
};
const Design = {
  get: () => {
    const lsDesign = localStorage.getItem("design");
    if (!!lsDesign) return Themes.parse(lsDesign);
    return undefined;
  },
  getWithFallback: () => {
    try {
      return Design.get() || _data_data__WEBPACK_IMPORTED_MODULE_0__["themes"][0];
    } catch {
      console.error("Your currently applied design appears to be corrupted.");
      return _data_data__WEBPACK_IMPORTED_MODULE_0__["themes"][0];
    }
  },
  set: design => localStorage.setItem("design", JSON.stringify(design))
};
const Themes = {
  get: () => {
    const lsThemes = localStorage.getItem("themes");
    if (!!lsThemes) return JSON.parse(lsThemes);
    return undefined;
  },
  getWithFallback: () => {
    try {
      return Themes.get() || _data_data__WEBPACK_IMPORTED_MODULE_0__["themes"];
    } catch {
      console.error("Your currently applied themes appear to be corrupted.");
      return _data_data__WEBPACK_IMPORTED_MODULE_0__["themes"];
    }
  },
  set: themes => localStorage.setItem("themes", JSON.stringify(themes)),
  add: theme => {
    const lsThemes = Themes.get();
    if (lsThemes) Themes.set([...lsThemes, theme]);else Themes.set([theme]);
  },
  remove: name => {
    const lsThemes = Themes.get();
    if (lsThemes) Themes.set(lsThemes.filter(theme => theme.name !== name));
  },
  parse: theme => JSON.parse(theme)
};

/***/ }),

/***/ "./src/Startpage/Startpage.tsx":
/*!*************************************!*\
  !*** ./src/Startpage/Startpage.tsx ***!
  \*************************************/
/*! exports provided: Startpage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Startpage", function() { return Startpage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _Settings_settingsHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings/settingsHandler */ "./src/Startpage/Settings/settingsHandler.ts");
/* harmony import */ var _LinkContainer_LinkContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkContainer/LinkContainer */ "./src/Startpage/LinkContainer/LinkContainer.tsx");
/* harmony import */ var _Searchbar_Searchbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Searchbar/Searchbar */ "./src/Startpage/Searchbar/Searchbar.tsx");
/* harmony import */ var _Settings_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Settings/Settings */ "./src/Startpage/Settings/Settings.tsx");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/data */ "./src/data/data.ts");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/Startpage/Startpage.tsx";







const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    max-width:1920px;
    height:100%;
    margin: auto;
    position: relative;
`;
const StyledStartpage = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    padding:0px 100px;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items:center;
    height:calc(100% - 100px);
`;
const Image = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].img`
    height:400px;
    width:400px;
    border: 2px solid var(--default-color);
    padding: 10px;
    object-fit:cover;

    animation:circling-shadow 4s ease 0s infinite normal;
`;
const Startpage = () => {
  const [img, setImg] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_Settings_settingsHandler__WEBPACK_IMPORTED_MODULE_2__["Design"].getWithFallback().image);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStartpage, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: img,
    onError: () => setImg(_data_data__WEBPACK_IMPORTED_MODULE_6__["images"][0].value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkContainer_LinkContainer__WEBPACK_IMPORTED_MODULE_3__["LinkContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Searchbar_Searchbar__WEBPACK_IMPORTED_MODULE_4__["Searchbar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Settings_Settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }));
};

/***/ }),

/***/ "./src/base/FiraCode-Light.woff":
/*!**************************************!*\
  !*** ./src/base/FiraCode-Light.woff ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/FiraCode-Light.6214fef2.woff";

/***/ }),

/***/ "./src/base/FiraCode-Regular.woff":
/*!****************************************!*\
  !*** ./src/base/FiraCode-Regular.woff ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/FiraCode-Regular.3da66ca1.woff";

/***/ }),

/***/ "./src/base/index.css":
/*!****************************!*\
  !*** ./src/base/index.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/base/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/base/index.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/base/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/base/variables.css":
/*!********************************!*\
  !*** ./src/base/variables.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./variables.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/base/variables.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./variables.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/base/variables.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./variables.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/base/variables.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/ColorPicker.tsx":
/*!****************************************!*\
  !*** ./src/components/ColorPicker.tsx ***!
  \****************************************/
/*! exports provided: ColorPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return ColorPicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/es/index.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data */ "./src/data/data.ts");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/components/ColorPicker.tsx";




const ColorPickerContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    display: flex;
    > div {
        padding: 0 10px;
        width: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
const ColorOption = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    width: 100%;
    padding: 5px 0;
    cursor: pointer;
    opacity: ${_ref => {
  let {
    active
  } = _ref;
  return !active && "0.7";
}};
    color: ${_ref2 => {
  let {
    active
  } = _ref2;
  return active && "var(--accent-color)";
}};
    :hover {
        color: var(--accent-color2);
        animation:text-flicker 0.01s ease 0s infinite alternate;
    }
`;
const StyledMaterialPicker = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    > div * {
        background-color: var(--bg-color)!important;
        color: var(--default-color)!important;
        box-shadow: none;
    }
    > div{
        border: 2px solid var(--default-color);
    }
`;
const ColorPicker = _ref3 => {
  let {
    colors,
    setColors
  } = _ref3;
  const [currentColor, setCurrentColor] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object.keys(_data_data__WEBPACK_IMPORTED_MODULE_3__["themes"][0].colors)[0]);

  const handleChange = result => {
    let tmp = { ...colors
    };
    tmp[currentColor] = result.hex;
    setColors(tmp);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorPickerContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, Object.keys(colors).map(key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorOption, {
    key: key,
    active: key === currentColor,
    onClick: () => setCurrentColor(key),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, key))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMaterialPicker, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_2__["MaterialPicker"], {
    color: colors[currentColor],
    onChange: color => color && handleChange(color),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  })));
};

/***/ }),

/***/ "./src/components/Dropdown.tsx":
/*!*************************************!*\
  !*** ./src/components/Dropdown.tsx ***!
  \*************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconButton */ "./src/components/IconButton.tsx");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/components/Dropdown.tsx";




const DropdownWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    position: relative;
    height: 40px;
`;
const DropdownButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_IconButton__WEBPACK_IMPORTED_MODULE_3__["IconButton"])`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 40px;
    width: calc(100% + 4px);
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
    padding:10px 20px;
    border: 2px solid var(--default-color);
    background-color: var(--bg-color);

    :enabled:hover, :focus, :hover {
        animation:none;
        opacity: 1;
    }
	font-size: initial;
    z-index: 10;
`;
const DropdownPopup = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    height: ${_ref => {
  let {
    height
  } = _ref;
  return height + "px";
}};
    position: absolute;
    left: 4px;
    top: 40px;
    width: calc(100% - 3px);
    background-color: var(--bg-color);
    overflow: hidden;
    z-index: 9;
    animation: box-flicker 0.01s ease 0s infinite alternate;
    transition: ${_ref2 => {
  let {
    items
  } = _ref2;
  return items * 0.1 + "s";
}};
    > div {
        padding-top: 5px;
        display: flex;
        flex-direction: column;
    }
`;
const DropdownItem = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_IconButton__WEBPACK_IMPORTED_MODULE_3__["IconButton"])`
    margin: 0;
    padding: 10px 20px;
    justify-content: flex-start;
    font-size: initial;
    :enabled:hover {
        animation:none;
        opacity: 1;
        background-color: var(--default-color);
        color: var(--bg-color);
    }
`;
const Dropdown = _ref3 => {
  let {
    items,
    onChange,
    value
  } = _ref3;
  const [popupHeight, setPopupHeight] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [hasBlur, setHasBlur] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const getCurrentLabel = () => {
    const current = items.filter(item => item.value === value);
    if (current.length > 0) return current[0].label;else return value;
  };

  const handleChange = value => {
    onChange(value);
    setHasBlur(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownButton, {
    text: getCurrentLabel(),
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleDown"],
    onClick: () => setHasBlur(!hasBlur),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownPopup, {
    height: hasBlur ? popupHeight : 0,
    items: items.length,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onBlur: () => setHasBlur(false),
    ref: elem => setPopupHeight((elem === null || elem === void 0 ? void 0 : elem.clientHeight) || 0),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownItem, {
    onClick: () => handleChange(item.value),
    key: item.value,
    text: item.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  })))));
};

/***/ }),

/***/ "./src/components/IconButton.tsx":
/*!***************************************!*\
  !*** ./src/components/IconButton.tsx ***!
  \***************************************/
/*! exports provided: IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/components/IconButton.tsx";



const StyledIconButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    color: ${_ref => {
  let {
    inverted
  } = _ref;
  return inverted ? "var(--bg-color)" : "var(--default-color)";
}};
    background-color: transparent;
    min-width:50px;
	font-size: 20px;
    border: none;
	opacity: 0.7;
	cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    :enabled:hover{
        ${_ref2 => {
  let {
    inverted
  } = _ref2;
  return inverted ? `filter: 
            drop-shadow(2px 2px 0 var(--accent-color))
            drop-shadow(-2px -2px 0 var(--accent-color))
            drop-shadow(-2px 2px 0 var(--accent-color))
            drop-shadow(2px -2px 0 var(--accent-color))` : "animation: box-flicker 0.01s ease 0s infinite alternate";
}};
    }
    :focus{
        outline: none;
    }
    :disabled{
        opacity: 0.2;
        cursor: default;
    }

    > span{
        padding-right:10px;
    }
`;
const IconButton = _ref3 => {
  let {
    icon,
    text,
    children,
    ...props
  } = _ref3;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledIconButton, Object.assign({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 12
    }
  }), children && children, text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 18
    }
  }, text), icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 18
    }
  }));
};

/***/ }),

/***/ "./src/components/OptionSlider.tsx":
/*!*****************************************!*\
  !*** ./src/components/OptionSlider.tsx ***!
  \*****************************************/
/*! exports provided: OptionSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionSlider", function() { return OptionSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconButton */ "./src/components/IconButton.tsx");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/components/OptionSlider.tsx";




const SliderWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    height: 20px;
    display: flex;
    flex-direction: row;
    padding:5px 0;
    > span {
        min-width: 100px;
        display: flex;
        justify-content: center;
    }
`;
const OptionSlider = _ref => {
  var _values$index;

  let {
    values,
    onChange,
    currentValue
  } = _ref;
  const [index, setIndex] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    values.forEach((val, i) => {
      currentValue === val.value && i !== index && setIndex(i);
    });
  }, [currentValue, values, index]);

  const handleChange = newIndex => {
    var _values$newIndex;

    setIndex(newIndex);
    onChange((_values$newIndex = values[newIndex]) === null || _values$newIndex === void 0 ? void 0 : _values$newIndex.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SliderWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    disabled: index <= 0,
    onClick: () => {
      handleChange(index - 1);
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleLeft"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, (_values$index = values[index]) === null || _values$index === void 0 ? void 0 : _values$index.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    disabled: index >= values.length - 1,
    onClick: () => handleChange(index + 1),
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleRight"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }));
};

/***/ }),

/***/ "./src/components/OptionTextInput.tsx":
/*!********************************************!*\
  !*** ./src/components/OptionTextInput.tsx ***!
  \********************************************/
/*! exports provided: OptionTextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionTextInput", function() { return OptionTextInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/components/OptionTextInput.tsx";


const StyledInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].input`
    border: 2px solid var(--default-color);
    width: calc(100% - 40px);
    height: 100%;
    padding: 10px 20px;
    background-color: var(--bg-color);
    color: var(--default-color);
    outline:none;
    opacity:0.5;
    :enabled:hover, :focus{
        opacity:1;
    }
    
`;
const OptionTextInput = _ref => {
  let {
    onChange,
    ...props
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput, Object.assign({
    type: "text",
    onChange: e => onChange(e.currentTarget.value)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }));
};

/***/ }),

/***/ "./src/data/changelog.ts":
/*!*******************************!*\
  !*** ./src/data/changelog.ts ***!
  \*******************************/
/*! exports provided: changelog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changelog", function() { return changelog; });
const changelog = [{
  version: "0.4.2",
  changes: ["Enhanced responsiveness for large screens", "Internal stuff"]
}, {
  version: "0.4.1",
  changes: ["Enhanced stability of the settings (I am pretty sure about it this time!!!)", "Fixed a bug with the link editor I introduced before"]
}, {
  version: "0.4.0",
  changes: ["Added fast forward search", "Fixed a bug which prevented the link editor to load your data", "Enhanced responsiveness", "Added some more default data"]
}, {
  version: "0.3.0",
  description: "This update was hell for me, fucking themes took me way too long and I needed to restructure all the internal design data.Also oof, had so many bugs caused by the not existing peresistence of my data. Hope you enjoy it!",
  changes: ["Added theme management"]
}, {
  version: "0.2.1",
  changes: ["Optimized keyboard control", "Restructured settings"]
}, {
  version: "0.2.0",
  changes: ["Added this changelog", "Added tabs in settings", "Added design preview", 'Added "Discard Changes" button in settings', "Added project logo", "Changed structure of settings", "I think I enhanced stability overall a bit"]
}, {
  version: "0.1.0",
  description: "The initial state of this project."
}];

/***/ }),

/***/ "./src/data/data.ts":
/*!**************************!*\
  !*** ./src/data/data.ts ***!
  \**************************/
/*! exports provided: links, images, searchEngines, searchSettings, themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "links", function() { return links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "images", function() { return images; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchEngines", function() { return searchEngines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSettings", function() { return searchSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
/* harmony import */ var _pictures_head_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pictures/head.png */ "./src/data/pictures/head.png");
/* harmony import */ var _pictures_head_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pictures_head_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pictures_pic_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pictures/pic_2.jpg */ "./src/data/pictures/pic_2.jpg");
/* harmony import */ var _pictures_pic_2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pictures_pic_2_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pictures_pic_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pictures/pic_3.jpg */ "./src/data/pictures/pic_3.jpg");
/* harmony import */ var _pictures_pic_3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pictures_pic_3_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pictures_pic_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pictures/pic_4.jpg */ "./src/data/pictures/pic_4.jpg");
/* harmony import */ var _pictures_pic_4_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pictures_pic_4_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pictures_pic_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pictures/pic_5.jpg */ "./src/data/pictures/pic_5.jpg");
/* harmony import */ var _pictures_pic_5_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pictures_pic_5_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pictures_pic_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pictures/pic_6.jpg */ "./src/data/pictures/pic_6.jpg");
/* harmony import */ var _pictures_pic_6_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pictures_pic_6_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pictures_pic_7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pictures/pic_7.jpg */ "./src/data/pictures/pic_7.jpg");
/* harmony import */ var _pictures_pic_7_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pictures_pic_7_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pictures_pic_8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pictures/pic_8.png */ "./src/data/pictures/pic_8.png");
/* harmony import */ var _pictures_pic_8_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pictures_pic_8_png__WEBPACK_IMPORTED_MODULE_7__);









/*
──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀▀▀▌
───▄▄██▌█ BEEP BEEP
▄▄▄▌▐██▌█ GAY PORN DELIVERY
███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄​▄▄▄▄▄▄▌
▀(@)▀▀▀▀▀▀▀(@)(@)▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀(@)▀
*/
const links = [{
  title: "Reddit",
  links: [{
    label: "r/minecraft",
    value: "https://r.acay.me/r/minecraft/"
  }, {
    label: "r/unixporn",
    value: "https://r.acay.me/r/unixporn/"
  }, {
    label: "r/anime",
    value: "https://r.acay.me/r/anime/"
  }, {
    label: "r/cats",
    value: "https://r.acay.me/r/cats/"
  }]
}, {
  title: "Avenir",
  links: [{
    label: "Search",
    value: "https://s.acay.me/"
  }, {
    label: "Reddit",
    value: "https://r.acay.me/"
  }, {
    label: "Imgur",
    value: "https://i.acay.me"
  }, {
    label: "Translate",
    value: "https://t.acay.me"
  }]
}, {
  title: "Design",
  links: [{
    label: "PixlrX",
    value: "https://pixlr.com/x/"
  }, {
    label: "AI Image Enlarger",
    value: "https://bigjpg.com/en"
  }, {
    label: "Img to Svg Converter",
    value: "https://picsvg.com/"
  }, {
    label: "Affinity",
    value: "https://affinity.serif.com/en-us/tutorials/designer/desktop/"
  }, {
    label: "Affinity - YT",
    value: "https://www.youtube.com/c/AffinityRevolution/playlists"
  }]
}, {
  title: "Music",
  links: [{
    label: "i wanna be a cowboy",
    value: "https://www.youtube.com/watch?v=8zWz92f_HGs"
  }, {
    label: "let the bodies hit the floor",
    value: "https://www.youtube.com/watch?v=b--VKaCB9u0"
  }, {
    label: "Nobody Kanna Cross It",
    value: "https://www.youtube.com/watch?v=2wqTnwJGvtc"
  }, {
    label: "Smug Dancin",
    value: "https://www.youtube.com/watch?v=eNZ9Od1jQ4Q"
  }, {
    label: "Utamaru - The Sanctified Mind Cover",
    value: "https://www.youtube.com/watch?v=MHlJKLlS07U"
  }]
}, {
  title: "Sauce",
  links: [{
    label: "Pictures - DeathAndMilk",
    value: "https://www.instagram.com/deathandmilk_/"
  }, {
    label: "Icons - FontAwesome",
    value: "https://fontawesome.com/icons"
  }, {
    label: "Text Flicker - CodeMyUI",
    value: "https://codemyui.com/crt-screen-text-flicker-animation-in-pure-css/"
  }, {
    label: "Wave Animation - mburakerman",
    value: "https://codepen.io/mburakerman/pen/eRZZEv"
  }, {
    label: "Da real sauce ԅ(♡﹃♡ԅ)",
    value: "https://www.youtube.com/watch?v=qr89xoZyE1g"
  }, {
    label: "Even more real sauce ( ͡° ͜ʖ ͡°)",
    value: "https://www.youtube.com/watch?v=VLhJOd_TFiI"
  }]
}];
const images = [{
  label: "pic_1",
  value: _pictures_head_png__WEBPACK_IMPORTED_MODULE_0___default.a
}, {
  label: "pic_2",
  value: _pictures_pic_2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a
}, {
  label: "pic_3",
  value: _pictures_pic_3_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
}, {
  label: "pic_4",
  value: _pictures_pic_4_jpg__WEBPACK_IMPORTED_MODULE_3___default.a
}, {
  label: "pic_5",
  value: _pictures_pic_5_jpg__WEBPACK_IMPORTED_MODULE_4___default.a
}, {
  label: "pic_6",
  value: _pictures_pic_6_jpg__WEBPACK_IMPORTED_MODULE_5___default.a
}, {
  label: "pic_7",
  value: _pictures_pic_7_jpg__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  label: "pic_8",
  value: _pictures_pic_8_png__WEBPACK_IMPORTED_MODULE_7___default.a
}];
const searchEngines = [{
  label: "DuckDuckGo",
  value: "duckduckgo.com/"
}, {
  label: "Google",
  value: "google.com/search"
}, {
  label: "SearxNG",
  value: "s.acay.me/search"
}];
const searchSettings = {
  engine: searchEngines[0].value,
  fastForward: {
    "deepl": "https://deepl.com/",
    "maps": "https://google.de/maps/",
    "reddit": "https://reddit.com/",
    "github": "https://github.com/",
    "gitlab": "https://gitlab.com/",
    "youtube": "https://youtube.com/",
    "searxng": "https://s.acay.me/"
  }
};
const themes = [{
  name: "DeathAndMilk",
  image: _pictures_head_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  colors: {
    "--bg-color": "#2E2E2E",
    "--default-color": "#E6E6E6",
    "--accent-color": "#FFB4E6",
    "--accent-color2": "#B4FFE6"
  }
}, {
  name: "Pop!OS",
  image: "https://oswallpapers.com/wp-content/uploads/2019/04/kate-hazen-unleash-your-robot.jpg",
  colors: {
    "--bg-color": "#333136",
    "--default-color": "#2BC5EB",
    "--accent-color": "#FCD307",
    "--accent-color2": "#2BC5EB"
  }
}, {
  name: "Dark Souls",
  image: "https://i.pinimg.com/originals/16/74/db/1674dbae45cd38f3d3b4c00dc8616bd7.gif",
  colors: {
    "--bg-color": "#32323C",
    "--default-color": "#A0A08C",
    "--accent-color": "#9A6650",
    "--accent-color2": "#461E28"
  }
}, {
  name: "S.E.Lain",
  image: "https://64.media.tumblr.com/54a945edd2641e20859d6f6537cd7423/tumblr_pwa4bogz4N1qze3hdo2_r1_500.gifv",
  colors: {
    "--bg-color": "#0a1a25",
    "--default-color": "#a6b7ab",
    "--accent-color": "#94656b",
    "--accent-color2": "#57182e"
  }
}, {
  name: "Kitties",
  image: "https://64.media.tumblr.com/5a232d5c0999d02388d78e5c1025f94f/0572516693bf4014-3d/s500x750/0306dc89b657093529aa3ce96e64b9c43572e901.gifv",
  colors: {
    "--bg-color": "#495662",
    "--default-color": "#d1f1fa",
    "--accent-color": "#80aad4",
    "--accent-color2": "#e8a9b7"
  }
}, {
  name: "pretty chill",
  image: "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2019/05/tumblr_oymsnbT0111vjxiz1o1_1280.gif?iv=165",
  colors: {
    "--bg-color": "#397d76",
    "--default-color": "#f1daba",
    "--accent-color": "#c5bdb5",
    "--accent-color2": "#93a662"
  }
}];

/***/ }),

/***/ "./src/data/pictures/duckduckgo.svg":
/*!******************************************!*\
  !*** ./src/data/pictures/duckduckgo.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/duckduckgo.1a837031.svg";

/***/ }),

/***/ "./src/data/pictures/google.svg":
/*!**************************************!*\
  !*** ./src/data/pictures/google.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/google.0c182f86.svg";

/***/ }),

/***/ "./src/data/pictures/head.png":
/*!************************************!*\
  !*** ./src/data/pictures/head.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/head.48453810.png";

/***/ }),

/***/ "./src/data/pictures/logo.png":
/*!************************************!*\
  !*** ./src/data/pictures/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.06ef2568.png";

/***/ }),

/***/ "./src/data/pictures/pic_2.jpg":
/*!*************************************!*\
  !*** ./src/data/pictures/pic_2.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic_2.42b93d95.jpg";

/***/ }),

/***/ "./src/data/pictures/pic_3.jpg":
/*!*************************************!*\
  !*** ./src/data/pictures/pic_3.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic_3.8796fde5.jpg";

/***/ }),

/***/ "./src/data/pictures/pic_4.jpg":
/*!*************************************!*\
  !*** ./src/data/pictures/pic_4.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic_4.66ccb182.jpg";

/***/ }),

/***/ "./src/data/pictures/pic_5.jpg":
/*!*************************************!*\
  !*** ./src/data/pictures/pic_5.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic_5.6e9543cd.jpg";

/***/ }),

/***/ "./src/data/pictures/pic_6.jpg":
/*!*************************************!*\
  !*** ./src/data/pictures/pic_6.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic_6.65b20253.jpg";

/***/ }),

/***/ "./src/data/pictures/pic_7.jpg":
/*!*************************************!*\
  !*** ./src/data/pictures/pic_7.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic_7.6516acf6.jpg";

/***/ }),

/***/ "./src/data/pictures/pic_8.png":
/*!*************************************!*\
  !*** ./src/data/pictures/pic_8.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic_8.ba1342f4.png";

/***/ }),

/***/ "./src/data/pictures/qwant.svg":
/*!*************************************!*\
  !*** ./src/data/pictures/qwant.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/qwant.7b2c220e.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/index.css */ "./src/base/index.css");
/* harmony import */ var _base_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_base_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /GLOBAL_DATA_DRIVE/Github/Avenir/homepage/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /GLOBAL_DATA_DRIVE/Github/Avenir/homepage/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /GLOBAL_DATA_DRIVE/Github/Avenir/homepage/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map