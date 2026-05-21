<script setup>
import Bloem from '@/assets/img/bloem.png'

import Tanzania from '@/assets/img/tanzania.jpeg'
import Tanzania1 from '@/assets/img/tanzania1.jpeg'
import Tanzania2 from '@/assets/img/tanzania2.jpeg'
import Tanzania3 from '@/assets/img/tanzania3.jpeg'
import Tanzania4 from '@/assets/img/tanzania4.jpeg'
import Tanzania5 from '@/assets/img/tanzania5.jpeg'
import Tanzania6 from '@/assets/img/tanzania6.jpeg'
import Tanzania7 from '@/assets/img/tanzania7.jpeg'
import Tanzania8 from '@/assets/img/tanzania8.jpeg'
import Tanzania9 from '@/assets/img/tanzania9.jpeg'
import Tanzania10 from '@/assets/img/tanzania10.jpeg'

const artikels = [
  {
    class: 't-foto1',
    afbeelding: Tanzania7,
    tekst: `
      Ik ben twee weken naar Tanzania geweest, meer bepaald naar de stad Kigoma.

      Deze reis werd georganiseerd door Fracarita Belgium,
      een organisatie die deel uitmaakte van de Broeders van Liefde.

      Fracarita Belgium had verschillende projecten in Kigoma en Congo,
      waar ze zich inzetten om mensen te helpen die het hard nodig hadden.

      Tijdens mijn verblijf kreeg ik de kans om hun werking van dichtbij
      te zien en de lokale gemeenschap beter te leren kennen.

      Jammer genoeg bestaat Fracarita Belgium vandaag niet meer,
      maar de herinneringen aan deze bijzondere en leerrijke reis
      draag ik nog steeds mee.
    `,
    afbeeldingRechts: true
  },

  {
    class: 't-foto2',
    afbeelding: Tanzania4,
    tekst: `
      Tijdens mijn reis van twee weken naar Tanzania ontdekte ik
      hoe anders het leven daar is in vergelijking met hier.

      De mensen in Kigoma leven op een eenvoudige manier
      en hechten veel belang aan gemeenschap en samenhorigheid.

      Het was heel uniek om dit van dichtbij te kunnen meemaken.

      Het doel van deze reis was om te leren hoe de lokale bevolking leeft
      en om te zien welk verschil Fracarita Belgium maakte in hun leven.

      Dankzij hun projecten kregen veel mensen de hulp en ondersteuning
      die ze nodig hadden.

      Deze ervaring heeft mijn kijk op de wereld verruimd
      en een blijvende indruk op mij nagelaten.
    `,
    afbeeldingRechts: false
  },

  {
    class: 't-foto3',
    afbeelding: Tanzania,
    tekst: `
      De groep waarmee ik naar Tanzania ging bestond uit 10 personen
      en was zorgvuldig samengesteld door de twee begeleiders,
      wat zorgde voor een fijne sfeer.

      In de loop van de weken werden we een hechte groep
      en leerden we elkaar steeds beter kennen.

      We deelden samen zowel mooie en vrolijke momenten
      als moeilijke en emotionele ervaringen,
      die onze band versterkten.

      Ook na de reis hielden we contact tijdens weekenden en evenementen.

      De tijd in Tanzania leverde niet alleen onvergetelijke herinneringen op,
      maar ook vriendschappen voor het leven.
    `,
    afbeeldingRechts: true
  }
]

const carouselFotos = [
  Tanzania1,
  Tanzania2,
  Tanzania3,
  Tanzania5,
  Tanzania6,
  Tanzania8,
  Tanzania9,
  Tanzania10
]
</script>

<template>
  <section class="tanzania">
    <h2>Inleefreis in Tanzania</h2>

    <div class="t-bloem1">
      <img :src="Bloem" alt="bloem">
    </div>

    <div class="t-bloem2">
      <img :src="Bloem" alt="bloem">
    </div>

    <article
      v-for="artikel in artikels"
      :key="artikel.class"
      :class="artikel.class"
    >
      <template v-if="!artikel.afbeeldingRechts">
        <img :src="artikel.afbeelding" alt="foto tanzania">
      </template>

      <p>{{ artikel.tekst }}</p>

      <template v-if="artikel.afbeeldingRechts">
        <img :src="artikel.afbeelding" alt="foto tanzania">
      </template>
    </article>

    <div class="t-carousel-container">
      <div class="t-carousel">
        <div class="t-carousel-track">
          <img
            v-for="foto in carouselFotos"
            :key="foto"
            :src="foto"
            alt="foto tanzania"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tanzania {
  margin-bottom: 13rem;
}

.tanzania h2 {
  font-family: 'Aref Ruqaa', sans-serif;
  font-size: 140px;
  width: 1100px;
  margin-left: 8rem;
}

.t-bloem1 img {
  position: absolute;
  top: -400px;
  right: 120px;
  width: 407px;
  height: 547px;
  transform: scaleX(-1);
}

.t-bloem1 {
  position: relative;
}

.t-bloem2 img {
  position: absolute;
  top: -200px;
  right: 420px;
  width: 267px;
  height: 407px;
}

.t-bloem2 {
  position: relative;
}

.t-foto1,
.t-foto2,
.t-foto3 {
  display: flex;
  justify-content: space-between;
  gap: 7rem;
  margin: 2rem 8rem 13rem 8rem;
}

.t-foto1 {
  margin-top: 20rem;
}

.t-foto1 p,
.t-foto3 p {
  font-size: 40px;
  width: 600px;
  text-align: left;
}

.t-foto2 p {
  font-size: 40px;
  width: 600px;
  text-align: right;
}

.t-foto1 img,
.t-foto2 img,
.t-foto3 img {
  width: 800px;
  height: 920px;
  border-radius: 40px;
}

.t-carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.t-carousel {
  width: 1050px;
  overflow-x: auto;
}

.t-carousel-track {
  display: flex;
  gap: 5px;
}

.t-carousel-track img {
  width: 400px;
  height: 450px;
  object-fit: cover;
  border-radius: 40px;
}
</style>
