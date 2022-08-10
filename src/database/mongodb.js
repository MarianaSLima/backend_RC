const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        console.log('conectando ao mongoDB....');
        await mongoose.connect(process.env.MONGOURL);
        console.log('MongoDB conectado com sucesso!!!');
    }catch(error){
        console.log('MongoDB não conectado' + error);
    }
}

module.exports = connectDB;