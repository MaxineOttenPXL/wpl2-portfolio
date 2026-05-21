<script setup>
import Arrow from '@/assets/icons/arrow.png'

const doelen = [
  'Beter worden in development',
  'Goed werk vinden',
  '...'
]
</script>

<template>
  <section class="leerdoelen">
    <h2>Leerdoelen</h2>

    <div class="doelen">
      <p
        v-for="doel in doelen"
        :key="doel"
      >
        {{ doel }}
      </p>
    </div>

    <img :src="Arrow" alt="liggende pijl">
  </section>
</template>

<style scoped>
.leerdoelen {
  background-color: #767A61;
  height: 850px;
  margin-bottom: 12rem;
  display: flex;
  flex-direction: column;
}

.leerdoelen h2 {
  font-size: 60px;
  color: #EAE3D3;
  text-align: center;
  padding: 5rem;
}

.leerdoelen img {
  width: 75%;
  margin-top: 2rem;
  margin-left: 15rem;
}

.doelen {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
}

.doelen p {
  margin-top: 8rem;
  font-size: 48px;
  color: #EAE3D3;
  width: 330px;
}
</style>
