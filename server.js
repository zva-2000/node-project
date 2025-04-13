const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRoutes = require('./routes/post-routes');
const postApiRoutes = require('./routes/api-post-routes');
const contactRoutes = require('./routes/contacts-routes');
const createPath = require('./helpers/create-path');
const serverV2 = require('./serverV2');

const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT;
const db = process.env.MONGO_URI;

mongoose
	.connect(db)
	.then((res) => console.log('Connected to DB'))
	.catch((error) => console.log(error));

app.listen(PORT, (error) => {
	error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(express.urlencoded({ extended: false }));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.static('styles'));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
	const title = 'Home';
	res.render(createPath('index'), { title });
});

app.use(postRoutes);
app.use(contactRoutes);
app.use(postApiRoutes);
app.use((req, res) => {
	const title = 'Error Page';
	res.status(404).render(createPath('error'), { title });
});

// nums = [3, 2, 2, 3];

// val = 3;

// var removeElement = function (nums, val) {
// 	const newArr = nums.filter((i) => i !== val);

// 	nums.forEach((i) => {
// 		if (i === val) {
// 			i = _;
// 		}
// 	});

// 	console.log(nums);
// 	return newArr.length;
// };
// removeElement(nums, val);
