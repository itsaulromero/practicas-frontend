<script setup lang="ts">
const emit = defineEmits<{
  greet: []
}>()
</script>

<template>
  <BaseButton @click="emit('greet')">
    Greet parent
  </BaseButton>
</template>