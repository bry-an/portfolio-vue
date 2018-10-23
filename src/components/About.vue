
<template>
<div id="about">
<div id = "approach">
    <h2 id = "section-title">APPROACH</h2>

<p>I am insatiably eager to learn new technologies, web frameworks, and languages. 
    I am driven by the fact that there are more technologies than anyone could learn in a lifetime, 
    so I'd better get going. I am full-stack through-and-through: 
    I enjoy perfecting low-level code to provide a satisfying, snappy user experience on the other side. 
    If it's compiled or interpreted, I have my eye on it. </p>
    <p>When otherwise at my keyboard, I am fascinated by anything that involves machine learning. 
        Off the keyboard, I enjoy getting outside for long gravel bike rides, trail runs, 
        and hikes in the mountains. I also love reading and writing, and am a confessed news-junkie.</p>
<p>Before web development, I honed my analytical skills working in aquatic toxicology, 
    and developed leadership and communication experience serving as campaign manager and 
    communications director on a U.S. Congressional campaign. These diverse experiences inform a 
    practical, real-world approach to coding that is focused on solving problems and delivering a 
    positive user experience.</p>
</div>
<div id="skills">
    <h2 id="section-title">MY SKILLS</h2>
    <p>I feel most alive when I'm neck-deep in unfamiliar code, but here are the technologies and skills
        I have experience with.</p>
        <div class="row">
            <div class="6 columns u-pull-left">
                <h3>Front End</h3>



            </div>
            <div class="6 columns u-pull-right">
                <h3>Back End</h3>


            </div>



        </div>

</div>
</div>


</template>


<script>
export default {
  name: "About"
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
    font-size: 3.2rem;
  }
}

@media (min-width: 900px) {
  #section-title {
    font-size: 16rem;
  }
}
</style>
