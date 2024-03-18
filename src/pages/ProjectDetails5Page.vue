<template>
    <section class="project-details">
        <HeaderComponent/>
        <div class="project-details-banner">
            <img src="../assets/images/Banner__project_details.jpg" alt="">
        </div>
        <div class="project-details__descriptions">
            <h2 class="project-details__title">Minimal Look Bedrooms {{ id }}</h2>
            <p class="project-details__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam
                sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi
                fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
            </p>
            <p class="project-details__text">
        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis
        nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit,
        in
        viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
            </p>
        </div>
        <SwiperSliderComponent :carousel_data="sliderItems"/>
    </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import SwiperSliderComponent from '@/components/SwiperSliderComponent.vue';

export default {
  name: 'ProjectDetails5Page',
  components: {SwiperSliderComponent, HeaderComponent },
  props: ['id'],

  data() {
    return {
        sliderItems: [
        { id: 1, name: 'project_1', image: 'project_img_1.png'},
        { id: 2, name: 'project_2', image: 'project_img_2.png'},
        { id: 3, name: 'project_3', image: 'project_img_3.png'},
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
.banner {
  margin-bottom: 200px;
}

.project-details {
  &-banner {
      background-image: url(../assets/images/Banner__project_details.jpg);
    }
  &__descriptions {
    padding-top: 120px;
    margin: 0 auto 70px;
    max-width: 658px;

  }
  &__title {
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    margin-bottom: 11px;
    color: #292F36;
    font-family: $familyTitle;
  }

  &__text {
    margin-bottom: 30px;
    color: #4D5053;
    font-family: $familyText;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}
</style>