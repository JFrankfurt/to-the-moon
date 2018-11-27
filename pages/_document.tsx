import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class extends Document {
  public static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  public render() {
    return (
      <html>
        <Head>
          <style>{`
                body {
                    font-size: 1.2em;
                    margin: 0;
                }
            `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
