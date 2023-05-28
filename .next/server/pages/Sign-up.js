"use strict";
(() => {
var exports = {};
exports.id = 5039;
exports.ids = [5039,2902,8958,3399,1584,3494,4846,4962,6587,1918,3844,4821,5192,6230,5340,2686,4188,907,4525];
exports.modules = {

/***/ 5112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SignUp)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/auth/AgreeBox.tsx

const AgreeBox = external_styled_components_default().div.withConfig({
  displayName: "AgreeBox",
  componentId: "sc-wphths-0"
})(["position:absolute;top:328px;left:79px;box-sizing:border-box;width:418px;height:146px;background-color:#ffffff;border:1px solid #d5d5d5;border-radius:5px;"]);
// EXTERNAL MODULE: ./src/components/auth/Checkbox.tsx
var Checkbox = __webpack_require__(6095);
;// CONCATENATED MODULE: ./src/components/auth/EmailForm.tsx

const EmailForm = external_styled_components_default().div.withConfig({
  displayName: "EmailForm",
  componentId: "sc-qnjfhe-0"
})(["box-sizing:border-box;position:absolute;width:576px;height:644px;left:0px;top:290px;right:672px;bottom:35px;border:none;border-radius:0px 0px 10px 10px;"]);
// EXTERNAL MODULE: ./src/components/auth/Form.tsx
var Form = __webpack_require__(1659);
// EXTERNAL MODULE: ./src/components/auth/Input.tsx
var Input = __webpack_require__(9542);
// EXTERNAL MODULE: ./src/components/auth/Label.tsx
var Label = __webpack_require__(4132);
// EXTERNAL MODULE: ./src/components/auth/LoginBtn.tsx
var LoginBtn = __webpack_require__(1784);
;// CONCATENATED MODULE: ./src/components/auth/SignUpStart.tsx

const KakaoBox = external_styled_components_default().div.withConfig({
  displayName: "SignUpStart__KakaoBox",
  componentId: "sc-1leatxo-0"
})(["position:absolute;top:146px;left:80px;right:80px;bottom:200px;height:50px;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 10px;gap:6px;cursor:pointer;background-color:#fee500;border-radius:5px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:16px;line-height:20px;align-items:center;text-align:center;letter-spacing:-0.03em;color:rgba(0,0,0,0.85);"]);
const NaverBox = external_styled_components_default().div.withConfig({
  displayName: "SignUpStart__NaverBox",
  componentId: "sc-1leatxo-1"
})(["position:absolute;top:206px;left:80px;right:80px;bottom:140px;height:50px;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 10px;gap:6px;cursor:pointer;background-color:#03c75a;border-radius:5px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:16px;line-height:20px;align-items:center;text-align:center;letter-spacing:-0.03em;color:#ffffff;"]);
const EmailBox = external_styled_components_default().div.withConfig({
  displayName: "SignUpStart__EmailBox",
  componentId: "sc-1leatxo-2"
})(["position:absolute;top:266px;left:80px;right:80px;bottom:140px;height:50px;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 10px;gap:6px;cursor:pointer;background-color:#9b9b9b;border-radius:5px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:16px;line-height:20px;align-items:center;text-align:center;letter-spacing:-0.03em;border-radius:5px;color:#ffffff;"]);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/Sign-up.tsx














function SignUp() {
  const {
    0: emailRegi,
    1: setEmailRegi
  } = (0,external_react_.useState)(false);
  const {
    0: checkItems,
    1: setCheckItems
  } = (0,external_react_.useState)([]);
  const data = [{
    id: 0,
    title: '[필수] 약관1 및 클릭시 약관 상세 바로가기'
  }, {
    id: 1,
    title: '[필수] 약관2 및 클릭시 약관 상세 바로가기'
  }, {
    id: 2,
    title: '[필수] 약관3 및 클릭시 약관 상세 바로가기'
  }, {
    id: 3,
    title: '[선택] 약관4 및 클릭시 약관 상세 바로가기'
  }];

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };

  const handleAllCheck = checked => {
    if (checked) {
      const idArray = [];
      data.forEach(el => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form/* SignUpForm */.W, {
      emailRegi: emailRegi,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* SignUpLabel */.oT, {
        children: "\uD68C\uC6D0\uAC00\uC785\uC744 \uD658\uC601\uD569\uB2C8\uB2E4!"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(KakaoBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: '/KaKaoLogo.png',
          alt: "KakaoLogo",
          width: 17.39,
          height: 16
        }), "\uCE74\uCE74\uC624\uB85C \uC2DC\uC791\uD558\uAE30"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(NaverBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: '/NaverLogo.png',
          alt: "NaverLogo",
          width: 17.39,
          height: 16
        }), "\uB124\uC774\uBC84\uB85C \uC2DC\uC791\uD558\uAE30"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(EmailBox, {
        onClick: () => setEmailRegi(!emailRegi),
        children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: '/MailLogo.png',
          alt: "MailLogo",
          width: 17.39,
          height: 16
        }), "\uC774\uBA54\uC77C\uB85C \uC2DC\uC791\uD558\uAE30"]
      }), emailRegi ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(EmailForm, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* EmailLabel */.l9, {
          children: "\uC774\uBA54\uC77C"
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* RegiEInput */.rY, {
          name: "email",
          type: "email",
          placeholder: "example@example.com"
        }), /*#__PURE__*/jsx_runtime_.jsx(Label/* PassLabel */.gk, {
          children: "\uBE44\uBC00\uBC88\uD638"
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* RegiPInput */.Bh, {
          name: "password",
          type: "password",
          placeholder: "8\uC790\uB9AC \uC774\uC0C1 \uC601\uBB38, \uC22B\uC790 \uD3EC\uD568"
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* RegiPInputConfirm */.S_, {
          name: "passwordConfirm",
          type: "password",
          placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
        }), /*#__PURE__*/jsx_runtime_.jsx(Checkbox/* AgreeCheckBox */.aU, {
          onChange: e => handleAllCheck(e.target.checked),
          checked: checkItems.length === data.length ? true : false
        }), /*#__PURE__*/jsx_runtime_.jsx(Label/* AllAgree */.u5, {
          children: "\uBAA8\uB450 \uB3D9\uC758\uD569\uB2C8\uB2E4."
        }), /*#__PURE__*/jsx_runtime_.jsx(AgreeBox, {
          children: data.map((el, index) => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                margin: '16px'
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* DetailAgree */.rk, {
                children: el.title
              }, index), /*#__PURE__*/jsx_runtime_.jsx(Checkbox/* ACheckBox */.hY, {
                onChange: e => handleSingleCheck(e.target.checked, el.id),
                checked: checkItems.includes(el.id) ? true : false
              })]
            }, index);
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(LoginBtn/* NextBtn */.EU, {
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/Auth",
            children: "\uB2E4\uC74C"
          })
        })]
      }) : null]
    })
  });
}

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [373,1597,5675,1664,5071,1105], () => (__webpack_exec__(5112)));
module.exports = __webpack_exports__;

})();