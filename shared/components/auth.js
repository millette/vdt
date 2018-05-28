'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

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
      this.props.login(this.name.value)
    }
  }

  render () {
    const oups = this.state.error
      ? <p>{this.state.error}</p>
      : null

    const isLogged = this.props.name
      ? <p>Hello {this.props.name}. <button type='button' onClick={this.onLogout}>Logout</button></p>
      : <form onSubmit={this.onSubmit}>
        <label>
          Nom <input type='text' ref={(name) => { this.name = name }} />
        </label>
        <br />
        <label>
          Password <input type='password' ref={(pw) => { this.pw = pw }} />
        </label>
        <br />
        <button>Login</button>
      </form>

    return (
      <div>
        <h2>Auth</h2>
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

export default connect(mapState, mapDispatch)(Auth)
