"use client";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, { useRef } from "react";
import { GraphData } from "@/types/GraphTypes";

const Graph = ({ dataList }: GraphData) => {
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
      text: "総人口",
    },
    xAxis: {
      title: {
        text: "Year",
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
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
};

export default Graph;
