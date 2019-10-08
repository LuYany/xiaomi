<template>
 <div class="">
     <ul class="ss">
         <li v-for="(arr,index) in arrs" :key="index" class="ww" :class="currentIndex == index ? 'active' : ''" @click="change(index)">
             <div class="iconfont icon" v-html="arr.icon"></div>
             <div class="name">{{arr.name}}</div>
         </li>
     </ul>
 </div>
</template>

<script>
import helloworld from './HelloWorld'
import classification from './classification/classification'
import shopcart from './shopcart/shopcart'
import mine from './mine/mine'

export default {
 name: 'foot',
 data() {
    return {
        arrs:[{name:'首页',icon:'&#xe61a;'},{name:'分类',icon:'&#xe609;'},{name:'购物车',icon:'&#xe643;'},{name:'我的',icon:'&#xe673;'}],
        currentIndex:0,
        coms:['/','/classification/classification','/shopcart/shopcart','/mine/mine']
    }
 },
 components:{helloworld,classification,shopcart,mine},
 methods: {
     change(index){
         this.currentIndex = index;
         this.$router.push(this.coms[index]);
     }
 },
}
</script>

<style scoped>
.bell {
  font-family: iconfont;
  font-size: 40px;
}
ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
}
.ss{
    display: flex;
    justify-content: space-around;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    padding: .3rem 0;
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.ww{
    text-align: center;
    color: #999;
}
.name{
    font-size: .7rem;
}
.icon{
    font-size: 1.3rem;
}
.active{
    color: #ff6700;
}
</style>
