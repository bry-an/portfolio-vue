
<template>
<div id="about">
<div id = "approach">
    <h2 id = "section-title">ABOUT ME</h2>

<p>I have built several full-stack web apps, including applications in React.js and Vue.js.
  I gained proficiency in the MERN stack at the University of Denver Web Development program, but 
  continually challenge myself to learn new languages, web frameworks, and development tools. My
  diverse experience helps bring fresh perspective and real-world applicability to my programming. </p>
  <p>
    I am driven by the fact that there are more technologies than anyone could learn in a lifetime, 
    so I'd better get going. I am full-stack through-and-through: 
    I enjoy perfecting low-level code to provide a satisfying, snappy user experience on the other side. 
    </p>
    <p>When otherwise at my keyboard, I am fascinated by anything that involves machine learning. 
        Off the keyboard, I enjoy getting outside for long gravel bike rides, trail runs, 
        and hikes in the mountains. I also love reading and writing, and am a confessed news-junkie.</p>
<p>Before web development, I honed my analytical skills working in aquatic toxicology, 
    and developed leadership and communication experience serving as campaign manager and 
    communications director on a U.S. Congressional campaign. These experiences inform a 
    practical, real-world approach to web development that is focused on solving problems and delivering a 
    positive user experience.</p>
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
  text-align: justify;
  text-justify: inter-word;
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
}

@media (min-width: 900px) {
  #section-title {
    font-size: 12rem;
  }
}
</style>
