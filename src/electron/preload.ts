// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

const api = {
  ping: () => ipcRenderer.invoke("ping"),
  sendMessage: (message: string) => ipcRenderer.invoke("message", message),
};

contextBridge.exposeInMainWorld("api", api);
