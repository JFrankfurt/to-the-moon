import {CANVAS, Game} from 'phaser'
import React, {Component} from 'react'
import {BootScene, LeaderBoard, Level, MainMenu} from './scenes'

const config = (canvas: HTMLCanvasElement) => ({
  canvas,
  type: CANVAS,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 0},
    },
  },
  scene: [
    BootScene,
    MainMenu,
    Level,
    LeaderBoard,
  ],
})

export default class extends Component<any, any> {
  private canvasRef: HTMLCanvasElement | null

  constructor(props: any) {
    super(props)
    this.canvasRef = null
  }

  public componentDidMount() {
    const game = new Game(config(this.canvasRef as HTMLCanvasElement))
    console.log(game)
  }

  public render() {
    return <canvas ref={el => this.canvasRef = el}/>
  }
}
