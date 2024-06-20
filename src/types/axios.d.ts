import axios from 'axios'
declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {
    code: number
    msg: string
    data: StandardResp
  }
}

//.then((res: StandardResp<LoginResp>) => {}
