<script setup>
import Bloem from '@/assets/img/bloem.png'

import Budapest1 from '@/assets/img/budapest1.jpeg'
import Budapest2 from '@/assets/img/budapest2.jpeg'
import Budapest3 from '@/assets/img/budapest3.jpeg'

import Budapest4 from '@/assets/img/budapest4.jpeg'
import Budapest5 from '@/assets/img/budapest5.jpeg'
import Budapest6 from '@/assets/img/budapest6.jpeg'
import Budapest7 from '@/assets/img/budapest7.jpeg'
import Budapest8 from '@/assets/img/budapest8.jpeg'
import Budapest9 from '@/assets/img/budapest9.jpeg'
import Budapest10 from '@/assets/img/budapest10.jpeg'
import Budapest11 from '@/assets/img/budapest11.jpeg'

const artikels = [
  {
    class: 'b-foto1',
    afbeelding: Budapest1,
    tekst: `
      Tijdens mijn buitenlandse stage in Boedapest bezocht ik een artistieke school
      waar ik kennismaakte met een volledig andere manier van werken.

      In tegenstelling tot wat ik in België gewend ben, werd hier bijna alles volledig
      met de hand uitgevoerd.

      Ik leerde nieuwe, ambachtelijke technieken en manieren om handmatig kunst te maken.
      Deze ervaring heeft mijn blik verruimd en gezorgd voor een groter respect
      voor andere kunstvormen en werkprocessen.
    `,
    afbeeldingRechts: false
  },

  {
    class: 'b-foto2',
    afbeelding: Budapest2,
    tekst: `
      Budapest is een unieke en inspirerende stad met een bijzondere mix van oud en nieuw.

      De historische gebouwen en het moderne stadsleven vullen elkaar op een mooie manier aan.

      Wat mij vooral aanspreekt aan Budapest is de open sfeer:
      het voelt als een stad waar iedereen zichzelf kan zijn.

      Deze combinatie van schoonheid, contrast en vrijheid maakt Budapest
      voor mij een heel speciale plek.
    `,
    afbeeldingRechts: true
  },

  {
    class: 'b-foto3',
    afbeelding: Budapest3,
    tekst: `
      Mijn ervaring in het buitenland was voor mij enorm waardevol.

      Door deze reis ben ik veel zelfstandiger geworden en heb ik geleerd
      om mijn weg te vinden in een nieuwe omgeving.

      Ik heb nieuwe culturen en manieren van leven leren kennen,
      wat mijn blik op de wereld heeft verruimd en mij persoonlijk heeft doen groeien.
    `,
    afbeeldingRechts: false
  }
]

const carouselFotos = [
  Budapest4,
  Budapest5,
  Budapest6,
  Budapest7,
  Budapest8,
  Budapest9,
  Budapest10,
  Budapest11
]
</script>

<template>
  <section class="budapest">
    <h2>Buitelandse stage in Budapest</h2>

    <div class="b-bloem1">
      <img :src="Bloem" alt="bloem">
    </div>

    <div class="b-bloem2">
      <img :src="Bloem" alt="bloem">
    </div>

    <article
      v-for="artikel in artikels"
      :key="artikel.class"
      :class="artikel.class"
    >
      <template v-if="!artikel.afbeeldingRechts">
        <img :src="artikel.afbeelding" alt="foto budapest">
      </template>

      <p>{{ artikel.tekst }}</p>

      <template v-if="artikel.afbeeldingRechts">
        <img :src="artikel.afbeelding" alt="foto budapest">
      </template>
    </article>

    <div class="b-carousel-container">
      <div class="b-carousel">
        <div class="b-carousel-track">
          <img
            v-for="foto in carouselFotos"
            :key="foto"
            :src="foto"
            alt="foto budapest"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.budapest {
  margin-bottom: 13rem;
}

.budapest h2 {
  font-family: 'Aref Ruqaa', sans-serif;
  font-size: 140px;
  width: 1200px;
  margin-left: 8rem;
}

.b-bloem1 img {
  position: absolute;
  top: -400px;
  right: 120px;
  width: 407px;
  height: 547px;
  transform: scaleX(-1);
}

.b-bloem1 {
  position: relative;
}

.b-bloem2 img {
  position: absolute;
  top: -200px;
  right: 420px;
  width: 267px;
  height: 407px;
}

.b-bloem2 {
  position: relative;
}

.b-foto1,
.b-foto2,
.b-foto3 {
  display: flex;
  justify-content: space-between;
  gap: 7rem;
  margin: 2rem 8rem 13rem 8rem;
}

.b-foto1 {
  margin-top: 20rem;
}

.b-foto1 p,
.b-foto3 p {
  font-size: 40px;
  width: 600px;
  text-align: right;
}

.b-foto2 p {
  font-size: 40px;
  width: 600px;
  text-align: left;
}

.b-foto1 img,
.b-foto2 img,
.b-foto3 img {
  width: 800px;
  height: 920px;
  border-radius: 40px;
}

.b-carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.b-carousel {
  width: 1050px;
  overflow-x: auto;
}

.b-carousel-track {
  display: flex;
  gap: 5px;
}

.b-carousel-track img {
  width: 400px;
  height: 450px;
  object-fit: cover;
  border-radius: 40px;
}
</style>
