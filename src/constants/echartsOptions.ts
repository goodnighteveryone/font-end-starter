import { usePiniaStore } from '@/stores'
const { useCommonStore } = usePiniaStore()
import {
  formatterPieLabel,
  formatterTooltip,
  pieTooltipPosition,
  formatterBarSeriesLabel,
  formatterBarSeriesLabelImg,
} from '@/utils/formatterEchart'

import label_top1 from '@/assets/icons/label_top1.svg'
import label_top2 from '@/assets/icons/label_top2.svg'
import label_top3 from '@/assets/icons/label_top3.svg'
import label_top4 from '@/assets/icons/label_top4.svg'
import top1 from '@/assets/icons/top1.svg'
import top2 from '@/assets/icons/top2.svg'
import top3 from '@/assets/icons/top3.svg'
import top4 from '@/assets/icons/top4.svg'
import regionData from '@/constants/region.json'

const rich = {
  label: {
    color: '#ACB7ED',
    fontSize: 12,
    fontFmaily: 'PingFang SC',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 18,
  },
  name: {
    color: '#fff',
    fontSize: 14,
    fontFmaily: 'PingFang SC',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 22,
  },
  value: {
    color: '#5B90FA',
    fontSize: 18,
    fontFmaily: 'PingFang SC',
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 22,
  },
  tooltipLabel: {
    color: '#ACB7ED',
    fontSize: 14,
    fontFmaily: 'PingFang SC',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 22,
  },
  bg1: {
    width: 116,
    height: 24,
    backgroundColor: {
      image: label_top1,
    },
  },
  bg2: {
    width: 116,
    height: 24,
    backgroundColor: {
      image: label_top2,
    },
  },
  bg3: {
    width: 116,
    height: 24,
    backgroundColor: {
      image: label_top3,
    },
  },
  bg4: {
    width: 116,
    height: 24,
    backgroundColor: {
      image: label_top4,
    },
  },
  labelName: {
    color: '#fff',
    //2：正：右，负：左
    //3：正：上，负：下
    padding: [0, 21, 0, 0],
    fontSize: 14,
    fontFamily: 'PingFang SC',
    lineHeight: 22,
    fontWeight: 400,
    fontStyle: 'normal',
    width: 50,
  },
  labelIndex: {
    color: '#fff',
    padding: [0, 18, 4, 0],
    fontSize: 14,
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    lineHeight: 22,
    fontWeight: 800,
  },
  top1: {
    width: 30,
    height: 18,
    backgroundColor: {
      image: top1,
    },
  },
  top2: {
    width: 30,
    height: 18,
    backgroundColor: {
      image: top2,
    },
  },
  top3: {
    width: 30,
    height: 18,
    backgroundColor: {
      image: top3,
    },
  },
  top4: {
    width: 30,
    height: 18,
    backgroundColor: {
      image: top4,
    },
  },
  tooltipName: {
    color: '#fff',
    padding: [0, 4, 0, 0],
    fontSize: 13,
    fontFamily: 'PingFang SC',
    lineHeight: 20,
    fontWeight: 400,
    fontStyle: 'normal',
    width: 50,
  },
  tooltipIndex: {
    color: '#fff',
    padding: [0, 12, -2, 0],
    fontSize: 14,
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    lineHeight: 22,
    fontWeight: 600,
  },
}

