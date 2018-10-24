import dynamic from 'next/dynamic'
import React from 'react'
import Layout from '../components/Layout'

const Invoice = dynamic(import('../components/QRCode') as any, {ssr: false})
const Node = dynamic(import('../components/QRCode') as any, {ssr: false})

export default () =>
    <Layout>
        <div className='root'>
            <h1>arcade</h1>
            <div className='qr-codes'>
                <Invoice/>
                <Node/>
            </div>
            <style jsx>{`
            .root {
                border: 3px solid pink;
                color: white;
                flex: 1 1 auto;
                padding: 12px;
            }
            .qr-codes {
                align-items: center;
                display: flex;
                justify-content: space-around;
            }
        `}</style>
        </div>
    </Layout>
