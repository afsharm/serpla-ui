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
