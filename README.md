# Avatar

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell

npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy-script.js
npx hardhat help

```
// admin accounts, verify, delete contract, общее количество типов токенов/токенов, multi sig admins, мультивызов, base64 для uri,

//

// npm install --save-dev hardhat
// npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
// npm install --save-dev solidity-coverage
// npm install --save-dev @nomiclabs/hardhat-web3 web3
// npm install --save-dev @nomiclabs/hardhat-etherscan
// npm install --save-dev @uniswap/sdk
// npm install --save-dev @uniswap/v3-sdk

// npm install dotenv


// npx hardhat compile
// npx hardhat test

// npx hardhat node
// npx hardhat coverage --solcoverjs ./test/*.js  
// npx hardhat run scripts\deploy-script.js --network localhost      
// npx hardhat run scripts\deploy-script.js --network rinkeby
// npx hardhat run scripts\uniswap-script.js

// npx hardhat verify 0xe58A3C526a8aD0635Eb809424011D0225211F591
// npx hardhat balance --account 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
// npx hardhat accounts

// npm install --save-dev @nomiclabs/hardhat-web3 web3
// npm install @index/sdk



Owner address: 0x1C3f50CA4f8b96fAa6ab1020D9C54a44ADfAc814
Base contract address: 0xE75655B812B0A46f8Cc3439280a356BF8E3F75c1
Custom contract address: 0xcC43dBbcE51D2d49ACc0d0F53713eA47B07B4657
Avatar contract address: 0x9A64768eC7256314Cd1532ACEF86319b7A7A5380
Acoin contract address: 0x7922b545851cfbFb7efE94a456e70900aa548092



/*
require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
const accounts = await hre.ethers.getSigners();

for (const account of accounts) {
console.log(account.address);
}
});

module.exports = {
solidity: "0.8.4",
networks: {
rinkeby: {
url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
accounts: [process.env.RINKEBY_PRIVATE_KEY]
}
}
};


require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require("./tasks/donate");
require("./tasks/balance");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
const accounts = await hre.ethers.getSigners();

for (const account of accounts) {
console.log(account.address);
}
});


module.exports = {
solidity: "0.8.4",
};
*/