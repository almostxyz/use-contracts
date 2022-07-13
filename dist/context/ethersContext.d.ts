import { Contract } from "ethers";
import React from "react";
import { ContractsMap, Provider, Signer } from "../types";
export declare const EthersContext: React.Context<{
    provider: Provider;
    signer: Signer;
    contracts: ContractsMap;
    addContract: (contract: Contract) => void;
    clearContracts: () => void;
    setProvider: (provider: Provider) => void;
    setSigner: (signer: Signer) => void;
}>;
