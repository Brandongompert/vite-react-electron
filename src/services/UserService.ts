import { CreateApiService } from "./Service";

export const UserService = CreateApiService({
  baseURL: "/users",
});
