import useApi from "@hooks/useApi";

const useUpdateUser = async (userData: any) => {
  return useApi({
    method: "get",
    url: `http://localhost:3001/users/${userData.id}`,
    headers: {
      "Content-Type": "application/json",
    },
    cache: userData,
    body: userData,
  });
};

export default useUpdateUser;
