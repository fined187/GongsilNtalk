"use strict";
(() => {
var exports = {};
exports.id = 2789;
exports.ids = [2789,4962,1918,3844,4821,5192,6230,5340,2686,4525];
exports.modules = {

/***/ 1752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GlobalStyle": () => (/* binding */ GlobalStyle),
  "default": () => (/* binding */ MyBoard)
});

// EXTERNAL MODULE: ./src/components/alarm/Alarm.tsx
var Alarm = __webpack_require__(2765);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/myBoard/BoardText.tsx

const MainText = external_styled_components_default().span.withConfig({
  displayName: "BoardText__MainText",
  componentId: "sc-1be9288-0"
})(["position:absolute;width:203px;height:30px;left:calc(50% - 203px / 2 + 0.5px);top:52px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:24px;line-height:30px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#000000;z-index:99999;"]);
;// CONCATENATED MODULE: ./src/components/myBoard/Box.tsx

const TopBox = external_styled_components_default().div.withConfig({
  displayName: "Box__TopBox",
  componentId: "sc-2jh6aj-0"
})(["position:absolute;width:1920px;height:147px;left:0px;top:60px;background:#ffffff;border-bottom:1px solid #f0f0f0;"]);
const BoardListBox = external_styled_components_default().div.withConfig({
  displayName: "Box__BoardListBox",
  componentId: "sc-2jh6aj-1"
})(["display:flex;flex-direction:column;align-items:flex-start;padding:0px;position:absolute;top:289px;left:472px;width:976px;height:660px;"]);
;// CONCATENATED MODULE: ./src/components/myBoard/Table.tsx

const TableContainer = external_styled_components_default().div.withConfig({
  displayName: "Table__TableContainer",
  componentId: "sc-mplahb-0"
})(["position:absolute;left:35px;width:938px;border-radius:4px;"]);
const TableHeader = external_styled_components_default().div.withConfig({
  displayName: "Table__TableHeader",
  componentId: "sc-mplahb-1"
})(["display:flex;background-color:#ffffff;font-weight:bold;padding:8px;"]);
const Underline = external_styled_components_default().div.withConfig({
  displayName: "Table__Underline",
  componentId: "sc-mplahb-2"
})(["width:938px;height:1px;border:1px solid #d5d4d4;position:absolute;top:40px;"]);
const BottomUnderline = external_styled_components_default().div.withConfig({
  displayName: "Table__BottomUnderline",
  componentId: "sc-mplahb-3"
})(["width:938px;height:1px;border:1px solid #f0f0f0;"]);
const TableRow = external_styled_components_default().div.withConfig({
  displayName: "Table__TableRow",
  componentId: "sc-mplahb-4"
})(["display:flex;padding:20px;background-color:", ";cursor:pointer;"], props => props.even ? 'white' : 'white');
const TableCell = external_styled_components_default().div.withConfig({
  displayName: "Table__TableCell",
  componentId: "sc-mplahb-5"
})(["flex:1;margin-left:20px;"]);
const TableCellNo = external_styled_components_default().div.withConfig({
  displayName: "Table__TableCellNo",
  componentId: "sc-mplahb-6"
})([""]);
const TableTitleCell = external_styled_components_default().div.withConfig({
  displayName: "Table__TableTitleCell",
  componentId: "sc-mplahb-7"
})(["width:500px;align-items:center;justify-content:center;"]);
const SelectBox = external_styled_components_default().div.withConfig({
  displayName: "Table__SelectBox",
  componentId: "sc-mplahb-8"
})(["position:absolute;width:938px;height:30px;left:510px;top:245px;"]);
const SelectAllText = external_styled_components_default().span.withConfig({
  displayName: "Table__SelectAllText",
  componentId: "sc-mplahb-9"
})(["position:absolute;left:30px;width:51px;height:18px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;letter-spacing:-0.03em;color:#686564;"]);
const BoardCheckBox = external_styled_components_default().input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "Table__BoardCheckBox",
  componentId: "sc-mplahb-10"
})(["appearance:none;height:16px;width:16px;border:1px solid #ccc;border-radius:3px;position:absolute;left:0px;margin-top:5px;margin-left:10px;&:checked{&::before{content:'\\2713';display:block;height:16px;width:16px;background-color:#f16341;border-radius:3px;text-align:center;line-height:1rem;font-size:1rem;color:white;}}"]);
const DeleteBtn = external_styled_components_default().button.withConfig({
  displayName: "Table__DeleteBtn",
  componentId: "sc-mplahb-11"
})(["position:absolute;right:0px;width:73px;height:30px;padding:10px;flex-direction:row;align-items:center;gap:8px;display:flex;cursor:pointer;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;border:1px solid;border-radius:5px;width:73px;letter-spacing:-0.03em;color:#686564;"]);
const AllCheckBox = external_styled_components_default().input.attrs(() => ({
  type: 'checkbox'
})).withConfig({
  displayName: "Table__AllCheckBox",
  componentId: "sc-mplahb-12"
})(["appearance:none;width:16px;height:16px;display:flex;border:1px solid #ccc;border-radius:3px;left:5px;position:absolute;&:checked{&::before{content:'\\2713';display:block;height:16px;width:16px;background-color:#f16341;border-radius:3px;text-align:center;line-height:1rem;font-size:1rem;color:white;}}"]);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/pages/MyBoard/Paging.tsx + 1 modules
var Paging = __webpack_require__(6845);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/MyBoard/index.tsx










