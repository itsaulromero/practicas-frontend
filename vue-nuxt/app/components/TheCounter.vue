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

    <BaseButton
      v-if="count < 10"
      @click="increment"
    >
      Increase
    </BaseButton>

    <BaseButton
      v-if="count > 0"
      @click="decrement"
    >
      Decrease
    </BaseButton>
  </section>
</template>