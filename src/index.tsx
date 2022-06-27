import React, { useState } from 'react'
import { Contract, ethers } from "ethers"
import { ContractsContext, ProviderAndSignerContext } from './context'
import { ContractsMap, ProviderOrNull, SignerOrNull } from './types'

export const EthersProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [signer, setSigner] = useState<SignerOrNull>(null)
    const [provider, setProvider] = useState<ProviderOrNull>(null)
    const [contracts, setContracts] = useState<ContractsMap>({})

    const addContract = (contract: Contract) => {
        setContracts({
            ...contracts,
            [contract.address]: contract
        })
    }

    const clearContracts = () => {
        setContracts({})
    }

    return <ProviderAndSignerContext.Provider value={{
        provider,
        setProvider,
        signer,
        setSigner
    }}>
        <ContractsContext.Provider value={{contracts, addContract, clearContracts}}>
            {children}
        </ContractsContext.Provider>
    </ProviderAndSignerContext.Provider>
}

export * from './hooks'