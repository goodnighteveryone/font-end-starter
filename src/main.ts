import { createApp } from 'vue'
import '@/styles/layout.scss'
import '@/styles/transition.scss'
import '@/styles/common.scss'
import '@/styles/element.scss'
import '@/styles/waves.scss'
import App from './App.vue'
import router from './router'
import store from './stores'
// 引入注册脚本
import 'virtual:svg-icons-register'
// 引入组件
import SvgIcon from '@/components/SvgIcon.vue'
import { directive } from '@/directive/index'
// import echarts from '@/utils/echarts'
// import 'element-plus/theme-chalk/el-message.css'
// import 'element-plus/theme-chalk/el-message-box.css'
const app = createApp(App)
// app.config.globalProperties.echarts = echarts
directive(app)
// 全局组件挂载
app.component('svg-icon', SvgIcon)
app.use(store).use(router).mount('#app')
