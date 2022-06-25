import { useContext } from "react";
import { ProviderAndSignerContext } from "../context/providerAndSignerContext";
import { SignerOrNull } from "../types";

export const useSigner = (signer: SignerOrNull) => {
    const ctx = useContext(ProviderAndSignerContext)
    if (signer) {
        ctx.setSigner(signer)
        ctx.setProvider(signer.provider)
    }
    return ctx
}