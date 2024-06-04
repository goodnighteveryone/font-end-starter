<template>
  <slot name="header"></slot>
  <el-table
    :data="tableData"
    :header-cell-style="tableType.headerCellStyle"
    :cell-style="tableType.cellStyle"
    :stripe="tableType.stripe"
    :highlight-current-row="tableType.highlightCurrentRow"
    :class="tableType.class"
    :key="tableType.key"
    :row-key="tableType.rowKey"
    :expand-row-keys="expandRowsKeys"
    @expand-change="handleExpandChange"
    @selection-change="handleSelectionChange"
    ref="tableRef"
  >
    <el-table-column type="selection" width="40px" v-if="tableType.isShowSelection"></el-table-column>
    <!-- <el-table-column type="expand" :width="tableType.expandWidth" v-if="tableType.isShowExpand"></el-table-column> -->
    <el-table-column
      v-for="column in tableColumnType"
      :key="column.prop"
      :align="column.align"
      :prop="column.prop"
      :type="column.type"
      :label="column.label"
      :min-width="column.minWidth"
      :width="column.width"
      :show-overflow-tooltip="column.showOverflowTooltip"
      :formatter="column.formatter"
    >
      <template v-if="$slots[column.prop]" #default="scope">
        <slot :name="column.prop" :row="scope.row" :index="scope.$index"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
const props = defineProps<{
  tableType: TableType
  tableColumnType: TableColumnType[]
  tableData: any[]
  expandRowsKeys?: string[]
}>()

const tableRef = ref<any>()

const emit = defineEmits(['handleSelectionChange', 'handleExpandChange'])
watch(
  () => props.tableData,
  (val) => {
    val
    // val && tableRef.value?.doLayout()
  }
)

const handleSelectionChange = (val: FileTableData[]) => {
  emit(
    'handleSelectionChange',
    val.map((item) => item.fileId)
  )
}
const handleExpandChange = (val: any, row: any) => {
  emit('handleExpandChange', val, row)
}
</script>

<style lang="scss" scoped></style>
