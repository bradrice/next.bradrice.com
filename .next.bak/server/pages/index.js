(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3196:
/***/ ((module) => {

// Exports
module.exports = {
	"carouselnner": "carousel_carouselnner__tGNpe",
	"carouselImage": "carousel_carouselImage__Dg1m7",
	"altHolder": "carousel_altHolder__0uBjV",
	"imageWrap": "carousel_imageWrap__XHZQ4"
};


/***/ }),

/***/ 3110:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__97eC3",
	"main": "Home_main__OVLM4",
	"footer": "Home_footer__zed0_",
	"title": "Home_title__q0Qg4",
	"description": "Home_description__JhekB",
	"code": "Home_code__2i1pD",
	"grid": "Home_grid__npx0i",
	"card": "Home_card__K7aTN",
	"logo": "Home_logo__FLQOc",
	"HomePage": "Home_HomePage__W6y8J",
	"homecopy": "Home_homecopy__bloYn",
	"hometext": "Home_hometext__bqdKU"
};


/***/ }),

/***/ 1068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(3110);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/carousel/carousel.module.scss
var carousel_module = __webpack_require__(3196);
var carousel_module_default = /*#__PURE__*/__webpack_require__.n(carousel_module);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./components/carousel/carousel.tsx



// import altimage from '/images/alt-front.jpg';

// import { connect } from "react-redux";
// import { fetchProducts } from "../../state/actions/productActions";
// const Carousel = (props:any) => {
//     return (
//         <div>Carousel here</div>
//     )
// }
function HomeCarousel({ slides  }) {
    // const clickHandler = (e:any) => { console.log('hanlder', e) }
    // console.log(slides);
    // return (
    //   <p>Carousel here {slides.artwork[0].title}</p>
    // )
    const carouselLoaded = slides.artwork.length > 0;
    let carousel;
    if (!carouselLoaded) {
        carousel = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (carousel_module_default()).altHolder,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/alt-front.jpg",
                    className: "img-fluid",
                    alt: "carousel didn't load"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "If you are seeing this, the server is not working properly right now. Images are served up by another service and it may be down. This is a painting I did, but is showing as an alternate to what you would normally see."
                })
            ]
        });
    } else {
        carousel = /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (carousel_module_default()).holder,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Carousel, {
                children: slides.artwork.map((slide, index)=>{
                    let isActive = index === 0 ? true : false;
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Carousel.Item, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (carousel_module_default()).imageWrap,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: (carousel_module_default()).carouselImage,
                                    src: slide.artimage.gallery_medium_thumbnail,
                                    alt: slide.id,
                                    id: slide.title
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Carousel.Caption, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: slide.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: slide.description
                                    })
                                ]
                            })
                        ]
                    }, slide.id);
                })
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: carousel
    });
}

// EXTERNAL MODULE: ./components/layout.tsx + 1 modules
var layout = __webpack_require__(8727);
;// CONCATENATED MODULE: ./pages/index.tsx




// import './home.scss';


function HomePage({ carouselData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-sm-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Home_module_default()).HomePage,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mt-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HomeCarousel, {
                                slides: carouselData
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-sm-12",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Home_module_default()).homecopy,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: `text-center ${(Home_module_default()).hometext}`,
                                children: [
                                    "View more of my ",
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "art",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "btn btn-primary",
                                            children: "Artwork"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "My artwork is all original, one of a kind pieces unless otherwise noted. I paint primarily in watercolor and or acrylic. I explore a number of subject matter as well as abstract art."
                            })
                        ]
                    })
                })
            })
        ]
    });
}
async function getServerSideProps() {
    // const allPostsData = getSortedPostsData()
    const response = await fetch(`${"https://bradriceadmin.oh-joy.org"}/api/carousel/1`);
    const carouselData = await response.json();
    console.log(carouselData);
    return {
        props: {
            carouselData
        },
        revalidate: 60
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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,727], () => (__webpack_exec__(1068)));
module.exports = __webpack_exports__;

})();