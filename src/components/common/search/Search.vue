<template>
  <div id='search'>
    <div class="wrapper">
      <div class="inner">
        <!-- <image class='icon' src='' /> -->
        <input :placeholder='textPlaceHolder' maxlength='20' v-model="inputText" @input="inputFinish"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textPlaceHolder: {
      type: String,
      default: '请输入信息'
    }
  },
  data(){
    return {
      inputText: '',
      timer: null
    }
  },
  methods: {
    inputFinish(){
      //加个简单的事件防抖
      //判断定时器里面有没有东东，要是有清空
      if(this.timer != null){
        clearTimeout(this.timer)
      }
      //定义timer
      this.timer = setTimeout(()=>{
        this.$emit('inputFinish',this.inputText)
      },200)
    }
  }
}
</script>

<style scoped>
  #search {
    background: #fff;
    padding: 15px;
    position: relative;
    height: 64px;
    box-sizing: border-box;
  }
  .wrapper{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .inner {
    background: #f4f6f9;
    font-size: 15px;
    padding: 8px 0px 8px 10px;
    box-sizing: border-box;
    border-radius: 4px;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .inner input {
    border: none;
    background: #f4f6f9;
    font-size: 15px;
    height: 19px;
    line-height: 19px;
    width: 100%;
    box-sizing: border-box;
  }
  /* .icon {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  } */
</style>