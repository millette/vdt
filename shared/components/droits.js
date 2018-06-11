'use strict'

import React from 'react'
import Link from 'next/link'

const Droits = () => <div className='columns'>
  <div className='column'>
    <div className='content'>
      <h2>Les donateurs</h2>
      <p>Les donateurs peuvent:</p>
      <ul>
        <li><Link prefetch href='/admin/gifts'><a>Faire un don</a></Link> ✔</li>
      </ul>
    </div>
  </div>
  <div className='column'>
    <div className='content'>
      <h2>Les orgs</h2>
      <p>Les orgs peuvent:</p>
      <ul>
        <li><Link prefetch href='/admin/gifts'><a>Faire un don</a></Link> ✔</li>
        <li><Link prefetch href='/hours'><a>Marquer les heures des volontaires</a></Link> ✔</li>
        <li>Confirmer les heures des volontaires</li>
      </ul>
    </div>
  </div>
  <div className='column'>
    <div className='content'>
      <h2>Les volontaires</h2>
      <p>Les volontaires peuvent:</p>
      <ul>
        <li><Link prefetch href='/admin/gifts'><a>Faire un don</a></Link> ✔</li>
        <li><Link prefetch href='/gifts'><a>Échanger des heures confirmées contre un <i>gift</i></a></Link> ✔</li>
        <li>Marquer leurs heures par org</li>
      </ul>
    </div>
  </div>
</div>

export default Droits
