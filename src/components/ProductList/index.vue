<template>
  <div class="product-list">
    <dl
      v-for="(item, index) in list"
      :key="index"
    >
      <dt><img :src="item.img" alt=""></dt>
      <dd>
        <div class="top">
          <h3>{{item.name}}</h3>
          <p>累计{{87654234 | numberFormat}}份 / 已拼{{765123 | numberFormat}}份</p>
          <Tags :list = "['自营', '团购']" />
        </div>
        <div class="bottom">
          <div class="price">
            <p>￥<span>{{item.price | formatPrice}}</span></p>
            <span>￥{{item.price | formatPrice}}</span>
          </div>
          <a href="javascript:;">
            <img src="@/assets/images/car.png" alt="">
          </a>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'product-list',
  props: {
    list: Array
  },
  filters: {
    formatPrice (price) {
      return price / 100
    },
    numberFormat (value) {
      let unit = ''
      var k = 10000
      var sizes = ['', '万', '亿', '万亿']
      var i
      if (value < k) {
        i = value
        value = i
      } else {
        i = Math.floor(Math.log(value) / Math.log(k))
        value = ((value / Math.pow(k, i))).toFixed(2)
        unit = sizes[i]
      }
      return value + unit
    }
  }
}
</script>

<style lang='scss' scoped>
.product-list {
  dl {
    @include flex(row);
    @include border-1px(bottom, $color-border-line);
    padding: 30px;
    font-size: 24px;
    background-color: #fff;
    dt {
      @include wh(240px, 240px);
      margin-right: 30px;
      img {
        @include wh(100%, 100%);
      }
    }
    dd {
      @include flex(column, flex-start, space-between);
      flex: 1;
      height: 240px;
      .top {
        h3 {
          @include ellipsis(2);
          font-size: 32px;
          color: #111;
          line-height: 40px;
        }
        p {
          color: #999;
          font-size: 24px;
          line-height: 30px;
        }
      }
      .bottom {
        width: 100%;
        @include flex(row, center, space-between);
        .price {
          @include flex(row, flex-end);
          p {
            font-size: 24px;
            color: #FE3113;
            margin-right: 10px;
            span {
              font-size: 36px;
              font-weight: 500;
            }
          }
          > span {
            font-size: 20px;
            color: #C0C0C0;
            text-decoration: line-through;
          }
        }
        a {
          @include wh(66px, 63px);
          background-color: #FE3113;
          border-radius: 100%;
          img {
            @include wh(28px, 28px);
            margin: 15px auto 0;
          }
        }
      }
    }
  }
}
</style>
