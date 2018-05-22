'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

class OrgDisplay extends Component {
  render () {
    return (
      <div>
        <h3>Counter</h3>
        <p>
          This counter is connected via the <b>connect</b> function. Components
          which are not pages can be connected using the connect function just
          like redux components.
        </p>
        <p>Current length {this.props.org.length} </p>
        <p>
          <button onClick={this.props.add3}>Increment</button>
        </p>
      </div>
    )
  }
}

const mapState = (state) => ({
  org: state.org
})

const mapDispatch = ({ org: { add } }) => ({
  add3: () => add({ name: 'disp' })
})

export default connect(mapState, mapDispatch)(OrgDisplay)
