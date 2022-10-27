"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        //post api/meetup\n        const data = req.body; //includes title,image,address,desc\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://jdchappelow:${process.env.DB_PASS}@cluster0.cz1vfb6.mongodb.net/?retryWrites=true&w=majority`); //connect to my db\n        const db = client.db();\n        const locationsCollection = db.collection(\"locations\"); //collection (= tables) and holds documents(=entries in tables)\n        const result = await locationsCollection.insertOne(data); // inserts the data object into db - returns automatically generated id\n        console.log(result);\n        client.close(); //close the db connection\n        res.status(201).json({\n            message: \"Location added!\"\n        }); //time to send back res object. 201 status code: inserted successfully. prepare outgoing json with message key.\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsaUJBQWlCO1FBQ2pCLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJLEVBQUUsbUNBQW1DO1FBRTFELE1BQU1DLE1BQU0sR0FBRyxNQUFNUCx3REFBbUIsQ0FDdEMsQ0FBQywwQkFBMEIsRUFBRVMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQywwREFBMEQsQ0FBQyxDQUM3RyxFQUFFLGtCQUFrQjtRQUNyQixNQUFNQyxFQUFFLEdBQUdMLE1BQU0sQ0FBQ0ssRUFBRSxFQUFFO1FBRXRCLE1BQU1DLG1CQUFtQixHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSwrREFBK0Q7UUFFdkgsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLG1CQUFtQixDQUFDRyxTQUFTLENBQUNYLElBQUksQ0FBQyxFQUFFLHVFQUF1RTtRQUVqSVksT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDO1FBRXBCUixNQUFNLENBQUNZLEtBQUssRUFBRSxDQUFDLENBQUMseUJBQXlCO1FBRXpDaEIsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLGlCQUFpQjtTQUFFLENBQUMsQ0FBQyxDQUFDLCtHQUErRztJQUN2SyxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlckIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZXZlbnQtbGlzdC8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIC8vcG9zdCBhcGkvbWVldHVwXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5OyAvL2luY2x1ZGVzIHRpdGxlLGltYWdlLGFkZHJlc3MsZGVzY1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAgIGBtb25nb2RiK3NydjovL2pkY2hhcHBlbG93OiR7cHJvY2Vzcy5lbnYuREJfUEFTU31AY2x1c3RlcjAuY3oxdmZiNi5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxuICAgICk7IC8vY29ubmVjdCB0byBteSBkYlxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbnNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKTsgLy9jb2xsZWN0aW9uICg9IHRhYmxlcykgYW5kIGhvbGRzIGRvY3VtZW50cyg9ZW50cmllcyBpbiB0YWJsZXMpXG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsb2NhdGlvbnNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTsgLy8gaW5zZXJ0cyB0aGUgZGF0YSBvYmplY3QgaW50byBkYiAtIHJldHVybnMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgaWRcblxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICBjbGllbnQuY2xvc2UoKTsgLy9jbG9zZSB0aGUgZGIgY29ubmVjdGlvblxuXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIkxvY2F0aW9uIGFkZGVkIVwiIH0pOyAvL3RpbWUgdG8gc2VuZCBiYWNrIHJlcyBvYmplY3QuIDIwMSBzdGF0dXMgY29kZTogaW5zZXJ0ZWQgc3VjY2Vzc2Z1bGx5LiBwcmVwYXJlIG91dGdvaW5nIGpzb24gd2l0aCBtZXNzYWdlIGtleS5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY2xpZW50IiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJEQl9QQVNTIiwiZGIiLCJsb2NhdGlvbnNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();