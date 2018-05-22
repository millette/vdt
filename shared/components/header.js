'use strict'

import React from 'react'
import Auth from './auth'
import Link from 'next/link'

const Header = (props) => <div>
  <Auth />
  <nav>
    <ul>
      <li>
        <Link href='/' prefetch>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/orgs' prefetch>
          <a>Orgs Example</a>
        </Link>
      </li>

      <li>
        <Link href='/gifts' prefetch>
          <a>Gifts Example</a>
        </Link>
      </li>

      <li>
        <Link href='/volunteers' prefetch>
          <a>Volunteers Example</a>
        </Link>
      </li>

    </ul>
  </nav>
  <h1>{props.title || ''}</h1>
</div>

export default Header
