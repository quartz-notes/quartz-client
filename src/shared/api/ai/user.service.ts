import { getRefreshToken } from "./jwt.service";

export default async function getUser() {
  const refreshToken = getRefreshToken();

  const response = await fetch(
    `http://localhost:8080/api/ai/auth/refresh?refreshToken=${refreshToken}`,
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
