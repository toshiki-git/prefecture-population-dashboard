export interface PopulationData {
  year: number;
  value: number;
  rate?: number;
}

export interface PopulationCategory {
  label: string;
  data: PopulationData[];
}

export interface PopulationApiResponse {
  message: null | string;
  result: {
    boundaryYear: number;
    data: PopulationCategory[];
  };
}
