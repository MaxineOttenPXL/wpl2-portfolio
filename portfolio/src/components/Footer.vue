<script setup>
import Nummer from '@/assets/icons/nummer.png'
import Email from '@/assets/icons/email.png'

import Instagram from '@/assets/icons/instagram.png'
import Facebook from '@/assets/icons/facebook.png'
import Pintrest from '@/assets/icons/pintrest.png'

const gegevens = [
  {
    icon: Nummer,
    tekst: '0478 10 23 52'
  },
  {
    icon: Email,
    tekst: 'ottenmaxine@gmail.com'
  }
]

const socials = [
  Instagram,
  Facebook,
  Pintrest
]
</script>

<template>
  <div class="bloem4">
    <img src="@/assets/img/bloem.png" alt="bloem">
  </div>

  <footer>
    <div class="gegevens">
      <div
        class="info"
        v-for="gegeven in gegevens"
        :key="gegeven.tekst"
      >
        <img :src="gegeven.icon" alt="icoon">
        <p>{{ gegeven.tekst }}</p>
      </div>
    </div>

    <div class="socials">
      <img
        v-for="social in socials"
        :key="social"
        :src="social"
        alt="social"
      >
    </div>
  </footer>
</template>

<style scoped>
.bloem4 {
  position: relative;
}

.bloem4 img {
  position: absolute;
  top: -17rem;
  left: 5rem;
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: var(--beige);
  height: 607px;
}

footer p {
  font-size: 30px;
}

footer img {
  width: 60px;
}

.gegevens {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.socials {
  display: flex;
  justify-content: space-between;
  width: 407px;
}
</style>
