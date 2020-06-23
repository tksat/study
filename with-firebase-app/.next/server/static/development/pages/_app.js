module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/userContext.js":
/*!********************************!*\
  !*** ./context/userContext.js ***!
  \********************************/
/*! exports provided: UserContext, default, useUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UserContextComp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useUser\", function() { return useUser; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.js\");\nvar _jsxFileName = \"/Users/ouchi/html/study/with-firebase-app/context/userContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nfunction UserContextComp({\n  children\n}) {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: loadingUser,\n    1: setLoadingUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true); // Helpful, to update the UI accordingly.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    // Listen authenticated user\n    const unsubscriber = _firebase_clientApp__WEBPACK_IMPORTED_MODULE_1__[\"default\"].auth().onAuthStateChanged(async user => {\n      try {\n        if (user) {\n          // User is signed in.\n          const {\n            uid,\n            displayName,\n            email,\n            photoURL\n          } = user; // You could also look for the user doc in your Firestore (if you have one):\n          // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()\n\n          setUser({\n            uid,\n            displayName,\n            email,\n            photoURL\n          });\n        } else setUser(null);\n      } catch (error) {// Most probably a connection error. Handle appropriately.\n      } finally {\n        setLoadingUser(false);\n      }\n    }); // Unsubscribe auth listener on unmount\n\n    return () => unsubscriber();\n  }, []);\n  return __jsx(UserContext.Provider, {\n    value: {\n      user,\n      setUser,\n      loadingUser\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, children);\n} // Custom hook that shorhands the context!\n\nconst useUser = () => Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(UserContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L3VzZXJDb250ZXh0LmpzPzQzNmUiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVXNlckNvbnRleHRDb21wIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwibG9hZGluZ1VzZXIiLCJzZXRMb2FkaW5nVXNlciIsInVzZUVmZmVjdCIsInVuc3Vic2NyaWJlciIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVpZCIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJwaG90b1VSTCIsImVycm9yIiwidXNlVXNlciIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsV0FBVyxHQUFHQywyREFBYSxFQUFqQztBQUVRLFNBQVNDLGVBQVQsQ0FBeUI7QUFBRUM7QUFBRixDQUF6QixFQUF1QztBQUNwRCxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsSUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Ysc0RBQVEsQ0FBQyxJQUFELENBQTlDLENBRm9ELENBRUM7O0FBRXJERyx5REFBUyxDQUFDLE1BQU07QUFDZDtBQUNBLFVBQU1DLFlBQVksR0FBR0MsMkRBQVEsQ0FBQ0MsSUFBVCxHQUFnQkMsa0JBQWhCLENBQW1DLE1BQU9ULElBQVAsSUFBZ0I7QUFDdEUsVUFBSTtBQUNGLFlBQUlBLElBQUosRUFBVTtBQUNSO0FBQ0EsZ0JBQU07QUFBRVUsZUFBRjtBQUFPQyx1QkFBUDtBQUFvQkMsaUJBQXBCO0FBQTJCQztBQUEzQixjQUF3Q2IsSUFBOUMsQ0FGUSxDQUdSO0FBQ0E7O0FBQ0FDLGlCQUFPLENBQUM7QUFBRVMsZUFBRjtBQUFPQyx1QkFBUDtBQUFvQkMsaUJBQXBCO0FBQTJCQztBQUEzQixXQUFELENBQVA7QUFDRCxTQU5ELE1BTU9aLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDUixPQVJELENBUUUsT0FBT2EsS0FBUCxFQUFjLENBQ2Q7QUFDRCxPQVZELFNBVVU7QUFDUlYsc0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRDtBQUNGLEtBZG9CLENBQXJCLENBRmMsQ0FrQmQ7O0FBQ0EsV0FBTyxNQUFNRSxZQUFZLEVBQXpCO0FBQ0QsR0FwQlEsRUFvQk4sRUFwQk0sQ0FBVDtBQXNCQSxTQUNFLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVOLFVBQUY7QUFBUUMsYUFBUjtBQUFpQkU7QUFBakIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixRQURILENBREY7QUFLRCxDLENBRUQ7O0FBQ08sTUFBTWdCLE9BQU8sR0FBRyxNQUFNQyx3REFBVSxDQUFDcEIsV0FBRCxDQUFoQyIsImZpbGUiOiIuL2NvbnRleHQvdXNlckNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UvY2xpZW50QXBwJ1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckNvbnRleHRDb21wKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbG9hZGluZ1VzZXIsIHNldExvYWRpbmdVc2VyXSA9IHVzZVN0YXRlKHRydWUpIC8vIEhlbHBmdWwsIHRvIHVwZGF0ZSB0aGUgVUkgYWNjb3JkaW5nbHkuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBMaXN0ZW4gYXV0aGVudGljYXRlZCB1c2VyXG4gICAgY29uc3QgdW5zdWJzY3JpYmVyID0gZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChhc3luYyAodXNlcikgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAvLyBVc2VyIGlzIHNpZ25lZCBpbi5cbiAgICAgICAgICBjb25zdCB7IHVpZCwgZGlzcGxheU5hbWUsIGVtYWlsLCBwaG90b1VSTCB9ID0gdXNlclxuICAgICAgICAgIC8vIFlvdSBjb3VsZCBhbHNvIGxvb2sgZm9yIHRoZSB1c2VyIGRvYyBpbiB5b3VyIEZpcmVzdG9yZSAoaWYgeW91IGhhdmUgb25lKTpcbiAgICAgICAgICAvLyBjb25zdCB1c2VyRG9jID0gYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlKCkuZG9jKGB1c2Vycy8ke3VpZH1gKS5nZXQoKVxuICAgICAgICAgIHNldFVzZXIoeyB1aWQsIGRpc3BsYXlOYW1lLCBlbWFpbCwgcGhvdG9VUkwgfSlcbiAgICAgICAgfSBlbHNlIHNldFVzZXIobnVsbClcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE1vc3QgcHJvYmFibHkgYSBjb25uZWN0aW9uIGVycm9yLiBIYW5kbGUgYXBwcm9wcmlhdGVseS5cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmdVc2VyKGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBVbnN1YnNjcmliZSBhdXRoIGxpc3RlbmVyIG9uIHVubW91bnRcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmVyKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2V0VXNlciwgbG9hZGluZ1VzZXIgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG4vLyBDdXN0b20gaG9vayB0aGF0IHNob3JoYW5kcyB0aGUgY29udGV4dCFcbmV4cG9ydCBjb25zdCB1c2VVc2VyID0gKCkgPT4gdXNlQ29udGV4dChVc2VyQ29udGV4dClcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/userContext.js\n");

/***/ }),

