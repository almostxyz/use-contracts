import { ProviderOrNull } from "../types";
export declare const useProvider: (_provider?: ProviderOrNull) => (ProviderOrNull | ((provider: ProviderOrNull) => void))[];
