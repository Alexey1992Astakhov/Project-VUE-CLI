<template>
  <div id="app">
    <Home1Page/>
    <Blog2Page/>
    <BlogDetails4Page/>
    <Project3Page/>
  </div>
</template>

<script>
import Blog2Page from './pages/Blog2Page.vue';
import Home1Page from './pages/Home1Page.vue';
import BlogDetails4Page from './pages/BlogDetails4Page.vue';
import Project3Page from './pages/Project3Page.vue';
export default {
  name: 'App',
  components: {
    Home1Page,
    Blog2Page,
    BlogDetails4Page,
    Project3Page,
  }
}
</script>

<style lang="scss">
@import "../src/assets/scss/vars.scss";
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
