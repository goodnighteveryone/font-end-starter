<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" :fill="color" :width="width" :height="height" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '',
  },
})

const iconName = computed(() => {
  return `#icon-${props.iconClass}`
})
const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`
  }
  return 'svg-icon'
})
</script>
