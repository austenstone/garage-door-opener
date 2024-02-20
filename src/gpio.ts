import rpio from 'rpio';

const GARAGE_DOOR_OUT = 12;

rpio.open(GARAGE_DOOR_OUT, rpio.INPUT);

const openGarageDoor = () => {
    rpio.write(GARAGE_DOOR_OUT, rpio.HIGH);
    setTimeout(() => rpio.write(GARAGE_DOOR_OUT, rpio.LOW), 500);
};

const closeGarageDoor = () => {
    rpio.write(GARAGE_DOOR_OUT, rpio.HIGH);
    setTimeout(() => rpio.write(GARAGE_DOOR_OUT, rpio.LOW), 500);
}

export { openGarageDoor, closeGarageDoor };

setInterval(() => {
    const _15 = rpio.read(15)
    const _16 = rpio.read(16)
    console.log(`15: ${_15}, 16: ${_16}`);
}, 100);
