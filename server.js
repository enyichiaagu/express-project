import path from 'node:path';

import express from 'express';
import expressLayouts from 'express-ejs-layouts';

import friendsRouter from './routes/friends.router.js';
import messagesRouter from './routes/messages.router.js';

import globalPath from './utils/globalPath.js';

const { __dirname } = globalPath(import.meta.url);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());

app.use(expressLayouts);
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.get('/', (req, res) => {
	res.render('index', {
		title: 'My friends are very clever',
		caption: 'Cool Cat',
	});
});

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}...`);
});
