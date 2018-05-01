'use strict'

import React, { Component } from 'react'
import Link from 'next/link'
import { dispatch } from '@rematch/core'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Header from '../shared/components/header'

class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <h1>Counter</h1>
        <h3>The count is {this.props.gift}</h3>
        <p><Link href='/nowhere'><a>Nowhere</a></Link>.</p>
        <p>
          <button onClick={this.props.increment}>increment</button>
          <button onClick={() => dispatch.gift.increment(1)}>
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

const mapState = state => ({
  gift: state.gift
})

const mapDispatch = ({ gift: { increment, incrementAsync } }) => ({
  increment: () => increment(1),
  incrementBy: amount => () => increment(amount),
  incrementAsync: () => incrementAsync(1)
})

export default withRematch(initStore, mapState, mapDispatch)(Home)
