<script setup lang="ts">
import { ref } from 'vue'

const greeting = ref('')

const handleGreeting = () => {
  greeting.value = 'Hello from the child component!'
}
</script>

<template>
  <section>
    <TheTitle>Emit Example</TheTitle>

    <ChildComponent @greet="handleGreeting" />

    <p v-if="greeting">
      {{ greeting }}
    </p>
  </section>
</template>