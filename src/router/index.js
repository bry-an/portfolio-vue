import Vue from 'vue'
import Router from 'vue-router'
const StudentProjects = () => import("@/components/StudentProjects")
const MainAbout = () => import("@/views/MainAbout")
//@ means 'from root of project'

Vue.use(Router)

// works better to put actual component in component field rather than 'name' using its exported name
export default new Router({
  routes: [
    {
      path: '*',
      redirect: { name: "home" },
    },
    {
      path: "/",
      component: MainAbout,
      name: "home"
    },
    {
      path: "/projects",
      component: StudentProjects
    },
  ],
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }

  }
})