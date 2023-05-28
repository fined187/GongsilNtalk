"use strict";
exports.id = 9734;
exports.ids = [9734];
exports.modules = {

/***/ 9734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Offered1)
/* harmony export */ });
/* harmony import */ var _components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function Offered1({
  pageNum,
  setPageNum
}) {
  const {
    0: meterToArea,
    1: setMeterToArea
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: areaToMeter,
    1: setAreaToMeter
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: cityList,
    1: setCityList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: subTab,
    1: setSubTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);

  const changeMeters = e => {
    const inputNum = parseInt(e.currentTarget.value);
    return setMeterToArea(Math.ceil(inputNum / 3.3058));
  };

  const changeArea = e => {
    const inPutNum = parseInt(e.currentTarget.value);
    return setAreaToMeter(inPutNum / 3.3058);
  };

  const pageCnt = 1;
  const {
    0: selectedTags,
    1: setSelectedTags
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const handleTagChange = value => {
    if (value.length <= 3) {
      setSelectedTags(value);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getSigungu = async () => {
      const response = await fetch('/api/SigunguCall');
      const List = await response.json();
      setCityList(List);
    };

    getSigungu();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .AddressBox */ .lS, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .AddressTitle */ .Cu, {
        children: "\uC5B4\uB514\uC5D0 \uB9E4\uBB3C\uC744 \uC5BB\uACE0 \uC2F6\uC73C\uC2E0\uAC00\uC694?"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .CitySearchBox */ .F8, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
          mode: "multiple",
          allowClear: true,
          style: {
            width: '500px'
          },
          placeholder: "\uC2DC / \uAD70 / \uAD6C\uB97C \uC120\uD0DD\uD558\uC138\uC694",
          options: cityList,
          maxTagCount: 3,
          value: selectedTags,
          onChange: handleTagChange,
          size: "large"
        }), selectedTags.length <= 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .SelectedCityInfo */ .Nw, {
          children: ["\uC120\uD0DD \uAC00\uB2A5 \uAC2F\uC218", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .SelectedNum */ .f, {
            children: selectedTags.length
          }), "/ 3"]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .ConditionBox */ .N_, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .ConditionText */ .TJ, {
        children: "\uC6D0\uD558\uC2DC\uB294 \uB9E4\uBB3C \uC870\uAC74\uC744 \uC54C\uB824\uC8FC\uC138\uC694."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .SubTabs */ .Su, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .BuildingTab */ .Wi, {
          subTab: subTab,
          onClick: () => setSubTab(0),
          children: "\uC0C1\uAC00"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .OfficeTab */ .kl, {
          subTab: subTab,
          onClick: () => setSubTab(1),
          children: "\uC0AC\uBB34\uC2E4"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .MinimumArea */ .cY, {
        children: ["\uCD5C\uC18C \uD76C\uB9DD \uBA74\uC801", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .Meter */ .Yu, {
          placeholder: "ex. 300",
          onChange: e => {
            changeMeters(e);
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .ChangeMeter */ .YX, {
          placeholder: "ex. 100",
          defaultValue: isNaN(meterToArea) ? 0 : meterToArea,
          onChange: e => {
            changeArea(e);
          }
        })]
      }), subTab === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .UserBox */ .kL, {
        children: ["\uC0AC\uC6A9 \uC778\uC6D0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .UserInput */ .qB, {
          placeholder: "ex. 50"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .UserText */ .aN, {
          children: "\uBA85"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .TypeOfPlace */ .GU, {
        children: ["\uD76C\uB9DD \uC5C5\uC885", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .PlaceInput */ ._H, {
          placeholder: "ex.\uC2DD\uD488\uC811\uAC1D\uC5C5"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .NextBtn */ .EU, {
      onClick: () => setPageNum(2),
      children: "\uB2E4\uC74C"
    })]
  });
}

/***/ })

};
;