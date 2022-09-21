<template>
  <div class="classify">
    <search-box />
    <tabs
      :hotNav = leftMenu
      tab-name="categoryName"
      class="left-tab"
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
      leftMenu: []
    }
  },
  created () {
    this.fetchcategory()
  },
  methods: {
    async fetchcategory () {
      const res = await this.$api.product.category()
      this.leftMenu = res.data
    }
  }
}
</script>

<style>
.classify {
  height: 100vh;
}
</style>
