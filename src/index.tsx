import React, { useState } from 'react'
import { ethers } from "ethers"

type ProviderOrNull = ethers.providers.Provider | null
type SignerOrNull  = ethers.Signer | null
type ContractsMap = Map<string, ethers.Contract>

const ProviderAndSignerContext = React.createContext<{
    provider: ProviderOrNull,
    signer: SignerOrNull,
    setProvider: (provider: ProviderOrNull) => void
    setSigner: (signer: SignerOrNull) => void
}>(null)

const ContractsContext = React.createContext<{
    contracts: Map<string, ethers.Contract>,
    setContracts: (contracts: ContractsMap) => void
}>(null)

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