<!-- pages/section/mentionslegales.vue -->
<template>
  <div class="flex content-center flex-col my-16">
    <h1 class="flex justify-center text-2xl text-sky-700 my-4 dark:text-white 2xl:ml-50"> {{ $t("Mentions") }}</h1>
    <ul>
      <li class="flex justify-center mt-4 mb-2">{{ $t("Shoshin") }} {{ $t("Web") }}  {{ $t("Services") }}</li>
      <li class="flex justify-center my-2">{{ $t("PierreTinard") }} (EI)</li>
      <li class="flex justify-center my-2">{{ $t("Adresse") }}</li>
      <li class="flex justify-center my-2">Projet Kumquat</li>
      <li class="flex justify-center my-2">5 Bd Omer Sarraut</li>
      <li class="flex justify-center my-2">11000 Carcassonne</li>
      <li class="flex justify-center my-2">SIRET: 97809809300013</li>
      <li class="flex justify-center my-2">shoshinwebservices@gmail.com</li>
      <li class="flex justify-center my-2">Tél: (+33) 6 89 27 69 54</li>
    </ul>
    <ul>
      <li class="flex justify-center mt-4 mb-2">{{ $t("Hebergeur") }}</li>
      <li class="flex justify-center mt-4 mb-2">Vercel Inc</li>
      <li class="flex justify-center my-2">Incorporation</li>
      <li class="flex justify-center my-2">650 California St</li>
      <li class="flex justify-center my-2">San Francisco</li>
      <li class="flex justify-center my-2">CA 94108, USA</li>
      <li class="flex justify-center my-2">https://vercel.com/contact</li>
    </ul>
    <ul>
      <li class="flex justify-center my-2">{{ $t("Litiges") }}</li>
      <li class="flex justify-center my-2">{{ $t("Tribunal1") }}</li>
      <li class="flex justify-center my-2">{{ $t("Tribunal2") }}</li>
      <li class="flex justify-center my-2">{{ $t("TribunalCommerce") }}</li>
      <li class="flex justify-center my-2">34 RUE DE STRASBOURG</li>
      <li class="flex justify-center my-2">11890 CARCASSONNE CEDEX 9</li>
    </ul>
  </div>
    
</template>

<script setup lang="ts">
useHead({
  meta: [
    {
      name: 'description',
      content: 'Page des mentions légales.',
    },
  ],
});
</script>
