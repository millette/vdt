'use strict'

import React from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Droits from '../shared/components/droits'
import Summary from '../shared/components/summary'

const Me = (props) => {
  let out
  let title
  if (props.username) {
    let knownUser

    if (props.usertype) {
      if (typeof props.userpos === 'number') {
        // fully known
        knownUser = <p>Vous êtes le {props.usertype} #{props.userpos}.</p>
      } else {
        // known type
        knownUser = <p>Vous êtes un {props.usertype} inconnu.</p>
      }
    } else {
      // who that?
      knownUser = <p>
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
    title = 'Mon profile: ' + props.username
    out = <div className='content'>
      <p>Salut {props.username}.</p>
      <Summary />
      <Droits />
      {knownUser}
    </div>
  } else {
    title = 'Please login'
    out = <div className='content'>
      <p>Vous devez d’abord vous connecter.</p>
    </div>
  }

  return (
    <section className='section'>
      <div className='container'>
        <Header title={title} />
        {out}
      </div>
    </section>
  )
}

const mapState = state => ({
  username: state.auth.name,
  usertype: state.auth.type,
  userpos: state.auth.pos
})

const mapDispatch = ({ auth }) => auth

export default withRematch(initStore, mapState, mapDispatch)(Me)
