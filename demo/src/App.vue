<template>
  <div>
    <options></options>
    <div style="display: flex; flex-direction: column;">
      <h1>Current Page is {{pagination.page}}</h1>
      <h1>Page Show Count is {{pagination.pageShow}}</h1>
      <h1>Total Page Count is {{pagination.pageCount}}</h1>
    </div>
    <div @click="prevPage()">Prev Page!</div>
    <div style="display: flex">
      <input type="number" v-model="pageNumber" />
      <div @click="goToPage(pageNumber)">Go to page!</div>
    </div>
    <div @click="nextPage()">Next Page!</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePaginate } from "../../dist/index.esm";

const pageNumber = ref(1);
const { pagination, nextPage, prevPage, goToPage } = usePaginate({ pageShow: 20 }, () => {
  getPage();
});

const getPage = () => {
  pagination.value.totalItem = 207;
  console.log("get page trigged")
};
</script>
