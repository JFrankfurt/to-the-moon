import { GameObjects, Input, Math as PhaserMath, Scene } from 'phaser'
import Bullet from '../Bullet'

export default class Level extends Scene {
  private aliens: GameObjects.Group | null
  private enemyBullets: GameObjects.Group | null
  private enemyBulletSound: any
  private enemyBulletHitSound: any
  private keys: Input.Keyboard.CursorKeys | null
  private levelText: string
  private lives: number
  private player: GameObjects.Sprite | null
  private playerBullets: GameObjects.Group | null
  private playerHitSound: any
  private scoreText: string

  constructor(args: any) {
    super(args)
    Scene.call(this, { key: 'Level' })
    this.aliens = null
    this.playerBullets = null
    this.enemyBullets = null
    this.keys = null
    this.player = null
    this.levelText = 'Level : '
    this.lives = 3
    this.scoreText = 'Score : '
  }

  public preload() {
    this.load.atlas(
      'SpriteSheet',
      '/static/game/SpriteSheet.png',
      '/static/game/SpriteSheet.json'
    )
    this.load.image('bullet', '/static/game/bitcoinMini.png')
    this.load.image('enemyBullet', '/static/game/enemyBullet.jpg')
    this.load.audio('InvaderBullet', '/static/game/InvaderBullet.wav')
    this.load.audio('InvaderHit', '/static/game/InvaderHit.wav')
    this.load.audio('playerHit', '/static/game/ShipHit.wav')
  }

  public create() {
    this.keys = this.input.keyboard.createCursorKeys()

    // player bullets
    this.playerBullets = this.add.group({
      classType: Bullet,
      runChildUpdate: true,
    })

    this.enemyBullets = this.add.group({
      classType: Bullet,
      runChildUpdate: true,
    })

    //player
    this.player = this.physics.add
      .sprite(500, 900, 'SpriteSheet', 18)
      .setOrigin(0, 0)

    //aliens
    this.createAliens()

    scoreText = this.add.text(10, 10, scoreString + score, {
      font: '34px Arial',
      fill: '#fff',
    })
    levelText = this.add.text(10, 50, levelString + level, {
      font: '34px Arial',
      fill: '#fff',
    })

    fireButton = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE)
    restartButton = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.ENTER)
    nextLevelButton = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.N)
  }

  public update() {
    this.handleMovement(
      this.keys as Input.Keyboard.CursorKeys,
      this.player as GameObjects.Sprite,
      this.lives
    )
    if (this.time.now > firingTimer && playing) {
      this.enemyFires()
    }
    if (restartButton.isDown && lives.countLiving() === 0) {
      this.restart()
    }
    if (nextLevelButton.isDown && this.alienGroup.count() === 0) {
      this.nextLevelRestart()
    }
    // check for collisions of: bullets/aliens, enemyBullets/player, aliens/player
  }

  // remove the bullet/alien
  // play explosion animation/sound
  // add to score
  // end level
  private bulletHitsAlien(bullet, alien) {}

  private createAliens() {}

  // remove bullets
  // play explosion animation and sound
  // stop aliens firing
  // reset player
  // subtract life
  // and game if no lives
  private enemyBulletHitsPlayer(player, bullet) {}

  private enemyFires() {
    // ToDo: add some sort of inaccuracy to the alien's bullets (random x dimension deviation on moveToObject)
    // ToDo: add variation to fire timer (timeOffset)
    enemyBullet = this.enemyBullets.getFirstExists(false)
    livingEnemies = []

    // shotTimeRandomizer = timeOffset + (Math.floor(Math.random() * 100 * (Math.random() < 0.5 ? -1 : 1)))
    // fireLocation.x = (player.x + 25) + (Math.floor(Math.random * 100 * (Math.random() < 0.5 ? -1 : 1)));
    // fireLocation.y = player.y;

    this.aliens.forEachAlive(alien => livingEnemies.push(alien))

    if (enemyBullet && livingEnemies.length > 0) {
      this.enemyBulletSound.play()
      let random = this.rnd.integerInRange(0, livingEnemies.length - 1)
      let shooter = livingEnemies[random]
      enemyBullet.reset(shooter.body.x, shooter.body.y)
      this.physics.arcade.moveToObject(enemyBullet, player, 1000)
      firingTimer = this.time.now + timeOffset
    }
  }

  private enemyHitsPlayer(player, aliens) {
    aliens.kill()
    player.kill()

    alive = lives.getFirstAlive()

    if (alive) {
      alive.kill()
    }

    let explosion = explosions.getFirstExists(false)
    explosion.reset(player.body.x, player.body.y)
    explosion.play('explode!', 30, false, true)
    this.playerHitSound.play()

    if (lives.countLiving() === 1) {
      player.kill()
      this.gameOver()
    }
    if (lives.countLiving() > 0) {
      player.revive()
    }
  }

  private fireBullet() {
    if (this.time.now > bulletTime) {
      bullet = bullets.getFirstExists(false)
      if (bullet) {
        bullet.reset(player.x, player.y + 8)
        bullet.body.velocity.y = -400
        bulletTime = this.time.now + 50
      }
    }
  }

  private gameOver() {
    playing = false
    stateText.text = 'GAME OVER \n Enter to restart'
    stateText.visible = true
  }

  private handleMovement(
    keys: Input.Keyboard.CursorKeys,
    player: GameObjects.Sprite
  ) {
    // const {left, right, space} = keys
  }

  private nextLevelRestart() {
    // ToDo: increase rate at which aliens fire
    aliens.removeAll()
    this.createAliens()
    player.revive()
    stateText.visible = false
    cashButton.visible = false
    level += 1
    levelText.text = levelString + level
    timeOffset = timeOffset * 0.9
    playing = true
  }

  private restart() {
    aliens.removeAll()
    stateText.visible = false
    this.state.start('MainMenu')
    score = 0
    satoshis = 0
    level = 1
    levelText.text = levelString + level
    scoreText.text = scoreString + score
    satoshiText.text = satoshiString + satoshis
    timeOffset = 1000
    playing = true
  }
}
