import express from 'express';

import messagesController from '../controllers/messages.controller.js';

const messagesRouter = express.Router();

messagesRouter.get('/', messagesController.getMessages);
messagesRouter.post('/', messagesController.postMessage);

export default messagesRouter;
