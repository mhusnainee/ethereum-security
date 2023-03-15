const ethers = require("ethers");
const Web3 = require("web3");
const crypto = require("crypto");
const { writeFile } = require("fs");
const path = require("path");
require("dotenv").config();

const mainnetApiKey = process.env.MAINNET_API_KEY;

const filePath = path.join(__dirname, "keys.json");
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    `https://eth-mainnet.g.alchemy.com/v2/${mainnetApiKey}`
  )
);

const getBalance = async () => {
  for (let i = 0; i <= 100000; i++) {
    try {
      const privateKey = crypto.randomBytes(32).toString("hex");
      const wallet = new ethers.Wallet(privateKey);
      const publicKey = wallet.address;
      const keyPair = { publicKey: publicKey, privateKey: privateKey };
      const toSave = JSON.stringify(keyPair);
      await web3.eth.getBalance(publicKey, function (err, result) {
        if (err) {
          console.log(err);
        } else {
          if (result > 0) {
            console.log(
              web3.utils.fromWei(result, "ether") + " ETH",
              publicKey,
              "--->",
              privateKey
            );
            writeFile(filePath, toSave, { flag: "a" }, () => {
              console.log("GOT IT");
            });
          } else {
            console.log(i, "--->", result);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
};

getBalance();
