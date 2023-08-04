import { createPinia } from 'pinia'

// 创建
const pinia = createPinia()

// 导出
export default pinia

import { useUserStore } from './modules/user'
import { useCommonStore } from './modules/common'
export const usePiniaStore = () => {
  return {
    useUserStore: useUserStore(),
    useCommonStore: useCommonStore(),
  }
}
