'use strict'

import React, { Component } from 'react'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Header from '../shared/components/header'
import OrgDisplay from '../shared/components/org-display'
import VolunteerForm from '../shared/components/volunteer-form'

class Volunteers extends Component {
  constructor (props) {
    super(props)
    this.save = this.props.addVolunteerAsync.bind(this)
  }

  render () {
    return (
      <div>
        <Header title='Les volontaires' />
        <VolunteerForm username={this.props.username} save={this.save} />
        <h3>The count is {this.props.volunteers.length}</h3>
        <ol>
          {this.props.volunteers.map((x, i) => <li key={`volunteer-${i}`}>
            {i} {x.title}
            <br />
            {JSON.stringify(x)}
          </li>)}
        </ol>
        <hr />
        <OrgDisplay />
      </div>
    )
  }
}

const mapState = (state) => ({
  volunteers: state.volunteer,
  username: state.auth.name
})

const mapDispatch = ({ volunteer: { addVolunteerAsync } }) => ({
  addVolunteerAsync: (volunteer) => addVolunteerAsync(volunteer)
})

export default withRematch(initStore, mapState, mapDispatch)(Volunteers)
