<template>
  <div id="app">
    <div class="loader-container" v-if="this.$store.state.pageLoader">
      <div class="loader"></div>
    </div>
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

.loader-container{
  width: 100%;
  height: 100vh;
  position: fixed;
  background: #1D1F20;
  display: grid;
  place-items: center;
  z-index: 999;
}
.loader  {
  animation: rotate 1s infinite;
  height: 50px;
  width: 50px;
}
.loader:before,
.loader:after {
  border-radius: 50%;
  content: '';
  display: block;
  height: 20px;
  width: 20px;
}
.loader:before {
  animation: ball1 1s infinite;
  background-color: #cb2025;
  box-shadow: 30px 0 0 #f8b334;
  margin-bottom: 10px;
}
.loader:after {
  animation: ball2 1s infinite;
  background-color: #00a096;
  box-shadow: 30px 0 0 #97bf0d;
}
@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg) scale(0.8);
    -moz-transform: rotate(0deg) scale(0.8);
  }
  50% {
    -webkit-transform: rotate(360deg) scale(1.2);
    -moz-transform: rotate(360deg) scale(1.2);
  }
  100% {
    -webkit-transform: rotate(720deg) scale(0.8);
    -moz-transform: rotate(720deg) scale(0.8);
  }
}
@keyframes ball1 {
  0% {
    box-shadow: 30px 0 0 #f8b334;
  }
  50% {
    box-shadow: 0 0 0 #f8b334;
    margin-bottom: 0;
    -webkit-transform: translate(15px,15px);
    -moz-transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #f8b334;
    margin-bottom: 10px;
  }
}
@keyframes ball2 {
  0% {
    box-shadow: 30px 0 0 #97bf0d;
  }
  50% {
    box-shadow: 0 0 0 #97bf0d;
    margin-top: -20px;
    -webkit-transform: translate(15px,15px);
    -moz-transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #97bf0d;
    margin-top: 0;
  }
}
</style>
