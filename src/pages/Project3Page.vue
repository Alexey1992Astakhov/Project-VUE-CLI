<template>
  <div>
    <HeaderComponent/>
    <ProjectPageBanner/>
    <ProjectPageContent/>
    <ProjectPageProjects/>
    <FooterComponent/>
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ProjectPageBanner from '@/components/componentsPages/projectPage/ProjectPageBanner.vue';
import ProjectPageContent from '@/components/componentsPages/projectPage/ProjectPageContent.vue';
import ProjectPageProjects from '@/components/componentsPages/projectPage/ProjectPageProjects.vue';

export default {
  name: 'Project3Page',

  components: {
    HeaderComponent,
    ProjectPageBanner,
    ProjectPageContent,
    ProjectPageProjects,
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

<style scoped>

</style>