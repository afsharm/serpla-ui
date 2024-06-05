export interface Provider {
  id: number;
  name: string;
  serviceId: number;
  serviceName: string;
}

export interface ProviderCreate {
  name: string | null;
  serviceId: number | null;
}

export interface ProviderUpdate {
  id: number;
  name: string | null;
}

export interface ProviderPagingQuery {
  criteria: string | null;
  pageNumber: number;
  pageSize: number;
  sortField: string | null;
  sortOrder: sortOrderType | null;
}

type sortOrderType = 'Asc' | 'Desc';

export interface ProviderQueryResult {
  items: Provider[];
  totalCount: number;
}
