'use strict'

import React, { Component } from 'react'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Header from '../shared/components/header'
import OrgDisplay from '../shared/components/org-display'
import OrgForm from '../shared/components/org-form'
import ListOf from '../shared/components/list-of'

class Orgs extends Component {
  constructor (props) {
    super(props)
    this.save = this.props.addAsync.bind(this)
  }

  render () {
    return <section className='section'>
      <div className='container'>
        <Header title='Les Orgs' />
        <OrgForm username={this.props.username} save={this.save} />
        <ListOf items={this.props.org} type='org' />
        <OrgDisplay />
      </div>
    </section>
  }
}

const mapState = (state) => ({
  org: state.org,
  username: state.auth.name
})

const mapDispatch = ({ org: { addAsync } }) => ({
  addAsync: (org) => addAsync(org)
})

export default withRematch(initStore, mapState, mapDispatch)(Orgs)
