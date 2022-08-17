const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Users = require('../models/Users'); //importando o modelo de Users

module.exports = {
    signup: async (req, res) => {
        const { nome, sobrenome, fotoUser, email, datanasc, password, passwordCompare} = req.body;

        const userExist = await Users.findOne({ email });
        if (userExist) {
            res.json({
                data: [],
                error: "E-mail já cadastrado!"
                
            });
            return;
        }
        if (password !== passwordCompare) {
            res.json({
                data: [],
                error: "As senhas diferem!"
            });
            return;
        }
        const passwordHash = await bcrypt.hash(password, 10);
        
        let addUser = new Users({ nome, sobrenome, fotoUser, email, datanasc, passwordHash});

        const saveUsers = await addUser.save();
        if (!saveUsers) {
            res.json({
                error: 'Erro ao adicionar User'
            });
            return;
        }

        res.json({
            data: saveUsers
        });
    },

    signin: async (req, res) => {
        const { email, password } = req.body;
        const userExist = await Users.findOne({ email });

        if (!userExist) {
            res.json({
                data: [],
                error: 'O Usuário não existe!'
            });
            return;
        }

        const match = await bcrypt.compare(password, userExist.passwordHash);

        if (!match) {
            res.json({
                data: [],
                error: "Senha incorreta!"
            });
            return;
        }
        res.json({
            data: userExist
        });
    },

    updateId: async (req, res) => {
        const id = req.params.id;
        const { nome, sobrenome, email, datanasc } = req.body;

        await Users.findByIdAndUpdate(id, { nome, sobrenome, email, datanasc });
        const userUpdate = await Users.findById(id);
        if (!userUpdate) {
            res.json({
                data: [],
                erro: 'Não foi possivel atualizar'
            });
        } else {
            res.json({
                data: userUpdate
            });
        }
    },
}