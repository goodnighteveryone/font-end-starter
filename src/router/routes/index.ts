import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 * 先写死，后面再根据登录信息动态组合
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/',
    name: '/',
    component: () => import('@/layout/index.vue'), //布局页
    meta: {
      title: '首页',
    },
    children: [
      // {
      //   path: '/index',
      //   name: 'index',
      //   component: () => import('@/views/Index.vue'),
      //   meta: {
      //     title: '首页',
      //   },
      // },
      {
        path: '/userManage',
        name: 'userManage',
        component: () => import('@/views/root/UserManage.vue'),
        meta: {
          title: '用户管理',
          requiredRole: ['root'],
        },
      },
      {
        path: '/personalSetting',
        name: 'personalSetting',
        component: () => import('@/components/PersonalSetting.vue'),
        meta: {
          title: '个人设置',
          requiredRole: ['root', 'admin', 'auditor', 'security'],
        },
      },
      {
        path: '/editPassWord',
        name: 'editPassWord',
        component: () => import('@/components/EditPassword.vue'),
        meta: {
          title: '修改密码',
          requiredRole: ['root', 'admin', 'auditor', 'security'],
        },
      },
      {
        path: '/auditorSetting',
        name: 'auditorSetting',
        component: () => import('@/views/admin/advanced/index.vue'),
        meta: {
          title: '系统设置',
          requiredRole: ['admin'],
        },
      },
      {
        path: '/statusMonitor',
        name: 'statusMonitor',
        component: () => import('@/views/admin/components/StatusMonitor.vue'),
        meta: {
          title: '状态监控',
          requiredRole: ['admin'],
        },
      },
      {
        path: '/deviceInfo',
        name: 'deviceInfo',
        component: () => import('@/views/safer/DeviceInfo.vue'),
        meta: {
          title: '设备详情',
          requiredRole: ['security'],
        },
      },
      {
        path: '/operationLog',
        name: 'operationLog',
        component: () => import('@/views/auditor/OperationLog.vue'),
        meta: {
          title: '操作日志',
          requiredRole: ['auditor'],
        },
      },
      {
        path: '/trafficLog',
        name: 'trafficLog',
        component: () => import('@/views/auditor/TrafficLog.vue'),
        meta: {
          title: '流量日志',
          requiredRole: ['auditor'],
        },
      },
      {
        path: '/analysis',
        name: 'analysis',
        component: () => import('@/views/auditor/Analysis.vue'),
        meta: {
          title: '统计分析',
          requiredRole: ['auditor'],
        },
      },
      {
        path: '/403',
        name: '403',
        component: () => import('@/views/false/403.vue'),
        meta: {
          title: '403',
        },
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/false/404.vue'),
        meta: {
          title: '404',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
]

export default routes
