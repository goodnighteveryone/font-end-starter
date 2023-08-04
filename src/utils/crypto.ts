import CryptoJS from 'crypto-js'
const key = CryptoJS.enc.Utf8.parse('abcdef0123456789')
const iv = CryptoJS.enc.Utf8.parse('abcdef0123456789')

// 加密
const EncryptData = (data: any) => {
  let srcs = CryptoJS.enc.Utf8.parse(data)
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.CBC,
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
  })
  // 字符串包括了密文、加密算法、IV等信息，通常是个base64编码的字符串
  // return encrypted.toString()
  // 只返回加密后的密文，往往是16进制的字符串
  // return encrypted.ciphertext.toString()
  // 返回经过base64编码加密后的密文
  return encrypted.ciphertext.toString(CryptoJS.enc.Base64)
}

// 解密
const DecryptData = (data: any) => {
  let stime = new Date().getTime()
  // let encryptedHex = CryptoJS.enc.Hex.parse(data)
  // let decrypt = CryptoJS.AES.decrypt({ ciphertext: encryptedHex }, key, {
  let decrypt = CryptoJS.AES.decrypt(data, key, {
    mode: CryptoJS.mode.CBC,
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
  })
  let result = decrypt.toString(CryptoJS.enc.Utf8)
  // let result = JSON.parse(CryptoJS.enc.Utf8.stringify(decrypt).toString())
  let etime = new Date().getTime()
  console.log('DecryptData Time:' + (etime - stime))
  return result.toString()
}

export { EncryptData, DecryptData }
