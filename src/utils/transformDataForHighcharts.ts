import Highcharts from "highcharts";
import { GraphData } from "@/types/GraphTypes";

export const transformDataForHighcharts = (
  dataList: GraphData[]
): Highcharts.Options => {
  const seriesData: Highcharts.SeriesLineOptions[] = [];
  const uniqueYears = new Set<string>();

  dataList.forEach((data) => {
    const lineData: number[] = [];

    data.data.forEach((item) => {
      lineData.push(item.value);
      uniqueYears.add(item.year.toString());
    });

    seriesData.push({
      name: data.prefName,
      type: "line",
      data: lineData,
    });
  });

  const yearLabels: string[] = Array.from(uniqueYears).sort();

  const options: Highcharts.Options = {
    title: {
      text: dataList[0]?.label || "グラフ",
    },
    xAxis: {
      categories: yearLabels,
      title: {
        text: "年",
      },
    },
    yAxis: {
      title: {
        text: "人口",
      },
    },
    series: seriesData,
  };

  return options;
};
