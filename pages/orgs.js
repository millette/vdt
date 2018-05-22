'use strict'

import React, { Component } from 'react'
import { dispatch } from '@rematch/core'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Header from '../shared/components/header'

class Orgs extends Component {
  render () {
    return (
      <div>
        <Header title='Les Orgs' />
        <h2>The count is {this.props.org.length}</h2>
        <p>
          <button onClick={this.props.add2}>add</button>
          <button onClick={() => dispatch.org.add({ name: 'rah' })}>
            add (using dispatch function)
          </button>
          <button onClick={this.props.add2By({ name: 'joeBy' })}>add joeBy</button>
          <button onClick={this.props.add2Async}>incrementAsync</button>
        </p>
        <ol>
          {this.props.org.map((o, i) => <li key={i}>{o.name}</li>)}
        </ol>
      </div>
    )
  }
}

const mapState = (state) => ({
  org: state.org
})

const mapDispatch = ({ org: { add, addAsync } }) => ({
  add2: () => add({ name: 'joe' }),
  add2By: (anOrg) => () => add(anOrg),
  add2Async: () => addAsync({ name: 'joeAsync' })
})

export default withRematch(initStore, mapState, mapDispatch)(Orgs)
