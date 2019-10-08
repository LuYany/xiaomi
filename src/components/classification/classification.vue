<template>
  <div class>
    <div class="top">
      <div class="iconfont left" @click="back">&#xe61f;</div>
      <div>分类</div>
      <div class="iconfont sou">&#xe601;</div>
    </div>
    <div class="as">
      <!-- 左侧 -->
      <div class="tab" ref="menuWrapper">
        <ul>
          <li
            v-for="(item,index) in dataItem"
            :key="index"
            :class="{'active': currentIndex === index}"
            @click="selectMenu(index,$event)"
          >{{item.name}}</li>
        </ul>
      </div>
        
      <!-- 右侧 -->
      <div class="goods" ref="foodWrapper">
        <ul>
          <li v-for="(item,index) in dataItem" :key="index" class="food-list-hook">
            <div class="name">—— {{item.name}} ——</div>
            <ul class="children">
              <li v-for="(children,index) in item.children" :key="index">
                <div class="img">
                  <img :src="children.src" alt />
                </div>
                <div>{{children.name}}</div>
              </li>
              <div class="clear"></div>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  data() {
    return {
      dataItem: [
        {
          name: "新品",
          children: [
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            }
          ]
        },
        {
          name: "手机",
          children: [
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            }
          ]
        },
        {
          name: "电视",
          children: [
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            }
          ]
        },
        {
          name: "电脑",
          children: [
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            }
          ]
        },
        {
          name: "家电",
          children: [
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            }
          ]
        },
        {
          name: "路由",
          children: [
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            }
          ]
        },
        {
          name: "智能",
          children: [
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            }
          ]
        },
        {
          name: "电源",
          children: [
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            }
          ]
        },
        {
          name: "耳机",
          children: [
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            }
          ]
        },
        {
          name: "音箱",
          children: [
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            }
          ]
        },
        {
          name: "礼品",
          children: [
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            }
          ]
        },
        {
          name: "生活",
          children: [
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            }
          ]
        },
        {
          name: "米粉卡",
          children: [
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            }
          ]
        },
        {
          name: "零售店",
          children: [
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            },
            {
              name: "小米5s",
              src: "http://qiniu.verydog.cn//show.liluo.cc/img_0505.png",
              link: "/detail/1019"
            }
          ]
        }
      ],
      // currentIndex:0,
      offset: [],
      listHeight: [], //获取每一个li的高度
      scrollY: 0 // 获取实时滚动位置
    };
  },
  created() {
    this.$nextTick(() => { 
        this._initScroll();
        this._calculateHeight();
    })
  },
  computed: {
    currentIndex() {
        for(let i=0;i< this.listHeight.length;i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i+1];
        //   console.log('y:' + this.scrollY);
        //   console.log(height1 + '....' + height2);
          if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
            return i;
          }
        }
        return 0;
      }
  },
  methods: {
    //初始化better-scroll
    _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper,{
          click:true
        });
        this.foodsScroll = new BScroll(this.$refs.foodWrapper,{
          probeType : 3
        });
        this.foodsScroll.on('scroll',(pos) => {
          this.scrollY =Math.abs(Math.round(pos.y));
        })
        // console.log(this.scrollY)
      },
    _calculateHeight() {
        let foodList = this.$refs.foodWrapper.getElementsByClassName("food-list-hook");
        let height = 0;
        this.listHeight.push(height);
        for(let i=0;i<foodList.length;i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
        console.log(this.listHeight )
      },
    selectMenu(index,event) {
        if(!event._constructed) {
          return ;
        }
        let foodList = this.$refs.foodWrapper.getElementsByClassName("food-list-hook");
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el,800);
        // console.log(index,el)
      },
      back(){
        this.$router.push('/');
      }
  }
};
</script>

<style scoped>
/*  */
.top {
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-between;
  padding: 1.13rem 1rem;
  font-size: 0.85rem;
  color: #666;
  line-height: 1.3rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
}
.left {
  font-size: 1.7rem;
}
.sou {
  font-size: 1.3rem;
}
.as {
  top: 3.6rem;
  bottom: 3rem;
  position: absolute;
  width: 100%;
  overflow: hidden;
}
/* 左侧 */
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.tab {
  border-right: 1px solid #efefef;
  width: 4.56rem;
  text-align: center;
  position: absolute;
  overflow-y: auto;
  left: 0;
  top: 0;
  bottom: 0;
}
.tab li {
  font-size: 0.9rem;
  padding: 0.98rem 0;
}
.active {
  color: #fb7d34;
  transform: scale(1.2);
}
/* 右侧 */
.clear {
  clear: both;
}
.goods {
  left: 4.56rem;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
}
.name {
  text-align: center;
  font-size: 0.9rem;
  padding: 0.98rem 0;
}
.children li {
  width: 33.3%;
  float: left;
  text-align: center;
  font-size: 0.8rem;
  color: #757575;
  margin: 0.3rem 0;
}
.img {
  width: 50%;
  margin: auto;
}
.img img {
  width: 100%;
}
</style>
