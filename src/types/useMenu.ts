import {
  Setting,
  User,
  HomeFilled,
  Tools,
  Odometer,
  Compass,
  Notebook,
  SetUp,
  Histogram,
} from '@element-plus/icons-vue'
import { INavMenus } from './common'
import { usePiniaStore } from '@/stores'
const { useUserStore } = usePiniaStore()
const commonMenu: INavMenus[] = [
  { name: '用户管理', url: './userManage', icon: User },
  { name: '个人设置', url: './personalSetting', icon: Tools },
]
const adminMenu: INavMenus[] = [
  { name: '状态监控', url: './statusMonitor', icon: Odometer },
  { name: '个人设置', url: './personalSetting', icon: Tools },
]

const auditorMenu: INavMenus[] = [
  { name: '流量日志', url: './trafficLog', icon: Notebook },
  { name: '操作日志', url: './operationLog', icon: SetUp },
  { name: '个人设置', url: './personalSetting', icon: Tools },
]

const securityMenu: INavMenus[] = [
  { name: '设备详情', url: './deviceInfo', icon: Compass },
  { name: '个人设置', url: './personalSetting', icon: Tools },
]
const allMenu: INavMenus[] = [
  // { name: '首页', url: './index', icon: HomeFilled },
  { name: '用户管理', url: './userManage', icon: User },
  { name: '个人设置', url: './personalSetting', icon: Tools },
  // { name: '修改密码', url: './editPassWord', icon: Tools },
  { name: '管理端设置', url: './auditorSetting', icon: Setting },
  { name: '状态监控', url: './statusMonitor', icon: Odometer },
  { name: '设备详情', url: './deviceInfo', icon: Compass },
  { name: '流量日志', url: './trafficLog', icon: Notebook },
  { name: '操作日志', url: './operationLog', icon: SetUp },
  { name: '统计分析', url: './analysis', icon: Histogram },
]

const ROLE_MENU_MAP: any = {
  admin: {
    root: [...commonMenu],
    high: [
      ...adminMenu,
      { name: '管理端设置', url: './auditorSetting', icon: Setting },
    ],
    low: [...adminMenu],
  },
  auditor: {
    root: [...commonMenu],
    high: [
      { name: '统计分析', url: './analysis', icon: Histogram },
      ...auditorMenu,
    ],
    low: [...auditorMenu],
  },
  security: {
    root: [...commonMenu],
    high: [...securityMenu],
    low: [...securityMenu],
  },
  root: {
    root: [...allMenu],
  },
}

export const useMenu = () => {
  const { userInfo } = useUserStore
  const { role, auth } = userInfo
  const items = ROLE_MENU_MAP[role][auth] || allMenu
  return {
    items,
  }
}
