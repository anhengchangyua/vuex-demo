<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created: () => {
      this.$store.dispatch({type: "loadComments"})
    }
  }
</script>


<style>
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
</style>

