import globalPath from '../utils/globalPath.js';

const { __dirname } = globalPath(import.meta.url);

function getMessages(req, res) {
	res.sendFile(
		path.join(__dirname, '..', 'public', 'images', 'download.jpg')
	);
}

function postMessage(req, res) {
	console.log('Updating messages...');
}

export default { getMessages, postMessage };
