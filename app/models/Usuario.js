function Usuario(){
   
}
Usuario.prototype.inserirUsuario = function(usuario){
    console.log(usuario);

}

module.exports = function(usuario){
    return Usuario;
}