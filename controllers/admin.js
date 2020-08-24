const receitas =  require('../data')

exports.index = function(req,res){
    return res.render("admin/receitas",{ items: receitas})
}
