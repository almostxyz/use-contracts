import { Contract } from "ethers"
import React from "react"
import { ContractsMap } from "../types"

export const ContractsContext = React.createContext<{
    contracts: ContractsMap,
    addContract: (contract: Contract) => void
    clearContracts: () => void
}>({
    contracts: {},
    addContract: () => {},
    clearContracts: () => {}
})