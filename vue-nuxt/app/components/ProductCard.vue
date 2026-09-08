<script setup lang="ts">
defineProps<{
  image: string
  title: string
  description: string
  price: number
  button: string
}>()
</script>

<template>
  <article class="overflow-hidden rounded-lg border border-gray-200 bg-white">
    <img
      class="h-48 w-full object-cover"
      :src="image"
      :alt="title"
      width="640"
      height="400"
      loading="lazy"
    />

    <div class="p-card">
      <h2 class="text-xl font-bold text-secondary">
        {{ title }}
      </h2>

      <p class="mt-2 text-gray-600">
        {{ description }}
      </p>

      <p class="mt-4 font-bold text-primary">
        {{ price.toFixed(2) }} €
      </p>

      <button
        class="mt-4 rounded-md bg-primary px-4 py-2 font-medium text-white hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        type="button"
      >
        {{ button }}
      </button>
    </div>
  </article>
</template>