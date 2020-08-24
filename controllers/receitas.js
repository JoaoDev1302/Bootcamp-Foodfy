const receitas =  require('../data')


exports.home = function(req,res){
    return res.render("home",{ items: receitas})
}

exports.index = function(req,res){
    return res.render("receitas",{ items: receitas})
}

exports.show = function (req, res) {
    const receita = [... receitas]; // Array de receitas carregadas do data.js
    const receitaIndex = req.params.index
    return res.render("receita",{receita: receita[receitaIndex]})
}
