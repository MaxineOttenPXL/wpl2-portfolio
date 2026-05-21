<script setup>
import Carwash1 from '@/assets/img/carwash1.jpeg'
import Carwash2 from '@/assets/img/carwash2.jpeg'
import Carwash3 from '@/assets/img/carwash3.jpeg'

const afbeeldingen = [
  Carwash1,
  Carwash2,
  Carwash3
]
</script>

<template>
  <section class="carwash">
    <h2>Carwash</h2>

    <div class="car-afbeeldingen">
      <img
        v-for="afbeelding in afbeeldingen"
        :key="afbeelding"
        :src="afbeelding"
        alt="carwash"
      >
    </div>

    <p>
      Tijdens mijn middelbare school heb ik een carwash georganiseerd
      ten voordele van het Maendeleo Centrum in Tanzania. Dit centrum
      is de plek waar ik verbleef tijdens mijn inleefreis naar Tanzania.

      Met deze actie wilde ik iets terugdoen en het centrum financieel ondersteunen.
      <br>

      De carwash vond plaats op de parking van mijn middelbare school.
      De organisatie en uitvoering heb ik niet alleen gedaan: mijn vriendinnen
      en mijn ouders hebben mij hierbij geholpen.

      Samen zorgden we voor het wassen van de auto’s en het klaarzetten
      van al het nodige materiaal.
      <br>

      Deze activiteit leerde mij hoe belangrijk samenwerking en organisatie zijn,
      en hoe je met een lokaal initiatief een positieve impact kunt hebben
      op een project in het buitenland.
    </p>
  </section>
</template>

<style scoped>
.carwash {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-bottom: 14rem;
}

.carwash h2 {
  font-family: "Aref Ruqaa", sans-serif;
  font-size: 128px;
}

.car-afbeeldingen {
  display: flex;
  gap: 5rem;
}

.carwash img {
  width: 450px;
  border-radius: 40px;
}

.carwash p {
  font-size: 30px;
  width: 1500px;
  text-align: center;
}
</style>
