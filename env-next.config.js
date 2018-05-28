'use strict'

const { EnvironmentPlugin } = require('webpack')

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    config.plugins.push = [
      new EnvironmentPlugin({ NODE_ENV: dev ? 'development' : 'production' })
    ]

    // Important: return the modified config
    return config
  }
}
