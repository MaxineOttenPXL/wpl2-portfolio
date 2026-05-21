<script setup>
import Pijl from "@/components/Pijl.vue";
import Header from "@/components/Header.vue";
import Carwash from "@/components/Realisaties/Realisaties-Carwash.vue";
import Takeaway from "@/components/Realisaties/Realisaties-Takeaway.vue";
import Walkbite from "@/components/Realisaties/Realisaties-Walkbite.vue";
import Footer from "@/components/Footer.vue";


const headerTitle = "Realisaties"
</script>

<template>
  <Pijl />
  <div id="pijlBoven">
    <Header :title="headerTitle"/>
  </div>

  <main>
    <Carwash />
    <Takeaway />
    <Walkbite />
  </main>

  <Footer />

</template>

<style scoped>

</style>
