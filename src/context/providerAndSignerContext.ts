import React from "react"
import { ProviderOrNull, SignerOrNull } from "../types"

export const ProviderAndSignerContext = React.createContext<{
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