<template>
  <div class="carousel-item">
    <img :src="require(`@/assets/images/${item_data.image}`)" alt="image">
  </div>
</template>

<script>
export default {
  name: 'CarouselItemComponent',
  props: {
    item_data: {
        type: Object,
        default: () => {}
    }
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