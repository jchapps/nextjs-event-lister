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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        //post api/meetup\n        const data = req.body; //includes title,image,address,desc\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://jdchappelow:Maggie123@cluster0.cz1vfb6.mongodb.net/?retryWrites=true&w=majority\"); //connect to my db\n        const db = client.db();\n        const locationsCollection = db.collection(\"locations\"); //collection (= tables) and holds documents(=entries in tables)\n        const result = await locationsCollection.insertOne(data); // inserts the data object into db - returns automatically generated id\n        console.log(result);\n        client.close(); //close the db connection\n        res.status(201).json({\n            message: \"Location added!\"\n        }); //time to send back res object. 201 status code: inserted successfully. prepare outgoing json with message key.\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsaUJBQWlCO1FBQ2pCLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJLEVBQUUsbUNBQW1DO1FBRTFELE1BQU1DLE1BQU0sR0FBRyxNQUFNUCx3REFBbUIsQ0FDdEMsK0ZBQStGLENBQ2hHLEVBQUUsa0JBQWtCO1FBQ3JCLE1BQU1TLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFLEVBQUU7UUFFdEIsTUFBTUMsbUJBQW1CLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLCtEQUErRDtRQUV2SCxNQUFNQyxNQUFNLEdBQUcsTUFBTUYsbUJBQW1CLENBQUNHLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDLEVBQUUsdUVBQXVFO1FBRWpJUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLENBQUM7UUFFcEJMLE1BQU0sQ0FBQ1MsS0FBSyxFQUFFLENBQUMsQ0FBQyx5QkFBeUI7UUFFekNiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLGlCQUFpQjtTQUFFLENBQUMsQ0FBQyxDQUFDLCtHQUErRztJQUN2SyxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlbEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZXZlbnQtbGlzdC8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIC8vcG9zdCBhcGkvbWVldHVwXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5OyAvL2luY2x1ZGVzIHRpdGxlLGltYWdlLGFkZHJlc3MsZGVzY1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAgIFwibW9uZ29kYitzcnY6Ly9qZGNoYXBwZWxvdzpNYWdnaWUxMjNAY2x1c3RlcjAuY3oxdmZiNi5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgICApOyAvL2Nvbm5lY3QgdG8gbXkgZGJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gICAgY29uc3QgbG9jYXRpb25zQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIik7IC8vY29sbGVjdGlvbiAoPSB0YWJsZXMpIGFuZCBob2xkcyBkb2N1bWVudHMoPWVudHJpZXMgaW4gdGFibGVzKVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbG9jYXRpb25zQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7IC8vIGluc2VydHMgdGhlIGRhdGEgb2JqZWN0IGludG8gZGIgLSByZXR1cm5zIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGlkXG5cbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgY2xpZW50LmNsb3NlKCk7IC8vY2xvc2UgdGhlIGRiIGNvbm5lY3Rpb25cblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJMb2NhdGlvbiBhZGRlZCFcIiB9KTsgLy90aW1lIHRvIHNlbmQgYmFjayByZXMgb2JqZWN0LiAyMDEgc3RhdHVzIGNvZGU6IGluc2VydGVkIHN1Y2Nlc3NmdWxseS4gcHJlcGFyZSBvdXRnb2luZyBqc29uIHdpdGggbWVzc2FnZSBrZXkuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsImxvY2F0aW9uc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

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