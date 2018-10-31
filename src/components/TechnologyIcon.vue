<template>
<img :src='image' class='tech-icon-image' alt='technology-used-image'/>
</template>
<script>
export default {
    name: 'TechnologyIcon',
    props: ['image']
}

</script>
<style lang="sass">
.tech-icon-image
    width: 100%
    max-width: 25px
    height: auto
    margin: 0 8px 0 8px
    @media (min-width: 600px)
        max-width: 50px
        
</style>


