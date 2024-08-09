const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 保存时，是否进行语法检查，true 表示检查，false 表示不检查，默认值时 true
  lintOnSave:false,

  // 配置入口
  pages:{
    index:{
      entry:'src/main.js'
    }
  },
  /*devServer:{
    // 注意：这个地址就写到端口号位置即可，后面具体的路径不需要写
    // proxy:'http://localhost:400'
    proxy:'https://www.baidu.com/'
  }*/

  devServer:{
    proxy:{
      // 凡是请求路径以 /api 开始的，都走这个代理
      '/api':{
        target:'http://locahost:8080',
        pathRewrite:{'^/api':''},
        ws:true,  // 开启对websocket 的支持(websocket是一种实时推送技术)，默认不写就是true
        changOrigin:true // 默认值也是true，表示改变起源。(让对方服务器不知道我们的真正的起源到底是哪里)
      },
      // 可以写多个
      '/abc':{
        target:'http://locahost:8081',
        pathRewrite:{'^/abc':''},
        ws:true,  // 开启对websocket 的支持(websocket是一种实时推送技术)，默认不写就是true
        changOrigin:true // 默认值也是true，表示改变起源。(让对方服务器不知道我们的真正的起源到底是哪里)
      }
    }
  }
})
