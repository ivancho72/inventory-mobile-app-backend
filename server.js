"use strict";
// const strapi = require("./node_modules/strapi/lib/index");
// const strapiDev = require("./node_modules/strapi/lib/commands/develop");

// if (process.env.DEV_MODE === true) {
//   strapiDev();
// } else {
//   strapi().start();
// }

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 5000, console.log("listening!"));
