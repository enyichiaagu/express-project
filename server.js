import express from "express";
import friendsController from "./controllers/friends.controller.js";
import messagesController from "./controllers/messages.controller.js";

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", friendsController.postFriend);
app.get("/friends", friendsController.getFriends);
app.get("/friends/:friendId", friendsController.getFriend);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessage);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});