import express from "express";
import cors from "cors";
import serverless from "serverless-http";

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());

// Import JSON data
import gameData from "../gameData.json";
import templates from "../templates.json";
import friends from "../friends.json";
import notifications from "../notifications.json";

// API Routes
app.get("/", (req, res) => {
  res.send("Mock server is running");
});
//@ts-ignore
app.get("/gameData", (req, res) => res.json(gameData));
//@ts-ignore
app.get("/templates", (req, res) => res.json(templates));
//@ts-ignore
app.get("/friends", (req, res) => res.json(friends));
//@ts-ignore
app.get("/notifications", (req, res) => res.json(notifications));

// Export as Serverless Function
export default serverless(app);
