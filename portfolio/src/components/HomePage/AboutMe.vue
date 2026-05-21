<script setup>
import Portfolio from "@/components/HomePage/portfolio.vue";
</script>

<template>
  <Portfolio />
  <header>
    <img src="@/assets/img/ik.jpg" alt="foto persoon">
    <div class="info">
      <h2>Maxine Otten</h2>
      <p>Ik ben Maxine Otten, 18 jaar, en iemand die openstaat voor nieuwe kansen en groei. Ik haal energie uit nieuwe ervaringen en zet me gemotiveerd in voor alles wat ik doe. Je kan me bereiken op ottenmaxine@gmail.com of 0478 10 23 52.</p>
    </div>
  </header>

</template>

<style scoped>

header{
  background-color: var(--light-green);
  height: 800px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 13rem;
}
header img{
  width: 414px;
  border-radius: 400px;
}
header h2{
  font-size: 64px;
  color: var(--beige);
  margin-bottom: 3rem;
}
header p{
  font-size: 32px;
  font-family: var(--font-family-aref);
  color: var(--beige);
  width: 680px;
}

</style>
