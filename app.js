const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const errorhandler = require("errorhandler");
const { rateLimit } = require("express-rate-limit");
const { allMongoModels } = require("./infra/databases/mongodb/cruds");

app.use(
   cors(),
   morgan("short"),
   bodyParser.urlencoded({ extended: true }),
   bodyParser.json(),
   helmet(),
   compression(),
   errorhandler(),
   rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      limit: 100,
      standardHeaders: "draft-7",
      legacyHeaders: false,
   })
);

app.get("/", async (req, res) => {
   const t = await allMongoModels.order.find({}).limit(3);
   res.send(t);
});

module.exports = app;
