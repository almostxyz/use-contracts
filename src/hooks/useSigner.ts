import { ethers } from "ethers";
import { useContext, useEffect } from "react";
import { ContractsContext } from "../context";
import { ProviderAndSignerContext } from "../context/providerAndSignerContext";

export const useSigner = (signer?: ethers.Signer) => {
    const ctx = useContext(ProviderAndSignerContext)
    const {clearContracts} = useContext(ContractsContext)
    useEffect(() => {
        if (!signer) {
            clearContracts()
            return
        }
        ctx.setSigner(signer)
        // signer exists but provider doesnt?
        ctx.setProvider(signer?.provider || null)
    }, [signer])
    return ctx
}