import {Scene} from 'phaser'

export default class BootScene extends Scene {
    constructor(args) {
        super(args)
        Scene.call(this, {key: 'BootScene'})
    }

    preload() {
        this.load.audio('gameMusic', '/static/game/background.mp3')
    }

    create() {
        this.sound.pauseOnBlur = true;
        this.sound.add('gameMusic', {loop: true})
        this.sound.play('gameMusic')
        this.scene.start('MainMenu')
    }
}
