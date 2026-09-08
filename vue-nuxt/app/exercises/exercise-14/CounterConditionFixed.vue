<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
</script>

<template>
  <p v-if="counter === 10">
    Número, {{ counter }}
  </p>
</template>