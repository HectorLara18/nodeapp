const express = require("express");
const app = express()
const path = require("path")

//setting
app.set("port", 4000)
app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs")

//middlewares



//routes
app.use(require("./routes/index"))


//statics files

//listening the server
app.listen(app.get("port"), ()=>{
    console.log("server on port", app.get("port"))
})