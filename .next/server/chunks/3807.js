"use strict";
exports.id = 3807;
exports.ids = [3807];
exports.modules = {

/***/ 3807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QnA)
/* harmony export */ });
/* harmony import */ var _components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7513);
/* harmony import */ var _components_community_TabBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1336);
/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6983);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_community_TabSpan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8557);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









function QnA() {
  const {
    0: tabClicked,
    1: setTabClicked
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
  const {
    0: innerTab,
    1: setInnerTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_1__/* .TabBox */ ._D, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: '/Community/Contents/Youtube',
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_4__/* .GongtalkContentsText */ .Bf, {
          tabClicked: tabClicked,
          onClick: () => setTabClicked(0),
          children: "\uACF5\uD1A1 \uCEE8\uD150\uCE20"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_4__/* .CommunityText */ .ZF, {
        tabClicked: tabClicked,
        onClick: () => setTabClicked(1),
        children: "\uCEE4\uBBA4\uB2C8\uD2F0"
      }), tabClicked == 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_0__/* .QnABoxTab */ .dt, {
          innerTab: innerTab,
          onClick: () => setInnerTab(0),
          children: "\uC9C8\uBB38/\uB2F5\uBCC0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: '/Community/Board/FreeBoard',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_0__/* .FreeBoardTab */ .Nz, {
            innerTab: innerTab,
            onClick: () => setInnerTab(1),
            children: "\uC790\uC720\uAE00"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_0__/* .KnowHowTab */ .qf, {
          innerTab: innerTab,
          onClick: () => setInnerTab(2),
          children: "\uB178\uD558\uC6B0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_0__/* .ReviewTab */ .hL, {
          innerTab: innerTab,
          onClick: () => setInnerTab(3),
          children: "\uD6C4\uAE30"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Notice__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: '/Community/Contents/Youtube',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_1__/* .YoutubeTab */ .yy, {
            innerTab: innerTab,
            onClick: () => setInnerTab(0),
            children: "\uACF5\uD1A1 \uC720\uD29C\uBE0C"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: '/Community/Contents/Megazine',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_1__/* .MegazineTab */ .Dn, {
            innerTab: innerTab,
            onClick: () => setInnerTab(1),
            children: "\uACF5\uD1A1 \uB9E4\uAC70\uC9C4"
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_0__/* .ContentsBox */ .Kh, {})]
  });
}

/***/ })

};
;