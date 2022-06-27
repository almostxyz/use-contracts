import { useContext, useEffect } from "react";
import { ContractsContext } from "../context";
import { ProviderAndSignerContext } from "../context/providerAndSignerContext";
import { ProviderOrNull } from "../types";

export const useProvider = (provider: ProviderOrNull) => {
    const ctx = useContext(ProviderAndSignerContext)
    const {contracts, clearContracts} = useContext(ContractsContext)
    useEffect(() => {
        if (!provider) {
            clearContracts()
        }
        ctx.setProvider(provider)
    }, [provider])
    return ctx
}
