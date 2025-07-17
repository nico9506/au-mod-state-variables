/*
 * Deploy contract "ModifyVariable.sol" on SEPOLIA
 */

const ethers = require("ethers");
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const URL = process.env.ALCHEMY_TESTNET_RPC_URL;

  const artifacts = await hre.artifacts.readArtifact("ModifyVariable");

  const provider = new ethers.providers.JsonRpcProvider(URL);

  const TESTNET_PRIVATE_KEY = process.env.TESTNET_PRIVATE_KEY;

  const wallet = new ethers.Wallet(TESTNET_PRIVATE_KEY, provider);

  const factory = new ethers.ContractFactory(
    artifacts.abi,
    artifacts.bytecode,
    wallet
  );

  // chose `100` as initial value to provide the constructor
  const modifyVariable = await factory.deploy(100);
  await modifyVariable.deployed();

  console.log("ModifyVariable contract address:", modifyVariable.address);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
