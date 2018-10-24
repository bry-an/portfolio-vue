
<template>
<div class='skill'>
    <div class='skill-img'>
            <img src='https://via.placeholder.com/50/50' v-bind:alt='name' />

    </div>
    <div class='skill-name'>
{{name}}
</div>
</div>

</template>

<script>
export default {
    name: 'SkillsItem',
    props: ['name']
}
</script>
<style>
.skill-name {
    font-size: 1.8rem;

}
</style>