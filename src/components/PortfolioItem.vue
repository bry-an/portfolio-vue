
<template>
<div id = "portfolio"><a name = "portfolio"></a>
    <h2 id = "featured-heading">FEATURED</h2>
    <div class = "portfolio-image-container">
            <img src ="@/assets/images/port-perfect-ride.jpg" class = "portfolio-image responsive" />
            <div class = "portfolio-image-caption">
                <div class = "caption-text"><span class = "cap-title">The Perfect Ride</span><br>A web-app that assists bikers with route-planning and weather avoidance
                <button @click="portfolioClickHandler('https://bry-an.github.io/thePerfectRide/')" class = "portfolio-button">See it</button>
                </div>
                </div>
            </div>
    <div class = "portfolio-image-container">
            <img src ="@/assets/images/port-rps.jpg" class = "portfolio-image responsive" />
            <div class = "portfolio-image-caption">
                <div class = "caption-text"><span class = "cap-title">RPS</span><br>A web-based Multiplayer Rock Paper Scissors Game
                <button @click="portfolioClickHandler('https://bry-an.github.io/RPS-Multiplayer/')" class = "portfolio-button">See it</button>
                </div>
                </div>
            </div>
    <div class = "portfolio-image-container">
            <img src ="@/assets/images/port-jeopardy.jpg" class = "portfolio-image responsive" />
            <div class = "portfolio-image-caption">
                <div class = "caption-text"><span class = "cap-title">Jeopardy<span style="font-size:0.5rem">&reg</span>! Word Guess</span><br>A word-guess game using actual Jeopardy<span style="font-size:0.5rem">&reg</span>! questions 
                <button @click="portfolioClickHandler('http://bryanyunis.com/jeopardy/')" class = "portfolio-button">See it</button>
                </div>
                </div>
            </div>
            </div>


</template>


<script>
  export default {
    name: 'PortfolioItem',
    props: ['capTitle', 'caption', 'imgsrc'],
    methods: {
        portfolioClickHandler(url) {
            window.open(url);
        }
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

#featured-heading {
    font-family: 'Roboto', 'sans-serif';
    font-size: 4rem;
    color: #444;
    font-weight: bold;
    text-align: center;
    padding-top: 5%;
}
.caption-text{
    font-family: 'Raleway', 'sans-serif';
    font-size: 1rem;
}

.portfolio-button {
    display: block;
    border: 0.5px solid #ff5d4c;
    margin: 10px auto 0 auto;
    font-size: 1.8rem;
}

.cap-title {
    font-size: 1.5rem;
    font-family: 'Roboto', 'sans-serif';
}
.portfolio-image-container {
    position: relative;
    width: 75%;
    margin: 5% auto 0 auto;

}
.portfolio-image {
    transition: 0.5s ease;
    opacity: 1;
    height: auto;
    width: 100%;
}

.portfolio-image-container:hover .portfolio-image {
    opacity: 0.3;
}

.portfolio-image-container:hover .portfolio-image-caption {
    opacity: 1;
}

.portfolio-image-caption {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center
}
@media (min-width: 400px) {
    .cap-title {
        font-size: 1.5rem;
    }
    .caption-text {
        font-size: 1rem;
    }
    #featured-heading {
        font-size: 6rem;
    }
}
@media (min-width:600px) {
    .cap-title {
        font-size: 3rem;
    }
    .caption-text {
        font-size: 2rem;
    }
    #featured-heading{
        font-size: 10rem;
    }
}

@media (min-width:900px) {
    .cap-title {
        font-size: 5rem;
    }
    #featured-heading {
        font-size: 16rem;
    }
    .caption-text {
        font-size: 2.5rem;
    }
}

</style>