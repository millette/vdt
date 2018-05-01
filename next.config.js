'use strict'

module.exports = {
  exportPathMap: (defaultPathMap) => {
    console.log('defaultPathMap:', defaultPathMap)
    delete defaultPathMap['/index']
    defaultPathMap['/'] = { page: '/' }
    return defaultPathMap
  }
}
