import { Plugin } from "vue-demi";
import { install } from "./pagination.plugin";
export * from "./vue3/pagination.composable";

export default {
  install,   
} as Plugin;