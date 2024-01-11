import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { GraphData } from "@/types/GraphTypes";
import { transformDataForHighcharts } from "@/utils/transformDataForHighcharts";
import style from "./Graph.module.css";

const Graph = ({ dataList }: { dataList: GraphData[] }) => {
  const options: Highcharts.Options = transformDataForHighcharts(dataList);

  if (dataList.length === 0) {
    return <div className={style.message}>都道府県を選択してください。</div>;
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Graph;
