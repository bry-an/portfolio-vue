<template>
  <div>
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
  components: PortfolioItem
};
</script>

