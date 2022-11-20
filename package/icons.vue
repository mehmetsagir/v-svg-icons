<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="getIconInfo(name).viewBox"
    :class="name"
    v-if="getIconInfo(name)"
  >
    <path :fill="color" :d="getIconInfo(name).path" :class="name"></path>
  </svg>
</template>

<script>
import icons from './icons.json'
export default {
  name: 'icons.vue',
  methods: {
    getIconInfo(name) {
      const icon = icons.find(i => i.name === name)

      if (!icon) {
        return console.log(
          `No icon found for the name %c"${this.name}"`,
          'color: #dd1c1c; font-weight: bold; font-size: 12px;'
        )
      }

      return {
        path: icon.path,
        viewBox: icon.viewBox
      }
    }
  },
  props: {
    name: {
      required: true
    },
    color: {
      required: false,
      default: 'currentColor'
    },
    size: {
      required: false,
      default: '30'
    }
  }
}
</script>
