const express = require('express');
const { getPost, editPost, deletePost, postPost, getPosts, getAddPost } = require('../controllers/post-controllers');
const router = express.Router();

router.get('/posts/:id', getPost);
router.get('/edit/:id', editPost);
router.delete('/posts/:id', deletePost);
router.get('/posts', getPosts);
router.post('/add-post', postPost);
router.get('/add-post', getAddPost);

module.exports = router;
