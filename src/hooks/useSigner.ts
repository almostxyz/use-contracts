import { ethers } from "ethers";
import { useContext, useEffect } from "react";
import { EthersContext } from "../context";

export const useSigner = (_signer?: ethers.Signer) => {
    const {clearContracts, setSigner, setProvider, signer, setAddress} = useContext(EthersContext)
    useEffect(() => {
        if (!signer) {
            clearContracts()
            return
        }
        setSigner(signer)
        // signer exists but provider doesnt?
        setProvider(signer?.provider)

        const assignAddress = async () => {
            const address = await signer.getAddress() 
            const ens = await signer.provider?.lookupAddress(address) || ''
            setAddress([address, ens])
        }
        assignAddress()
    }, [signer])
    return [signer, setSigner] as const
}

export const useAddress = () => {
    const address = useContext(EthersContext).address
    address.valueOf = () => address[0]
    return 
}