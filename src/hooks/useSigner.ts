import { ethers } from "ethers";
import { useContext } from "react";
import { ContractsContext } from "../context";
import { ProviderAndSignerContext } from "../context/providerAndSignerContext";

export const useSigner = (signer: ethers.Signer) => {
    const ctx = useContext(ProviderAndSignerContext)
    const {clearContracts} = useContext(ContractsContext)
    if (!signer) {
        clearContracts()
        return ctx
    }

    ctx.setSigner(signer)
    // signer exists but provider doesnt?
    ctx.setProvider(signer?.provider || null)
    return ctx
}