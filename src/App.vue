<template>
  <router-view />
</template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
let isShow = true
const handleBeforeUnload = () => {
  isShow = false
  console.log('beforeunload')
}
// onMounted(() => {
//   window.addEventListener('beforeunload', handleBeforeUnload)
// })
// onBeforeMount(() => {
//   window.removeEventListener('beforeunload', handleBeforeUnload)
// })
</script>

<style scoped></style>
