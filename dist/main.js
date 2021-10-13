/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Post.js":
/*!*****************!*\
  !*** ./Post.js ***!
  \*****************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Post = /*#__PURE__*/function () {\n  function Post(title, img) {\n    _classCallCheck(this, Post);\n\n    this.title = title;\n    this.img = img;\n    this.date = new Date();\n  }\n\n  _createClass(Post, [{\n    key: \"toString\",\n    value: function toString() {\n      return JSON.stringify({\n        title: this.title,\n        date: this.date.toJSON(),\n        img: this.img\n      }, null, 2);\n    }\n  }]);\n\n  return Post;\n}();\n\nmodule.exports = Post;\n\n//# sourceURL=webpack:///./Post.js?");

/***/ }),

/***/ "./babel.js":
/*!******************!*\
  !*** ./babel.js ***!
  \******************/
/***/ (function() {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction start() {\n  return _start.apply(this, arguments);\n}\n\nfunction _start() {\n  _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Promise.resolve('async is working');\n\n          case 2:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _start.apply(this, arguments);\n}\n\nstart().then(console.log);\n\n//# sourceURL=webpack:///./babel.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/polyfill */ \"../node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ \"./Post.js\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Post__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/json */ \"./assets/json.json\");\n/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/data.xml */ \"./assets/data.xml\");\n/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_data_xml__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/data.csv */ \"./assets/data.csv\");\n/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_data_csv__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_webpack_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/webpack-logo */ \"./assets/webpack-logo.png\");\n/* harmony import */ var _babel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./babel.js */ \"./babel.js\");\n/* harmony import */ var _babel_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_scss_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/scss.scss */ \"./styles/scss.scss\");\n\n\n\n\n\n\n\n\n\n\nvar post = new (_Post__WEBPACK_IMPORTED_MODULE_2___default())('Webpack Post Title', _assets_webpack_logo__WEBPACK_IMPORTED_MODULE_6__);\nconsole.log('Post to string:', post.toString());\njquery__WEBPACK_IMPORTED_MODULE_0__('pre').addClass('code').html(post.toString());\nconsole.log('Json:', _assets_json__WEBPACK_IMPORTED_MODULE_3__);\nconsole.log('xml:', (_assets_data_xml__WEBPACK_IMPORTED_MODULE_4___default()));\nconsole.log('csv:', (_assets_data_csv__WEBPACK_IMPORTED_MODULE_5___default()));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/scss.scss":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/scss.scss ***!
  \*********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".card {\\n  padding: 1rem;\\n  border-radius: 15px;\\n  margin-top: 1rem;\\n  border: 1px solid #ccc; }\\n  .card h2 {\\n    text-align: center;\\n    color: darkred; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/scss.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./assets/data.csv":
/*!*************************!*\
  !*** ./assets/data.csv ***!
  \*************************/
/***/ (function(module) {

eval("module.exports = [{\"Transaction_date\":\"1/2/09 6:17\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Mastercard\",\"Name\":\"carolina\",\"City\":\"Basildon\",\"State\":\"England\",\"Country\":\"United Kingdom\",\"Account_Created\":\"1/2/09 6:00\",\"Last_Login\":\"1/2/09 6:08\",\"Latitude\":51.5,\"Longitude\":-1.1166667},{\"Transaction_date\":\"1/2/09 4:53\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Visa\",\"Name\":\"Betina\",\"City\":\"Parkville                   \",\"State\":\"MO\",\"Country\":\"United States\",\"Account_Created\":\"1/2/09 4:42\",\"Last_Login\":\"1/2/09 7:49\",\"Latitude\":39.195,\"Longitude\":-94.68194},{\"Transaction_date\":\"1/2/09 13:08\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Mastercard\",\"Name\":\"Federica e Andrea\",\"City\":\"Astoria                     \",\"State\":\"OR\",\"Country\":\"United States\",\"Account_Created\":\"1/1/09 16:21\",\"Last_Login\":\"1/3/09 12:32\",\"Latitude\":46.18806,\"Longitude\":-123.83},{\"Transaction_date\":\"1/3/09 14:44\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Visa\",\"Name\":\"Gouya\",\"City\":\"Echuca\",\"State\":\"Victoria\",\"Country\":\"Australia\",\"Account_Created\":\"9/25/05 21:13\",\"Last_Login\":\"1/3/09 14:22\",\"Latitude\":-36.1333333,\"Longitude\":144.75},{\"Transaction_date\":\"1/4/09 12:56\",\"Product\":\"Product2\",\"Price\":3600,\"Payment_Type\":\"Visa\",\"Name\":\"Gerd W \",\"City\":\"Cahaba Heights              \",\"State\":\"AL\",\"Country\":\"United States\",\"Account_Created\":\"11/15/08 15:47\",\"Last_Login\":\"1/4/09 12:45\",\"Latitude\":33.52056,\"Longitude\":-86.8025},{\"Transaction_date\":\"1/4/09 13:19\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Visa\",\"Name\":\"LAURENCE\",\"City\":\"Mickleton                   \",\"State\":\"NJ\",\"Country\":\"United States\",\"Account_Created\":\"9/24/08 15:19\",\"Last_Login\":\"1/4/09 13:04\",\"Latitude\":39.79,\"Longitude\":-75.23806},{\"Transaction_date\":\"1/4/09 20:11\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Mastercard\",\"Name\":\"Fleur\",\"City\":\"Peoria                      \",\"State\":\"IL\",\"Country\":\"United States\",\"Account_Created\":\"1/3/09 9:38\",\"Last_Login\":\"1/4/09 19:45\",\"Latitude\":40.69361,\"Longitude\":-89.58889},{\"Transaction_date\":\"1/2/09 20:09\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Mastercard\",\"Name\":\"adam\",\"City\":\"Martin                      \",\"State\":\"TN\",\"Country\":\"United States\",\"Account_Created\":\"1/2/09 17:43\",\"Last_Login\":\"1/4/09 20:01\",\"Latitude\":36.34333,\"Longitude\":-88.85028},{\"Transaction_date\":\"1/4/09 13:17\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Mastercard\",\"Name\":\"Renee Elisabeth\",\"City\":\"Tel Aviv\",\"State\":\"Tel Aviv\",\"Country\":\"Israel\",\"Account_Created\":\"1/4/09 13:03\",\"Last_Login\":\"1/4/09 22:10\",\"Latitude\":32.0666667,\"Longitude\":34.7666667},{\"Transaction_date\":\"1/4/09 14:11\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Visa\",\"Name\":\"Aidan\",\"City\":\"Chatou\",\"State\":\"Ile-de-France\",\"Country\":\"France\",\"Account_Created\":\"6/3/08 4:22\",\"Last_Login\":\"1/5/09 1:17\",\"Latitude\":48.8833333,\"Longitude\":2.15},{\"Transaction_date\":\"1/5/09 2:42\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Diners\",\"Name\":\"Stacy\",\"City\":\"New York                    \",\"State\":\"NY\",\"Country\":\"United States\",\"Account_Created\":\"1/5/09 2:23\",\"Last_Login\":\"1/5/09 4:59\",\"Latitude\":40.71417,\"Longitude\":-74.00639},{\"Transaction_date\":\"1/5/09 5:39\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Amex\",\"Name\":\"Heidi\",\"City\":\"Eindhoven\",\"State\":\"Noord-Brabant\",\"Country\":\"Netherlands\",\"Account_Created\":\"1/5/09 4:55\",\"Last_Login\":\"1/5/09 8:15\",\"Latitude\":51.45,\"Longitude\":5.4666667},{\"Transaction_date\":\"1/2/09 9:16\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Mastercard\",\"Name\":\"Sean \",\"City\":\"Shavano Park                \",\"State\":\"TX\",\"Country\":\"United States\",\"Account_Created\":\"1/2/09 8:32\",\"Last_Login\":\"1/5/09 9:05\",\"Latitude\":29.42389,\"Longitude\":-98.49333},{\"Transaction_date\":\"1/5/09 10:08\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Visa\",\"Name\":\"Georgia\",\"City\":\"Eagle                       \",\"State\":\"ID\",\"Country\":\"United States\",\"Account_Created\":\"11/11/08 15:53\",\"Last_Login\":\"1/5/09 10:05\",\"Latitude\":43.69556,\"Longitude\":-116.35306},{\"Transaction_date\":\"1/2/09 14:18\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Visa\",\"Name\":\"Richard\",\"City\":\"Riverside                   \",\"State\":\"NJ\",\"Country\":\"United States\",\"Account_Created\":\"12/9/08 12:07\",\"Last_Login\":\"1/5/09 11:01\",\"Latitude\":40.03222,\"Longitude\":-74.95778},{\"Transaction_date\":\"1/4/09 1:05\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Diners\",\"Name\":\"Leanne\",\"City\":\"Julianstown\",\"State\":\"Meath\",\"Country\":\"Ireland\",\"Account_Created\":\"1/4/09 0:00\",\"Last_Login\":\"1/5/09 13:36\",\"Latitude\":53.6772222,\"Longitude\":-6.3191667},{\"Transaction_date\":\"1/5/09 11:37\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Visa\",\"Name\":\"Janet\",\"City\":\"Ottawa\",\"State\":\"Ontario\",\"Country\":\"Canada\",\"Account_Created\":\"1/5/09 9:35\",\"Last_Login\":\"1/5/09 19:24\",\"Latitude\":45.4166667,\"Longitude\":-75.7},{\"Transaction_date\":\"1/6/09 5:02\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Diners\",\"Name\":\"barbara\",\"City\":\"Hyderabad\",\"State\":\"Andhra Pradesh\",\"Country\":\"India\",\"Account_Created\":\"1/6/09 2:41\",\"Last_Login\":\"1/6/09 7:52\",\"Latitude\":17.3833333,\"Longitude\":78.4666667},{\"Transaction_date\":\"1/6/09 7:45\",\"Product\":\"Product2\",\"Price\":3600,\"Payment_Type\":\"Visa\",\"Name\":\"Sabine\",\"City\":\"London\",\"State\":\"England\",\"Country\":\"United Kingdom\",\"Account_Created\":\"1/6/09 7:00\",\"Last_Login\":\"1/6/09 9:17\",\"Latitude\":51.52721,\"Longitude\":0.14559},{\"Transaction_date\":\"1/2/09 7:35\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Diners\",\"Name\":\"Hani\",\"City\":\"Salt Lake City              \",\"State\":\"UT\",\"Country\":\"United States\",\"Account_Created\":\"12/30/08 5:44\",\"Last_Login\":\"1/6/09 10:52\",\"Latitude\":40.76083,\"Longitude\":-111.89028},{\"Transaction_date\":\"1/6/09 12:56\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Visa\",\"Name\":\"Jeremy\",\"City\":\"Manchester\",\"State\":\"England\",\"Country\":\"United Kingdom\",\"Account_Created\":\"1/6/09 10:58\",\"Last_Login\":\"1/6/09 13:31\",\"Latitude\":53.5,\"Longitude\":-2.2166667},{\"Transaction_date\":\"1/1/09 11:05\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Diners\",\"Name\":\"Janis\",\"City\":\"Ballynora\",\"State\":\"Cork\",\"Country\":\"Ireland\",\"Account_Created\":\"12/10/07 12:37\",\"Last_Login\":\"1/7/09 1:52\",\"Latitude\":51.8630556,\"Longitude\":-8.58},{\"Transaction_date\":\"1/5/09 4:10\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Mastercard\",\"Name\":\"Nicola\",\"City\":\"Roodepoort\",\"State\":\"Gauteng\",\"Country\":\"South Africa\",\"Account_Created\":\"1/5/09 2:33\",\"Last_Login\":\"1/7/09 5:13\",\"Latitude\":-26.1666667,\"Longitude\":27.8666667},{\"Transaction_date\":\"1/6/09 7:18\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Visa\",\"Name\":\"asuman\",\"City\":\"Chula Vista                 \",\"State\":\"CA\",\"Country\":\"United States\",\"Account_Created\":\"1/6/09 7:07\",\"Last_Login\":\"1/7/09 7:08\",\"Latitude\":32.64,\"Longitude\":-117.08333},{\"Transaction_date\":\"1/2/09 1:11\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Mastercard\",\"Name\":\"Lena\",\"City\":\"Kuopio\",\"State\":\"Ita-Suomen Laani\",\"Country\":\"Finland\",\"Account_Created\":\"12/31/08 2:48\",\"Last_Login\":\"1/7/09 10:20\",\"Latitude\":62.9,\"Longitude\":27.6833333},{\"Transaction_date\":\"1/1/09 2:24\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Visa\",\"Name\":\"Lisa\",\"City\":\"Sugar Land                  \",\"State\":\"TX\",\"Country\":\"United States\",\"Account_Created\":\"1/1/09 1:56\",\"Last_Login\":\"1/7/09 10:52\",\"Latitude\":29.61944,\"Longitude\":-95.63472},{\"Transaction_date\":\"1/7/09 8:08\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Diners\",\"Name\":\"Bryan Kerrene\",\"City\":\"New York                    \",\"State\":\"NY\",\"Country\":\"United States\",\"Account_Created\":\"1/7/09 7:39\",\"Last_Login\":\"1/7/09 12:38\",\"Latitude\":40.71417,\"Longitude\":-74.00639},{\"Transaction_date\":\"1/2/09 2:57\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Visa\",\"Name\":\"chris\",\"City\":\"London\",\"State\":\"England\",\"Country\":\"United Kingdom\",\"Account_Created\":\"1/3/08 7:23\",\"Last_Login\":\"1/7/09 13:14\",\"Latitude\":51.52721,\"Longitude\":0.14559},{\"Transaction_date\":\"1/1/09 20:21\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Visa\",\"Name\":\"Maxine\",\"City\":\"Morton                      \",\"State\":\"IL\",\"Country\":\"United States\",\"Account_Created\":\"10/24/08 6:48\",\"Last_Login\":\"1/7/09 20:49\",\"Latitude\":40.61278,\"Longitude\":-89.45917},{\"Transaction_date\":\"1/8/09 0:42\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Visa\",\"Name\":\"Family\",\"City\":\"Los Gatos                   \",\"State\":\"CA\",\"Country\":\"United States\",\"Account_Created\":\"1/8/09 0:28\",\"Last_Login\":\"1/8/09 3:39\",\"Latitude\":37.22667,\"Longitude\":-121.97361},{\"Transaction_date\":\"1/8/09 3:56\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Mastercard\",\"Name\":\"Katherine\",\"City\":\"New York                    \",\"State\":\"NY\",\"Country\":\"United States\",\"Account_Created\":\"1/8/09 3:33\",\"Last_Login\":\"1/8/09 6:19\",\"Latitude\":40.71417,\"Longitude\":-74.00639},{\"Transaction_date\":\"1/8/09 3:16\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Mastercard\",\"Name\":\"Linda\",\"City\":\"Miami                       \",\"State\":\"FL\",\"Country\":\"United States\",\"Account_Created\":\"1/8/09 3:06\",\"Last_Login\":\"1/8/09 6:34\",\"Latitude\":25.77389,\"Longitude\":-80.19389},{\"Transaction_date\":\"1/8/09 1:59\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Mastercard\",\"Name\":\"SYLVIA\",\"City\":\"Vesenaz\",\"State\":\"Geneve\",\"Country\":\"Switzerland\",\"Account_Created\":\"11/28/07 11:56\",\"Last_Login\":\"1/8/09 7:20\",\"Latitude\":46.2333333,\"Longitude\":6.2},{\"Transaction_date\":\"1/3/09 9:03\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Diners\",\"Name\":\"Sheila\",\"City\":\"Brooklyn                    \",\"State\":\"NY\",\"Country\":\"United States\",\"Account_Created\":\"1/3/09 8:47\",\"Last_Login\":\"1/8/09 10:38\",\"Latitude\":40.65,\"Longitude\":-73.95},{\"Transaction_date\":\"1/5/09 13:17\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Mastercard\",\"Name\":\"Stephanie\",\"City\":\"Badhoevedorp\",\"State\":\"Noord-Holland\",\"Country\":\"Netherlands\",\"Account_Created\":\"1/5/09 12:45\",\"Last_Login\":\"1/8/09 11:45\",\"Latitude\":52.3333333,\"Longitude\":4.7833333},{\"Transaction_date\":\"1/6/09 7:46\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Amex\",\"Name\":\"Kelly\",\"City\":\"Reston                      \",\"State\":\"VA\",\"Country\":\"United States\",\"Account_Created\":\"1/6/09 7:30\",\"Last_Login\":\"1/8/09 12:40\",\"Latitude\":38.96861,\"Longitude\":-77.34139},{\"Transaction_date\":\"1/5/09 20:00\",\"Product\":\"Product2\",\"Price\":3600,\"Payment_Type\":\"Visa\",\"Name\":\"James\",\"City\":\"Burpengary\",\"State\":\"Queensland\",\"Country\":\"Australia\",\"Account_Created\":\"12/10/08 19:53\",\"Last_Login\":\"1/8/09 17:58\",\"Latitude\":-27.1666667,\"Longitude\":152.95},{\"Transaction_date\":\"1/8/09 16:24\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Visa\",\"Name\":\"jennifer\",\"City\":\"Phoenix                     \",\"State\":\"AZ\",\"Country\":\"United States\",\"Account_Created\":\"1/8/09 15:57\",\"Last_Login\":\"1/8/09 18:30\",\"Latitude\":33.44833,\"Longitude\":-112.07333},{\"Transaction_date\":\"1/9/09 6:39\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Mastercard\",\"Name\":\"Anneli\",\"City\":\"Houston                     \",\"State\":\"TX\",\"Country\":\"United States\",\"Account_Created\":\"1/9/09 5:09\",\"Last_Login\":\"1/9/09 7:11\",\"Latitude\":29.76306,\"Longitude\":-95.36306},{\"Transaction_date\":\"1/6/09 22:19\",\"Product\":\"Product2\",\"Price\":3600,\"Payment_Type\":\"Amex\",\"Name\":\"Ritz\",\"City\":\"Pittsfield                  \",\"State\":\"VT\",\"Country\":\"United States\",\"Account_Created\":\"1/6/09 12:00\",\"Last_Login\":\"1/9/09 10:05\",\"Latitude\":43.77222,\"Longitude\":-72.81333},{\"Transaction_date\":\"1/6/09 23:00\",\"Product\":\"Product2\",\"Price\":3600,\"Payment_Type\":\"Amex\",\"Name\":\"Sylvia\",\"City\":\"Pittsfield                  \",\"State\":\"VT\",\"Country\":\"United States\",\"Account_Created\":\"1/6/09 12:00\",\"Last_Login\":\"1/9/09 10:05\",\"Latitude\":43.77222,\"Longitude\":-72.81333},{\"Transaction_date\":\"1/7/09 7:44\",\"Product\":\"Product1\",\"Price\":1200,\"Payment_Type\":\"Mastercard\",\"Name\":\"Marie\",\"City\":\"Ball Ground                 \",\"State\":\"GA\",\"Country\":\"United States\",\"Account_Created\":\"1/7/09 5:35\",\"Last_Login\":\"1/9/09 10:52\",\"Latitude\":34.33806,\"Longitude\":-84.37667}]\n\n//# sourceURL=webpack:///./assets/data.csv?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ }),

/***/ "./styles/scss.scss":
/*!**************************!*\
  !*** ./styles/scss.scss ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scss_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./scss.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/scss.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scss_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scss_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scss_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scss_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./styles/scss.scss?");

/***/ }),

/***/ "./assets/data.xml":
/*!*************************!*\
  !*** ./assets/data.xml ***!
  \*************************/
/***/ (function(module) {

eval("module.exports = {\"email\":{\"to\":[\"Ely\"],\"from\":[\"Webpack\"],\"heading\":[\"Tutorial\"],\"body\":[\"Finish the record\"]}}\n\n//# sourceURL=webpack:///./assets/data.xml?");

/***/ }),

/***/ "./assets/webpack-logo.png":
/*!*********************************!*\
  !*** ./assets/webpack-logo.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"47692505d122dbcae490.png\";\n\n//# sourceURL=webpack:///./assets/webpack-logo.png?");

/***/ }),

/***/ "./assets/json.json":
/*!**************************!*\
  !*** ./assets/json.json ***!
  \**************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"I am JSON title\"}');\n\n//# sourceURL=webpack:///./assets/json.json?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_css-loader_dist_runtime_api_js--057e7f"], function() { return __webpack_require__("./index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;