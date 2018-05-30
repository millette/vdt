'use strict'

import React from 'react'
import { connect } from 'react-redux'

const OrgSummary = (props) => <div>
  <h2>Org <small>sommaire</small></h2>
  <p>{props.org.length} orgs.</p>
</div>

const mapState = (state) => ({
  org: state.org
})

export default connect(mapState)(OrgSummary)
