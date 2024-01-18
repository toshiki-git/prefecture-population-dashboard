import { GraphData } from "@/types/GraphTypes";
import CategoryTab from "@/components/graph/CategoryTab";
import Graph from "@/components/graph/Graph";
import SubTitle from "@/components/common/SubTitle";

interface GraphContainerProps {
  graphData: GraphData[];
  categories: string[];
  initialCategories: string;
  onCategoryChange: (category: string) => void;
}

const GraphContainer = ({
  graphData,
  categories,
  initialCategories,
  onCategoryChange,
}: GraphContainerProps) => {
  return (
    <div>
      <SubTitle subTitle="人口推移グラフ" />
      {graphData.length > 0 && (
        <CategoryTab
          categories={categories}
          initialCategories={initialCategories}
          onChange={onCategoryChange}
        />
      )}
      <Graph dataList={graphData} />
    </div>
  );
};

export default GraphContainer;
