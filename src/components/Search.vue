<script>
export default {
  name: 'Search',
  data() {
    return {
      searchText: ''
    }
  },
  props: ['reset'],
  watch: {
    searchText() {
      this.$emit('searchText', this.searchText)
    },
    reset() {
      this.searchText = ''
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="search">
      <input
        type="search"
        autocomplete="off"
        autofocus
        id="search"
        required
        v-model="searchText"
      />
      <label for="search"
        >Search within {{ this.$store.state.iconList.length }} icons</label
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 200px;
  display: flex;
  align-items: flex-end;
  .search {
    width: 100%;
    height: 60px;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      font-size: 20px;
      padding: 5px 10px;
      outline: none;
      background: none;
      border: 1px solid rgba(#ccc, 0.4);
      border-radius: 4px;
      transition: 200ms;
      &:focus,
      &:valid {
        border-color: rgba(#ccc, 0.5);
        box-shadow: 5px 5px 10px rgba(black, 0.1);
        & + label {
          top: -15px;
          left: 5px;
          color: rgba(black, 0.8);
        }
      }
    }
    label {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-40%);
      font-size: 25px;
      line-height: 25px;
      padding: 0;
      color: rgba(#ccc, 0.4);
      transition: 250ms;
    }
  }
}
</style>
