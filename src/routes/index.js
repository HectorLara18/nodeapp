const express = require("express");
const router = express.Router()

router.use(express.json())

router.get("/",(req,res)=>{
    res.render("index.ejs", {title: "First web app"})
})

router.get("/about",(req,res)=>{
    res.render("about.ejs",{title:"About"})
})

router.get("/contact",(req,res)=>{
    res.render("contact.ejs",{title:"Contacto"})
})

router.post("/contact",(req,res) => {
    console.log(req.body)
    if(req.body.password == "hlara2505"){
        res.send({message:"SUCCESS"})
    }else{
        res.send({message:"ERROR"})
    }
})

module.exports = router;