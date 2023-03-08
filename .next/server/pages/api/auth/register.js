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
exports.id = "pages/api/auth/register";
exports.ids = ["pages/api/auth/register"];
exports.modules = {

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    fullName: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isAdmin: {\n        type: Boolean,\n        default: false\n    },\n    dateOfBirth: {\n        type: String\n    },\n    Phone: {\n        type: Number\n    },\n    address: {\n        type: String\n    },\n    orders: {\n        type: [\n            {\n                orderId: {\n                    type: String\n                }\n            }, \n        ]\n    }\n}, {\n    img: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsVUFBVSxHQUFHLElBQUlELHdEQUFlLENBQ3BDO0lBQ0VHLFFBQVEsRUFBRTtRQUFFQyxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7UUFBRUMsTUFBTSxFQUFFLElBQUk7S0FBRTtJQUN4REMsUUFBUSxFQUFFO1FBQUVKLElBQUksRUFBRUMsTUFBTTtLQUFFO0lBQzFCSSxLQUFLLEVBQUU7UUFBRUwsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO1FBQUVDLE1BQU0sRUFBRSxJQUFJO0tBQUU7SUFDckRHLFFBQVEsRUFBRTtRQUFFTixJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUMxQ0ssT0FBTyxFQUFFO1FBQUVQLElBQUksRUFBRVEsT0FBTztRQUFFQyxPQUFPLEVBQUUsS0FBSztLQUFFO0lBQzFDQyxXQUFXLEVBQUU7UUFBRVYsSUFBSSxFQUFFQyxNQUFNO0tBQUU7SUFDN0JVLEtBQUssRUFBRTtRQUFFWCxJQUFJLEVBQUVZLE1BQU07S0FBRTtJQUN2QkMsT0FBTyxFQUFFO1FBQUViLElBQUksRUFBRUMsTUFBTTtLQUFFO0lBQ3pCYSxNQUFNLEVBQUU7UUFDTmQsSUFBSSxFQUFFO1lBQ0o7Z0JBQ0VlLE9BQU8sRUFBRTtvQkFBRWYsSUFBSSxFQUFFQyxNQUFNO2lCQUFFO2FBQzFCO1NBQ0Y7S0FDRjtDQUNGLEVBQ0Q7SUFBRWUsR0FBRyxFQUFFO1FBQUVoQixJQUFJLEVBQUVDLE1BQU07S0FBRTtDQUFFLEVBQ3pCO0lBQUVnQixVQUFVLEVBQUUsSUFBSTtDQUFFLENBQ3JCO0FBRUQsaUVBQWVyQiw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxNQUFNLEVBQUVDLFVBQVUsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYy8uL21vZGVscy9Vc2VyLmpzPzczNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgdXNlcm5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgICBmdWxsTmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgaXNBZG1pbjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gICAgZGF0ZU9mQmlydGg6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBQaG9uZTogeyB0eXBlOiBOdW1iZXIgfSxcclxuICAgIGFkZHJlc3M6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBvcmRlcnM6IHtcclxuICAgICAgdHlwZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9yZGVySWQ6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7IGltZzogeyB0eXBlOiBTdHJpbmcgfSB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsImZ1bGxOYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImlzQWRtaW4iLCJCb29sZWFuIiwiZGVmYXVsdCIsImRhdGVPZkJpcnRoIiwiUGhvbmUiLCJOdW1iZXIiLCJhZGRyZXNzIiwib3JkZXJzIiwib3JkZXJJZCIsImltZyIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/register/index.js":
/*!******************************************!*\
  !*** ./pages/api/auth/register/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../util/mongo */ \"(api)/./util/mongo.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst handler = async (req, res)=>{\n    const { method  } = req;\n    await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {} catch (err) {\n            res.status(501).json(err);\n            console.log(err);\n        }\n    }\n    if (method === \"POST\") {\n        const newUser = new _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            username: req.body.username,\n            email: req.body.email,\n            password: crypto_js__WEBPACK_IMPORTED_MODULE_2___default().AES.encrypt(req.body.password, process.env.PASS_SEC).toString()\n        });\n        try {\n            const savedUser = await newUser.save();\n            res.status(201).json(savedUser);\n        } catch (err1) {\n            res.status(500).json(err1);\n        }\n    }\n// if (method === \"DELETE\") {\n//   try {\n//     const products = await Product.create(req.body);\n//     res.status(201).json(products);\n//   } catch (err) {\n//     res.status(500).json(err);\n//   }\n// }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9yZWdpc3Rlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStDO0FBQ0o7QUFDVjtBQUNGO0FBQy9CLE1BQU1JLE9BQU8sR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNsQyxNQUFNLEVBQUVDLE1BQU0sR0FBRSxHQUFHRixHQUFHO0lBQ3RCLE1BQU1MLHVEQUFTLEVBQUUsQ0FBQztJQUVsQixJQUFJTyxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3BCLElBQUksRUFDSCxDQUFDLE9BQU9DLEdBQUcsRUFBRTtZQUNaRixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRixHQUFHLENBQUMsQ0FBQztZQUMxQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO0tBQ0Y7SUFDRCxJQUFJRCxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3JCLE1BQU1NLE9BQU8sR0FBRyxJQUFJWixvREFBSSxDQUFDO1lBQ3ZCYSxRQUFRLEVBQUVULEdBQUcsQ0FBQ1UsSUFBSSxDQUFDRCxRQUFRO1lBQzNCRSxLQUFLLEVBQUVYLEdBQUcsQ0FBQ1UsSUFBSSxDQUFDQyxLQUFLO1lBQ3JCQyxRQUFRLEVBQUVmLDREQUFvQixDQUM1QkcsR0FBRyxDQUFDVSxJQUFJLENBQUNFLFFBQVEsRUFDakJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQ3JCLENBQUNDLFFBQVEsRUFBRTtTQUNiLENBQUM7UUFDRixJQUFJO1lBQ0YsTUFBTUMsU0FBUyxHQUFHLE1BQU1YLE9BQU8sQ0FBQ1ksSUFBSSxFQUFFO1lBQ3RDbkIsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ2MsU0FBUyxDQUFDLENBQUM7U0FDakMsQ0FBQyxPQUFPaEIsSUFBRyxFQUFFO1lBQ1pGLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLElBQUcsQ0FBQyxDQUFDO1NBQzNCO0tBQ0Y7QUFDRCw2QkFBNkI7QUFDN0IsVUFBVTtBQUNWLHVEQUF1RDtBQUN2RCxzQ0FBc0M7QUFDdEMsb0JBQW9CO0FBQ3BCLGlDQUFpQztBQUNqQyxNQUFNO0FBQ04sSUFBSTtDQUNMO0FBQ0QsaUVBQWVKLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2MvLi9wYWdlcy9hcGkvYXV0aC9yZWdpc3Rlci9pbmRleC5qcz81ZDM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvbW9uZ29cIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCBDcnlwdG9KUyBmcm9tIFwiY3J5cHRvLWpzXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcclxuICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuXHJcbiAgaWYgKG1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgdHJ5IHtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwMSkuanNvbihlcnIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAobWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHtcclxuICAgICAgdXNlcm5hbWU6IHJlcS5ib2R5LnVzZXJuYW1lLFxyXG4gICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiBDcnlwdG9KUy5BRVMuZW5jcnlwdChcclxuICAgICAgICByZXEuYm9keS5wYXNzd29yZCxcclxuICAgICAgICBwcm9jZXNzLmVudi5QQVNTX1NFQ1xyXG4gICAgICApLnRvU3RyaW5nKCksXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNhdmVkVXNlciA9IGF3YWl0IG5ld1VzZXIuc2F2ZSgpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihzYXZlZFVzZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGlmIChtZXRob2QgPT09IFwiREVMRVRFXCIpIHtcclxuICAvLyAgIHRyeSB7XHJcbiAgLy8gICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5jcmVhdGUocmVxLmJvZHkpO1xyXG4gIC8vICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihwcm9kdWN0cyk7XHJcbiAgLy8gICB9IGNhdGNoIChlcnIpIHtcclxuICAvLyAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJVc2VyIiwiQ3J5cHRvSlMiLCJqd3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZXJyIiwic3RhdHVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJuZXdVc2VyIiwidXNlcm5hbWUiLCJib2R5IiwiZW1haWwiLCJwYXNzd29yZCIsIkFFUyIsImVuY3J5cHQiLCJwcm9jZXNzIiwiZW52IiwiUEFTU19TRUMiLCJ0b1N0cmluZyIsInNhdmVkVXNlciIsInNhdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/register/index.js\n");