const color = [
  '#5B90FA',
  '#5AD9A6',
  '#9988FF',
  '#F6BD16',
  '#E86949',
  '#6EC8EB',
  '#926FC9',
  '#FF9D4C',
  '#269A99',
  '#269A99',
]
const color20 = [
  '#5B90FA',
  '#BDD2FD',
  '#5AD9A6',
  '#BEEFDA',
  '#9988FF',
  '#CCC3FF',
  '#F6BD16',
  '#FCE5A2',
  '#E86949',
  '#F5C4B6',
  '#6EC8EB',
  '#B6E3F6',
  '#926FC9',
  '#D4C6EA',
  '#FF9D4C',
  '#FFD8B7',
  '#269A99',
  '#AAD8D8',
  '#269A99',
  '#FFD6E8',
]
export const echartsOptions = [
  //饼图
  {
    color: color,
    title: {
      show: false,
    },
    tooltip: {
      trigger: 'item',
      padding: [8, 16],
      backgroundColor: 'rgba(0,0,0,0.70)',
      borderColor: '#596FDA',
      formatter: formatterTooltip('数据：'),
      textStyle: {
        lineHeight: 22,
        fontSize: 14,
        fontFmaily: 'PingFang SC',
        fontWeight: 'normal',
        fontStyle: 'normal',
      },
      position: pieTooltipPosition,
    },
    label: {
      show: true,
      position: 'outside',
      formatter: formatterPieLabel,
      rich: {
        label: rich.label,
      },
    },
    series: [
      {
        name: '工控协议',
        type: 'pie',
        radius: ['30%', '60%'],
        center: ['50%', '50%'],
        data: [],
      },
    ],
  },
  //胶囊图
  {
    //设置图表位置
    grid: {
      left: '42%',
      right: '20%',
      top: '5%',
      bottom: '0%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: [
      {
        // name
        type: 'category',
        inverse: true,
        data: [],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          color: '#fff',
          fontSize: 14,
          fontFamily: 'PingFang SC',
          fontWeight: 500,
          align: 'left',
        },
      },
    ],
    series: [
      {
        // 内
        name: 'label image',
        type: 'bar',
        barWidth: 4,
        barCategoryGap: 20,
        silent: true,
        // showBackground: true,
        // backgroundStyle: {
        //   color: '#2C2C6C',
        // },
        label: {
          show: true,
          position: 'left',
          distance: 20,
          formatter: formatterBarSeriesLabelImg,
          rich: {
            bg1: rich.bg1,
            bg2: rich.bg2,
            bg3: rich.bg3,
            bg4: rich.bg4,
          },
        },
        data: [],
        animationEasing: 'elasticOut',
      },
      {
        // 内
        name: '内框',
        type: 'bar',
        barWidth: 4,
        barCategoryGap: 20,
        silent: true,
        // showBackground: true,
        // backgroundStyle: {
        //   color: '#2C2C6C',
        // },
        itemStyle: {
          borderRadius: 2,
          color: {
            type: 'linear',
            colorStops: [
              {
                offset: 0,
                color: '#91B0F3',
              },
              {
                offset: 0.518,
                color: '#596FDA',
              },
              {
                offset: 1,
                color: '#16C3AF',
              },
            ],
          },
        },
        label: {
          show: true,
          position: 'left',
          distance: 20,
          formatter: formatterBarSeriesLabel(10, 'label'),
          rich: {
            labelIndex: rich.labelIndex,
            labelName: rich.labelName,
          },
        },
        data: [],
        zlevel: 1,
        animationEasing: 'elasticOut',
      },
      {
        name: '外框',
        type: 'bar',
        silent: true,
        barWidth: 4,
        zlevel: 0,
        barGap: '-100%',
        data: [],
        itemStyle: {
          borderRadius: 2,
          color: '#2C2C6C',
        },
        label: {
          show: true,
          position: 'right',
          distance: 55,
          color: '#16C3AF',
          fontSize: 14,
          fontFamily: 'PingFang SC',
          fontWeight: 500,
          align: 'right',
          formatter: (params: any) => {
            return useCommonStore.getTempChartWorldData[params.dataIndex]
          },
        },
      },
      {
        name: '截止矩形',
        type: 'scatter',
        emphasis: {
          scale: false,
        },
        symbol: 'rect',
        symbolSize: [2, 8],
        itemStyle: {
          color: '#fff',
          shadowColor: 'rgba(255,255,255,0.5)',
          shadowBlur: 15,
          borderWidth: 1,
          opacity: 1,
        },
        zlevel: 10,
        animationDelay: 500,
        data: [],
      },
    ],
  },
  //胶囊图
  {
    //设置图表位置
    grid: {
      left: '42%',
      right: '20%',
      top: '5%',
      bottom: '0%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: [
      {
        // name
        type: 'category',
        inverse: true,
        data: [],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          color: '#fff',
          fontSize: 14,
          fontFamily: 'PingFang SC',
          fontWeight: 500,
          align: 'left',
        },
      },
    ],
    series: [
      {
        // 内
        name: 'label image',
        type: 'bar',
        barWidth: 4,
        barCategoryGap: 20,
        silent: true,
        // showBackground: true,
        // backgroundStyle: {
        //   color: '#2C2C6C',
        // },
        label: {
          show: true,
          position: 'left',
          distance: 20,
          formatter: formatterBarSeriesLabelImg,
          rich: {
            bg1: rich.bg1,
            bg2: rich.bg2,
            bg3: rich.bg3,
            bg4: rich.bg4,
          },
        },
        data: [],
        animationEasing: 'elasticOut',
      },
      {
        // 内
        name: '内框',
        type: 'bar',
        barWidth: 4,
        barCategoryGap: 20,
        silent: true,
        // showBackground: true,
        // backgroundStyle: {
        //   color: '#2C2C6C',
        // },
        itemStyle: {
          borderRadius: 2,
          color: {
            type: 'linear',
            colorStops: [
              {
                offset: 0,
                color: '#91B0F3',
              },
              {
                offset: 0.518,
                color: '#596FDA',
              },
              {
                offset: 1,
                color: '#16C3AF',
              },
            ],
          },
        },
        label: {
          show: true,
          position: 'left',
          distance: 20,
          formatter: formatterBarSeriesLabel(12, 'label'),
          rich: {
            labelIndex: rich.labelIndex,
            labelName: rich.labelName,
            bg1: rich.bg1,
            bg2: rich.bg2,
            bg3: rich.bg3,
            bg4: rich.bg4,
          },
        },
        data: [],
        zlevel: 1,
        animationEasing: 'elasticOut',
      },
      {
        name: '外框',
        type: 'bar',
        silent: true,
        barWidth: 4,
        zlevel: 0,
        barGap: '-100%',
        data: [],
        itemStyle: {
          borderRadius: 2,
          color: '#2C2C6C',
        },
        label: {
          show: true,
          position: 'right',
          distance: 55,
          color: '#16C3AF',
          fontSize: 14,
          fontFamily: 'PingFang SC',
          fontWeight: 500,
          align: 'right',
          formatter: (params: any) => {
            return useCommonStore.getTempChartChinaData[params.dataIndex]
          },
        },
      },
      {
        name: '截止矩形',
        type: 'scatter',
        emphasis: {
          scale: false,
        },
        symbol: 'rect',
        symbolSize: [2, 8],
        itemStyle: {
          color: '#fff',
          shadowColor: 'rgba(255,255,255,0.5)',
          shadowBlur: 15,
          borderWidth: 1,
          opacity: 1,
        },
        zlevel: 10,
        animationDelay: 500,
        data: [],
      },
    ],
  },
  //表格
  {
    columns: ['IP', '端口', '指纹', '协议'],
    data: [],
  },
  //折线图
  {
    // canvas区域
    grid: {
      top: '15%',
      left: '3%',
      right: '5%',
      bottom: '5%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,0.70)',
      borderColor: '#596FDA',
      textStyle: {
        color: '#fff',
        lineHeight: 22,
        fontSize: 14,
        fontFmaily: 'PingFang SC',
        fontWeight: 'normal',
        fontStyle: 'normal',
      },
      formatter: formatterTooltip('新增数据：'),
      //坐标轴指示器
      axisPointer: {
        type: 'line',
        show: true,
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 1,
                color: 'rgba(89, 111, 218, 1)',
              },
              {
                offset: 0,
                color: 'rgba(89, 111, 218, 0)',
              },
            ],
          },
          type: 'solid',
        },
        // label: {
        //   show: true,
        // },
      },
    },
    xAxis: {
      type: 'category',
      name: '',
      data: [],
      interval: 'auto',
      //坐标轴名称显示位置
      nameLocation: 'middle',
      nameTextStyle: {
        color: '#BEC8F1',
        fontSize: 14,
        padding: [0, 0, 0, 0],
      },
      //x轴留白
      boundaryGap: false,
      axisLabel: {
        show: true,
        // margin: 50,
        // rotate: 30,
        // align: 'center',
        color: '#ACB7ED', //x轴文字颜色
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontSize: 12,
        fontWeight: 400,
      },
      // 坐标轴
      axisLine: {
        show: false,
        lineStyle: {
          color: '#4778C6',
        },
      },
      // 坐标轴刻度
      axisTick: {
        show: false,
        alignWithLabel: false,
      },
      // 背景分割线
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      // interval: 10,
      //坐标轴名称显示位置
      name: '',
      nameTextStyle: {
        color: '#BEC8F1',
        fontSize: 14,
        padding: [0, 0, 0, 0],
      },
      // 坐标轴
      axisLine: {
        show: false,
        onZero: true,
        lineStyle: {
          color: '#4778C6',
        },
      },
      axisLabel: {
        show: true,
        // 距离右侧图形距离，配合axisLabel.left 和 grid.left 使用
        // margin: 20,
        align: 'right',
        color: '#ACB7ED', //y轴文字颜色
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontSize: 12,
        fontWeight: 400,
      },
      // 背景分割线
      splitLine: {
        show: true,
        lineStyle: {
          color: '#2E3798',
          type: 'solid',
          width: 1,
        },
      },
    },
    series: [
      {
        // 折线数据
        data: [],
        type: 'line',
        // smooth: 0.4,
        // 坐标点类型
        symbol: 'circle',
        symbolSize: 8,
        // symbolSize: 0,
        showSymbol: false,
        // emphasis: { scale: 1 },
        // 设置坐标点
        itemStyle: {
          color: '#fff',
          // opacity: 0,
        },
        // 折线样式
        lineStyle: {
          width: 2,
          color: '#5B90FA',
        },
        // 区域样式
        areaStyle: {
          origin: 'start',
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 1,
                color: 'rgba(89, 111, 218, 0.5)',
              },
              {
                offset: 0,
                color: 'rgba(89, 111, 218, 0)',
              },
            ],
          },
        },
      },

      // {
      //   name: "警戒值",
      //   type: "line",
      //   // data: [],
      //   markLine: {
      //     symbol: "none", //去掉警戒线最后面的箭头
      //     silent: true, //鼠标悬停事件  true没有，false有
      //     label: {
      //       show: false,
      //       position: "middle", //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
      //       // formatter: "",
      //     },
      //     lineStyle: {
      //       //警戒线的样式  ，虚实  颜色
      //       type: "dashed",
      //       color: "#FF0000",
      //       width: 2,
      //     },
      //     data: [
      //       {
      //         yAxis: 80,
      //       },
      //     ],
      //   },
      // },
    ],
  },
  //饼图
  {
    color: color,
    title: {
      show: false,
    },
    tooltip: {
      trigger: 'item',
      padding: [8, 16],
      backgroundColor: 'rgba(0,0,0,0.70)',
      borderColor: '#596FDA',
      formatter: formatterTooltip('告警数据：'),
      textStyle: {
        lineHeight: 22,
        fontSize: 14,
        fontFmaily: 'PingFang SC',
        fontWeight: 'normal',
        fontStyle: 'normal',
      },
      position: pieTooltipPosition,
    },
    label: {
      show: true,
      position: 'outside',
      formatter: formatterPieLabel,
      rich: {
        label: rich.label,
      },
    },
    series: [
      {
        name: '工控指纹',
        type: 'pie',
        radius: ['30%', '60%'],
        center: ['50%', '50%'],
        data: [],
      },
    ],
  },
  //折线图
  {
    // canvas区域
    grid: {
      top: '15%',
      left: '3%',
      right: '5%',
      bottom: '5%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,0.70)',
      borderColor: '#596FDA',
      textStyle: {
        color: '#fff',
        lineHeight: 22,
        fontSize: 14,
        fontFmaily: 'PingFang SC',
        fontWeight: 'normal',
        fontStyle: 'normal',
      },
      formatter: formatterTooltip('数据量：'),
      //坐标轴指示器
      axisPointer: {
        // type: 'line',
        show: true,
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 1,
                color: 'rgba(89, 111, 218, 1)',
              },
              {
                offset: 0,
                color: 'rgba(89, 111, 218, 0)',
              },
            ],
          },
          type: 'solid',
        },
        // label: {
        //   show: true,
        // },
      },
    },
    xAxis: {
      type: 'category',
      name: '',
      data: [],
      interval: 'auto',
      //坐标轴名称显示位置
      nameLocation: 'middle',
      nameTextStyle: {
        color: '#BEC8F1',
        fontSize: 14,
        padding: [0, 0, 0, 0],
      },
      //x轴留白
      boundaryGap: false,
      axisLabel: {
        show: true,
        // margin: 50,
        // rotate: 30,
        // align: 'center',
        color: '#ACB7ED', //x轴文字颜色
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontSize: 12,
        fontWeight: 400,
      },
      // 坐标轴
      axisLine: {
        show: false,
        lineStyle: {
          color: '#4778C6',
        },
      },
      // 坐标轴刻度
      axisTick: {
        show: false,
        alignWithLabel: false,
      },
      // 背景分割线
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      // interval: 10,
      //坐标轴名称显示位置
      name: '',
      nameTextStyle: {
        color: '#BEC8F1',
        fontSize: 14,
        padding: [0, 0, 0, 0],
      },
      // 坐标轴
      axisLine: {
        show: false,
        onZero: true,
        lineStyle: {
          color: '#4778C6',
        },
      },
      axisLabel: {
        show: true,
        // 距离右侧图形距离，配合axisLabel.left 和 grid.left 使用
        // margin: 20,
        align: 'right',
        color: '#ACB7ED', //y轴文字颜色
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontSize: 12,
        fontWeight: 400,
      },
      // 背景分割线
      splitLine: {
        show: true,
        lineStyle: {
          color: '#2E3798',
          type: 'solid',
          width: 1,
        },
      },
    },
    series: [
      {
        // 折线数据
        data: [],
        type: 'line',
        // smooth: 0.4,
        // 坐标点类型
        symbol: 'circle',
        symbolSize: 8,
        // symbolSize: 0,
        showSymbol: false,
        // emphasis: { scale: 1 },
        // 设置坐标点
        itemStyle: {
          color: '#fff',
          // opacity: 0,
        },
        // 折线样式
        lineStyle: {
          width: 2,
          color: '#5B90FA',
        },
        // 区域样式
        areaStyle: {
          origin: 'start',
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 1,
                color: 'rgba(89, 111, 218, 0.5)',
              },
              {
                offset: 0,
                color: 'rgba(89, 111, 218, 0)',
              },
            ],
          },
        },
      },

      // {
      //   name: "警戒值",
      //   type: "line",
      //   // data: [],
      //   markLine: {
      //     symbol: "none", //去掉警戒线最后面的箭头
      //     silent: true, //鼠标悬停事件  true没有，false有
      //     label: {
      //       show: false,
      //       position: "middle", //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
      //       // formatter: "",
      //     },
      //     lineStyle: {
      //       //警戒线的样式  ，虚实  颜色
      //       type: "dashed",
      //       color: "#FF0000",
      //       width: 2,
      //     },
      //     data: [
      //       {
      //         yAxis: 80,
      //       },
      //     ],
      //   },
      // },
    ],
  },
  //表格
  {
    data: [],
  },
  //地图球面纹理
  {
    backgroundColor: '#21266A', //相当于海洋颜色
    geo: {
      type: 'map',
      map: 'world',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      boundingCoords: [
        [-180, 90],
        [180, -90],
      ],
      roam: false,
      selectedMode: 'single',
      select: {
        itemStyle: {
          areaColor: '#16C3AF',
        },
        label: {
          show: true,
          color: '#fff',
          fontSize: 14,
          fontFmaily: 'PingFang SC',
          fontWeight: 'normal',
          fontStyle: 'normal',
        },
      },
      emphasis: {
        disabled: true,
        itemStyle: {
          areaColor: '#16C3AF',
        },
        label: {
          show: true,
          color: '#fff',
          fontSize: 14,
          fontFmaily: 'PingFang SC',
          fontWeight: 'normal',
          fontStyle: 'normal',
        },
      },
      itemStyle: {
        areaColor: '#8A9AE5',
        borderColor: '#21266A',
      },
      label: {
        fontSize: 14,
        show: true,
        color: '#fff',
        fontFmaily: 'PingFang SC',
        fontWeight: 'normal',
        fontStyle: 'normal',
      },
      regions: regionData,
    },
    series: [
      //地图打点
      // {
      //   type: 'effectScatter',
      //   coordinateSystem: 'geo',
      //   data: [
      //     { name: 'Beijing', value: [116.405285, 39.904989] },
      //     { name: 'New York', value: [-74.005974, 40.712776] },
      //     { name: 'London', value: [-0.127758, 51.507351] },
      //   ],
      //   symbolSize: 12,
      //   showEffectOn: 'render',
      //   rippleEffect: {
      //     brushType: 'stroke',
      //   },
      //   hoverAnimation: true,
      //   itemStyle: {
      //     color: '#f4e925',
      //     shadowBlur: 10,
      //     shadowColor: '#333',
      //   },
      //   zlevel: 1,
      //   toolip: {
      //     show: true,
      //     formatter: (params: any) => console.log(params),
      //   },
      // },
    ],
  },
  //地球
  {
    backgroundColor: '#013954',
    globe: {
      baseTexture: null, // 基础纹理
      globeRadius: 150, // 球面内半径
      environment: '#2E3798', //整个容器的背景
      shading: 'color',
      viewControl: {
        alpha: 30,
        beta: 160,
        autoRotateSpeed: 10,
        autoRotate: true, // 开启自动旋转
        autoRotateAfterStill: 5, //鼠标停止操纵后，恢复自转时间
        distance: 200, //默认视角距离主体距离
        damping: 0, //鼠标旋转或缩放操作时的迟滞因子
        rotateSensitivity: 0.8, //旋转操作的灵敏度
        zoomSensitivity: 8, //缩放操作的灵敏度
      },
    },
  },
  //胶囊图
  {
    //设置图表位置
    grid: {
      left: '35%',
      right: '20%',
      top: '5%',
      bottom: '0%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: [
      {
        // name
        type: 'category',
        inverse: true,
        data: [],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          color: '#fff',
          fontSize: 14,
          fontFamily: 'PingFang SC',
          fontWeight: 500,
          align: 'left',
        },
      },
    ],
    series: [
      {
        // 内
        name: 'label image',
        type: 'bar',
        silent: true,
        label: {
          show: true,
          position: 'left',
          distance: 45,
          formatter: formatterBarSeriesLabelImg,
          rich: {
            bg1: rich.top1,
            bg2: rich.top2,
            bg3: rich.top3,
            bg4: rich.top4,
          },
        },
        data: [1, 2, 3, 4, 5],
        animationEasing: 'elasticOut',
      },
      {
        // 内
        name: '内框',
        type: 'bar',
        barWidth: 4,
        barCategoryGap: 20,
        silent: true,
        // showBackground: true,
        // backgroundStyle: {
        //   color: '#2C2C6C',
        // },
        itemStyle: {
          borderRadius: 2,
          color: {
            type: 'linear',
            colorStops: [
              {
                offset: 0,
                color: '#91B0F3',
              },
              {
                offset: 0.518,
                color: '#596FDA',
              },
              {
                offset: 1,
                color: '#16C3AF',
              },
            ],
          },
        },
        label: {
          show: true,
          position: 'left',
          distance: -10,
          formatter: formatterBarSeriesLabel(4, 'tooltip'),
          rich: {
            tooltipIndex: rich.tooltipIndex,
            tooltipName: rich.tooltipName,
            bg1: rich.top1,
            bg2: rich.top2,
            bg3: rich.top3,
            bg4: rich.top4,
          },
        },
        data: [],
        zlevel: 1,
        animationEasing: 'elasticOut',
      },
      {
        name: '外框',
        type: 'bar',
        silent: true,
        barWidth: 4,
        zlevel: 0,
        barGap: '-100%',
        data: [],
        itemStyle: {
          borderRadius: 2,
          color: '#2C2C6C',
        },
        label: {
          show: true,
          position: 'right',
          distance: 45,
          color: '#16C3AF',
          fontSize: 14,
          fontFamily: 'PingFang SC',
          fontWeight: 500,
          align: 'right',
          formatter: (params: any) => {
            return useCommonStore.getTempChartCityData[params.dataIndex]
          },
        },
      },
      {
        name: '截止矩形',
        type: 'scatter',
        emphasis: {
          scale: false,
        },
        symbol: 'rect',
        symbolSize: [2, 8],
        itemStyle: {
          color: '#fff',
          shadowColor: 'rgba(255,255,255,0.5)',
          shadowBlur: 15,
          borderWidth: 1,
          opacity: 1,
        },
        zlevel: 10,
        animationDelay: 500,
        data: [],
      },
    ],
  },
]
