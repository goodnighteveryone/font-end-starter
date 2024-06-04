export const formatterPieLabel = (params: any) => {
  return '{label|' + params.name + ' ' + params.value + '}'
}

export const formatterTooltip = (text: string, isMonth: boolean = false) => {
  return (params: any) => {
    const data = Array.isArray(params) ? params[0] : params
    const { name, value, percent, marker } = data
    let timeline = null
    if (isMonth) {
      timeline = data.data.timeline
    }
    const percentText = percent ? `(${percent}%)` : ''
    const tooltip = !isMonth
      ? `
    <div style="color: #fff; text-align:left;margin-bottom: 8px;">${name}</div>
    <div>${marker}
      <span style="color: #ACB7ED;">${text}</span>
      <span style="color: #5B90FA;font-size: 18px;font-weight: 500;">${value} ${percentText}</span>
    </div>
  `
      : `
  <div style="color: #fff; text-align:left;margin-bottom: 8px;">${name}</div>
  <div style="color: #fff; text-align:left;margin-bottom: 8px;">${timeline}</div>
  <div style="margin-left: -50px;">${marker}
    <span style="color: #ACB7ED;">${text}</span>
    <span style="color: #5B90FA;font-size: 18px;font-weight: 500;">${value} ${percentText}</span>
  </div>
`
    return tooltip
  }
}

//饼图tooltip位置保持右侧
export const pieTooltipPosition = (point: any, params: any, dom: any, rect: any, size: any) => {
  // point: 鼠标位置
  // params: 当前数据项的信息
  // dom: 提示框的 DOM 元素
  // rect: 提示框的大小
  // size: 图表的大小
  // 如果当前鼠标所处的位置在右侧，则将提示框的位置左移
  const min = rect.height < rect.y ? rect.height : rect.y
  if (size.viewSize[0] - point[0] < rect.x) {
    return [point[0] - rect.x, point[1] + min]
  }
  return [point[0] + 10, point[1] + min]
}

//柱状图series label加入图片显示
export const formatterBarSeriesLabel = (limit: number, classprefix: string) => {
  return (params: any) => {
    const pattern = /[\u4e00-\u9fff]/
    const max = pattern.test(params.name) ? limit - 2 : limit
    const index = params.dataIndex + 1
    const bg = index < 4 ? `bg${index}` : 'bg4'
    const label = params.data.name.length > max ? params.data.name.substring(0, max) + '...' : params.data.name
    const indexClass = classprefix + 'Index'
    const labelClass = classprefix + 'Name'
    return '{' + indexClass + '|' + index + '}{' + labelClass + '|' + label + '}'
  }
}

//柱状图series label显示图片
export const formatterBarSeriesLabelImg = (params: any) => {
  const index = params.value < 4 ? params.value : 4
  return `{bg${index}|}`
}
