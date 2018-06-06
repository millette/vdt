'use strict'

import React from 'react'
import { connect } from 'react-redux'

const ListOf = (props) => {
  let cnt = 0
  const allItems = <div className='columns is-multiline'>
    {props.items.map((x, i) => {
      if (props.buy && x.owner) { return '' }
      if (props.own && (x.owner !== props.user.name)) { return '' }
      ++cnt
      return <div className='column' key={`${props.type}-${i}`}>
        <div className='box'>
          {i} {x.title}
          <pre>{JSON.stringify(x, null, '  ')}</pre>
          {(props.type === 'gift') && props.buy && (x.estimate <= props.user.hours) ? <button className='button' onClick={props.buy.bind(props, { owner: props.user.name, i, estimate: x.estimate })}>Je le veux!</button> : ''}
        </div>
      </div>
    })}
  </div>

  return <div>
    <h3 className='title is-3'>The count is {cnt}</h3>
    <p>Got some? {(props.user && props.user.hours) || ''}</p>
    {allItems}
  </div>
}

const mapState = (state) => ({
  user: state.auth
})

export default connect(mapState)(ListOf)
