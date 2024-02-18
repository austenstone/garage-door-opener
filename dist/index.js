"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const winston_1 = __importDefault(require("winston"));
const express_winston_1 = __importDefault(require("express-winston"));
const garage_1 = __importDefault(require("./garage"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_winston_1.default.logger({
    transports: [
        new winston_1.default.transports.File({
            filename: 'express.log'
        })
    ],
    format: winston_1.default.format.simple(),
    meta: true,
    expressFormat: true,
    colorize: false
}));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
app.use('/garage', garage_1.default);
