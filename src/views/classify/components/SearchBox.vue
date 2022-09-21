<template>
  <div class="search-box">
    <div class="search">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="搜索校园超市商品111">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.search-box {
  @include wh(100%, 98px);
  background-color: #fff;
  padding: 17px 26px 17px 30px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  .search {
    @include wh(100%, 100%);
    position: relative;
    background-color: #F6F6F6;
    border-radius: 32px;
    i {
      @include wh(22px, 22px);
      position: absolute;
      left: 30px;
      top: 21px;
    }
    input {
      position: absolute;
      top: 14px;
      left: 78px;
      outline: none;
      border: 0;
      background-color: #F6F6F6;
    }
  }
}
</style>