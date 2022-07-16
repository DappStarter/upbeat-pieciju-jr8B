require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift return pitch property harvest father equal gate'; 
let testAccounts = [
"0x0b2ce9f54bdea92498933e6cce946377fdd8b1bf585309278f57707e67fa0028",
"0x18b290f860fa296cd0eb5a6d99912f60f7b5cba36fa0acc0904a651abcbb16ec",
"0x907ef0ae4e7e5b204cb38991cfdd2d5b6ee982eca428dc7c92e32b6a75864d8c",
"0x6733ed20ff3f07bc7e1e0eb38d6e10c0d5e5e2da88218bffcb8fcef273f37d32",
"0xab7488a9f3255f5bb6b615080d85f4dd4f10ef2abff3abbd6f1db7c2fe5fe17e",
"0x2a0ddad198b58622066595559331988dbd7c92d58d519f22c4fcc4b3c0d7994e",
"0x4908b222b41eb69ffcf59e1f6f654d408e126c45c37144d3006f5c5ca82fc78e",
"0x1214c93aa9db4b6ef557f7731b3e0510c52da9e2f330c610c3bba44901d6b316",
"0x523c30069794ff1d0f7a8b259f7a4cea666ee08aa19c5c91ddd6f1bb09dc2d48",
"0x5bc6e0c4d9e929cbf2fdd526d0c42b3a52dc8bae3dbacdbfe79408647ce963ed"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

