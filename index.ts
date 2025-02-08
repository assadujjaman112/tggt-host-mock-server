const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const gameData = require("./gameData.json");
const templates = require("./templates.json");
const friends = require("./friends.json");
const notifications = require("./notifications.json");

app.get("/", (req: any, res: any) => {
  res.send("Mock server is running");
});

app.get("/gameData", (req: any, res: any) => {
  res.json(gameData);
});
app.get("/templates", (req: any, res: any) => {
  res.json(templates);
});
app.get("/friends", (req: any, res: any) => {
  res.json(friends);
});
app.get("/notifications", (req: any, res: any) => {
  res.json(notifications);
});

app.listen(port, () => {
  console.log(`Mock server is running on port ${port}`);
});
