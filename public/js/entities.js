import Entity from './Entity.js';
import Go from './traits/Go.js';
import Jump from './traits/Jump.js';
import {loadSpriteSheet} from './loaders.js';

export function createMario() {
    return loadSpriteSheet('mario')
    .then(sprite => {
        const mario = new Entity();
        mario.size.set(14, 16);

        mario.addTrait(new Go());
        mario.addTrait(new Jump());

        function routeFrame(mario) {
            return 'idle';
        }

        mario.draw = function drawMario(context) {

            sprite.draw(routeFrame(this), context, 0, 0);
        }

        return mario;
    });
}