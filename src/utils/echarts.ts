import * as echarts from 'echarts/core'
// import 'echarts-gl'
import { GlobeComponent } from 'echarts-gl/components'
// import 'echarts-liquidfill'
import { BarChart, LineChart, PieChart, RadarChart, ScatterChart, EffectScatterChart, MapChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // 数据集组件
  DatasetComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
  GeoComponent,
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import type {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
  RadarSeriesOption,
  ScatterSeriesOption,
  EffectScatterSeriesOption,
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

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = ComposeOption<
  | BarSeriesOption
  | PieSeriesOption
  | LineSeriesOption
  | RadarSeriesOption
  | ScatterSeriesOption
  | EffectScatterSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | LegendComponentOption
  | ToolboxComponentOption
>

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
  BarChart,
  PieChart,
  LineChart,
  RadarChart,
  ScatterChart,
  EffectScatterChart,
  MapChart,
  GeoComponent,
  GlobeComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
])
export default echarts
