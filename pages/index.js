'use strict'

import React from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import OrgDisplay from '../shared/components/org-display'

const Home = () => <section className='section'>
  <div className='container'>
    <Header title='Accueil' />
    <div className='columns'>
      <div className='column'>
        <div className='content'>
          <h2>Les volontaires</h2>
          <p>Les volontaires peuvent:</p>
          <ul>
            <li>Échanger des heures contre un cadeau</li>
          </ul>
        </div>
      </div>

      <div className='column'>
        <div className='content'>
          <h2>Les donateurs</h2>
          <p>Les donateurs peuvent:</p>
          <ul>
            <li>Échanger des heures contre un cadeau</li>
          </ul>
        </div>
      </div>

      <div className='column'>
        <div className='content'>
          <h2>Les orgs</h2>
          <p>Les orgs peuvent:</p>
          <ul>
            <li>Échanger des heures contre un cadeau</li>
          </ul>
        </div>
      </div>

    </div>
    <OrgDisplay />
  </div>
</section>

export default withRematch(initStore)(Home)
