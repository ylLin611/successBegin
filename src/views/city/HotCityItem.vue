<template>
  <div class="item">{{location}}</div>
</template>

<script>
export default {
  props: {
    location: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .item{
    width: 80px; 
    border-radius: 3px;
    background-color: #F4F6F9;
    text-align: center;
    line-height: 30px;
  }
</style>