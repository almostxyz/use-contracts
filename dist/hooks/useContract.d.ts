import { BaseContract, Contract, ContractInterface, providers, Signer } from "ethers";
export declare type SignerOrProvider = Signer | providers.Provider;
export declare const useContract: <T extends BaseContract = Contract>(addressOrName: string, contractInterface: ContractInterface, signerOrProvider?: SignerOrProvider) => T;
