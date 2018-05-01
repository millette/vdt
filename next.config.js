'use strict'

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/orgs': { page: '/orgs' },
    '/gifts': { page: '/gifts' },
    '/volunteers': { page: '/volunteers' }
  })
  /*
  exportPathMap: (defaultPathMap) => {
    console.log('defaultPathMap#1:', defaultPathMap)
    if (!defaultPathMap) {
      defaultPathMap = {}
      console.log('defaultPathMap#2:', defaultPathMap)
    }
    delete defaultPathMap['/real-index']
    defaultPathMap['/index'] = { page: '/real-index' }
    console.log('defaultPathMap#3:', defaultPathMap)
    return defaultPathMap
  }
  */
}
