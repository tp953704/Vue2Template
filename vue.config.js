module.exports = {
  publicPath: './', // 基本路徑,打包时加上.
  outputDir: `./dist/${process.env.outputDir}`, // 輸出文件目錄
  lintOnSave: false, // eslint-loader 是否在保存的時候檢查
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 1024 }))
  },
  configureWebpack: (config) => {
    if (process.env.VUE_APP_MODE === 'production') {
      // 為生產環境配置
      config.mode = 'production'
    } else {
      // 為開發環境配置
      config.mode = 'development'
    }
  },
  devServer: {
    open: true, // 自動開瀏覽器
    host: 'localhost', // 設置主機地址
    port: 8080, // 設置默認埠號
    https: false,
    overlay: {
      warnings: true,
      errors: true
    }, // 錯誤彈出
    proxy: {
      // 配置跨域
      '/api': {
        target: 'https://randomuser.me', // 後台api
        changOrigin: true, // 允許跨域
        pathRewrite: { // 看後台是否有，决定是否重寫
          // ["^" + process.env.VUE_APP_API_URL]: '' // 請求的時候使用這個api就可以
          '^/randomuser': '/'
        }
      }
    }
  },
  css: {
    extract: true,
    loaderOptions: {
      scss: {
        prependData: `
                @import "~@/assets/helpers/_var.scss";
                @import "~@/assets/helpers/_mixins.scss";
                `
      }
    }
  }
}
