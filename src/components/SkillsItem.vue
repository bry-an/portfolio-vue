
<template>
  <div class="skill">
    <img :src="image" :alt="name">

    <div class="skill-name">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: "SkillsItem",
  props: ["name", "image"]
};
</script>
<style lang="sass">

.skill-name 
    font-size: 1.8rem

.skill
    img
        width: 50px

</style>