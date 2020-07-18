<template>
  <div id="weatherNow">
    <div class="temp">{{temp.temp}}</div>
    <div class="unit">℃</div>
    <div class="tempText">{{temp.text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    temp: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
  #weatherNow {
    width: 100vw;
    text-align: center;
    position: relative;
    margin: 60px 0;
  }
  .temp {
    font-size: 100px;
    display: inline-block;
  }
  .unit {
    display: inline-block;
    position: absolute;
    top: 18px;
  }
  .tempText {
    font-size: 22px;
  }
</style>