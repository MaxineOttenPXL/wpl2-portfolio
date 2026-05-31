<script setup>
import Pijl from "@/components/Pijl.vue";
import Header from "@/components/Header.vue";
import eindreflectiePdf from "@/assets/wpl1&2/Opdracht eindreflectie WPL2_Otten_Maxine.pdf";

import Footer from "@/components/Footer.vue";

const headerTitle = "WPL2"
</script>

<template>
  <Pijl />
  <div id="pijlBoven">
    <Header :title="headerTitle"/>
  </div>
  <div class="container">
    <section class="case">
      <h1>Project WPL2</h1>
      <h2>beschrijving van de case</h2>
      <p>Onze case draait rond een klein juwelenbedrijf genaamd Pop And Clay, opgericht door Stéphanie Caelen. Sinds de start beheert zij haar onderneming volledig alleen. Ze staat zelf in voor het ontwerpen en maken van de juwelen, maar ook voor de verkoop, promotie en het onderhouden van haar merk. Haar passie en creativiteit zijn dan ook duidelijk terug te zien in haar producten en manier van werken.
        Tot nu toe verliep bijna alles via haar Instagramaccount. Via dit platform maakte ze reclame voor nieuwe collecties, verkocht ze haar juwelen en hield ze haar volgers op de hoogte van updates en nieuwe producten. In het begin werkte dit goed, maar naarmate het bedrijf groeide merkte Stéphanie dat Instagram alleen niet meer voldoende was om haar merk professioneel verder uit te bouwen. Daarom ging ze op zoek naar een team dat haar kon helpen met een nieuwe branding en een professionele website die beter aansloot bij de groei van haar onderneming.
        Samen zijn wij aan de slag gegaan met haar wensen en ideeën. Tijdens het project hielden we haar regelmatig op de hoogte van de vooruitgang. Haar enthousiaste feedback motiveerde ons om een eindresultaat te creëren dat perfect aansluit bij haar merk en visie.
      </p>

      <h2>Mijn aandeel hierin</h2>
      <p>
        Mijn aandeel binnen dit project was voornamelijk het ontwikkelen van de website. Binnen ons team was ik de enige die zich bezighield met het webgedeelte, waardoor ik verantwoordelijk was voor het uitwerken en opbouwen van de volledige website. Ik heb hier veel tijd en moeite ingestoken om ervoor te zorgen dat de website niet alleen goed werkte, maar ook mooi aansloot bij de branding en stijl van Pop And Clay.
        Tijdens het proces zijn er natuurlijk enkele problemen en fouten opgedoken. Sommige onderdelen werkten niet meteen zoals gepland en bepaalde taken namen meer tijd in beslag dan verwacht. Toch denk ik dat dit bij elk project wel voorkomt en het hoort ook bij het leerproces. Ondanks die moeilijkheden vond ik het een heel fijn en leerrijk project om aan te werken. Vooral het design sprak mij erg aan, wat mij extra motiveerde om de website zo goed mogelijk af te werken. Hoewel niet alle geplande functies volledig zijn afgerond, heb ik steeds mijn best gedaan om elk onderdeel zo professioneel mogelijk uit te werken.

      </p>

      <h2>Wat heb ik hieruit geleerd</h2>
      <p>
        Tijdens dit project heb ik vooral veel bijgeleerd over Vue.js en GitHub. Dit waren de tools waarmee ik het meeste moest werken, terwijl ik hier voordien nog niet zoveel ervaring mee had. Vooral tijdens het ontwikkelen van de website wilde ik mijn nieuwe kennis van Vue zoveel mogelijk toepassen. Omdat dit nieuwe leerstof voor mij was, vond ik het belangrijk om er actief mee bezig te zijn zodat ik het beter kon begrijpen en gebruiken in de praktijk.
        Daarnaast heb ik ook meer inzicht gekregen in het werken met GitHub. In het begin was het soms moeilijk om alles goed georganiseerd te houden, maar doorheen het project heb ik stap voor stap geleerd hoe ik efficiënter met het programma kan werken en samenwerken binnen een project
      </p>

      <h2>Finaal resultaat</h2>
      <p>
        Het finale resultaat van de website staat online, zodat deze eenvoudig bekeken kan worden via de URL-link. Daarnaast is het volledige project ook beschikbaar op GitHub, zodat lectoren de code en uitwerking kunnen bekijken. Voor onze klant voorzien we ook een lokale voorstelling van de website, waarbij we samen door alle pagina’s en functies gaan. Op die manier kunnen we alles duidelijk uitleggen en tonen hoe de website werkt en aansluit bij haar wensen en branding voor Pop And Clay.
      </p>
    </section>

    <a :href="eindreflectiePdf" target="_blank">
      Eindreflectie WPL2
    </a>
  </div>
  <Footer />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}
a{
  font-size: 24px;
  color: var(--white);
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: var(--light-green);
  border-radius: 5px;
  margin-top: 2rem;
}

.case{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 14rem;
}
.case h1{
  font-family: "Aref Ruqaa", sans-serif;
  font-size: 128px;
  margin-bottom: 5rem;
}
.case h2{
  font-family: "Aref Ruqaa", sans-serif;
  font-size: 48px;
  margin-bottom: 1rem;
}

.case p{
  font-size: 30px;
  width: 60%;
}

</style>
