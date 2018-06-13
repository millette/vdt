'use strict'

import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

const IsLogged = ({self}) => (
  self.props.name
    ? <Fragment>
      <div className='navbar-item'><Link prefetch href='/me'><a className='button is-info'>{`Profile ${self.props.name}`}</a></Link></div>
      <div className='navbar-item'><button className='button is-warning' onClick={self.onLogout}>Logout</button></div>
    </Fragment>
    : <div className='field is-horizontal navbar-item'>
      <form onSubmit={self.onSubmit}>
        <div className='field-body'>
          <div className='field'>
            <p className='control'>
              <input className='input' type='text' placeholder='Name' ref={(name) => { self.name = name }} />
            </p>
          </div>
          <div className='field'>
            <p className='control'>
              <input className='input' type='password' placeholder='Password' ref={(pw) => { self.pw = pw }} />
            </p>
          </div>
          <div className='field'>
            <div className='control'>
              <button className='button is-info'>
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
)

class Auth extends Component {
  constructor (props) {
    super(props)
    this.state = { error: false }
    this.onSubmit = this.onSubmit.bind(this)
    this.onLogout = this.props.logout
  }

  onSubmit (ev) {
    ev.preventDefault()
    if (!this.name.value) { return }
    this.setState({ error: this.pw.value ? false : 'Missing: password' })
    if (this.pw.value) {
      return this.props.loginAsync(this.name.value)
    }
  }

  render () {
    const oups = this.state.error
      ? <div className='navbar-item has-background-danger'>{this.state.error}</div>
      : null

    return (
      <Fragment>
        {oups}
        <IsLogged self={this} />
      </Fragment>
    )
  }
}

const mapState = (state) => ({
  name: state.auth.name
})

const mapDispatch = ({ auth }) => auth
// TODO
// Logout should update user in volunteers if appropriate (hours left, items, etc.)

export default connect(mapState, mapDispatch)(Auth)
