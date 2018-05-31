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
      <Link href='/orgs' prefetch>
        <a className='button'>Orgs Example</a>
      </Link>
    </p>
    <p className='control'>
      <Link href='/gifts' prefetch>
        <a className='button'>Gifts Example</a>
      </Link>
    </p>
    <p className='control'>
      <Link href='/volunteers' prefetch>
        <a className='button'>Volunteers Example</a>
      </Link>
    </p>
  </div>
</div>

export default Header
