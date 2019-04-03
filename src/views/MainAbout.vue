<template>
  <div>
    <div class="top-container">
      <Header/>
    </div>
    <div class="body-container">
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
export default {
  name: "MainAbout",
  components: { Header, About, Portfolio, Contact }
};
</script>

