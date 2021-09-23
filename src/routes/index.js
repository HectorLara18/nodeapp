const express = require("express");
const router = express.Router()

router.get("/",(req,res)=>{
    res.render("index.ejs", {title: "First web app"})
})

router.get("/about",(req,res)=>{
    res.render("about.ejs",{title:"About"})
})

router.get("/contact",(req,res)=>{
    res.render("contact.ejs",{title:"Contacto"})
})

module.exports = router;