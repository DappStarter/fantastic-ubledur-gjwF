require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million push give glimpse flip tuna'; 
let testAccounts = [
"0x54237e3142f840e754533556287578dd210fc83125017a7846558b2ccf2efe87",
"0xeff8ee92323c5fd53122d671ccb91f38be6e1326fbe2b8bc5223d2486b85ce0e",
"0x7abc3c31648248e0256738d7c24b12a8c7e19b8de7c8ce0fd205dbcf525d5984",
"0xf554b99a0734fbb9e0effeb8cde8a565788f95d1e5aca83817dca8b90ef84c40",
"0x5f28b196e5b328e05d3ae1fa59d86c0a23cdf7867b26a3ec52a9bead40a42ea6",
"0x45472f148d5c8a3abea5a9c8da5610e374130dd348776edb1a11f54e9562b34a",
"0xca0283bf335f6b03794fa7cdf8fb9509d3ef81dd4ba35a9721ac08a03099179a",
"0x7f7cc4f34136a1e3bbe92372df07c909d12ecbd6546068ddcb015d9a49ca60d5",
"0xc3e93196ff0eded2145d92358e39f40418bd90a2d35022d1498c0a1138265026",
"0x5602aff96e08e14f9154675dfebda2f8c5306e1f827464a121f67bb8e068b1ec"
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

