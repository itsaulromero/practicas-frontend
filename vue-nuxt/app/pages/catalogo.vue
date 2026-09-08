<script setup lang="ts">
import { products } from '~/data/mock'

const counterStore = useCounterStore()
</script>

<template>
  <main class="mx-auto max-w-6xl p-6 font-sans">
    <TheTitle>Product Catalog</TheTitle>

    <p class="mt-2 text-secondary">
      Global counter: {{ counterStore.count }}
    </p>

    <NuxtLink
      class="btn inline-block"
      to="/home"
    >
      Go to home
    </NuxtLink>

    <section
      class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      aria-label="Product catalog"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :description="product.description"
        :price="product.price"
        :button="product.button"
      />
    </section>
  </main>
</template>