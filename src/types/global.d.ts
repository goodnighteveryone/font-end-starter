// 声明文件，定义全局变量
declare module 'crypto-js'
declare module 'echarts-gl/components'
declare interface IHttp {
  request<T>(method: string, url: string, params?: unknown): Promise<T>
}

interface HeaderMenu {
  name: string
  path?: string
  icon: string
}

//  菜单接口类型

interface INavMenus {
  name: string
  url: string
  icon?: any
  children?: INavMenus[]
  // [key: string]: any
}

interface FormType {
  rowGutter: number
  formItem: FormItemType[]
}

interface FormItemType {
  type: string
  key: string
  value: string | number | string[]
  label: string
  inputType?: string
  placeholder?: string
  disabled?: boolean
  icon?: string
  suffixText?: string
  autosize?: { minRows: number; maxRows: number }
  maxlength?: number
  showWordLimit?: boolean
  showPassword?: boolean
  options?: { [key: string]: string; value: string }[]
  clearable?: boolean
  colSpan?: number
  isVisible: boolean
  className?: string
  event?: Function
  keyboardEvent?: Function
}

interface FormFooterBtn {
  isVisible: boolean
  leftBtnText?: string
  leftBtnClass?: string
  leftIsVisible?: boolean
  rightBtnText?: string
  rightBtnClass?: string
  rightIsVisible?: boolean
}

interface FormLabel {
  labelPosition?: EpPropMergeType<StringConstructor, 'top' | 'right' | 'left', unknown> | undefined
  labelWidth?: string
}

interface TableType {
  headerCellStyle: { [key: string]: string | number }
  cellStyle: { [key: string]: string | number }
  class?: string
  stripe?: boolean
  highlightCurrentRow?: boolean
  key?: string
  rowKey?: string
  isShowSelection?: boolean
  // isShowExpand?: boolean
  // expandWidth?: string
}

interface TableColumnType {
  prop: string
  label?: string
  width?: string
  minWidth?: string
  align?: string
  type?: string
  showOverflowTooltip?: boolean
  formatter?: (
    row: any,
    column: TableColumnCtx<any>,
    cellValue: any,
    index: number
  ) => string | VNode<RendererNode, RendererElement, {}>
}

interface NormalObject {
  [key: string]: string
}
