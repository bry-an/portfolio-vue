
<template>
  <div id = "footer-container">
    <!-- <div id = "footer-container-text">
      Bryan Yunis<br>
      Denver, Colorado 80209<br>
      Contact 
    </div> -->
<a href = 'https://www.linkedin.com/in/bryan-yunis' target="_blank">
<img src = "@/assets/images/linkedin.png" class = "embed-images" id = "linkedin-img" /></a>
<a href = 'https://github.com/bry-an' target="_blank">
<img src = "@/assets/images/github.png" class = "embed-images" id = "github-img" /></a>
<a href = 'https://twitter.com/bbyunis?lang=en' target="_blank">
<img src = "@/assets/images/twitter.png" class = "embed-images" id = "twitter-img" /></a>

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
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  padding: 2% 0 0 2%;
  margin-top: 8%;
  height: 130px;
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
</style>