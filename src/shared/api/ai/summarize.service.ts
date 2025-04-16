import useServerStore from "@/app/stores/server.store";

export default async function summarize(prompt: string) {
  useServerStore.setState({ state: "generating" });

  const response = await fetch(
    `https://quartz-server-python.onrender.com/api/ai/summarize?prompt=${prompt}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  );

  const data = await response.json();

  useServerStore.setState({ state: "idle" });

  return await data;
}
