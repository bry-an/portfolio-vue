<template>
  <div id="skills">
    <h2 id="section-title">SKILLS</h2>
    <p>
      I might feel most alive when I'm neck-deep in unfamiliar code, but I have gained experience
      with the following technologies:
    </p>
    <div id="tech-input-container">
      <div class="tech-input">
        <input type="radio" id="btn-all" v-model="selected" value="all" @change="allClicked">
        <span class="label body">All</span>
      </div>
      <div class="tech-input">
        <input
          type="radio"
          id="btn-frontend"
          v-model="selected"
          value="frontend"
          @change="frontendClicked"
        >
        <span class="label body">Frontend</span>
      </div>
      <div class="tech-input">
        <input
          type="radio"
          id="btn-backend"
          v-model="selected"
          value="backend"
          @change="backendClicked"
        >
        <span class="label body">Backend</span>
      </div>
      <div class="tech-input">
        <input
          type="radio"
          id="btn-technologies"
          v-model="selected"
          value="technologies"
          @change="technologiesClicked"
        >
        <span class="label body">Tools & Tech</span>
      </div>
    </div>

    <div class="skills-container">
      <SkillsItem
        v-show="displayAll"
        v-for="skill in skills"
        :name="skill.name"
        :key="skill.key"
        :image="skill.image"
        :type="skill.type"
      />
      <SkillsItem
        v-show="displayFrontend"
        v-for="skill in frontend"
        :name="skill.name"
        :key="skill.key"
        :image="skill.image"
        :type="skill.type"
      />
      <SkillsItem
        v-show="displayBackend"
        v-for="skill in backend"
        :name="skill.name"
        :key="skill.key"
        :image="skill.image"
        :type="skill.type"
      />
      <SkillsItem
        v-show="displayTechnologies"
        v-for="skill in technologies"
        :name="skill.name"
        :key="skill.key"
        :image="skill.image"
        :type="skill.type"
      />
    </div>
  </div>
</template>

<script>
import skills from "../data/skills";
import SkillsItem from "./skillsItem";

export default {
  name: "Skills",
  methods: {
    frontendClicked() {
      this.displayAll = false;
      this.displayBackend = false;
      this.displayTechnologies = false;
      this.displayFrontend = true;
    },
    backendClicked() {
      this.displayAll = false;
      this.displayFrontend = false;
      this.displayTechnologies = false;
      this.displayBackend = true;
    },
    technologiesClicked() {
      this.displayAll = false;
      this.displayFrontend = false;
      this.displayBackend = false;
      this.displayTechnologies = true;
    },
    allClicked() {
      this.displayAll = true;
      this.displayFrontend = false;
      this.displayTechnologies = false;
      this.displayBackend = false;
    }
  },
  computed: {
    frontend() {
      return Object.freeze(this.skills.filter(skill => skill.type.indexOf("frontend") !== -1));
    },
    backend() {
      return Object.freeze(this.skills.filter(skill => skill.type.indexOf("backend") !== -1));
    },
    technologies() {
      return Object.freeze(this.skills.filter(
        skill => skill.type.indexOf("technologies") !== -1
      ));
    }
  },
  data() {
    return {
      skills,
      displayFrontend: false,
      displayBackend: false,
      displayTechnologies: false,
      displayAll: true,
      selected: "all"
    };
  },
  components: { SkillsItem }
};
</script>

<style lang="sass">

#skills
    min-height: 930px
    button:focus
        background-color: #ff5d4c
    input 
        margin-left: 20px
    .label
        font-size: 2.5rem

    .skills-container 
        max-width: 80%
        margin: auto
        display: grid
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))
        grid-gap: 5px
        margin-top: 50px
    
    #tech-input-container
        display: grid
        grid-template-columns: repeat(auto-fit, minmax(155px, 1fr))
        grid-gap: 5px


</style>