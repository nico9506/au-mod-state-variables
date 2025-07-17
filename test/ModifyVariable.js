const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

// the "decribe" scope encapsulates an entire test called "TestModifyVariable"
// the "it" says the behaviour that should be expected from the test
describe("TestModifyVariable", () => {
  it('should change "x" to 1337', async () => {
    // creates an ethers ContractFactory abstraction:
    // https://docs.ethers.org/v5/api/contract/contract-factory/
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");

    // then this ContractFactory object is used to deploy
    // a new instance of the Contract (x = 10 as provided)
    const contract = await ModifyVariable.deploy(10);

    // wait for the contract to be deployed and validated
    await contract.deployed();

    // modify x from 10 to 1337 via the created function
    await contract.modifyToLeet();

    // call getter for state variable "x"
    const newX = await contract.x();

    assert.equal(newX.toNumber(), 1337);
  });
});
