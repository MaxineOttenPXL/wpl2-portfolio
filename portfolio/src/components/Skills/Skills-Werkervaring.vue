<script setup>

</script>

<template>
  <section class="werkervaring">
    <h2>Werkervaring</h2>
    <div class="jobs">
      <article class="bakker">
        <img src="@/assets/img/bakker.jpg" alt="bakker">
        <h3>Winkelbediende bakker</h3>
      </article>

      <article class="bar">
        <img src="@/assets/img/bar.jpg" alt="bakker">
        <h3>Bar - cafetaria - tennis</h3>
      </article>

      <article class="magazijn">
        <img src="@/assets/img/magazijn.jpg" alt="bakker">
        <h3>Magazijn medewerker (vakantie job)</h3>
      </article>
    </div>
  </section>
</template>

<style scoped>
.werkervaring{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 13rem;
}
.werkervaring h2{
  font-size: 60px;
  margin-bottom: 5rem;
}
.jobs{
  display: flex;
  gap: 15rem;
}
.bakker, .bar, .magazijn{
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
}
.bakker img, .bar img, .magazijn img{
  width: 270px;
  height: 270px;
  border-radius: 25px;
}
.bakker h3, .bar h3, .magazijn h3{
  width: 241px;
  font-size: 30px;
  text-align: center;
}

</style>
