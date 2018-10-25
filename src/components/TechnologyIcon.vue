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
    width: 50px
    padding-right: 15px
</style>


