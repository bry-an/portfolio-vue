
<template>
<div id = "portfolio">
    <h2 id = "section-title">FEATURED</h2>
    <p>(This site would like you to know that it's a proudly-built Vue.js app.)</p>
    <PortfolioItem v-for='item in portfolioItems' 
      :key='item.name' 
      :name='item.name'
      :still='item.still'
      :gif='item.gif'
      :technologies='item.technologies'
      :githubLink='item.githubLink'
      :liveLink='item.liveLink'
      :problem='item.problem' 
      :solution='item.solution'
      :id='item.id'
      />


    </div>
</template>


<script>
import PortfolioItem from "./PortfolioItem";
import portfolioItems from "../data/portfolioItems";
export default {
  name: "Portfolio",
  methods: {
    portfolioClickHandler(url) {
      window.open(url);
    }
  },
  data() {
    return {
      portfolioItems
    };
  },
  components: { PortfolioItem }
};
</script>
<style lang="sass">

@import url("https://fonts.googleapis.com/css?family=Roboto")

#portfolio 
  max-width: 80%
  margin: auto
  display: grid
  grid-template-colums: repeat(auto-fit, minmax(200px, 1fr))
  grid-gap: 10px
  margin-top: 40px
  p
    text-align: center
    font-family: "Raleway", "sans-serif"
    font-size: 1.8rem

</style>