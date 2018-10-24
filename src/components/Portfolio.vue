
<template>
<div id = "portfolio">
    <h2 id = "section-title">FEATURED</h2>
    <PortfolioItem v-for='item in portfolioItems' 
      :key='item.name' 
      :name='item.name'
      :image='item.image'
      :technologies='item.technologies'
      :githubLink='item.githubLink'
      :liveLink='item.liveLink'
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

</style>