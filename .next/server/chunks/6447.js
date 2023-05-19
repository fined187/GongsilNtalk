"use strict";
exports.id = 6447;
exports.ids = [6447,5723];
exports.modules = {

/***/ 6447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MMegazine)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/community/MMegazine.tsx

const MMegazineBox = external_styled_components_default().div.withConfig({
  displayName: "MMegazine__MMegazineBox",
  componentId: "sc-9oh99s-0"
})(["@media screen and (max-width:768px){position:absolute;width:360px;height:456px;left:-15px;top:130px;overflow:scroll;background-color:#ffffff;}"]);
const MMegazineContents = external_styled_components_default().div.withConfig({
  displayName: "MMegazine__MMegazineContents",
  componentId: "sc-9oh99s-1"
})(["@media screen and (max-width:768px){width:324px;height:138px;margin-top:14px;margin-left:18px;right:18px;bottom:14px;background-color:#ffffff;}"]);
const MMegazineProfileBox = external_styled_components_default().div.withConfig({
  displayName: "MMegazine__MMegazineProfileBox",
  componentId: "sc-9oh99s-2"
})(["@media screen and (max-width:768px){box-sizing:border-box;width:30px;height:30px;left:0px;top:0px;border-radius:15px;background-color:#f0f0f0;border:1px solid #9b9b9b;}"]);
const MMegazineProfileName = external_styled_components_default().span.withConfig({
  displayName: "MMegazine__MMegazineProfileName",
  componentId: "sc-9oh99s-3"
})(["@media screen and (max-width:768px){position:absolute;width:47px;height:16px;left:57px;margin-top:8px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:13px;line-height:16px;display:flex;align-items:center;letter-spacing:-0.03em;color:#282828;}"]);
const MMegazineContentsDetail = external_styled_components_default().div.withConfig({
  displayName: "MMegazine__MMegazineContentsDetail",
  componentId: "sc-9oh99s-4"
})(["position:absolute;width:216px;height:36px;left:18px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:400;font-size:14px;line-height:18px;letter-spacing:-0.03em;color:#666666;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);
const MMegazineContentsTitle = external_styled_components_default().span.withConfig({
  displayName: "MMegazine__MMegazineContentsTitle",
  componentId: "sc-9oh99s-5"
})(["@media screen and (max-width:768px){width:216px;height:20px;left:0px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:16px;line-height:20px;letter-spacing:-0.03em;color:#343232;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}"]);
const MMegazineFooter = external_styled_components_default().div.withConfig({
  displayName: "MMegazine__MMegazineFooter",
  componentId: "sc-9oh99s-6"
})(["position:absolute;width:163px;height:15px;left:19px;margin-top:38px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:400;font-size:12px;line-height:15px;letter-spacing:-0.02em;color:#9b9b9b;"]);
const MMegazineLine = external_styled_components_default().div.withConfig({
  displayName: "MMegazine__MMegazineLine",
  componentId: "sc-9oh99s-7"
})(["@media screen and (max-width:768px){width:359px;height:0px;opacity:0.6;border:1px solid #f0f0f0;}"]);
const MMegazineContentsBox = external_styled_components_default().div.withConfig({
  displayName: "MMegazine__MMegazineContentsBox",
  componentId: "sc-9oh99s-8"
})(["@media screen and (max-width:768px){width:324px;height:95px;top:43px;background-color:#ffffff;}"]);
// EXTERNAL MODULE: ./MegazineDummy.json
var MegazineDummy = __webpack_require__(5723);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/Community/Contents/Megazine/MMegazine.tsx






function MMegazine() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(MMegazineBox, {
      children: MegazineDummy.map((a, i) => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(MMegazineContents, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(MMegazineProfileBox, {
              children: /*#__PURE__*/jsx_runtime_.jsx(MMegazineProfileName, {
                children: "\uACF5\uC2E4\uC564\uD1A1"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(MMegazineContentsTitle, {
              children: a.title
            }), /*#__PURE__*/jsx_runtime_.jsx(MMegazineContentsDetail, {
              children: a.content
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MMegazineFooter, {
              children: [a.date + ' ', " ", '추천 ' + a.reco + ' ', " ", '댓글 ' + a.repl]
            }), /*#__PURE__*/jsx_runtime_.jsx(MMegazineContentsBox, {
              children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                src: '/YImage',
                alt: "YImage",
                width: 92,
                height: 92,
                style: {
                  position: 'absolute',
                  left: '250px',
                  marginTop: '-20px'
                }
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(MMegazineLine, {})]
        }, i);
      })
    })
  });
}

/***/ }),

/***/ 5723:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"1","title":"Post Title #1","content":"#1 content","date":"2023-04-02","reco":12,"repl":278},{"id":"2","title":"Post Title #2","content":"#2 content","date":"2023-04-02","reco":12,"repl":278},{"id":"3","title":"Post Title #3","content":"#3 content","date":"2023-04-02","reco":12,"repl":278},{"id":"4","title":"Post Title #4","content":"#4 content","date":"2023-04-02","reco":12,"repl":278},{"id":"5","title":"Post Title #5","content":"#5 content","date":"2023-04-02","reco":12,"repl":278},{"id":"6","title":"Post Title #6","content":"#6 content","date":"2023-04-02","reco":12,"repl":278},{"id":"7","title":"Post Title #7","content":"#7 content","date":"2023-04-02","reco":12,"repl":278},{"id":"8","title":"Post Title #8","content":"#8 content","date":"2023-04-02","reco":12,"repl":278},{"id":"9","title":"Post Title #9","content":"#9 content","date":"2023-04-02","reco":12,"repl":278}]');

/***/ })

};
;