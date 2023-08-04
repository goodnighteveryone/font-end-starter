import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: (sessionStorage.getItem('TOKEN') ?? '') as string,
      userInfo: (JSON.parse(sessionStorage.getItem('USERINFO') as string) ??
        {}) as UserInfo,
    }
  },
  actions: {
    setToken(val: string) {
      this.token = val
      sessionStorage.setItem('TOKEN', val)
    },
    setUserInfo(val: UserInfo) {
      this.userInfo = val
      sessionStorage.setItem('USERINFO', JSON.stringify(val))
    },
    removeToken() {
      this.token = ''
      sessionStorage.removeItem('TOKEN')
    },
    removeUserInfo() {
      this.userInfo = {} as UserInfo
      sessionStorage.removeItem('USERINFO')
    },
  },
  getters: {},
})
