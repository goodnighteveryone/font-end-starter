/**
 * @export 生成指定位数的随机密码（数字、字母、下划线）
 * @param {number}length 确定生成的密码位数，默认8位
 * @param {string} chars 随机数种子
 * @returns {string} 返回随机密码
 */
const generateRandomString = (chars: string, length = 8): string => {
  let result = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    result += chars.charAt(randomIndex)
  }
  return result
}

/**
 * @export 获取当前时间并格式化
 * @param {boolean} isDate 为真返回年月日时分秒 为假只返回年月日 默认为真
 * @return {string} yyyy-MM-dd hh:mm:ss
 */
const getNowTime = (isDate: boolean = true): string => {
  const now = new Date()
  const year = now.getFullYear() //  得到年份
  let month: number | string = now.getMonth() + 1 //  得到月份
  let date: number | string = now.getDate() //  得到日期
  let hh: number | string = now.getHours()
  let mm: number | string = now.getMinutes()
  let ss: number | string = now.getSeconds()
  hh = padZero(hh)
  mm = padZero(mm)
  ss = padZero(ss)
  month = padZero(month)
  date = padZero(date)
  let hour = hh + ':' + mm + ':' + ss // 默认时分秒 如果传给后台的格式为年月日时分秒，就需要加这个，如若不需要，此行可忽略
  let defaultDate = `${year}-${month}-${date} ${hour}`
  if (!isDate) {
    defaultDate = `${year}-${month}-${date}`
  }
  return defaultDate
}

const formatDate = (date: string) => {
  const dateObj = new Date(date)
  // console.log(dateObj)
  const year = dateObj.getFullYear()
  const month = padZero(dateObj.getMonth() + 1)
  const day = padZero(dateObj.getDate())
  const hour = padZero(dateObj.getHours())
  const minute = padZero(dateObj.getMinutes())
  const second = padZero(dateObj.getSeconds())
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

const padZero = (num: number) => {
  return num.toString().padStart(2, '0')
}

export { generateRandomString, getNowTime, formatDate }
