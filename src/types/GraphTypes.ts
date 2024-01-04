import { PopulationData } from "@/types/PopulationTypes";

export interface GraphData {
  dataList: {
    prefName: string;
    data: PopulationData[];
  }[];
}
