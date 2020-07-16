import axios from 'axios'

// 获取和风天气城市代码信息
export function getCity(location,range) {
  return axios({
    url: 'https://geoapi.heweather.net/v2/city/lookup',
    params: {
      key: '5264cb1244b346f5abf30590bb671a46',
      location, //城市名称 、 经纬度 例：116.4,39.1
      range //搜索范围 例： cn  默认全球
      //mode //精准 或 模糊
    }
  })
}

//获取实况天气
export function getWeatherNow(location) {
  return axios({
    url: 'https://devapi.heweather.net/v7/weather/now',
    params: {
      key: '5264cb1244b346f5abf30590bb671a46',
      location//城市名称 、 经纬度 例：116.4,39.1
    }
  })
}

//获取七天天气预测
export function getWeatherSeven(location) {
  return axios({
    url: 'https://devapi.heweather.net/v7/weather/7d',
    params: {
      key: '5264cb1244b346f5abf30590bb671a46',
      location//城市名称 、 经纬度 例：116.4,39.1
    }
  })
}

//获取24小时天气预测
export function getWeather24(location) {
  return axios({
    url: 'https://devapi.heweather.net/v7/weather/24h',
    params: {
      key: '5264cb1244b346f5abf30590bb671a46',
      location//城市名称 、 经纬度 例：116.4,39.1
    }
  })
}