'use strict'

// const { EnvironmentPlugin } = require('webpack')

module.exports = {
  webpack: (config, { dev }) => {
  // webpack: (config) => {
    // Perform customizations to webpack config
    console.log('CONFIG', config.plugins)
    // config.plugins.push(new EnvironmentPlugin({ NODE_ENV: dev ? 'development' : 'production' }))
    // NOPE config.plugins.push(new EnvironmentPlugin(['NODE_ENV']))

    // Important: return the modified config
    return config
  }
}
