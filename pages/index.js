'use strict'

import React from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import GiftSummary from '../shared/components/gift-summary'
import OrgSummary from '../shared/components/org-summary'
import VolunteerSummary from '../shared/components/volunteer-summary'
import OrgDisplay from '../shared/components/org-display'

const Home = () => <section className='section'>
  <div className='container'>
    <Header title='Accueil' />
    <nav class='level'>
      <div class='level-item has-text-centered'>
        <GiftSummary />
      </div>
      <div class='level-item has-text-centered'>
        <OrgSummary />
      </div>
      <div class='level-item has-text-centered'>
        <VolunteerSummary />
      </div>
    </nav>
    <br />
    <OrgDisplay />
  </div>
</section>

export default withRematch(initStore)(Home)
