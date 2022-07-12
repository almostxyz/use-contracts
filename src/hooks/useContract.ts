import { useContext, useEffect, useState } from "react"
import { BaseContract, Contract, ContractInterface, providers, Signer } from "ethers"
import { EthersContext } from "../context"

export type SignerOrProvider = Signer | providers.Provider

export const useContract = <T extends BaseContract = Contract>(addressOrName: string, contractInterface: ContractInterface) => {
    const {contracts, addContract, provider, signer} = useContext(EthersContext)
    const [contract, setContract] = useState<T>(contracts[addressOrName] as T)

    useEffect(() => {
        const exec = async () => {
            if (!(provider && signer)) {
                return
            }
            if (contracts[addressOrName]) {
                return
            }
            const _contract = await new Contract(addressOrName, contractInterface, signer || provider || undefined).deployed()
            addContract(_contract as T)
            setContract(_contract as T)
        }
        exec()
    }, [addressOrName, contractInterface, provider, signer])

    return contract
}