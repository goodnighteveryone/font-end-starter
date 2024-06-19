import * as echarts from 'echarts/core'
// import 'echarts-liquidfill'
// import { GlobeComponent } from 'echarts-gl/components'
import { BarChart, LineChart, PieChart, RadarChart } from 'echarts/charts'
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
  PolarComponent,
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
  PolarComponent,
  BarChart,
  PieChart,
  LineChart,
  RadarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
])
export default echarts
