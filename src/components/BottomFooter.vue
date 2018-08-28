
<template>
<div id = "bottom-footer">
  <div id = "external-links">
  </div>
  <div id = "footer-container">
    <div id = "footer-container-text">
      Bryan Yunis<br>
      Denver, Colorado 80209<br>
      Contact <!--link-->
    </div>
  <img src = "@/assets/images/linkedin.png" class = "embed-images" id = "linkedin-img" />
  <img src = "@/assets/images/github.png" class = "embed-images" id = "github-img" />
  <img src = "@/assets/images/twitter.png" class = "embed-images" id = "twitter-img" />

  </div>
  </div>
  </template>
    
  
<script>
  export default {
    name: 'BottomFooter',
  }
  </script>

  <style>
  #footer-container {
    padding: 2% 0 0 2%;
    margin-top: 8%;
    height: 130px;
    background-color: #444;
  }

  #footer-container-text {
    color: #eee;
    float:left;
    font-size: 1.4rem;

  }
.embed-images {
  width: 40px;
  float:left;
  margin-left: 3%;
}

#linkedin-img {
  height:40px;
  width: 50px;
  margin-left: 5%;
}

@media (min-width: 400px) {
  #linkedin-img {
    margin-left: 12%;
  }

  #footer-container-text {
    font-size: 1.8rem;
  }

}
@media (min-width:600px) {
.embed-images {
  width: 50px;
  float:left;
  margin-left: 10%;
}

#linkedin-img {
  height:50px;
  width: 60px;
  margin-left: 16%;
}
}

@media (min-width:900px) {
.embed-images {
  width: 65px;
  float:left;
  margin-left: 10%;
}

#linkedin-img {
  height:65px;
  width: 73px;
  margin-left: 20%;
}
}

  </style>