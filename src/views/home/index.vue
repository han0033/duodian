<template>
  <div class="home">
    <header-bar />
    <Banner :bannerData = banner />
    <mall-nav :mallNav = mall />
    <daily />
    <div ref="content">
      <tabs
        :hotNav = hot
        @change="navChange"
        class="tab"
      />
      <product-list :list = product />
    </div>
  </div>
</template>

<script>
// import jsonp from '@/utils/jsonp.js'
import HeaderBar from './components/HeaderBar.vue'
import Banner from './components/Banner.vue'
import MallNav from './components/MallNav.vue'
import Daily from './components/Daily.vue'
import scroll from '@/mixins/scroll.js'
export default {
  components: { HeaderBar, Banner, MallNav, Daily },
  name: 'home',
  mixins: [scroll],
  data () {
    return {
      banner: [],
      mall: [],
      hot: [],
      product: [],
      fetchProductParams: {
        page: 1,
        page_size: 10,
        classid: 1
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
    // jsonp('http://localhost:7001/api/home').then((res) => {
    //   console.log(res)
    // })
    this.initHomeData()
    // this.fetchProductList()
  },
  scrollBottom () {
    this.fetchProductParams.page += 1
  },
  methods: {
    initHomeData () {
      this.$api.home.base().then((res) => {
        this.banner = res.data.banner
        this.mall = res.data.mall_nav
        this.hot = res.data.hot_nav
      })
    },
    async fetchProductList () {
      const res = await this.$api.product.list(this.fetchProductParams)
      if (this.fetchProductParams.page == 1) {
        this.product = res.data.data
      } else {
        this.product = this.product.concat(res.data.data)
      }
    },
    navChange (index, item) {
      this.fetchProductParams.classid = item.id
      this.fetchProductParams.page = 1
      const top = this.$refs.content.offsetTop
      const scrollTop = document.querySelector('html').scrollTop
      if (scrollTop > top) {
        window.scrollTo(0, top)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>
