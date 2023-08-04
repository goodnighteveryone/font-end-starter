import axios, { type AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { usePiniaStore } from '@/stores'
import { API_BASE_URL } from '@/constants'
import { DecryptData, EncryptData } from '@/utils/crypto'
import router from '@/router'

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {
    code: number
  }
}

// axios.defaults.baseURL = 'http://127.0.0.1:4523/m1/2677210-0-default'
axios.defaults.baseURL = API_BASE_URL
axios.defaults.timeout = 10 * 1000
axios.defaults.withCredentials = true
const { useUserStore } = usePiniaStore()

// 请求拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig | any): AxiosRequestConfig | any => {
    const { token } = useUserStore
    if (token) config.headers.token = token
    // if (config.method === 'post') {
    //   config.data = { info: EncryptData(JSON.stringify(config.data)) }
    // }
    return config
  },
  (error: any): any => {
    return Promise.reject(error)
  }
)
// 响应拦截器
axios.interceptors.response.use(
  (response: AxiosResponse | any): AxiosResponse | any => {
    if (!response) return Promise.reject({ msg: 'No response!' })
    // if (typeof response.data.data === 'string') {
    //   response.data.data = DecryptData(response.data.data)
    //   response.data.data = JSON.parse(response.data.data)
    // }
    const { status, data } = response
    if (status !== 200) return Promise.reject({ response })
    const { code, msg } = data
    if (code !== 200) {
      ElMessage.error({ message: msg })
      return Promise.resolve(data)
    }
    return Promise.resolve(data)
  },
  (error: any): any => {
    console.log('error', error)
    const res = error
    const code = res && res.code
    const message = res && res.message
    if (res.response.status !== 200) {
      ElMessage.error({ message: `${code}, ${message}` })
    }
    return Promise.reject(error)
  }
)

// const http: IHttp = {
//   request(method, url, data) {
//     return axios({
//       method: method,
//       url: url,
//       data: data,
//     })
//   },
// }

export default axios
