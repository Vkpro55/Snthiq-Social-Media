"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const rateLimiter_1 = require("./middlewares/rateLimiter");
const socialStatsController_1 = require("./controllers/socialStatsController");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(rateLimiter_1.rateLimiter);
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.get('/api/social-stats', socialStatsController_1.getSocialStats);
app.get('/api/platform/:platform', socialStatsController_1.getPlatformStats);
exports.default = app;
