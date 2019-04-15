
<template>
  <div id="about">
    <div id="approach">
      <a name="approach"></a>
      <h2 id="section-title">ABOUT ME</h2>
      <div class="row">
        <div class="six columns">
          <p>
            A JavaScript developer eager to tackle confounding problems, I have experience throughout the web
            stack building enterprise software in a collaborative, agile workplace.
            I value effective communication: verbal, written, and semantic. I'm passionate about coding,
            both on and off the keyboard. I thrive when I'm challenged to learn new technologies and surpass what's
            comfortable. Currently, I'm enjoying learning the finer points of Vue.js
          </p>
          <a
            @click="readMore = !readMore"
          >{{readMore? "...read less": "read more..."}}</a>
        </div>
        <div class="six columns">
          <h3 class="subheading">HIGHLIGHTS</h3>
          <div class="highlights">
            <ul>
              <li>
                Full Stack Vue.js developer at
                <a
                  href="https://www.oppenheimerfunds.com/"
                  target="_new"
                >OFI</a>. Contract renewed until company buy-out.
              </li>
              <li>Helped build employee provisioning application at OFI, saving company an est. $10m/year</li>
              <li>Led project to refactor large older application, migrated to new codebase at OFI.</li>
              <li>
                Full Stack Web Development certificate from
                <a
                  href="https://bootcamp.du.edu/coding/curriculum/"
                  target="_new"
                >University of Denver</a>.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="readMore" id="read-more">
        <p>
          Beyond web development, I am fascinated by anything that involves machine learning and have recently
          discovered the expressiveness of Python.
          In a
          <a
            href="https://www.meetup.com/Bootcampers-Collective/"
            target="_new"
          >weekly meetup</a> I co-lead on technical problem-solving called Coders' Workshop,
          I enjoy sharing my knowledge with -- and learning from -- fellow developers.
          Off the keyboard, I enjoy gravel bike rides (I made an
          <a
            href="https://bry-an.github.io/weather-rider/"
            target="_new"
          >app</a> for getting the weather along your bike route when I was a student) and trail runs.
          I love reading and writing, and am a confessed news-junkie.
        </p>
        <p>
          Previously, I honed my analytical skills working in aquatic toxicology,
          and developed leadership and communication experience serving as campaign manager and
          communications director on a U.S. Congressional campaign.
        </p>
        <p>
          These experiences inform a practical, real-world approach to development that's focused on
          solving problems and delivering a satisfying user experience.
        </p>
      </div>
    </div>
    <Skills/>
  </div>
</template>


<script>
import Skills from "./skills";
export default {
  name: "About",
  components: { Skills },
  data() {
    return {
      readMore: false
    };
  },
  methods: {
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

.highlights li {
  text-align: justify;
  line-height: 3rem;
  text-justify: inter-word;
}
.subheading {
  text-align: center;
  font-family: "Roboto", "sans-serif";
}
a {
  cursor: pointer;
  text-decoration: none;
}

#section-title {
  color: #444;
  font-size: 3.5rem;
  font-weight: bold;
  font-family: "Roboto", "sans-serif";
  padding: 3% 0 3% 0;
  text-align: center;
}

#approach,
#skills {
  text-align: center;
  color: #555;
  font-size: 2.2rem;
  line-height: 1.2;
  padding: 0 50px 0 50px;
  font-family: "Raleway", "sans-serif";
}

#approach,
p {
  text-align: center;
  line-height: 4.5rem;
}

@media (min-width: 400px) {
  #section-title {
    font-size: 6rem;
  }
}
@media (min-width: 600px) {
  #section-title {
    font-size: 10rem;
  }
  #approach,
  .highlights li {
    font-size: 2rem;
  }
  #approach,
  p {
    text-align: justify;
    text-justify: inter-word;
    line-height: 4rem;
  }
}

@media (min-width: 900px) {
  #section-title {
    font-size: 12rem;
  }
  .highlights li {
    font-size: 2rem;
  }
}
</style>
