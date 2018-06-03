'use strict'

import React, { Component } from 'react'

class VolunteerForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const title = this.title.value && this.title.value.trim()
    const description = this.description.value && this.description.value.trim()
    const heures = this.heures.value && parseFloat(this.heures.value)

    return this.props.save({ username: this.props.username, title, description, heures })
      .then(() => {
        this.title.form.reset()
        this.title.style.background = 'transparent'
      })
      .catch(() => {
        this.title.focus()
        this.title.style.background = 'pink'
      })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Title</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <input className='input' required type='text' ref={(title) => { this.title = title }} />
              </div>
            </div>
          </div>
        </div>
        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Description</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <textarea className='textarea' ref={(description) => { this.description = description }} />
              </div>
            </div>
          </div>
        </div>
        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Heures initiales</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <input type='text' ref={(heures) => { this.heures = heures }} />
              </div>
            </div>
          </div>
        </div>
        <div className='field is-horizontal'>
          <div className='field-label' />
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <input className='button is-primary' type='submit' value='Submit' />
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default VolunteerForm
