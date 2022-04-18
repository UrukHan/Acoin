// SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract Acoin is ERC777 {

    constructor() ERC777("Avatar coin", "A", new address[](0)) {
        _mint(msg.sender, 1000 ether, "", "");
    }
}
