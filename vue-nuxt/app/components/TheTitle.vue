<script setup lang="ts">
defineProps<{
  propTitle: string
}>()
</script>

<template>
  <h1 class="text-2xl font-bold text-primary">
    {{ propTitle }}
  </h1>
</template>