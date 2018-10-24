
<template>
<div id = "portfolio">
    <h2 id = "section-title">FEATURED</h2>
    </div>
</template>


<script>
export default {
  name: "Portfolio",
  methods: {
    portfolioClickHandler(url) {
      window.open(url);
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

#portfolio {
  text-align: center;
}

#featured-heading {
  font-family: "Roboto", "sans-serif";
  font-size: 4rem;
  color: #444;
  font-weight: bold;
  text-align: center;
  padding-top: 5%;
}
.caption-text {
  font-family: "Raleway", "sans-serif";
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
  font-family: "Roboto", "sans-serif";
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
  text-align: center;
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
@media (min-width: 600px) {
  .cap-title {
    font-size: 3rem;
  }
  .caption-text {
    font-size: 2rem;
  }
  #featured-heading {
    font-size: 10rem;
  }
}

@media (min-width: 900px) {
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