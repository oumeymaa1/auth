//1 require express
const express = require ("express");

//2 create instance 
const app = express ();

//5 require dotenv
require("dotenv").config();

//connect DB

const connectDB = require("./config/connectDB");
connectDB();


//routing
//Middleware global
app.use(express.json());

//middleware routes
app.use("/api/user", require ("./routes/user"))

//3 create port 
const PORT = process.env.PORT;

//4 create server
app.listen(PORT, (err) =>
    err
    ? console.error(err)
    :console.log(`Server is running on port ${PORT} ...`)
);    

