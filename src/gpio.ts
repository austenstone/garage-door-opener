import rpio from 'rpio';

const GARAGE_DOOR_OUT = 11;
rpio.open(GARAGE_DOOR_OUT, rpio.OUTPUT);

export const openGarageDoor = async () => {
    return new Promise((resolve) => {
        rpio.write(GARAGE_DOOR_OUT, rpio.HIGH);
        setTimeout(() => {
            rpio.write(GARAGE_DOOR_OUT, rpio.LOW);
            resolve(true);
        }, 1000);
    });
};
