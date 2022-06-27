import React from "react";
import { ProviderOrNull, SignerOrNull } from "../types";
export declare const ProviderAndSignerContext: React.Context<{
    provider: ProviderOrNull;
    signer: SignerOrNull;
    setProvider: (provider: ProviderOrNull) => void;
    setSigner: (signer: SignerOrNull) => void;
}>;
