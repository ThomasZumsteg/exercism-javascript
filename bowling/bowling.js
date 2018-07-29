class Bowling {
    constructor() {
        this.rolls = [];
        this.frame = 0;
        this.extra = 0;
        this.second = false;
    }

    gameOver() { return 10 <= this.frame && this.extra <= 0; }

    roll(pins) {
        if(this.gameOver()) {
            throw new Error('Cannot roll after game is over');
        } else if(pins < 0) {
            throw new Error('Negative roll is invalid');
        } else if(10 < pins || (this.second && this.rolls.slice(-1)[0] + pins > 10)) {
            throw new Error('Pin count exceeds pins on the lane');
        }

        if(this.frame == 9) {
            if(this.second == false && pins == 10) {
                this.extra = 2;
            } else if(this.second == true && pins + this.rolls.slice(-1)[0] == 10) {
                this.extra = 1;
            }
        } else if(9 < this.frame) {
            this.extra--; 
        }

        if(pins == 10) {
            this.frame += 1;
            this.second = false;
        } else {
            this.frame += this.second ? 1 : 0;
            this.second = !this.second;
        }
        this.rolls.push(pins);
    }

    score() {
        if(!this.gameOver()) {
            throw new Error('Score cannot be taken until the end of the game');
        }
        var result = 0;
        for(var frame = 0, i = 0; frame < 10; frame++) {
            result += this.rolls[i] + this.rolls[i+1];
            if(this.rolls[i] == 10 || this.rolls[i] + this.rolls[i+1] == 10) {
                result += this.rolls[i+2];
            }
            i += (this.rolls[i] == 10 ? 1 : 2);
        }
        return result;
    }
}

module.exports = Bowling;
