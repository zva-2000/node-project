const http = require('http');

const PORT = 3000;

//middleware - это то, что обрабатывает запрос, между запросом с фронта и ответом с сервера

//     Текстовые форматы:
// text/plain — обычный текст (например, Hello, World!).

// text/html — HTML-страницы (например, <html><body>...</body></html>).

// text/css — CSS-стили.

// text/csv — CSV-данные.

// text/javascript — JavaScript-код (устаревший, см. application/javascript).

// 2. Мультимедиа и application/json — данные в формате JSON (например, {"name": "John"}).

// application/xml — XML-данные.

// application/pdf — PDF-документы.

// application/zip — ZIP-архивы.

// application/octet-stream — бинарные данные (например, файлы).

// 3. Изображения:
// image/jpeg — JPEG-изображения.

// image/png — PNG-изображения.

// image/gif — GIF-изображения.

// image/svg+xml — SVG-графика.

// 4. Аудио и видео:
// audio/mpeg — MP3-аудио.

// video/mp4 — MP4-видео.

// video/webm — WebM-видео.

// 5. Формы и загрузка файлов:
// multipart/form-data — для отправки файлов через формы (например, <form enctype="multipart/form-data">).

// application/x-www-form-urlencoded — стандартные данные форм (например, name=John&age=30).

// 6. Специальные типы:
// application/vnd.ms-excel — Excel-файлы.

// application/vnd.openxmlformats-officedocument.spreadsheetml.sheet — Excel (новый формат).

// application/ld+json — JSON-LD (Linked Data).

// res.statusCode = 200;

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');

	res.write('<h1>Hello World!</h1>');
	res.write('<p>This is a paragraph.</p>');
	res.end();
});

// server.listen(PORT, 'localhost', () => {
// 	console.log(`Server running at http://localhost:${PORT}/`);
// });
