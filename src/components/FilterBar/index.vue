<template>
  <div class="filter-bar">
    <nav ref="nav">
      <a
        href="javascript:;"
        v-for="(item, index) in sideBar"
        :key="index"
        :class="activeIndex == index ? 'active' : '' "
        @click="change(index)"
      >
        {{item.text}}
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'filter-bar',
  props: {
    sideBar: Array
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    change (index) {
      this.activeIndex = index
      this.$emit('change', index, this.sideBar[index])
    }
  }
}
</script>

<style lang='scss' scoped>
.filter-bar {
  width: 180px;
  height: 100%;
  position: fixed;
  top: 98px;
  left: 0;
  background-color: #fff;
  box-sizing: border-box;
  nav {
    @include flex(column);
    a {
      height: 120px;
      line-height: 120px;
      font-size: 22px;
      padding: 0 30px;
      color: #4A4A4A;
      &.active {
        color: #FE3113;
        font-size: 28px;
        font-weight: 600;
      }
    }
  }
}
</style>