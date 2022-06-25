import ethers from 'ethers'

export type ProviderOrNull = ethers.providers.Provider | null
export type SignerOrNull  = ethers.Signer | null
export type ContractsMap = Map<string, ethers.Contract> | null