const hre = require("hardhat")
const ethers = hre.ethers

async function main() {
    const [owner, accTwo] = await ethers.getSigners();
    const coin = await ethers.getContractFactory("Acoin", owner);
    const coinContract = await coin.deploy();
    await coinContract.deployed();

    console.log("Owner address:", owner.address);
    console.log("Account two address:", accTwo.address);
    console.log("Acoin contract address:", coinContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

