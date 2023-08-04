import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
  state: () => {
    return {
      lockTime: (Number(sessionStorage.getItem('LOCKTIME')) || 30) as number,
    }
  },
  actions: {
    setLockTime(val: number) {
      if (!val) val = 5
      this.lockTime = val
      sessionStorage.setItem('LOCKTIME', val.toString())
    },
  },
  getters: {},
})
