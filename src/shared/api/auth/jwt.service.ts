import Cookies from "js-cookie";

export function getRefreshToken() {
  return Cookies.get("refresh_token");
}

export function getAccessToken() {
  return Cookies.get("access_token");
}

export function removeTokens() {
  Cookies.remove("refresh_token");
  Cookies.remove("access_token");
}

export function setRefreshToken(token: string) {
  Cookies.set("refresh_token", token, { expires: 14 });
}

export function setAccessToken(token: string) {
  Cookies.set("access_token", token);
}
