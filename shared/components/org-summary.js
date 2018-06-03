'use strict'

import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

const OrgSummary = (props) => <div>
  <h2 className='title is-4'>Org <small>sommaire</small></h2>
  <p><Link href='/admin/orgs'><a>{props.org.length} orgs</a></Link></p>
</div>

const mapState = (state) => ({
  org: state.org
})

export default connect(mapState)(OrgSummary)
