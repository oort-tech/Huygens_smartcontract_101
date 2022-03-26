// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract MyERC20 is Ownable, ERC20 {

    constructor() ERC20("MyERC20", "MyERC20") {
        _mint(_msgSender(), 10000000 * 10 ** decimals());
    }
    
    function decimals() public pure override returns (uint8) {
        return 18;
    }
    
    function mint(uint256 amount) public onlyOwner {
        _mint(_msgSender(), amount);
    }
}