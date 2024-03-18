<template>
  <div class="wrapper">
    <div class="carousel" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%'}">
        <CarouselItemComponent v-for="item in sliderItems" :key="item.id" :item_data="item"/>
    </div>
  <div class="wrap__btn">
    <button class="btn" @click="prevSlide">Prev</button>
    <button class="btn" @click="nextSlide">Next</button>
  </div>
</div>
</template>

<script>

import CarouselItemComponent from "@/components/CarouselItemComponent.vue";

export default {
  name: 'SwiperSliderComponent',
  components: {
    CarouselItemComponent,
  },

  data() {
    return {
      currentSlideIndex: 0,
      sliderItems: [
        { id: 1, name: 'project_1', image: 'project_img_1.png'},
        { id: 2, name: 'project_2', image: 'project_img_2.png'},
        { id: 3, name: 'project_3', image: 'project_img_3.png'}
      ]
    };
  },
  mounted() {
    
  },

  methods: {
    prevSlide() {
        if (this.currentSlideIndex > 0) {
            this.currentSlideIndex--
        }
    },
    nextSlide() {
        if (this.currentSlideIndex === this.sliderItems.length - 1) {
            this.currentSlideIndex = 0
        } else {
            this.currentSlideIndex++
        }
    }

  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars.scss";
.wrapper {
    margin: 0 auto 200px;
    max-width: 585px;
    overflow: hidden;
}

.carousel {
    display: flex;
    transition: all ease 0.5s;
}
</style>