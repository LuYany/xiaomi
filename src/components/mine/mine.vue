<template>
 <div class="mine">
     <div class="top">
         <div class="iconfont qq">&#xe610;</div>
         <div class="ww">登录 / 注册</div>
     </div>

     <div class="rr white">
         <div class="ding">我的订单</div>
         <div class="iconfont more">&#xe623;</div>
     </div>

     <ul class="white marb hh">
         <li>
             <div class="iconfont h">&#xe647;</div>
             <div class="hhh">代付款</div>
         </li>
          <li>
             <div class="iconfont h">&#xe602;</div>
             <div class="hhh">待收货</div>
         </li>
          <li>
             <div class="iconfont h">&#xe63f;</div>
             <div class="hhh">退换修</div>
         </li>
     </ul>

     <ul class="white marb">
         <li class="oo">
             <div class="iconfont ee">&#xe7a7;</div>
             <div class="r">
                 <div class="ii">会员福利</div>
                <div class="iconfont more">&#xe623;</div>
             </div>
         </li>
         <li class="oo">
             <div class="iconfont ee">&#xe681;</div>
             <div class="r">
                 <div class="ii">我的优惠</div>
                <div class="iconfont more">&#xe623;</div>
             </div>
         </li>
     </ul>

     <ul class="white marb">
         <li class="oo">
             <div class="iconfont ee">&#xe60e;</div>
             <div class="r">
                 <div class="ii">服务中心</div>
                <div class="iconfont more">&#xe623;</div>
             </div>
         </li>
         <li class="oo">
             <div class="iconfont ee">&#xe61c;</div>
             <div class="r">
                 <div class="ii">小米之家</div>
                <div class="iconfont more">&#xe623;</div>
             </div>
         </li>
     </ul>

     <ul class="white">
         <li class="oo">
             <div class="iconfont ee">&#xe603;</div>
             <div class="r">
                 <div class="ii">设置</div>
                <div class="iconfont more">&#xe623;</div>
             </div>
         </li>
     </ul>
 </div>
</template>

<script>
export default {
 name: '',
 data() {
 return {}
 },
 components: {}
}
</script>

<style scoped>
ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
}
.mine{
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #F5F5F5;
}
.top{
    background: #f37d0f;
    color: #fff;
    height: 5rem;
    line-height: 5rem;
    display: flex;
}
.ding{
    font-size: .9rem;
}
.hh{
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 1.3rem 0;
}
.h{
    font-size: 1.2rem;
}
.hhh{
    font-size: .75rem;
}
.qq{
    font-size: 2.7rem;
    margin: 0 .4rem 0 1rem;
}
.ww{
    font-size: .8rem;
}
.white{
    background-color: #fff;
}
.rr{
    border-bottom: 1px solid #D9D9D9;
    color: rgba(0, 0, 0, 0.87);
    font-size: 1rem;
    height: 2.8rem;
    line-height: 2.8rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    /* right: 0;
    position: absolute;
    left: 0; */
}
.r{
    border-bottom: 1px solid #D9D9D9;
    color: rgba(0, 0, 0, 0.87);
    font-size: 1rem;
    height: 2.8rem;
    line-height: 2.8rem;
    display: flex;
    justify-content: space-between;
    padding-right: 1rem;
}
.more{
    color: #777;
}
.oo{
    /* display: flex; */
    height: 2.8rem;
    line-height: 2.8rem;
}
.ee{
    float: left;
    margin-left: 1rem;
    margin-right: .5rem;
}
.ii{
    font-size: .75rem;
}
.marb{
    margin-bottom: .6rem;
}
</style>
