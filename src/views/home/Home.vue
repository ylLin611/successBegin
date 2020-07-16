<template>
  <div id="home">
    <nav-bar class="navbar"><div slot="center">瞧瞧天气</div></nav-bar>
    <nav-bar class="navbar">
      <div slot="left" class="leftNav" @click="changeCity">{{location}}<triangle></triangle></div>
      <div slot="right" class="rightNav">更新时间：{{updateTime}}</div>
    </nav-bar>
  </div>
</template>

<script>
// 导入获取天气接口的方法
import {getCity,getWeatherNow,getWeatherSeven,getWeather24} from 'network/home'
// 进入时浏览器定位
// import {location} from 'common/getlocation'
//导入导航栏
import NavBar from 'common/navbar/NavBar'
import Triangle from 'common/triangle/Triangle'

export default {
  name: "Home",
  components: {
    NavBar,
    Triangle
  },
  data(){
    return {
      location: '北京',
      now: { //和风天气返回数据
        obsTime: '',	//实况观测时间
        temp: '',	//实况温度，默认单位：摄氏度	21
        feelsLike: '',	//实况体感温度，默认单位：摄氏度	23
        icon: '',	//当前天气状况和图标的代码，图标可通过天气状况和图标下载	100
        text: '',	//实况天气状况的文字描述，包括阴晴雨雪等天气状态的描述	晴
        wind360: '',	//实况风向360角度	305
        windDir: '',	//实况风向	西北
        windScale: '',	//实况风力等级	3
        windSpeed: '',	//实况风速，公里/小时	15
        humidity: '',	//实况相对湿度，百分比数值	40
        precip: '',	//实况降水量，默认单位：毫米	1.2
        pressure: '',	//实况大气压强，默认单位：百帕	1020
        vis: '',	//实况能见度，默认单位：公里	10
        cloud: '',	//实况云量，百分比数值	23
        dew: '',	//实况露点温度s
      }
    }
  },
  computed: {
    updateTime: function(){
      return this.now.obsTime.slice(11,16)
    }
  },
  created(){
    this.location = this.$route.params.city||'北京'
    this.getWeather(this.location)
  },
  methods: {
    //获取实时天气
    getWeather(location){
      //获取城市编码
      getCity(location).then(res => {
        //获取天气
        getWeatherNow(res.data.location[0].id).then(res => {
          this.now = res.data.now
        })
      })
    },
    //修改城市
    changeCity(){
      this.$router.push({path: '/city'})
    }
  }
}
</script>

<style scoped>
  #home {
    background-image: url(https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500);
    background-size: 120%,100%;
    background-repeat: no-repeat;

    height: 100vh;
  }

  .navbar {
    font-size: 16px;
  }

  .leftNav {
    font-size: 20px;
    font-weight: 700;
    width: 220px;
  }

  .rightNav {
    font-size: 12px;
  }
</style>