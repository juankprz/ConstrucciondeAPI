'use strict'
const express = require("express");
const bodyParser= require("body-Parser")
const mongoose=require("mongoose")
const app= express();
const port =process.env.PORT||3001
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.get("/api/product",(req,res )=>{
 res.send(200,{ products:[]})
})
app.get("/api/product/:productId",(req,res )=>{
 res.end()
})
app.post("/api/product",(req,res )=>{
 console.log(req.body)
 res.send(200,{mensaje:"Producto recibido"})	
})
app.put("/api/product/:productId",(req,res )=>{

})
app.delete("/api/product/:productId",(req,res )=>{

})
mongoose.connect("mongodb://aplicaciones:juancamiloymarlys@ds135790.mlab.com:35790/aplicaciones",(err,res) => {
	if(err){
		return console.log('Error al conectar la base de datos:${err}')
	}
	console.log("Conexion establecida")	
		
})
app.listen(port,() => {

	console.log(`api rest corriendo en puerto${port}`)
})