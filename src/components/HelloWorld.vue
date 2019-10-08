<template>
  <div class="hello">
    <div class="top">
      <!-- 搜索 -->
      <div class="header">
        <div class="logo iconfont">&#xe832;</div>
        <div class="sou">
          <!-- <img src="" alt=""> -->
          <span class="iconfont">&#xe601;</span>
          <input type="text" placeholder="搜索商品名称" readonly />
        </div>
        <div class="me iconfont">&#xe673;</div>
      </div>
      <!-- tab选择 -->
      <div class="nav">
        <ul class="tab">
          <li v-for="(nav,index) in navList" :key="index" class="item" :class="currentIndex == index ? 'active' : ''" @click="changeTab(index)">{{nav.name}}</li>
        </ul>
      </div>
    </div>

    <!--  -->
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>  

    <!-- <foot></foot> -->
  </div>
</template>

<script>
import recommend from './recommend/recommend'
import art from './art/Art'
import box from './box/Box'
import computer from './computer/computer'
import fullScreen from './fullScren/FullScreen'
import near from './near/Near'
import phone from './phone/phone'
import tv from './tv/TV'
import intelligence from './intelligence/intelligence'
import foot from './footer'
export default {
  name: "HelloWorld",
  data() {
    return {
      navList: [{name: "推荐" },{name: "手机"},{name: "智能"},{name: "电视"},{name: "电脑"},{name: "全面屏"},{name: "生活周边"},{name: "盒子"},{name: "艺术"}],
      currentIndex:0,
      components:['recommend','phone','intelligence','tv','computer','fullScreen','near','box','art']
    };
  },
  components:{recommend,phone,intelligence,tv,computer,fullScreen,near,box,art,foot},
  methods: {
    changeTab(index){
      this.currentIndex = index;
    }
  },
  computed:{
    componentId(){
      return this.components[this.currentIndex];
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.top{
    background-color: #f2f2f2;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 100;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
}
/* 顶部搜索 */
.header {
  display: flex;
  height: 1.8rem;
  line-height: 1.8rem;
  padding: .6rem 0;
}
.logo,
.me {
  width: 15%;
  text-align: center;
  font-size: 1.6rem;
}
.logo{
  color: #ff6b00;
}
.me{
  color: #727272;
}
.sou {
  width: 70%;
  background-color: #fff;
  border-radius: 4px;
}
.sou input {
  border: none;
}
/* tab选项 */
ul {
  list-style-type: none;
  padding: 0;
}
.nav{
  overflow-x: auto;
}
.tab{
    width: auto;
    white-space: nowrap;
    display: flex;
    height: 2.5rem;
    line-height: 2.5rem;
}
.item{
  color: #7c7c7c;
  font-size: .8rem;
  margin: 0 .7rem;
}
.active{
    color: #ed5b00;
    border-bottom: .1rem solid #ed5b00;
}
</style>
