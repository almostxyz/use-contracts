import { useContext } from "react";
import { ProviderAndSignerContext } from "../context/providerAndSignerContext";
import { ProviderOrNull } from "../types";

export const useProvider = (provider: ProviderOrNull) => {
    const ctx = useContext(ProviderAndSignerContext)
    if (provider) {
        ctx.setProvider(provider)
    }
    return ctx
}
