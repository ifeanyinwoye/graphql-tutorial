"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apollo-client */ \"./apollo-client.js\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//export default function Login({ getRecipes }) {\n// console.log(\"Recipes\", getRecipes);\n// return (\n//   <div>\n//     <div className=\"grid h-screen w-screen place-items-center bg-slate-800 px-4 text-sm font-medium\">\n//       <h1 className=\"text-white text-4xl\">Recipe Frontend</h1>\n//       <div className=\"w-full max-w-sm rounded-lg bg-slate-700/30 shadow\">\n//         <form className=\"p-4 md:p-5 lg:p-6\">\n//           <div className=\"grid gap-y-3\">\n//             <input\n//               className=\"focus:border-blue-400 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400\"\n//               placeholder=\"Name Of Recipe\"\n//             />\n//             <input\n//               className=\"focus:border-blue-400 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400\"\n//               placeholder=\"Description\"\n//             />\n//             <div className=\"relative\">\n//               <a\n//                 className=\"w-full inline-block pt-2 pr-5 pb-2 pl-5 text-xl font-medium text-center text-white bg-indigo-500\n//                 rounded-xl transition duration-200 hover:bg-indigo-600 ease\"\n//               >\n//                 Submit\n//               </a>\n//             </div>\n//           </div>\n//         </form>\n//       </div>\n//     </div>\n//   </div>\n// <div className=\"\">\n//   {getRecipes.map((getRecipe) => (\n//     <div key={getRecipe.id} className=\"\">\n//       <h3>\n//         <a\n//           href=\"#country-name\"\n//           aria-hidden=\"true\"\n//           class=\"aal_anchor\"\n//           id=\"country-name\"\n//         >\n//           <svg\n//             aria-hidden=\"true\"\n//             class=\"aal_svg\"\n//             height=\"16\"\n//             version=\"1.1\"\n//             viewBox=\"0 0 16 16\"\n//             width=\"16\"\n//           >\n//             <path\n//               fill-rule=\"evenodd\"\n//               d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\n//             ></path>\n//           </svg>\n//         </a>\n//         {getRecipe.name}\n//       </h3>\n//       <p>\n//         {getRecipe.name} - {getRecipe.description}\n//       </p>\n//     </div>\n//   ))}\n// </div>\n//);\n//}\n\nfunction Blog(param) {\n    let { posts  } = param;\n    console.log(\"POsts\", posts);\n// will resolve posts to type Post[]\n}\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXFDO0FBQ0M7QUFFdEMsaURBQWlEO0FBQ2pELHNDQUFzQztBQUV0QyxXQUFXO0FBQ1gsVUFBVTtBQUNWLHdHQUF3RztBQUN4RyxpRUFBaUU7QUFDakUsNEVBQTRFO0FBQzVFLCtDQUErQztBQUMvQywyQ0FBMkM7QUFDM0MscUJBQXFCO0FBQ3JCLDhLQUE4SztBQUM5Syw2Q0FBNkM7QUFDN0MsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQiw4S0FBOEs7QUFDOUssMENBQTBDO0FBQzFDLGlCQUFpQjtBQUNqQix5Q0FBeUM7QUFDekMsbUJBQW1CO0FBQ25CLDhIQUE4SDtBQUM5SCwrRUFBK0U7QUFDL0Usa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLGFBQWE7QUFDYixXQUFXO0FBQ1gscUJBQXFCO0FBQ3JCLHFDQUFxQztBQUNyQyw0Q0FBNEM7QUFDNUMsYUFBYTtBQUNiLGFBQWE7QUFDYixpQ0FBaUM7QUFDakMsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQiw4QkFBOEI7QUFDOUIsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixpQ0FBaUM7QUFDakMsOEJBQThCO0FBQzlCLDBCQUEwQjtBQUMxQiw0QkFBNEI7QUFDNUIsa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QixjQUFjO0FBQ2Qsb0JBQW9CO0FBQ3BCLG9DQUFvQztBQUNwQyxrV0FBa1c7QUFDbFcsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2YsMkJBQTJCO0FBQzNCLGNBQWM7QUFDZCxZQUFZO0FBQ1oscURBQXFEO0FBQ3JELGFBQWE7QUFDYixhQUFhO0FBQ2IsUUFBUTtBQUNSLFNBQVM7QUFDVCxJQUFJO0FBQ0osR0FBRztBQUU0QztBQWUvQyxTQUFTRyxLQUFLLEtBQVMsRUFBRTtRQUFYLEVBQUVDLE1BQUssRUFBRSxHQUFUO0lBQ1pDLFFBQVFDLEdBQUcsQ0FBQyxTQUFTRjtBQUNyQixvQ0FBb0M7QUFDdEM7S0FIU0Q7O0FBS1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vYXBvbGxvLWNsaWVudFwiO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbih7IGdldFJlY2lwZXMgfSkge1xyXG4vLyBjb25zb2xlLmxvZyhcIlJlY2lwZXNcIiwgZ2V0UmVjaXBlcyk7XHJcblxyXG4vLyByZXR1cm4gKFxyXG4vLyAgIDxkaXY+XHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgaC1zY3JlZW4gdy1zY3JlZW4gcGxhY2UtaXRlbXMtY2VudGVyIGJnLXNsYXRlLTgwMCBweC00IHRleHQtc20gZm9udC1tZWRpdW1cIj5cclxuLy8gICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC00eGxcIj5SZWNpcGUgRnJvbnRlbmQ8L2gxPlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1zbSByb3VuZGVkLWxnIGJnLXNsYXRlLTcwMC8zMCBzaGFkb3dcIj5cclxuLy8gICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwLTQgbWQ6cC01IGxnOnAtNlwiPlxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC15LTNcIj5cclxuLy8gICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXM6Ym9yZGVyLWJsdWUtNDAwIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgYmctc2xhdGUtNzAwIHB5LTMgcHgtNCB0ZXh0LXNsYXRlLTIwMCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbiBwbGFjZWhvbGRlcjp0ZXh0LXNsYXRlLTQwMFwiXHJcbi8vICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lIE9mIFJlY2lwZVwiXHJcbi8vICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvY3VzOmJvcmRlci1ibHVlLTQwMCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItc2xhdGUtNjAwIGJnLXNsYXRlLTcwMCBweS0zIHB4LTQgdGV4dC1zbGF0ZS0yMDAgb3V0bGluZS1ub25lIHRyYW5zaXRpb24gcGxhY2Vob2xkZXI6dGV4dC1zbGF0ZS00MDBcIlxyXG4vLyAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxyXG4vLyAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbi8vICAgICAgICAgICAgICAgPGFcclxuLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBpbmxpbmUtYmxvY2sgcHQtMiBwci01IHBiLTIgcGwtNSB0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyIHRleHQtd2hpdGUgYmctaW5kaWdvLTUwMFxyXG4vLyAgICAgICAgICAgICAgICAgcm91bmRlZC14bCB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBob3ZlcjpiZy1pbmRpZ28tNjAwIGVhc2VcIlxyXG4vLyAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4vLyAgICAgICAgICAgICAgIDwvYT5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8L2Zvcm0+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgPC9kaXY+XHJcbi8vIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbi8vICAge2dldFJlY2lwZXMubWFwKChnZXRSZWNpcGUpID0+IChcclxuLy8gICAgIDxkaXYga2V5PXtnZXRSZWNpcGUuaWR9IGNsYXNzTmFtZT1cIlwiPlxyXG4vLyAgICAgICA8aDM+XHJcbi8vICAgICAgICAgPGFcclxuLy8gICAgICAgICAgIGhyZWY9XCIjY291bnRyeS1uYW1lXCJcclxuLy8gICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbi8vICAgICAgICAgICBjbGFzcz1cImFhbF9hbmNob3JcIlxyXG4vLyAgICAgICAgICAgaWQ9XCJjb3VudHJ5LW5hbWVcIlxyXG4vLyAgICAgICAgID5cclxuLy8gICAgICAgICAgIDxzdmdcclxuLy8gICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuLy8gICAgICAgICAgICAgY2xhc3M9XCJhYWxfc3ZnXCJcclxuLy8gICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4vLyAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuLy8gICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbi8vICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4vLyAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICA8cGF0aFxyXG4vLyAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4vLyAgICAgICAgICAgICAgIGQ9XCJNNCA5aDF2MUg0Yy0xLjUgMC0zLTEuNjktMy0zLjVTMi41NSAzIDQgM2g0YzEuNDUgMCAzIDEuNjkgMyAzLjUgMCAxLjQxLS45MSAyLjcyLTIgMy4yNVY4LjU5Yy41OC0uNDUgMS0xLjI3IDEtMi4wOUMxMCA1LjIyIDguOTggNCA4IDRINGMtLjk4IDAtMiAxLjIyLTIgMi41UzMgOSA0IDl6bTktM2gtMXYxaDFjMSAwIDIgMS4yMiAyIDIuNVMxMy45OCAxMiAxMyAxMkg5Yy0uOTggMC0yLTEuMjItMi0yLjUgMC0uODMuNDItMS42NCAxLTIuMDlWNi4yNWMtMS4wOS41My0yIDEuODQtMiAzLjI1QzYgMTEuMzEgNy41NSAxMyA5IDEzaDRjMS40NSAwIDMtMS42OSAzLTMuNVMxNC41IDYgMTMgNnpcIlxyXG4vLyAgICAgICAgICAgICA+PC9wYXRoPlxyXG4vLyAgICAgICAgICAgPC9zdmc+XHJcbi8vICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgIHtnZXRSZWNpcGUubmFtZX1cclxuLy8gICAgICAgPC9oMz5cclxuLy8gICAgICAgPHA+XHJcbi8vICAgICAgICAge2dldFJlY2lwZS5uYW1lfSAtIHtnZXRSZWNpcGUuZGVzY3JpcHRpb259XHJcbi8vICAgICAgIDwvcD5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICkpfVxyXG4vLyA8L2Rpdj5cclxuLy8pO1xyXG4vL31cclxuXHJcbmltcG9ydCB7IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9cIik7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIlBPc3RzXCIsIHBvc3RzKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gQmxvZyh7IHBvc3RzIH0pIHtcclxuICBjb25zb2xlLmxvZyhcIlBPc3RzXCIsIHBvc3RzKTtcclxuICAvLyB3aWxsIHJlc29sdmUgcG9zdHMgdG8gdHlwZSBQb3N0W11cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZztcclxuIl0sIm5hbWVzIjpbImdxbCIsImNsaWVudCIsIkluZmVyR2V0U3RhdGljUHJvcHNUeXBlIiwiQmxvZyIsInBvc3RzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});