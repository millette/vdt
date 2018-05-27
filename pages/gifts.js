'use strict'

import React, { Component } from 'react'
import { dispatch } from '@rematch/core'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Header from '../shared/components/header'
import OrgDisplay from '../shared/components/org-display'

class Gifts extends Component {
  render () {
    return (
      <div>
        <Header />
        <h1> Counter </h1>
        <p>
          <button onClick={this.props.add}>increment</button>
          <button onClick={() => dispatch.gift.add({ title: 'oy' })}>
            increment (using dispatch function)
          </button>
          <button onClick={this.props.addBy(5)}>increment by 5</button>
          <button onClick={this.props.addAsync}>incrementAsync</button>
        </p>
        <h3>The count is {this.props.gift.length}</h3>
        <ol>
          {this.props.gift.map((x, i) => <li key={`gift-${i}`}>
            {i} {x.title}
          </li>)}
        </ol>
        <p>Mo' stuff.</p>
        <hr />
        <OrgDisplay />
      </div>
    )
  }
}

const mapState = state => ({
  gift: state.gift
})

const mapDispatch = ({ gift: { add, addAsync } }) => ({
  add: () => add(1),
  addBy: amount => () => add(amount),
  addAsync: () => addAsync(1)
})

export default withRematch(initStore, mapState, mapDispatch)(Gifts)
