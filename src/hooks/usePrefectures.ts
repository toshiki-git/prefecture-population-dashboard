import { useState, useEffect } from "react";
import { fetchPrefectures } from "@/api/fetchPrefectures";
import { Prefecture } from "@/types/PrefectureTypes";

const usePrefectures = () => {
  const [prefs, setPrefs] = useState<Prefecture[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getPrefectures = async () => {
      try {
        const response = await fetchPrefectures();
        setPrefs(response.result);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("Unknown error occurred"));
        }
        setLoading(false);
      }
    };

    getPrefectures();
  }, []);

  return { prefs, loading, error };
};

export default usePrefectures;
