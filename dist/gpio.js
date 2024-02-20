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
function pollcb(pin) {
    rpio_1.default.msleep(20);
    if (rpio_1.default.read(pin))
        return;
    console.log('Button pressed on pin P%d', pin);
}
rpio_1.default.poll(13, pollcb, rpio_1.default.POLL_LOW);
