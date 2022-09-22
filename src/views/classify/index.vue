<template>
  <div class="classify">
    <search-box />
    <div class="main">
      <tabs
        :hotNav = leftMenu
        tab-name="categoryName"
        layout="column"
        class="left-tab"
        ref="tabbar"
        @change="leftNavChange"
      />
      <div class="right-main">
        <tabs
          :hotNav = rightMenu
          tab-name="categoryName"
          class="right-tab"
          ref="tabbar"
          @change="rightNavChange"
        />
        <product-list class="product-list" :list = product />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox.vue';
import scroll from '@/mixins/scroll.js'
export default {
  components: { SearchBox },
  name: 'classify',
  mixins: [scroll],
  data () {
    return {
      leftMenu: [],
      rightMenu: [],
      product: [],
      fetchProductParams: {
        page: 1,
        page_size: 10,
        category_id: 1
      }
    }
  },
  watch: {
    fetchProductParams: {
      handler: 'fetchProductList',
      deep: true,
      immediate: true
    }
  },
  created () {
    this.fetchcategory()
  },
  scrollBottom () {
    this.fetchProductParams.page += 1
  },
  methods: {
    async fetchcategory () {
      const res = await this.$api.product.category()
      this.leftMenu = res.data
      this.rightMenu = [{
        categoryId: res.data[0].categoryId,
        categoryName: '全部'
      }].concat(res.data[0].children)
    },
    async fetchProductList () {
      const res = await this.$api.product.list(this.fetchProductParams)
      if (this.fetchProductParams.page == 1) {
        this.product = res.data
      } else {
        this.product = this.product.concat(res.data)
      }
    },
    leftNavChange (index, item) {
      this.fetchProductParams.category_id = item.categoryId
      this.fetchProductParams.page = 1
      this.rightMenu = [{
        categoryId: item.categoryId,
        categoryName: '全部'
      }].concat(item.children)
    },
    rightNavChange (index, item) {
      this.fetchProductParams.category_id = item.categoryId
      this.fetchProductParams.page = 1
    }
  }
}
</script>

<style lang='scss' scoped>
.classify {
  width: 100%;
  height: 100%;
  .main {
    min-height: 469px;
    overflow: hidden;
    height: auto;
    padding-bottom: 72px;
    position: relative;
    top: 98px;
    left: 0;
    @include flex(row)
  }
  .right-main {
    width: 578px;
    height: 100%;
    display: inline-block;
    .right-tab {
      width: 100%;
      height: 55px;
      position: fixed;
      top: 98px;
      z-index: 2;
      ::v-deep nav {
        width: auto;
        overflow-x: scroll;
        line-height: 55px;
        @include flex(row, center, flex-start);
        // box-shadow: 0 0 0px 1px #ddd;
        a {
          flex-shrink: 0;
          font-size: 24px;
          color: #999;
          &.active {
            color: #000;
            font-size: 28px;
            font-weight: 600;
          }
        }
        &::-webkit-scrollbar { 
          width: 0 !important 
        }
      }
    }
    ::v-deep .product-list {
      padding-top: 55px;
      dl {
        width: 578px;
        box-sizing: border-box;
        @include flex(row);
        dt {
          @include wh(186px, 187px);
          img {
            @include wh(100%, 100%);
          }
        }
        dd {
          @include flex(column, flex-start, space-between);
          flex: 1;
          height: 187px;
          .top {
            width: 300px;
            h3 {
              width: 300px;
              @include ellipsis(1);
              font-size: 28px;
              color: #111;
              line-height: 40px;
            }
            p {
              color: #999;
              font-size: 18px;
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
  }
}
</style>
