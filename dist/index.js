"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const serverless_http_1 = __importDefault(require("serverless-http"));
exports.default = (0, serverless_http_1.default)(server_1.default);
