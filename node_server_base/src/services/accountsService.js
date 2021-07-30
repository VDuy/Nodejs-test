const {account} = require("../models")

async function getAllAccount(){
    try{
        var accounts = await account.findAll();
        return accounts;
    }catch(error){
        console.log(error);
        return error;
    }
}

async function getAccountById(id, fullUrl) {
    var accountIds = await account.findOne({
      where: {
        id: id,
      },
    });
    return accountIds;
  }
  module.exports = {
    getAllAccount,
    getAccountById
  };
  