import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getMessages(req, res) {
	res.sendFile(path.join(__dirname, '..', 'public', 'download.jpg'));
	// res.send('<ul><li>Hello Albert</li></ul>');
}

function postMessage(req, res) {
	console.log('Updating messages...');
}

export default { getMessages, postMessage };
