import { useQuery } from "@tanstack/react-query";
import { UserService } from "@services/UserService";
import { queryKeys } from "@services/queryKeyStore";

const listUsers = () => UserService.get("/").then((res) => res.data);

const useListUsers = () => {
  return useQuery({
    queryKey: queryKeys.users.list._def,
    queryFn: () => listUsers(),
  });
};

export default useListUsers;
