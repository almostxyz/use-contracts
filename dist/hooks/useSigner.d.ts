import { SignerOrNull } from "../types";
export declare const useSigner: (signer: SignerOrNull) => {
    provider: import("../types").ProviderOrNull;
    signer: SignerOrNull;
    setProvider: (provider: import("../types").ProviderOrNull) => void;
    setSigner: (signer: SignerOrNull) => void;
};
