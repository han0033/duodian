<template>
  <div class="classify">
    <search-box />
    <filter-bar
      :sideBar = side_bar
      @change="navChange"
    />
  </div>
</template>

<script>
import SearchBox from './components/SearchBox.vue';
export default {
  components: { SearchBox },
  name: 'classify',
  data () {
    return {
      side_bar: [],
    }
  },
  created () {
    this.initClassifyData()
  },
  methods: {
    initClassifyData () {
      this.$api.home.base().then((res) => {
        this.side_bar = res.data.side_bar
      })
    },
    navChange (index, item) {
      // this.fetchProductParams.classid = item.id
      // this.fetchProductParams.page = 1
      // const top = this.$refs.content.offsetTop
      // const scrollTop = document.querySelector('html').scrollTop
      // if (scrollTop > top) {
      //   window.scrollTo(0, top)
      // }
    }
  }
}
</script>

<style>
.classify {
  height: 200vh;
}
</style>
