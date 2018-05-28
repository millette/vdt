'use strict'

import React, { Component } from 'react'
import { dispatch } from '@rematch/core'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Header from '../shared/components/header'
import OrgDisplay from '../shared/components/org-display'
import GiftForm from '../shared/components/gift-form'

class Gifts extends Component {
  constructor (props) {
    super(props)
    this.save = this.props.addAsync.bind(this)
  }

  render () {
    return (
      <div>
        <Header />
        <h1>Gifts</h1>
        <GiftForm username={this.props.username} save={this.save} />
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
            <br />
            {JSON.stringify(x)}
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
  gift: state.gift,
  username: state.auth.name
})

const mapDispatch = ({ gift: { add, addAsync } }) => ({
  add: () => add(1),
  addBy: (gift) => () => add(gift),
  addAsync: (gift) => addAsync(gift)
})

export default withRematch(initStore, mapState, mapDispatch)(Gifts)
