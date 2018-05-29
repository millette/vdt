'use strict'

import React, { Component } from 'react'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Header from '../shared/components/header'
import OrgDisplay from '../shared/components/org-display'
import OrgForm from '../shared/components/org-form'

class Orgs extends Component {
  constructor (props) {
    super(props)
    this.save = this.props.addAsync.bind(this)
  }

  render () {
    return (
      <div>
        <Header title='Les Orgs' />
        <OrgForm username={this.props.username} save={this.save} />
        <h3>The count is {this.props.org.length}</h3>
        <ol>
          {this.props.org.map((x, i) => <li key={`org-${i}`}>
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
  org: state.org,
  username: state.auth.name
})

const mapDispatch = ({ org: { addAsync } }) => ({
  addAsync: (org) => addAsync(org)
})

export default withRematch(initStore, mapState, mapDispatch)(Orgs)
