import { IPagination } from "./pagination.interface";
export class PaginateInstance {
  pagination;
  constructor() {
    this.pagination = {
      page: 1,
      pageCount: 0,
      totalItem: 0,
      startItem: 0,
      endItem: 0,
      pageShow: 10,
    };
  }

  initPaginate() {    
    return this.pagination;
  }
}
