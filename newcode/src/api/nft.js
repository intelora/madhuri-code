/* eslint-disable no-unused-vars */
import Web3 from 'web3'
import { getContractInstance } from './index'

async function owner() {
    try {
        const contractInstance = getContractInstance()
        const res = await contractInstance.methods.owner().call()
        return Promise.resolve(res)
    } catch (error) {
        return Promise.reject(error)
    }
}

async function priceBNB(_usd) {
    try {
        const contractInstance = getContractInstance()
        const res = await contractInstance.methods
            .convertAmountToEther(_usd)
            .call()
        return Promise.resolve(res)
    } catch (error) {
        return Promise.reject(error)
    }
}

async function mint(amount, address, value) {
    try {
        const contractInstance = getContractInstance()

        const gasLimit = await contractInstance.methods
            .mintNFTs(amount)
            .estimateGas({
                from: address,
                value,
            })

        const res = await contractInstance.methods.mintNFTs(amount).send({
            from: address,
            gasLimit,
            value,
        })

        return Promise.resolve(res)
    } catch (error) {
        return Promise.reject(error)
    }
}

function mintUsingTier(tierCode, address, value) {
    return new Promise(async (resolve, reject) => {
        try {
            const contractInstance = getContractInstance()

            const gasLimit = await contractInstance.methods
                .mint(tierCode)
                .estimateGas({
                    from: address,
                    value,
                })

            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
            }

            var gasInfo = await fetch(
                'https://api.polygonscan.com/api?module=gastracker&action=gasoracle&apikey=YourApiKeyToken',
                requestOptions,
            ).then((response) => response.json())

            const res = await contractInstance.methods.mint(tierCode).send({
                from: address,
                // gasLimit,
                // gas: '50000' ,
                gas: gasLimit,
                gasPrice: Web3.utils.toWei(gasInfo.result.FastGasPrice, 'gwei'),
                value,
            })

            resolve(res)
        } catch (error) {
            reject(error)
        }
    })
}

function getLastTokenId(tierCode) {
    return new Promise(async (resolve, reject) => {
        try {
            const contractInstance = getContractInstance()

            const currentTokenId = await contractInstance.methods
                .counters(tierCode)
                .call()

            resolve(currentTokenId - 1)
        } catch (error) {
            reject(error)
        }
    })
}

export { mint, owner, priceBNB, mintUsingTier, getLastTokenId }
