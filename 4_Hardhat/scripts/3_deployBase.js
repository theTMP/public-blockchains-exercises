const hre = require("hardhat");

async function main() {

  const baseContract = await hre.ethers.deployContract("BaseAssignment", ["0x8452E41BA34aC00458B70539264776b2a379448f"]);

  await baseContract.waitForDeployment();

  console.log(
    `Contract deployed to ${baseContract.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// deployment address: 0x34ca0006f4422570D1E211c658093738cfb223AD