(() => {
var exports = {};
exports.id = 847;
exports.ids = [847];
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

/***/ 1008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getArtData)
/* harmony export */ });
/* unused harmony export getAllArtIds */
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4390);


async function getAllArtIds() {
    const response = await fetchArtworkData();
    const artworks = await response;
    // console.log("getAllArtIds:", artworks.results);
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: '1'
    //     }
    //   },
    //   {
    //     params: {
    //       id: '2'
    //     }
    //   }
    // ]
    const ids = await artworks.results.map((artwork)=>{
        return {
            params: {
                id: String(artwork.id)
            }
        };
    });
    console.log(ids);
    return ids;
}
async function getArtData(id) {
    const artdetail = await (0,_api__WEBPACK_IMPORTED_MODULE_0__/* .fetchArtworkDetailData */ .yE)(id);
    // Combine the data with the id
    return {
        id,
        ...artdetail
    };
}


/***/ }),

/***/ 7783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ArtDetail),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout.tsx + 1 modules
var layout = __webpack_require__(8727);
// EXTERNAL MODULE: ./lib/art.ts
var art = __webpack_require__(1008);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/saleinfo/saleinfo.tsx


// import {setSaleItem } from '../../state/actions/artworkActions';
// import { loadStripe } from '@stripe/stripe-js';
// import {Elements} from '@stripe/react-stripe-js';

// import store from '../../state/store';
function SaleInfo({ artitem  }) {
    let checkoutpath = `/checkout/${artitem.id}`;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: checkoutpath,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "btn btn-primary",
            children: "Purchase"
        })
    });
} // class SaleInfo extends React.Component {
 //       isForSale = () => {
 //         let art = {};
 //         if(this.props.artwork.length > 0) {
 //           let art = this.props.artwork.filter(item => {return item.id === this.props.id})
 //           art = art[0];
 //         } else {
 //           art = this.props.artitem;
 //         }
 //         if(this.props.forSale) {
 //             return (
 //                 <div>
 //                     <p>For sale {this.props.price_format}</p>
 //                     <p>
 //                     <Link
 //                         className="btn btn-primary"
 //                         to="/checkout"
 //                         onClick={() => {this.props.setSaleItem(this.props.id, art)}}
 //                         >
 //               Purchase
 //             </Link>
 //                     </p>
 //                 </div>
 //             )
 //         } else {
 //           if(art.sold) {
 //             return "";
 //           } else {
 //             return <p>Not for sale</p> 
 //         }
 //       }
 //     }
 //     render() {
 //         return (
 //             <div>
 //                 {this.isForSale()} 
 //             </div> 
 //         )
 //       }
 // }
 // const mapStateToProps = (state /*, ownProps*/) => {
 //     return {
 //       saleitem: state.saleitem,
 //       artwork: state.artwork.artworks,
 //       artitem: state.artworkdetail
 //     }
 //   }
 //   const mapDispatchToProps = (dispatch) => {
 //     return {
 //         setSaleItem: (id, artwork) => {
 //           console.log("set sale item", id, artwork)
 //             // let saleitem = artwork.filter(item => {return item.id === id});
 //             dispatch(setSaleItem(artwork[0]));
 //         }
 //     };
 //   }
 //   export const ConnectedSaleInfo = connect(
 //     mapStateToProps,
 //     mapDispatchToProps
 //   )(SaleInfo)

// EXTERNAL MODULE: external "react-bootstrap/Card"
var Card_ = __webpack_require__(6810);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: ./pages/art/art.module.scss
var art_module = __webpack_require__(5788);
var art_module_default = /*#__PURE__*/__webpack_require__.n(art_module);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/art/[id].tsx



// import { loadStripe } from '@stripe/stripe-js';
// import {Elements} from '@stripe/react-stripe-js';





// const stripePromise = loadStripe('pk_test_AuwxcUOjPDUHbXyODkwDQ74r');
function ArtDetail({ artData  }) {
    let artwork = /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "col-sm-12",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    className: (art_module_default()).cardDetail,
                    children: [
                        artData.artimage && /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Img, {
                            src: artData.artimage.gallery_large,
                            alt: artData.title,
                            className: (art_module_default()).cardImage
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()).Body, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "card-title",
                                    children: artData.title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "details",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: artData.description
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Size: ",
                                                artData.width,
                                                " x ",
                                                artData.height,
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                artData.media
                                            ]
                                        }),
                                        artData.sold ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (art_module_default()).sold,
                                            children: "Sold"
                                        }) : "",
                                        !artData.sold && artData.forSale ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: artData.price_format
                                        }) : "",
                                        artData.forSale ? /*#__PURE__*/ jsx_runtime_.jsx(SaleInfo, {
                                            artitem: artData
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: "Not for sale"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (art_module_default()).linkback,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/art",
                        children: "Return to art"
                    })
                })
            ]
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Brad Rice art"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `https://bradrice.com/art/${artData.id}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: `Art by Brad Rice, ${artData.title}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: artData.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: artData.artimage.gallery_medium
                    })
                ]
            }),
            artwork
        ]
    });
}
// export async function getStaticPaths() {
//     const paths = await getAllArtIds();
//     // console.log(paths);
//     return {
//       paths,
//       fallback: false
//     }
//   }
async function getServerSideProps({ params  }) {
    const artData = await (0,art/* getArtData */.W)(params.id);
    // console.log("artwork:", artData);
    return {
        props: {
            artData
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,727,390], () => (__webpack_exec__(7783)));
module.exports = __webpack_exports__;

})();