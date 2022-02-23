
module.exports = {
  devServer: {
    proxy: {
      '^/api':{
        target:'http://localhost:5000',
        chamgeOrigin: true,
        logLevel:'debug',
        pathRewrite: {'^/api':'/'},
      },
    }
  }
}
