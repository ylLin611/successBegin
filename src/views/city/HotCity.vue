<template>
  <div id="hotCity">
    <div>热门城市</div>
    <div class="wrapper">
      <hot-city-item v-for="(item,index) in hotCity" :key="index" :location="item" @click.native="returnCity(item)"></hot-city-item>
    </div>
  </div>
</template>

<script>
import HotCityItem from './HotCityItem'

export default {
  components: {
    HotCityItem
  },
  // 练下组件通信
  props: {
    hotCity: {
      type: Array,
      default: []
    }
  },
  methods: {
    returnCity(location){
      this.$emit('returnCity',location)
    }
  }
}
</script>

<style scoped>
  #hotCity {
    margin: 0 15px;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    width: calc(100vw-30px);
    margin-top: 5px;
    justify-content:space-around;
  }
</style>