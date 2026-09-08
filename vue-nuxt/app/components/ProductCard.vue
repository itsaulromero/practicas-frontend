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

      <BaseButton>
        {{ button }}
      </BaseButton>
    </div>
  </article>
</template>