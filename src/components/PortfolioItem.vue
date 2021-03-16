<template>
  <div class="portfolio-item">
    <div class="portfolio-item-heading">{{name}}</div>
    <a :href="liveLink" target="_blank">

      <img
        :src="still"
        :id="id"
        :alt="name"
        class="portfolio-item-img"
        @mouseover="animateGif(id)"
        @mouseout="stopGif(id)"
      >
    </a>
    <p
      class="portfolio-item-img-sub"
    >I'm a Gif. Move your mouse over me to animate, or click to visit the app.</p>
    <a :href="githubLink" target="_blank">
      <img src="/static/github-logo.png" class="github-img" alt="github link">
    </a>
    <ul>
      <li>
        <h5>The Problem</h5>
        {{problem}}
      </li>
      <li>
        <h5>The Solution</h5>
        {{solution}}
      </li>
      <li>
        <h5>Primary Technologies</h5>
        <div class="technologies-list">
          <TechnologyIcon v-for="icon in technologyIcons" :image="icon" :key="icon"/>
        </div>
      </li>

      <hr>
    </ul>
  </div>
</template>
<script>
import TechnologyIcon from "./TechnologyIcon.vue";
export default {
  name: "PortfolioItem",
  props: [
    "id",
    "name",
    "still",
    "gif",
    "technologies",
    "githubLink",
    "liveLink",
    "problem",
    "solution"
  ],
  methods: {
    animateGif: function(el) {
      document.getElementById(el).setAttribute("src", this.gif);
    },
    stopGif: function(el) {
      document.getElementById(el).setAttribute("src", this.still);
    }
  },
  components: { TechnologyIcon },
  data() {
    return {
      technologyIcons: this.technologies
    };
  }
};
</script>
<style lang="sass" scoped>

.portfolio-item
    font-family: "Raleway", "sans-serif"
    justify-self: center
    text-align: center
    .portfolio-item-img
        border-radius: 3px
        width: 100%
        max-width: 769px
        height: auto
        margin: 0 auto 10px auto
        border: 1px solid #ccc
        display: block
    
    .portfolio-item-img-sub
        font-size: 1.5rem !important
        margin-bottom: 5px
        text-align: center
    .github-img
        text-align: center
    .portfolio-item-heading
        font-size: 3rem
        text-align: center
    .technologies-list
        text-align: center

ul
    list-style: none
li  
    text-align: center
    max-width: 600px
    font-size: 1.8rem
    margin: auto
    h5
        margin-top: 20px
        margin-bottom: 5px
        
    
</style> 
