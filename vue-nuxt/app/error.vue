<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <main class="p-6">
    <h1 class="text-3xl font-bold">
      Error {{ error.statusCode }}
    </h1>

    <p class="mt-4">
      {{ error.statusMessage || error.message }}
    </p>

    <button
      type="button"
      class="btn mt-4"
      @click="handleError"
    >
      Volver al inicio
    </button>
  </main>
</template>