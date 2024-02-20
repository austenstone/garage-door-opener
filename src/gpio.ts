import rpio from 'rpio';

const GARAGE_DOOR_OUT = 12;

rpio.open(GARAGE_DOOR_OUT, rpio.OUTPUT);

const openGarageDoor = () => {
    rpio.write(GARAGE_DOOR_OUT, rpio.HIGH);
    setTimeout(() => rpio.write(GARAGE_DOOR_OUT, rpio.LOW), 500);
};

const closeGarageDoor = () => {
    rpio.write(GARAGE_DOOR_OUT, rpio.HIGH);
    setTimeout(() => rpio.write(GARAGE_DOOR_OUT, rpio.LOW), 500);
}

export { openGarageDoor, closeGarageDoor };

rpio.open(15, rpio.INPUT);
rpio.open(16, rpio.INPUT);
setInterval(() => {
    const _15 = rpio.read(15)
    const _16 = rpio.read(16)
    const _12 = rpio.read(12)
    console.log(`12: ${_12}, 15: ${_15}, 16: ${_16}`);
}, 100);
