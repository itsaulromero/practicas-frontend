<script setup lang="ts">
import type { ProductsResponse } from '~/types/product'
useSeoMeta({
  title: 'Product Catalog - Nuxt Vue Exercises',
  description: 'Catálogo de productos obtenidos desde una API externa.',
})
definePageMeta({
  layout: 'catalogo',
})

const counterStore = useCounterStore()

const { data, pending, error, refresh } = await useFetch<ProductsResponse>(
  'https://dummyjson.com/products?limit=12',
)

const products = computed(() => data.value?.products ?? [])
</script>

<template>
  <main class="mx-auto max-w-6xl p-6 font-sans">
    <TheTitle>Product Catalog</TheTitle>

    <p class="mt-2 text-secondary">
      Global counter: {{ counterStore.count }}
    </p>

    <NuxtLink
      class="btn mt-4 inline-block"
      to="/home"
    >
      Go to home
    </NuxtLink>

    <BaseButton
      class="ml-4"
      @click="refresh"
    >
      Recargar
    </BaseButton>

    <p
      v-if="pending"
      class="mt-6"
    >
      Cargando productos...
    </p>

    <p
      v-else-if="error"
      class="mt-6"
    >
      No se pudieron cargar los productos.
    </p>

    <section
      v-else
      class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      aria-label="Product catalog"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :image="product.thumbnail"
        :title="product.title"
        :description="product.description"
        :price="product.price"
        :button="product.category"
      />
    </section>
  </main>
</template>