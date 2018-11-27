import { CANVAS, Game } from 'phaser'
import React, { Component } from 'react'
import { BootScene, LeaderBoard, Level, MainMenu } from './scenes'

const config = (canvas: HTMLCanvasElement) => ({
  canvas,
  type: CANVAS,
  width: 750,
  height: 750,
  physics: {
    default: 'arcade',
  },
  scene: [BootScene, MainMenu, Level, LeaderBoard],
  zoom: 2,
})

export default class extends Component<any, any> {
  private canvasRef: HTMLCanvasElement | null

  constructor(props: any) {
    super(props)
    this.canvasRef = null
  }

  public componentDidMount() {
    new Game(config(this.canvasRef as HTMLCanvasElement))
  }

  public render() {
    return <canvas ref={el => (this.canvasRef = el)} />
  }
}
