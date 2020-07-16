<template>
  <div id="city">
    <nav-bar><div slot="center">选择城市</div></nav-bar>
    <!-- 搜索框 直接传入数据不要v-bind绑定 -->
    <search textPlaceHolder="请输入要查询的城市" @inputFinish="inputCity"></search>
    <!-- 热门城市 -->
    <hot-city :hotCity="hotCity" @returnCity="returnHome"></hot-city>
    <!-- 所有城市展示 -->
    <all-city :city="city" @returnCity="returnHome"></all-city>
  </div>
</template>

<script>
import Search from 'common/search/Search'
import NavBar from 'common/navbar/NavBar'
import cityData from 'network/staticData'
import HotCity from './HotCity'
import AllCity from './AllCIty'

export default {
  components: {
    Search,
    NavBar,
    HotCity,
    AllCity
  },
  data(){
    return{
      city: {},
      // 要展示的城市数组，为修改数据格式使用
      cities: [],
      hotCity: ["北京市","上海市","大连市"],
    }
  },
  created(){
    this.cities = cityData.cities
    this.getCity()
  },
  methods: {
    getCity(){
      this.city = {}
      //按照字母顺序排序
      this.cities = this.cities.sort((a,b)=>{
        if(a.letter > b.letter){
          return 1
        }
        if(a.letter < b.letter){
          return -1
        }
        return 0
      })
      //转换为{'A':{},'B':{}...}格式数据
      for(let i = 0,len = this.cities.length;i<len;i++){
        let letter = this.cities[i].letter
        if(!this.city[letter]){
          this.city[letter] = []
        }
        this.city[letter].push(this.cities[i])
      }
    },
    //返回Home页
    returnHome(city){
      this.$router.push({
        name: 'home',
        params: {
          city: city.charAt(city.length- 1) == '市'? city.slice(0,-1):city
        }
      })
    },
    //监听搜索城市 输入信息
    inputCity(data){
      let cities = cityData.cities
      this.cities = []
      //遍历所有的城市，存储包含输入信息的城市信息
      for (let i in cities) {
        if (cities[i].name.indexOf(data)!=-1) {
          this.cities.push(cities[i])
        }
      }
      this.getCity()
    }
  }
}
</script>

<style scoped>
  #city {
    color: black;
  }
</style>