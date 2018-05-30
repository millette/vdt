'use strict'

import React from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import GiftSummary from '../shared/components/gift-summary'
import OrgSummary from '../shared/components/org-summary'
import VolunteerSummary from '../shared/components/volunteer-summary'
import OrgDisplay from '../shared/components/org-display'

const Home = () => <div>
  <Header title='Accueil' />
  <p>C’est comme ça.</p>
  <GiftSummary />
  <OrgSummary />
  <VolunteerSummary />
  <br />
  <OrgDisplay />
</div>

export default withRematch(initStore)(Home)
