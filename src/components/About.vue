
<template>
<div id="about">
<div id = "approach">
    <h2 id = "section-title">ABOUT ME</h2>

<p>I'm a full-stack web developer with experience building apps in React.js and Vue.js.
  I gained proficiency in the MERN stack at the University of Denver Web Development program, but I
  continually challenge myself to learn new languages, frameworks, and tools, driven by my passion
  for finding novel solutions to complex problems.</p>
  <p>
     Whether working deep in server-side code or styling an interface, my end goal is always 
     to provide a visually-appealing, snappy user experience on the front end.
    </p>
    <p>Beyond web development, I am fascinated by anything that involves machine learning. 
        Off the keyboard, I enjoy gravel bike rides and trail runs. I love reading and writing, and am a confessed news-junkie.</p>
<p>Previously, I honed my analytical skills working in aquatic toxicology, 
    and developed leadership and communication experience serving as campaign manager and 
    communications director on a U.S. Congressional campaign.</p>
    <p> These experiences inform a 
    practical, real-world approach to web development that's focused on solving problems and delivering a 
    satisfying user experience.</p>
</div>
<Skills />
</div>
</template>


<script>
import Skills from "./skills";
export default {
  name: "About",
  components: { Skills }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

#section-title {
  color: #444;
  font-size: 3.5rem;
  font-weight: bold;
  font-family: "Roboto", "sans-serif";
  color: #444;
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
  #approach {
    font-size: 3rem;
  }
#approach,
p {
  text-align: justify;
  text-justify: inter-word;
  line-height: 4.5rem;
}
}

@media (min-width: 900px) {
  #section-title {
    font-size: 12rem;
  }
}
</style>
