import { isBrowser } from "../utils";
// import Cookies from "universal-cookie";
// const cookies = new Cookies();

const TOKEN_NAME = "_ut.nft";
export const saveToken = (token: string): void =>
  isBrowser && token ? localStorage.setItem(TOKEN_NAME, token) : undefined;
export const getToken = (): string | null =>
  isBrowser ? localStorage.getItem(TOKEN_NAME) : null;
export const removeToken = (): void =>
  isBrowser ? localStorage.removeItem(TOKEN_NAME) : undefined;
