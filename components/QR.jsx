import React, {Component} from 'react'
import Link from 'next/link'
import QRCode from 'qrcode.react'
import {CheckCircleOutline} from '@material-ui/icons'


class QR extends Component {
  static defaultProps = {
    endpoint: 'http://localhost:8000/node',
  }

  constructor(props) {
    super(props)
    this.state = {
      paid: false,
      value: '',
    }
  }

  componentDidMount() {
    this.connection = new WebSocket('ws://localhost:8001')
    this.connection.onopen = () => {
      console.log('ws open')
    }
    this.connection.onerror = console.error
    this.connection.onmessage = (message) => {
      if (message.data === 'true') {
        this.setState({
          paid: true
        })
      }
    }
    fetch(this.props.endpoint)
      .then(x => x.text())
      .then(value => {
        setInterval(() => this.connection.send(JSON.stringify({payment_request: value})), 6000)
        this.setState({
          value
        })
      })
  }

  copy = () => {
    const el = document.createElement('textarea')
    el.value = this.state.value
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  render() {
    const {paid, value} = this.state
    return <div className={paid ? 'root active' : 'root'}>
      {paid
        ? <Link href={`/game/${value}`}><h1 style={{cursor: 'pointer'}}><a>PLAY</a></h1></Link>
        : <h3>Pay $0.25 to play.</h3>}
      {paid
        ? <CheckCircleOutline style={{fontSize: '36px'}}/>
        : <div className='qr-code' onClick={this.copy}>
          <QRCode
            size={200}
            style={{cursor: 'pointer'}}
            value={value}/>
        </div>}
      <style jsx>{`
                .root {
                    align-items: center;
                    background-color: pink;
                    border-radius: 3px;
                    color: black;
                    display: flex;
                    flex-direction: column;
                    height: 400px;
                    justify-content: space-around;
                    margin-bottom: 12px;
                    padding: 12px;
                    transition: all 1s ease;
                    width: 360px;
                }
                .root.active {
                      animation: rainbow 1s linear infinite alternate;
                      background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
                      background-size: 1800% 1800%;
                      cursor: pointer;
                }
                .qr-code {
                    background-color: white;
                    border-radius: 6px;
                    padding: 10px;
                    position: relative;
                }
                @keyframes rainbow {
                    0%{background-position: 0% 82%}
                    25%{background-position: 100% 19%}
                    75%{background-position: 0% 90%}
                    100%{background-position: 100% 10%}
                }
            `}</style>
    </div>
  }
}

export default QR
