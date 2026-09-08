<template>
  <main class="mx-auto max-w-6xl p-6 font-sans">
    <TheTitle>Nuxt Vue Exercises</TheTitle>

    <p class="mt-2 text-secondary">
      Proyecto de ejercicios con Vue 3 y Nuxt 4.
    </p>

    <div class="mt-6">
      <TheCounter />
    </div>

    <NuxtLink
      class="mt-6 inline-block rounded-md bg-primary px-4 py-2 font-medium text-white hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      to="/catalogo"
    >
      Go to catalog
    </NuxtLink>
  </main>
</template>