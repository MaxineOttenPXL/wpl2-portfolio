<script setup>
import starFill from '@/assets/icons/star-fill.png'
import star from '@/assets/icons/star.png'

const talen = [
  { naam: 'Nederlands', score: 5 },
  { naam: 'Engels', score: 4 },
  { naam: 'Frans', score: 3 }
]
</script>

<template>
  <section class="talen">
    <img src="@/assets/img/talen.jpg" alt="bijbel">

    <article class="sterren">
      <h2>Talen</h2>

      <div class="lijst">
        <ul class="vakken">
          <li v-for="taal in talen" :key="taal.naam">
            {{ taal.naam }}
          </li>
        </ul>

        <ul class="stars">
          <li v-for="taal in talen" :key="taal.naam">
            <img
              v-for="n in 5"
              :key="n"
              :src="n <= taal.score ? starFill : star"
              alt="ster"
            >
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<style scoped>
.talen {
  display: flex;
  justify-content: space-evenly;
  padding: 0 6rem;
  margin-bottom: 13rem;
}

.talen h2 {
  font-size: 64px;
}

.sterren {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lijst {
  display: flex;
  align-items: center;
  gap: 8rem;
}

.vakken li {
  font-size: 40px;
  padding-top: 3rem;
}

.talen > img {
  width: 480px;
  height: 480px;
  border-radius: 20px;
}

.stars li {
  display: flex;
  gap: 1rem;
  padding-top: 3rem;
}

.stars img {
  width: 46px;
  height: 46px;
}
</style>
