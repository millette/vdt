'use strict'

import React from 'react'
import { connect } from 'react-redux'

const GiftSummary = (props) => <div>
  <h2>Gift <small>sommaire</small></h2>
  <p>{props.gift.length} gifts.</p>
</div>

const mapState = (state) => ({
  gift: state.gift
})

export default connect(mapState)(GiftSummary)
