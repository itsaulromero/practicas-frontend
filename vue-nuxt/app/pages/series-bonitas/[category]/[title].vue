<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <main class="p-6">
    <TheTitle>Detalle de la serie</TheTitle>

    <p class="mt-4">
      Categoría: {{ route.params.category }}
    </p>

    <p class="mt-2">
      Título: {{ route.params.title }}
    </p>
  </main>
</template>