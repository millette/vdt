'use strict'

import React, { Component } from 'react'
import { dispatch } from '@rematch/core'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Header from '../shared/components/header'

const birthdate = '1971-11-22'

class Volunteers extends Component {
  render () {
    return (
      <div>
        <Header />
        <h1>Counter</h1>
        <h2>{this.props.volunteers.length}</h2>
        <h3>{(this.props.volunteers.length && this.props.volunteers[this.props.volunteers.length - 1].name) || ''}</h3>
        <h3>{(this.props.volunteers.length && this.props.volunteers[this.props.volunteers.length - 1].birthdate) || ''}</h3>
        <p>
          <button onClick={this.props.addVolunteer}>increment</button>
          <button onClick={() => dispatch.volunteer.addVolunteer({ birthdate, name: 'Dis' })}>
            increment (using dispatch function)
          </button>
          <button onClick={this.props.addVolunteerBy({ name: 'Rah' })}>increment by 5</button>
          <button onClick={this.props.addVolunteerAsync}>incrementAsync</button>
        </p>
        <br />
      </div>
    )
  }
}

const mapState = (state) => ({ volunteers: state.volunteer })

const mapDispatch = ({ volunteer: { addVolunteer, addVolunteerAsync } }) => ({
  addVolunteer: () => addVolunteer({ birthdate, name: 'Joe' }),
  addVolunteerBy: (o) => () => addVolunteer({ ...o, birthdate: '2001-05-10' }),
  addVolunteerAsync: () => addVolunteerAsync({ birthdate, name: 'Bomp' })
})

export default withRematch(initStore, mapState, mapDispatch)(Volunteers)
