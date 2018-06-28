'use strict'

// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import BuildLink from '../shared/components/build-link'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css' integrity='sha256-zIG416V1ynj3Wgju/scU80KAEWOsO5rRLfVyRDuOv7Q=' crossOrigin='anonymous' />
        </Head>
        <body>
          <Main />
          <footer className='footer'>
            <div className='container'>
              <div className='content has-text-centered'>
                <p>
                  &copy;2018 <a target='_blank' href='http://robin.millette.info/'>Robin Millette</a><br />
                  <a target='_blank' href='https://github.com/millette/vdt'>Sources</a>{' '}
                  (<BuildLink buildId={this.props.__NEXT_DATA__.buildId} />)
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
