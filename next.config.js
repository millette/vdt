'use strict'

module.exports = {
  exportPathMap: (defaultPathMap) => {
    delete defaultPathMap['/index']
    defaultPathMap['/'] = { page: '/' }
    return defaultPathMap
  }
}
