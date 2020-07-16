<template>
  <div id="allCity">
    <div>所有城市</div>
    <div class="wrapper">
      <!-- 祖孙组件通信 $attrs $listeners -->
      <all-city-item v-for="(value,key,index) in city" :key="index" :city="value" v-on="$listeners">
        <div class="firstChar">{{key}}</div>
      </all-city-item>
    </div>
  </div>
</template>

<script>
import AllCityItem from './AllCityItem'

export default {
  components: {
    AllCityItem
  },
  props: {
    city: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
  #allCity {
    margin: 8px 15px 0
  }
  .firstChar {
    margin-left: 5px;
  }
</style>