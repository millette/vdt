'use strict'

import React from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

const Home = () => <div>
  <Header title='Accueil' />
  <p>C’est comme ça.</p>
</div>

export default withRematch(initStore)(Home)
