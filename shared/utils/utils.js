'use strict'

import React from 'react'

const beginsWith = (vols, prefix) => vols
  .map((x) => x.title.toLowerCase())
  .filter((x) => x.indexOf(prefix.toLowerCase()) === 0)

const sharedStart = (theSet) => {
  if (!theSet.length) { return }
  const A = theSet.sort()
  const a1 = A[0]
  const a2 = A[A.length - 1]
  const L = a1.length
  let i = 0
  while ((i < L) && (a1.charAt(i) === a2.charAt(i))) { ++i }
  return a1.slice(0, i)
}

export const autocompleteVolunteer = (len, value, vol) => {
  const volunteer = (!(len > value.length) && sharedStart(beginsWith(vol, value))) || value
  const idx = vol.map((x) => x.title.toLowerCase()).indexOf(volunteer.toLowerCase())
  return {
    found: volunteer
      ? (idx === -1
        ? <p className='help is-danger'>Volontaire introuvable</p>
        : <p className='help is-success'>Volontaire trouvé</p>)
      : '',
    volunteer,
    added: ''
  }
}
