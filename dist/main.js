/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAbout() {\n    let a = document.createElement(\"div\");\n        a.classList.add(\"about-container\");\n\n        let b1 = document.createElement(\"img\");\n        b1.setAttribute(\"id\", \"about-pic\");\n        b1.setAttribute(\"src\", \"images/about.jpeg\");\n\n        let b2 = document.createElement(\"p\");\n        b2.setAttribute(\"id\", \"about-text\");\n        b2.textContent = \"Stu Pender is a Brooklyn based guitarist and composer from the suburbs of Chicago, Illinois. A graduate of the Jazz Studies Conservatory at SUNY Purchase, Stu studied under John Abercrombie and Vic Juris. He has since performed music at notable venues such as the United Nations General Assembly Hall, Beacon Theatre, and Brooklyn Steel — with musical acts Poetic Thrust, Photay, Elijah Wolf, The Gipsy Kings, Los Lobos, and more. Stu continues his musical studies on the guitar with Fabiano do Nascimento and Derek Gripper.\"\n    \n        a.appendChild(b1);\n        a.appendChild(b2);\n\n    return a\n}\n\nfunction loadAbout() {\n    let page = document.getElementById(\"page\");\n    page.textContent = \"\"; // do i need this? to clear the page?\n    page.appendChild(createAbout());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    let a = document.createElement(\"div\");\n    a.classList.add(\"contact-container\");\n    \n    let b1 = document.createElement(\"div\");\n    let b1p = document.createElement(\"p\");\n    b1p.classList.add(\"contact-title\");\n    b1p.textContent = \"CONTACT AT\";\n    let b1a = document.createElement(\"a\");\n    b1a.classList.add(\"contact-link\");\n    b1a.setAttribute(\"href\", \"#\");\n    b1a.setAttribute(\"target\", \"_blank\");\n    b1a.textContent = \"stu_pender@mac.com\";\n\n    let b2 = document.createElement(\"div\");\n    let b2p = document.createElement(\"p\");\n    b2p.classList.add(\"contact-title\");\n    b2p.textContent = \"YOUTUBE\";\n    let b2a = document.createElement(\"a\");\n    b2a.classList.add(\"contact-link\");\n    b2a.setAttribute(\"href\", \"#\");\n    b2a.setAttribute(\"target\", \"_blank\");\n    b2a.textContent = \"Filmed Musical Studies & Expressions\";\n\n    let b3 = document.createElement(\"div\");\n    let b3p = document.createElement(\"p\");\n    b3p.classList.add(\"contact-title\");\n    b3p.textContent = \"INSTAGRAM\";\n    let b3a = document.createElement(\"a\");\n    b3a.classList.add(\"contact-link\");\n    b3a.setAttribute(\"href\", \"#\");\n    b3a.setAttribute(\"target\", \"_blank\");\n    b3a.textContent = \"@pendergram\";\n\n    a.appendChild(b1);\n    b1.appendChild(b1p);\n    b1.appendChild(b1a);\n\n    a.appendChild(b2);\n    b2.appendChild(b2p);\n    b2.appendChild(b2a);\n\n\n    a.appendChild(b3);\n    b3.appendChild(b3p);\n    b3.appendChild(b3a);\n\n    return a;\n}\n\nfunction loadContact() {\n    let page = document.getElementById(\"page\");\n    page.textContent = \"\"; // do i need this? ... Clears the page from previous stuff.\n    page.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\n\n(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/music.js":
/*!**********************!*\
  !*** ./src/music.js ***!
  \**********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant-page/./src/music.js?");

/***/ }),

