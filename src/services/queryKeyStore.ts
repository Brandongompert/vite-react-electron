import { createQueryKeyStore } from "@lukemorales/query-key-factory";

export const queryKeys = createQueryKeyStore({
  users: {
    detail: (userId: number) => ({
      queryKey: ["users", userId],
    }),
    list: (data) => ({
      queryKey: ["list-users", data],
    }),
  },
});
