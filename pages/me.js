'use strict'

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Droits from '../shared/components/droits'
import Summary from '../shared/components/summary'
import ListOf from '../shared/components/list-of'

const KnownUser = (props) => {
  if (props.usertype) {
    if (typeof props.userpos === 'number') {
      if (props.userhours) { return <p>Vous êtes le {props.usertype} #{props.userpos} / {props.userhours}.</p> }
      return <p>Vous êtes le {props.usertype} #{props.userpos}.</p>
    }
    return <p>Vous êtes un {props.usertype} inconnu.</p>
  }

  return <p>
    Quel type d’utilisateur?
    <span className='field is-grouped'>
      <span className='control'>
        <button onClick={props.type.bind(props, 'donor')} className='button'>Donateur</button>
      </span>
      <span className='control'>
        <button onClick={props.type.bind(props, 'org')} className='button'>Org</button>
      </span>
      <span className='control'>
        <button onClick={props.type.bind(props, 'volunteer')} className='button'>Volontaire</button>
      </span>
    </span>
  </p>
}

const Me = (props) => {
  let out
  let title
  if (props.username) {
    title = 'Mon profile: ' + props.username
    out = <div className='content'>
      <p>Salut {props.username}.</p>
      <Summary />
      <Droits />
      <KnownUser type={props.type} usertype={props.usertype} userpos={props.userpos} userhours={props.userhours} />
      {props.usertype === 'volunteer' ? <ListOf own items={props.gift} type='gift' /> : '' }
    </div>
  } else {
    title = 'Please login'
    out = <div className='content'>
      <p>Vous devez d’abord vous connecter.</p>
    </div>
  }

  return (
    <Fragment>
      <Header title={title} />
      <section className='section'>
        <div className='container'>
          {out}
        </div>
      </section>
    </Fragment>
  )
}

const mapState = state => ({
  gift: state.gift,
  username: state.auth.name,
  usertype: state.auth.type,
  userpos: state.auth.pos,
  userhours: state.auth.hours,
  useritems: state.auth.items
})

const mapDispatch = ({ auth }) => auth

export default withRematch(initStore, mapState, mapDispatch)(Me)
