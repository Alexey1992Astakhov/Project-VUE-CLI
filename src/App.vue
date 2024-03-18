<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="scss">
@import "../src/assets/scss/vars.scss";
$widthSite: 1200px;
$familyTitle: "DM Serif Display";
$familyText: "Jost";
$font-400: 400;
$font-500: 500;
$font-600: 600;

* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}

.center {
  padding-left: calc(50% - 1200px / 2);
  padding-right: calc(50% - 1200px / 2);
}
</style>
