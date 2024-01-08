import { UserService } from "@services/UserService";
import { queryKeys } from "@services/queryKeyStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateUser = (data: any) =>
  UserService.put(`/${data.id}`, data).then((res) => res.data);

const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string }) => {
      console.log("data in hook:  ", data);
      return updateUser(data);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users.list._def });
      queryClient.invalidateQueries({
        queryKey: queryKeys.users.detail(data.id).queryKey,
      });
    },
  });
};

export default useUpdateUser;
