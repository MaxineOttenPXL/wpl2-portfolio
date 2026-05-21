<script setup>
import Wandelapp from '@/assets/img/wandelapp.png'
import Wandelapp2 from '@/assets/img/wandelapp2.png'

const secties = [
  {
    class: 'boven',
    afbeelding: Wandelapp,
    tekst: `
      Voor mijn examen UI Design in het eerste jaar Digitale Vormgeving
      heb ik een wandel- en restaurantapp/website ontworpen.

      Het maakproces begon met twee aparte groepsopdrachten,
      die later zijn samengevoegd tot deze individuele opdracht
      voor het examen.

      De app is bedoeld om gebruikers te stimuleren meer te bewegen:
      je kunt je wandelingen opnemen en wanneer je een bepaalde afstand
      hebt bereikt, verdien je korting bij een restaurant naar keuze.

      Zo combineren we gezonde beweging met een leuke beloning,
      en wordt wandelen aantrekkelijker en leuker gemaakt voor iedereen.
    `,
    afbeeldingRechts: true
  },

  {
    class: 'onder',
    afbeelding: Wandelapp2,
    tekst: `
      Deze wandel- en restaurantapp/website is ontwikkeld als examenproject
      voor UI Design in mijn eerste jaar Digitale Vormgeving.

      Tijdens het maakproces zijn eerst twee aparte groepsopdrachten uitgevoerd,
      die uiteindelijk samen zijn gebracht tot deze individuele opdracht.

      Het idee achter de app is om mensen meer aan het bewegen te krijgen
      door hun wandelingen bij te houden en hen te belonen:
      na het lopen van een bepaalde afstand kan een gebruiker korting krijgen
      bij een restaurant naar keuze.

      Zo wordt gezond gedrag gestimuleerd en tegelijkertijd een kleine
      beloning geboden, wat het concept leuk en motiverend maakt.
    `,
    afbeeldingRechts: false
  }
]
</script>

<template>
  <section class="walk-bite">
    <h2>Walk&Bite</h2>

    <div
      v-for="sectie in secties"
      :key="sectie.class"
      :class="sectie.class"
    >
      <template v-if="!sectie.afbeeldingRechts">
        <img :src="sectie.afbeelding" alt="walk&bite">
      </template>

      <p>
        {{ sectie.tekst }}
      </p>

      <template v-if="sectie.afbeeldingRechts">
        <img :src="sectie.afbeelding" alt="walk&bite">
      </template>
    </div>
  </section>
</template>

<style scoped>
.walk-bite {
  display: flex;
  flex-direction: column;
  margin-bottom: 20rem;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}

.walk-bite h2 {
  font-family: "Aref Ruqaa", sans-serif;
  font-size: 128px;
  margin-bottom: 5rem;
  width: 800px;
}

.boven,
.onder {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
}

.boven p,
.onder p {
  font-size: 30px;
  width: 600px;
}

.boven {
  margin-bottom: 5rem;
}

.boven p {
  text-align: left;
}

.onder p {
  text-align: right;
}

.boven img,
.onder img {
  width: 600px;
  border-radius: 40px;
}
</style>
