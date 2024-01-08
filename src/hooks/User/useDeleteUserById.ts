import { UserService } from "@services/UserService";
import { queryKeys } from "@services/queryKeyStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteUser = (userId: number) =>
  UserService.delete(`/${userId}`).then((res) => res.data);

const useDeleteUserById = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId: number) => deleteUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users.list._def });
    },
  });
};

export default useDeleteUserById;
