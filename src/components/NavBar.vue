<template>
  <div class="row menu u-max-full-width">
    <ul>
      <router-link to="home"><li class="nav-align-left">{ bryan yunis }</li></router-link>
      <a href = 'https://www.linkedin.com/in/bryan-yunis' target="_blank">
      <img src="@/assets/images/linkedin-logo-white.svg" class="nav-logo"></a>
      <a href = 'https://github.com/bry-an' target="_blank">
      <img src="@/assets/images/github.png" class="nav-logo"></a>
      <li v-on:click="handleAnchorScroll('contact')" class="nav-item" id="contact-menu">Contact</li>
      <li v-on:click="handleAnchorScroll('portfolio')" class="nav-item" id="portfolio-menu">Projects</li>
      <li v-on:click="handleAnchorScroll('approach')" class="nav-item" id="about-menu">About</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  methods: {
    handleNavbarScroll(event) {
      if (this.$route.path === "/projects") {
        document.querySelector(".menu").classList.add("menu-scrolled");
      } else if (window.scrollY > 10) {
        document.querySelector(".menu").classList.add("menu-scrolled");
      } else document.querySelector(".menu").classList.remove("menu-scrolled");
    },
    handleAnchorScroll(id) {
      if (this.$route.path === "/projects") {
        this.$router.push(`/#${id}`)
      }
      else {
        document.getElementById(id).scrollIntoView({
          behavior: "smooth",
        block: "start"
      });
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleNavbarScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleNavbarScroll);
  },
  mounted() {
    this.handleNavbarScroll()
  }
};
</script>
<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Patua+One")
.menu  
  position: fixed
  width: 100%
  margin: auto
  z-index: 2
  padding: 0

  ul 
    list-style: none


  .nav-item 
    float: right
    margin-right: 30px
    color: white
    margin-top: 1%
    font-family: "Raleway", sans-serif
    cursor: pointer
  .nav-align-left
    float: left
    color: white
    margin-top: 1%
    margin-left: 1%
    cursor: pointer
    font-family: "Patua One", cursive
.menu-scrolled 
  background-color: #ff5d4c
.nav-logo
  width: 30px
  margin-top: 1.5%
  margin-left: 1%
  cursor: pointer
@media (min-width: 400px) 
  .nav-item 
    font-size: 2rem 
  .nav-align-left
    font-size: 2.0rem
@media (min-width: 600px)
  .nav-item
    font-size: 2.5rem
  .nav-align-left
    font-size: 2.5rem
</style>