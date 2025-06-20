import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import baoxian from '@/views/modules/baoxian/list'
    import baoxianOrder from '@/views/modules/baoxianOrder/list'
    import diaochaYuyue from '@/views/modules/diaochaYuyue/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import gonggao from '@/views/modules/gonggao/list'
    import shigu from '@/views/modules/shigu/list'
    import shiguYuyue from '@/views/modules/shiguYuyue/list'
    import xianchang from '@/views/modules/xianchang/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yuangong from '@/views/modules/yuangong/list'
    import config from '@/views/modules/config/list'
    import dictionaryBaoxian from '@/views/modules/dictionaryBaoxian/list'
    import dictionaryBaoxianOrder from '@/views/modules/dictionaryBaoxianOrder/list'
    import dictionaryDiaochaYuyueYesno from '@/views/modules/dictionaryDiaochaYuyueYesno/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShigu from '@/views/modules/dictionaryShigu/list'
    import dictionaryShiguYuyueYesno from '@/views/modules/dictionaryShiguYuyueYesno/list'
    import dictionaryXianchang from '@/views/modules/dictionaryXianchang/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBaoxian',
        name: '保险类型',
        component: dictionaryBaoxian
    }
    ,{
        path: '/dictionaryBaoxianOrder',
        name: '订单类型',
        component: dictionaryBaoxianOrder
    }
    ,{
        path: '/dictionaryDiaochaYuyueYesno',
        name: '报名状态',
        component: dictionaryDiaochaYuyueYesno
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShigu',
        name: '事故调查类型',
        component: dictionaryShigu
    }
    ,{
        path: '/dictionaryShiguYuyueYesno',
        name: '报名状态',
        component: dictionaryShiguYuyueYesno
    }
    ,{
        path: '/dictionaryXianchang',
        name: '现场勘查类型',
        component: dictionaryXianchang
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/baoxian',
        name: '保险',
        component: baoxian
      }
    ,{
        path: '/baoxianOrder',
        name: '保险订单',
        component: baoxianOrder
      }
    ,{
        path: '/diaochaYuyue',
        name: '调查申请',
        component: diaochaYuyue
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/shigu',
        name: '事故调查',
        component: shigu
      }
    ,{
        path: '/shiguYuyue',
        name: '理赔申请',
        component: shiguYuyue
      }
    ,{
        path: '/xianchang',
        name: '现场勘查',
        component: xianchang
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yuangong',
        name: '事故调查员',
        component: yuangong
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
