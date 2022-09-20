<template>
  <div class="header-bar">
    <a href="javascript:;">
      <i class="iconfont icon-dizhiguanli"></i>
      <span>送至：北京八维研修学院</span>
      <i class="iconfont icon-jiantouyou"></i>
    </a>
    <a href="javascript:;">
      <i class="iconfont icon-sousuo"></i>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.header-bar {
  @include wh(100%, 98px);
  @include flex(row, center, space-between);
  background-color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
  a {
    color: $color-grey;
    font-size: 24px;
    i {
      font-size: 28px;
    }
    span {
      padding: 0 14px 0 10px;
    }
  }
}
</style>