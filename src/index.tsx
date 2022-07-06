import React, { useCallback, useState } from 'react'
import { Contract } from "ethers"
import { ContractsContext, ProviderAndSignerContext } from './context'
import { ContractsMap, ProviderOrNull, SignerOrNull } from './types'

const useProviderOrSignerController = () => {
    const [provider, setProvider] = useState<ProviderOrNull>(null)
    const [signer, setSigner] = useState<SignerOrNull>(null)

    return {
        provider,
        setProvider,
        signer,
        setSigner
    }
}

const useContractsProvider = () => {
    const [contracts, setContracts] = useState<ContractsMap>({})

    const addContract = (contract: Contract) => {
        setContracts({
            ...contracts,
            [contract.address]: contract
        })
    }

    const clearContracts = useCallback(() => {
        if (Object.keys(contracts).length === 0) {
            return
        }
        setContracts({})
    }, [])

    return {
        contracts,
        addContract,
        clearContracts,
    }
}

export const EthersProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    return <ProviderAndSignerContext.Provider value={useProviderOrSignerController()}>
        <ContractsContext.Provider value={useContractsProvider()}>
            {children}
        </ContractsContext.Provider>
    </ProviderAndSignerContext.Provider>
}

export * from './hooks'