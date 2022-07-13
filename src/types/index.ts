import ethers from 'ethers'

export type Provider = ethers.providers.Provider | undefined
export type Signer  = ethers.Signer | undefined
export type ContractsMap = Record<string, ethers.Contract>
export * from './ethers-contracts'