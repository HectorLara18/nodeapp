const express = require("express");
const morgan = require("morgan");
const app = express()
const path = require("path")
const bodyParser = require("body-parser");


//setting
app.set("port", 4000)
app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs")

//middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded())


//routes
app.use(require("./routes/index"))


//statics files
app.use(express.static(path.join(__dirname, 'public')));

//listening the server
app.listen(app.get("port"), ()=>{
    console.log("server on port", app.get("port"))
})

module.exports = app;