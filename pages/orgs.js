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
        <h2>The count is {this.props.org}</h2>
        <p>
          <button onClick={this.props.increment}>increment</button>
          <button onClick={() => dispatch.org.increment(1)}>
            increment (using dispatch function)
          </button>
          <button onClick={this.props.incrementBy(5)}>increment by 5</button>
          <button onClick={this.props.incrementAsync}>incrementAsync</button>
        </p>
        <br />
      </div>
    )
  }
}

const mapState = (state) => ({
  org: state.org
})

const mapDispatch = ({ org: { increment, incrementAsync } }) => ({
  increment: () => increment(1),
  incrementBy: amount => () => increment(amount),
  incrementAsync: () => incrementAsync(1)
})

export default withRematch(initStore, mapState, mapDispatch)(Orgs)
