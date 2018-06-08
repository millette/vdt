'use strict'

import React, { Fragment } from 'react'
import Auth from './auth'
import Head from 'next/head'
import MainMenu from './main-menu'

const Header = (props) => <Fragment>
  {props.title ? <Head><title>{props.title}</title></Head> : ''}
  <MainMenu />
  <section className='hero is-info is-bold'>
    <div className='hero-body'>
      <div className='container'>
        <Auth />
        <h1 className='title is-1'>{props.title || ''}</h1>
      </div>
    </div>
  </section>
</Fragment>

export default Header
