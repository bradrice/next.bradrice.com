(() => {
var exports = {};
exports.id = 8;
exports.ids = [8];
exports.modules = {

/***/ 5788:
/***/ ((module) => {

// Exports
module.exports = {
	"filter-control": "art_filter-control__wfpP8",
	"sold": "art_sold__Kqz_Z",
	"artHolder": "art_artHolder__e_t4J",
	"cardColumns": "art_cardColumns__NyvFL",
	"cardItem": "art_cardItem__rcMeA",
	"cardDetail": "art_cardDetail__hoHnK",
	"cardText": "art_cardText__Hqxtg",
	"cardCol": "art_cardCol__33wkg",
	"cardImage": "art_cardImage__oWX9N",
	"linkback": "art_linkback__bLcxB"
};


/***/ }),

/***/ 3470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ArtListPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/art/art.module.scss
var art_module = __webpack_require__(5788);
var art_module_default = /*#__PURE__*/__webpack_require__.n(art_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/layout.tsx + 1 modules
var layout = __webpack_require__(8727);
// EXTERNAL MODULE: ./lib/api.ts
var api = __webpack_require__(4390);
// EXTERNAL MODULE: external "react-bootstrap/Card"
var Card_ = __webpack_require__(6810);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./components/pager/pager.tsx



function Pager({ artData , pageTo , goNext , goPrev , pageNum , pageCount  }) {
    const pageSize = "12";
    console.log("previous", artData.previous);
    console.log("previous", artData.next);
    console.log("pageNum in pager", pageNum);
    let pages = Math.ceil(pageCount / Number(pageSize));
    console.log(pages);
    let pageArray = [];
    for(let i = 0; i < pages; i++){
        console.log("build page array", i);
        pageArray[i] = i + 1;
    }
    const pagelist = pageArray.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
            className: `page-item ${pageNum == item ? "active" : ""}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "page-link",
                href: "#",
                onClick: ()=>pageTo(item),
                children: item
            })
        }, i));
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        "aria-label": "Page navigation example",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "pagination",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "page-item",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                        className: "page-link",
                        onClick: ()=>goPrev(),
                        disabled: pageNum === 1 ? true : false,
                        children: "Previous"
                    })
                }),
                pagelist,
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "page-item",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                        className: "page-link",
                        onClick: ()=>goNext(),
                        disabled: pageNum !== pages ? false : true,
                        children: "Next"
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/art/index.tsx




// import { ConnectedPager } from '../pager/pager'





function ArtListPage({ artData , menuItems  }) {
    const pageSize = "12";
    const { 0: artWork , 1: setArt  } = (0,external_react_.useState)(artData);
    const { 0: pageNum , 1: setPage  } = (0,external_react_.useState)(1);
    const { 0: mediaType , 1: setMedia  } = (0,external_react_.useState)("all");
    const { 0: mediaItems , 1: setMediaItems  } = (0,external_react_.useState)(menuItems);
    function goToPage(val) {
        setPage(val);
        getPagedArtwork(val);
    }
    const nextPage = ()=>{
        const page = pageNum + 1;
        setPage(page);
        getPagedArtwork(page);
    };
    const prevPage = ()=>{
        const page = pageNum - 1;
        console.log("Prev", page);
        setPage(page);
        getPagedArtwork(page);
    };
    let artLoaded = artData.results.length > 0;
    console.log("In return:", "12");
    const getPagedArtwork = async (page)=>{
        const url = `${"https://bradriceadmin.oh-joy.org"}/api/artwork/media/?media=${mediaType}&page=${page}&page_size=${pageSize}`;
        const response = await (0,api/* fetchArtworkPagedData */.kB)(url);
        setArt(response);
    };
    const getMenuItems = async ()=>{
        const data = await (0,api/* fetchArtworkMediaTypes */.pQ)();
        setMediaItems(data);
    };
    const getArtworkByMedia = async (e)=>{
        setPage(1);
        setMedia(e.target.value);
        const url = `${"https://bradriceadmin.oh-joy.org"}/api/artwork/media/?media=${e.target.value}&page=1&page_size=${pageSize}`;
        const response = await (0,api/* fetchArtworkPagedData */.kB)(url);
        setArt(response);
    };
    let art;
    if (artLoaded) {
        art = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "Brad Rice's art"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:title",
                            content: "Brad Rice's art"
                        }, "title")
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (art_module_default()).artHolder,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-sm-12 col-md-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-conntrol filter-control",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "media",
                                        className: "form-label",
                                        children: "Filter by Media"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                        className: "form-select",
                                        id: "meida-select",
                                        name: "media",
                                        onChange: getArtworkByMedia,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: "all",
                                                children: "All"
                                            }),
                                            mediaItems.map((item, v)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: item.key,
                                                    children: item.value
                                                }))
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (art_module_default()).artHolder,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: (artWork.results || []).map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `col-sm-4 ${(art_module_default()).cardCol}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                                        className: (art_module_default()).cardItem,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: `/art/${item.id}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Img, {
                                                    className: (art_module_default()).cardImage,
                                                    src: item.artimage.gallery_medium,
                                                    alt: item.title
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()).Body, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Title, {
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Text, {
                                                        className: (art_module_default()).cardText,
                                                        children: item.sold ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: (art_module_default()).sold,
                                                            children: "Sold"
                                                        }) : ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `/art/${item.id}`,
                                                        children: "Detail"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, item.id))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-sm-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Pager, {
                                artData: artWork,
                                pageTo: goToPage,
                                goNext: nextPage,
                                goPrev: prevPage,
                                pageNum: pageNum,
                                pageCount: artWork.count
                            })
                        })
                    ]
                })
            ]
        });
    } else {
        art = /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "The server must be down currently. Please check back later."
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: art
    });
}
async function getServerSideProps() {
    const pageSize = "12";
    const [artData, menuItems] = await Promise.all([
        (0,api/* fetchArtworkPagedData */.kB)(`${"https://bradriceadmin.oh-joy.org"}/api/artwork/?page=1&page_size=${pageSize}`),
        (0,api/* fetchArtworkMediaTypes */.pQ)()
    ]);
    return {
        props: {
            artData,
            menuItems
        }
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 6810:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,727,390], () => (__webpack_exec__(3470)));
module.exports = __webpack_exports__;

})();