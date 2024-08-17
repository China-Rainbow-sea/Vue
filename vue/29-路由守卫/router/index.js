import VueRouter from "vue-router"
import HeBei from '../pages/HeBei'
import HeNan from '../pages/HeNan'
import City from '../pages/City'

const router = new VueRouter({
    mode:'history' ,  // history 模式，有 # （默认就是）

    // mode:'hash', // hash 模式，没有 hash
    routes: [
        /* {
             path : '/hebei',
             component : HeBei,
             children : [
                 // 子路由（路由对象）
                 {
                     path : 'city',
                     component : City
                 }
             ]
         },*/
        {
            path: '/henan',
            component: HeNan
        },
        {
            path: '/hebei',
            component: HeBei,
            children: [
                {
                    // 给路由命名
                    name: 'shi',
                    path: 'sjz',
                    component: City,
                    props: true,
                    // 自定义的一个布尔类型的属性: true
                    // 在 meta 属性当中自定义布尔类型的属性
                    // 带有这个属性的，并且值是 true，表示该路由是需要鉴权的
                    meta : {
                        isAuth : true,
                        title : '石家庄'
                    },

                    // 1. 这个局部路由守卫之path守卫，代码写到哪里？写到 route 对象中
                    // 2. beforeEnter 本身就是一个函数，参数上没有回调函数了。
                    // 3.对于 beforeEnter 来说，参数仍然有三个: to from next
                    // 4. beforeEnter 什么时候被调用：进入"shi" 这个路由前被调用
                    beforeEnter(to,from,next){
                        let loginName = "admin2"
                        if (loginName === 'admin') {
                            // 放行
                            next()
                        } else {
                            alert('对不起，您没有权限')
                        }
                    }

                    // 注意：没有 afterEnter 这一说
                },
                {
                    // 给路由命名
                    name: 'han',
                    path: 'hd',
                    component: City,
                    props: true,
                    // 自定义的一个布尔类型的属性: true
                    // 在 meta 属性当中自定义布尔类型的属性
                    // 带有这个属性的，并且值是 true，表示该路由是需要鉴权的
                    meta:
                        {
                            isAuth: true,
                            title: '邯郸'
                        }

                },
            ]
        },
        {
            name: 'nan',
            path: '/henan',
            component: HeNan
        }
    ]
})

// 全局前置路由守卫
// 1.代码写到哪里？在创建好 router 之后，以及暴露router 之前
// 2. beforeEach中的callback什么时候调用呢？每一次在切换任意路由组件之后,都会被调用
// 3. callback可以是普通函数，也可以是箭头函数
// 4. callback 函数有三个参数，to form next
// 5. from 参数: from 是一个路由对象，表示从哪里来(从哪个路由切过来的)，起点
// 6. to 参数: to 也是一个路由对象，表示到哪儿去，重点
// 7. next 参数: 这是一个函数，调用这个函数之后，表示放行，可以继续向下走
// 8. 给路由对象添加自定义属性的话，需要在路由对象的meta(路由元)中定义
// router.beforeEach(callback)

router.beforeEach((to, from, next) => {
    /*    console.log(666)
        console.log(to);
        console.log(from);
        console.log(next);*/

    // 假设当前登录的用户是 :
    let loginName = "admin"
    // 目前来说，只有 shi 和 han 这两个路由需要鉴权
    // 如果当前项目中需要鉴权的路由比较多，这里的代码会比较繁琐，比较冗余
    /*if(to.name === 'shi' || to.name === 'han') {
        if(loginName === 'admin'){
            // 放行
            next()
        } else {
            alert('对不起，您没有权限')
        }
    }else {
        // 放行
        next()
    }*/

    // 通过自定义鉴权，在meta 属性中自定义布尔类型
    if (to.meta.isAuth) {
        if (loginName === 'admin') {
            // 放行
            next()
        } else {
            alert('对不起，您没有权限')
        }
    } else{
        document.title = to.meta.title
        next()
    }

})



// 全局后置路由守卫
// 1.代码写到哪里？在创建router 对象之后，暴露 router 对象之前
// 2. afterEach中的回调函数什么时候执行？初始化的时候执行一次，以后每一次切换完任意一个路由组件之后被调用
// 3. 这个回调函数有两个参数: to ,from
// 4. 这个回调函数没有next 参数，因为没有必要了
router.afterEach((to,from)=>{
    document.title = to.meta.title || '欢迎使用本系统'
    document.title = false || '欢迎使用本系统'
})

export default router