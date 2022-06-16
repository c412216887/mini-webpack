const { resolve } = require('path')

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/index.ts'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolveLoader: {
    modules: ['node_modules', resolve(__dirname, 'loaders')]
  },
  module: {
    rules: [

    ]
  },
  plugins: [

  ]
}