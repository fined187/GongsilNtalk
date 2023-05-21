"use strict";
exports.id = 8613;
exports.ids = [8613];
exports.modules = {

/***/ 8613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Paging)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/community/PagingStyle.tsx

const PageUl = external_styled_components_default().ul.withConfig({
  displayName: "PagingStyle__PageUl",
  componentId: "sc-42c1zw-0"
})(["position:absolute;list-style:none;text-align:center;border-radius:3px;color:black;padding:1px;top:1170px;left:330px;"]);
const PageLi = external_styled_components_default().li.withConfig({
  displayName: "PagingStyle__PageLi",
  componentId: "sc-42c1zw-1"
})(["display:inline-block;align-items:flex-start;padding:0px;gap:22px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:16px;line-height:22px;letter-spacing:-0.03em;color:#9b9b9b;"]);
const PageSpan = external_styled_components_default().button.withConfig({
  displayName: "PagingStyle__PageSpan",
  componentId: "sc-42c1zw-2"
})(["width:25px;border-radius:5px;cursor:pointer;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:", ";font-size:16px;line-height:22px;letter-spacing:-0.03em;color:", ";"], props => `${props.activeBtn ? 700 : 500}`, props => `${props.activeBtn ? '#000000' : '#9B9B9B'}`);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/Community/Paging.tsx




function Paging({
  totalPosts,
  paginate
}) {
  const {
    0: activeBtn,
    1: setActiveBtb
  } = (0,external_react_.useState)(1);

  const handleClick = number => {
    setActiveBtb(number);
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / 5); i++) {
    pageNumbers.push(i);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/jsx_runtime_.jsx(PageUl, {
          children: pageNumbers.map(number => /*#__PURE__*/jsx_runtime_.jsx(PageLi, {
            children: /*#__PURE__*/jsx_runtime_.jsx(PageSpan, {
              activeBtn: activeBtn === number,
              onClick: () => {
                paginate(number);
                handleClick(number);
              },
              children: number
            })
          }, number))
        })
      })
    })
  });
}

/***/ })

};
;