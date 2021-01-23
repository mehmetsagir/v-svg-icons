<template>
  <div class="container">
    <div class="alert" v-if="filteredList.length == 0">
      No results found for <b>{{ searchText }}</b>!
    </div>
    <div class="icon-box" v-for="(icon, index) in filteredList" :key="index">
      <div
        class="icon"
        v-if="icon.title.toLowerCase().includes(searchText.trim().toLowerCase())"
        @click="copy(icon)"
      >
        <icon :name="icon.title" width="35px" height="35px" color="#495057" />
        <span>{{ icon.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "iconList",
  props: ["searchText"],
  methods: {
    copy(icon) {
      Axios.put('https://v-svg-icons-server.herokuapp.com/updateView/' + icon._id, {
        viewsCount: icon.viewsCount + 1
      }).catch(err => {
        console.log(err)
      })

      document.querySelectorAll(".icon-box .icon").forEach(item => {
        item.classList.remove("active");
        if (item.lastChild.innerText == icon.title) {
          item.lastChild.innerHTML = "Copied!";
          item.classList.add("active");
          setTimeout(() => {
            item.classList.remove("active");
            item.lastChild.innerText = icon.title;
          }, 500);
        }
      });
      let textarea = document.createElement("textarea");
      textarea.value = icon.title;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.parentNode.removeChild(textarea);
    }
  },
  computed: {
    filteredList() {
      return this.$store.state.iconList.filter(icon => {
        return icon.title
          .toLowerCase()
          .includes(this.searchText.trim().toLowerCase());
      });
    }
  }
};
</script>

<style lang="scss">
.copy-alert {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px;
  background: green;
}
.container {
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  .alert {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    background: #f8d7da;
    color: #721c24;
    overflow: hidden;
  }
  .icon-box {
    padding: 10px 20px;
    width: calc(100% / 6);
    .icon {
      height: max-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      cursor: pointer;
      padding: 15px 5px;
      border-radius: 4px;
      transition: 200ms;
      &.active {
        background: #219187;
        box-shadow: 2px 5px 5px rgba(black, 0.2);
        * {
          color: #e9e9e9;
          fill: #e9e9e9;
        }
      }
      &:hover {
        background: #219187;
        box-shadow: 2px 5px 5px rgba(black, 0.2);
        * {
          color: #e9e9e9;
          fill: #e9e9e9;
        }
      }
      *::selection {
        background: none;
      }
      span {
        margin-top: 15px;
        font-size: 14px;
        font-family: sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
}
@media (max-width: 850px) {
  .icon-box {
    width: calc(100% / 3) !important;
  }
}
@media (max-width: 400px) {
  .icon-box {
    width: calc(100% / 2) !important;
  }
}
</style>
