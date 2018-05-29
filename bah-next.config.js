'use strict'

// const { EnvironmentPlugin } = require('webpack')

module.exports = {
  webpack: (config, options) => {
  // webpack: (config) => {
    // Perform customizations to webpack config
    console.log('CONFIG plugins', config.plugins)
    console.log('CONFIG', JSON.stringify(config, null, '  '))
    console.log('options', options)
    // config.plugins.push(new EnvironmentPlugin({ NODE_ENV: dev ? 'development' : 'production' }))
    // NOPE config.plugins.push(new EnvironmentPlugin(['NODE_ENV']))

    // Important: return the modified config
    return config
  }
}
