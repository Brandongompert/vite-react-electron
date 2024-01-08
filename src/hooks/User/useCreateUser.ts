import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "@services/UserService";
import { queryKeys } from "@services/queryKeyStore";

const createUser = (data: any) =>
  UserService.post("/", data).then((res) => res.data);

const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string }) => createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users.list._def });
    },
  });
};

export default useCreateUser;
