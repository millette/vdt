'use strict'

import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

const VolunteerSummary = (props) => <div>
  <h2 className='title is-4'>Volontaires <small>sommaire</small></h2>
  <p><Link href='/admin/volunteers'><a>{props.volunteer.length} volontaires</a></Link></p>
</div>

const mapState = (state) => ({
  volunteer: state.volunteer
})

export default connect(mapState)(VolunteerSummary)
