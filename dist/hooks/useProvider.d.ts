import { ProviderOrNull } from "../types";
export declare const useProvider: (provider?: ProviderOrNull) => {
    provider: ProviderOrNull;
    signer: import("../types").SignerOrNull;
    setProvider: (provider: ProviderOrNull) => void;
    setSigner: (signer: import("../types").SignerOrNull) => void;
};
