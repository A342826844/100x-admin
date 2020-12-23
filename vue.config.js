module.exports = {
  lintOnSave: true,
  devServer: {
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://192.168.10.157:8081',
        /* 允许跨域 */
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  productionSourceMap: false,
  publicPath: './',
  // css: {
  //     extract: true
  // }
};
