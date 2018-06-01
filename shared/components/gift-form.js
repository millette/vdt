'use strict'

import React, { Component } from 'react'

class GiftForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const title = this.title.value && this.title.value.trim()
    const description = this.description.value && this.description.value.trim()
    const estimate = this.estimate.value && parseFloat(this.estimate.value)
    const category = this.category.value && this.category.value.trim()

    return this.props.save({ username: this.props.username, title, description, estimate, category })
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
            <label className='label'>Estimé (heures)</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <input type='text' ref={(estimate) => { this.estimate = estimate }} />
              </div>
            </div>
          </div>
        </div>
        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Catégorie</label>
          </div>
          <div className='field-body'>
            <div className='field is-narrow'>
              <div className='control'>
                <div className='select is-fullwidth'>
                  <select ref={(category) => { this.category = category }}>
                    <option value=''>---</option>
                    <option>Cat #1</option>
                    <option>Cat #3</option>
                    <option>Cat #7</option>
                  </select>
                </div>
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

export default GiftForm
