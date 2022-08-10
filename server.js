require('dotenv').config();//importando dotenv

const express = require('express');//importando express

const server = express();//iniciando o express

const UsersRoutes = require('./src/routes/UsersRoutes');
const PostsRoutes = require('./src/routes/PostsRoutes');

const cors = require('cors');//instalando o cors

const mongodb = require('./src/database/mongodb');//importando o banco de dados

mongodb();//usando o banco de dados

server.use('/user', UsersRoutes);
server.use('/post', PostsRoutes)

server.use(cors({//configurações do cors
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'UPDATE', 'PATCH'],
    allowedHeaders: ['Content-Type']
}))

server.use(express.json());//requisições serão convertidas em json

server.use(express.urlencoded({extended:true}));//as requisições do body devem estar em urlencoded

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT} no endereco ${process.env.BASE}`)
});