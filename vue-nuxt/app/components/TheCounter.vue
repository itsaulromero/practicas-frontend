<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>

<template>
  <section>
    <TheTitle>Counter</TheTitle>

    <p>{{ count }}</p>

    <button type="button" @click="increment">
      Increment
    </button>

    <button type="button" @click="decrement">
      Decrement
    </button>
  </section>
</template>