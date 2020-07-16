<template>
  <div id="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  // 导航栏相关
}
</script>

<style scoped>
  #navbar {
    position: relative;
    z-index: 10;

    display: flex;

    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .left {
    width: 100px;
    text-align: left;
    padding-left: 5px;
  }

  .center {
    flex: 1;
  }

  .right {
    width: 100px;
    text-align: right;
    padding-right: 5px;
  }
</style>