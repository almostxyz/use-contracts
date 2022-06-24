import { useEffect, useState } from "react"
import { BaseContract, Contract, ContractInterface, providers, Signer } from "ethers"

export type SignerOrProvider = Signer | providers.Provider

export const useContract = <T extends BaseContract = Contract>(addressOrName: string, contractInterface: ContractInterface, signerOrProvider?: SignerOrProvider) => {
    const [contract, setContract] = useState<T>(undefined as unknown as T)

    useEffect(() => {
        const exec = async () => {
            const _contract = await new Contract(addressOrName, contractInterface, signerOrProvider).deployed()
            setContract(_contract as T)
        }
        exec()
    }, [addressOrName, contractInterface, signerOrProvider])

    return contract
}