import axios, { type AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'
import { usePiniaStore } from '@/stores'
import { API_BASE_URL } from '@/constants'
import { DecryptData, EncryptData } from '@/utils/crypto'
import router from '@/router'

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {
    code: number
    msg: string
    data: T
  }
}

const customRequest = () => {
  const service: AxiosInstance = axios.create({
    timeout: 10 * 1000,
    baseURL: API_BASE_URL,
    withCredentials: true,
  })
  return service
}

const service = customRequest()
const { useUserStore } = usePiniaStore()

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig | any): AxiosRequestConfig | any => {
    const { token } = useUserStore
    if (token) config.headers.token = token
    return config
  },
  (error: any): any => {
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse | any): AxiosResponse | any => {
    const { data } = response
    const { code, msg } = data
    if (code !== 200) {
      ElMessage.error({ message: msg })
      return Promise.reject(data)
    }
    return Promise.resolve(data)
  },
  (error: any): any => {
    if (!error) return Promise.reject({ msg: 'No response!' })
    console.log('error', error)
    const res = error
    const code = res && res.code
    const message = res && res.message
    ElMessage.error({ message: `${code}, ${message}` })
    return Promise.reject(error)
  }
)

export default service
