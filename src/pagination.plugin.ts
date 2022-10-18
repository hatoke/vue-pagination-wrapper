import { App } from "vue-demi";
import Pagination from "./vue2/pagination.vue";
import { getCurrentInstance } from "vue-demi";

export function install(app: App, args): void {
  const pagination = new Pagination();
  pagination.app = app;  

  app.config.globalProperties.$pagination = pagination;
}
