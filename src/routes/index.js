const express = require("express");
const router = express.Router()
const bodyParser = require("body-parser");

router.use(express.json())

router.get("/",(req,res)=>{
    res.render("index.ejs", 
    {title: "First web app",
    nombre:"Hector"})
})

router.get("/about",(req,res)=>{
    res.render("about.ejs",{title:"About"})
})

router.get("/contact",(req,res)=>{
    res.render("contact.ejs",{title:"Contact"})
})

router.post("/contact",(req,res) => {
    var mensaje = {
        correo: req.body.correo,
        mensaje: req.body.mensaje,
        valor: req.body.prueba
    }
    console.log(mensaje.correo)
    res.render("formSend.ejs",{
        title:"Contact",
        usuario:mensaje.correo,
    })
})

router.get("/formSend",(req,res)=>{
    res.render("formSend.ejs",{title:"Formulario Enviado"})
})


module.exports = router;