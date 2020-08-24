const express = require('express')
const routes = express.Router()
const receitas = require('./controllers/receitas')
const admin = require('./controllers/admin')

routes.get("/", receitas.home)
routes.get("/receitas", receitas.index)
routes.get("/receitas/:index", receitas.show)
routes.get("/sobre",function(req,res){
    return res.render("sobre")
})

/* Admin Foodfy */

routes.get("/admin/receitas", admin.index)



module.exports = routes