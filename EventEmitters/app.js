const EventEmitter = require("events");
const Logger = require("./logger");
const logger = new Logger(); //this is grab the class basically

//Register a listener to listen for the event
logger.on("messageLogged", function (arg) {
  console.log("Listener called", arg);
});

logger.log('message')//This now you can access the function in that class
