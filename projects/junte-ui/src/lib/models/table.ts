export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE = 1;

export interface SearchFilter {
  orderBy?: string;
  q?: string;
  offset?: number;
  page?: number;
  pageSize?: number;
}

export class DefaultSearchFilter implements SearchFilter {

  orderBy?: string;
  q?: string;
  offset?: number;
  page?: number;
  pageSize?: number;

  constructor(defs: any = null) {
    if (!!defs) {
      Object.assign(this, defs);
    }
  }

}
