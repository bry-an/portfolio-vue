<template>
  <div class="student-projects">
    <h2 class="student-projects-header">STUDENT PROJECTS</h2>
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
import PortfolioItem from "./PortfolioItem.vue";
import portfolioItems from "../data/portfolioItems.js";
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
<style lang="scss" scoped>
.student-projects {
  font-family: "Raleway", "sans-serif";
  padding-top: 70px;
  p {
    text-align: center;
    font-size: 2rem;
  }
  .student-projects-header {
    color: #444;
    font-family: "Roboto", "sans-serif";
    text-align: center;
  }
}
</style>



