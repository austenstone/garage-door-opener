import rpio from 'rpio';

rpio.open(12, rpio.INPUT);

const openGarageDoor = () => {
    rpio.write(12, rpio.HIGH);
    setTimeout(() => rpio.write(12, rpio.LOW), 500);
};

const closeGarageDoor = () => {
    rpio.write(12, rpio.HIGH);
    setTimeout(() => rpio.write(12, rpio.LOW), 500);
}

export { openGarageDoor, closeGarageDoor };
