// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./LuxToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LuxTokenFactory is Ownable {
    event TokenCreated(address tokenAddress, string name, string symbol, uint256 initialSupply, address creator);

    LuxToken[] public deployedTokens;

    function createToken(string memory name, string memory symbol, uint256 initialSupply) external returns (address) {
        LuxToken token = new LuxToken(initialSupply);
        token.transferOwnership(msg.sender); // Transfer ownership to creator
        deployedTokens.push(token);

        emit TokenCreated(address(token), name, symbol, initialSupply, msg.sender);
        return address(token);
    }

    function getDeployedTokens() external view returns (LuxToken[] memory) {
        return deployedTokens;
    }
}
