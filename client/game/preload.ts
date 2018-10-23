export default function preload(this: any) {
    this.game.load.atlasJSONHash('SpriteSheet', '/static/game/SpriteSheet.png', '/static/game/SpriteSheet.json')
    this.game.load.image('bullet', '/static/game/bitcoinMini.png')
    this.game.load.image('enemyBullet', '/static/game/enemyBullet.jpg')
    this.game.load.image('background', '/static/game/background.png')
    this.game.load.image('start', '/static/game/greyButton.png')
    this.game.load.audio('InvaderBullet', '/static/game/InvaderBullet.wav')
    this.game.load.audio('InvaderHit', '/static/game/InvaderHit.wav')
    this.game.load.audio('playerHit', '/static/game/ShipHit.wav')
    this.game.load.audio('gameMusic', '/static/game/background.mp3')
}
