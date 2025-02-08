import express, { Request, Response } from "express";
import cors from "cors";

import gameData from "../gameData.json";
import templates from "../templates.json";
import friends from "../friends.json";
import notifications from "../notifications.json";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Mock server is running on Vercel (TypeScript)");
});

app.get("/gameData", (req: Request, res: Response) => {
  res.json(gameData);
});
app.get("/templates", (req: Request, res: Response) => {
  res.json(templates);
});
app.get("/friends", (req: Request, res: Response) => {
  res.json(friends);
});
app.get("/notifications", (req: Request, res: Response) => {
  res.json(notifications);
});

// Export the app for Vercel
export default app;
