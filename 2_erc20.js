const erc20 = artifacts.require("erc20");

module.exports = function (deployer) {
  const _name = "My token";
  const _symbol = "MYT";
  const _decimals = 18
  deployer.deploy(erc20, _name, _symbol, _decimal);
};
