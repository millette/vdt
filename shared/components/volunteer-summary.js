'use strict'

import React from 'react'
import { connect } from 'react-redux'

const VolunteerSummary = (props) => <div>
  <h2>Volontaires <small>sommaire</small></h2>
  <p>{props.volunteer.length} volontaires.</p>
</div>

const mapState = (state) => ({
  volunteer: state.volunteer
})

export default connect(mapState)(VolunteerSummary)
