<script setup>
import MainRichting from "@/components/HomePage/Main-Richting.vue";
import MainVibes from "@/components/HomePage/Main-Vibes.vue";
import MainDesigner from "@/components/HomePage/Main-Designer.vue";
</script>

<template>
  <main>
    <div class="bloem3">
      <img src="@/assets/img/bloem.png" alt="bloem">
    </div>

      <MainRichting />
      <MainVibes />
      <MainDesigner />

    <section class="button-skills">
      <a href="@/Pages/Skills.vue">Skills</a>
    </section>
  </main>
</template>

<style>
.bloem3{
  position: relative;
}
.bloem3 img{
  position: absolute;
  top: 1500px;
  right: 100px;
  width: 507px;
  height: 647px;
  transform: scaleX(-1);
}
.button-skills{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 13rem;
}

.button-skills a{
  text-decoration: none;
  font-size: 128px;
  font-family: var(--font-family-aref), sans-serif;
  border: 7px solid var(--dark-green);
  padding: 2rem 4rem;
  border-radius: 40px;
}
</style>
