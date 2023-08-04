/**
 *
 * @param row 表格当前行数据
 * @param column 表格当前列数据
 * @param cellValue 当前单元格的值
 * @param index 当前索引
 * @returns 返回格式化之后的单元格值
 */
const format = (row: any, column: any, cellValue: any, index: number) => {
  if (['', null, undefined].includes(cellValue)) {
    return '--'
  } else if (typeof cellValue === 'number') {
    if (cellValue < 1 && cellValue !== 0) return cellValue * 100 + '%'
    else if (cellValue === 0) return cellValue
    return cellValue + '%'
  }
  return cellValue
}

/**
 * 根据值选择是何种工作模式
 * @param row 表格当前行数据
 * @param column 表格当前列数据
 * @param cellValue 当前单元格的值
 * @param index 当前索引
 * @returns 返回格式化之后的单元格值
 */
const workModeFormat = (
  row: any,
  column: any,
  cellValue: string,
  index: number
) => {
  switch (cellValue) {
    case 'run':
      return '运行'
    case 'offline':
      return '离线'
    case 'study':
      return '学习'
    default:
      return '--'
  }
}

const formatNetworkSpeed = (row: any, column: any, cellValue: number) => {
  if (!cellValue) {
    return '0B/s'
  }
  const units = ['B/s', 'KB/s', 'MB/s', 'GB/s', 'TB/s']
  let index = 0
  while (cellValue >= 1024 && index < units.length - 1) {
    cellValue /= 1024
    index++
  }

  return `${cellValue.toFixed(0)}${units[index]}`
}

export { format, workModeFormat, formatNetworkSpeed }
