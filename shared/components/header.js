'use strict'

import React, { Component } from 'react'
import Link from 'next/link'

class Header extends Component {
  render () {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link href='/' passHref>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/orgs' passHref>
                <a>Orgs Example</a>
              </Link>
            </li>
            <li>
              <Link href='/gifts' passHref>
                <a>Gifts Example</a>
              </Link>
            </li>
            <li>
              <Link href='/volunteers' passHref>
                <a>Volunteers Example</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
