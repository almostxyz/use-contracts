import { Contract } from "ethers"
import React from "react"
import { ContractsMap, ProviderOrNull, SignerOrNull } from "../types"

export const EthersContext = React.createContext<{
    provider: ProviderOrNull,
    signer: SignerOrNull,
    contracts: ContractsMap,

    addContract: (contract: Contract) => void,
    clearContracts: () => void,
    setProvider: (provider: ProviderOrNull) => void,
    setSigner: (signer: SignerOrNull) => void,
}>({
    contracts: {},
    provider: null,
    signer: null,

    addContract: () => {},
    clearContracts: () => {},
    setProvider: () => {},
    setSigner: () => {}
})