"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var gameData_json_1 = __importDefault(require("../gameData.json"));
var templates_json_1 = __importDefault(require("../templates.json"));
var friends_json_1 = __importDefault(require("../friends.json"));
var notifications_json_1 = __importDefault(require("../notifications.json"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send("Mock server is running on Vercel (TypeScript)");
});
app.get("/gameData", function (req, res) {
    res.json(gameData_json_1.default);
});
app.get("/templates", function (req, res) {
    res.json(templates_json_1.default);
});
app.get("/friends", function (req, res) {
    res.json(friends_json_1.default);
});
app.get("/notifications", function (req, res) {
    res.json(notifications_json_1.default);
});
// Export the app for Vercel
exports.default = app;
