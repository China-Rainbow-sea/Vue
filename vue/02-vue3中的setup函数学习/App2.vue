
<template>
 <h2>姓名: {{name}}</h2>
 <h2>年龄: {{age}}</h2>
<!-- <button @click="sayHi">SAY HI</button>-->
 <button @click="sayHi('jack',20,$event)">SAY HI</button>
</template>

<script>
// 导入一个渲染函数
import {h} from 'vue'
  export default {
    name:'App',
   // 如果你把data,methods,computed...还是配置到这里的话，表示你还是使用了vue2的语法规则
   // 如果你使用了 vue3,建议不要在出现 vue2的语法，不建议 vue3+vue2混合使用

   // vue2仍然可以用，但是不建议
/*   data(){
     return{
      name:'jackson'
     }
   }*/

   // 1. setup是vue3当中新增的一个配置项
   // 2. setup 是一个函数
   // 3. 在 setup 函数体当中编写: data,methods,computed,watch,生命周期钩子函数
   setup() {
    console.log(this)
    // 数据
    // 在 setup 函数体当中定义的这个变量，可以看做是之前的 data
    let name = '张三'
    let age = 20


    // 函数
    /* function sayHi() {
     alert('hi vue3!')
     alert(`姓名: ${name},年龄: ${age}` )
     alert(name + ',' + age)
    }
   */

    function sayHi(a, b, e) {
     alert(a + ',' + b)
     alert(e.target.innerText)
/*     alert('hi vue3!')
     alert(`姓名: ${name},年龄: ${age}`)
     alert(name + ',' + age)*/
    }

    // 如果你想在模板语法当中使用name和age
    // 就必须将name和age封装成一个对象，然后作为setup函数的返回值返回即可
    // 当然这个对象当中也可以有函数
    /* return {
     a:name,
     b:age,
     sayHi:sayHi

    }*/
// 两者同名可以省略，其中一个
    return {name, age, sayHi}

    // 可以返回一个渲染函数
    /* return function () {
     // return h('标签名','标签体内容')
     return h('h1','welcome to study vue3!!!')
    }*/

    // 简写
    /*   return () =>h('h2','welcome to study vue3!!!')

   }*/
   }


  }
</script>
