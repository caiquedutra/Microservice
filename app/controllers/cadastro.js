module.exports.cadastro = function(application, req, res){

    res.render('cadastro', {validacao:{}, dadosForm : {} });
}
module.exports.cadastrar = function(application, req, res){
    var dadosForm = req.body;

    req.assert("name", "Nome não pode ser vazio").notEmpty();
    req.assert("usuario", "usuario não pode ser vazio").notEmpty();
    req.assert("senha", "senha não pode ser vazio").notEmpty();
    req.assert("servico", "servico não pode ser vazio").notEmpty();
    
    var errors = req.validationErrors();

    if (errors){
        res.render("cadastro", {validacao: errors, dadosForm : dadosForm});
        return;
    }
        var Usuario  = new application.app.models.Usuario;
        Usuario.inserirUsuario(dadosForm);

        res.send("podemos cadastrar");
    
    
}