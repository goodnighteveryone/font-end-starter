// 密码校验
const validatePassword = (rule: any, value: string, callback: Function) => {
  const numRegex = new RegExp(/^[0-9a-zA-Z_]{8,}$/)
  if (!numRegex.test(value)) {
    callback(new Error('请输入8位以上的数字、字母、下划线组成的密码！'))
  } else {
    callback()
  }
}
const validateIp = (rule: any, value: string, callback: Function) => {
  if (!value) {
    callback(new Error('请输入IP值！'))
  } else if (!/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(value)) {
    callback(new Error('IP格式错误！'))
  } else {
    callback()
  }
}

const validateMac = (rule: any, value: string, callback: Function) => {
  if (!value) {
    callback(new Error('请输入Mac地址！'))
  } else if (!/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(value)) {
    callback(new Error('请输入正确的Mac地址'))
  } else {
    callback()
  }
}

const validateLength = (rule: any, value: number, callback: Function) => {
  if (!value && value !== 0) {
    callback(new Error('请输入数字！'))
  } else if (value === 0) {
    callback(new Error('请输入大于0的数字！'))
  } else if (!/^[0-9]*$/.test(value.toString())) {
    callback(new Error('请输入数字！'))
  } else {
    callback()
  }
}
const validateOffset = (rule: any, value: number, callback: Function) => {
  if (!value && value !== 0) {
    callback(new Error('请输入数字！'))
  } else if (!/^[0-9]*$/.test(value.toString())) {
    callback(new Error('请输入数字！'))
  } else {
    callback()
  }
}

export {
  validatePassword,
  validateIp,
  validateMac,
  validateLength,
  validateOffset,
}
