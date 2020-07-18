<template>
  <div id="weatherThree">
    <div class="now">
      <div class="nowItemLeft">{{temp.windDir}} {{temp.windScale}}级</div>
      <div class="nowItemRight">体感温度：{{temp.feelsLike}}℃</div>
    </div>
    <!-- 当数据请求到之后再渲染，不然会报错 -->
    <ul v-if="daily[0]"> 
      <li v-for="(item,index) in daily" :key="index" class="now">
        <div class="nowItemLeft">
          <!-- <img src="~assets/img/128/100.png" alt=""> -->
          {{item.fxDate.slice(5)}} · {{item.textDay}}
        </div>
        <div class="nowItemRight">{{item.tempMin}}°/{{item.tempMax}}°</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    temp: {
      type: Object,
      default: {}
    },
    daily: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
  #weatherThree {
    font-weight: 600;
  }
  .now {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    margin: 5px 15px;
    width: calc(100vw-30px);
    height: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    /* color: black; */
    font-weight: 500;
    border-radius: 5px;
  }
  .nowItemLeft {
    text-align: left;
    width: 40vw;
  }
  .nowItemRight {
    text-align: right;
    width: 40vw;
  }
  .nowItemLeft img {
    width: 35px;
  }
</style>