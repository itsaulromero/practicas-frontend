<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const counterStore = useCounterStore()

const doubledCount = computed(() => counterStore.count * 2)

const counterMessage = ref('Estás en el valor mínimo')

watch(
  () => counterStore.count,
  (newValue) => {
    if (newValue === 0) {
      counterMessage.value = 'Estás en el valor mínimo'
    } else if (newValue === 10) {
      counterMessage.value = 'Estás en el valor máximo'
    } else {
      counterMessage.value = 'Estás en los parámetros adecuados'
    }
  },
)
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

    <p :class="{ 'text-green-500': counterStore.count === 10 }">
      {{ counterStore.count }}
    </p>

    <BaseButton
      v-if="counterStore.count < 10"
      @click="counterStore.increment"
    >
      Increase
    </BaseButton>

    <BaseButton
      v-if="counterStore.count > 0"
      @click="counterStore.decrement"
    >
      Decrease
    </BaseButton>

    <BaseButton
      v-if="counterStore.count > 0"
      @click="counterStore.reset"
    >
      Reset
    </BaseButton>
  </section>
</template>