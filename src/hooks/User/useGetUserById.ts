import useApi from "@hooks/useApi";

const useGetUserById = (userId: number) => {
  return useApi({
    method: "get",
    url: `http://localhost:3001/users/${userId}`,
    headers: {
      "Content-Type": "application/json",
    },
    cache: userId,
  });
};

export default useGetUserById;
