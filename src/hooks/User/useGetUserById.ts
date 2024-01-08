import { useQuery } from "@tanstack/react-query";
import { UserService } from "@services/UserService";
import { queryKeys } from "@services/queryKeyStore";

const getUserById = (userId: number) =>
  UserService.get(`/${userId}`).then((res) => res.data);

const useGetUserById = (userId: number) => {
  return useQuery({
    queryKey: [queryKeys.users.detail(userId)],
    queryFn: () => getUserById(userId),
  });
};

export default useGetUserById;
