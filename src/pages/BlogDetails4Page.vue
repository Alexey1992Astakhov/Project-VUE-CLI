<template>
  <div>
    <HeaderComponent/>
    <BlogDetailsPageBanner/>
    <BlogDetailsPageArticles/>
    <FooterComponent/>    
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BlogDetailsPageArticles from '@/components/componentsPages/blogDetailsPage/BlogDetailsPageArticles.vue';
import BlogDetailsPageBanner from '@/components/componentsPages/blogDetailsPage/BlogDetailsPageBanner.vue';

export default {
  name: 'BlogDetails4Page',

  components: {
    HeaderComponent,
    BlogDetailsPageBanner,
    BlogDetailsPageArticles,
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