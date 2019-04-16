<template>
  <div class="machine-learning">
    <h1 class="machine-learning-header">Learning Machine Learning</h1>
      <h4 class="machine-learning-subheader">
        A few interesting things I've come across while learning machine learning
      </h4>
    <div class="machine-learning-body">
      <p>
      Natural Language Processing: comparing word frequencies in first inaugural addresses of Presidents Obama and Trump
      </p>
      <div class="row">
        <div class="six columns">
          <h4 class="nlp_title">Obama, 2009</h4>
      <img src="@/assets/images/obama_freq_plot.png" class="nlp_plot"/>
      </div>
        <div class="six columns">
          <h4 class="nlp_title">Trump, 2017</h4>
      <img src="@/assets/images/trump_freq_plot.png" class="nlp_plot"/>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MachineLearning"
};
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Roboto")
@import url("https://fonts.googleapis.com/css?family=Raleway")

.machine-learning
  font-family: 'Raleway'
  padding-top: 70px
  margin: 0 20px 0 20px
  p
    font-size: 2rem
  .machine-learning-subheader
    margin-top: 0
    text-align: center
  .machine-learning-header
    color: #444
    font-size: 5rem
    font-weight: bold
    font-family: "Roboto", "sans-serif"
    padding: 3% 0 1% 0
    text-align: center
  .nlp_plot
    height: 742px

</style>


