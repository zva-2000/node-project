const Post = require('../models/post');

const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
	res.status(500).json({ message: error.message });
};

const getPost = (req, res) => {
	Post.findById(req.params.id)
		.then((post) => res.status(200).json(post))
		.catch((error) => handleError(res, error));
};

const editPost = (req, res) => {
	Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((post) => res.status(200).json(post))
		.catch((error) => handleError(res, error));
};

const deletePost = (req, res) => {
	Post.findByIdAndDelete(req.params.id)
		.then((post) => res.status(200).json(req.params.id))
		.catch((error) => handleError(res, error));
};

const postPost = (req, res) => {
	const { title, author, text } = req.body;
	const post = new Post({
		title,
		author,
		text,
	});

	post.save()
		.then((result) => res.status(200).json(result))
		.catch((error) => handleError(res, error));
};

const getPosts = (req, res) => {
	Post.find()
		.sort({ createdAt: -1 })
		.then((posts) => res.status(200).json(posts))
		.catch((error) => handleError(res, error));
};

module.exports = { getPost, editPost, deletePost, postPost, getPosts };
