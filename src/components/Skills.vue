<template>
<div id="skills">
    <h2 id="section-title">MY SKILLS</h2>
    <p>I might feel most alive when I'm neck-deep in unfamiliar code, but there are many skills
         and technologies I have experience with.</p>
        <div class='skills-container'>
        <SkillsItem v-for='skill in frontend' :name='skill.name' :key='skill.name'  :image='skill.image' :type='skill.type' />
        <SkillsItem v-for='skill in backend' :name='skill.name' :key='skill.name'  :image='skill.image' :type='skill.type' />
        <SkillsItem v-for='skill in technologies' :name='skill.name' :key='skill.name'  :image='skill.image' :type='skill.type' />
        </div>





</div>
</template>

<script>
import skills from '../data/skills'
import SkillsItem from './skillsItem'

export default {
    name: "Skills", 
    computed: {
        frontend()  {
            return this.skills.filter(skill => skill.type.indexOf('frontend') !== -1)
        },
        backend() {
            return this.skills.filter(skill => skill.type.indexOf('backend') !== -1)
        }, 
        technologies() {
            return this.skills.filter(skill => skill.type.indexOf('technologies') !== -1)
        }
    },
    data() {
        return {
            skills
        }
    },
    components: { SkillsItem }

}
</script>

<style>
.skills-container {
    max-width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 5px;
}
</style>