<template>
  <n-layout>
    <div class="exception-404">
      <div class="view">
        <img src="@img/404.png" />
      </div>
    </div>
  </n-layout>
</template>
<script>
</script>
<style lang="scss">
.exception-404 {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .view {
    height: 70%;
    width: 80%;
    display: flex;
    justify-content: center;
    img {
      height: 100%;
      margin: 0 20px;
      opacity: 0.7;
    }
  }
}
</style>
