import type { App } from 'vue'

/**
 * 按钮波浪指令
 * @directive 默认方式：v-waves，如 `<div v-waves></div>`
 * @directive 参数方式：v-waves=" |light|red|orange|purple|green|teal"，如 `<div v-waves="'light'"></div>`
 */
export function wavesDirective(app: App) {
  app.directive('waves', {
    mounted(el, binding) {
      el.classList.add('waves-effect')
      binding.value && el.classList.add(`waves-${binding.value}`)
      function setConvertStyle(obj: { [key: string]: unknown }) {
        let style: string = ''
        for (let i in obj) {
          /**no-prototype-builtins */
          if (Object.hasOwnProperty.call(obj, i)) style += `${i}:${obj[i]};`
        }
        return style
      }
      function onCurrentClick(e: { [key: string]: unknown }) {
        let elDiv = document.createElement('div')
        elDiv.classList.add('waves-ripple')
        el.appendChild(elDiv)
        let styles = {
          left: `${e.layerX}px`,
          top: `${e.layerY}px`,
          opacity: 1,
          transform: `scale(${(el.clientWidth / 100) * 10})`,
          'transition-duration': `750ms`,
          'transition-timing-function': `cubic-bezier(0.250, 0.460, 0.450, 0.940)`,
        }
        elDiv.setAttribute('style', setConvertStyle(styles))
        setTimeout(() => {
          elDiv.setAttribute(
            'style',
            setConvertStyle({
              opacity: 0,
              transform: styles.transform,
              left: styles.left,
              top: styles.top,
            })
          )
          setTimeout(() => {
            elDiv && el.removeChild(elDiv)
          }, 750)
        }, 450)
      }
      el.removeEventListener('mousedown', onCurrentClick, false)
      el.addEventListener('mousedown', onCurrentClick, false)
    },
    beforeUnmount(el) {
      el.removeEventListener('mousedown', () => {})
    },
  })
}

/**
 * 用户权限指令
 * @directive 单个权限验证（v-auth="xxx:xxx"）前一个是角色，后一个是权限
 */
export function authDirective(app: App) {
  // 单个权限验证（v-auth="xxx"）
  app.directive('auth', {
    mounted(el, binding) {
      const { value } = binding
      const userInfo = JSON.parse(sessionStorage.getItem('USERINFO') as string)
      const [curRole, curAuth] = value.split(':')
      const { auth, role } = userInfo
      if (auth !== curAuth || role !== curRole) {
        el.parentNode.removeChild(el)
      }
    },
  })
}

/**
 *
 * @directive 默认方式：v-debounce="对应的函数" 默认延迟300ms
 * @directive 参数方式 v-debounce:500="对应的函数", 如果函数带有参数，则应该使用箭头函数，如v-debounce:500="() => 对应的函数(item)" 延迟改为500ms
 */
export function debounceDirective(app: App) {
  app.directive('debounce', {
    mounted(el, binding) {
      const { value, arg } = binding
      const delay = Number(arg) || 300
      el.timer = null
      if (typeof value != 'function') return
      el.addEventListener('click', (e: Event) => {
        e.stopPropagation()
        if (el.timer) {
          clearTimeout(el.timer)
          el.timer = null
        }
        el.timer = setTimeout(() => {
          el.timer = null
          value()
        }, delay)
      })
    },
    beforeUnmount(el) {
      if (el.timer) {
        clearTimeout(el.timer)
        el.timer = null
      }
      el.removeEventListener('click', () => {})
    },
  })
}
