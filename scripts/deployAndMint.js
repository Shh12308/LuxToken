const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();
  console.log("Starting deployment and minting for account:", owner.address);

  // -------------------------------
  // Deploy LuxToken ERC-20
  // -------------------------------
  const initialSupply = hre.ethers.utils.parseUnits("1000000", 18); // 1,000,000 LUX
  const LuxToken = await hre.ethers.getContractFactory("LuxToken");
  const luxToken = await LuxToken.deploy(initialSupply);
  await luxToken.deployed();
  console.log("LuxToken deployed at:", luxToken.address);

  // -------------------------------
  // Deploy LuxNFT ERC-721
  // -------------------------------
  const LuxNFT = await hre.ethers.getContractFactory("LuxNFT");
  const luxNFT = await LuxNFT.deploy();
  await luxNFT.deployed();
  console.log("LuxNFT deployed at:", luxNFT.address);

  // -------------------------------
  // Mint ERC-20 to owner
  // -------------------------------
  const mintAmount = hre.ethers.utils.parseUnits("1000", 18); // 1,000 LUX
  await luxToken.mint(owner.address, mintAmount);
  console.log(`Minted ${mintAmount.toString()} LUX to ${owner.address}`);

  // -------------------------------
  // Mint some NFTs to owner
  // -------------------------------
  const nftCount = 3;
  for (let i = 0; i < nftCount; i++) {
    await luxNFT.mint(owner.address);
    console.log(`Minted NFT #${i} to ${owner.address}`);
  }

  console.log("\nAll deployment and minting complete!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
