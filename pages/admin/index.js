'use strict'

import React, { Fragment } from 'react'
import Header from '../../shared/components/header'
import { initStore } from '../../shared/store'
import withRematch from '../../shared/utils/withRematch'
import OrgDisplay from '../../shared/components/org-display'
import Summary from '../../shared/components/summary'

const Admin = () => <Fragment>
  <Header title='Admin' />
  <section className='section'>
    <div className='container'>
      <Summary />
      <OrgDisplay />
    </div>
  </section>
</Fragment>

export default withRematch(initStore)(Admin)
