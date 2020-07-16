<template>
  <div id="allCityItem">
    <slot></slot>
    <!-- 事件冒泡 -->
    <ul @click="returnCity">
      <li class="cityItem" v-for="(item,index) in city" :key="index">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Array,
      default: []
    }
  },
  data(){
    return {
      cityName: ''
    }
  },
  methods: {
    returnCity(e){
      let name = e.target.innerText
      this.$emit('returnCity',name)
    }
  }
}
</script>

<style scoped>
  .cityItem {
    margin: 5px 10px;
    background-color: #F4F6F9;
    height: 40px;
    line-height: 40px;
    padding-left:20px;
    border-radius: 5px;
  }
</style>