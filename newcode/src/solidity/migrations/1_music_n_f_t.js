const MusicNFT = artifacts.require('MusicNFT')

module.exports = function (_deployer) {
    _deployer.deploy(
        MusicNFT,
        'ipfs://QmfX8sVHCDrShQgtLbU7pnKKzdQDZZSViZAUqr1ZCRdGcv/',
    )
}
