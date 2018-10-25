<template>
<div class='portfolio-item'>
    <div class='portfolio-item-heading'>
        {{name}}
    </div>
    <img :src='still' :id='id' :alt='name' 
        class='portfolio-item-img' @mouseover="animateGif(id)" @mouseout="stopGif(id)"/>
    <ul>
        <li> 
            <h5>The Problem</h5>
            {{problem}}
        </li>
        <li> 
            <h5>The Solution</h5>
            {{solution}}
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
  props: ["id", "name", "still", "gif", "technologies", "githubLink", "liveLink", "problem", "solution"],
  methods: {
      animateGif: function(el) {
          document.getElementById(el).setAttribute('src', this.gif)
      },
      stopGif: function(el) {
          document.getElementById(el).setAttribute('src', this.still)
      }
  }
};
</script>
<style lang="sass">

.portfolio-item
    font-family: "Raleway", "sans-serif"
    justify-self: center
    .portfolio-item-img
        border-radius: 3px
        width: 669px
        margin:auto
    
    .portfolio-item-heading
        font-size: 3rem
        text-align: center

ul
    list-style: none
li  
    text-align: center
    max-width: 600px
    font-size: 1.8rem
    margin: auto
    h5
        margin-top: 20px
        margin-bottom: 5px
        
    
</style> 
