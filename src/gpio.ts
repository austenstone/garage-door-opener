import rpio from 'rpio';

const GARAGE_DOOR_OUT = 0;

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

function pollcb(pin)
{
        rpio.msleep(20);
        if (rpio.read(pin)) return;
        console.log('Button pressed on pin P%d', pin);
}
rpio.mode(2, rpio.INPUT);
rpio.poll(2, pollcb, rpio.POLL_LOW);