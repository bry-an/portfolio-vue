
<template>
  <div id="portfolio">
    <h2 id="section-title">PROJECTS</h2>
    <p>(This site would like you to know that it's a proudly-built Vue.js app.)</p>

    <div class="row">
      <div class="six columns">
        <h4>PERSONAL INTERESTS</h4>
        <ul>
          <li>
            <b>Machine Learning</b>. This is the future of the internet, and I want to help
            build that future. I'm exploring this field with Python's extensive libraries.
          </li>
          <li>
            <b>IoT sensors</b>. If ML is the future of the internet, IoT devices will help it get there.
          </li>
        </ul>
        <h4>OUTSIDE WORK</h4>
        <ul>
          <li>
            <b>Dev community</b>. I host a weekly meetup called
            <a
              href="https://www.meetup.com/Bootcampers-Collective/"
              target="_new"
            >Coders' Workshop</a> that promotes technical communication,
            problem solving, and collaboration among new developers. We talk about data structures, algorithms,
            and general problem-solving techniques.
          </li>
          <li>
            <b>Student projects</b>. The names might be cringe-worthy, but I learned a lot from these
            student projects in my full-stack web development course.
          </li>
        </ul>
      </div>

      <div class="six columns">
        <h4>MOST RECENT POSITION (OFI)</h4>
        <ul>
          <li>
            <b>Employee Provisoning App</b>.
            <a href="https://vuejs.org/" target="_new"><img src="@/assets/images/vue-logo.png" class="tiny-logo"/></a>
            <a href="https://docs.microsoft.com/en-us/sharepoint/index" target="_new"><img src="@/assets/images/sharepoint-logo.png" class="tiny-logo" /></a>
            <br>Combines several line-of-business applications to transform
            employee onboarding process, saving company $10m annually.
          </li>
          <li>
            <b>Employee Time-tracking App</b>
             <a href="https://vuejs.org/" target="_new"><img src="@/assets/images/vue-logo.png" class="tiny-logo"/></a>
             <a href="http://loopback.io" target="_new"><img src="@/assets/images/loopback-logo.png" class="tiny-logo"/></a>
            <a href="https://www.postgresql.org/" target="_new"><img src="@/assets/images/postgresql-logo.png" class="tiny-logo" /></a>
            <br>Helped design & implement data-layer, REST endpoints, deployment to AWS Elastic Beanstalk.
          </li>
          <li>
            <b>Agile Development</b>
            <a href="https://en.wikipedia.org/wiki/Agile_software_development" target="_new"><img src="@/assets/images/agile-logo.png" class="tiny-logo" /></a>
             
            <br> Applied Agile methodology to iteratively improve products and deliver new features.
          </li>
        </ul>
      </div>
    </div>

    <!-- <PortfolioItem v-for='item in portfolioItems' 
      :key='item.name' 
      :name='item.name'
      :still='item.still'
      :gif='item.gif'
      :technologies='item.technologies'
      :githubLink='item.githubLink'
      :liveLink='item.liveLink'
      :problem='item.problem' 
      :solution='item.solution'
      :id='item.id'
    />-->
  </div>
</template>


<script>
import PortfolioItem from "./PortfolioItem";
import portfolioItems from "../data/portfolioItems";
export default {
  name: "Portfolio",
  methods: {
    portfolioClickHandler(url) {
      window.open(url);
    }
  },
  data() {
    return {
      portfolioItems
    };
  },
  components: { PortfolioItem }
};
</script>
<style lang="sass">

@import url("https://fonts.googleapis.com/css?family=Roboto")
@import url("https://fonts.googleapis.com/css?family=Raleway")

#portfolio 
  max-width: 80%
  margin: auto
  display: grid
  grid-template-colums: repeat(auto-fit, minmax(200px, 1fr))
  grid-gap: 10px
  margin-top: 10px
  font-family: "Raleway", "sans-serif"

  p
    text-align: center
    font-family: "Raleway", "sans-serif"
    font-size: 1.8rem
    line-height: 3rem
  
  
  .tiny-logo
    width: 30px
    display: inline
    margin: 0 5px 0 5px

</style>