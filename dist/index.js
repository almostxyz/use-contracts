"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  EthersProvider: () => EthersProvider,
  useContract: () => useContract,
  useERC20: () => useERC20,
  useProvider: () => useProvider,
  useSigner: () => useSigner
});
module.exports = __toCommonJS(src_exports);
var import_react7 = __toESM(require("react"));

// src/context/contractsContext.ts
var import_react = __toESM(require("react"));
var ContractsContext = import_react.default.createContext({
  contracts: {},
  addContract: () => {
  },
  clearContracts: () => {
  }
});

// src/context/providerAndSignerContext.ts
var import_react2 = __toESM(require("react"));
var ProviderAndSignerContext = import_react2.default.createContext({
  provider: null,
  signer: null,
  setProvider: () => {
  },
  setSigner: () => {
  }
});

// src/hooks/useContract.ts
var import_react3 = require("react");
var import_ethers = require("ethers");
var useContract = (addressOrName, contractInterface) => {
  const { contracts, addContract } = (0, import_react3.useContext)(ContractsContext);
  const { provider, signer } = (0, import_react3.useContext)(ProviderAndSignerContext);
  const [contract, setContract] = (0, import_react3.useState)(contracts[addressOrName]);
  (0, import_react3.useEffect)(() => {
    const exec = async () => {
      if (contracts[addressOrName]) {
        return;
      }
      const _contract = await new import_ethers.Contract(addressOrName, contractInterface, signer || provider || void 0).deployed();
      addContract(_contract);
      setContract(_contract);
    };
    exec();
  }, [addressOrName, contractInterface, provider, signer]);
  return contract;
};

// src/hooks/useERC20.ts
var import_react4 = require("react");
var import_ethers2 = require("ethers");

// src/abi/ERC20.json
var ERC20_default = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/hooks/useERC20.ts
var useERC20 = (addressOrName, signerOrProvider) => {
  const contract = useContract(addressOrName, ERC20_default);
  (0, import_react4.useEffect)(() => {
    if (contract) {
      contract.transferWithAllowance = async function(to, amount) {
        if (!(signerOrProvider instanceof import_ethers2.Signer)) {
          throw Error("Not a signer");
        }
        try {
          const address = await signerOrProvider.getAddress();
          const allowance = await this.allowance(address, to);
          const _amount = import_ethers2.BigNumber.from(import_ethers2.utils.parseEther(`${amount}`));
          const toApprove = _amount.sub(allowance);
          if (toApprove.isNegative() || toApprove.isZero()) {
            await this.transfer(to, _amount.toBigInt());
          } else {
            await this.approve(to, toApprove.toBigInt());
            this.on(this.filters["Approval(address,address,uint256)"](address, to), async () => {
              await this.transfer(to, _amount.toBigInt());
            });
          }
        } catch (e) {
          console.error(e);
        }
      };
    }
  }, [contract]);
  return contract;
};

// src/hooks/useProvider.ts
var import_react5 = require("react");
var useProvider = (provider) => {
  const ctx = (0, import_react5.useContext)(ProviderAndSignerContext);
  const { contracts, clearContracts } = (0, import_react5.useContext)(ContractsContext);
  (0, import_react5.useEffect)(() => {
    if (!provider) {
      clearContracts();
    }
    ctx.setProvider(provider);
  }, [provider]);
  return ctx;
};

// src/hooks/useSigner.ts
var import_react6 = require("react");
var useSigner = (signer) => {
  const ctx = (0, import_react6.useContext)(ProviderAndSignerContext);
  const { clearContracts } = (0, import_react6.useContext)(ContractsContext);
  if (!signer) {
    clearContracts();
  }
  ctx.setSigner(signer);
  ctx.setProvider((signer == null ? void 0 : signer.provider) || null);
  return ctx;
};

// src/index.tsx
var EthersProvider = ({ children }) => {
  const [signer, setSigner] = (0, import_react7.useState)(null);
  const [provider, setProvider] = (0, import_react7.useState)(null);
  const [contracts, setContracts] = (0, import_react7.useState)({});
  const addContract = (contract) => {
    setContracts({
      ...contracts,
      [contract.address]: contract
    });
  };
  const clearContracts = () => {
    setContracts({});
  };
  return /* @__PURE__ */ import_react7.default.createElement(ProviderAndSignerContext.Provider, {
    value: {
      provider,
      setProvider,
      signer,
      setSigner
    }
  }, /* @__PURE__ */ import_react7.default.createElement(ContractsContext.Provider, {
    value: { contracts, addContract, clearContracts }
  }, children));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EthersProvider,
  useContract,
  useERC20,
  useProvider,
  useSigner
});
