require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    lux: {
      url: "http://127.0.0.1:8545",          // Your LUX node RPC
      accounts: ["0xYOUR_PRIVATE_KEY"]       // Replace with your wallet/validator key
    }
  }
};
