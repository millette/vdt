'use strict'

const nextBuildId = require('next-build-id')
module.exports = {
  generateBuildId: async () => {
    const fromGit = await nextBuildId({ dir: __dirname })
    return fromGit.id
  }
}
