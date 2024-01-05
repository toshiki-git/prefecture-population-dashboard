import CategorySelector from "@/components/graph/CategorySelector";
import Graph from "@/components/graph/Graph";
import { GraphData } from "@/types/GraphTypes";

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
      <Graph dataList={graphData} />
      <CategorySelector categories={categories} onChange={onCategoryChange} />
    </div>
  );
};

export default GraphContainer;
