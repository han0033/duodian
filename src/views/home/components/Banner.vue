<template>
<!-- 轮播图 -->
  <div class="banner">
    <swiper :options="swiperOption" ref="mySwiper" v-if="bannerData.length > 0">
      <!-- slides -->
      <swiper-slide
        v-for="(item, index) in bannerData"
        :key="index"
      >
      <img :src="item.image" alt="">
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
      }
    };
  },
  props: {
    bannerData: Array
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
}
</script>

<style lang='scss' scoped>
.banner {
  width: 100%;
  height: 300px;
  position: relative;
  .swiper-container {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-pagination {
    position: absolute;
    bottom: 0;
  }
}
</style>
