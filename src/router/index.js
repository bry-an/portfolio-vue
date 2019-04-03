import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import StudentProjects from "@/components/StudentProjects"
import MainAbout from "@/views/MainAbout"
//@ means 'from root of project'

Vue.use(Router)

// works better to put actual component in component field rather than 'name' using its exported name
export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: "/",
          component: MainAbout
        },
        {
          path: "/projects",
          component: StudentProjects
        }
      ]
    },

  ],
  mode: 'history'
})

