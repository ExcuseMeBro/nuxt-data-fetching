<script setup lang="ts">
const {data: stateProducts} = useNuxtData('products')

</script>
<template>
  <div>
    <h1>Products</h1>
    <nuxt-link to="/">Index</nuxt-link>
    <pre>
      {{ stateProducts }}
    </pre>
  </div>
</template>