<template>
  <section> 
    <div class="project__items center">
    <div class="project__item" v-for="project in projects" :key="project.id">
      <img
        class="project__item-img"
        :src="require('../../../assets/images/project_item/' + project.image)"
        alt="image"
      />
      <div class="project__item-wrap">
        <div class="project__item-wrap-text">
          <h2 class="project__item-title">{{ project.title }}</h2>
          <p class="project__item-text">{{ project.text }}</p>
        </div>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
            <path
              d="M32 44L40 35L32 26"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="count__page">
          <div class="count__page-wrap">
             <a href="#" class="count__page-number">
                <p class="count__page-number-text">01</p>
             </a>
             <a href="#" class="count__page-number">
                <p class="count__page-number-text">02</p>
             </a>
             <a href="#" class="count__page-number">
                <p class="count__page-number-text">03</p>
             </a>
             <a href="#">
                <svg class="count__page-svg" xmlns="http://www.w3.org/2000/svg" width="53" height="52"
                   viewBox="0 0 53 52" fill="none">
                   <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                   <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                </svg>
             </a>
          </div>
       </div>
</section>
 
</template>

<script>
export default {
  name: "ProjectPageProjects",
  // props: ["projects"],

  data() {
    return {
      projects: [
        {
          id: 1,
          image: "project__item_1.png",
          title: "Minimal Bedroom",
          text: "Decor / Architecture",
        },
        {
          id: 2,
          image: "project__item_4.png",
          title: "Classic Minimal Bedroom",
          text: "Decor / Architecture",
        },
        {
          id: 3,
          image: "project__item_6.png",
          title: "Minimal Bedroom table",
          text: "Decor / Architecture",
        },
        {
          id: 4,
          image: "project__item_8.png",
          title: "Modern Medroom",
          text: "Decor / Architecture",
        },
        {
          id: 5,
          image: "project__item_2.png",
          title: "Minimal Bedroom",
          text: "Decor / Architecture",
        },
        {
          id: 6,
          image: "project__item_5.png",
          title: "Modern Bedroom",
          text: "Decor / Architecture",
        },
        {
          id: 7,
          image: "project__item_7.png",
          title: "System Table",
          text: "Decor / Architecture",
        },
        {
          id: 8,
          image: "project__item_3.png",
          title: "Modern Bedroom",
          text: "Decor / Architecture",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/vars.scss";

.project__items {
  margin-top: 61px;
  margin-bottom: 61px;
  column-count: 2;
}

.count__page {
    margin-top: 51px;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    &-wrap {
       display: flex;
       gap: 20px;
    }
    &-number {
       display: flex;
       justify-content: center;
       align-items: center;
       flex-wrap: nowrap;
       border: 1px #cda274 solid;
       width: 52px;
       height: 52px;
       border-radius: 52px;
       &-text {
          color: #292f36;
          font-family: $familyText;
          font-size: 16px;
          font-style: normal;
          font-weight: $font-500;
          line-height: 150%;
          text-transform: capitalize;
       }
       &:hover {
          background: #f4f0ec;
          border: none;
          width: 54px;
          height: 54px;
       }
    }
    &-svg:hover {
       fill: #f4f0ec;
       & circle {
          stroke: none;
       }
    }
 }

.project__item {
  padding-bottom: 27px;
  display: inline-block;

  &-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
  }

}
</style>
