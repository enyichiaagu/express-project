import express from 'express';

import friendsController from '../controllers/friends.controller.js';

const friendsRouter = express.Router();

friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);

export default friendsRouter;
