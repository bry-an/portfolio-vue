<template>
<div class='portfolio-item'>
    <img :src='image' :alt='name' />
    <ul>
        <li>
            Technologies: {{technologies}}
        </li>
        <li>
            <a :href='githubLink'><img src='/static/github-logo.png' alt='github link' /></a>
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
    img
        border-radius: 3px


ul
    list-style: none
</style> 
