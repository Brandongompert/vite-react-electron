import useApi from "@hooks/useApi";

const useDeleteUserById = async (userId: number) => {
  return useApi({
    method: "delete",
    url: `http://localhost:3001/users/${userId}`,
    headers: {
      "Content-Type": "application/json",
    },
    cache: userId,
  });
};

export default useDeleteUserById;
