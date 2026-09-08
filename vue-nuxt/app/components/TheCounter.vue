<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const {
  count,
  increment,
  decrement,
  reset,
} = useCounter()

const doubledCount = computed(() => count.value * 2)

const counterMessage = ref('Estás en el valor mínimo')

watch(count, (newValue) => {
  if (newValue === 0) {
    counterMessage.value = 'Estás en el valor mínimo'
  } else if (newValue === 10) {
    counterMessage.value = 'Estás en el valor máximo'
  } else {
    counterMessage.value = 'Estás en los parámetros adecuados'
  }
})
</script>

<template>
  <section>
    <TheTitle>Counter</TheTitle>

    <TheTitle>
      Doubled Counter: {{ doubledCount }}
    </TheTitle>

    <TheTitle>
      {{ counterMessage }}
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