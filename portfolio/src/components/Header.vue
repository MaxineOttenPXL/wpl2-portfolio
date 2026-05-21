<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
    </ul>
  </nav>

  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<style scoped>
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
  color: #EAE3D3;
}

a:hover{
  text-decoration: underline;
}

header{
  background-color: #767A61;
  height: 800px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 13rem;
}

header h1{
  font-size: 140px;
  color: #EAE3D3;
}
</style>
