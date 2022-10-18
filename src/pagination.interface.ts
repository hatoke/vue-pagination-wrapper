import {Ref} from 'vue-demi';

export namespace IPagination {
  export interface paginationProperties {
    page?: number;
    pageCount?: number;
    pageShow?: number;
    totalItem?: number;
  }

  export interface pagination {
    page: number;
    pageCount: number;
    pageShow: number;
    totalItem: number;
    startItem: number;
    endItem: number;
  }

  export interface paginationComposable {
    pagination: Ref<pagination>,
    nextPage: () => void;
    prevPage: () => void;
    goToPage: (number) => void;
  }
}
