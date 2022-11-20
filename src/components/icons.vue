<script>
import allIcons from 'v-svg-icons/icons.json'
export default {
  name: 'iconList',
  data() {
    return {
      iconList: [],
      allIconList: allIcons,
      iconListCount: 102
    }
  },
  props: ['searchText'],
  methods: {
    copy(iconName) {
      document.querySelectorAll('.icon-box .icon').forEach(item => {
        item.classList.remove('active')
        if (item.lastChild.innerText == iconName) {
          item.lastChild.innerHTML = 'Copied!'
          item.classList.add('active')
          setTimeout(() => {
            item.classList.remove('active')
            item.lastChild.innerText = iconName
          }, 500)
        }
      })
      let textarea = document.createElement('textarea')
      textarea.value = iconName
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      textarea.parentNode.removeChild(textarea)
    },
    filteredListCount() {
      if (this.searchText.length < 1) {
        this.iconList = []
        this.allIconList.forEach((icon, index) => {
          index < this.iconListCount ? this.iconList.push(icon) : false
        })
      } else {
        let index = 0
        this.iconList = []
        this.allIconList.filter(icon => {
          if (
            icon.name
              .toLowerCase()
              .includes(this.searchText.trim().toLowerCase()) ||
            icon.name
              .toLowerCase()
              .replace(/-/g, ' ')
              .includes(this.searchText.trim().toLowerCase())
          ) {
            index < this.iconListCount ? this.iconList.push(icon) : false
            index++
          }
        })
      }
    }
  },
  watch: {
    searchText() {
      this.iconListCount = 102
      this.filteredListCount()
    },
    iconListCount() {
      this.filteredListCount()
    }
  },
  mounted() {
    const target = document.getElementById('load-more-btn')
    const callback = entries => {
      if (entries[0].isIntersecting) {
        loadMore()
      }
    }
    const loadMore = () => {
      this.iconListCount += 120
    }
    const observer = new IntersectionObserver(callback)
    observer.observe(target)
  },
  created() {
    this.filteredListCount()
  }
}
</script>

<template>
  <div class="container">
    <div class="alert" v-if="iconList.length == 0">
      No results found for <b>{{ searchText }}</b
      >!
    </div>
    <div class="icon-box" v-else v-for="(icon, index) in iconList" :key="index">
      <div class="icon" @click="copy(icon.name)">
        <icon :name="icon.name" width="35px" height="35px" color="#495057" />
        <span>{{ icon.name }}</span>
      </div>
    </div>
    <span id="load-more-btn" style="visibility: hidden"></span>
  </div>
</template>

<style lang="scss">
.copy-alert {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px;
  background: green;
}
.no-more {
  display: block !important ;
  width: 100%;
  margin-top: 15px;
  font-size: 23px;
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
        font-family: sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
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
