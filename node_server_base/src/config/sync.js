
var models = require("../models");

models.sequelize
  .sync({ force: false, alter: true })
   .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    throw new Error(err);
  });
