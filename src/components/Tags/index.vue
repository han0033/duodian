<template>
  <div class="tags">
    <span
      v-for="(item, index) in list"
      :key="index"
    >
      {{item}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    list: Array
  }
}
</script>

<style lang='scss' scoped>
.tags {
  @include flex(row);
  span {
    padding: 2px 10px;
    border-radius: 17px;
    color: #fff;
    background-color: #FE3001;
    line-height: 26px;
    font-size: 20px;
    margin-right: 10px;
  }
}
</style>