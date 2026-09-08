<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <main class="p-6">
    <TheTitle>
      Series de la categoría: {{ route.params.category }}
    </TheTitle>

    <NuxtLink
      class="btn mt-4 inline-block"
      :to="`/series-bonitas/${route.params.category}/episodio-1-de-spiderman`"
    >
      Episodio 1 de Spiderman
    </NuxtLink>
  </main>
</template>