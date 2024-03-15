<template>
  <div>
    <HeaderComponent/>
    <HomePageBanner/>
    <HomePageProject/>
    <HomePageCounter/>
    <HomePageArticles/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import HomePageBanner from '../components/componentsPages/homePage/HomePageBanner.vue'
import HomePageProject from '../components/componentsPages/homePage/HomePageProject.vue'
import HomePageCounter from '../components/componentsPages/homePage/HomePageCounter.vue'
import HomePageArticles from '../components/componentsPages/homePage/HomePageArticles.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'Home1Page',

  components: {
    HeaderComponent,
    HomePageBanner,
    HomePageProject,
    HomePageCounter,
    HomePageArticles,
    FooterComponent
  },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>