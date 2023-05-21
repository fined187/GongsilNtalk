"use strict";
exports.id = 1166;
exports.ids = [1166];
exports.modules = {

/***/ 1166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contents)
});

// EXTERNAL MODULE: ./src/components/community/TabBox.tsx
var TabBox = __webpack_require__(1336);
// EXTERNAL MODULE: ./src/components/community/TabSpan.tsx
var TabSpan = __webpack_require__(8557);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./NoticeDummy.tsx
var NoticeDummy = __webpack_require__(9257);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/community/SearchInput.tsx

const slideIn = (0,external_styled_components_.keyframes)(["from{transform:translateX(-100%);}to{transform:translateX(0);}"]);
const slideOut = (0,external_styled_components_.keyframes)(["from{transform:translateX(0);}to{transform:translateX(-100%);}"]);
const SearchContainer = external_styled_components_default().div.withConfig({
  displayName: "SearchInput__SearchContainer",
  componentId: "sc-do96kx-0"
})(["position:relative;"]);
const SearchIcon = external_styled_components_default().i.withConfig({
  displayName: "SearchInput__SearchIcon",
  componentId: "sc-do96kx-1"
})(["position:absolute;top:50%;right:0;transform:translateX(-50%);cursor:pointer;transition:transform 0.2s ease-in-out;&:hover{transform:translateY(-50%) scale(1.2);}"]);
const SearchInput = external_styled_components_default().input.withConfig({
  displayName: "SearchInput",
  componentId: "sc-do96kx-2"
})(["position:absolute;top:98px;left:720px;right:0;transform:translateY(-50%) translateX(-100%);width:200px;padding:8px;border-radius:4px;border:none;box-shadow:0 2px 4px rgba(0,0,0,0.2);animation:", " 0.2s forwards;animation-fill-mode:backwards;"], ({
  show
}) => show ? slideIn : slideOut);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/Community/Contents/index.tsx









function Contents({
  tabClicked,
  setTabClicked
}) {
  const {
    0: innerTab,
    1: setInnerTab
  } = (0,external_react_.useState)(0);
  const {
    0: post,
    1: setPost
  } = (0,external_react_.useState)([]);
  const {
    0: yPosts,
    1: setYposts
  } = (0,external_react_.useState)(NoticeDummy/* Youtubes */.Af);
  const {
    0: mPosts,
    1: setMposts
  } = (0,external_react_.useState)(NoticeDummy/* community */.bJ);
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,external_react_.useState)(1);
  const {
    0: postPerPage,
    1: setPostPerPage
  } = (0,external_react_.useState)(5);
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const currentPosts = posts => {
    let currentPosts = 0;
    currentPosts = posts?.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  /** API 생성시 수정 */


  (0,external_react_.useEffect)(() => {
    const fetchData = () => {
      if (innerTab === 0) {
        setPost(currentPosts(yPosts));
      } else {
        setPost(currentPosts(mPosts));
      }
    };

    fetchData();
  }, [currentPage, innerTab]);
  const {
    0: showSearch,
    1: setShowSearch
  } = (0,external_react_.useState)(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(TabSpan/* GongtalkContentsText */.Bf, {
      tabClicked: tabClicked,
      onClick: () => setTabClicked(0),
      children: "\uACF5\uD1A1 \uCEE8\uD150\uCE20"
    }), tabClicked === 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TabBox/* YoutubeTab */.yy, {
        innerTab: innerTab,
        onClick: () => setInnerTab(0),
        children: "\uACF5\uD1A1 \uC720\uD29C\uBE0C"
      }), /*#__PURE__*/jsx_runtime_.jsx(TabBox/* MegazineTab */.Dn, {
        innerTab: innerTab,
        onClick: () => setInnerTab(1),
        children: "\uACF5\uD1A1 \uB9E4\uAC70\uC9C4"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SearchContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(SearchIcon, {
          className: "fa fa-search",
          onClick: handleSearchClick,
          style: {
            position: 'absolute',
            left: '750px',
            top: '95px',
            cursor: 'pointer'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
            src: '/SearchIcon.png',
            alt: "SearchIcon",
            width: 20,
            height: 20
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(SearchInput, {
          type: "text",
          placeholder: "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694...",
          show: showSearch
        })]
      })]
    }) : null]
  });
}

/***/ })

};
;