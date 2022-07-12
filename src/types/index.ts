import ethers from 'ethers'

export type ProviderOrNull = ethers.providers.Provider | null
export type SignerOrNull  = ethers.Signer | null
export type ContractsMap = Record<string, ethers.Contract>
export * from './ethers-contracts'