/***/ }),

/***/ "(api)/./util/mongo.js":
/*!***********************!*\
  !*** ./util/mongo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\r\n * Global is used here to maintain a cached connection across hot reloads\r\n * in development. This prevents connections growing exponentially\r\n * during API Route usage.\r\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL21vbmdvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixXQUFXO0FBRTNDLElBQUksQ0FBQ0EsV0FBVyxFQUFFO0lBQ2hCLE1BQU0sSUFBSUcsS0FBSyxDQUNiLHNFQUFzRSxDQUN2RSxDQUFDO0NBQ0g7QUFFRDtBQU9BLElBQUksQ0FBQ0MsTUFBTSxFQUFFO0lBQ1hBLE1BQU0sR0FBR0MsTUFBTSxDQUFDTixRQUFRLEdBQUc7UUFBRU8sSUFBSSxFQUFFLElBQUk7UUFBRUMsT0FBTyxFQUFFLElBQUk7S0FBRSxDQUFDO0NBQzFEO0FBRUQsZUFBZUM7SUFDYixJQUFJSixNQUFNLENBQUNFLElBQUksRUFBRTs7O0lBSWpCLElBQUksQ0FBQ0YsTUFBTSxDQUFDRyxPQUFPLEVBQUU7UUFDbkIsTUFBTUUsSUFBSSxHQUFHO1lBQ1hDLGNBQWM7O1FBR2hCTixNQUFNLENBQUNHLE9BQU8sR0FBR1I7WUFDZixPQUFPQTtTQUNSLENBQUMsQ0FBQztLQUNKO0lBQ0RLLE1BQU0sQ0FBQ0UsSUFBSSxHQUFHLE1BQU1GLENBQUFBLHVEQUFlO0lBQ25DLE9BQU9BLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDO0NBQ3BCO0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jLy4vdXRpbC9tb25nby5qcz9jMGE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcclxuICogaW4gZGV2ZWxvcG1lbnQuIFRoaXMgcHJldmVudHMgY29ubmVjdGlvbnMgZ3Jvd2luZyBleHBvbmVudGlhbGx5XHJcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXHJcbiAqL1xyXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xyXG5cclxuaWYgKCFjYWNoZWQpIHtcclxuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xyXG4gIGlmIChjYWNoZWQuY29ubikge1xyXG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XHJcbiAgICAgIHJldHVybiBtb25nb29zZTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xyXG4gIHJldHVybiBjYWNoZWQuY29ubjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiZGJDb25uZWN0Iiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./util/mongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/register/index.js"));
module.exports = __webpack_exports__;

})();