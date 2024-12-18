exports.id = 727;
exports.ids = [727];
exports.modules = {

/***/ 7917:
/***/ ((module) => {

// Exports
module.exports = {
	"top-menu": "header_top-menu__rUFKh",
	"logo": "header_logo__d4jIK",
	"logo-name": "header_logo-name__vHqAx",
	"navItem": "header_navItem__MBsPz"
};


/***/ }),

/***/ 8727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/header/header.module.scss
var header_module = __webpack_require__(7917);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./components/header/Header.tsx





const Header = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "header",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Navbar, {
                fixed: "top",
                collapseOnSelect: true,
                expand: "lg",
                bg: "dark",
                variant: "dark",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Toggle, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Collapse, {
                        className: "justify-content-start",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
                            activeKey: "/",
                            onSelect: (selectedKey)=>console.log(`selected ${selectedKey}`),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                                    className: (header_module_default()).navItem,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                        href: "/",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                                    className: (header_module_default()).navItem,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                        href: "/about",
                                        eventKey: "link-1",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                                    className: (header_module_default()).navItem,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                        href: "/art",
                                        eventKey: "link-2",
                                        children: "Art"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                                    className: (header_module_default()).navItem,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                        href: "/portfolio",
                                        eventKey: "link-3",
                                        children: "Digital Design"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                                    className: (header_module_default()).navItem,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                        href: "/contact",
                                        eventKey: "link-4",
                                        children: "Contact"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (header_module_default()).logo,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/BR1-bw.png",
                        alt: "Brad Rice",
                        className: (header_module_default()).logoImg
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (header_module_default()).logoName,
                        children: "Brad Rice | Art & Technology"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./components/layout.tsx



function Layout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container-fluid",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "Brad Rice, Artistry and Technology"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "Brad Rice"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main",
                        children: children
                    })
                })
            ]
        })
    });
}


/***/ })

};
;