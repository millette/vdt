'use strict'

import React, { Component } from 'react'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Header from '../shared/components/header'
import OrgDisplay from '../shared/components/org-display'
import GiftForm from '../shared/components/gift-form'
import ListOf from '../shared/components/list-of'

class Gifts extends Component {
  constructor (props) {
    super(props)
    this.save = this.props.addAsync.bind(this)
  }

  render () {
    return <section className='section'>
      <div className='container'>
        <Header title='Gifts' />
        <GiftForm username={this.props.username} save={this.save} />
        <ListOf items={this.props.gift} type='gift' />
        <OrgDisplay />
      </div>
    </section>
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
