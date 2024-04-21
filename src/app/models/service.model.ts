export interface Service {
  id: number;
  name: string;
}

export interface ServiceCreate {
  name: string | null;
}
