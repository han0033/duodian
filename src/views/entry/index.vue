<template>
  <div class="page">
    <router-view></router-view>
    <nav>
      <router-link
        v-for="(item, index) in tabs"
        :key="index"
        :to="item.id"
        active-class="active"
      >
        <img :src="item.icon" alt="" class="icon">
        <img :src="item.select_icon" alt="" class="select_icon">
        <span>{{item.text}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'entry',
  data () {
    return {
      tabs: [
        {
          id: '/home',
          icon: require('@/assets/images/home.png'),
          select_icon: require('@/assets/images/home-select.png'),
          text: '首页'
        },
        {
          id: '/classify',
          icon: require('@/assets/images/classify.png'),
          select_icon: require('@/assets/images/classify-select.png'),
          text: '分类'
        },
        {
          id: '/car',
          icon: require('@/assets/images/car.png'),
          select_icon: require('@/assets/images/car-select.png'),
          text: '购物车'
        },
        {
          id: '/mine',
          icon: require('@/assets/images/mine.png'),
          select_icon: require('@/assets/images/mine-select.png'),
          text: '我的'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background-color: $background;
}
nav {
  @include flex(row, center, center);
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  background-color: $white;
  box-shadow: 0 0 8px 3px #ddd;
  a {
    flex: 1;
    color: $color-grey;
    @include flex(column, center, center);
    padding-top: 14px;
    padding-bottom: 6px;
    .icon {
      @include wh(52px, 52px)
    }
    .select_icon {
      display: none;
    }
    span {
      font-size: 22px;
      margin-top: 4px;
    }
    &.active {
      color: $color-warning;
      .icon {
        display: none;
      }
      .select_icon {
        display: block;
        @include wh(52px, 52px)
      }
    }
  }
}
</style>