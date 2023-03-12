(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4852:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Tl1eP",
	"socials": "Footer_socials__bADcp"
};


/***/ }),

/***/ 4637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "@chakra-ui/theme-tools"
const theme_tools_namespaceObject = require("@chakra-ui/theme-tools");
// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(8906);
;// CONCATENATED MODULE: external "wagmi/connectors/coinbaseWallet"
const coinbaseWallet_namespaceObject = require("wagmi/connectors/coinbaseWallet");
;// CONCATENATED MODULE: external "wagmi/connectors/walletConnect"
const walletConnect_namespaceObject = require("wagmi/connectors/walletConnect");
;// CONCATENATED MODULE: external "wagmi/connectors/metaMask"
const metaMask_namespaceObject = require("wagmi/connectors/metaMask");
;// CONCATENATED MODULE: ./utils/wagmiClient.tsx




const CHAIN_ID = Number("5");
const RPC_URL = {
    1: external_wagmi_.alchemyRpcUrls.mainnet,
    3: external_wagmi_.alchemyRpcUrls.ropsten,
    5: external_wagmi_.alchemyRpcUrls.goerli,
    10: external_wagmi_.alchemyRpcUrls.optimism,
    137: external_wagmi_.alchemyRpcUrls.polygon,
    80001: external_wagmi_.alchemyRpcUrls.polygonMumbai,
    42161: external_wagmi_.alchemyRpcUrls.arbitrum
};
const clientOptions = {
    autoConnect: true,
    connectors: [
        new coinbaseWallet_namespaceObject.CoinbaseWalletConnector({
            options: {
                appName: "NFT Minting Starter Kit",
                jsonRpcUrl: RPC_URL[CHAIN_ID] || external_wagmi_.alchemyRpcUrls.goerli
            }
        }),
        new metaMask_namespaceObject.MetaMaskConnector(),
        new walletConnect_namespaceObject.WalletConnectConnector({
            options: {
                qrcode: true
            }
        }), 
    ]
};
const WagmiClient = (0,external_wagmi_.createClient)(clientOptions);

// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(5392);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: ./components/web3/ConnectWallet.tsx + 1 modules
var ConnectWallet = __webpack_require__(6714);
;// CONCATENATED MODULE: ./components/NavBar.tsx






const FaOpensea = ()=>/*#__PURE__*/ _jsx(Box, {
        width: "48px",
        height: "48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        children: /*#__PURE__*/ _jsx(Image, {
            width: "18px",
            height: "18px",
            src: "assets/opensea.png"
        })
    })
;
const NavBar = ()=>{
    const { isOpen , onOpen , onClose  } = (0,react_.useDisclosure)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Navbar_module_default()).background,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Navbar_module_default()).navbar,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Navbar_module_default()).leftPartition,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (Navbar_module_default()).button,
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/viewer",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (Navbar_module_default()).button,
                                children: "Collection"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/mypage",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (Navbar_module_default()).button,
                                children: "My Cards"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Navbar_module_default()).rightPartition,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ConnectWallet/* default */.Z, {
                        size: "md"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Navbar_module_default()).mobilePartition,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                        "aria-label": "hamburger menu icon",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.HamburgerIcon, {}),
                        colorScheme: "white",
                        onClick: onOpen
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Drawer, {
                    isOpen: isOpen,
                    placement: "right",
                    onClose: onClose,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerOverlay, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerContent, {
                            background: "black",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerCloseButton, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerBody, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                        marginTop: "20",
                                        spacing: "24px",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: (Navbar_module_default()).button,
                                                    onClick: onClose,
                                                    children: "Home"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/viewer",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: (Navbar_module_default()).button,
                                                    onClick: onClose,
                                                    children: "Explorer"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(ConnectWallet/* default */.Z, {
                                                isMobile: true,
                                                size: "xs"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_NavBar = (NavBar);

// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(4852);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.tsx


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: `${(Footer_module_default()).footer}`,
        children: [
            "Website by ",
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://www.twitter.com/bowtiedpronghrn",
                children: "BowTiedProngHorn"
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/_app.tsx










function MyApp({ Component , pageProps  }) {
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    // prevent hydration UI bug: https://blog.saeloun.com/2021/12/16/hydration.html
    (0,external_react_.useEffect)(()=>setMounted(true)
    , []);
    if (!mounted) return null;
    // customize your chakra theme here
    const theme = (0,react_.extendTheme)({
        styles: {
            global: (props)=>({
                    body: {
                        fontFamily: "Inter",
                        color: (0,theme_tools_namespaceObject.mode)("gray.800", "whiteAlpha.900")(props),
                        bg: (0,theme_tools_namespaceObject.mode)("white", "gray.800")(props),
                        lineHeight: "base"
                    }
                })
        },
        colors: {
            brand: {
                100: "#f7fafc",
                900: "#1a202c"
            }
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: theme,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_wagmi_.Provider, {
            client: WagmiClient,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_NavBar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4513:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

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

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

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

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8906:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664,714], () => (__webpack_exec__(4637)));
module.exports = __webpack_exports__;

})();