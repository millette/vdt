'use strict'

import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

const GiftSummary = (props) => <div className='box'>
  <h2 className='title is-4'>Gift <small>sommaire</small></h2>
  <p><Link prefetch href='/admin/gifts'><a>{props.gift.length} gifts</a></Link></p>
</div>

const mapState = (state) => ({
  gift: state.gift
})

export default connect(mapState)(GiftSummary)
