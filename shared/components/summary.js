'use strict'

import React from 'react'
import GiftSummary from './gift-summary'
import OrgSummary from './org-summary'
import VolunteerSummary from './volunteer-summary'

const Summary = () => <nav className='level'>
  <div className='level-item has-text-centered'>
    <GiftSummary />
  </div>
  <div className='level-item has-text-centered'>
    <OrgSummary />
  </div>
  <div className='level-item has-text-centered'>
    <VolunteerSummary />
  </div>
</nav>

export default Summary
