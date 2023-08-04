export interface INavMenu {
  name: string
  url: string
  icon?: any
  // [key: string]: any
}

export interface INavMenus {
  name: string
  url: string
  icon?: any
  child?: INavMenu
  // [key: string]: any
}
