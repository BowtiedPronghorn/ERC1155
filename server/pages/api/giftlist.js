"use strict";
(() => {
var exports = {};
exports.id = 100;
exports.ids = [100];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_merkleProofs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2827);


const addresses = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync("data/allowlists/giftlist.json", "utf-8"));
function handler(req, res) {
    /** validate req type **/ if (req.method !== "GET") {
        res.status(400);
        return;
    }
    const address = req.query.address;
    if (!address) {
        res.status(400).json({
            msg: "address is required"
        });
        return;
    }
    if (typeof address != "string") {
        res.status(400).json({
            msg: "address is poorly formatted"
        });
        return;
    }
    const { proof , valid  } = (0,_utils_merkleProofs__WEBPACK_IMPORTED_MODULE_1__/* .generateMerkleProof */ .i)(addresses, address);
    res.status(200).json({
        proof,
        valid
    });
};


/***/ }),

/***/ 2827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ generateMerkleProof)
});

;// CONCATENATED MODULE: external "merkletreejs"
const external_merkletreejs_namespaceObject = require("merkletreejs");
;// CONCATENATED MODULE: external "keccak256"
const external_keccak256_namespaceObject = require("keccak256");
var external_keccak256_default = /*#__PURE__*/__webpack_require__.n(external_keccak256_namespaceObject);
;// CONCATENATED MODULE: ./utils/merkleProofs.tsx


const generateMerkleProof = (addresses, address)=>{
    const leafNodes = addresses.map((addr)=>external_keccak256_default()(addr)
    );
    const merkleTree = new external_merkletreejs_namespaceObject.MerkleTree(leafNodes, (external_keccak256_default()), {
        sortPairs: true
    });
    const hashedAddress = external_keccak256_default()(address);
    const proof = merkleTree.getHexProof(hashedAddress);
    const root = merkleTree.getHexRoot();
    const valid = merkleTree.verify(proof, hashedAddress, root);
    return {
        valid: valid,
        proof: proof
    };
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(102));
module.exports = __webpack_exports__;

})();