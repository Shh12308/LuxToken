const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying LuxNFT with account:", deployer.address);

  const LuxNFT = await hre.ethers.getContractFactory("LuxNFT");
  const luxNFT = await LuxNFT.deploy();

  await luxNFT.deployed();

  console.log("LuxNFT deployed to:", luxNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
