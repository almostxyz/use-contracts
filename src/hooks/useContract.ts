import { useContext, useEffect, useState } from "react"
import { BaseContract, Contract, ContractInterface, providers, Signer } from "ethers"
import { ContractsContext, ProviderAndSignerContext } from "../context"

export type SignerOrProvider = Signer | providers.Provider

export const useContract = <T extends BaseContract = Contract>(addressOrName: string, contractInterface: ContractInterface) => {
    const {contracts, addContract} = useContext(ContractsContext)
    const {provider, signer} = useContext(ProviderAndSignerContext)
    const [contract, setContract] = useState<T>(contracts[addressOrName] as T)

    useEffect(() => {
        const exec = async () => {
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