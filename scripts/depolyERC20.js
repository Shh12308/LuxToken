const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying LuxToken with account:", deployer.address);

  const initialSupply = hre.ethers.utils.parseUnits("1000000", 18);
  const LuxToken = await hre.ethers.getContractFactory("LuxToken");
  const luxToken = await LuxToken.deploy(initialSupply);

  await luxToken.deployed();

  console.log("LuxToken deployed to:", luxToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
