<script setup>
import Pijl from "@/components/Pijl.vue";
import Header from "@/components/Header.vue";
import StageInfo from "@/components/Stage/Stage-Info.vue";
import Budapest from "@/components/Stage/Budapest.vue";
import Tanzania from "@/components/Stage/Tanzania.vue";

import Footer from "@/components/Footer.vue";


const headerTitle = "Buitenlandse Stage"
</script>

<template>

  <Pijl />
  <div id="pijlBoven">
    <Header :title="headerTitle"/>
  </div>

  <main>
    <StageInfo />

    <Budapest />
    <Tanzania />
  </main>

  <Footer />
</template>

<style scoped>

</style>
