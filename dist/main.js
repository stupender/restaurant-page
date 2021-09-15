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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log(\"Hello from JavaScript!\");\n\n// DOM Bindings \nlet aboutButton = document.querySelector(\".about\");\nlet contactButton = document.querySelector(\".contact\");\nlet aboutCard = document.querySelector(\".about-container\");\nlet contactCard = document.querySelector(\".contact-container\");\n\n// Event Listeners\naboutButton.addEventListener(\"click\", displayAbout);\ncontactButton.addEventListener(\"click\", displayContact);\n\n// Functions\nfunction displayAbout() {\n    aboutCard.classList.toggle(\"show\");\n    aboutButton.classList.toggle(\"showing\");\n}\n\nfunction displayContact() {\n    contactCard.classList.toggle(\"show\");\n    contactButton.classList.toggle(\"showing\");\n}\n\n\n\nconst homepage = (() => {\n    'use strict';\n    return {\n        pageContent: function() {\n\n        }\n    };\n})();\n\n\nconst pageTwo = (() => {\n    'use strict';\n    return {\n        pageContent: function() {\n            \n        }\n    };\n})();\n\n\nconst pageThree = (() => {\n    'use strict';\n    return {\n        pageContent: function() {\n            \n        }\n    };\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;