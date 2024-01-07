<script setup lang="ts">
import type {IProduct} from "~/interfaces";
const selectedCatID = ref(1)


const {data: products, pending, refresh, error} = useCustomFetch<IProduct[]>('/products', {
  lazy: true,
  // server: false,
  key: 'products',
  watch: [selectedCatID],
  // query: {
  //   id: '2'
  // },
  transform: (hh: IProduct[]) => {
    return hh?.filter((product: any) => product?.category?.id === selectedCatID.value)
  }
})

// const clothes = computed(() => products?.value?.filter((product: any) => product?.category?.id === selectedCatID.value ))

// watch(() => selectedCatID.value, (val) => {
//   refresh()
// })

</script>
<template>
  <div>
    <h1>INDEX</h1>
    <nuxt-link to="/products">Products</nuxt-link>
    <select v-model="selectedCatID">
      <option :value="1">Kiyimlar</option>
      <option :value="2">Elektronikalar</option>
    </select>
    <div v-if="pending">
      loading...
    </div>
    <div v-else-if="products">
      <ol>
        <li v-for="(item, idx) in products" :key="idx">
<!--          <pre>{{ item }}</pre>-->
          <img :src="item?.images?.at(0)">
        </li>
      </ol>
    </div>
    <div v-else>
      <pre>Error: {{ error }}</pre>
    </div>
  </div>
</template>
