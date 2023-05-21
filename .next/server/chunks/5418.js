exports.id = 5418;
exports.ids = [5418];
exports.modules = {

/***/ 5418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4508);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3559);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const images = [{
  url: 'https://m.post.naver.com/viewer/image.nhn?src=https%3A%2F%2Fpost-phinf.pstatic.net%2FMjAyMjA1MTJfMjYz%2FMDAxNjUyMjgyNDMxNTMx.eiksoWq4rbopryxGcA8kYLbbluZBGmlgAyIqk9IGt5Ig.I7z63dT0QXrlv2VPs1lgrGniY-mDD3T8_PwOwDcSyBEg.PNG%2F%25ED%2594%25BC%25EC%25B9%25B4%25EC%25B8%2584.png',
  id: '1',
  alt: 'Picka'
}, {
  url: 'https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=hanee218&logNo=221028983538&view=img_4',
  id: '2',
  alt: 'Raichu'
}, {
  url: 'https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=gkfngkfn414&logNo=220551095277&view=img_1',
  id: '3',
  alt: 'Pairy'
}, {
  url: 'https://i2.ruliweb.com/ori/19/09/07/16d0b37ce61501ee9.jpg',
  id: '4',
  alt: 'Kkobugi'
}];

const renderThumbs = () => images.map(image => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
  src: image.url,
  alt: image.alt,
  width: 100,
  height: 80
}, image.id));

const RenderCarousel = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {
      showArrows: true,
      renderThumbs: renderThumbs,
      infiniteLoop: true,
      children: images.map(image => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: image.url,
        alt: image.alt,
        width: 100,
        height: 80
      }, image.id))
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderCarousel);

/***/ }),

/***/ 3559:
/***/ (() => {



/***/ })

};
;