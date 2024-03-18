<template>
  <nav class="header__nav">
    <router-link class="header__link" to="/home">
      Home
    </router-link>
    <router-link class="header__link" to="/project">
      Project
    </router-link>
    <router-link class="header__link" to="/blog">
      Blog
    </router-link>
</nav>
</template>

<script>
export default {
  name: 'NavigationPages',

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
@import '../assets/scss/vars.scss';

.header__nav {
  display: flex;
  gap: 45px;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: $familyText;
  color: #292F36;
}
</style>