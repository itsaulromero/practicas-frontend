<script setup lang="ts">
import { inject } from 'vue'

const emit = defineEmits<{
  greet: []
}>()

const parentMessage = inject<string>('parentMessage')
</script>

<template>
  <div>
    <p>{{ parentMessage }}</p>

    <BaseButton @click="emit('greet')">
      Greet parent
    </BaseButton>
  </div>
</template>