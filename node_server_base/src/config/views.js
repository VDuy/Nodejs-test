const express = require("express");
let configView = (app) => {
    app.use(express.static("./src/public"));
    app.set("view", "ejs");
    app.set("views", "./src/view")
}

module.exports = configView;