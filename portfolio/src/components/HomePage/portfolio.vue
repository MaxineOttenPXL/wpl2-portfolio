<script setup lang="ts">
import Bloem from '@/assets/img/bloem.png'

const bloemen = [
  {
    class: 'bloem1',
    style: {
      top: '50px',
      left: '100px'
    }
  },
  {
    class: 'bloem2',
    style: {
      top: '630px',
      left: '1450px',
      transform: 'scaleX(-1)'
    }
  }
]
</script>

<template>
  <div
    v-for="bloemData in bloemen"
    :key="bloemData.class"
    :class="bloemData.class"
  >
    <img
      :src="Bloem"
      alt="bloem"
      :style="bloemData.style"
    >
  </div>

  <div class="portfolio" id="pijlBoven">
    <div class="groen-vlak"></div>
    <h1>Portfolio</h1>
  </div>
</template>

<style scoped>
.bloem1 img,
.bloem2 img {
  position: absolute;
  width: 407px;
  height: 547px;
}

.portfolio {
  height: 100vh;
  display: flex;
  background-color: var(--beige);
}

.portfolio h1 {
  font-size: 270px;
  font-weight: lighter;
  font-family: var(--font-family-aref), sans-serif;
  width: 70%;
  position: absolute;
  top: 250px;
  left: 490px;
  color: var(--dark-green);
}

.groen-vlak {
  width: 30%;
  background-color: var(--light-green);
}
</style>
