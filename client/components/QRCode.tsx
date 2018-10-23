import kjua from 'kjua'
import React, {Component} from 'react'

type QRCodeProps = {
    text: string;
    content: string;
}

class QRCode extends Component<QRCodeProps, any> {
    public static defaultProps = {
        text: 'this is a test code',
        // tslint:disable-next-line
        content: 'lnbc1500n1pdu7jlwpp54jtwv4kwp7p4fxpm63enzl767g6pzxy4jnk2vw5sds5enpj6vnnsdpa2fjkzep6ypxyu4jf2vsz6gzpypxxjemgw3hxjmn8yp8x2arhdaexkgzkd9eh2cqzysxqr23std4sz3g5j9mgymcgnhhq633qj00kv3n9qulv9ntpy0vxl6kp7vv9mqkxflhhdfxvpj0csr9h9gpewtcyndxnjns5gagr3kldp7psxmqp330wkw',
    }
    private imageRef: HTMLImageElement | null

    constructor(props: QRCodeProps) {
        super(props)
        this.imageRef = null
    }

    public componentDidMount() {
        if (window) {
            kjua({
                crisp: false,
                fill: '#000',
                image: this.imageRef,
                render: 'image',
                rounded: 50,
            })
        }
    }

    public render() {
        return <div className='root'>
            <h3>{this.props.text}</h3>
            <img ref={el => this.imageRef = el}/>
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
