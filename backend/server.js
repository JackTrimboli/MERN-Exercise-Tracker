const express = require("express"); //gives access to the express package
const cors = require("cors"); //gives access to the cors package
const mongoose = require("mongoose"); //gives access to the mongoose package
const usersRouter = require("./routes/users");
const exerciseRouter = require("./routes/exercises");

require("dotenv").config(); //Allows the use of environment variables

const app = express(); //Creates the express server
const port = process.env.PORT || 5000;

app.use(cors()); //Middleware - lets server describe which origins are permitted to read info
app.use(express.json()); //Middleware - parses JSON

const uri = process.env.ATLAS_URI; //fetches URI from environment variables folder

mongoose.connect(uri, {
  //connects to mongodb by passing the connect function the URI, and a set of options
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection; //The Mongoose module's default connection. Equivalent to mongoose.connections[0]
connection.once("open", () => {
  //"once" the connect is open
  console.log("MongoDB database connection established successfully");
});

app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  //Starts server on 'port'
  console.log("Server is running on port: " + port);
});
