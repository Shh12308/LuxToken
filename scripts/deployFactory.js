const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying LuxTokenFactory with account:", deployer.address);

  const Factory = await hre.ethers.getContractFactory("LuxTokenFactory");
  const factory = await Factory.deploy();
  await factory.deployed();

  console.log("LuxTokenFactory deployed at:", factory.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
