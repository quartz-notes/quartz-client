import { getAccessToken } from "./jwt.service";

export default async function getNotes() {
  const accessToken = getAccessToken();

  const response = await fetch(
    `http://localhost:8080/api/ai/auth/refresh?accessToken=${accessToken}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  );

  const data = await response.json();

  return data;
}
