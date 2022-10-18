import { usePaginate } from "../vue3/pagination.composable";
import { getCurrentInstance } from "vue-demi";

function pagination() {}

pagination.prototype.state = function () {
  const currentInstance = getCurrentInstance();
  console.log(currentInstance);
};

export default pagination
