import { PopulationApiResponse } from "@/types/PopulationTypes";

const apiKey = process.env.NEXT_PUBLIC_RESAS_API_KEY || "No API Key";
const url =
  "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=";

export const fetchPopulation = async (
  prefCode: string
): Promise<PopulationApiResponse> => {
  try {
    const response: Response = await fetch(url + prefCode, {
      method: "GET",
      headers: {
        "X-API-KEY": apiKey,
      },
      cache: "force-cache", //SSG
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data: PopulationApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch prefectures:", error);
    throw error;
  }
};
