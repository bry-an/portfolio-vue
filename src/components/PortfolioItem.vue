<template>
<div class='portfolio-item'>
    <img :src='image' :alt='name' />
    <ul>
        <li>
            Technologies: {{technologies}}
        </li>
        <li>
            Live Link: {{githubLink}}
        </li>
        <li>
            GitHub Link: {{liveLink}}
        </li>


    </ul>
</div>
</template>
<script>
export default {
  name: "PortfolioItem",
  props: ["name", "image", "technologies", "githubLink", "liveLink"]
};
</script>
<style lang="sass">

.portfolio-item
    justify-self: center


ul
    list-style: none
</style> 
