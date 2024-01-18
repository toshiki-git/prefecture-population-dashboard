"use client";
import { useState } from "react";
import useGraphData from "@/hooks/useGraphData";
import PrefectureList from "@/components/prefectures/PrefectureList";
import GraphContainer from "@/components/graph/GraphContainer";
import Title from "@/components/common/Title";
import { Prefecture } from "@/types/PrefectureTypes";

interface props {
  prefs: Prefecture[];
}

const Main = ({ prefs }: props) => {
  const [selectedPrefs, setSelectedPrefs] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("総人口");
  const { graphData } = useGraphData(selectedPrefs, prefs, selectedCategory);
  const categories: string[] = [
    "総人口",
    "年少人口",
    "生産年齢人口",
    "老年人口",
  ];

  return (
    <div>
      <Title title="都道府県別人口推移" />
      <PrefectureList
        setSelectedPrefs={setSelectedPrefs}
        selectedPrefs={selectedPrefs}
        prefs={prefs}
      />
      <GraphContainer
        graphData={graphData}
        categories={categories}
        onCategoryChange={setSelectedCategory}
      />
    </div>
  );
};

export default Main;
