import useServerStore from "@/app/stores/server.store";

export default async function generateBlocks(prompt: string) {
  useServerStore.setState({ state: "generating" });
  try {
    const response = await fetch(
      `http://localhost:8080/api/ai/parse?prompt=${prompt}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
    const data = await response.json();
    return await data;
  } catch (e) {
    console.log(e);
  } finally {
    useServerStore.setState({ state: "idle" });
  }
}
