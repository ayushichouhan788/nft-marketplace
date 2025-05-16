const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory
  const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
  
  // Deploy the contract
  console.log("Deploying NFT Marketplace...");
  const nftMarketplace = await NFTMarketplace.deploy();

  // Wait for deployment to finish
  await nftMarketplace.deployed();
  
  console.log("NFT Marketplace deployed to:", nftMarketplace.address);
}

// Execute the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
