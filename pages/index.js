'use strict'

import React, { Component } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <h1>Accueil</h1>
        <p>C’est comme ça.</p>
      </div>
    )
  }
}

const nop = () => ({})

export default withRematch(initStore, nop, nop)(Home)
