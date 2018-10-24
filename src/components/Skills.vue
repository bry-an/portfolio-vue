<template>
<div id="skills">
    <h2 id="section-title">MY SKILLS</h2>
    <p>I might feel most alive when I'm neck-deep in unfamiliar code, but there are many technologies and skills
        I have experience with.</p>
        <SkillsItem v-for='skill in skills' :name='skill.name' :key='skill.name'  :image='skill.image' :type='skill.type' />





</div>
</template>

<script>
import skills from '../data/skills'
import SkillsItem from './skillsItem'

export default {
    name: "Skills", 
    data() {
        return {
            skills
        }
    },
    components: { SkillsItem }

}
</script>

<style>
</style>