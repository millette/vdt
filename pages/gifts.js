'use strict'

import React, { Fragment, Component } from 'react'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Header from '../shared/components/header'
import ListOf from '../shared/components/list-of'
import Link from 'next/link'

class Gifts extends Component {
  render () {
    return <Fragment>
      <Header title='Magasin' />
      <section className='section'>
        <div className='container'>
          {this.props.user.name ? <p>Bonjour {this.props.user.name}.</p> : '' }
          <p><Link href='/admin/gifts' prefetch><a className='button'>Admin magasin</a></Link></p>
          <ListOf items={this.props.gift} type='gift' buy={this.props.user.type === 'volunteer' && this.props.buy.bind(this)} />
        </div>
      </section>
    </Fragment>
  }
}

const mapState = state => ({
  gift: state.gift,
  user: state.auth
})

const mapDispatch = ({ auth: { buy }, gift: { buyAsync } }) => ({
  buy: ({ i, estimate, owner }) => {
    return buyAsync({ i, owner })
      .then((x) => {
        buy({ i, estimate })
      })
  }
})

export default withRematch(initStore, mapState, mapDispatch)(Gifts)
