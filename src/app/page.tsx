"use server";
import Main from "@/components/Main";
import { fetchPrefectures } from "@/api/fetchPrefectures";

export default async function Home() {
  const res = await fetchPrefectures();
  return (
    <main>
      <Main prefs={res.result} />
    </main>
  );
}
