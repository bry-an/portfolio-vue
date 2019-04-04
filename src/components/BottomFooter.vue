
<template>
  <div id="footer-container">
    <a href="https://www.linkedin.com/in/bryan-yunis" target="_blank">
      <img src="@/assets/images/linkedin.png" class="embed-images" id="linkedin-img">
    </a>
    <p id="contact-text">
      &copy; Bryan Yunis
      <br>Denver, CO 80209
    </p>
    <a href="https://github.com/bry-an" target="_blank">
      <img src="@/assets/images/github.png" class="embed-images" id="github-img">
    </a>
    <!-- <a href = 'https://twitter.com/bbyunis?lang=en' target="_blank">
    <img src = "@/assets/images/twitter.png" class = "embed-images" id = "twitter-img" /></a>-->
  </div>
</template>
    
  
<script>
export default {
  name: "BottomFooter"
};
</script>

  <style>
#footer-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 8%;
  padding-top: 3%;
  height: 100px;
  background-color: #444;
}
a {
  justify-self: center;
}
.embed-images {
  width: 50px;
}

#footer-container-text {
  color: #eee;
  float: left;
  font-size: 1.4rem;
}

#footer-container-text {
  font-size: 1.8rem;
}

#contact-text {
  text-align: center;
  color: white;
}
</style>