require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

// npx hardhat coinBalance --contract 0xe58A3C526a8aD0635Eb809424011D0225211F591 --viewed 0x30f1563408D6a919FA93784Fc7df7a41DD7704cF
task("coinBalance", "balance coin (contract address, viewed address) =>")
    .addParam("contract", "Contract address")
    .addParam("viewed", "Viewed address")
    .setAction(async (taskArgs) => {
        const aCoin = await ethers.getContractFactory("Acoin");
        const Acoin = aCoin.attach(taskArgs.contract);
        console.log("Balance: ", await Acoin.balanceOf(taskArgs.viewed));
    })

// npx hardhat coinTransfer --contract 0xe58A3C526a8aD0635Eb809424011D0225211F591 --receiver 0x30f1563408D6a919FA93784Fc7df7a41DD7704cF --amount 5
task("coinTransfer", "balance (contract address, recipient address, amount send token) =>")
    .addParam("contract", "Contract address")
    .addParam("receiver", "Recipient address")
    .addParam("amount", "Account address")
    .setAction(async (taskArgs) => {
        const aCoin = await ethers.getContractFactory("Acoin");
        const Acoin = aCoin.attach(taskArgs.contract);
        console.log("Balance: ", await Acoin.balanceOf(taskArgs.receiver));
        await Acoin.transfer(taskArgs.receiver, ethers.utils.parseUnits(taskArgs.amount, "ether"));
        console.log("Balance: ", await Acoin.balanceOf(taskArgs.receiver));
    })

// npx hardhat coinBurn --contract 0xe58A3C526a8aD0635Eb809424011D0225211F591 --account 0x30f1563408D6a919FA93784Fc7df7a41DD7704cF --amount 10
task("coinBurn", "burn avatar tokens (contract address, account address, id burn tokens, amount burn tokens) =>")
    .addParam("contract", "Contract address")
    .addParam("account", "Minter address")
    .addParam("amount", "Amount new NFT")
    .setAction(async (taskArgs) => {
        const aCoin = await ethers.getContractFactory("Acoin");
        const Acoin = aCoin.attach(taskArgs.contract);
        const account = await ethers.getSigner(taskArgs.account);
        const amount = await ethers.utils.parseUnits(taskArgs.amount, "ether")
        await Acoin.connect(account).burn(amount, "0x00");
    })


