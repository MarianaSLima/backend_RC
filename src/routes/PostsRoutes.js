const express = require('express');
const PostsController = require('../controllers/PostsController');
const router = express.Router();

router.post('/addPost', PostsController.addPost);
router.get('/list', PostsController.list);
router.get('/list/:id', PostsController.getId);
router.delete('/delete/:id', PostsController.deleteId);
router.put('/list/:id', PostsController.updateId);

module.exports = router;