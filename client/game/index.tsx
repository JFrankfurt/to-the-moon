import {AUTO, Game} from 'phaser'
import React, {Component} from 'react'
import create from './create'
import preload from './preload'
import update from './update'

const config = (canvas: HTMLCanvasElement) => ({
    canvas,
    type: AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
        },
    },
    scene: {
        create,
        preload,
        update,
    },
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
