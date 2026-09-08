<script setup lang="ts">
const {
  count,
  increment,
  decrement,
  reset,
} = useCounter()
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

    <BaseButton
      v-if="count > 0"
      @click="reset"
    >
      Reset
    </BaseButton>
  </section>
</template>