import ethers from 'ethers';
export declare type Provider = ethers.providers.Provider | undefined;
export declare type Signer = ethers.Signer | undefined;
export declare type ContractsMap = Record<string, ethers.Contract>;
export * from './ethers-contracts';
