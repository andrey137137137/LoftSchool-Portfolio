const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const axios = require("axios");
const config = require("./server/config");
require("./server/db/db");
const mongoose = require("mongoose");

const app = express();
const index = require("./server/routes/index");
const indexDB = require("./server/db/routes/index");
const interceptor = require("./server/helpers/interceptor");

interceptor(axios);

app.use(express.static(path.join(__dirname, "site", "public")));
app.use(express.static(path.join(__dirname, "admin", "public")));

// app.use("/admin", (req, res) => {
//   res.sendFile(path.join(__dirname, "admin", "index.html"));
// });

app.use(async (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", ["*"]);
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.set("views", path.join(__dirname, "server", "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/db", indexDB);
app.use("/", index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT || config.server.port, () => {
  console.log(`server is running on port: ${config.server.port}`);
});
