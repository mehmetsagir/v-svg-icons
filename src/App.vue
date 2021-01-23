<template>
  <div id="app">
    <Header @resetSearch="reset = $event" />
    <Search @searchText="searchText = $event" :reset="reset" />
    <icon-list :searchText="searchText" />
    <icon name="chevron-circle-up" class="backToTop" width="35px" height="35px" color="rgba(0, 0, 0, .6)" @click.native="backToTop()" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Search from "@/components/Search";
import iconList from "@/components/icons";
export default {
  name: "App",
  data() {
    return {
      searchText: "",
      reset: null,
    };
  },
  components: { iconList, Search, Header },
  created() {
    this.$store.dispatch('fetchIcons')
    this.$store.dispatch('fetchVersion')
  },
  methods: {
    backToTop(){
      document.documentElement.scrollTop = 0;
    }
  },
};


window.addEventListener('scroll', () => {
  const backToTopBtn = document.querySelector('.backToTop');
  document.documentElement.scrollTop > 310 ? backToTopBtn.style.display = 'block' : backToTopBtn.style.display = 'none'
})
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Baloo Tamma 2", cursive, sans-serif;
}
html{
  scroll-behavior: smooth;
}
a {
  color: inherit;
  text-decoration: none;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.backToTop{
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  z-index: 99;
  display: none;
  &::selection{
    background: none;
  }
}
@media (max-width: 1200px) {
  .container {
    width: 100%;
    padding: 0 20px;
  }
}
</style>
