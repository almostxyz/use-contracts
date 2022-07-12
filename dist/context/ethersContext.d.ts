import { Contract } from "ethers";
import React from "react";
import { ContractsMap, ProviderOrNull, SignerOrNull } from "../types";
export declare const EthersContext: React.Context<{
    provider: ProviderOrNull;
    signer: SignerOrNull;
    contracts: ContractsMap;
    addContract: (contract: Contract) => void;
    clearContracts: () => void;
    setProvider: (provider: ProviderOrNull) => void;
    setSigner: (signer: SignerOrNull) => void;
}>;
