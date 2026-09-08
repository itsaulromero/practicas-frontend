<script setup lang="ts">
import IconGithub from './icons/IconGithub.vue'
import IconInstagram from './icons/IconInstagram.vue'

const socialIcons = [
  {
    name: 'GitHub',
    component: IconGithub,
  },
  {
    name: 'Instagram',
    component: IconInstagram,
  },
]
</script>

<template>
  <nav aria-label="Social media">
    <ul class="flex gap-4">
      <li
        v-for="social in socialIcons"
        :key="social.name"
      >
        <component
          :is="social.component"
          class="text-primary"
        />
      </li>
    </ul>
  </nav>
</template>