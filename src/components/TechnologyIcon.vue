<template>
<img :src='image' class='tech-icon-image'/>
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
    padding-right: 15px
    @media (min-width: 600px)
        max-width: 50px
        
</style>


