import { useState, useEffect } from "react";
import { fetchPopulation } from "@/api/fetchPopulation";
import { Prefecture } from "@/types/PrefectureTypes";
import { GraphData } from "@/types/GraphTypes";

const useGraphData = (
  selectedPrefs: number[],
  prefs: Prefecture[],
  label: string
) => {
  const [graphData, setGraphData] = useState<GraphData[]>([]);
  const [cachedData, setCachedData] = useState<{ [key: string]: GraphData }>(
    {}
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getPopulationData = async () => {
      try {
        const dataPromises = selectedPrefs.map(async (prefCode) => {
          const cacheKey = `${prefCode}-${label}`;
          if (cachedData[cacheKey]) {
            return cachedData[cacheKey];
          }

          const response = await fetchPopulation(String(prefCode));
          const pref = prefs.find((p) => p.prefCode === prefCode);
          const matchedData = response.result.data.find(
            (d) => d.label === label
          );
          const newData = {
            prefName: pref ? pref.prefName : "non-existent",
            label: label,
            data: matchedData ? matchedData.data : [],
          };

          setCachedData((prev) => ({ ...prev, [cacheKey]: newData }));
          return newData;
        });

        const newDataArray = await Promise.all(dataPromises);
        setGraphData(newDataArray);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("Unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    getPopulationData();
  }, [selectedPrefs, prefs, label, cachedData]);

  return { graphData, loading, error };
};

export default useGraphData;
