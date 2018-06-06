'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

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
      ? <p>{this.state.error}</p>
      : null

    const isLogged = this.props.name
      ? <p>Hello <Link prefetch href='/me'><a>{this.props.name}</a></Link>. <button className='button' type='button' onClick={this.onLogout}>Logout</button></p>
      : <form onSubmit={this.onSubmit}>
        <div className='field is-horizontal'>
          <div className='field-body'>
            <div className='field'>
              <p className='control'>
                <input className='input' type='text' placeholder='Name' ref={(name) => { this.name = name }} />
              </p>
            </div>
            <div className='field'>
              <p className='control'>
                <input className='input' type='password' placeholder='Password' ref={(pw) => { this.pw = pw }} />
              </p>
            </div>

            <div className='field'>
              <div className='control'>
                <button className='button is-primary'>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

    return (
      <div>
        {oups}
        {isLogged}
      </div>
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
