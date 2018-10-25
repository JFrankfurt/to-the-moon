import {Scene} from 'phaser'

export default class BootScene extends Scene {
    constructor(args: any) {
        super(args)
        Scene.call(this, {key: 'BootScene'})
    }

    public preload() {
        this.load.audio('gameMusic', '/static/game/background.mp3')
    }

    public create() {
        this.sound.pauseOnBlur = true;
        this.sound.add('gameMusic', {loop: true})
        this.sound.play('gameMusic')
        this.scene.start('MainMenu')
    }
}
