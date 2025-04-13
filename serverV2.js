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

//свой фреймворк по типу express

class Router {
	constructor() {
		this.endpoints = {};
	}

	request(method = 'GET', path, handler) {
		if (!this.endpoints[path]) {
			this.endpoints[path] = {};
		}

		const endpoint = this.endpoints[path];

		if (endpoint[method]) {
			throw new Error(`${method} уже сущетсвует`);
		}

		endpoint[method] = handler;
	}
}

// 1. Что такое Node.js и чем он отличается от браузерного JavaScript?

// Node.js это среда выполнения JavaScript, основанная на движке V8.

// 2. Как работает Event Loop в Node.js?

//У Node.js неблокирующий ввод и вывод событий. Благодаоря этому он может быть ассинхронным, то есть события выполняются не блокируя друг друга.
//Вот последовательность выполнения
// 1. Таймеры (SetTimeout, SetInterval)
// 2. Callback (ввод/вывод)
// 3. Ожидание/подготовка для внутренних целей.
// 4. Опрос (новые события ввода и вывода)
// 5. Проверка (Callback set, immediate)
// 6. Callback события close

// 3. Как импортировать модуль fs в Node.js (CommonJS)?

// const fs = require('fs');

// 4. Что делает функция require()?

//С помошью неё импортируют модули.

// 5. Для чего используется глобальный объект __dirname?

//Для того, чтобы получить путь к текущему каталогу.

// 6. Как обработать синхронную ошибку в Node.js (например, при чтении файла)?

// .catch((error) => console.log(error));

// 7. Что такое middleware в Express.js?

//Middleware это функция, которая выполняется перед обработкой запроса.

// 8. Какие HTTP-методы поддерживает REST API?

//GET, POST, PUT, DELETE

// 9. Что делает команда npm install --save-dev?

//Устанавливает devDependencies

// 10. Как создать простой HTTP-сервер без фреймворков (напишите пример кода)?

//const server = http.createServer((req, res) => {
// 	res.setHeader('Content-Type', 'text/html');

// 	res.write('<h1>Hello World!</h1>');
// 	res.write('<p>This is a paragraph.</p>');
// 	res.end();
// });

// #### 7 вопросов сложнее легкого уровня
// 1. Объясните разницу между process.nextTick() и setImmediate().

// Переданная функция process.nextTick() будет выполняться на текущей итерации цикла событий после завершения текущей операции. Это означает, что он всегда будет выполняться до setTimeout и setImmediate.

//Передавая функцию методу process.nextTick(), мы сообщаем системе о том, что эту функцию нужно вызвать после
// завершения текущей итерации цикла событий, до начала следующей. Этот метод стоит использовать тогда, когда нужно обеспечить выполнение некоего кода
// в самом начале следующей итерации цикла событий.

// setImmediate() это то же самое, что и setTimout() только без задрежки. Функция, которую мы передали в аргумент setImmediate() будет выполняться в следующем цикле событий.

// 2. Как прочитать большой файл (10 ГБ) без блокировки Event Loop?

//Нужно читать его итерациями, по линиям.
//const allLines = fs.readFile('file.txt', { encoding: 'utf-8' }).split(/\r?\n/);
// allLines.forEach((line) => {
// 	console.log(line); // строки, как партнеры в танце
//   });

// 3. Напишите пример цепочки промисов с обработкой ошибок.

//

// 4. Как создать роут в Express, который принимает параметры из URL (например, /users/:id)?

//На примере постов
//const { getPost, editPost, deletePost, postPost, getPosts } = require('../controllers/api-post-controllers');
// const router = express.Router();
// router.get('/api/posts', getPosts);

// 5. Чем отличается WebSocket от HTTP-запросов?

//В отличие от традиционного HTTP, где новое соединение создается для каждого запроса,
// WebSocket поддерживает открытое соединение, что приводит к меньшей задержке и меньшему количеству обращений,
// необходимых для обмена данными. WebSocket был разработан для преодоления некоторых ограничений традиционного HTTP,
// особенно когда необходим поток данных в реальном времени. С помощью WebSocket клиенты и серверы могут передавать данные быстро и эффективно,
// обеспечивая быстрые и отзывчивые приложения с обновлениями в реальном времени и интерактивностью в реальном времени.

// 6. Как настроить CORS в Express.js?

// const corsOptions = {
// 	origin: 'https://my.favorite.site',
// 	optionsSuccessStatus: 200,
//   };

//   app.use('/assets', cors(corsOptions), express.static('public'));

// 7. Что такое Event Emitter? Приведите пример использования.

// EventEmitter — это модуль, содействующий коммуникации между объектами в Node.
// Он является ядром асинхронной событийно-управляемой архитектуры. Многие из встроенных в Node модулей наследуют от EventEmitter.

// Его идея проста: emitter-объекты генерируют именованные события, которые приводят к вызову ранее зарегистрированных прослушивателей. Так что у эмиттера есть две основные функции:

// Генерирование именованных событий.
// Регистрация и дерегистрация функций-прослушивателей.

// Для работы с EventEmitter нужно создать расширяющий его класс.

// class MyEmitter extends EventEmitter {

// }

// Эмиттеры — это то, что мы инстанцируем из классов на основе EventEmitter:

// const myEmitter = new MyEmitter();

// В любой момент жизненного цикла эмиттеров мы можем воспользоваться функцией emit и сгенерировать любое именованное событие.

// myEmitter.emit('something-happened');

// Генерирование события — это сигнал того, что соблюдено какое-то условие. Обычно речь идёт об изменении состояния генерирующего объекта. С помощью метода on можно добавить функции-прослушиватели, которые будут исполняться каждый раз, когда эмиттеры генерируют свои ассоциированные именованные события.
