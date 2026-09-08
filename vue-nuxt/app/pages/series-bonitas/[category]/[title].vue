<script setup lang="ts">
const route = useRoute()

const category = String(route.params.category)
const title = String(route.params.title)

const validCategories = ['aventuras']

if (!validCategories.includes(category)) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Categoría no encontrada',
  })
}

const formatSlug = (slug: string) => {
  const lowercaseWords = ['de', 'del', 'la', 'el', 'y']

  return slug
    .split('-')
    .map((word, index) => {
      if (index > 0 && lowercaseWords.includes(word)) {
        return word
      }

      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

const categoryName = formatSlug(category)
const titleName = formatSlug(title)

useSeoMeta({
  title: `${titleName} - ${categoryName}`,
  description: `Información sobre ${titleName} de la categoría ${categoryName}.`,
})
</script>

<template>
  <main class="p-6">
    <TheTitle>Detalle de la serie</TheTitle>

    <p class="mt-4">
      Categoría: {{ route.params.category }}
    </p>

    <p class="mt-2">
      Título: {{ route.params.title }}
    </p>
  </main>
</template>