<template>
  <el-config-provider :locale="zhCn" v-if="isShow">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
let isShow = true
const handleBeforeUnload = () => {
  isShow = false
  console.log('beforeunload')
}
onMounted(() => {
  window.addEventListener('beforeunload', handleBeforeUnload)
})
onBeforeMount(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload)
})
</script>

<style scoped></style>
