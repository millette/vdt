'use strict'

import React, { Component, Fragment } from 'react'
import Header from '../shared/components/header'
import HoursForm from '../shared/components/hours-form'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Link from 'next/link'

class Hours extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (a) {
    return this.props.addVolHours(a)
      .then(() => this.props.addOrgHours(a))
      .catch((err) => console.error(err))
  }

  render () {
    const body = this.props.user.type === 'org'
      ? <Fragment>
        <p><Link prefetch href='/admin/volunteers'><a className='button'>Admin volontaires</a></Link></p>
        <HoursForm handleSubmit={this.handleSubmit} volunteer={this.props.volunteer} user={this.props.user} />
      </Fragment>
      : <p>Seuls les <i>orgs</i> peuvent ajouter des heures aux volontaires.</p>
    return <Fragment>
      <Header title='Heures' />
      <section className='section'>
        <div className='container'>
          <p>Comptabiliser les heures des volontaires.</p>
          {body}
        </div>
      </section>
    </Fragment>
  }
}

const mapState = state => ({
  user: state.auth,
  volunteer: state.volunteer
})

const mapDispatch = ({ auth: { addOrgHours }, volunteer: { addVolHours } }) => ({
  addOrgHours: (payload) => addOrgHours(payload),
  addVolHours: (payload) => addVolHours(payload)
})

export default withRematch(initStore, mapState, mapDispatch)(Hours)
