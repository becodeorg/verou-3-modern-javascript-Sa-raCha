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

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Data = {\n    key : \"01d8fc1eda140af4804afcd131b24b41\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\n\n//# sourceURL=webpack://03_weather_app/./config.js?");

/***/ }),

/***/ "./src/createDay.js":
/*!**************************!*\
  !*** ./src/createDay.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDay\": () => (/* binding */ createDay)\n/* harmony export */ });\nconst getNameDay = (weekDays) =>{\n    const names = [\"SUN\", \"MON\", \"TUE\", \"WED\", \"THU\", \"FRI\", \"SAT\"]\n    return names[weekDays.getDay()]\n}\n\nconst getNameMonth = (date) => {\n    const months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n    return months[date.getMonth()]\n}\n\nconst createDay = (weatherData,i) => {\n    \n    const unixtime = weatherData[i].dt;\n    const daydate = new Date(unixtime * 1000);\n    const iconid = weatherData[i].weather[0].icon;\n    const iconurl = \"http://openweathermap.org/img/wn/\" + iconid + \"@2x.png\";\n    const temp = Math.round(weatherData[i].temp.day) + \"°C\";\n    const des = weatherData[i].weather[0].description;\n\n    const section = document.createElement('section');\n    section.classList = \"card\";\n\n\n    const header = document.createElement('div');\n    header.classList = \"card-header\";\n\n    const dayName = document.createElement(\"h2\")\n    const date = document.createElement(\"h3\");\n\n    const dayInMonth = document.createElement(\"span\")\n    const month = document.createElement(\"span\")\n\n\n\n    dayName.innerText = getNameDay(daydate);\n    dayInMonth.innerText = daydate.getDate() ;\n    month.innerText = getNameMonth(daydate);\n\n\n    const img = document.createElement(\"img\");\n    img.setAttribute(\"src\", iconurl);\n\n    const desEl = document.createElement(\"p\");\n    desEl.innerHTML = des;\n    \n    const tempP = document.createElement(\"p\");\n    tempP.className = \"temp\";\n    tempP.innerText = temp\n\n\n    container.appendChild(section);\n    section.append(header, img, desEl, tempP);\n    header.append(dayName, date);\n    date.append(dayInMonth, month)\n}\n\n\n//# sourceURL=webpack://03_weather_app/./src/createDay.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var _createDay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDay.js */ \"./src/createDay.js\");\n\n\nconst submitButton = document.getElementById(\"submit\")\nconst submitInput = document.getElementById(\"cityInput\");\nconst container = document.getElementById(\"container\");\n\nconst getLatLong = () => {\n    let userInput = submitInput.value\n    container.innerHTML=\"\";\n    \n    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + userInput + '&appid=' + _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].key)\n    .then(response => response.json())\n    .then(data => {\n\n        let nameValue = data['city']['name']\n        const span = document.getElementById(\"currentCity\")\n        span.innerHTML = nameValue;\n            \n        let lat = data[\"city\"][\"coord\"].lat;\n        let lon = data[\"city\"][\"coord\"].lon;\n\n    getData(lat, lon)\n        \n\n    })\n    .catch(err => alert(\"Sorry can't seem to find that city, would you like to try again?\")) \n}\n\nconst getData = (lat, lon) => {\n    fetch(\"https://api.openweathermap.org/data/2.5/onecall?lat=\" + lat + \"&lon=\" + lon + \"&exclude=minutely,hourly&units=metric&appid=\" + _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].key )\n        .then(response => response.json())\n        .then(data => { \n            let weatherData = data.daily;\n            console.log(weatherData);\n            for (let i = 0; i < 5; i++) {\n                (0,_createDay_js__WEBPACK_IMPORTED_MODULE_1__.createDay) (weatherData, i)\n                \n            }    \n        })\n    \n}\n\nsubmitButton.addEventListener(\"click\", getLatLong);\n\nsubmitInput.addEventListener(\"keydown\", event => {\n    if (event.key === \"Enter\") {\n     getLatLong()\n     }\n\n});\n\n\n\n\n\n\n\n//# sourceURL=webpack://03_weather_app/./src/index.js?");

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