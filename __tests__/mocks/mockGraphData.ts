import { GraphData } from "@/types/GraphTypes";

const mockGraphData: GraphData[] = [
  {
    prefName: "東京都",
    label: "総人口",
    data: [
      { year: 2020, value: 1000 },
      { year: 2021, value: 1100 },
    ],
  },
  {
    prefName: "大阪府",
    label: "総人口",
    data: [
      { year: 2020, value: 900 },
      { year: 2021, value: 950 },
    ],
  },
];

export default mockGraphData;
