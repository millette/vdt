'use strict'

import React from 'react'
import Header from '../../shared/components/header'
import { initStore } from '../../shared/store'
import withRematch from '../../shared/utils/withRematch'
import OrgDisplay from '../../shared/components/org-display'
import Summary from '../../shared/components/summary'

const Admin = () => <section className='section'>
  <div className='container'>
    <Header title='Admin' />
    <Summary />
    <OrgDisplay />
  </div>
</section>

export default withRematch(initStore)(Admin)
