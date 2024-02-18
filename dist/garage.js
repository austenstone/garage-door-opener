"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gpio_1 = require("./gpio");
const router = express_1.default.Router();
router.post('/', (_, res) => {
    res.send('Garage door controller');
});
router.post('/open', (_, res) => {
    (0, gpio_1.openGarageDoor)();
    res.send('Opening garage door');
});
router.post('/close', (_, res) => {
    (0, gpio_1.closeGarageDoor)();
    res.send('Closing garage door');
});
exports.default = router;
