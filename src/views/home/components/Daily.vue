<template>
  <div class="daily">
    <div class="title">
      <h3>每日必购</h3>
      <p>大家都在买</p>
    </div>
    <div class="list">
      <a href="javascript:;">
        <img src="@/assets/images/fresh.png" alt="">
      </a>
      <a href="javascript:;">
        <img src="@/assets/images/food.png" alt="">
      </a>
      <a href="javascript:;">
        <img src="@/assets/images/store.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'daily'
}
</script>

<style lang='scss' scoped>
.daily {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  .title {
    padding: 38px 0 28px;
    @include flex(row, flex-end);
    h3 {
      font-size: 36px;
      margin:0 20px;
    }
    p {
      font-size: 24px;
    }
  }
  .list {
    display: flex;
    a {
      flex: 1;
      width: scale(100% / 3);
      height: 288px;
      img {
        width: 100%;
        height: 288px;
      }
    }
  }
}
</style>