const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    userid: String,
    datapost: String,
    postdescr: String,
    curtidas: Number,
    comentarios: [],
    compartilhamentos: Number
})

const modelName= "Postagens";
if(mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName];//se estiver conectado e já existir entao ele usa o modelo
} else{
    module.exports = mongoose.model(modelName, modelSchema);//se não existir o nó Users, então ele adiciona
}