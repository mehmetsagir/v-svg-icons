<script>
export default {
  name: 'Header',
  data() {
    return {
      reset: true
    }
  },
  methods: {
    resetSearchText() {
      this.reset = !this.reset
      this.$emit('resetSearch', this.reset)
    }
  }
}
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <h1 @click="resetSearchText">
          Vue Svg Icons
          <a href="https://npmjs.com/v-svg-icons" target="_blank">v1.2.0</a>
        </h1>
      </div>
      <a
        href="https://github.com/mehmetsagir/v-svg-icons#readme"
        target="_blank"
        ref="non"
      >
        <icon name="book" width="20px" height="20px" color="#219187" />
        Documentation
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid rgba(#ccc, 0.3);
  .container {
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      font-size: 18px;
      display: flex;
      align-items: center;
      height: 40px;
      svg {
        margin-right: 5px;
        margin-bottom: 5px;
      }
    }
    h1 {
      font-size: 30px;
      font-weight: 500;
      cursor: pointer;
      a {
        display: inline-block;
        font-size: 15px;
        font-weight: 400;
      }
      &::selection,
      span::selection {
        background: none;
      }
    }
  }
}
@media (max-width: 1200px) {
  .header .container {
    padding: 30px 15px;
  }
}
@media (max-width: 500px) {
  .header .container {
    height: max-content !important;
    padding: 20px 0;
    flex-direction: column;
  }
}
</style>
