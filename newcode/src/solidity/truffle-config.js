require('dotenv').config()
const { MNEMONIC } = process.env

const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*', // Any network (default: none)
        },
        bsc: {
            provider: () =>
                new HDWalletProvider(
                    MNEMONIC,
                    `https://data-seed-prebsc-2-s2.binance.org:8545`,
                ),
            network_id: 97,
            confirmations: 2,
            timeoutBlocks: 200,
            networkCheckTimeout: 10000,
            skipDryRun: true,
        },
        'bsc-mainnet': {
            provider: () =>
                new HDWalletProvider(
                    MNEMONIC,
                    `https://bsc-dataseed1.binance.org`,
                ),
            network_id: 56,
            confirmations: 2,
            timeoutBlocks: 200,
            networkCheckTimeout: 10000,
            skipDryRun: true,
        },
        mumbai: {
            provider: () =>
                new HDWalletProvider(
                    MNEMONIC,
                    `https://matic-mumbai.chainstacklabs.com`,
                ),
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            networkCheckTimeout: 10000,
            skipDryRun: true,
        },
        'polygon-mainnet': {
            provider: () =>
                new HDWalletProvider(MNEMONIC, `https://polygon-rpc.com/`),
            network_id: 137,
            confirmations: 2,
            timeoutBlocks: 200,
            networkCheckTimeout: 10000,
            skipDryRun: true,
        },
    },
    compilers: {
        solc: {
            version: '0.8.17',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
            },
        },
    },
}