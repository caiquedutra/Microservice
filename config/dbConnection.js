var mongo = require ('mongodb');

module.exports = function(){
    console.log('entrou na conexao');

    var db = new mongo.Db(
        'service',
        new mongo.Server(
            'localhost',
            8080,
            {}
        ),
        {}

    );
    return db;
}