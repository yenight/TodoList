<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$router.push({path: '/main'})
  }
}
</script>

<style>
  @import "./assets/css/publicStyle.css";
</style>
