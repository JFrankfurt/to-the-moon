import dynamic from 'next/dynamic'
import React, {Component} from 'react'
import {FileCopy} from '@material-ui/icons'
import Layout from '../components/Layout'

const Invoice = dynamic(import('../components/QR'), {ssr: false})

export default class extends Component {
    state = {node: 'Loading'}

    componentDidMount() {
        fetch('http://localhost:8000/node')
            .then(x => x.text())
            .then(node => this.setState({node}))
            .catch(() => this.setState({node: 'connection info goes here'}))
    }

    copy = () => {
        const el = document.createElement('textarea')
        el.value = this.state.node
        el.setAttribute('readonly', '')
        el.style.position = 'absolute'
        el.style.left = '-9999px'
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
    }

    render() {
        return (
            <Layout>
                <div className='root'>
                    <h1><i style={{fontSize: '0.65em'}}>TO THE MOON</i> ARCADE</h1>
                    <Invoice endpoint='http://localhost:8000/invoice'/>
                    <pre className='node' onClick={this.copy}>
                        <FileCopy/>&nbsp;{`node: ${this.state.node.substring(0, 16)}...`}
                    </pre>
                    <style jsx>{`
                        .root {
                            align-items: center;
                            border: 3px solid pink;
                            color: white;
                            display: flex;
                            flex: 1 1 auto;
                            flex-direction: column;
                            padding: 12px;
                        }
                        .node {
                            align-items: center;
                            display: flex;
                        }
                        .node:hover {
                            cursor: pointer;
                            text-decoration: underline;
                        }
                    `}</style>
                </div>
            </Layout>
        )
    }
}
