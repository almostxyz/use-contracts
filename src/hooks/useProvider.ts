import { useContext, useEffect } from "react";
import { EthersContext } from "../context";
import { Provider } from "../types";

export const useProvider = (_provider?: Provider) => {
    const {clearContracts, setProvider, provider} = useContext(EthersContext)
    useEffect(() => {
        if (!_provider) {
            clearContracts()
            return
        }
        setProvider(_provider)
    }, [_provider])
    return [provider, setProvider] as const
}
