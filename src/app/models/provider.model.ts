export interface Provider {
  id: number;
  name: string;
}

export interface ProviderCreate {
  name: string | null;
}

export interface ProviderUpdate {
  id: number;
  name: string | null;
}
