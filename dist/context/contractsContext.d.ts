import { Contract } from "ethers";
import React from "react";
import { ContractsMap } from "../types";
export declare const ContractsContext: React.Context<{
    contracts: ContractsMap;
    addContract: (contract: Contract) => void;
    clearContracts: () => void;
}>;
