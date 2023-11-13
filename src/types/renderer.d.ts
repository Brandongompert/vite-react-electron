import { api } from "../electron/preload.ts";

declare global {
  interface Window {
    api: typeof api;
  }
}
