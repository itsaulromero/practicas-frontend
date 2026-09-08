<script setup lang="ts">
import { computed } from 'vue'

const {
  count,
  increment,
  decrement,
  reset,
} = useCounter()

const doubledCount = computed(() => count.value * 2)
</script>

<template>
  <section>
    <TheTitle>Counter</TheTitle>

    <TheTitle>
      Doubled Counter: {{ doubledCount }}
    </TheTitle>

    <p :class="{ 'text-green-500': count === 10 }">
      {{ count }}
    </p>

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

    <BaseButton
      v-if="count > 0"
      @click="reset"
    >
      Reset
    </BaseButton>
  </section>
</template>