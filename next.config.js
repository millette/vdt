'use strict'

module.exports = {
  exportPathMap: (defaultPathMap) => ({
    '/': { page: '/' },
    '/gifts': { page: '/gifts' },
    '/orgs': { page: '/orgs' },
    '/volunteers': { page: '/volunteers' }
  })
}
