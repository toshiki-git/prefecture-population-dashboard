import { PrefecturesApiResponse } from "@/types/PrefectureTypes";

const apiKey = process.env.NEXT_PUBLIC_RESAS_API_KEY || "No API Key";
const url = "https://opendata.resas-portal.go.jp/api/v1/prefectures";

export const fetchPrefectures = async (): Promise<PrefecturesApiResponse> => {
  try {
    const response: Response = await fetch(url, {
      method: "GET",
      headers: {
        "X-API-KEY": apiKey,
      },
      cache: "force-cache", //SSG
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data: PrefecturesApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch prefectures:", error);
    throw error;
  }
};
