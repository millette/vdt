'use strict'

import React, { Fragment } from 'react'

const BuildLink = ({ buildId }) => {
  if (buildId === '-') { return <i>dev</i> }
  const buildUrl = 'https://github.com/millette/vdt/tree/' + buildId

  return <Fragment>
    commit: <a target='_blank' href={buildUrl}>{buildId}</a>
  </Fragment>
}

export default BuildLink
