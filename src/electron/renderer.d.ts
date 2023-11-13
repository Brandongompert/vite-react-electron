export interface IAPI {
  ping: () => Promise<void>;
  sendMessage: (message: string) => Promise<void>;
}
declare global {
  interface Window {
    api: IAPI;
  }
}
