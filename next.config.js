'use strict'

const nextBuildId = require('next-build-id')
const withProgressBar = require('next-progressbar')

module.exports = withProgressBar({
  generateBuildId: async () => {
    const fromGit = await nextBuildId({ dir: __dirname })
    return fromGit.id
  }
})
