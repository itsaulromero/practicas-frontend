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

    <button
      v-if="count < 10"
      type="button"
      @click="increment"
    >
      Increase
    </button>

    <button
      v-if="count > 0"
      type="button"
      @click="decrement"
    >
      Decrease
    </button>
  </section>
</template>