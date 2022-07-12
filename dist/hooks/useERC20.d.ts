import { BigNumberish } from "ethers";
import { SignerOrProvider } from "./useContract";
import { ERC20 } from "../types/ethers-contracts/ERC20";
declare type TransferWithAllowance = (spender: string, amount: BigNumberish) => Promise<void>;
export declare const useERC20: (addressOrName: string, signerOrProvider?: SignerOrProvider) => ERC20 & {
    transferWithAllowance: TransferWithAllowance;
};
export {};
