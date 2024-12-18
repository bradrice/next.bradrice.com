"use strict";
(() => {
var exports = {};
exports.id = 696;
exports.ids = [696];
exports.modules = {

/***/ 1008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 2864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CheckoutPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@stripe/stripe-js"
const stripe_js_namespaceObject = require("@stripe/stripe-js");
;// CONCATENATED MODULE: external "@stripe/react-stripe-js"
const react_stripe_js_namespaceObject = require("@stripe/react-stripe-js");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./components/CheckoutForm.tsx






function CheckoutForm(props) {
    const { 0: succeeded , 1: setSucceeded  } = (0,external_react_.useState)(false);
    const { 0: error , 1: setError  } = (0,external_react_.useState)(null);
    const { 0: processing , 1: setProcessing  } = (0,external_react_.useState)(false);
    const { 0: disabled , 1: setDisabled  } = (0,external_react_.useState)(true);
    const { 0: clientSecret , 1: setClientSecret  } = (0,external_react_.useState)("");
    const { 0: purchase , 1: setPurchaseItem  } = (0,external_react_.useState)({});
    const stripe = (0,react_stripe_js_namespaceObject.useStripe)();
    const elements = (0,react_stripe_js_namespaceObject.useElements)();
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        console.log(props);
        // Create PaymentIntent as soon as the page loads
        const purchase = {
            price: props.price,
            title: props.title,
            id: props.id
        };
        setPurchaseItem(purchase);
        // console.log("On checkout form", purchase);
        window.fetch(`${"https://bradriceadmin.oh-joy.org"}/create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(purchase)
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            setClientSecret(data.clientSecret);
        });
    }, [
        props
    ]);
    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: "Arial, sans-serif",
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {}
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };
    const handleSelectChange = (e)=>{
        const sel = document.getElementById("statesel");
        const selectedState = sel.options[sel.selectedIndex].value;
        console.log("select state: ", selectedState);
    };
    const handleChange = async (event)=>{
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };
    const handleSuccess = ()=>{
        window.fetch(`${"https://bradriceadmin.oh-joy.org"}/send-sms-success`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(purchase)
        }).then((res)=>{
            router.push("/checkout/success");
            return res.json();
        });
    };
    const handleSubmit = async (ev)=>{
        ev.preventDefault();
        setProcessing(true);
        const line1el = document.getElementById("line1");
        const line1 = line1el.value;
        const line2el = document.getElementById("line2");
        const line2 = line2el.value;
        const cityel = document.getElementById("city");
        const city = cityel.value;
        // const sel: HTMLInputElement = (document.getElementById('id') as HTMLInputElement).select();
        const sel = document.getElementById("statesel");
        // let selectedState: string = (document.getElementById('id') as HTMLInputElement).select();
        const selectedState = sel.options[sel.selectedIndex].value;
        const postal_codeEl = document.getElementById("postal_code");
        const postal_code = postal_codeEl.value;
        const nameEl = document.getElementById("fullname");
        let name = nameEl.value;
        const emailEl = document.getElementById("emailaddress");
        let email_address = emailEl.value;
        let price = props.price;
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(react_stripe_js_namespaceObject.CardElement)
            },
            receipt_email: email_address,
            shipping: {
                name: name,
                address: {
                    line1: line1,
                    line2: line2,
                    city: city,
                    state: selectedState,
                    postal_code: postal_code
                }
            }
        });
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
            handleSuccess();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "details col-md-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "You are purchasing"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                            children: [
                                "Artwork: ",
                                props.title
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                            children: [
                                "Cost: ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: props.price_format
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-md-8 align-self-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
                        id: "payment-form",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                        children: "Shipping information:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                htmlFor: "fullname",
                                                children: "Full Name"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                name: "fullname",
                                                id: "fullname",
                                                className: "form-input"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                htmlFor: "line1",
                                                children: "Address 1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                name: "line1",
                                                id: "line1"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                htmlFor: "line2",
                                                children: "Address 2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                name: "line2",
                                                id: "line2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                            htmlFor: "inputCity",
                                                            children: "City"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                            name: "city",
                                                            id: "city"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                            htmlFor: "state",
                                                            children: "State"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Control, {
                                                            as: "select",
                                                            name: "statesel",
                                                            id: "statesel",
                                                            onChange: handleSelectChange,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "AL",
                                                                    children: "Alabama"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "AK",
                                                                    children: "Alaska"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "AZ",
                                                                    children: "Arizona"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "AR",
                                                                    children: "Arkansas"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "CA",
                                                                    children: "California"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "CO",
                                                                    children: "Colorado"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "CT",
                                                                    children: "Connecticut"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "DE",
                                                                    children: "Delaware"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "DC",
                                                                    children: "District Of Columbia"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "FL",
                                                                    children: "Florida"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "GA",
                                                                    children: "Georgia"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "HI",
                                                                    children: "Hawaii"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "ID",
                                                                    children: "Idaho"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "IL",
                                                                    children: "Illinois"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "IN",
                                                                    children: "Indiana"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "IA",
                                                                    children: "Iowa"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "KS",
                                                                    children: "Kansas"
                                                                }),
                                                                "e",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "KY",
                                                                    children: "Kentucky"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "LA",
                                                                    children: "Louisiana"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "ME",
                                                                    children: "Maine"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "MD",
                                                                    children: "Maryland"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "MA",
                                                                    children: "Massachusetts"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "MI",
                                                                    children: "Michigan"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "MN",
                                                                    children: "Minnesota"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "MS",
                                                                    children: "Mississippi"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "MO",
                                                                    children: "Missouri"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "MT",
                                                                    children: "Montana"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "NE",
                                                                    children: "Nebraska"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "NV",
                                                                    children: "Nevada"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "NH",
                                                                    children: "New Hampshire"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "NJ",
                                                                    children: "New Jersey"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "NM",
                                                                    children: "New Mexico"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "NY",
                                                                    children: "New York"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "NC",
                                                                    children: "North Carolina"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "ND",
                                                                    children: "North Dakota"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "OH",
                                                                    children: "Ohio"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "OK",
                                                                    children: "Oklahoma"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "OR",
                                                                    children: "Oregon"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "PA",
                                                                    children: "Pennsylvania"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "RI",
                                                                    children: "Rhode Island"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "SC",
                                                                    children: "South Carolina"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "SD",
                                                                    children: "South Dakota"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "TN",
                                                                    children: "Tennessee"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "TX",
                                                                    children: "Texas"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "UT",
                                                                    children: "Utah"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "VT",
                                                                    children: "Vermont"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "VA",
                                                                    children: "Virginia"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "WA",
                                                                    children: "Washington"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "WV",
                                                                    children: "West Virginia"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "WI",
                                                                    children: "Wisconsin"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "WY",
                                                                    children: "Wyoming"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                            htmlFor: "postal_code",
                                                            children: "Zip"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                            name: "postal_code",
                                                            id: "postal_code"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                        children: "Billing"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                htmlFor: "email",
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                name: "receipt_email",
                                                id: "emailaddress"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_stripe_js_namespaceObject.CardElement, {
                                        id: "card-element",
                                        options: cardStyle,
                                        onChange: handleChange
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        id: "submit-btn",
                                        className: "btn btn-primary submitBtn",
                                        disabled: processing || disabled || succeeded,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            id: "button-text",
                                            children: processing ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "spinner",
                                                id: "spinner"
                                            }) : "Pay"
                                        })
                                    }),
                                    error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-error",
                                        role: "alert",
                                        children: error
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: succeeded ? "result-message" : "result-message hidden",
                                        children: [
                                            "Payment succeeded, thank you for your order. Return to the ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/art",
                                                children: "art page"
                                            }),
                                            "."
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/layout.tsx + 1 modules
var layout = __webpack_require__(8727);
// EXTERNAL MODULE: ./lib/art.ts
var art = __webpack_require__(1008);
;// CONCATENATED MODULE: ./pages/checkout/[id].tsx







// import { fetchArtworkDetailData } from '../../lib/api';
const stripekey = "pk_live_kygTTSFZkwpTR9DXLnpeIH0S";
const stripePromise = (0,stripe_js_namespaceObject.loadStripe)(stripekey);
function CheckoutPage({ artitem  }) {
    // console.log(artitem);
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_stripe_js_namespaceObject.Elements, {
                stripe: stripePromise,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CheckoutForm, {
                    id: artitem.id,
                    title: artitem.title,
                    price: artitem.price,
                    price_format: artitem.price_format
                })
            })
        })
    });
}
// export async function getStaticPaths() {
//   const paths = await getAllArtIds();
//   // console.log(paths);
//   return {
//     paths,
//     fallback: false
//   }
// }
// export async function getStaticProps({ params }) {
//   const artitem = await fetchArtworkDetailData (params.id);
//   // console.log("artwork:", artitem);
//   return {
//     props: {
//       artitem
//     }
//   }
// }
async function getServerSideProps({ params  }) {
    const artitem = await (0,art/* getArtData */.W)(params.id);
    return {
        props: {
            artitem
        }
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,727,390], () => (__webpack_exec__(2864)));
module.exports = __webpack_exports__;

})();