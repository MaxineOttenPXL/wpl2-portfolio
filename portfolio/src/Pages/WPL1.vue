<script setup>
import Pijl from "@/components/Pijl.vue";
import Header from "@/components/Header.vue";
import eindreflectiePdf from "@/assets/wpl1&2/Eindreflectie-WPL1-DVO.pdf";

import Footer from "@/components/Footer.vue";



const headerTitle = "WPL1"
</script>

<template>
  <div id="pijlBoven">
    <Header :title="headerTitle"/>
  </div>

  <div class="container">
    <Pijl />
    <div class="info-dash">
      <h1>Dashboard-WPL1</h1>
      <img src="@/assets/wpl1&2/final-design.png" alt="Final design of the website" id="finalDesign" class="dashboard">

      <a :href="eindreflectiePdf" target="_blank">
        Eindreflectie WPL1
      </a>
      <a href="https://www.figma.com/design/FBa450ZPJHEYkEBZKlZyod/WPL1?node-id=0-1&t=OyHrtbdG3ZMvvHZC-1" target="_blank">Figma link</a>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}
a{
  font-size: 24px;
  color: var(--white);
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: var(--light-green);
  border-radius: 5px;
  margin-top: 2rem;
}
.info-dash{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.info-dash h1{
  font-family: "Aref Ruqaa", sans-serif;
  font-size: 128px;
  margin-bottom: 5rem;
}
.dashboard {
  width: 50%;
  height: auto;
}
</style>
