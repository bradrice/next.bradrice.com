"use strict";
exports.id = 390;
exports.ids = [390];
exports.modules = {

/***/ 4390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kB": () => (/* binding */ fetchArtworkPagedData),
/* harmony export */   "pQ": () => (/* binding */ fetchArtworkMediaTypes),
/* harmony export */   "yE": () => (/* binding */ fetchArtworkDetailData)
/* harmony export */ });
/* unused harmony exports fetchArtworkData, fetchCarouselData */
const fetchArtworkData = async ()=>{
    try {
        const response = await fetch(`${"https://bradriceadmin.oh-joy.org"}/api/artwork`);
        const data = (await response).json();
        // console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
};
const fetchArtworkDetailData = async (id)=>{
    try {
        // console.log('fetching artwork:', id);
        const response = await fetch(`${"https://bradriceadmin.oh-joy.org"}/api/artwork/${id}`);
        const data = (await response).json();
        // console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
};
const fetchArtworkPagedData = async (url)=>{
    console.log(url);
    try {
        const response = await fetch(url + "&format=json");
        const data = (await response).json();
        // console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
};
const fetchCarouselData = async ()=>{
    try {
        const response = await fetch(`${"https://bradriceadmin.oh-joy.org"}/api/carousel/1`, {
            cache: "no-store"
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
};
const fetchArtworkMediaTypes = async ()=>{
    try {
        const response = await fetch(`${"https://bradriceadmin.oh-joy.org"}/api/artwork/mediatypes`);
        const data = (await response).json();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
};


/***/ })

};
;