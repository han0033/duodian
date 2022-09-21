<template>
  <div class="mall-nav">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide
        v-for="(item, index) in Math.ceil(mallNav.length / 10)"
        :key="index"
      >
        <div class="conts">
          <a
            href="javascript:;"
            v-for="(mallItem, mallIndex) in mallNav.slice(index * 1, index * 1 + 10)"
            :key="mallIndex"
          >
            <img :src="mallItem.imageUrl" alt="">
            <span>{{mallItem.title}}</span>
          </a>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        }
      },
    };
  },
  props: {
    mallNav: Array
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
}
</script>

<style lang='scss' scoped>
.mall-nav {
  width: 100%;
  height: 300px;
  position: relative;
  background-color: #fff;
  .swiper-container {
    width: 100%;
    height: 100%;    
  }
  .swiper-pagination {
    position: absolute;
    bottom: 0;
  }
  .conts {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: 156px 156px;
    a {
      @include flex(column, center, center);
      img {
        @include wh(100px, 100px);
      }
      span {
        font-size: 14px;
        margin-top: 6px;
      }
    }
  }
}
</style>
