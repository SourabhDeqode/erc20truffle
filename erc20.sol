// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract erc20{
    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);

    string  name;
    string  symbol;
    uint8   decimals;

    mapping(address => uint256) balances;

    mapping(address => mapping(address => uint256)) allowed;

    uint256 totalSupply_ ;
    constructor(string _name, string _symbol, uint8 _decimals, uint256 total){
        totalSupply_ = total;
        balances[msg.sender] = totalSupply_;
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
    }
    function transefer(address receiver, uint numTokens) public returns (bool){
        require(numTokens <= balances[msg.sender]);
         balances[msg.sender]-=numTokens;
         balances[receiver]+=numTokens;
         emit Transfer(msg.sender, receiver, numTokens);
         return true;
    }
}
