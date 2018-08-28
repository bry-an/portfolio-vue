
<template>
<div id = "approach"><a name = "about"></a>
    <h2 id = "section-title">APPROACH</h2>

<p>I take time to get to know my clients and develop a compelling online presence for them. 
    Our sites capture attention in a noisy online world and provide users
    the snappy and stunning experience they expect. My clients don't receive cookie-cutter sites.</p>
    <p>Let's build a site ready for your future.</p>

</div>

</template>


<script>
  export default {
    name: 'About',
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
 
#section-title {
    color: #444;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Roboto', 'sans-serif';
    color: #444;
    padding: 3% 0 3% 0;
}

#approach {
    text-align: center;
    color: #555;
    font-size: 2.2rem;
    line-height: 1.2;
    padding: 0 50px 0 50px;
    font-family: 'Raleway', 'sans-serif';
}

@media (min-width: 400px) {
    #section-title {
        font-size: 6rem;
    }
}
@media (min-width:600px) {
    #section-title {
        font-size: 10rem;
    }
    #approach {
        font-size: 3.2rem;
    }
}

@media (min-width:900px) {
    #section-title {
        font-size: 16rem;
    }
}




</style>
