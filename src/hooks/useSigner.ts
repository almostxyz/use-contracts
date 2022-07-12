import { ethers } from "ethers";
import { useContext, useEffect } from "react";
import { EthersContext } from "../context";

export const useSigner = (_signer?: ethers.Signer) => {
    const {clearContracts, setSigner, setProvider, signer} = useContext(EthersContext)
    useEffect(() => {
        if (!signer) {
            clearContracts()
            return
        }
        setSigner(signer)
        // signer exists but provider doesnt?
        setProvider(signer?.provider || null)
    }, [signer])
    return [signer, setSigner]
}