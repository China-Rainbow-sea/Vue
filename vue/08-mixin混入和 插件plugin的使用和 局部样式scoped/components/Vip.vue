<template>
    <div>
        <h1>{{msg}}</h1>
        <h3>姓名: {{name}}</h3>
        <h3>年龄: {{age}}</h3>
        <button @click="printInfo">打印会员信息</button>
        <button @click="a">用户a</button>
    </div>
</template>


<script>
    import {mix3, mixl} from "../mixin";
    import {mix2} from "../mixin";

    export default {
        name:'User',
        methods:{
            a(){
                console.log("vip a...")
            }
        },
        data() {
            return{
                msg:'会员信息',
                name:'李华',
                age:18
            }
        },
       /* methods:{
            printInfo(){
                console.log(this.name,',',this.age)
            }
        }*/

        mixins:[mixl,mix2,mix3],

    }
</script>