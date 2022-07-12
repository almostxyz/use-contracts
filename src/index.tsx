import React, { useCallback, useState } from 'react'
import { Contract } from "ethers"
import { EthersContext } from './context'
import { ContractsMap, ProviderOrNull, SignerOrNull } from './types'

const useEthersController = () => {
    const [provider, setProvider] = useState<ProviderOrNull>(null)
    const [signer, setSigner] = useState<SignerOrNull>(null)
    
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
        provider,
        signer,
        contracts,

        setProvider,
        setSigner,
        addContract,
        clearContracts,
    }
}

export const EthersProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    return <EthersContext.Provider value={useEthersController()}>
        {children}
    </EthersContext.Provider>
}

export * from './hooks'