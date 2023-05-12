"use strict";
exports.id = 7208;
exports.ids = [7208];
exports.modules = {

/***/ 7208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contents)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/community/TabBox.tsx
var TabBox = __webpack_require__(5715);
// EXTERNAL MODULE: ./src/components/community/TabSpan.tsx
var TabSpan = __webpack_require__(6381);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./NoticeDummy.tsx
var NoticeDummy = __webpack_require__(436);
// EXTERNAL MODULE: ./src/pages/Community/Contents/Youtube/Youtube.tsx + 1 modules
var Youtube = __webpack_require__(9650);
// EXTERNAL MODULE: ./src/pages/Community/Contents/Megazine/Megazine.tsx
var Megazine = __webpack_require__(1380);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/community/SearchInput.tsx

const slideIn = external_styled_components_.keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;
const slideOut = external_styled_components_.keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;
const SearchContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-c07cc42b-0"
})`
  position: relative;
`;
const SearchIcon = external_styled_components_default().i.withConfig({
    componentId: "sc-c07cc42b-1"
})`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateX(-50%);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-50%) scale(1.2);
  }
`;
const SearchInput = external_styled_components_default().input.withConfig({
    componentId: "sc-c07cc42b-2"
})`
  position: absolute;
  top: 98px;
  left: 720px;
  right: 0;
  transform: translateY(-50%) translateX(-100%);
  width: 200px;
  padding: 8px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: ${({ show  })=>show ? slideIn : slideOut} 0.2s forwards;
  animation-fill-mode: backwards;
`;

;// CONCATENATED MODULE: ./src/pages/Community/Contents/index.tsx









function Contents({ tabClicked , setTabClicked  }) {
    const [innerTab, setInnerTab] = (0,external_react_.useState)(0);
    const [post, setPost] = (0,external_react_.useState)([]);
    const [yPosts, setYposts] = (0,external_react_.useState)(NoticeDummy/* Youtubes */.Af);
    const [mPosts, setMposts] = (0,external_react_.useState)(NoticeDummy/* community */.bJ);
    const [currentPage, setCurrentPage] = (0,external_react_.useState)(1);
    const [postPerPage, setPostPerPage] = (0,external_react_.useState)(5);
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const currentPosts = (posts)=>{
        let currentPosts = 0;
        currentPosts = posts?.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };
    //  API 생성시 수정
    (0,external_react_.useEffect)(()=>{
        const fetchData = ()=>{
            if (innerTab === 0) {
                setPost(currentPosts(yPosts));
            } else {
                setPost(currentPosts(mPosts));
            }
        };
        fetchData();
    }, [
        currentPage,
        innerTab
    ]);
    const [showSearch, setShowSearch] = (0,external_react_.useState)(false);
    const handleSearchClick = ()=>{
        setShowSearch(!showSearch);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TabSpan/* FirstContent */.Bx, {
                tabClicked: tabClicked,
                onClick: ()=>setTabClicked(0),
                children: "공톡 컨텐츠"
            }),
            tabClicked === 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TabBox/* YoutubeTab */.yy, {
                        innerTab: innerTab,
                        onClick: ()=>setInnerTab(0),
                        children: "공톡 유튜브"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TabBox/* MegazineTab */.Dn, {
                        innerTab: innerTab,
                        onClick: ()=>setInnerTab(1),
                        children: "공톡 매거진"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SearchContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SearchIcon, {
                                className: "fa fa-search",
                                onClick: handleSearchClick,
                                style: {
                                    position: "absolute",
                                    left: "750px",
                                    top: "95px",
                                    cursor: "pointer"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/SearchIcon.png",
                                    alt: "SearchIcon",
                                    width: 20,
                                    height: 20
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SearchInput, {
                                type: "text",
                                placeholder: "검색어를 입력하세요...",
                                show: showSearch
                            })
                        ]
                    }),
                    innerTab === 0 ? /*#__PURE__*/ jsx_runtime_.jsx(Youtube["default"], {
                        post: post,
                        yPosts: yPosts,
                        setCurrentPage: setCurrentPage
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(Megazine["default"], {
                        post: post,
                        mPosts: mPosts,
                        setCurrentPage: setCurrentPage
                    })
                ]
            }) : null
        ]
    });
}


/***/ })

};
;