// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import navbar from './components/NavBar'
import home from './components/Home'
import About from './components/About'
import FixedFooter from './components/FixedFooter'
import PortfolioItem from './components/PortfolioItem'
import Contact from './components/Contact'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, navbar, home, About, FixedFooter, PortfolioItem, Contact},
  template: '<App/>'
})
