1. vue-cli和create-vue两个脚手架
	
	* vue2工程是怎么创建的？
		通过vue-cli脚手架来完成创建的。
	
	* vue-cli脚手架是基于webpack项目构建工具实现的。

	* vue3工程也可以通过vue-cli创建。但目前更加流行的方式不是采用vue-cli来创建。

	* 目前比较流行的方式是：采用另一个脚手架create-vue来完成vue3工程的创建。

	* create-vue这个脚手架是基于vite项目构建工具来实现的。(vite和webpack一样，都是项目构建工具。)

	* vite的特点：服务器启动速度非常快，然后代码修改之后，更新非常快。这是使用vite的最主要原因。

	* vite比webpack性能要好很多。

	* vite是尤雨溪团队开发的。

	* vue2 --> vue-cli --> webpack

	* vue3 --> create-vue --> vite

2. 使用vue-cli来完成vue3工程的创建。

	* 需要确认一下vue-cli的版本：要求 vue-cli 最低版本 4.5.0

	* 如果版本较低，可以升级：npm install -g @vue-cli

	* 切换到指定位置：我这里切换到了D盘的根目录。

	* 创建vue3工程：vue create vue3_pro_with_vuecli

	* cd vue3_pro_with_vuecli

	* npm run serve

3. 认识一下vue3的工程
	
	// 在Vue3当中，不再引入Vue了，引入了一个createApp函数，这个函数可以创建app对象。
	import { createApp } from 'vue'

	// 引入了一个根组件App
	import App from './App.vue'

	// 这行代码表示创建了一个app对象
	// 这个app对象类似于Vue2当中的vm。
	// app和vm的区别是：app更加轻量级。(app上的属性更少一些)
	const app = createApp(App)

	// 将app挂载到指定位置
	app.mount('#app')

	另外要注意的是：
		在Vue3当中<template>标签中可以有多个根标签了。不需要只有一个根标签。

4. 了解vite
	* vite是一个项目构建工具。
	* vite比webpack好在哪里？
		第一：服务器启动速度快。
		第二：更新快。

5. 使用create-vue脚手架来创建vue3工程
	
	* 切换到要创建vue3工程的目录。
		d:

	* npm init vue@latest
		安装create-vue脚手架，同时创建vue3工程。
		如果你已经安装了create-vue脚手架，也不需要担心，还是采用这种方式创建vue3的工程。
		第一次检测到没有安装create-vue脚手架时，会提醒你安装： create-vue@3.6.1

		安装好create-vue脚手架之后，提醒你设置项目的名字。vue3_pro_with_createvue

	* cd vue3_pro_with_createvue

	* npm install

	* npm run dev (不是npm run serve)

6. 使用vite创建的工程和webpack创建的工程有何不同？
	
	* index.html放在了public的外面。没有在public当中了。
		vite以index.html作为入口，不再用main.js作为入口了。
	
	* 对于vite构建工具来说，配置文件是：vite.config.js
		vite.config.js类似于之前webpack当中的：vue.config.js
		也就是说如果配置代理的话，需要在vite.config.js文件中完成配置。
	
	* vite.config.js配置文件的说明在哪里？
		去vite官网找就行了。
	
	* 端口号也不一样了，不是8080了。

	* 内部实现肯定不同了，vite启动快，更新快。

7. 简单回顾一下Object.defineProperty是如何实现响应式处理的？

	这种方式存在什么问题？
		这种方式只能对修改(set)和读取(get)进行拦截。
		所以当给对象新增一个属性，或者删除对象的某个属性时，不会经过set和get，导致无法实现响应式。
		并且通过数组下标去修改数组中的数据，也不会实现响应式处理。
		.....

8. ES6新特性：window.Proxy对象。
	通过Proxy可以创建一个代理对象。
	语法规则：
		let proxyObj = new Proxy(targetObj, {
			get(target, propertyName){
				return target[propertyName]
			},
			set(target, propertyName, value){
				target[propertyName] = value
			},
			deleteProperty(target, propertyName){
				return delete target[propertyName]
			}
		})