module.exports = {
  type: 'react-app',
  babel: {
    plugins: ['babel-plugin-styled-components']
  },
  devServer: {
    proxy: {
      '/api/**': {
        target: 'https://api.forismatic.com',
        changeOrigin: true
      }
    }
  }
}
