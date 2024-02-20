"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeGarageDoor = exports.openGarageDoor = void 0;
const rpio_1 = __importDefault(require("rpio"));
const GARAGE_DOOR_OUT = 12;
rpio_1.default.open(GARAGE_DOOR_OUT, rpio_1.default.OUTPUT);
const openGarageDoor = () => {
    rpio_1.default.write(GARAGE_DOOR_OUT, rpio_1.default.HIGH);
    setTimeout(() => rpio_1.default.write(GARAGE_DOOR_OUT, rpio_1.default.LOW), 500);
};
exports.openGarageDoor = openGarageDoor;
const closeGarageDoor = () => {
    rpio_1.default.write(GARAGE_DOOR_OUT, rpio_1.default.HIGH);
    setTimeout(() => rpio_1.default.write(GARAGE_DOOR_OUT, rpio_1.default.LOW), 500);
};
exports.closeGarageDoor = closeGarageDoor;
rpio_1.default.open(13, rpio_1.default.INPUT);
setInterval(() => {
    const _13 = rpio_1.default.read(13);
    console.log(`_13: ${_13}`);
}, 100);
