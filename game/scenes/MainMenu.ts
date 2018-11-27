import { Scene } from 'phaser'

export default class MainMenu extends Scene {
  constructor(args: any) {
    super(args)
    Scene.call(this, { key: 'MainMenu' })
  }

  public preload() {
    this.load.image('background', '/static/game/background.png')
  }

  public create() {
    // background
    this.add
      .tileSprite(0, 0, 500, 500, 'background')
      .setOrigin(0, 0)
      .setScale(1.5, 1.5)
    // start text
    const startText = this.add
      .text(750 / 2 - 50, 750 / 2 - 25, 'START', {
        font: '24px Courier',
        fill: '#fff',
      })
      .setInteractive()
    startText
      .on('pointerover', () => startText.setAlpha(0.5))
      .on('pointerout', () => startText.setAlpha(1))
      .on('pointerdown', this.start)
  }

  public update() {
    // todo: add star field scroll
  }

  private start() {
    this.scene.start('Level')
  }
}
