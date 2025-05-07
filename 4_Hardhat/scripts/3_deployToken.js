const hre = require("hardhat");

async function main() {

  const tokenContract = await hre.ethers.deployContract("Assignment3Token", ["TToken", "TT",1000, "0x475a3dA9349DfdD61C1462Ab907520FeEDBb3d91"]);

  await tokenContract.waitForDeployment();

  console.log(
    `Contract deployed to ${tokenContract.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//deployment Address: 0x8aFEf9285b5D41f17e51244cE7e88ceAb7b9B766