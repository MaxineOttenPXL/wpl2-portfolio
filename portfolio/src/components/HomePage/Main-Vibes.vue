<script setup>
import Vibes1 from '@/assets/img/vibes1.jpg'
import Vibes2 from '@/assets/img/vibes2.jpg'
import Vibes3 from '@/assets/img/vibes3.jpg'

const fotos = [
  { src: Vibes1, class: 'foto1' },
  { src: Vibes2, class: 'foto2' },
  { src: Vibes3, class: 'foto3' }
]
</script>

<template>
  <section class="vibes">
    <h2>My aesthetic</h2>

    <div class="afbeeldingen-vibes">
      <img
        v-for="foto in fotos"
        :key="foto.class"
        :src="foto.src"
        :class="foto.class"
        alt="vibes foto"
      >
    </div>
  </section>
</template>

<style scoped>
.vibes {
  background-color: var(--beige);
  height: 1257px;
  margin-bottom: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vibes h2 {
  font-size: 158px;
  font-family: var(--font-family-aref), sans-serif;
  width: 50px;
  position: absolute;
  top: 2850px;
  left: 240px;
}

.vibes img {
  border-radius: 40px;
}

.afbeeldingen-vibes {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.foto1 {
  width: 390px;
  height: 460px;
  position: relative;
  top: 200px;
}

.foto2 {
  width: 527px;
  height: 870px;
}

.foto3 {
  width: 390px;
  height: 460px;
  position: relative;
  top: -200px;
}
</style>
