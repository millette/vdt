'use strict'

import React from 'react'
import { connect } from 'react-redux'

const ListOf = (props) => <div>
  <h3>The count is {props.items.length}</h3>
  <p>Got some? {(props.user && props.user.hours) || ''}</p>
  <div className='columns is-multiline'>
    {props.items.map((x, i) => {
      if (props.buy && x.owner) { return '' }
      if (props.own && (x.owner !== props.user.name)) { return '' }
      return <div className='column' key={`${props.type}-${i}`}>
        <div className='box'>
          {i} {x.title}
          <pre>{JSON.stringify(x, null, '  ')}</pre>
          {(props.type === 'gift') && props.buy && (x.estimate <= props.user.hours) ? <button className='button' onClick={props.buy.bind(props, { owner: props.user.name, i, estimate: x.estimate })}>Je le veux!</button> : ''}
        </div>
      </div>
    })}
  </div>
</div>

const mapState = (state) => ({
  user: state.auth
})

export default connect(mapState)(ListOf)
