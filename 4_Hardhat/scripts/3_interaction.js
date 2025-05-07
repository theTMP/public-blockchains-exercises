require('dotenv').config();
const ethers = require("ethers");
const path = require("path");

const notUniMaUrl = process.env.NOT_UNIMA_URL_1;
const notUniMaProvider = new ethers.JsonRpcProvider(notUniMaUrl);
const signer = new ethers.Wallet(process.env.METAMASK_1_PRIVATE_KEY,
                                 notUniMaProvider);


const pathToABI = path.join(
    __dirname,
    "..",
    "artifacts",
    "contracts",
    "Assignment3_Token.sol",
    "Assignment3Token.json"
);
console.log(pathToABI);
const ABI = require(pathToABI).abi;

// The address of the Quiz contract.
const contractAddress = "0x01FaE6a3E15b8cf2cb89C259b2d6e5bf7cf94782";

const tokenContract = new ethers.Contract(contractAddress, ABI, signer);

const taskA1 = async function () {
    let bal = await tokenContract.totalSupply();
    console.log(ethers.utils.formatUnits(bal, 18));
};

taskA1();