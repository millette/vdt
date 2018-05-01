'use strict'

module.exports = {
  exportPathMap: (defaultPathMap) => {
    delete defaultPathMap['/_error']
    if (defaultPathMap['/index']) {
      delete defaultPathMap['/index']
      defaultPathMap['/'] = { page: '/' }
    }
    return defaultPathMap
  }
}
