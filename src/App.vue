<template>
  <div id="app">
    <div class="top-container">
      <Navbar/>
    </div>
    <FixedFooter/>
    <router-view/>
    <BottomFooter/>
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";
import FixedFooter from "./components/FixedFooter.vue";
import BottomFooter from "./components/BottomFooter.vue";
export default {
  name: "App",
  components: {
    Navbar,
    FixedFooter,
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