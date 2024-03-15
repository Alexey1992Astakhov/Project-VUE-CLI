<template>
  <div>
    <HeaderComponent/>
    <BlogPageBanner/>
    <BlogPageLastPost/>
    <BlogPageArticles/>
    <FooterComponent/>
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BlogPageArticles from '@/components/componentsPages/blogPage/BlogPageArticles.vue';
import BlogPageBanner from '@/components/componentsPages/blogPage/BlogPageBanner.vue';
import BlogPageLastPost from '@/components/componentsPages/blogPage/BlogPageLastPost.vue';

export default {
  name: 'Blog2Page',

  components: {
    HeaderComponent,
    BlogPageBanner,
    BlogPageLastPost,
    BlogPageArticles,
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