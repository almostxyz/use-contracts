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
  EthersProvider: () => EthersProvider
});
module.exports = __toCommonJS(src_exports);
var import_react = __toESM(require("react"));
var ProviderAndSignerContext = import_react.default.createContext({
  provider: null,
  signer: null,
  setProvider: () => {
  },
  setSigner: () => {
  }
});
var ContractsContext = import_react.default.createContext({
  contracts: null,
  setContracts: () => {
  }
});
var EthersProvider = ({ children }) => {
  const [signer, setSigner] = (0, import_react.useState)(null);
  const [provider, setProvider] = (0, import_react.useState)(null);
  const [contracts, setContracts] = (0, import_react.useState)(null);
  return /* @__PURE__ */ import_react.default.createElement(ProviderAndSignerContext.Provider, {
    value: {
      provider,
      setProvider,
      signer,
      setSigner
    }
  }, /* @__PURE__ */ import_react.default.createElement(ContractsContext.Provider, {
    value: { contracts, setContracts }
  }, children));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EthersProvider
});
