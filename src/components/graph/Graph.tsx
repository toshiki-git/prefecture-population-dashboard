"use client";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, { useRef } from "react";
import { GraphData } from "@/types/GraphTypes";

const Graph = ({ dataList }: { dataList: GraphData[] }) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  if (dataList.length === 0) {
    return <div>都道府県を選択してください。</div>;
  }
  const seriesData: Highcharts.SeriesOptionsType[] = [];

  for (const data of dataList) {
    seriesData.push({
      name: data.prefName,
      type: "line",
      data: data.data.map((item) => item.value),
    });
  }

  const categories: string[] = dataList
    .map((data) => data.data.map((item) => String(item.year)))
    .flat();

  const options: Highcharts.Options = {
    title: {
      text: dataList[0].label,
    },
    xAxis: {
      title: {
        text: "年",
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: "人口",
      },
    },
    series: seriesData,
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
};

export default Graph;
