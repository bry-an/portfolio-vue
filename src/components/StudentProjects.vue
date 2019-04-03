<template>
  <div class="student-projects">
    <p>Back from when I was working on my full stack bonafides</p>
    
    <PortfolioItem
      v-for="item in portfolioItems"
      :key="item.name"
      :name="item.name"
      :still="item.still"
      :gif="item.gif"
      :technologies="item.technologies"
      :githubLink="item.githubLink"
      :liveLink="item.liveLink"
      :problem="item.problem"
      :solution="item.solution"
      :id="item.id"
    />
  </div>
</template>

<script>
import PortfolioItem from "@/components/PortfolioItem";
import portfolioItems from "../data/portfolioItems";
export default {
  name: "StudentProjects",
  data() {
    return {
      portfolioItems
    };
  },
  components: { PortfolioItem }
};
</script>
<style lang="sass" scoped>
.student-projects
  font-family: "Raleway", "sans-serif";
  padding-top: 70px
  p
    text-align: center
    font-size: 2rem
</style>



