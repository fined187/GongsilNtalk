"use strict";
exports.id = 9993;
exports.ids = [9993];
exports.modules = {

/***/ 9993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Megazine)
/* harmony export */ });
/* harmony import */ var _components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4201);
/* harmony import */ var _components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2832);
/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6983);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Paging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8613);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









function Megazine({
  post,
  mPosts,
  setCurrentPage
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Notice__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__/* .EmptyBox */ .cs, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__/* .ContentsBox */ .Kh, {
      children: [post?.map((a, i) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__/* .ProfileBox */ .PX, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: '/ProPic.png',
              alt: "ProPic",
              width: 30,
              height: 30,
              style: {
                marginBottom: '16px'
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__/* .YUsername */ .Qp, {
              children: "\uACF5\uC2E4\uC564\uD1A1"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: '/YImage.png',
              alt: "YImage",
              width: 154,
              height: 108,
              style: {
                position: 'absolute',
                left: '600px',
                marginTop: '-20px'
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: `/Community/Contents/Megazine/posts/${a.id}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__/* .Ytitle */ .j5, {
              children: a.title
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__/* .YContents */ .fG, {
            children: a.content
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__/* .YFooter */ .Bj, {
            children: [a.date + ' ', " ", '추천 ' + a.reco + ' ', " ", '댓글 ' + a.repl]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__/* .Line */ .x1, {})]
        }, i);
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Paging__WEBPACK_IMPORTED_MODULE_4__["default"], {
        totalPosts: mPosts?.length,
        paginate: setCurrentPage
      })]
    })]
  });
}

/***/ })

};
;