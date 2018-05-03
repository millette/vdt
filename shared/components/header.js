'use strict'

import React, { Component } from 'react'
import Auth from './auth'
import Link from 'next/link'

/*
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
*/

class Header extends Component {
  render () {
    return (
      <div>
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
          </ul>
        </nav>
        <Auth />
      </div>
    )
  }
}

export default Header
