<script setup>
import Photoshop from '@/assets/img/photoshop.jpg'
import Illustrator from '@/assets/img/illustrator.jpg'
import Indesign from '@/assets/img/indesign.jpg'
import Web from '@/assets/img/web.jpg'

import StarFill from '@/assets/icons/star-fill.png'
import Star from '@/assets/icons/star.png'

const vaardigheden = [
  {
    naam: 'Photoshop',
    afbeelding: Photoshop,
    score: 2
  },
  {
    naam: 'Illustrator',
    afbeelding: Illustrator,
    score: 4
  },
  {
    naam: 'Indesign',
    afbeelding: Indesign,
    score: 3
  },
  {
    naam: 'Web',
    afbeelding: Web,
    score: 3
  }
]
</script>

<template>
  <section class="vaardigheden">
    <h2>Vaardigheden</h2>

    <article
      class="programma"
      v-for="vaardigheid in vaardigheden"
      :key="vaardigheid.naam"
    >
      <img
        :src="vaardigheid.afbeelding"
        alt="programma"
      >

      <div class="info-programma">
        <p>{{ vaardigheid.naam }}</p>

        <ul class="sterren-programma">
          <li
            v-for="n in 5"
            :key="n"
          >
            <img
              :src="n <= vaardigheid.score ? StarFill : Star"
              alt="ster"
            >
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<style scoped>
.vaardigheden {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  margin-bottom: 13rem;
}

.vaardigheden h2 {
  font-size: 60px;
}

.programma {
  display: flex;
  gap: 5rem;
}

.programma > img {
  width: 300px;
  height: 300px;
  border-radius: 20px;
}

.info-programma {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.info-programma p {
  font-size: 40px;
}

.sterren-programma {
  display: flex;
  gap: 1rem;
}

.sterren-programma img {
  width: 46px;
  height: 46px;
}

.bloem4 img {
  position: absolute;
  top: -250px;
  left: 100px;
}
</style>
