'use strict'

import React from 'react'
import Link from 'next/link'

const MainMenu = () => <nav className='navbar is-primary' role='navigation' aria-label='main navigation'>
  <div className='container'>
    <div className='navbar-brand'>
      <Link href='/' prefetch><a className='navbar-item'>Accueil</a></Link>
      <button role='button' data-target='navMenu' className='navbar-burger' aria-label='menu' aria-expanded='false'>
        <span aria-hidden />
        <span aria-hidden />
        <span aria-hidden />
      </button>
    </div>
    <div className='navbar-menu' id='navMenu'>
      <div className='navbar-start'>
        <Link href='/gifts' prefetch><a className='navbar-item'>Magasin</a></Link>
      </div>
      <div className='navbar-end'>
        <Link href='/admin' prefetch><a className='navbar-item'>Admin</a></Link>
      </div>
    </div>
  </div>
</nav>

export default MainMenu
