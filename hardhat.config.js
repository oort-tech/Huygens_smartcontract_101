require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require('@openzeppelin/hardhat-upgrades')
require("dotenv").config()
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    huygens_dev: {
      url: process.env.HUYGENS_DEV_URL,
      accounts: [
        process.env.HUYGENS_DEV_PRIVATE_KEY
      ]
    },
    huygens: {
      url: process.env.HUYGENS_URL,
      accounts: [
        process.env.HUYGENS_PRIVATE_KEY
      ]
    },
  }
};
