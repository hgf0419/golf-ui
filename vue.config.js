const path = require('path');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    open: true,
    port: '6060'
  },
  // 扩展 webpack 配置，
  chainWebpack: config => {
    // @ 默认指向 src 目录,新增一个 ~ 指向 packages
    config.resolve.alias
    .set('~', path.resolve('packages'))


    // 使 packages 加入编译 因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })

  }
}
