const express = require('express');
const { getPost, editPost, deletePost, postPost, getPosts } = require('../controllers/api-post-controllers');
const router = express.Router();

// Get all posts
router.get('/api/posts', getPosts);

//add
router.post('/api/post/', postPost);

// Get Post by ID
router.get('/api/post/:id', getPost);

// Update Post by ID
router.put('/api/post/:id', editPost);

// Delete Post by ID
router.delete('/api/post/:id', deletePost);

module.exports = router;
