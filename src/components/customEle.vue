<template>
  <div class="custom-ele w">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.custom-ele {
  :deep(.el-input) {
    .el-input__prefix {
      margin-right: 10px;
    }
  }
}
</style>
