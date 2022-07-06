import { ethers } from "ethers";
export declare const useSigner: (signer: ethers.Signer) => {
    provider: import("../types").ProviderOrNull;
    signer: import("../types").SignerOrNull;
    setProvider: (provider: import("../types").ProviderOrNull) => void;
    setSigner: (signer: import("../types").SignerOrNull) => void;
};
