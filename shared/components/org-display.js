'use strict'

import React from 'react'
import { connect } from 'react-redux'

const OrgDisplay = (props) => <div className='box'>
  <h3 className='title is-3'>Org Counter</h3>
  <p>
    This Org counter is connected via the <b>connect</b> function. Components
    which are not pages can be connected using the connect function just
    like redux components.
  </p>
  <p>Current length {props.org.length} </p>
  <p>
    <button className='button' onClick={props.add3.bind(props, props.username)}>Increment</button>
  </p>
</div>

const mapState = (state) => ({
  org: state.org,
  username: state.auth.name
})

const mapDispatch = ({ org: { addAsync } }) => ({
  add3: (username) => addAsync({ username, title: 'disp' })
})

export default connect(mapState, mapDispatch)(OrgDisplay)
