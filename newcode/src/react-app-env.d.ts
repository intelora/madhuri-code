/// <reference types="react-scripts" />
// interface Window {
//     ethereum: any
// }

interface AddEthereumChainParameter {
    chainId: string
    blockExplorerUrls?: string[]
    chainName?: string
    iconUrls?: string[]
    nativeCurrency?: {
        name: string
        symbol: string
        decimals: number
    }
    rpcUrls?: string[]
}

type Timer = ReturnType<typeof setTimeout>

type Falsy = null | undefined | false | 0 | -0 | 0n | ''
