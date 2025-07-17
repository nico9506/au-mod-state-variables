// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract ModifyVariable {
    uint public x;
    string public label;

    constructor(uint _x) {
        x = _x;
        label = "blank";
    }

    function modifyToLeet() public {
        x = 1337;
    }

    function setLabel(string memory _label) public {
        label = _label;
    }
}
