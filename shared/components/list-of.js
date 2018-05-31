'use strict'

import React from 'react'

const ListOf = (props) => <div>
  <h3>The count is {props.items.length}</h3>
  <div className='columns is-multiline'>
    {props.items.map((x, i) => <div className='column' key={`${props.type}-${i}`}>
      <div className='box'>
        {i} {x.title}
        <pre>{JSON.stringify(x, null, '  ')}</pre>
      </div>
    </div>)}
  </div>
</div>

export default ListOf
