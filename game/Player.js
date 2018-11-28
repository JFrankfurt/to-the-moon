import {GameObjects} from 'phaser'

// this should manage life count, resets, animations, controls/movement
export default class Player extends GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);
    }
}
