import type {
  // 系列类型的定义后缀都为 SeriesOption
  // BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
  RadarSeriesOption,
} from 'echarts/charts'
import type {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
  LegendComponentOption,
  ToolboxComponentOption,
} from 'echarts/components'
import type { ComposeOption } from 'echarts/core'
import { EChartsType } from 'echarts'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    echarts: typeof ECharts
  }
}

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = ComposeOption<
  // | BarSeriesOption
  | PieSeriesOption
  | LineSeriesOption
  | RadarSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | LegendComponentOption
  | ToolboxComponentOption
>

export { ECOption, EChartsType }
