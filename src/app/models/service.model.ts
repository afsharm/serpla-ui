export interface Service {
  id: number;
  name: string;
}

export interface ServiceCreate {
  name: string | null;
}

export interface ServiceUpdate {
  id: number;
  name: string | null;
}
