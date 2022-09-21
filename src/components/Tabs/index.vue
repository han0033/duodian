<template>
  <div class="tabs">
    <nav ref="nav">
      <a
        href="javascript:;"
        v-for="(item, index) in hotNav"
        :key="index"
        :class="activeIndex == index ? 'active' : '' "
        @click="change(index)"
      >
        {{item.title}}
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  props: {
    hotNav: Array
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    change (index) {
      this.activeIndex = index
      this.$emit('change', index, this.hotNav[index])
    }
  }
}
</script>

<style lang='scss' scoped>
.tabs {
  @include wh(100%, 92px);
  background-color: #fff;
  nav {
    @include wh(auto, 92px);
    @include flex(row, center, space-between);
    a {
      font-size: 28px;
      padding: 0 20px;
      color: #4A4A4A;
      &.active {
        color: #FE3113;
        font-size: 32px;
        font-weight: 600;
      }
    }
  }
}
</style>