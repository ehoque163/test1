require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
var bodyParser = require('body-parser');

const app = express();

/* LOAD MYSQL DB */
require("./config/db-connection");

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.SERVER_PORT || "3000");
app.set("port", port);
console.log("port", port)

app.use(bodyParser.json({ limit: '50mb' })); // support json encoded bodies
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // support encoded bodies
/**
 * Normalize a port into a number, string, or false.
 */

 function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
      // named pipe
      return val;
    }
    if (port >= 0) {
      // port number
      return port;
    }
    return false;
  }
 
  var server = require("http").createServer(app); // Create HTTP Server

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
require("./routes/index")(app);


module.exports = app;  
 
