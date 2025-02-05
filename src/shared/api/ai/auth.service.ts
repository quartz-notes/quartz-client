import {
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "./jwt.service";

export async function login(email: string, password: string) {
  const response = await fetch(
    `http://localhost:8080/api/ai/auth/login?email=${email}&password=${password}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  );

  const data = await response.json();

  setAccessToken(data.accessToken);
  setRefreshToken(data.refreshToken);
}

export async function signup(email: string, name: string, password: string) {
  const response = await fetch(
    `http://localhost:8080/api/ai/auth/signup?email=${email}&name=${name}&password=${password}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  );

  const data = await response.json();

  setAccessToken(data.accessToken);
  setRefreshToken(data.refreshToken);
}

export async function updateTokens() {
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

  setAccessToken(data.accessToken);
  setRefreshToken(data.refreshToken);
}
