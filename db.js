var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/node-004-blt-searchengine');

var clienteSchema = new mongoose.Schema({
    nome: String,
    profissao: String,
    tags: [String]
}, { collection: 'clientes' }
);

module.exports = { Mongoose: mongoose, ClienteSchema: clienteSchema }