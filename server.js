const express = require("express")
const nunjucks = require("nunjucks")
const receitas = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine","njk")

nunjucks.configure("views",{
    express: server,
autoescape: false,
noCache: true
})

server.get("/",function(req,res){
    return res.render("home",{ items: receitas})
})

server.get("/receitas",function(req,res){

    return res.render("receitas",{ items: receitas})
})

server.get("/receitas/:index", function (req, res) {
    const receita = [... receitas]; // Array de receitas carregadas do data.js
    const receitaIndex = req.params.index
  
    //console.log(receita[receitaIndex])
    console.log(receitaIndex)
    return res.render("receita",{receita: receita[receitaIndex]})
})


server.get("/sobre",function(req,res){
    return res.render("sobre")
})

server.listen(5000,function(){
    console.log("Server is running!")
})
