<template>
  <el-pagination
    :current-page="page.page"
    :page-sizes="[10, 20, 40, 80, 100]"
    :page-size="page.pagesize"
    layout="total,sizes, prev, pager, next, jumper"
    :total="total"
    @size-change="sizeChange"
    @current-change="currentChange"
    :teleported="false"
    popper-class="eloption"
    class="pagination"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  total: number
  pageOption: {
    page: number
    pagesize: number
  }
}>()
const page = computed(() => props.pageOption)
const emit = defineEmits(['refresh'])
const sizeChange = (val: number) => {
  emit('refresh', { page: page.value.page, pagesize: val })
}
const currentChange = async (val: number) => {
  emit('refresh', { page: val, pagesize: page.value.pagesize })
}
</script>

<style lang="scss" scoped>
.pagination {
  height: 32px;
  width: calc(100% - 40px);
  display: flex;
  padding: 8px 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  align-self: stretch;
}
</style>
