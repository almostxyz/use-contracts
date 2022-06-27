import { BigNumberish } from "ethers";
import { SignerOrProvider } from "./useContract";
import { IERC20 } from "../types/IERC20";
declare type TransferWithAllowance = (spender: string, amount: BigNumberish) => Promise<void>;
export declare const useERC20: (addressOrName: string, signerOrProvider?: SignerOrProvider) => IERC20 & {
    transferWithAllowance: TransferWithAllowance;
};
export {};
