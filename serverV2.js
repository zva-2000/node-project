const dotenv = require('dotenv');
dotenv.config();

// console.log(process.env.NODE_ENV);

//path

const path = require('path');

// console.log(path.join(__dirname, '..')); //две точки значит назад
//join - объединяет пути hhh/jjj

// console.log(path.resolve('first', 'second', 'third')); //добавляет к абсолютному текущему пути

// console.log(path.basename(__filename)); //имя файла
// console.log(path.dirname(__filename)); //имя директории
// console.log(path.extname(__filename)); //расширение файла

//url

// const url = require('url');

// const siteUrl = 'https://example.org:8000/p/a/t/h?query=string#hash';

// const myUrl = new URL(siteUrl);

// console.log(myUrl);

//file

const fs = require('fs');

fs;

//у многих методов есть два варианта: синхронный и асинхронный

//синхронный метод блокирует выполнение кода
//асинхронный метод не блокирует выполнение кода

// fs.writeFileSync('hello.txt', 'Hello World');
// fs.mkdir(path.resolve(__dirname, 'test2'), (err) => {
// 	if (err) throw err;
// 	console.log('Saved!');
// });

//Как сделать последовательность асинхронных операций

// const writeFileAsync = async (path, data) => {
// 	return new Promise((resolve, reject) => {
// 		fs.writeFile(path, data, (err) => {
// 			if (err) reject(err);
// 			resolve('Saved!');
// 		});
// 	});
// };

// const appendFileAsync = async (path, data) => {
// 	return new Promise((resolve, reject) => {
// 		fs.appendFile(path, data, (err) => {
// 			if (err) reject(err);
// 			resolve('Saved!');
// 		});
// 	});
// };

// const readFileAsync = async (path) => {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(path, 'utf-8', (err, data) => {
// 			if (err) reject(err);
// 			resolve(data);
// 		});
// 	});
// };

// const removeFileAsync = async (path) => {
// 	return new Promise((resolve, reject) => {
// 		fs.unlink(path, (err) => {
// 			if (err) reject(err);
// 			resolve('Removed!');
// 		});
// 	});
// };

// writeFileAsync(path.resolve(__dirname, 'hello.txt'), 'Hello World')
// 	.then(() => appendFileAsync(path.resolve(__dirname, 'hello.txt'), 'Hello World11'))
// 	.then(() => appendFileAsync(path.resolve(__dirname, 'hello.txt'), 'Hello World22'))
// 	.then(() => readFileAsync(path.resolve(__dirname, 'hello.txt')))
// 	.then((data) => console.log(data))
// 	.then(() => console.log('All operations completed'));

//Задачка

// const someString = process.env.TEST_STRING;

// writeFileAsync(path.resolve(__dirname, 'hello1.txt'), someString)
// 	.then(() => readFileAsync(path.resolve(__dirname, 'hello1.txt')))
// 	.then((data) =>
// 		console.log(
// 			data
// 				.trim()
// 				.split(/\s+/)
// 				.filter((word) => word.length > 0).length,
// 		),
// 	)
// 	.then(() => removeFileAsync(path.resolve(__dirname, 'hello1.txt')))
// 	.then(() => console.log('All operations completed'));

//Взаимодействие с операционной системой

const os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus()); //ядра процессора
// console.log(os.freemem()); //свободная память
// console.log(os.homedir()); //домашняя директория
// console.log(os.hostname()); //имя компьютера
// console.log(os.tmpdir()); //временная директория
// console.log(os.userInfo()); //информация о пользователе
