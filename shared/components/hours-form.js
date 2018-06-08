'use strict'

import React, { Component } from 'react'
import { autocompleteVolunteer } from '../utils/utils'

class HoursForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      volunteer: '',
      hours: '',
      description: '',
      hoursError: false,
      volunteerError: false,
      added: '',
      found: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeTitle = this.handleChange.bind(this, 'title')
    this.handleChangeDescription = this.handleChange.bind(this, 'description')
    this.handleChangeHours = this.handleChange.bind(this, 'hours')
    this.handleChangeVolunteer = this.handleChangeVolunteer.bind(this)
    this.handleBlurHours = this.handleBlurHours.bind(this)
  }

  handleBlurHours (event) {
    this.setState({ hours: parseFloat(event.target.value.replace(/,/, '.')) || '' })
  }

  handleChangeVolunteer (event) {
    this.setState(autocompleteVolunteer(this.state.volunteer.length, event.target.value, this.props.volunteer))
  }

  handleChange (it, event) {
    const obj = { added: '' }
    obj[it] = event.target.value
    this.setState(obj)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.handleSubmit({
      hours: parseFloat(this.state.hours),
      title: this.state.title,
      volunteer: this.state.volunteer,
      description: this.state.description
    })
      .then(() => this.setState({
        title: '',
        volunteer: '',
        hours: '',
        description: '',
        hoursError: false,
        volunteerError: false,
        added: `Ajouté ${this.state.hours} heures à ${this.state.volunteer}.`,
        found: ''
      }))
      .catch((err) => {
        if (err.field === 'volunteer') {
          this.setState({ volunteerError: true })
        } else if (err.field === 'hours') {
          this.setState({ hoursError: true })
        } else {
          console.error(err.toString(), err.field)
        }
      })
  }

  render () {
    return <form onSubmit={this.handleSubmit}>
      <p>Hello {this.props.user.name}.</p>
      {this.state.added ? <article className='message'>
        <div className='message-header'>
          <p>Attention</p>
        </div>
        <div className='message-body'>
          {this.state.added}
        </div>
      </article> : ''}
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Title</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <input className='input' type='text' value={this.state.title} onChange={this.handleChangeTitle} />
            </div>
          </div>
        </div>
      </div>
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Volontaire</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <input className={`input${this.state.volunteerError ? ' is-danger' : ''}`} required type='text' value={this.state.volunteer} onChange={this.handleChangeVolunteer} />
            </div>
            {this.state.found}
          </div>
        </div>
      </div>
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Heures</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <input className={`input${this.state.hoursError ? ' is-danger' : ''}`} required type='text' value={this.state.hours} onChange={this.handleChangeHours} onBlur={this.handleBlurHours} />
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
              <textarea className='textarea' value={this.state.description} onChange={this.handleChangeDescription} />
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
  }
}

export default HoursForm
