<template>
  <span>Options Api Usage Example</span>
</template>

<script>
import usePaginate from '../../dist/index.esm'
export default {
  name: "options",
  pagination: {
    
  },
  methods: {
    getList() {
      console.log("get list ");
    },
  },
  mounted() {
    console.log(this.$pagination)
  },
};
</script>
