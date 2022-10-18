import { ref, Ref, onMounted, watch } from "vue-demi";
import { PaginateInstance } from "../pagination";
import { IPagination } from "../pagination.interface";

let pagination: Ref<IPagination.pagination> = ref({
  page: 1,
  pageCount: 0,
  totalItem: 0,
  startItem: 0,
  endItem: 0,
  pageShow: 10,
});

export function usePaginate(
  paginationSettings: IPagination.paginationProperties = {
    page: 1,
    pageCount: 0,
    pageShow: 10,
    totalItem: 0,
  },
  callbackPageFunc: Function
): IPagination.paginationComposable {
  const callFunction = () => {    
    if (callbackPageFunc) {      
      callbackPageFunc();
    }
  };

  watch([() => pagination.value.page, () => pagination.value.pageShow], () => {    
    setStartAndEndItem();
    callFunction();
  });

  watch([() => pagination.value.totalItem, () => pagination.value.pageShow], ([newTotalItem, newPageShow]) => {
    pagination.value.pageCount = Math.ceil(newTotalItem / newPageShow);
  });

  const setStartAndEndItem = () => {
    pagination.value.startItem = (pagination.value.page - 1) * pagination.value.pageShow;
    pagination.value.endItem = (pagination.value.page + 1) * pagination.value.pageShow;
  };

  const setupSettings = () => {
    const paginateSettings = new PaginateInstance();
    pagination.value = { ...paginateSettings.pagination, ...paginationSettings };    
    setStartAndEndItem();
    callFunction();
  };

  const goToPage = (page: number) => {
    if (page > 0 && page <= pagination.value.pageCount) {
    pagination.value.page = page;
  }
  };

  const prevPage = (): void => {
    if (pagination.value.page - 1 >= 0) {
      pagination.value.page -= 1;
    }
  };

  const nextPage = (): void => {
    if (pagination.value.page + 1 <= pagination.value.pageCount) {
      pagination.value.page += 1;
    }
  };

  onMounted(() => {    
    setupSettings();
  });

  return {
    pagination,
    nextPage,
    prevPage,
    goToPage,
  };
}