/***/ "./firebase/clientApp.js":
/*!*******************************!*\
  !*** ./firebase/clientApp.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_analytics__WEBPACK_IMPORTED_MODULE_4__);\n\n // If you need it\n\n // If you need it\n\n // If you need it\n\n // If you need it\n\nconst clientCredentials = {\n  apiKey: \"\",\n  authDomain: \"\",\n  databaseURL: \"\",\n  projectId: \"\",\n  storageBucket: \"\",\n  messagingSenderId: \"\",\n  appId: \"\"\n}; // Check that `window` is in scope for the analytics module!\n\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9jbGllbnRBcHAuanM/M2QzMSJdLCJuYW1lcyI6WyJjbGllbnRDcmVkZW50aWFscyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIkZJUkVCQVNFX0FQUF9JRCIsImZpcmViYXNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FDdUI7O0NBQ0s7O0NBQ0Y7O0NBQ0U7O0FBRTVCLE1BQU1BLGlCQUFpQixHQUFHO0FBQ3hCQyxRQUFNLEVBQUVDLEVBRGdCO0FBRXhCQyxZQUFVLEVBQUVELEVBRlk7QUFHeEJFLGFBQVcsRUFBRUYsRUFIVztBQUl4QkcsV0FBUyxFQUFFSCxFQUphO0FBS3hCSSxlQUFhLEVBQUVKLEVBTFM7QUFNeEJLLG1CQUFpQixFQUFFTCxFQU5LO0FBT3hCTSxPQUFLLEVBQUVOLEVBQTJCTztBQVBWLENBQTFCLEMsQ0FVQTs7QUFDQSxJQUFJLEtBQUosRUFBNEQsRUFJM0Q7O0FBRWNDLGtIQUFmIiwiZmlsZSI6Ii4vZmlyZWJhc2UvY2xpZW50QXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCdcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCcgLy8gSWYgeW91IG5lZWQgaXRcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJyAvLyBJZiB5b3UgbmVlZCBpdFxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJyAvLyBJZiB5b3UgbmVlZCBpdFxuaW1wb3J0ICdmaXJlYmFzZS9hbmFseXRpY3MnIC8vIElmIHlvdSBuZWVkIGl0XG5cbmNvbnN0IGNsaWVudENyZWRlbnRpYWxzID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQUF9JRCxcbn1cblxuLy8gQ2hlY2sgdGhhdCBgd2luZG93YCBpcyBpbiBzY29wZSBmb3IgdGhlIGFuYWx5dGljcyBtb2R1bGUhXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY2xpZW50Q3JlZGVudGlhbHMpXG4gIC8vIFRvIGVuYWJsZSBhbmFseXRpY3MuIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2FuYWx5dGljcy9nZXQtc3RhcnRlZFxuICBpZiAoJ21lYXN1cmVtZW50SWQnIGluIGNsaWVudENyZWRlbnRpYWxzKSBmaXJlYmFzZS5hbmFseXRpY3MoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/clientApp.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/userContext */ \"./context/userContext.js\");\nvar _jsxFileName = \"/Users/ouchi/html/study/with-firebase-app/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n // Custom App to wrap it with context provider\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return __jsx(_context_userContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztDQUVBOztBQUNlLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUF1QztBQUNwRCxTQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCxlQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGO0FBS0QiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJQcm92aWRlciBmcm9tICcuLi9jb250ZXh0L3VzZXJDb250ZXh0J1xuXG4vLyBDdXN0b20gQXBwIHRvIHdyYXAgaXQgd2l0aCBjb250ZXh0IHByb3ZpZGVyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFVzZXJQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1VzZXJQcm92aWRlcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/analytics\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hbmFseXRpY3NcIj82ZjI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FuYWx5dGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FuYWx5dGljc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/analytics\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/firestore\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIj8wNjI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2ZpcmVzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/firestore\n");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/storage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCI/ZTk4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9zdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/storage\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });