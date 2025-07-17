require("dotenv").config();
const ethers = require("ethers");

const SMART_CONTRACT_ADDRESS = "0xdd616f43e73271f8eb8e9cad9ee0007f4e5d4019";
const contractABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_x",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "label",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "modifyToLeet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_label",
        type: "string",
      },
    ],
    name: "setLabel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "x",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const provider = new ethers.providers.JsonRpcProvider(
  process.env.ALCHEMY_TESTNET_RPC_URL
);

const wallet = new ethers.Wallet(process.env.TESTNET_PRIVATE_KEY, provider);

async function main() {
  const modifyVariableContract = new ethers.Contract(
    SMART_CONTRACT_ADDRESS,
    contractABI,
    wallet
  );

  // await modifyVariableContract.modifyToLeet();
  // await modifyVariableContract.setLabel(
  //   "This is Nico coding from Hua Hin, Thailand!"
  // );

  const currentX = await modifyVariableContract.x();
  const currentLabel = await modifyVariableContract.label();

  console.log(
    `x: ${currentX.toString()} --- label: ${currentLabel.toString()}`
  );
}

main();
