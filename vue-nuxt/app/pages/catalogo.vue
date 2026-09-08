<script setup lang="ts">
import { products } from '~/data/mock'
</script>

<template>
  <main class="mx-auto max-w-6xl p-6 font-sans">
    <TheTitle>Product Catalog</TheTitle>

    <NuxtLink
      class="mt-6 inline-block rounded-md bg-primary px-4 py-2 font-medium text-white hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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