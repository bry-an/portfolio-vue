
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
            <br>Vue, Sharepoint logos
            <br>Combines several line-of-business applications to streamline
            employee onboarding process, saving company $10m annually.
          </li>
          <li>
            <b>Employee Time-tracking App</b>.
            <br>Vue, Loopback, PostgreSQL logos
            <br>Helped build data-layer, REST endpoints, deployment to AWS Elastic Beanstalk.
          </li>
          <li>
            <b>Agile Development</b>. Applied Agile methodology to iteratively improve work and deliver new features.
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
  margin-top: 40px
  font-family: "Raleway", "sans-serif"

  p
    text-align: center
    font-family: "Raleway", "sans-serif"
    font-size: 1.8rem
    line-height: 3rem

</style>