<script setup lang="ts">
const color = 'red'
useSeoMeta({
  title: 'Home - Nuxt Vue Exercises',
  description: 'Página principal de los ejercicios realizados con Vue 3 y Nuxt 4.',
})
const textColorClasses = {
  red: 'text-red-500',
} as const
</script>

<template>
  <main class="mx-auto max-w-6xl p-6 font-sans">
    <TheTitle>Nuxt Vue Exercises</TheTitle>

    <p class="mt-2 text-secondary">
      Proyecto de ejercicios con Vue 3 y Nuxt 4.
    </p>

    <p :class="textColorClasses[color]">
      Texto
    </p>

    <div class="mt-6">
      <TheCounter />
    </div>

    <div class="mt-6">
      <ParentComponent />
    </div>

    <div class="mt-6">
      <SocialIcons />
    </div>

    <NuxtLink
      class="btn inline-block"
      to="/catalogo"
    >
      Go to catalog
    </NuxtLink>
  </main>
</template>