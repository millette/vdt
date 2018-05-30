'use strict'

import React from 'react'

const ListOf = (props) => <div>
  <h3>The count is {props.items.length}</h3>
  <ol>
    {props.items.map((x, i) => <li key={`${props.type}-${i}`}>
      {i} {x.title}
      <br />
      {JSON.stringify(x)}
    </li>)}
  </ol>
</div>

export default ListOf
