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

rpio.open(13, rpio.INPUT);
setInterval(() => {
    const _13 = rpio.read(13)
    console.log(`_13: ${_13}`)
}, 100);
