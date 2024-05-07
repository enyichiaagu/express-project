import globalPath from '../utils/globalPath.js';

const { __dirname } = globalPath(import.meta.url);

function getMessages(req, res) {
	res.render('messages', {
		title: 'Message to my friends',
		friend: 'Elon Musk',
	});
	// res.sendFile(
	// 	path.join(__dirname, '..', 'public', 'images', 'download.jpg')
	// );
}

function postMessage(req, res) {
	console.log('Updating messages...');
}

export default { getMessages, postMessage };
