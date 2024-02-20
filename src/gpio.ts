import rpio from 'rpio';

const GARAGE_DOOR_OUT = 11;

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
rpio.mode(8, rpio.INPUT);
rpio.mode(10, rpio.INPUT);
rpio.poll(8, pollcb, rpio.POLL_LOW);
rpio.poll(10, pollcb, rpio.POLL_LOW);