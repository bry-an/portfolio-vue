
<template>
  <div id="app">
    <div class="top-container">
      <Navbar/>
      <!-- <router-link to="/firstroute/bry">Go To First Route</router-link> -->
      <!-- below name specification is not necessary but would allow params to be passed if specified in route path as :param -->
      <!-- <router-link :to="{name: 'FirstRoute'}">FirstRoute</router-link> -->
      <!-- router-view is for anything that you want for a different page -->
      <FixedFooter/>
      <Header/>
    </div>
    <div class="body-container">
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
    <BottomFooter/>
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";
import Header from "./components/Header";
import About from "./components/About";
import FixedFooter from "./components/FixedFooter";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import BottomFooter from "./components/BottomFooter";
export default {
  name: "App",
  components: {
    Navbar,
    About,
    FixedFooter,
    Header,
    Portfolio,
    Contact,
    BottomFooter
  }
};
</script>

<style>
@import "/assets/css/skeleton.css";
@import "/assets/css/style.css";
@import "https://fonts.googleapis.com/css?family=Raleway";
#app {
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.top-container {
  padding: 0;
  height: 100%;
  width: 100%;
}

.body-container {
  width: 95%;
  margin: auto;
}

.responsive {
  max-width: 100%;
  height: auto;
  max-height: 90%;
}
</style>
