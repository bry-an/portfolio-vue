import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import App from '@/App'
//@ means 'from root of project'

Vue.use(Router)

//works better to put actual component in component field rather than 'name' using its exported name
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       component: App 
//    },
//   ],
//   mode: 'history'
// })
