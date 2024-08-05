const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 保存时，是否进行语法检查，true 表示检查，false 表示不检查，默认值时 true
  lintOnSave:false,

  // 配置入口
/*  pages:{
    index:{
      entry:'src/a.js'
    }
  }*/
})
