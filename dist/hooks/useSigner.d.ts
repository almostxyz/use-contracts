import { ethers } from "ethers";
export declare const useSigner: (_signer?: ethers.Signer) => (import("../types").SignerOrNull | ((signer: import("../types").SignerOrNull) => void))[];
