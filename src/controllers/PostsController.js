const mongoose = require('mongoose');
const Posts = require('../models/Posts'); //importando o modelo de Posts

module.exports = {
    addPost: async (req, res) => {
        const { userid, datapost, postdescr, curtidas, comentarios, compartilhamentos } = req.body;
        let addPost = new Posts({ userid, datapost, postdescr, curtidas, comentarios, compartilhamentos});
        const savePosts = await addPost.save();
        if (!savePosts) {
            res.json({
                error: 'Erro ao adicionar Post'
            });
        } else {
            res.json({
                data: savePosts
            });
        }
    },
    list: async (req, res) => {
        const listPosts = await Posts.find();
        if (!listPosts) {
            res.json({
                error: 'Erro ao recuperar os registros'
            });
        } else {
            res.json({
                data: listPosts
            })
        }

    },
    getId: async (req, res) => {
        const id = req.params.id;
        const listPosts = await Posts.findById(id);
        if (!listPosts) {
            res.json({
                error: 'Erro ao recuperar os registros'
            });
        } else {
            res.json({
                data: listPosts
            })
        }
    },
    deleteId: async (req, res) => {
        const id = req.params.id;
        const listPosts = await Posts.findByIdAndDelete(id);
        if (!listPosts) {
            res.json({
                error: 'Erro ao recuperar os registros'
            });
        } else {
            res.json({
                data: listPosts
            })
        }
    },
    updateId: async (req, res) => {
        const id = req.params.id;
        const { userid, datapost, postdescr, curtidas, comentarios, compartilhamentos } = req.body;

        const PostUpdate = await Posts.findByIdAndUpdate(id, { userid, datapost, postdescr, curtidas, comentarios, compartilhamentos });

        if (!PostUpdate) {
            res.json({
                erro: 'Não foi possivel localizar o User'
            });
        } else {
            res.json({
                data: PostUpdate
            });
        }
    }

}