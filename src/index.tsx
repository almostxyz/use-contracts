import React, { useCallback, useState } from 'react'
import { Contract } from "ethers"
import { EthersContext } from './context'
import { ContractsMap, Provider, Signer } from './types'

const useEthersController = () => {
    const [provider, setProvider] = useState<Provider>()
    const [signer, setSigner] = useState<Signer>()
    const [address, setAddress] = useState<[string, string]>(['', ''])
    
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
        address,
        contracts,

        setProvider,
        setSigner,
        setAddress,
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