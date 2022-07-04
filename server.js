const express = require("express");
const mysql = require("mysql");

const app= express()
app.use(express.json())
const db= mysql.createConnection({
    host:"group9.ch6pcgmme6sz.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password:"password",
    database:"data"


})

db.connect((error)=>{
    if(error){
        throw error
    }
    console.log("database connection success")
})

//routes 
app.get("/api/:city",(req,res)=>{
    db.query(`SELECT*FROM ${req.params.city}`,(error,result)=>{
        if(error){
            throw error
        }
        res.status(200).json(result)
    })
})

app.get("/api/:city/:id",(req,res)=>{
    db.query(`SELECT*FROM ${req.params.city} WHERE id=${req.params.id}`, (error,result)=>{
        if(error)throw error
        res.status(200).json(result)
    })
})


app.listen("5000")

