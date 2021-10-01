// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

contract Incrementer {
  uint256 public base;

  event baseChanged(uint256 prevBase);

  constructor(uint256 _initialNumber) public {
    base = _initialNumber;
  }

  function mul(uint256 _multiplier) public view returns (uint256){
    return base * _multiplier;
  }

  function changeBase(uint256 _value) public {
    emit baseChanged(base);

    base = _value;
  }
}