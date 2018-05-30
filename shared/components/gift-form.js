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
      .catch((err) => {
        console.error(err.toString())
        this.title.focus()
        this.title.style.background = 'pink'
      })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input required type='text' ref={(title) => { this.title = title }} />
        </label>
        <br />
        <label>
          Description:
          <textarea rows='5' cols='40' ref={(description) => { this.description = description }} />
        </label>
        <br />
        <label>
          Estimé (heures):
          <input type='text' ref={(estimate) => { this.estimate = estimate }} />
        </label>
        <br />
        <label>
          Catégorie:
          <select ref={(category) => { this.category = category }}>
            <option value=''>---</option>
            <option>Cat #1</option>
            <option>Cat #3</option>
            <option>Cat #7</option>
          </select>
        </label>
        <br />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default GiftForm