/***/ "./src/teaching.js":
/*!*************************!*\
  !*** ./src/teaching.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTeaching() {\n\n}\n\nfunction loadTeaching() {\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTeaching);\n\n//# sourceURL=webpack://restaurant-page/./src/teaching.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _teaching_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teaching.js */ \"./src/teaching.js\");\n/* harmony import */ var _music_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music.js */ \"./src/music.js\");\n/* harmony import */ var _music_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_music_js__WEBPACK_IMPORTED_MODULE_3__);\n// import { create } from \"enhanced-resolve\";\n\n\n\n\n\nfunction createHeader() {\n    let header = document.createElement(\"header\");\n\n    let b1 = document.createElement(\"h1\");\n    b1.textContent = \"Stu Pender\";\n    header.appendChild(b1);\n\n    let b2 = document.createElement(\"h2\");\n    b2.textContent = \"Guitarist & Composer\";\n    header.appendChild(b2);\n\n    return header;\n}\n\nfunction createNav() {\n    let navBar = document.createElement(\"nav\");\n\n    let aboutButton = document.createElement(\"a\");\n    aboutButton.textContent = \"About\";\n    aboutButton.setAttribute(\"href\", \"#\")\n    aboutButton.setAttribute(\"class\", \"about button-nav\");\n    aboutButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(aboutButton);\n        (0,_about_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n    });\n\n    let musicButton = document.createElement(\"a\");\n    musicButton.textContent = \"Music\";\n    musicButton.setAttribute(\"href\", \"#\")\n    musicButton.setAttribute(\"class\", \"expression button-nav\");\n    musicButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(musicButton);\n        // loadMusic();\n    });\n\n    let teachingButton = document.createElement(\"a\");\n    teachingButton.textContent = \"Teaching\";\n    teachingButton.setAttribute(\"href\", \"#\")\n    teachingButton.setAttribute(\"class\", \"teaching button-nav\");\n    teachingButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(teachingButton);\n        // loadTeaching();\n    });\n\n    let contactButton = document.createElement(\"a\");\n    contactButton.textContent = \"Connect\";\n    contactButton.setAttribute(\"href\", \"#\")\n    contactButton.setAttribute(\"class\", \"contact button-nav\");\n    contactButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(contactButton);\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n    });\n\n    let filters = document.createElement(\"div\");\n    filters.setAttribute(\"id\", \"filters\");\n\n    let filterLabel = document.createElement(\"p\");\n    filterLabel.textContent = \"FILTER WORK BY\";\n    filterLabel.setAttribute(\"href\", \"#\")\n    filterLabel.setAttribute(\"class\", \"filter-item\");\n\n    let allFilter = document.createElement(\"a\");\n    allFilter.textContent = \"All\";\n    allFilter.setAttribute(\"href\", \"#\")\n    allFilter.setAttribute(\"class\", \"filter-item\");\n\n    let personalFilter = document.createElement(\"a\");\n    personalFilter.textContent = \"Personal\";\n    personalFilter.setAttribute(\"href\", \"#\")\n    personalFilter.setAttribute(\"class\", \"filter-item\");\n\n    let collaborationFilter = document.createElement(\"a\");\n    collaborationFilter.textContent = \"Collaboration\";\n    collaborationFilter.setAttribute(\"href\", \"#\")\n    collaborationFilter.setAttribute(\"class\", \"filter-item\");\n\n    filters.appendChild(filterLabel);\n    filters.appendChild(allFilter);\n    filters.appendChild(personalFilter);\n    filters.appendChild(collaborationFilter);\n\n    navBar.appendChild(aboutButton);\n    navBar.appendChild(musicButton);\n    navBar.appendChild(teachingButton);\n    navBar.appendChild(contactButton);\n    navBar.appendChild(filters);\n\n    return navBar;\n}\n\nfunction setActiveButton(button) {\n    let buttons = document.querySelectorAll(\".button-nav\");\n  \n    buttons.forEach((button) => {\n      if (button !== this) {\n        button.classList.remove(\"active\");\n      }\n    });\n    button.classList.add(\"active\");\n  }\n\n  function createMain() {\n    let main = document.createElement(\"nav\");\n    main.setAttribute(\"id\", \"page\");\n    \n    return main;\n}\n\nfunction initializeWebsite() {\n    let content = document.getElementById(\"content\");\n\n    content.appendChild(createHeader());\n    content.appendChild(createNav());\n    content.appendChild(createMain());\n\n    setActiveButton(document.querySelector(\".button-nav\"));\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;