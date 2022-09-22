<template>
  <div class="tabs" :class="{
      [layout]: true
    }">
    <nav ref="nav">
      <a
        href="javascript:;"
        v-for="(item, index) in hotNav"
        :key="index"
        :class="activeIndex == index ? 'active' : '' "
        @click="change(index)"
      >
        {{item[tabName]}}
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  props: {
    hotNav: Array,
    tabName: {
      type: String,
      default: 'title'
    },
    layout: {
      type: String,
      default: 'row'
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  watch: {
    hotNav () {
      this.activeIndex = 0
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
.column {
  @include wh(172px, auto);
  display: inline-block;
  background-color: #f8f8f8;
  nav {
    @include wh(172px, 100%);
    @include flex(column, center);
    overflow-y: scroll;
    box-shadow: 2px 2px 0 0 #ddd;
    position: fixed;
    left: 0;
    top: 98px;
    a {
      width: 172px;
      display: block;
      text-align: center;
      font-size: 24px;
      color: #999;
      padding: 40px 0;
      &.active {
        color: #000;
        font-size: 28px;
        font-weight: 600;
        background-color: #fff;
      }
    }
    &::-webkit-scrollbar { 
      width: 0 !important 
    }
  }
}
</style>