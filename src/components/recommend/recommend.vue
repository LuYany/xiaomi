<template>
  <div class="recommend">
      <!-- 轮播 -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(list, index) in bannerList" :key="index">
        <img :src="list.src" @click="toDetail" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!--  -->
    <ul class="a">
        <li v-for="(arr,index) in arrs" :key="index" class="aa">
            <img :src="arr.src" alt="">
        </li>
    </ul>
    <!--  -->
    <ul class="b">
        <li v-for="(shopList,index) in shopLists" :key="index" class="bb" :class="index%2==0 ? 'margr' : ''" @click="toDetail">
            <div><img :src="shopList.src" alt=""></div>
            <div class="title">{{shopList.title}}</div>
            <div class="con">{{shopList.con}}</div>
            <div class="money">￥{{shopList.money}}</div>
        </li>
        <li class="clear"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false /* 触摸滑动后是否继续轮播 */
        },
        speed: 800 //滑动速度
      },
      bannerList : [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/01.png',
            href: '/detail/1001'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/02.jpg',
            href: '/detail/1002'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/03.jpg',
            href: '/detail/1003'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/04.jpg',
            href: '/detail/1004'
          }
        ],
      arrs:[
          {src:'http://qiniu.verydog.cn//show.liluo.cc/2018011022292984819.png',name:'米粉卡'},
          {src:'http://qiniu.verydog.cn//show.liluo.cc/2018011022292372054.png',name:'以旧换新'},
          {src:'http://qiniu.verydog.cn//show.liluo.cc/2018011022291629252.png',name:'新品发布'},
          {src:'http://qiniu.verydog.cn//show.liluo.cc/2018011022290460400.png',name:'物流查询'}
      ],
      shopLists : [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          }
        ]
    };
  },
  methods: {
    toDetail(){
      this.$router.push('/detail/detail');
    }
  },
};
</script>

<style scoped>
    .recommend{
        margin-top: 5.5rem;
    }
/* 轮播 */
    .recommend >>> .swiper-container{
        min-height: 3.2rem;
    }
    .recommend >>> .swiper-container img{
        width: 100%;
    }
    .recommend >>> .swiper-pagination-bullet{
        width: .6rem;
        height: .6rem;
        background-color: #ccc;
    }
    .recommend >>> .swiper-pagination-white .swiper-pagination-bullet-active{
        background-color: #fff;
    }
    /*  */
    ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .a{
        display: flex;
    }
    .aa{
        width: 25%;
    }
    .aa img{
        width: 100%;
    }
    /*  */
    .clear{
        clear: both;
    }
    .bb{
        width: 49.5%;
        float: left;
        margin-bottom: .35rem;
    }
    .bb img{
        width: 100%;
    }
    .margr{
        margin-right: 1%;
    }
    .title{
        font-size: .8rem;
        line-height: 1.3rem;
    }
    .con{
        color: rgba(0, 0, 0, 0.54);
        font-size: .7rem;
        line-height: 1.2rem;
    }
    .money{
        color: #ea625b;
        font-size: .9rem;
        line-height: 1.3rem;
    }
</style>
