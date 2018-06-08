'use strict'

import React, { Fragment, Component } from 'react'
import { initStore } from '../../shared/store'
import withRematch from '../../shared/utils/withRematch'
import Header from '../../shared/components/header'
import OrgDisplay from '../../shared/components/org-display'
import GiftForm from '../../shared/components/gift-form'
import ListOf from '../../shared/components/list-of'
import Summary from '../../shared/components/summary'
import Link from 'next/link'

class Gifts extends Component {
  constructor (props) {
    super(props)
    this.save = this.props.addAsync.bind(this)
  }

  render () {
    return <Fragment>
      <Header title='Admin' subtitle='Gifts' />
      <section className='section'>
        <div className='container'>
          <p><Link href='/gifts' prefetch><a className='button'>Magasin</a></Link></p>
          <Summary />
          <GiftForm username={this.props.username} save={this.save} />
          <ListOf items={this.props.gift} type='gift' />
          <OrgDisplay />
        </div>
      </section>
    </Fragment>
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
