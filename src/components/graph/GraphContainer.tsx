import CategorySelector from "@/components/graph/CategorySelector";
import Graph from "@/components/graph/Graph";
import { GraphData } from "@/types/GraphTypes";
import SubTitle from "@/components/common/SubTitle";

interface GraphContainerProps {
  graphData: GraphData[];
  categories: string[];
  onCategoryChange: (category: string) => void;
}

const GraphContainer = ({
  graphData,
  categories,
  onCategoryChange,
}: GraphContainerProps) => {
  return (
    <div>
      <SubTitle subTitle="人口推移グラフ" />
      <Graph dataList={graphData} />
      <CategorySelector categories={categories} onChange={onCategoryChange} />
    </div>
  );
};

export default GraphContainer;
