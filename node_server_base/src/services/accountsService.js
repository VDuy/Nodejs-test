const db = require("../models");
const { Account } = require("../models")

async function getAllAccount() {
  try {
    var accounts = await Account.findAll();
    return accounts;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getAccountById(id) {
  try {
    var accountIds = await Account.findOne({
      where: {
        id: id,
      },
    });
    return accountIds;
  } catch (error) {
    console.log(error);
    return error;
  }

}

let createAccount = async () => {

}

module.exports = {
  getAllAccount,
  getAccountById,
  createAccount,
};
