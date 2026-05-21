<script setup>
import Bloem from '@/assets/img/bloem.png'

import Pawprint from '@/assets/icons/pawprint.png'
import Coding from '@/assets/icons/coding.png'
import Leaves from '@/assets/icons/leaves.png'
import Book from '@/assets/icons/book.png'
import Friends from '@/assets/icons/friends.png'

const interesses = [
  {
    icon: Pawprint,
    tekst: 'Dieren'
  },
  {
    icon: Coding,
    tekst: 'Development'
  },
  {
    icon: Leaves,
    tekst: 'Natuur'
  },
  {
    icon: Book,
    tekst: 'Lezen'
  },
  {
    icon: Friends,
    tekst: 'Vrienden'
  }
]
</script>

<template>
  <div class="bloem4">
    <img :src="Bloem" alt="bloem">
  </div>

  <section class="interesses">
    <h2>Interesses</h2>

    <article class="icons">
      <div
        class="interesse"
        v-for="interesse in interesses"
        :key="interesse.tekst"
      >
        <img :src="interesse.icon" alt="icoon">
        <p>{{ interesse.tekst }}</p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.bloem4 {
  position: relative;
}

.bloem4 img {
  position: absolute;
  top: 750px;
  left: 1300px;
  transform: scaleX(-1);
}

.interesses {
  background-color: #EAE3D3;
  margin: 5rem 12rem 13rem 12rem;
  padding: 4rem;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.interesses h2 {
  font-size: 60px;
  padding-bottom: 6rem;
}

.icons {
  display: flex;
  flex-direction: column;
  gap: 10rem;
}

.interesse {
  display: flex;
  align-items: center;
  gap: 10rem;
}

.interesse p {
  font-size: 48px;
}

.icons img {
  width: 117px;
  height: 117px;
  margin-bottom: 3rem;
}
</style>
