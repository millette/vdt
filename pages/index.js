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
            <li>Faire un don</li>
            <li>Échanger des heures confirmées contre un cadeau</li>
            <li>Marquer leurs heures par org</li>
          </ul>
        </div>
      </div>

      <div className='column'>
        <div className='content'>
          <h2>Les donateurs</h2>
          <p>Les donateurs peuvent:</p>
          <ul>
            <li>Faire un don</li>
          </ul>
        </div>
      </div>

      <div className='column'>
        <div className='content'>
          <h2>Les orgs</h2>
          <p>Les orgs peuvent:</p>
          <ul>
            <li>Faire un don</li>
            <li>Confirmer les heures des volontaires</li>
            <li>Marquer les heures des volontaires</li>
          </ul>
        </div>
      </div>

    </div>
    <OrgDisplay />
  </div>
</section>

export default withRematch(initStore)(Home)
