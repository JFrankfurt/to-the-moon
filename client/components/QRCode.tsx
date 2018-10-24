import React, {Component} from 'react'

type QRCodeProps = {
  title: string;
  text: string;
}

class QRCode extends Component<QRCodeProps, any> {
  public static defaultProps = {
    title: 'this is a test code',
    // tslint:disable-next-line
    text: 'lnbc1500n1pdu7jlwpp54jtwv4kwp7p4fxpm63enzl767g6pzxy4jnk2vw5sds5enpj6vnnsdpa2fjkzep6ypxyu4jf2vsz6gzpypxxjemgw3hxjmn8yp8x2arhdaexkgzkd9eh2cqzysxqr23std4sz3g5j9mgymcgnhhq633qj00kv3n9qulv9ntpy0vxl6kp7vv9mqkxflhhdfxvpj0csr9h9gpewtcyndxnjns5gagr3kldp7psxmqp330wkw',
  }

  constructor(props: QRCodeProps) {
    super(props)
  }

  public componentDidMount() {

  }

  public render() {
    return <div className='root'>
      <h3>{this.props.title}</h3>
      <style jsx>{`
                .root {
                    background-color: pink;
                    padding: 12px;
                }
            `}</style>
    </div>
  }
}

export default QRCode
