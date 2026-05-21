<script setup>
import Designer from '@/assets/img/designer.jpg'
</script>

<template>
  <section class="designer">
    <img :src="Designer" alt="designer">

    <div class="designer-info">
      <h2>Waarom ben ik een goede designer?</h2>

      <p>
        Ik ben een goede designer omdat ik oog heb voor detail,
        structuur en gebruiksvriendelijkheid.

        Ik denk logisch na over hoe een website is opgebouwd en zorg
        ervoor dat alles duidelijk en overzichtelijk blijft.

        Door mijn interesse in web development combineer ik design
        met functionaliteit, zodat wat ik maak niet alleen mooi oogt,
        maar ook goed werkt.
      </p>
    </div>
  </section>
</template>

<style scoped>
.designer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25rem;
  margin-bottom: 13rem;
}

.designer-info {
  background-color: var(--light-green);
  border-radius: 40px;
  height: 1000px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 3rem;
}

.designer-info h2 {
  font-size: 64px;
  color: var(--beige);
  text-align: center;
  margin: 7rem 0 5rem 0;
  width: 750px;
}

.designer-info p {
  font-size: 40px;
  color: var(--beige);
  width: 600px;
  text-align: center;
  margin-bottom: 5rem;
}

.designer img {
  width: 507px;
  height: 845px;
  border-radius: 40px;
  position: absolute;
  left: 330px;
}
</style>
