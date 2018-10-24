import {Scene} from 'phaser'

export default class BootScene extends Scene {
  constructor(args: any) {
    super(args)
    Scene.call(this, {key: 'BootScene'})
  }

  public preload() {
    this.load.multiatlas('spriteSheet', '/static/game/SpriteSheet.json')
    this.load.image('bullet', '/static/game/bitcoinMini.png')
    this.load.image('enemyBullet', '/static/game/enemyBullet.jpg')
    this.load.image('background', '/static/game/background.png')
    this.load.image('start', '/static/game/greyButton.png')
    this.load.audio('InvaderBullet', '/static/game/InvaderBullet.wav')
    this.load.audio('InvaderHit', '/static/game/InvaderHit.wav')
    this.load.audio('playerHit', '/static/game/ShipHit.wav')
    this.load.audio('gameMusic', '/static/game/background.mp3')
  }

  public create() {
    this.scene.start('MainMenu')
  }
}
