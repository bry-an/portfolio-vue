<template>
<div class = "row menu u-max-full-width">
        <ul>
            <a href = "#contact">
        <li class = "nav-item" id = "contact-menu">Contact</li></a>
            <a href = "#portfolio">
        <li class = "nav-item" id = "portfolio-menu">Portfolio</li></a>
            <a href = "#about">
        <li class = "nav-item" id = "about-menu">About</li></a>
        </ul>
        </div>
</template>
<script>
  export default {
    name: 'navbar',
    methods: {
        handleScroll (event) {
            if (window.scrollY > 100)
            document.querySelector('.menu').classList.add('menu-scrolled');
            else document.querySelector('.menu').classList.remove('menu-scrolled');

            
        }

    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}

</script>
<style>

ul {
    list-style: none;
}

.nav {
    margin: 0;
    padding: 0;
}

.nav-item {
    float: right;
    font-size: 2.0rem;
    margin-right: 30px;
    color: white;
    margin-top: 1%;
    font-family: 'Raleway', sans-serif;
}

.menu-scrolled {
    background-color: #ff5d4c;
}

.menu {
    position: fixed;
    width: 100%;
    margin: auto;
    z-index: 2;
    padding: 0;
}

@media (min-width:400px) {
    .nav-item {
        font-size: 2.8rem;
    }
}



</style>