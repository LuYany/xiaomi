<template>
 <div class="detail">
     <div>
         <div><div class="iconfont back">&#xe61f;</div></div>
         <swiper :options="swiperOption">
            <swiper-slide v-for="(banner, index) in infos.banner" :key="index">
                <img :src="banner.src" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
     </div>
     <div>
         <img :src="infos.hot" alt="" class="hot">
     </div>
     <div class="asd">
         <div class="title">{{infos.title}}</div>
         <div class="bigContent">{{infos.bigContent}}</div>
         <div class="smallContent">{{infos.smallContent}}</div>
         <div class="price">
             <div class="money">￥ {{infos.money}}</div>
             <div class="noMoney">￥ {{infos.noMoney}}</div>
             <div class="tips">{{infos.tips}}</div>
         </div>
     </div>
     <div style="height:.5rem;background-color: rgb(243, 243, 243);"></div>
     <ul class="qq">
         <li>
             <div class="y">已选</div>
             <div class="yy">小米note 3 6GB 亮黑色x1</div>
             <div class="iconfont yyy">&#xe623;</div>
         </li>
         <li>
             <div>送至</div>
             <div>北京市东城区</div>
             <div class="iconfont">&#xe623;</div>
         </li>
     </ul>
    <div style="height:.5rem;background-color: rgb(243, 243, 243);"></div>
 </div>
</template>

<script>
export default {
 name: '',
 data() {
    return {
            infos:{
                address:[
                    "北京市",
                    "东城区"
                ],
                banner:[
                    {
                        src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e98be403a5f4277adba84acaecb9c76.jpg?bg=6D96C7"
                    },
                    {
                        src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e98be403a5f4277adba84acaecb9c76.jpg?bg=6D96C7"
                    },
                    {
                        src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4ee66087b538923642701afa069f0fb9.jpg?bg=41424E"
                    },
                    {
                        src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e0f474b9d70fea836f25c50e93d46af7.jpg?bg=3E404B"
                    }
                ],
                bigContent:" 【手机品牌日限时特惠：128GB 今早10点限时特价秒杀。6+64GB直降200元，4+64GB直降100元。全系可享小米分期最高6期免息】",
                chouse:"小米Note 3 6GB+64GB 亮黑色 x1",
                code:200,
                hot:"http://i8.mifile.cn/b2c-mimall-media/7f1f2647d4349daa23978fffab7bb4ad.jpg",
                hotLink:"/detail/1001",
                id:1001,
                mit:"本程序由 jon-millent 独自开发，github@ github.com/jon-millent",
                money:2099,
                msg:"请求成功",
                noMoney:2299,
                pBox:[
                    "//i8.mifile.cn/v1/a1/f6b42e48-8af9-c1c1-5df2-eb1973499aae.jpg?w=1080&h=1735&s=192.6",
                    "//i8.mifile.cn/v1/a1/eb3d5e39-000d-bfb9-acce-e346876cfa94.jpg?w=1080&h=1387&s=171.9",
                    "//i8.mifile.cn/v1/a1/5bb89342-dce9-82d4-59c7-a322376fc1a8.jpg?w=1080&h=1735&s=164",
                    "//i8.mifile.cn/v1/a1/8ba93f97-a966-088d-7aa0-21f3a50f08ea.jpg?w=1080&h=1201&s=120.4",
                    "//i8.mifile.cn/v1/a1/1f2ccbc5-8a7c-39ab-9819-5aec14d533b5.jpg?w=1080&h=1445&s=150.1",
                    "//i8.mifile.cn/v1/a1/9356b62d-e15b-a208-72f0-709fe24f6c48.jpg?w=1080&h=996&s=193.1",
                    "//i8.mifile.cn/v1/a1/a5b0856b-888b-dc1b-a35c-2981dd0e35d3.jpg?w=1080&h=1445&s=169",
                    "//i8.mifile.cn/v1/a1/f8e52783-b598-2dfd-7057-52c285515119.jpg?w=1080&h=1735&s=191.4"
                ],
                smallContent:"1600万美颜自拍 / 2倍变焦双摄，四轴光学防抖 / 5.5护眼屏 / 超轻四曲面，7系铝金属边框。",
                title:"小米Note 3  人脸解锁",
                tips:"直降200元"
            },
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination"
                },
                loop: true,
                // autoplay: {
                //     delay: 1500,
                //     stopOnLastSlide: false,
                //     disableOnInteraction: false /* 触摸滑动后是否继续轮播 */
                // },
                speed: 800 //滑动速度
            }
    }
 },
 created(){
     
 },
 methods: {
     
 }
}
</script>

<style scoped>
    .detail{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 3.15rem;
    }
/* 轮播 */
    .detail >>> .swiper-container{
        min-height: 3.2rem;
    }
    .detail >>> .swiper-container img{
        width: 100%;
    }
    .detail >>> .swiper-pagination-bullet{
        width: .6rem;
        height: .6rem;
        background-color: #ccc;
        opacity: .2;
    }
    .detail >>> .swiper-pagination-bullet-active{
        background-color: #fff;
        opacity: 1;
    }
    /* 返回按钮 */
    .back{
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        font-size: 1.6rem;
        background-color: rgba(34, 35, 43, 0.6);
        border-radius: 50%;
        color: #fff;
        position: absolute;
        z-index: 100;
        top: .6rem;
        left: .6rem;
    }
    /*  */
    .hot{
        width: 100%;
    }
    /*  */
    .asd{
        padding: .4rem .8rem;
    }
    .title{
        color: #333;
        font-size: 1.2rem;
        line-height: 2rem;
    }
    .bigContent{
        color: rgb(255, 74, 0);
        font-size: .8rem;
        line-height: 1.2rem;
    }
    .smallContent{
        color: rgb(117, 117, 117);
        font-size: .7rem;
    }
    .price{
        display: flex;
        line-height: 1.2rem;
    }
    .money{
        color: #ff6700;
        font-size: 1.5rem;
    }
    .noMoney{
        margin-left: .4rem;
        color: rgba(0, 0, 0, 0.54);
        text-decoration: line-through;
    }
    .tips{
        background: #ff6700;
        margin-left: 0.5rem;
        color: #fff;
        font-size: .8rem;
    }
    /*  */
    ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .qq{
        font-size: .8rem;
    }
    .qq li{
        display: flex;
        padding: .6rem .8rem;
        border-bottom: 1px solid #D9D9D9;
    }
    .y{
        color: rgba(0, 0, 0, 0.54);
        padding-right: .8rem;
    }
    .yy{

    }
    .yyy{
        right: .8rem;
        position: absolute;
        color: rgba(0, 0, 0, 0.54);
    }
</style>
