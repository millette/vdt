'use strict'

import React from 'react'
import Auth from './auth'
import Link from 'next/link'
import Head from 'next/head'

const Header = (props) => <div>
  <Head>
    <title>
      {props.title || ''}
    </title>
  </Head>
  <h1 className='title is-1'>{props.title || ''}</h1>
  <Auth />
  <div className='field is-grouped'>
    <p className='control'>
      <Link href='/' prefetch>
        <a className='button'>Home</a>
      </Link>
    </p>
    <p className='control'>
      <Link href='/admin/' prefetch>
        <a className='button'>Admin</a>
      </Link>
    </p>
  </div>
</div>

export default Header
