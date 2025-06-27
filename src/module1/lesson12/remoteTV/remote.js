class Tivi {
    #currentChannel;
    #currentVolume;
    #isOn;

    constructor(currentChannel, currentVolume, isOn) {
        this.#currentChannel = currentChannel;
        this.#currentVolume = currentVolume;
        this.#isOn = isOn;
    }

    getIsOn() {
        return this.#isOn;
    }

    // checkIsOn() {
    //     return !this.#isOn;
    // }

    turnOnTV() {
        this.#isOn = true;
        return true;
    }

    turnOffTV() {
        this.#isOn = false;
        return true;
    }

    setChannel(channel) {
        if (!this.#isOn) {
            alert("TV is off");
            return false;
        }
        if (channel > 0) {
            this.#currentChannel = channel;
            return true;
        }
        return false;
    }

    getChannel() {
        return this.#currentChannel;
    }

    increaseVolume(amount) {
        if (!this.#isOn) {
            alert("TV is off");
            return false;
        }
        const newVolume = this.#currentVolume + amount;
        if (newVolume <= 100) {
            this.#currentVolume = newVolume;
        } else {
            this.#currentVolume = 100;
        }
    }

    decreaseVolume(amount) {
        if (!this.#isOn) {
            alert("TV is off");
            return false;
        }
        const newVolume = this.#currentVolume - amount;
        if (newVolume >= 0) {
            this.#currentVolume = newVolume;
        } else {
            this.#currentVolume = 0;
        }
    }

    getCurrentVolume() {
        return this.#currentVolume;
    }

    getStatus() {
        return `TV is ${this.getIsOn() ? 'on' : 'off'}, channel ${this.getChannel()}, volume ${this.getCurrentVolume()}`;
    }
}

class Remote {
    #code;

    constructor(code) {
        this.#code = code;
    }

    changeChannel(tv, channel) {
        tv.setChannel(channel);
    }

    adjustVolume(tv, amount) {
        if (amount > 0) {
            tv.increaseVolume(amount);
        }
        else {
            tv.decreaseVolume(Math.abs(amount));
        }
    }

    turnTvOnOff(tv) {
        if (tv.getIsOn()) {
            tv.turnOffTV();
        } else {
            tv.turnOnTV();
        }
    }
}

const tiVi = new Tivi(1, 0, false);
const remote = new Remote("RM1379");

console.log(tiVi.getStatus());

tiVi.turnOnTV();
console.log(tiVi.getStatus());

tiVi.setChannel(7);
console.log(tiVi.getStatus());

remote.changeChannel(tiVi, 3);
console.log(tiVi.getStatus());

tiVi.increaseVolume(2);
console.log(tiVi.getStatus());

remote.turnTvOnOff(tiVi)
console.log(tiVi.getStatus());