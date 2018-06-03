'use strict'

import React from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

const Me = (props) => {
  let out
  let title
  if (props.username) {
    title = 'Mon profile: ' + props.username
    out = <p>Salut {props.username}.</p>
  } else {
    title = 'Please login'
    out = <p>Vous devez d’abord vous connecter.</p>
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
  username: state.auth.name
})

export default withRematch(initStore, mapState)(Me)
