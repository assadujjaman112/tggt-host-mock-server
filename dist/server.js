"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const gameData_json_1 = __importDefault(require("../gameData.json"));
const templates_json_1 = __importDefault(require("../templates.json"));
const friends_json_1 = __importDefault(require("../friends.json"));
const notifications_json_1 = __importDefault(require("../notifications.json"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Mock server is running on Vercel (TypeScript)");
});
app.get("/gameData", (req, res) => {
    res.json(gameData_json_1.default);
});
app.get("/templates", (req, res) => {
    res.json(templates_json_1.default);
});
app.get("/friends", (req, res) => {
    res.json(friends_json_1.default);
});
app.get("/notifications", (req, res) => {
    res.json(notifications_json_1.default);
});
// Export the app for Vercel
exports.default = app;
