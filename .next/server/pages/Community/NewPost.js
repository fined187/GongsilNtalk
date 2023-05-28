"use strict";
(() => {
var exports = {};
exports.id = 9896;
exports.ids = [9896,4962,1918,3844,4821,5192,6230,1492,5340,2686,4525];
exports.modules = {

/***/ 9015:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewPost)
/* harmony export */ });
/* harmony import */ var _components_community_NewPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2868);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_es_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9322);
/* harmony import */ var antd_es_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_es_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3831);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9565);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2813);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7101);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_css__WEBPACK_IMPORTED_MODULE_8__]);
_emotion_css__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const getBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => resolve(reader.result);

  reader.onerror = error => reject(error);
});

function NewPost() {
  const {
    0: previewOpen,
    1: setPreviewOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: previewImage,
    1: setPreviewImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: previewTitle,
    1: setPreviewTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: fileList,
    1: setFileList
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({
    fileList: newFileList
  }) => setFileList(newFileList);

  const uploadButton = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      style: {
        marginTop: 8
      },
      children: "Upload"
    })
  });

  const {
    0: postForm,
    1: setPostForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    menuName: '',
    title: '',
    contents: '',
    uploads: fileList
  });

  const handleMenu = value => {
    setPostForm(prevState => {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        menuName: value
      });
    });
  };

  const DraggableUploadListItem = ({
    originNode,
    file
  }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging
    } = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_6__.useSortable)({
      id: file.uid
    });
    const style = {
      transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_7__.CSS.Transform.toString(transform),
      transition,
      cursor: 'move'
    };
    const className = isDragging ? _emotion_css__WEBPACK_IMPORTED_MODULE_8__.css`
          a {
            pointer-events: none;
          }
        ` : '';
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", _objectSpread(_objectSpread(_objectSpread({
      ref: setNodeRef,
      style: style,
      className: className
    }, attributes), listeners), {}, {
      children: file.status === 'error' && isDragging ? originNode.props.children : originNode
    }));
  };

  const sensor = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__.PointerSensor, {
    activationConstraint: {
      distance: 10
    }
  });

  const onDragEnd = ({
    active,
    over
  }) => {
    if (active.id !== over?.id) {
      setFileList(prev => {
        const activeIndex = prev.findIndex(i => i.uid === active.id);
        const overIndex = prev.findIndex(i => i.uid === over?.id);
        return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_6__.arrayMove)(prev, activeIndex, overIndex);
      });
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_0__/* .NewPostBox */ .eX, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_0__/* .NewPostText */ .zZ, {
        children: "\uC2E0\uADDC \uAC8C\uC2DC\uAE00 \uC791\uC131"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_0__/* .BackArrowBox */ .u0, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: '/BackArrow.png',
          alt: "BackArrow",
          width: 30,
          height: 30
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
        defaultValue: "\uC9C8\uBB38/\uB2F5\uBCC0",
        style: {
          width: 330,
          left: 30,
          top: 180
        },
        onChange: handleMenu,
        options: [{
          value: 'QnA',
          label: '질문/답변'
        }, {
          value: 'FreeBoard',
          label: '자유게시판'
        }, {
          value: 'KnowHow',
          label: '노하우'
        }, {
          value: 'Review',
          label: '후기'
        }]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_0__/* .BoardTitle */ .If, {
        placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_0__/* .ContentsBox */ .Kh, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_0__/* .ContentsInput */ .Sg, {
          placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_0__/* .UploadBox */ .un, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_0__/* .UploadText */ .z6, {
          children: "\uC0AC\uC9C4 \uB4F1\uB85D"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_0__/* .NowUpload */ .EK, {
          children: ["\uCD5C\uB300 10\uC7A5 \uC5C5\uB85C\uB4DC \uAC00\uB2A5", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            style: {
              marginLeft: '8px',
              marginRight: '5px',
              color: '#F16341'
            },
            children: fileList.length
          }), "/ 10"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__.DndContext, {
          sensors: [sensor],
          onDragEnd: onDragEnd,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_6__.SortableContext, {
            items: fileList.map(i => i.uid),
            strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_6__.verticalListSortingStrategy,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
              style: {
                position: 'absolute',
                top: '100px'
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((antd_es_upload__WEBPACK_IMPORTED_MODULE_2___default()), {
                action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
                listType: "picture-card",
                fileList: fileList,
                onPreview: handlePreview,
                onChange: handleChange,
                multiple: true,
                maxCount: 10,
                itemRender: (originNode, file) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(DraggableUploadListItem, {
                  originNode: originNode,
                  file: file
                }),
                children: fileList.length >= 11 ? null : uploadButton
              })
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_community_NewPost__WEBPACK_IMPORTED_MODULE_0__/* .RegisterBtn */ .qn, {
          children: "\uAC8C\uC2DC\uAE00 \uB4F1\uB85D"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        open: previewOpen,
        title: previewTitle,
        footer: null,
        onCancel: handleCancel,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("img", {
          alt: "example",
          style: {
            width: '100%'
          },
          src: previewImage
        })
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3831:
/***/ ((module) => {

module.exports = require("@dnd-kit/core");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("@dnd-kit/sortable");

/***/ }),

/***/ 2813:
/***/ ((module) => {

module.exports = require("@dnd-kit/utilities");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 9322:
/***/ ((module) => {

module.exports = require("antd/es/upload");

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

/***/ }),

/***/ 7101:
/***/ ((module) => {

module.exports = import("@emotion/css");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [373,1597,5675,2868], () => (__webpack_exec__(9015)));
module.exports = __webpack_exports__;

})();