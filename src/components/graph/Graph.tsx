import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, { useRef } from "react";
import { GraphData } from "@/types/GraphTypes";
import { transformDataForHighcharts } from "@/utils/transformDataForHighcharts";
import style from "./Graph.module.css";

const Graph = ({ dataList }: { dataList: GraphData[] }) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const options: Highcharts.Options = transformDataForHighcharts(dataList);

  if (dataList.length === 0) {
    return <div className={style.message}>都道府県を選択してください。</div>;
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
};

export default Graph;
