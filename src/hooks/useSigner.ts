import { useContext } from "react";
import { ContractsContext } from "../context";
import { ProviderAndSignerContext } from "../context/providerAndSignerContext";
import { SignerOrNull } from "../types";

export const useSigner = (signer: SignerOrNull) => {
    const ctx = useContext(ProviderAndSignerContext)
    const {clearContracts} = useContext(ContractsContext)
    if (!signer) {
        clearContracts()
    }
    ctx.setSigner(signer)
    // signer exists but provider doesnt?
    ctx.setProvider(signer?.provider || null)
    return ctx
}