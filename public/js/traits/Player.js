import {Trait} from '../Entity.js';
import Stomper from '../traits/Stomper.js';

export default class Player extends Trait {
    constructor() {
        super('player');
        this.coins = 13;
        this.lives = 3;
        this.score = 0;

        this.listen(Stomper.EVENT_STOMP, () => {
            console.log(Stomper.EVENT_STOMP, this.score);
            this.score += 100;
        });
    }
}
