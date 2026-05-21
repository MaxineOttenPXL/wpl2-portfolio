<script setup>

</script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/Skills">Skills</RouterLink></li>
      <li><RouterLink to="/Realisaties">Realisaties</RouterLink></li>
      <li><RouterLink to="/Stage">Buitenlandse Stage</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
li{
  list-style: none;
}
nav{
  position: absolute;
  right: 70px;
  top: 30px;
}
nav ul{
  display: flex;
  gap: 5rem;
}
nav a{
  font-size: 30px;
  text-decoration: none;
  color: var(--dark-green);
}
a:hover{
  text-decoration: underline;
}
</style>