const GlobalStyle = external_styled_components_default().div.withConfig({
  displayName: "MyBoard__GlobalStyle",
  componentId: "sc-1csmt2o-0"
})(["width:1920px;height:1100px;background-color:#ffffff;"]);
const dataDummy = [{
  id: 123,
  title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
  replCnt: '8',
  Date: '2023.05.18',
  view: '1000'
}, {
  id: 456,
  title: '[자유글]이럴 경우 법적으로 어떻게 해결해야할까요?',
  replCnt: '8',
  Date: '2023.05.18',
  view: '1000'
}, {
  id: 789,
  title: '[후기]이럴 경우 법적으로 어떻게 해결해야할까요?',
  replCnt: '8',
  Date: '2023.05.18',
  view: '1000'
}, {
  id: 999,
  title: '[노하우]이럴 경우 법적으로 어떻게 해결해야할까요?',
  replCnt: '8',
  Date: '2023.05.18',
  view: '1000'
}, {
  id: 333,
  title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
  replCnt: '8',
  Date: '2023.05.18',
  view: '1000'
}, {
  id: 2322,
  title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
  replCnt: '8',
  Date: '2023.05.18',
  view: '1000'
}, {
  id: 111,
  title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
  replCnt: '8',
  Date: '2023.05.18',
  view: '1000'
}, {
  id: 7890,
  title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
  replCnt: '8',
  Date: '2023.05.18',
  view: '1000'
}, {
  id: 3636,
  title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
  replCnt: '8',
  Date: '2023.05.18',
  view: '1000'
}, {
  id: 1233,
  title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
  replCnt: '8',
  Date: '2023.05.18',
  view: '1000'
}, {
  id: 1235,
  title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
  replCnt: '8',
  Date: '2023.05.18',
  view: '1000'
}];
function MyBoard() {
  const {
    0: checkItems,
    1: setCheckItems
  } = (0,external_react_.useState)([]);
  const {
    0: post,
    1: setPost
  } = (0,external_react_.useState)([]);
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,external_react_.useState)(1);
  const {
    0: postPerPage,
    1: setPostPerPage
  } = (0,external_react_.useState)(10);
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(dataDummy);
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const currentPosts = posts => {
    let currentPosts = 0;
    currentPosts = posts?.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

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
      data?.forEach(el => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  (0,external_react_.useEffect)(() => {
    const fetchData = () => {
      setPost(currentPosts(data));
    };

    fetchData();
  }, [currentPage]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(GlobalStyle, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Alarm/* TopBox */.Vn, {
        children: /*#__PURE__*/jsx_runtime_.jsx(MainText, {
          children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uAC8C\uC2DC\uAE00 \uAD00\uB9AC"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SelectBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(AllCheckBox, {
          onChange: e => handleAllCheck(e.target.checked),
          checked: checkItems?.length === data.length ? true : false
        }), /*#__PURE__*/jsx_runtime_.jsx(SelectAllText, {
          children: "\uC804\uCCB4\uC120\uD0DD"
        }), /*#__PURE__*/jsx_runtime_.jsx(DeleteBtn, {
          children: "\uC120\uD0DD \uC0AD\uC81C"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(BoardListBox, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TableContainer, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Underline, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TableHeader, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(TableCell, {
              children: "\uBC88\uD638"
            }), /*#__PURE__*/jsx_runtime_.jsx(TableTitleCell, {
              children: "\uC81C\uBAA9"
            }), /*#__PURE__*/jsx_runtime_.jsx(TableCell, {
              children: "\uB0A0\uC9DC"
            }), /*#__PURE__*/jsx_runtime_.jsx(TableCell, {
              children: "\uC870\uD68C\uC218"
            })]
          }), post?.map((row, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TableRow, {
              even: index % 2 == 0,
              children: [/*#__PURE__*/jsx_runtime_.jsx(BoardCheckBox, {
                onChange: e => handleSingleCheck(e.target.checked, row.id),
                checked: checkItems.includes(row.id) ? true : false
              }), /*#__PURE__*/jsx_runtime_.jsx(TableCell, {
                children: row.id
              }), /*#__PURE__*/jsx_runtime_.jsx(TableTitleCell, {
                children: row.title
              }), /*#__PURE__*/jsx_runtime_.jsx(TableCell, {
                children: row.Date
              }), /*#__PURE__*/jsx_runtime_.jsx(TableCell, {
                children: row.view
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(BottomUnderline, {})]
          }, index))]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Paging["default"], {
        totalPosts: data.length,
        paginate: setCurrentPage
      })]
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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [373,1597,5675,2765,6845], () => (__webpack_exec__(1752)));
module.exports = __webpack_exports__;

})();