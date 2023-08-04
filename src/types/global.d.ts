// 声明文件，定义全局变量
// declare module 'crypto-js'
declare interface IHttp {
  request<T>(method: string, url: string, params?: unknown): Promise<T>
}
// user
declare type UserInfo<T = any> = {
  userName: string
  role: string
  auth: string
  level?: string
  // admin auditor security
  lockTime?: number
  password?: string
  isFirst?: boolean | undefined
}
