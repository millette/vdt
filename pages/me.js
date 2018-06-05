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
      <pre>{Object.keys(props).join(', ')}</pre>
      <pre>{JSON.stringify(props, null, '  ')}</pre>
      <Summary />
      <Droits />
      <p>Volontaire, donateur ou org? ({props.usertype} / #{props.userpos})</p>
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
  usertype: state.auth.type || 'N/A',
  userpos: state.auth.pos
})

export default withRematch(initStore, mapState)(Me)
