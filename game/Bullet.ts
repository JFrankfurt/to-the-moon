import { GameObjects, Math as PhaserMath } from 'phaser'

export default class Bullet extends GameObjects.Image {
  public speed: number
  public born: number

  constructor(scene: any) {
    super(scene, 0, 0, 'bullet')
    this.speed = 0
    this.born = 0
  }

  public fire(player: any) {
    this.setPosition(player.x, player.y)

    if (player.flipX) {
      this.speed = PhaserMath.GetSpeed(-1000 + player.vel.x, 1)
    } else {
      this.speed = PhaserMath.GetSpeed(1000 + player.vel.x, 1)
    }
    this.born = 0
  }

  public update(delta: number) {
    this.x += this.speed * delta

    this.born += delta

    if (this.born > 1000) {
      this.setActive(false)
      this.setVisible(false)
    }
  }
}
