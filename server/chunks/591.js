exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 6498:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__66x_3",
	"leftPartition": "Navbar_leftPartition__3Lp8N",
	"rightPartition": "Navbar_rightPartition__jWstN",
	"button": "Navbar_button__yvu3z",
	"code": "Navbar_code__GQ1gb",
	"mobilePartition": "Navbar_mobilePartition__uINVJ",
	"title": "Navbar_title__1_N0h"
};


/***/ }),

/***/ 7591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ web3_ConnectWallet)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(8906);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/web3/WalletModal.tsx





function WalletModal({ isOpen , closeModal  }) {
    const { connect , connectors , isConnected , isConnecting , error  } = (0,external_wagmi_.useConnect)();
    (0,external_react_.useEffect)(()=>{
        (isConnected || error) && closeModal();
    }, [
        isConnected,
        error
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Modal, {
        isOpen: isOpen,
        onClose: closeModal,
        isCentered: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalOverlay, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ModalContent, {
                maxW: "500px",
                minH: "400px",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalHeader, {
                        fontSize: 25,
                        children: "Select Wallet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalCloseButton, {
                        _focus: {
                            boxShadow: "none"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ModalBody, {
                        paddingBottom: "1.5rem",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                                children: connectors.map((connector)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        variant: "outline",
                                        w: "100%",
                                        onClick: ()=>{
                                            connect(connector);
                                        },
                                        maxW: "500px",
                                        minH: "100px",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                            w: "100%",
                                            justifyContent: "center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                                    src: `assets/${connector.id}.png`,
                                                    alt: "Coinbase Wallet Logo",
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: "3px"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                    paddingLeft: 4,
                                                    fontSize: 30,
                                                    children: connector.name
                                                })
                                            ]
                                        })
                                    }, connector.id))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                w: "100%",
                                display: "flex",
                                justifyContent: "center",
                                paddingTop: "2",
                                children: isConnecting && /*#__PURE__*/ jsx_runtime_.jsx(react_.Spinner, {
                                    color: "blue.500"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./utils/abridgeAddress.tsx
var abridgeAddress = __webpack_require__(9507);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(6498);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/web3/ConnectWallet.tsx








const CHAIN_ID = Number("5");
const ConnectWallet = ({ isMobile , size  })=>{
    const { data  } = (0,external_wagmi_.useAccount)();
    const { activeChain , switchNetwork  } = (0,external_wagmi_.useNetwork)();
    const { isOpen: connectIsOpen , onOpen: connectOnOpen , onClose: connectOnClose  } = (0,react_.useDisclosure)();
    const { disconnect  } = (0,external_wagmi_.useDisconnect)();
    (0,external_react_.useEffect)(()=>{
        if (activeChain?.id !== CHAIN_ID && switchNetwork) switchNetwork(CHAIN_ID);
    }, [
        activeChain
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            !isMobile ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: !data ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                    style: {
                        color: "#4b4f56",
                        borderRadius: "0"
                    },
                    onClick: connectOnOpen,
                    size: size,
                    children: "Connect Wallet"
                }) : activeChain?.id === CHAIN_ID ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Menu, {
                    children: ({ isOpen  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuButton, {
                                    isActive: isOpen,
                                    as: react_.Button,
                                    rightIcon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ChevronDownIcon, {}),
                                    style: {
                                        color: "#4b4f56",
                                        borderRadius: "0",
                                        overflow: "hidden"
                                    },
                                    children: [
                                        "Account: ",
                                        (0,abridgeAddress/* abridgeAddress */.n)(data?.address)
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                    color: "black",
                                    style: {
                                        color: "#4b4f56",
                                        borderRadius: "0",
                                        width: "100%"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                href: "/mypage",
                                                style: {
                                                    textDecoration: "none"
                                                },
                                                children: "View My Collection"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                            onClick: ()=>{
                                                disconnect();
                                            },
                                            children: "Disconnect Wallet"
                                        })
                                    ]
                                })
                            ]
                        })
                }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                    style: {
                        color: "#4b4f56",
                        borderRadius: "0"
                    },
                    onClick: ()=>switchNetwork && switchNetwork(CHAIN_ID),
                    children: "Switch Network"
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: !data ? /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                    marginTop: "20",
                    spacing: "24px",
                    alignItems: "flex-start",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (Navbar_module_default()).button,
                        onClick: connectOnOpen,
                        children: "Connect Wallet"
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                    marginTop: "20",
                    spacing: "24px",
                    alignItems: "flex-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            href: "/mypage",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (Navbar_module_default()).button,
                                children: "View My Collection"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            onClick: ()=>{
                                disconnect();
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (Navbar_module_default()).button,
                                children: "Disconnect Wallet"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(WalletModal, {
                isOpen: connectIsOpen,
                closeModal: connectOnClose
            })
        ]
    });
};
/* harmony default export */ const web3_ConnectWallet = (ConnectWallet);


/***/ }),

/***/ 9507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ abridgeAddress)
/* harmony export */ });
function abridgeAddress(address) {
    if (!address) return address;
    const l = address.length;
    if (l < 20) return address;
    return `${address.substring(0, 6)}...${address.substring(l - 4, l)}`;
}


/***/ })

};
;