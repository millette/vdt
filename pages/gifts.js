'use strict'

import React, { Component } from 'react'
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
        <Header title='Gifts' />
        <GiftForm username={this.props.username} save={this.save} />
        <h3>The count is {this.props.gift.length}</h3>
        <ol>
          {this.props.gift.map((x, i) => <li key={`gift-${i}`}>
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

const mapState = state => ({
  gift: state.gift,
  username: state.auth.name
})

const mapDispatch = ({ gift: { addAsync } }) => ({
  addAsync: (gift) => addAsync(gift)
})

export default withRematch(initStore, mapState, mapDispatch)(Gifts)
