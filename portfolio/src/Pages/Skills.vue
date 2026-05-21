<script setup>
import Pijl from "@/components/Pijl.vue";
import Header from "@/components/Header.vue";
import Talen from "@/components/Skills/Skills-Talen.vue";
import Interesses from "@/components/Skills/Skills-Interesses.vue";
import Werkervaring from "@/components/Skills/Skills-Werkervaring.vue";
import Leerdoelen from "@/components/Skills/Skills-Leerdoelen.vue";
import Vaardigheden from "@/components/Skills/Skills-Vaardigheden.vue";
import Footer from "@/components/Footer.vue";


const headerTitle = "Skills"
</script>

<template>
  <Pijl />
  <div id="pijlBoven">
    <Header :title="headerTitle"/>
  </div>

  <main>
    <Talen />
    <Interesses />
    <Werkervaring />
    <Leerdoelen />
    <Vaardigheden />
  </main>

  <Footer />

</template>

<style scoped>

</style>
