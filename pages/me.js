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
    title = 'Mon profile: ' + props.username
    out = <div className='content'>
      <p>Salut {props.username}.</p>
      <Summary />
      <Droits />
      <p>Volontaire, donateur ou org? ({props.usertype})</p>
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
  usertype: state.auth.type
})

export default withRematch(initStore, mapState)(Me)
