'use strict'

// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css' integrity='sha256-zIG416V1ynj3Wgju/scU80KAEWOsO5rRLfVyRDuOv7Q=' crossOrigin='anonymous' />
        </Head>
        <body>
          <Main />
          <footer className='footer'>
            <div className='container'>
              <div className='content has-text-centered'>
                <p>
                  &copy;2018 <a target='_blank' href='http://robin.millette.info/'>Robin Millette</a><br />
                  <a target='_blank' href='http://github.com/millette/vdt'>Sources</a>
                </p>
              </div>
            </div>
          </footer>
          <NextScript />
        </body>
      </html>
    )
  }
}
