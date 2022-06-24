import React, { useState } from 'react'
import { ethers } from "ethers"

type ProviderOrNull = ethers.providers.Provider | null
type SignerOrNull  = ethers.Signer | null
type ContractsMap = Map<string, ethers.Contract> | null

const ProviderAndSignerContext = React.createContext<{
    provider: ProviderOrNull,
    signer: SignerOrNull,
    setProvider: (provider: ProviderOrNull) => void
    setSigner: (signer: SignerOrNull) => void
}>({
    provider: null,
    signer: null,
    setProvider: () => {},
    setSigner: () => {}
})

const ContractsContext = React.createContext<{
    contracts: ContractsMap,
    setContracts: (contracts: ContractsMap) => void
}>({
    contracts: null,
    setContracts: () => {}
})

export const EthersProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [signer, setSigner] = useState<SignerOrNull>(null)
    const [provider, setProvider] = useState<ProviderOrNull>(null)
    const [contracts, setContracts] = useState<ContractsMap>(null)
    return <ProviderAndSignerContext.Provider value={{
        provider,
        setProvider,
        signer,
        setSigner
    }}>
        <ContractsContext.Provider value={{contracts, setContracts}}>
            {children}
        </ContractsContext.Provider>
    </ProviderAndSignerContext.Provider>
}

export * from './hooks'