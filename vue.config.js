const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://petplann.infinityfreeapp.com/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        secure: false
      }
    }
  }
})
